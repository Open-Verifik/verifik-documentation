---
id: service-level-agreement
title: サービスレベル契約
description: Verifikのサービスレベル契約およびサポート条件
slug: /legal/service-level-agreement
---

# サービスレベル契約

### **Service Level Agreement**

#### **I. Service Channels. The User shall have access to the following Verifik service channels:**

1. Chat available on [Verifik.co](http://verifik.co)
2. Email: support@verifik.co
3. Customer service WhatsApp channel.
4. Customer service Discord channel.

#### **II. Hours of Operation**

The User will be able to access the support provided by Verifik, Monday through Friday (business days) from 8:00 AM to 5:00 PM Colombia time.

#### **III. Criticality Levels**

The requests or requirements raised by Users to the support team will be classified according to the impact they have on the User's operation, as follows:

| **Critical:** | Total service unavailability.                                                |
| ------------- | ---------------------------------------------------------------------------- |
| **Urgent:**   | Loss of specific functionality for all use cases.                            |
| **Medium:**   | Loss of functionality in specific cases.                                     |
| **Normal:**   | Other requests or general inquiries that do not affect Service Availability. |

#### **IV. Response Times**

1. **Definitions:** Terms used in this section, shall have the following meanings:

```
i. Attention: The time elapsed between the request or requirement and the assignment of a service agent.
ii. Review: The time elapsed between the agent's greeting and the first response regarding the request or requirement.
iii. Escalation: The time elapsed between the agent's escalation and the case review by the person to whom it was escalated. This time only applies in events where it is necessary to escalate the user's request or requirement.
iv. Resolution: The time elapsed between the agent's greeting and the moment the case is resolved.
```

The response time varies according to the criticality of the requirement, as follows:

| **SEVERITY/TIME** | **ATTENTION** | **REVIEW** | **ESCALATION** | **RESOLUTION** |
| ----------------- | ------------- | ---------- | -------------- | -------------- |
| **Critical**      | 0.5 hr        | 0.5 hr     | 15 mins        | 48 hrs         |
| **Urgent**        | 0.5 hr        | 0.5 hr     | 15 mins        | 48 hrs         |
| **Medium**        | 1 hr          | 1 hr       | 0.5 hr         | 96 hrs         |
| **Normal**        | 1 hr          | 1 hr       | 0.5 hr         | 96 hrs         |

**Note:** 48 hrs means we take up to 48 hours to resolve the incident depending on its complexity.

Response times will be counted from the last message sent by the user.

#### **V. Platform Availability**

The Platform will be available at least:

| **Product**  | **Availability**                                                                                      | **Notes**                                                              |
| ------------ | ----------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| SmartCHECK   | 90.0% > Data API                                                                                      | Data API depends on connections with Government Sources                |
| smartACCESS  | 99.0% > Email/Tel<br/>98.0% > Biometrics                                                    |                                                                        |
| smartENROLL  | 99.0% > Email/Tel<br/>98.0% > Biometrics<br/>98.0% > Document Scanning<br/>90.0% > Data API | Data API depends on connections with Government Sources                |

#### **VI. Downtime Compensation**

Credit Compensation awarded for the affected month will be provided in the form of a credit equivalent to the cost of the failed service call. If the service unavailability is caused by **Internal Issues** of Verifik (database, servers, internal API issues) and is not effectively resolved by the Company, Verifik will compensate as follows:

| **Service Availability**                                                                                            | **Credit Compensation**               | **Product**                       |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------- | --------------------------------- |
| **Data API (Data Query)**<br/>90.00% or higher<br/>89.99% or lower               | No Credit<br/>Compensation | smartCHECK                        |
| **Email/Tel**<br/>99.00% or higher<br/>98.99% or lower                           | No Credit<br/>Compensation | smartACCESS<br/>smartENROLL |
| **Biometrics**<br/>98.00% or higher<br/>97.99% or lower                          | No Credit<br/>Compensation | smartACCESS<br/>smartENROLL |
| **Document Scanning**<br/>98.00% or higher<br/>97.99% or lower                   | No Credit<br/>Compensation | smartENROLL<br/>smartACCESS |

**Internal Issues** of the Data API service (Data Query) excludes issues considered Force Majeure (Fortuitous Events), whether due to migration, disconnection, or external intervention by the governments that manage the databases. Verifik is an intermediary and therefore does NOT have control over the queried databases.

#### **VII. Charging Scheme for smartCHECK**

The charging scheme applies to the smartCHECK solution, which enables queries to government databases. Verifik does not own, manage, or bear responsibility for (does not control or update) the government databases of the various countries we serve; therefore, Verifik reserves the right not to offer guarantees regarding Response Time, Average Up Time, or Data Accuracy.

If the query returns a **200** or **404**, it will be charged. Otherwise, if the query returns **403**, **409**, **412**, **422**, or **500**, it will not be charged.

| **Charged** | **Not Charged** |
| ----------- | --------------- |
| 200         | 403             |
| 404         | 409             |
|             | 412             |
|             | 422             |
|             | 500             |

#### **VIII. smartCHECKサービスの動的クエリ**

smartCHECKサービスの標準アーキテクチャの一環として、Verifikは、サポート対象エンドポイントにおけるサービスの可用性、カバレッジ、信頼性を最大化するために設計された動的クエリ（Dynamic Query）メカニズムを実装しています。

動的クエリメカニズムにより、smartCHECKおよびDB Screeningは、主要データソースが「Not Found」または同等のHTTP 400レベルのエラーを含む、成功しない応答を返した場合に、複数の認可されたデータソースを自動的かつ順次に照会することができます。このアーキテクチャは、複数の適格なデータソースを活用することにより、成功した検証結果を得る確率を高めることを目的としています。

クライアントは、政府データベースの品質、完全性、可用性が管轄区域によって大きく異なる場合があり、不完全なレコード、サービスの中断、または限定的なデータカバレッジにより、特定のデータベースでは成功しない応答の確率が高くなる場合があることを認識し、同意するものとします。

これらの制限を軽減するため、動的クエリは、該当するすべてのsmartCHECKエンドポイントでデフォルトで有効化されており、Verifikの冗長化およびフェイルオーバー戦略の不可欠な部分を構成します。このメカニズムにより、Verifikは必要に応じてリクエストを代替の利用可能なソースに動的にルーティングすることで、特定のエンドポイントにおいて100%に近いサービスの可用性およびカバレッジを維持することができます。

クライアントはさらに以下を認識し、同意するものとします：

a) 動的クエリは、成功した検証応答を得る可能性を高めることを目的としていますが、すべてのケースにおいて成功した一致または結果を保証するものではありません；

