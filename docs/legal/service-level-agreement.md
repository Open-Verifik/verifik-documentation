---
id: service-level-agreement
title: Service Level Agreement
description: Verifik's service level agreement and support terms
---

# Service Level Agreement

### **Service Level Agreement**

#### **I. Service Channels. The user will have access to the following Verifik service channels:**

1. Chat available on [Verifik.co](http://verifik.co)
2. Email: support@verifik.co
3. Customer service WhatsApp channel.
4. Customer service Discord channel.

#### **II. Hours of Operation**

The User will be able to access the support provided by Verifik, Monday through Friday (business days) from 8:00 AM to 5:00 PM Colombia time.

#### **III. Criticality Levels**

Requests or requirements raised by users to the support team will be classified according to the impact they have on the user's operation, as follows:

| **Critical:** | Total service unavailability.                                               |
| ------------- | -------------------------------------------------------------------------- |
| **Urgent:**   | Loss of specific functionality for all use cases.                         |
| **Medium:**   | Loss of functionality in specific cases.                                 |
| **Normal:**   | Other requests or general inquiries that do not affect Service Availability. |

#### **IV. Response Times**

1. **Definitions:** The terms used in this section shall have the following meanings:

```
i. Attention: Time elapsed between the request or requirement and the assignment of a service agent.
ii. Review: Time elapsed between the agent's greeting and the first response regarding the request or requirement.
iii. Escalation: Time elapsed between the agent's escalation and the case review by the person to whom it was escalated. This time only applies in events where it is necessary to escalate the User's request or requirement.
iv. Resolution: Time elapsed between the agent's greeting and the moment the case is resolved.
```

Response time varies according to the criticality of the requirement, as follows:

| **CRITICALITY/TIME** | **ATTENTION** | **REVIEW** | **ESCALATION** | **RESOLUTION** |
| -------------------- | ------------ | ---------- | -------------- | -------------- |
| **Critical**         | 0.5 hr       | 0.5 hr     | 15 mins        | 48 hrs         |
| **Urgent**           | 0.5 hr       | 0.5 hr     | 15 mins        | 48 hrs         |
| **Medium**           | 1 hr         | 1 hr       | 0.5 hr         | 96 hrs         |
| **Normal**           | 1 hr         | 1 hr       | 0.5 hr         | 96 hrs         |

**Note:** 48 hrs refers to the fact that we take up to 48 hours to resolve the incident depending on the complexity it presents.

Response times will count from the last message sent by the user.

#### **V. Platform Availability**

The Platform will be available at least:

| **Product** | **Availability**                                                                          | **Notes**                                                       |
| ----------- | ----------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| SmartCHECK  | 90.0% > Data API                                                                         | Database, depends on connections with Government Sources        |
| smartACCESS | 99.9% > Email/Tel<br/>99.9% > Biometrics                                                 |                                                                 |
| smartENROLL | 99.9% > Email/Tel<br/>99.9% > Biometrics<br/>99.9% > Document Scanning<br/>90.0% > Data API | Database, depends on connections with Government Sources        |

#### **VI. Compensation for Downtime**

The Credit Compensation awarded for the affected month will be provided in the form of a credit equivalent to the cost of the ineffective service call. If the service unavailability is caused by **Internal Issues** of Verifik (database, servers, internal API issues) and is not effectively resolved by the Company, Verifik will compensate as follows:

| **Service Availability**                                                           | **Credit Compensation**               | **Product**                      |
| ---------------------------------------------------------------------------------- | ------------------------------------- | --------------------------------- |
| **Database (Data Query)**<br/>90.00% or greater<br/>89.99% or Less | No Credit<br/>Compensation | smartCHECK                        |
| **Email/Tel**<br/>99.9% or Greater<br/>99.8% or Less                    | No Credit<br/>Compensation     | smartACCESS<br/>smartENROLL |
| **Biometrics**<br/>99.9% or Greater<br/>99.8% or Less                  | No Credit<br/>Compensation    | smartACCESS<br/>smartENROLL |
| **Document Scanning**<br/>99.9% or Greater<br/>99.8% or Less        | No Credit<br/>Compensation | smartENROLL<br/>smartACCESS |

**Internal Issues** of the Data API (Data Query) service excludes problems considered as Force Majeure (Fortuitous Cases) whether due to migration, disconnection, or external intervention by the governments that maintain the databases. Verifik is an intermediary, therefore, it does NOT have the authority and control of the databases consulted.

#### VII. Billing Scheme for smartCHECK Service

The billing scheme applies to the smartCHECK solution, which allows querying government databases. Verifik is not the owner, manager, or responsible party (does not control or update) the government databases of the different countries we offer; therefore Verifik reserves the right to offer guarantees regarding "Response Time", "Average Availability Time", "Data Accuracy".

If the query returns a **200** or **404** it will be charged. Otherwise, if the query returns a **403**, **409**, **412**, **422** or **500** it will not be charged.

| **Billing** | **No Billing** |
| ----------- | -------------- |
| 200         | 403            |
| 404         | 409            |
|             | 412            |
|             | 422            |
|             | 500            |

#### **VIII. Platform Unavailability**

Scheduled Maintenance times will be performed at night and/or on weekends, with prior communication via e-mail to users.

#### **IX. Adaptations or New Developments**

The times for the development of new adaptations, due to unexpected changes by the Users' systems that integrate via API with the Platform, will be variable according to the changes required by the User and will not count as Platform Downtime.
