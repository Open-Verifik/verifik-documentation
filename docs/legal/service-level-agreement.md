---
id: service-level-agreement
title: Service Level Agreement
description: Verifik's service level agreement and support terms
---

# Service Level Agreement

**Last updated: October 21, 2026**

### **Service Level Agreement**

#### **1. Service Channels. The User shall have access to the following Verifik service channels:**

1. Chat available on [Verifik.co](http://verifik.co)
2. Email: support@verifik.co
3. Customer service WhatsApp channel.
4. Customer service Discord channel.

#### **2. Hours of Operation**

The User will be able to access the support provided by Verifik, Monday through Friday (business days) from 8:00 AM to 5:00 PM Colombia time.

#### **3. Criticality Levels**

The requests or requirements raised by Users to the support team will be classified according to the impact they have on the User's operation, as follows:

| | |
| --- | --- |
| **Critical:** | Total service unavailability. |
| **Urgent:** | Loss of specific functionality for all use cases. |
| **Medium:** | Loss of functionality in specific cases. |
| **Normal:** | Other requests or general inquiries that do not affect Service Availability. |

#### **4. Response Times**

**Definitions:** Terms used in this section, shall have the following meanings:

i. Attention: The time elapsed between the request or requirement and the assignment of a service agent.

ii. Review: The time elapsed between the agent's greeting and the first response regarding the request or requirement.

iii. Escalation: The time elapsed between the agent's escalation and the case review by the person to whom it was escalated. This time only applies in events where it is necessary to escalate the user's request or requirement.

iv. Resolution: The time elapsed between the agent's greeting and the moment the case is resolved.

The response time varies according to the criticality of the requirement, as follows:

| **SEVERITY/TIME** | **ATTENTION** | **REVIEW** | **ESCALATION** | **RESOLUTION** |
| ----------------- | ------------- | ---------- | -------------- | -------------- |
| **Critical** | 0.5 hr | 0.5 hr | 15 mins | 48 hrs |
| **Urgent** | 0.5 hr | 0.5 hr | 15 mins | 48 hrs |
| **Medium** | 1 hr | 1 hr | 0.5 hr | 96 hrs |
| **Normal** | 1 hr | 1 hr | 0.5 hr | 96 hrs |

**Note:** 48 hrs means we take up to 48 hours to resolve the incident depending on its complexity.

Response times will be counted from the last message sent by the user.

##### **4.1. Critical Tickets in the Client Panel**

Users can open a ticket with Critical priority from the client panel when production traffic is blocked. For these tickets:

- Verifik sends a first response within 24 hours of submission.
- Verifik aims to resolve the ticket within 48 hours of submission.
- Both deadlines run in clock hours from the moment the ticket is submitted, and the panel shows them in the user's support timezone.
- Critical tickets that have no staff reply are escalated internally before the first-response deadline.

These deadlines apply to tickets opened through the client panel. The attention, review, and escalation times in the table above apply to conversations on the service channels in Section 1.

#### **5. Platform Availability**

The Platform will be available at least:

| **At or above** | **Below** | **Product** | **Notes** |
| --- | --- | --- | --- |
| 90.00% | 89.99% | smartCHECK (DB Screening) | DB Screening API depends on connections with Government Sources |
| 99.00% | 98.99% | smartACCESS, smartENROLL (Email/Tel) | No Credit Compensation |
| 99.00% | 98.99% | smartACCESS, smartENROLL (Biometrics) | No Credit Compensation |
| 99.00% | 98.99% | smartENROLL, smartACCESS (Document Scanning) | No Credit Compensation |

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

##### **5.2. How Availability Is Measured**

Availability is calculated per account for each calendar month in UTC:

```
availability = successful requests / (successful requests + service failures)
```

- Service failures are requests that time out, return a 5xx error or a 408 or 504 response, or report that the endpoint is out of service.
- Client errors are left out of the calculation. They include invalid or missing parameters, records not found in the source, authentication and permission errors, and other 4xx responses.

Users can see their monthly availability in the client panel under Status Check and through the [Usage API](/resources/usage#get-monthly-availability). Both include a per-service breakdown, so requests to the endpoints in Section 5.1 can be separated from the rest. Those endpoints stay outside the commitments of this Agreement.

##### **5.3. Contract-Specific Targets**

The client panel and the Usage API compare each month against a 95% SmartCHECK target. That target applies to accounts whose commercial agreement includes it. For other accounts, the figure is informational and the commitments in Section 5 apply. A contract-specific target doesn't add credit compensation beyond Section 6 unless the agreement says so.

#### **6. Downtime Compensation**

Credit Compensation awarded for the affected month will be provided in the form of a credit equivalent to the cost of the failed service call. If the service unavailability is caused by Internal Issues of Verifik (database, servers, internal API issues) and is not effectively resolved by the Company, Verifik will compensate as follows:

| **At or above** | **Below** | **Service Level Credit Compensation** | **Product** |
| --- | --- | --- | --- |
| 90.00% | 89.99% | No Credit Compensation | smartCHECK (DB Screening / Data Query) |
| 99.00% | 98.99% | No Credit Compensation | smartACCESS, smartENROLL (Email/Tel) |
| 99.00% | 98.99% | No Credit Compensation | smartACCESS, smartENROLL (Biometrics) |
| 99.00% | 98.99% | No Credit Compensation | smartENROLL, smartACCESS (Document Scanning) |

Internal Issues of the Data API service (Data Query) excludes issues considered Force Majeure (Fortuitous Events), whether due to migration, disconnection, or external intervention by the governments that manage the databases. Verifik is an intermediary and therefore does NOT have control over the queried databases.

#### **7. Charging Scheme for smartCHECK**

The charging scheme applies to the smartCHECK solution, which enables queries to government databases. Verifik does not own, manage, or bear responsibility for (does not control or update) the government databases of the various countries we serve; therefore, Verifik reserves the right not to offer guarantees regarding Response Time, Average Up Time, or Data Accuracy.

**General rule.** An HTTP **200** response is charged. The following are **not** charged: HTTP **403**, **412**, **422**, and **500**; request **timeouts**; and HTTP **409** responses (including source unavailability and connection failures). An HTTP **404** response is **not** charged unless Section **7.1** applies to that request.

| **Charged** | **Not charged** |
| --- | --- |
| 200 | 404 (except as listed in Section 7.1) |
| | 403 |
| | 409 (including source failures; never billed) |
| | 412 |
| | 422 |
| | 500 |
| | Timeouts (never billed) |

No endpoint outside Colombia is billed on HTTP **404**. Endpoints not listed in Section **7.1** are not billed on HTTP **404**, including all routes in countries other than Colombia.

##### **7.1 Colombia: HTTP 404 billing**

This section is the only source of HTTP **404** charges under Section **7**. All routes below are Colombia smartCHECK APIs. **Timeouts** and HTTP **409** source failures are **never** billed on any Verifik endpoint.

**RUNT (HTTP 404 with response code `NotFound` only).** HTTP **409** responses (for example when the source is out of service or a RUNT worker is unavailable) are **not** billed.

| Product name | Route |
| --- | --- |
| Colombia RUNT driver lookup | `GET /v2/co/runt/conductor` |
| Colombia RUNT driver lookup (v3) | `GET /v3/co/runt/conductor` |
| Colombia RUNT vehicle lookup | `GET /v2/co/runt/vehiculo` |
| Colombia RUNT complete vehicle record | `GET /v2/co/runt/vehiculo-completo` |
| Colombia RUNT vehicle SOAT | `GET /v2/co/runt/vehiculo-soat` |
| Colombia RUNT vehicle by license plate | `GET /v2/co/runt/vehicle-by-plate` |
| Colombia RUNT vehicle by VIN | `GET /v2/co/runt/vehicle-by-vin` |
| Colombia RUNT vehicle by plate (simplified) | `GET /v2/co/runt/vehicle-by-plate-simplified` |
| Colombia RUNT vehicle by plate only | `GET /v2/co/runt/vehicle-by-plate-only` |

**Social security affiliations (Afiliaciones).** **Any** HTTP **404** on the route below is billable, including when the response message indicates an incorrect expedition date. Connection failures that return HTTP **409** are **not** billed.

| Product name | Route |
| --- | --- |
| Colombia social security affiliations | `GET /v2/co/afiliaciones` |

**SIBGA vehicle valuation (HTTP 404 with response code `NotFound` only).**

| Product name | Route |
| --- | --- |
| Colombia SIBGA vehicle valuation | `GET /v2/co/sibga/valuation` |

**Colombian national ID (cédula).** Only an HTTP **404** whose message is **`CEDULA NO EXISTE`** is billable, at the **vigencia** price tier. Any other HTTP **404** on the route below is **not** charged. **`GET`/`POST /v2/co/cedula/vigencia`** does **not** bill its own HTTP **404** responses.

| Product name | Route |
| --- | --- |
| Colombian national ID lookup | `GET` / `POST` `/v2/co/cedula` |

**Not billed on HTTP 404:** Other Colombia RUNT routes (including owner/propietarios lookups), every endpoint outside Colombia, and every route not listed in this section. Biometric face liveness may bill an HTTP **409** for liveness failure; it is not billed on HTTP **404**. smartBatch uses HTTP **404** only to mark rows successful and does not charge credits for those responses.

#### **8. Dynamic Query for smartCHECK Service**

As part of the standard architecture of the smartCHECK Service, Verifik implements a Dynamic Query mechanism designed to maximize service availability, coverage, and reliability across supported endpoints.

The Dynamic Query mechanism allows smartCHECK and DB Screening to automatically and sequentially query multiple authorized data sources in cases where the primary data source returns an unsuccessful response, including but not limited to "Not Found" or equivalent HTTP 400-level responses. This architecture is intended to improve the probability of obtaining a successful verification result by leveraging multiple eligible data sources.

The Client acknowledges and agrees that the quality, completeness, and availability of governmental databases may vary significantly by jurisdiction, and that certain databases may present a higher probability of unsuccessful responses due to incomplete records, service interruptions, or limited data coverage.

To mitigate these limitations, Dynamic Query is enabled by default across all applicable smartCHECK endpoints and forms an integral part of Verifik's redundancy and failover strategy. This mechanism allows Verifik to maintain closer to one hundred percent (100%) service uptime and coverage on certain endpoints by dynamically routing requests to alternative available sources when necessary.

The Client further acknowledges and agrees that:

a) Dynamic Query is intended to increase the likelihood of successful verification responses but does not guarantee a successful match in all cases;

b) Response times may vary and, in some cases, be longer than standard single-source queries due to the cascading nature of multiple source requests;

