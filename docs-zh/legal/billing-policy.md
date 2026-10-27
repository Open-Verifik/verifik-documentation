---
id: billing-policy
title: 积分计费与消耗政策
description: API 查询计费规则与动态定价
slug: /legal/billing-policy
---

# 积分计费与消耗政策

**API 查询计费规则与动态定价**

**版本 1.0 | 发布日期：2026 年 10 月 26 日**

本政策说明适用于此处所指服务的一般计费和积分消耗规则。费率和特别条件以与各客户明确约定的内容为准。发布本政策的变更，本身并不单方面改变已生效的合同。

## 1. smartCHECK（DB Screening）计费方案

### 1.1. 一般计费规则

计费方案适用于可查询政府数据库的 smartCHECK（DB Screening）方案。

**一般规则。** HTTP 200 响应计费。HTTP 403、412、422 和 500 不计费；超时不计费；HTTP 409 不计费（包括来源不可用和连接失败）。HTTP 404 仅在第 1.2 条明确列出的情况下计费。

| 计费 | 不计费 |
| --- | --- |
| 200 | 403 |
|  | 404 |
|  | 409 |
|  | 412 |
|  | 422 |
|  | 500 |
|  | 超时 |

哥伦比亚以外的端点不对 HTTP 404 计费。未列入第 1.2 条的端点也不对 HTTP 404 计费。

### 1.2. 哥伦比亚：HTTP 404 计费例外

本条是 smartCHECK 中 HTTP 404 收费的唯一依据。下列路径均为哥伦比亚 API。超时和 HTTP 409 来源故障不计费。

**RUNT**（仅响应代码为 `NotFound` 的 HTTP 404）。HTTP 409 响应（例如来源停止服务或 RUNT worker 不可用）不计费。

| 产品名称 | 路径 |
| --- | --- |
| 哥伦比亚 RUNT 驾驶员查询 | `GET /v2/co/runt/conductor` |
| 哥伦比亚 RUNT 驾驶员查询（v3） | `GET /v3/co/runt/conductor` |
| 哥伦比亚 RUNT 车辆查询 | `GET /v2/co/runt/vehiculo` |
| 哥伦比亚 RUNT 完整车辆记录 | `GET /v2/co/runt/vehiculo-completo` |
| 哥伦比亚 RUNT 车辆 SOAT | `GET /v2/co/runt/vehiculo-soat` |
| 哥伦比亚 RUNT 按车牌查询车辆 | `GET /v2/co/runt/vehicle-by-plate` |
| 哥伦比亚 RUNT 按 VIN 查询车辆 | `GET /v2/co/runt/vehicle-by-vin` |
| 哥伦比亚 RUNT 按车牌查询车辆（简化） | `GET /v2/co/runt/vehicle-by-plate-simplified` |
| 哥伦比亚 RUNT 仅按车牌查询车辆 | `GET /v2/co/runt/vehicle-by-plate-only` |

**社会保障参保。** 下列路径上的任何 HTTP 404 均可计费，包括消息表明签发日期不正确的情况。返回 HTTP 409 的连接失败不计费。

| 产品名称 | 路径 |
| --- | --- |
| 哥伦比亚社会保障参保 | `GET /v2/co/afiliaciones` |

**SIBGA 车辆估值**（仅响应代码为 `NotFound` 的 HTTP 404）。

| 产品名称 | 路径 |
| --- | --- |
| 哥伦比亚 SIBGA 车辆估值 | `GET /v2/co/sibga/valuation` |

**哥伦比亚公民身份证（cédula）。** 仅消息为 `CEDULA NO EXISTE` 的 HTTP 404 按有效性费率计费。下列路径上的其他 HTTP 404 不计费。`GET`/`POST /v2/co/cedula/vigencia` 不对其自身的 HTTP 404 响应计费。

| 产品名称 | 路径 |
| --- | --- |
| 哥伦比亚公民身份证查询 | `GET` / `POST /v2/co/cedula` |

**HTTP 404 不计费：** 哥伦比亚的其他 RUNT 路径（包括车主查询）、哥伦比亚以外的所有端点，以及本条未列出的所有路径。人脸活体检测可因活体失败收取 HTTP 409；不对 HTTP 404 计费。smartBatch 仅用 HTTP 404 将行标记为成功，不就这些响应收取积分。

## 2. smartCHECK 的动态查询

动态查询的技术说明见[服务级别协议第 5 条](/verifik-zh/legal/service-level-agreement#dynamic-query)。本政策不重复该说明。

就计费而言，在兼容端点上，当主要来源未产生令人满意的结果时，Verifik 可以自动并按顺序查询替代信息来源。动态查询因需要连续查询而可能延长响应时间。Verifik 可以修改、调整优先级或替换所用来源以优化服务。这并不授权单方面变更已约定的费率。

## 3. 哥伦比亚公民身份证查询的动态定价 {#dynamic-pricing-billing}

客户确认并同意：通过 `GET`/`POST /v2/co/cedula` 端点进行的查询，可以视所使用的信息来源，以及通过[服务级别协议第 5 条](/verifik-zh/legal/service-level-agreement#dynamic-query)所述、并在本政策第 2 条提及的动态查询所获得的结果，适用动态定价。

### 3.1. 标准费率与高级费率

当查询通过标准来源成功完成（HTTP 200）时，适用哥伦比亚国民身份证查询服务的标准费率。

当标准来源未产生令人满意的匹配，而动态查询通过扩展或高级核验来源获得成功响应（HTTP 200）时，即使用户使用的是标准端点，也适用相应的高级费率。

标准费率和高级费率，是与各客户在合同或双方接受的费率文件中明确约定的费率。

### 3.2. 与合同费率的关系

对于 `GET`/`POST /v2/co/cedula` 端点，标准或高级类别依本政策确定，但以适用合同明确纳入本规则为前提。若与按次查询的一般费率冲突，仅在合同如此规定时，类别选择的特别规则优先。

本规则并不授权 Verifik 单方面变更先前约定的费率金额。

### 3.3. 未成功的响应与计费例外

HTTP 404 响应仅按第 1.2 条的例外及其中所定费率计费。

其他不计费响应适用第 1.1 条。

### 3.4. 计费透明度 {#include-cost}

客户可在符合条件的请求中使用参数 `includeCost=true`，以获得已计费积分的信息。

API 请求历史可查询消耗记录和相应的计费调整，包括通过动态查询适用高级费率的情况。

### 3.5. 直接高级查询

直接通过端点 `/v2/co/cedula/premium` 进行的查询适用相应的高级费率，无论是否使用了自动升级机制。

本条规定仅适用于此处所指端点，不改变其他已签约服务的费率或计费条件。

API 详情见[哥伦比亚公民（基础国民身份证查询）](/verifik-zh/identity-validation/colombia/colombian-citizen)。

**效力与特别条件。** 如有不一致，以商业合同中明确接受的经济条件为准，但该合同具体纳入的动态定价例外除外。
