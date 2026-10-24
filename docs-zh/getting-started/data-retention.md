---
id: data-retention
title: 数据保留
description: Verifik 如何保留、掩码和清除证件图片、提取字段与人脸图片。
slug: /getting-started/data-retention
---

# 数据保留

账户、项目和项目流程的设置决定 Verifik 保留证件图片、已保存的提取字段、人脸图片和证件活体图片的时长。策略在每条新记录创建时盖上标记。之后的更改不会改写已经存在的记录。

图片被清除后，账单记录、积分扣费和使用历史仍然保留。

## 模式

| 模式 | 效果 |
| --- | --- |
| `store` | 保留该记录。`retentionHours` 大于 0 时，经过这些小时后即可被清除。省略则无限期保留。`retentionHours` 会被遵守，包括在 SmartEnroll 中。 |
| `ephemeral` | 配置了 webhook 时，记录会保留到 webhook 保留时间结束，之后变为可清除。 |
| `none` | webhook 保留时间结束后不再保留。此模式下的人脸图片会保留到保留时间结束，以便证件与自拍比对可以完成，然后被移除。此模式下的证件活体图片不会被保存。 |

## 实际执行的类型

| 键 | 覆盖范围 |
| --- | --- |
| `documentImages` | 证件核验的正反面照片。 |
| `ocrExtraction` | 保存在该核验上的提取结果。 |
| `faceImages` | 自拍和证件人脸图片。 |
| `documentLiveness` | 证件活体图片。`none` 表示不保存。 |

策略上的模式作用于每个没有单独设置模式的已执行类型。`livenessResults` 和 `apiResponseLogs` 会被拒绝。

## 留在此策略之外

- Smart Access 在识别回访人员时使用的生物特征模板和人脸集合
- Human Auth 的加密凭证、零知识产物和活体视频
- 为 Human Auth 凭证选择的存储位置
- 在保留标记出现之前创建的证件核验和身份图片

托管的证件图片是私有的。`url` 和 `backUrl` 是一小时后失效的 `https` 链接。它们绝不是 `data:` URI。

## 优先级

更严格的设置不能被下一层放宽。`none` 比 `ephemeral` 更严格，`ephemeral` 比 `store` 更严格。

1. **账户。** 默认策略。没有配置时，每个被执行的类型都是没有时限的 `store`，webhook 保留为 24 小时。
2. **项目。** 当新模式同样严格或更严格时，`dataRetention` 替换它设置的账户字段。
3. **流程。** 对项目使用同一规则。

没有绑定项目的扫描使用账户策略。默认值是 `store`。

## Webhook 保留

`webhookHoldHours` 是 24 到 72 的整数。默认值为 24。

在 SmartEnroll 中，`none` 和 `ephemeral` 图片只有在 `onboarding_app_registration_completed` 或 `onboarding_app_registration_completed_without_kyc` 投递之后才会变为可清除。清除时间是该次投递与保留结束两者中较晚的一个。同一次注册中更早的 webhook 不会启动清除。

已保存的 webhook 正文在投递之后会被涂改。

## 清除

| 动作 | 字段 |
| --- | --- |
| 删除 | 图片文件。`url`、`backUrl` 和文件列表被清空。 |
| 掩码 | 留在行上的个人字段，包括已保存的提取结果。掩码保留最后 4 个字符。 |
| 保留 | 用于用量统计的核验行（状态、类型、`createdAt`）。 |

扫描的 HTTP 响应包含完整的提取结果。只有保存下来的值会被掩码。账单和使用历史仍然保留。清除不会冲销扣费。

## 手动擦除

当 `allowManualDelete` 为 true 时：

```
DELETE https://api.verifik.co/v2/document-validations/{id}/files
DELETE https://api.verifik.co/v2/app-registrations/{id}/data
POST https://api.verifik.co/v2/data-retention/erase
```

需要与其他 API 相同的授权头。`allowManualDelete` 为 false 时，这些调用会被拒绝。

## 运行时间

记录在 `retention.purgeAfter` 变为可清除。对于 SmartEnroll 的 `none` 或 `ephemeral` 图片，该时间是终态 webhook 投递与 `webhookHoldHours` 结束两者中较晚的一个。计划中的清除大约每 15 分钟移除一次符合条件的记录。

策略作用于保存之后创建的记录。已有记录保留它们自己的标记。

## Smart Access 与 Human Auth

`faceImages` 为 `none` 时，自拍会保留到保留时间结束，以便证件与自拍比对。Smart Access 的生物特征模板仍然保留。`documentLiveness` 为 `none` 时，该图片不会被保存。活体视频、零知识产物和 Human Auth 的加密凭证遵循各自的规则。

## `dataRetention` 对象

通过 `PUT /v3/projects/{id}` 发送。`null` 会重新继承账户策略。项目不能把账户的模式放宽。流程上的相同结构在同样严格或更严格时替换项目设置。

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
