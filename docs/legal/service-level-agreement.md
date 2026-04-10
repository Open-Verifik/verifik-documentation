---
id: service-level-agreement
title: Service Level Agreement
description: Verifik's service level agreement and support terms
---

# Service Level Agreement

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

#### **VIII. Platform Unavailability**

Scheduled maintenance windows will take place at night and/or on weekends, with prior notification via email to users.

#### **IX. New Adaptations or Developments**

The timeframes for developing new adaptations due to unexpected changes from User systems integrating via API with the Platform will vary according to the changes required by the User and will not count as Platform Downtime.
