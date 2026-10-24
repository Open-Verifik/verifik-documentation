---
id: data-retention
title: 数据保留
description: Verifik 如何保留、掩码和清除证件图片、提取字段与人脸图片。
slug: /getting-started/data-retention
---

# 数据保留

账户、项目和项目流程的设置决定 Verifik 保留证件图片、随证件核验保存的提取字段以及人脸图片的时长。策略在每条新记录创建时盖上标记。之后的更改不会改写已经存在的记录。

图片被清除后，账单记录、积分扣费和使用历史仍然保留。

## 模式

| 模式 | 效果 |
| --- | --- |
| `store` | 保留该记录。把 `retentionHours` 设为大于 0 的数字后，经过这些小时即可被清除。省略 `retentionHours` 则无限期保留。 |
| `ephemeral` | 配置了 webhook 时，在 webhook 保留时间结束时变为可清除；没有 webhook 时，在下一次清除运行时变为可清除。`retentionHours` 被忽略。 |
| `none` | 证件图片和已保存的提取字段与 `ephemeral` 使用相同时点。此模式下的人脸图片不会被写入。SmartEnroll 的响应会省去托管 URL，并返回 `hasFrontImage` 或 `hasBackImage`。 |

在 SmartEnroll 的证件扫描中，带有 `retentionHours` 的 `store` 规则仍然使用 24 小时保留；配置了 webhook 时使用 webhook 保留。没有小时数的 `store` 会保留该图片。

`ephemeral` 与 `none` 的清除时点相同。差别在于人脸图片，以及 SmartEnroll 是否返回托管 URL。

## 此策略实际执行的类型

| 键 | 覆盖范围 |
| --- | --- |
| `documentImages` | 证件核验的正反面照片，包括 `url` 和 `backUrl` 背后的托管文件。 |
| `ocrExtraction` | 保存在该核验上的提取结果。 |
| `faceImages` | 为注册或登录保存的自拍和证件人脸图片。 |

请在每个键上设置 `mode`。顶层 `mode` 为 `none` 时，会复制到你留空的键。顶层 `store` 或 `ephemeral` 不会替换这些键。把你关心的每个键都写上，请求才可靠。

## 留在此策略之外的内容

这些记录遵循各自的存储规则。保存保留模式不会清除它们：

- 证件活体照片
- 活体分数和活体会话结果
- Webhook 正文，包括载荷中携带的提取结果
- API 响应日志
- Smart Access 在识别回访人员时使用的生物特征模板和人脸集合
- Human Auth 的加密凭证、零知识产物和活体视频
- 为 Human Auth 凭证选择的存储位置
- 在保留标记出现之前创建的证件核验和身份图片

托管的证件图片使用普通 URL。URL 在该文件被清除之前一直有效。请把每条图片 URL 当作敏感信息。

## 优先级

有效策略按以下顺序决定：

1. **账户。** 保存在客户端设置中的策略。
2. **项目。** 项目上的 `dataRetention` 替换它设置的账户字段。
3. **项目流程。** 流程上的 `dataRetention` 替换它设置的项目字段。

某一层省略某个字段时，更宽的值继续生效。什么都没有配置时，每个被执行的类型都是没有时限的 `store`，webhook 保留为 24 小时。

保存的策略在每个正在运行的实例上生效，可能需要大约一分钟。

## Webhook 保留

`webhookHoldHours` 是 24 到 72 的整数。默认值为 24。

配置了 webhook 时，`none` 和 `ephemeral` 记录至少保留这段时间，以便投递完成。该注册的 webhook 投递之后，这些模式中的图片可以在之后的清除运行中被移除。载荷里的图片 URL 可能在那次投递之后失效。处理 webhook 时，请复制你仍然需要的图片。

SmartEnroll 的终态事件是 `onboarding_app_registration_completed`、`onboarding_app_registration_needs_manual_verification`、`onboarding_app_registration_completed_without_kyc` 和 `onboarding_app_registration_failed`。

保留策略不会涂改 webhook 正文。载荷可以包含完整的提取结果。

## 一次清除会删除、掩码和保留什么

证件核验被清除时：

| 动作 | 字段 |
| --- | --- |
| 删除 | 托管图片文件。`url`、`backUrl` 和文件列表被清空。 |
| 掩码 | 已保存的提取结果和 `fullName`。 |
| 明文保留 | `documentNumber`、名、姓、请求参数，以及保存在核验上的筛查结果。 |
| 行本身保留 | 状态、类型和 `createdAt`，读取该行的用量统计仍然会计入它。 |

