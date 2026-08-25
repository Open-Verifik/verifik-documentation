---
id: smart-batch
title: SmartBatch
description: カタログ照会をバッチで実行します — バックグラウンドの Async、またはステップ連鎖の Sync。ai.verifik.co または async.verifik.co
slug: /smart-batch
---

import { Layers, Zap, RefreshCw, Bell, FileSpreadsheet, Globe } from 'lucide-react';

# SmartBatch

**SmartBatch** は、1件または複数のカタログ照会をバッチとして実行します。エンドポイントを選び、入力フィールドをマッピングし、バッチの実行方法を決めます。Smart-Agent UI（[ai.verifik.co](https://ai.verifik.co)）または API（[async.verifik.co](https://async.verifik.co)）から利用します。

**バッチ設定**は再利用可能なレシピです。名前、国、ステップ（カタログ機能）、マージ戦略、実行モード、任意の通知が含まれます。ファイルをアップロードするか照会をキューに入れるたびに、SmartBatch はそのレシピからバッチを作成します。

## 概要

SmartBatch は、すでに使っている SmartCheck カタログの上にあります。Sync は現在のリクエストで待ちます。Async はすぐに応答し、タブを閉じたあとも処理を続けます。設定が **Async** のとき、ファイルバッチと1行の API 呼び出しは同じワーカーを共有します。

バックエンドからカタログパスをキューとして呼ぶ場合は、[エンドポイントをキューとして呼び出す (async)](/verifik-ja/smart-batch/async-queue) を見てください。

## 主な機能

<div className="row">
  <div className="col col--4">
    <div className="card">
      <div className="card__header">
        <h3><Zap size={20} style={{display: 'inline', marginRight: '8px'}} />Async</h3>
      </div>
      <div className="card__body">
        <p>バックグラウンドで実行します。このタブを閉じてもバッチは続きます。</p>
      </div>
    </div>
  </div>
  <div className="col col--4">
    <div className="card">
      <div className="card__header">
        <h3><RefreshCw size={20} style={{display: 'inline', marginRight: '8px'}} />Sync</h3>
      </div>
      <div className="card__body">
        <p>サーバー上でステップを連鎖実行します。後続ステップが前の結果を使う場合に適します。</p>
      </div>
    </div>
  </div>
  <div className="col col--4">
    <div className="card">
      <div className="card__header">
        <h3><Layers size={20} style={{display: 'inline', marginRight: '8px'}} />カタログステップ</h3>
      </div>
      <div className="card__body">
        <p>カタログ URL がある SmartCheck エンドポイントを検証ステップとして追加します。</p>
      </div>
    </div>
  </div>
</div>

<div className="row">
  <div className="col col--4">
    <div className="card">
      <div className="card__header">
        <h3><Bell size={20} style={{display: 'inline', marginRight: '8px'}} />通知</h3>
      </div>
      <div className="card__body">
        <p>Webhook URL と完了メールは設定に保存されます。クエリパラメータではありません。</p>
      </div>
    </div>
  </div>
  <div className="col col--4">
    <div className="card">
      <div className="card__header">
        <h3><FileSpreadsheet size={20} style={{display: 'inline', marginRight: '8px'}} />ファイルまたは API</h3>
      </div>
      <div className="card__body">
        <p>スプレッドシートをアップロードするか、<code>type=queue</code> で1行をキューに入れます。どちらも同じ Async ワーカーを再利用します。</p>
      </div>
    </div>
  </div>
  <div className="col col--4">
    <div className="card">
      <div className="card__header">
        <h3><Globe size={20} style={{display: 'inline', marginRight: '8px'}} />ダッシュボード</h3>
      </div>
      <div className="card__body">
        <p>バッチダッシュボードで進捗、試行、行あたりのコスト、リンク済み Webhook を確認します。</p>
      </div>
    </div>
  </div>
</div>

## Async vs Sync

ウィザードとダッシュボードは製品ラベル **Async** と **Sync** を使います。

| 実行モード | 動作 | 使うとき |
| --- | --- | --- |
| **Async**（デフォルト） | バッチはバックグラウンドで実行されます。Smart-Agent のタブを閉じても構いません。ワーカーが各行を取得し、機能 URL を呼び出し、試行を記録します。 | 即時応答の照会、大きなファイル、Webhook フロー。 |
| **Sync** | サーバーがステップを連鎖実行し、各結果を待ちます。後続ステップは前の出力を使えます。 | ステップ 2 がステップ 1 に依存する多段レシピ。 |

クレジットは機能が実際に実行されたときに課金されます（Async はワーカー呼び出し、Sync はステップ呼び出し）。行をキューに入れた時点では課金されません。

:::note API の `type` 値
`async.verifik.co` では `type` を省略するか `type=sync` を送って結果を待ちます。`type=queue` を送ってキューに入れます。UI から `queue` や `featureRunner` を渡す必要はありません。
:::

## ai.verifik.co で設定を作成する

[https://ai.verifik.co](https://ai.verifik.co) を開き、**Smart Batch** で **作成** を選びます。

### 1. 基本情報

設定名、説明、国を入力します。**実行モード** を選びます。

- **Async** — バックグラウンドで実行します。このタブを閉じてもバッチは続きます。
- **Sync** — サーバー上でステップを連鎖実行します。後続ステップが前の結果を使う場合に適します。

デフォルトは Async です。

### 2. エンドポイントを選択

カタログを検索し、必要な検証ステップを追加します。各ステップは URL 付きの SmartCheck 機能です（身分、加入、車両など）。カタログ URL がない機能（passwordless、PDF ジェネレーター）はバッチステップとして実行できません。

### 3. パラメータを確認

各ステップの必須パラメータを確認します。これらのフィールドは、アップロードしたファイルヘッダー（または1行をキューに入れるときの API `inputData`）からマッピングされます。

### 4. 確認と作成

概要を確認します。必要なら **通知** を開きます。

- **Webhook URL** — 行とバッチ完了イベントをこのアドレスに POST します。続行する前に URL をテストしてください。
- **完了時のメール** — バッチ終了時にメッセージを受け取る任意のアドレスです。

設定を保存します。通知は設定に残ります。以降の `type=queue` 呼び出しは、毎回新しい設定を作らず、一致する Async 設定（`Queue …`）を再利用します。

## バッチの実行と監視

設定からファイルをアップロードするか実行を開始できます。**ダッシュボード** には次が表示されます。

- 行ごとのステータスと進捗
- 各行の試行履歴
- 行あたりのコスト
- リンク済み Webhook（クリックで Smart Monitor へ）

リンク済みバッチ設定は、Smart Monitor の Webhook 一覧と詳細にも表示されます。

## ファイルバッチと1行 API 呼び出し

| 開始方法 | ホスト | 結果 |
| --- | --- | --- |
| Smart-Agent でファイルをアップロード | [ai.verifik.co](https://ai.verifik.co) | N 行のバッチ |
| カタログパスに `type=queue` で `GET`/`POST` | [async.verifik.co](https://async.verifik.co) | `202` と1行バッチ |

設定が **Async** のとき、両方の経路は同じバックグラウンドワーカーを使います。API の A–Z は [エンドポイントをキューとして呼び出す (async)](/verifik-ja/smart-batch/async-queue) を見てください。

## 関連

- [エンドポイントをキューとして呼び出す (async)](/verifik-ja/smart-batch/async-queue)
- [ペルー — 市民 (DNI)](/verifik-ja/identity/peru)
