---
id: "en-docs-legal-service-level-agreement-service-level-agreement-2"
title: "Service Level Agreement — **Service Level Agreement**"
sourcePath: "docs/legal/service-level-agreement.md"
locale: "en"
category: "legal"
tags:
  - "co"
  - "legal"
endpoints:
  - "/v2/co/cedula"
  - "/v2/co/cedula/premium"
sourceAnchor: "**Service Level Agreement**"
---

# Service Level Agreement
**API path(s):** /v2/co/cedula, /v2/co/cedula/premium

## **Service Level Agreement**

#### **1. Service Channels. The User shall have access to the following Verifik service channels:**

1. Chat available on [Verifik.co](http://verifik.co)
2. Email: support@verifik.co
3. Customer service WhatsApp channel.
4. Customer service Discord channel.

#### **2. Hours of Operation**

The User will be able to access the support provided by Verifik, Monday through Friday (business days) from 8:00 AM to 5:00 PM Colombia time.

#### **3. Criticality Levels**

The requests or requirements raised by Users to the support team will be classified according to the impact they have on the User's operation, as follows:

| **Critical:** | Total service unavailability.                                                |
| ------------- | ---------------------------------------------------------------------------- |
| **Urgent:**   | Loss of specific functionality for all use cases.                            |
| **Medium:**   | Loss of functionality in specific cases.                                     |
| **Normal:**   | Other requests or general inquiries that do not affect Service Availability. |

#### **4. Response Times**

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

#### **5. Platform Availability**

The Platform will be available at least:

| **Product**  | **Availability**                                                                                      | **Notes**                                                              |
| ------------ | ----------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| SmartCHECK   | 90.0% > Data API                                                                                      | Data API depends on connections with Government Sources                |
| smartACCESS  | 99.0% > Email/Tel98.0% > Biometrics                                                    |                                                                        |
| smartENROLL  | 99.0% > Email/Tel98.0% > Biometrics98.0% > Document Scanning90.0% > Data API | Data API depends on connections with Government Sources                |

##### **5.1. Endpoint-Specific Availability Exclusions**

Due to the historical unpredictable operational availability characteristics of certain external data sources, specific endpoints are excluded from the Platform Availability commitments and Downtime Compensation provisions of this Agreement.

The following endpoints are excluded:

- Mexico – INE Validation
- Mexico – Vehicle Plate Validation

Interruptions, maintenance periods, degraded performance, delayed responses, or temporary unavailability affecting these endpoints shall not:

- be considered Platform Downtime;
- be included in Platform Availability calculations;
- qualify for Service Credits or any other compensation under this Agreement.

Verifik will continue to make commercially reasonable efforts to maintain connectivity and restore service whenever possible; however, no uptime guarantee is provided for the endpoints listed above.

#### **6. Downtime Compensation**
