---
id: service-level-agreement
title: 서비스 수준 계약
description: Verifik 서비스 수준 계약 및 지원 약관
slug: /legal/service-level-agreement
---

# 서비스 수준 계약

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

#### **VIII. smartCHECK 서비스 동적 쿼리**

smartCHECK 서비스의 표준 아키텍처의 일부로, Verifik은 지원되는 엔드포인트에서 서비스 가용성, 커버리지 및 신뢰성을 극대화하도록 설계된 동적 쿼리(Dynamic Query) 메커니즘을 구현합니다.

동적 쿼리 메커니즘을 통해 smartCHECK 및 DB Screening은 주 데이터 소스가 "Not Found" 또는 이에 상응하는 HTTP 400 수준의 오류를 포함하여 성공하지 못한 응답을 반환하는 경우, 여러 승인된 데이터 소스를 자동으로 순차적으로 조회할 수 있습니다. 이 아키텍처는 여러 적격 데이터 소스를 활용하여 성공적인 검증 결과를 얻을 확률을 높이는 것을 목적으로 합니다.

클라이언트는 정부 데이터베이스의 품질, 완전성 및 가용성이 관할권에 따라 크게 달라질 수 있으며, 불완전한 기록, 서비스 중단 또는 제한된 데이터 커버리지로 인해 특정 데이터베이스에서 성공하지 못한 응답의 확률이 더 높을 수 있음을 인정하고 동의합니다.

이러한 제한을 완화하기 위해 동적 쿼리는 해당되는 모든 smartCHECK 엔드포인트에서 기본적으로 활성화되어 있으며 Verifik의 중복 및 장애 조치 전략의 필수적인 부분을 구성합니다. 이 메커니즘을 통해 Verifik은 필요한 경우 요청을 대체 가능한 소스로 동적으로 라우팅하여 특정 엔드포인트에서 100%에 가까운 서비스 가용성 및 커버리지를 유지할 수 있습니다.

클라이언트는 또한 다음을 인정하고 동의합니다:

a) 동적 쿼리는 성공적인 검증 응답을 얻을 가능성을 높이는 것을 목적으로 하지만, 모든 경우에 성공적인 일치 또는 결과를 보장하지는 않습니다;

b) 응답 시간은 변동될 수 있으며, 여러 소스에 대한 요청의 연쇄적 특성으로 인해 경우에 따라 표준 단일 소스 쿼리보다 더 길 수 있습니다;

c) 동적 쿼리의 효과 및 가용성은 기본적인 제3자 또는 정부 소스의 가동 시간, 접근성 및 데이터 품질의 영향을 받습니다; 및

d) Verifik은 서비스 연속성 유지, 커버리지 최적화 및 검증 성능 개선을 위해 동적 쿼리 아키텍처 내의 데이터 소스를 수정, 우선순위 지정 또는 대체할 권리를 단독 재량으로 보유합니다.

동적 쿼리는 smartCHECK 서비스의 고유 기능으로 간주되며, Verifik이 서면으로 달리 명시하지 않는 한 적격 엔드포인트를 사용하는 모든 클라이언트에 자동으로 적용됩니다.

#### **IX. 플랫폼 이용 불가**

Scheduled maintenance windows will take place at night and/or on weekends, with prior notification via email to users.

#### **X. 신규 적응 또는 개발**

The timeframes for developing new adaptations due to unexpected changes from User systems integrating via API with the Platform will vary according to the changes required by the User and will not count as Platform Downtime.