b) 応答時間は変動する場合があり、複数ソースへのリクエストのカスケード的な性質により、場合によっては標準的な単一ソースクエリよりも長くなることがあります；

c) 動的クエリの有効性および可用性は、基盤となる第三者または政府ソースの稼働時間、アクセス可能性、データ品質の影響を受けます；および

d) Verifikは、サービスの継続性の維持、カバレッジの最適化、検証パフォーマンスの向上のために、動的クエリアーキテクチャ内のデータソースを変更、優先順位付け、または置換する権利を単独の裁量で留保します。

動的クエリは、smartCHECKサービスの固有の機能とみなされ、Verifikが書面で別段定めない限り、適格なエンドポイントを使用するすべてのクライアントに自動的に適用されます。

#### **VIII.A 動的料金（請求）**

動的クエリが適格なエンドポイントで拡張検証パスを使用し、成功した一致（**HTTP 200**）を返す場合、**動的料金**が適用されることがあります。その場合、クレジットはベースルートに関連付けられた標準ティアではなく、そのエンドポイントファミリーの**プレミアムティア**で差し引かれます。

動的料金は、標準パスが一致を返さなかった後に拡張検証パスが正常に完了したとき、標準のコロンビア身分証エンドポイント（**`GET/POST /v2/co/cedula`**）に適用されます。クレジット量は**クライアントに設定された機能価格**（そのエンドポイントファミリーの標準レート vs. プレミアムレート）に依存します。

動的料金は**VII**条の請求規則を**変更しません**：検証エラーおよびサーバーエラー（**403**、**409**、**412**、**422**、**500**）は請求されず、適用可能なパスで成功した一致が得られない場合の**404**応答は標準ティアで請求されます。

透明性のため、クライアントは適格なリクエストで**`includeCost=true`**を渡し、クレジットが請求される際（動的料金が適用される場合を含む）に**`billing`**オブジェクトを受け取ることができます。APIリクエスト履歴には調整メタデータ（例：標準 vs. 請求額）が記録されます。

**`/v2/co/cedula/premium`**を直接呼び出すと常にプレミアム価格が適用されます。動的料金は標準の**`/v2/co/cedula`**ルートからの自動エスカレーションを説明します。

APIの詳細は[コロンビア身分証（プレミアム）](/verifik-ja/identity-validation/colombia/colombian-cedula-premium#dynamic-pricing)を参照してください。

#### **IX. プラットフォームの利用不可**

Scheduled maintenance windows will take place at night and/or on weekends, with prior notification via email to users.

#### **X. 新規の適応または開発**

The timeframes for developing new adaptations due to unexpected changes from User systems integrating via API with the Platform will vary according to the changes required by the User and will not count as Platform Downtime.
