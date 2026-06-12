---
id: service-level-agreement
title: 服务级别协议
description: Verifik服务级别协议与支持条款
slug: /legal/service-level-agreement
---

# 服务级别协议

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

#### **VIII. smartCHECK 服务动态查询**

作为 smartCHECK 服务标准架构的一部分，Verifik 实施了动态查询（Dynamic Query）机制，旨在最大化受支持端点的服务可用性、覆盖范围和可靠性。

动态查询机制允许 smartCHECK 和 DB Screening 在主要数据源返回不成功响应（包括但不限于“Not Found”或等效的 HTTP 400 级别响应）时，自动且依次查询多个授权数据源。该架构旨在通过利用多个符合条件的数据源来提高获得成功验证结果的概率。

客户承认并同意，政府数据库的质量、完整性和可用性可能因司法管辖区而显著不同，某些数据库由于记录不完整、服务中断或数据覆盖范围有限，可能呈现更高的不成功响应概率。

为减轻这些限制，动态查询在所有适用的 smartCHECK 端点上默认启用，并构成 Verifik 冗余和故障转移策略的组成部分。该机制使 Verifik 能够在必要时将请求动态路由到可用的替代来源，从而在某些端点上维持接近百分之百（100%）的服务可用性和覆盖范围。

客户进一步承认并同意：

a) 动态查询旨在提高获得成功验证响应的可能性，但不保证在所有情况下都能成功匹配或获得结果；

b) 响应时间可能有所不同，在某些情况下，由于多源请求的级联性质，可能比标准单源查询更长；

c) 动态查询的有效性和可用性仍受基础第三方或政府来源的正常运行时间、可访问性和数据质量的影响；以及

d) Verifik 保留在其唯一裁量权下修改、优先排序或替换动态查询架构内数据源的权利，以维持服务连续性、优化覆盖范围并提高验证性能。

动态查询应被视为 smartCHECK 服务的固有功能，并应自动适用于使用符合条件端点的所有客户，除非 Verifik 另有书面规定。

#### **IX. 平台不可用**

Scheduled maintenance windows will take place at night and/or on weekends, with prior notification via email to users.

#### **X. 新适配或开发**

The timeframes for developing new adaptations due to unexpected changes from User systems integrating via API with the Platform will vary according to the changes required by the User and will not count as Platform Downtime.