人脸图片的清除会清掉已保存的图片字节。

提取结果全文的加密副本在扫描 30 天后被移除，可见的已保存字段已经被掩码时也一样。

积分扣费在扫描成功时记录。清除会留下账单记录和使用历史，也不会冲销扣费。

删除一条证件核验或一条应用注册，会移除已保存的图片文件并删除核验行。由这些行构成的使用历史会随这次删除而减少。清除作业会留下该行。

## 清除何时运行

记录在 `retention.purgeAfter` 变为可清除。计划中的清除大约每 15 分钟移除一次符合条件的记录。删除发生在下一次成功运行，因此文件可能在 `purgeAfter` 之后短时间仍然存在。每次运行处理有限的一批。积压较多时需要不止一次运行。

没有手动擦除端点。策略对象上的 `allowManualDelete` 会随策略保存，不会单独打开一次擦除调用。

## 策略作用于新记录

标记在记录创建时写入。账户里已有的记录保留它们自己的标记。没有标记的记录保持原样。把账户改成 `none` 后，这次更改之前保存的历史仍然留下。

## 没有项目的扫描

`POST /v2/ocr/scan-prompt` 和 `POST /v2/ocr/scan-agent` 在调用没有绑定项目时遵循这条规则：

- 图片不会上传到托管存储。
- 响应中的 `url` 和 `backUrl` 是你所发送图片的 `data:` URI。它们属于这次响应。请保存提取结果；如果之后还需要照片，请自己保留图片副本。
- 响应正文包含完整的提取结果。
- 保存下来的核验行存放掩码后的提取结果和掩码后的 `fullName`。该行上的 `documentNumber` 保持明文。
- 提取结果全文的加密副本在 30 天后被移除。

SmartEnroll 的证件扫描绑定到一条应用注册，并使用账户、项目和流程解析后的策略。响应包含未掩码的提取结果。当 `ocrExtraction` 为 `none` 时，保存的行会被掩码。在 `none` 和 `ephemeral` 中，响应会省去托管 URL。

## Smart Access

Smart Access 的登录流程（`login` 项目流程）会在登录自拍上盖上保留标记。

- `faceImages` 为 `none` 时，登录自拍不会被保存。
- `ephemeral` 会把自拍保存到下一次清除运行。登录流程的标记不带 webhook 保留。
- `store` 会保留自拍；设置了 `retentionHours` 时按该小时数保留。

识别回访人员时使用生物特征模板和人脸集合。更改此策略后，这些模板仍然保留。登录活体结果和登录 webhook 正文也同样保留。

## Human Auth

Human Auth 引导过程中创建的证件核验使用上面的 SmartEnroll 规则。

Human Auth 项目可以把 `faceImages` 锁定为 `none`。在该模式下自拍不会被保存，读取已保存自拍的证件与自拍比对也不会执行。

活体视频、零知识产物，以及存储步骤产生的加密凭证，遵循各自的规则。为该凭证选择存储位置与此策略是分开的。

## `dataRetention` 对象

在 `PUT /v3/projects/{id}` 上发送此对象。发送 `null` 会重新继承账户策略。

项目流程上的相同结构，会为该流程中创建的记录替换项目设置。

```json
{
  "dataRetention": {
    "mode": "none",
    "webhookHoldHours": 24,
    "types": {
      "documentImages": { "mode": "none" },
      "ocrExtraction": { "mode": "none" },
      "faceImages": { "mode": "store", "retentionHours": 72 }
    }
  }
}
```

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| `mode` | `store`、`ephemeral` 或 `none` | 账户或覆盖的基准。请同时设置每个类型。 |
| `webhookHoldHours` | 整数，24–72 | 配置了 webhook 时的最短保留。默认 24。 |
| `types.documentImages.mode` | 模式 | 证件照片。 |
| `types.documentImages.retentionHours` | 数字或省略 | 该类型为 `store` 且数字大于 0 时使用。SmartEnroll 的证件图片会忽略它。 |
| `types.ocrExtraction` | 相同结构 | 已保存的提取结果。 |
| `types.faceImages` | 相同结构 | 自拍和证件人脸图片。`none` 表示不写入自拍。 |

已保存的策略上可以出现其他类型键。清除不会应用它们。
