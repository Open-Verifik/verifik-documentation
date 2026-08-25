---
id: smart-batch
title: SmartBatch
description: 以批次方式运行目录查询 — 后台 Async，或作为步骤链的 Sync。通过 ai.verifik.co 或 async.verifik.co
slug: /smart-batch
---

import { Layers, Zap, RefreshCw, Bell, FileSpreadsheet, Globe } from 'lucide-react';

# SmartBatch

**SmartBatch** 将一次或多次目录查询作为批次运行。你选择端点、映射输入字段，并决定批次如何执行。可通过 Smart-Agent UI（[ai.verifik.co](https://ai.verifik.co)）或 API（[async.verifik.co](https://async.verifik.co)）使用。

**批处理配置**是可复用的配方：名称、国家、步骤（目录功能）、合并策略、运行模式以及可选通知。每次上传文件或将一次查询入队时，SmartBatch 都会按该配方创建批次。

## 概述

SmartBatch 建立在你已使用的 SmartCheck 目录之上。Sync 在当前请求中等待。Async 立即返回，并在你关闭标签页后继续处理。当配置为 **Async** 时，文件批次与单行 API 调用共用同一个 worker。

需要从后端以队列方式调用目录路径？请参阅[以队列方式调用接口 (async)](/verifik-zh/smart-batch/async-queue)。

## 主要功能

<div className="row">
  <div className="col col--4">
    <div className="card">
      <div className="card__header">
        <h3><Zap size={20} style={{display: 'inline', marginRight: '8px'}} />Async</h3>
      </div>
      <div className="card__body">
        <p>在后台运行。关闭此标签页后，批次仍会继续处理。</p>
      </div>
    </div>
  </div>
  <div className="col col--4">
    <div className="card">
      <div className="card__header">
        <h3><RefreshCw size={20} style={{display: 'inline', marginRight: '8px'}} />Sync</h3>
      </div>
      <div className="card__body">
        <p>在服务器上按步骤链运行。适合后一步需要前一步结果的情况。</p>
      </div>
    </div>
  </div>
  <div className="col col--4">
    <div className="card">
      <div className="card__header">
        <h3><Layers size={20} style={{display: 'inline', marginRight: '8px'}} />目录步骤</h3>
      </div>
      <div className="card__body">
        <p>将任何带有目录 URL 的 SmartCheck 端点添加为核验步骤。</p>
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
        <p>Webhook URL 和完成邮件保存在配置上，不是查询参数。</p>
      </div>
    </div>
  </div>
  <div className="col col--4">
    <div className="card">
      <div className="card__header">
        <h3><FileSpreadsheet size={20} style={{display: 'inline', marginRight: '8px'}} />文件或 API</h3>
      </div>
      <div className="card__body">
        <p>上传电子表格，或使用 <code>type=queue</code> 入队一行。两者复用同一个 Async worker。</p>
      </div>
    </div>
  </div>
  <div className="col col--4">
    <div className="card">
      <div className="card__header">
        <h3><Globe size={20} style={{display: 'inline', marginRight: '8px'}} />仪表盘</h3>
      </div>
      <div className="card__body">
        <p>在批次仪表盘查看进度、尝试次数、每行费用以及关联的 webhook。</p>
      </div>
    </div>
  </div>
</div>

## Async vs Sync

向导和仪表盘使用产品标签 **Async** 和 **Sync**。

| 运行模式 | 发生什么 | 何时使用 |
| --- | --- | --- |
| **Async**（默认） | 批次在后台运行。你可以关闭 Smart-Agent 标签页。worker 领取每一行、调用功能 URL 并记录尝试。 | 即发即弃查询、大文件、webhook 流程。 |
| **Sync** | 服务器按连接的步骤链运行并等待每个结果。后续步骤可以使用先前输出。 | 第 2 步依赖第 1 步的多步配方。 |

积分在功能实际运行时扣除（Async 为 worker 调用，Sync 为步骤调用），而不是在入队时扣除。

:::note API 的 `type` 值
在 `async.verifik.co` 上，省略 `type` 或发送 `type=sync` 以等待结果。发送 `type=queue` 以入队。这些值对应同一套 Async / Sync 概念。你无需从 UI 传递 `queue` 或 `featureRunner`。
:::

## 在 ai.verifik.co 上创建配置

打开 [https://ai.verifik.co](https://ai.verifik.co)，进入 **Smart Batch**，选择 **创建**。

### 1. 基本信息

输入配置名称、描述和国家。选择 **运行模式**：

- **Async** — 在后台运行。关闭此标签页后，批次仍会继续处理。
- **Sync** — 在服务器上按步骤链运行。适合后一步需要前一步结果的情况。

默认是 Async。

### 2. 选择端点

搜索目录并添加所需核验步骤。每一步都是带 URL 的 SmartCheck 功能（身份、参保、车辆等）。没有目录 URL 的功能（passwordless、PDF 生成器）不能作为批次步骤运行。

### 3. 检查参数

确认每一步的必需参数。这些字段会从你上传的文件表头映射（或在入队单行时从 API `inputData` 映射）。

### 4. 检查并创建

检查摘要。可选择打开 **通知**：

- **Webhook URL** — 我们将行和批次完成事件 POST 到此地址。继续前请测试该 URL。
- **完成时发送邮件** — 批次结束时接收消息的可选地址。

保存配置。通知留在配置上。之后的 `type=queue` 调用会复用匹配的 Async 配置（`Queue …`），而不是每次新建。

## 运行并查看批次

你可以在配置中上传文件或开始运行。**仪表盘**显示：

- 每行的状态和进度
- 每行的尝试历史
- 每行费用
- 关联的 webhook（点击进入 Smart Monitor）

关联的批处理配置也会出现在 Smart Monitor 的 webhook 列表和详情中。

## 文件批次与单行 API 调用

| 如何开始 | 主机 | 结果 |
| --- | --- | --- |
| 在 Smart-Agent 上传文件 | [ai.verifik.co](https://ai.verifik.co) | 一个含 N 行的批次 |
| 对目录路径 `GET`/`POST` 并带 `type=queue` | [async.verifik.co](https://async.verifik.co) | `202` 和一个单行批次 |

当配置为 **Async** 时，两条路径使用同一个后台 worker。API A–Z 见[以队列方式调用接口 (async)](/verifik-zh/smart-batch/async-queue)。

## 相关

- [以队列方式调用接口 (async)](/verifik-zh/smart-batch/async-queue)
- [秘鲁 — 公民 (DNI)](/verifik-zh/identity/peru)