c) The effectiveness and availability of Dynamic Query remain subject to the uptime, accessibility, and data quality of the underlying third-party or governmental sources; and

d) Verifik reserves the right to modify, prioritize, or substitute data sources within the Dynamic Query architecture at its sole discretion in order to maintain service continuity, optimize coverage, and improve verification performance.

Dynamic Query shall be considered an inherent feature of the smartCHECK Service and shall apply automatically to all Clients using eligible endpoints, unless otherwise specified in writing by Verifik.

##### **8.1 Dynamic pricing (billing)** {#dynamic-pricing-billing}

When Dynamic Query uses an extended verification path on an eligible endpoint and returns a successful match (HTTP 200), dynamic pricing may apply. In that case, credits are deducted at the premium tier for that endpoint family—not at the standard tier associated with the base route.

Dynamic pricing applies today to the standard Colombia national ID endpoint (GET/POST /v2/co/cedula) when an extended verification path completes successfully after standard paths do not return a match. Credit amounts depend on the Client's configured feature pricing (standard rate vs. premium rate for that endpoint family).

Dynamic pricing does not change the Section **7** charge rules for HTTP status codes: validation and server errors (**403**, **409**, **412**, **422**, **500**) and **timeouts** are not charged. HTTP **404** charges follow **only** Section **7.1** (including **`CEDULA NO EXISTE`** on **`/v2/co/cedula`**, billed at the vigencia price tier). No other HTTP **404** is billed.

For transparency, the Client may pass includeCost=true on eligible requests to receive a billing object when credits are charged (including when dynamic pricing applies). API request history records adjustment metadata (for example, standard vs. charged amounts).

Calling /v2/co/cedula/premium directly always uses premium pricing; dynamic pricing describes automatic escalation from the standard /v2/co/cedula route.

See [Colombia National ID (basic)](/identity-validation/colombia/colombian-citizen#dynamic-pricing) for API details.

#### **9. Platform Unavailability**

Scheduled maintenance windows will take place at night and/or on weekends, with prior notification via email to users.

#### **10. New Adaptations or Developments**

The timeframes for developing new adaptations due to unexpected changes from User systems integrating via API with the Platform will vary according to the changes required by the User and will not count as Platform Downtime.
