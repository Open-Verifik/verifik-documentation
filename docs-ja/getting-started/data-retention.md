---
id: data-retention
title: データ保持
description: Verifik が文書画像、抽出フィールド、顔画像を保持、マスク、削除する方法。
slug: /getting-started/data-retention
---

# データ保持

アカウント、プロジェクト、プロジェクトフローの設定が、文書画像、保存された抽出フィールド、顔画像、文書ライブネス画像を Verifik がどのくらい保持するかを決めます。ポリシーは新しいレコードが作られたときに刻まれます。その後の変更は、すでに存在するレコードをそのままにします。

画像を削除しても、請求記録、クレジットの引き落とし、利用履歴は残ります。

## モード

| モード | 効果 |
| --- | --- |
| `store` | レコードを保持します。`retentionHours` が 0 より大きいとその時間の後に削除対象になります。省略すると期限なく保持します。`retentionHours` は SmartEnroll でも有効です。 |
| `ephemeral` | Webhook があるときは保持時間のあいだ残し、その後に削除対象になります。 |
| `none` | Webhook の保持時間が終わったあと保持しません。このモードの顔画像は、文書とセルフィーの比較ができるよう保持時間の終わりまで残り、その後に削除されます。このモードの文書ライブネス画像は保存されません。 |

## 適用される種類

| キー | 対象 |
| --- | --- |
| `documentImages` | 文書検証の表面と裏面の写真。 |
| `ocrExtraction` | その検証に保存された抽出結果。 |
| `faceImages` | セルフィーと文書の顔画像。 |
| `documentLiveness` | 文書ライブネス画像。`none` では保存されません。 |

ポリシーのモードは、独自のモードを持たない適用種類すべてに使われます。`livenessResults` と `apiResponseLogs` は拒否されます。

## このポリシーの外

- Smart Access が再訪した人物を照合する生体テンプレートと顔コレクション
- Human Auth の暗号化された資格情報、ゼロ知識の生成物、ライブネス動画
- Human Auth の資格情報の保存場所
- 保持スタンプが存在する前に作られた文書検証と本人画像

ホストされた文書画像は非公開です。`url` と `backUrl` は 1 時間で期限が切れる `https` リンクです。`data:` URI ではありません。

## 優先順位

より厳しい設定は、下の層で緩めることができません。`none` は `ephemeral` より厳しく、`ephemeral` は `store` より厳しいです。

1. **アカウント。** 既定のポリシーです。設定がなければ、適用される種類はすべて期限のない `store` で、Webhook の保持は 24 時間です。
2. **プロジェクト。** `dataRetention` は、新しいモードが同じかより厳しいときに、アカウントのそのフィールドを置き換えます。
3. **フロー。** プロジェクトに対して同じ規則です。

プロジェクトのないスキャンはアカウントのポリシーを使います。既定値は `store` です。

## Webhook の保持

`webhookHoldHours` は 24 から 72 の整数です。既定値は 24 です。

SmartEnroll では、`none` と `ephemeral` の画像は `onboarding_app_registration_completed` または `onboarding_app_registration_completed_without_kyc` が配信されたあとだけ削除対象になります。削除時刻は、その配信と保持の終了のうち遅い方です。同じ登録のそれより前の Webhook は削除を始めません。

保存された Webhook 本文は配信後に伏せられます。

## 削除

| 操作 | フィールド |
| --- | --- |
| 除去 | 画像ファイル。`url`、`backUrl`、ファイル一覧が空になります。 |
| マスク | 行に残る個人フィールドと保存された抽出結果。末尾 4 文字を残します。 |
| 残す | 利用回数のための検証行（状態、種類、`createdAt`）。 |

スキャンの HTTP 応答には抽出結果の全体があります。保存された値だけがマスクされます。請求と利用履歴は残り、引き落としは戻りません。

## 手動消去

`allowManualDelete` が true のとき:

```
DELETE https://api.verifik.co/v2/document-validations/{id}/files
DELETE https://api.verifik.co/v2/app-registrations/{id}/data
POST https://api.verifik.co/v2/data-retention/erase
```

他の API と同じ認証ヘッダーが必要です。`allowManualDelete` が false のとき、呼び出しは拒否されます。

## 実行のタイミング

レコードは `retention.purgeAfter` で削除対象になります。SmartEnroll の `none` または `ephemeral` の画像では、終端 Webhook の配信と `webhookHoldHours` の終了のうち遅い方です。スケジュールされた削除は、対象レコードをおよそ 15 分ごとに取り除きます。

ポリシーは保存されたあとに作られたレコードに適用されます。すでにあるレコードは自分のスタンプを保ちます。

## Smart Access と Human Auth

`faceImages` が `none` のとき、セルフィーは文書とセルフィーの比較のため保持時間の終わりまで残ります。Smart Access の生体テンプレートは残ります。`documentLiveness` が `none` のとき、その画像は保存されません。ライブネス動画、ゼロ知識の生成物、Human Auth の暗号化された資格情報はそれぞれの規則に従います。

## `dataRetention` オブジェクト

`PUT /v3/projects/{id}` で送ります。`null` はアカウントのポリシーを再び継承します。プロジェクトはアカウントより緩いモードを設定できません。フローの同じ形は、同じかより厳しいときにプロジェクトを置き換えます。

```json
{
  "dataRetention": {
    "mode": "none",
    "webhookHoldHours": 24,
    "allowManualDelete": true,
    "types": {
      "documentImages": { "mode": "none" },
      "ocrExtraction": { "mode": "none" },
      "faceImages": { "mode": "store", "retentionHours": 72 },
      "documentLiveness": { "mode": "none" }
    }
  }
}
```
