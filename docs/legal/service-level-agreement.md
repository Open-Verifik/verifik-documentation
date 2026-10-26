---
id: service-level-agreement
title: Service Level Agreement
description: Support, availability, and performance commitments for Verifik services
---

# Service Level Agreement (SLA)

**Support, availability, and performance of the services**

**Version 1.0 | Publication date: October 26, 2026**

This SLA describes the support channels, service objectives, and availability commitments for the Verifik services identified below. The support described is included at no additional charge, unless a commercial agreement expressly provides otherwise.

**Scope and application.** This document may be incorporated into contracts that expressly identify it. Particular terms signed by the parties prevail in the event of a conflict. Publishing later versions does not, by itself, modify contracts already in force.

## 1. Support channels and hours

The customer will have access to the following Verifik support channels:

1. Support tickets in the [Client Panel](https://ai.verifik.co/).
2. Email: [support@verifik.co](mailto:support@verifik.co).
3. Customer-service Discord channel.

The customer may access the support provided by Verifik Monday through Friday, from 8:00 a.m. to 5:00 p.m. (UTC-5), except on national holidays (“Normal Support Hours”).

## 2. Incident response and resolution times

Incidents reported by the customer will be classified by Verifik according to their severity, operational impact, and scope, under the following service levels:

| Incident severity | Description | First-response time | Resolution objective |
| --- | --- | --- | --- |
| Level 1. Critical | Incidents that cause a total interruption of the platform, severely affect its essential functions, or involve a critical security vulnerability. | Within one (1) hour during Normal Support Hours. | Within twenty-four (24) hours. |
| Level 2. High | Incidents that cause significant service degradation or affect important functions without a total interruption. | Within four (4) hours during Normal Support Hours. | Within two (2) business days. |
| Level 3. Low | Incidents of limited impact, minor errors, and technical inquiries that do not significantly compromise operation of the service. | Within eight (8) hours during Normal Support Hours. | Within five (5) business days. |

### Service conditions

a) First-response times are calculated exclusively within the Normal Support Hours established in section 1.

b) The first response is a communication from Verifik confirming that the incident has been received and is being handled. Automatic acknowledgment replies are not a first response for purposes of this section.

c) Resolution times are operational objectives subject to commercially reasonable efforts. They are not warranties that an incident will be resolved within a stated period.

d) Verifik determines the classification of incidents based on their severity and technical impact, and may change that classification when circumstances justify it.

e) Resolution times may be affected by circumstances beyond Verifik’s reasonable control, including interruptions, failures, or restrictions on access to government sources or third-party services.

f) When an incident cannot be resolved within the target period, Verifik will continue to use commercially reasonable efforts to resolve it and will inform the customer of its status and relevant progress.

## 3. Service availability and response times

Service availability is evaluated monthly according to Table 1, excluding scheduled downtime. Scheduled downtime comprises platform maintenance and update windows, planned for lower-demand hours in order to minimize interruptions.

Verifik may periodically publish recurring scheduled-downtime windows. “Recurring Scheduled Downtime” means unavailability windows that occur at fixed times under recurring calendars and that are published as part of Verifik’s API documentation.

Verifik will give at least seven (7) calendar days’ prior written notice of scheduled maintenance outside the published recurring windows, except in emergencies that require immediate intervention to preserve the security or continuity of the service. Windows will preferably take place at night or on weekends.

### Table 1. Service availability

| Availability | Product |
| --- | --- |
| Databases: 90.00% or higher | smartCHECK, DB Screening |
| Email/phone: 99.00% or higher | smartACCESS, smartENROLL |
| Biometrics: 99.00% or higher | smartACCESS, smartENROLL |
| Document scanning: 99.00% or higher | smartENROLL, smartACCESS |

The database-verification API depends on connections to government sources. Verifik does not own or control those access points.

### 3.1. Availability exclusions for DB Screening / smartCHECK {#availability-exclusions}

Because the operational availability of certain external data sources has historically been unpredictable, specific endpoints are excluded from the platform availability commitments and from the downtime-compensation provisions of this Agreement.

The following endpoints are excluded:

- Mexico – INE validation
- Mexico – vehicle-plate validation

Interruptions, maintenance periods, degraded performance, delayed responses, or temporary unavailability affecting these endpoints:

- are not treated as platform downtime;
- are not included in platform availability calculations;
- do not qualify for service credits or any other compensation under this Agreement.

Verifik will continue to use commercially reasonable efforts to maintain connectivity and to restore the service when possible. No uptime warranty is offered for the listed endpoints.

### 3.2. How availability is measured

Availability is calculated per account for each calendar month in UTC:

```
availability = successful requests / (successful requests + service failures)
```

Service failures are requests that time out, return a 5xx error or a 408 or 504 response, or indicate that the endpoint is out of service.

Client errors are left out of the calculation. They include invalid or missing parameters, records not found at the source, authentication and permission errors, and other 4xx responses.

Customers may view monthly availability in the Client Panel and, when enabled, through the Usage API, with a breakdown by service. The endpoints in section 3.1 are excluded from the availability commitments.

### 3.3. Operational query response-time objectives

Response times for queries to government databases (DB Screening / smartCHECK) are operational performance objectives of Verifik, aimed at providing the services efficiently.

Under normal operating conditions, Verifik will seek to meet the following objectives:

a) **Target response time:** use commercially reasonable efforts to respond to queries within one (1) second.

b) **Target average time:** keep the average response time at or below three (3) seconds per query, measured monthly.

c) **Target maximum time:** seek to keep individual queries from exceeding ten (10) seconds of response time.

Response times may vary because of the availability, capacity, maintenance, latency, and other technical conditions of government or third-party information sources, and because of Dynamic Query mechanisms that must query multiple information sources in sequence, as set out in the [Billing and Credit Consumption Policy](/legal/billing-policy).

The times above are reference operational objectives. They are not performance warranties, obligations of result, or commitments to a maximum response time.

The customer acknowledges that response times may vary because of the availability, capacity, maintenance, latency, and other technical conditions of government or third-party information sources, and because of Dynamic Query mechanisms that access multiple sources in sequence.

For measurement purposes, response time is the processing of a single API request, excluding transmission delays on Internet networks outside Verifik’s control.

Failure to meet these operational objectives does not, by itself, constitute a breach of contract and does not give rise to compensation, service credits, or penalties. This does not release Verifik from the obligations it has expressly assumed regarding its own infrastructure, platform availability, and the other commitments applicable under this Agreement.

This section is read together with [section 6](#source-warranty-limitations) of this SLA, on warranty limitations for government sources.

### 3.4. Contract objectives

The Client Panel and the Usage API may compare monthly smartCHECK performance with the 90% reference objective. Specific contractual objectives apply only when they are expressly included in the customer’s commercial terms. Otherwise, the figures shown are informational. The display does not create compensation beyond what section 4 provides.

## 4. Compensation for missing availability levels

Compensation for missing the availability levels in this SLA is available only when the unavailability is attributable to internal failures of Verifik and has produced actual charges to the customer for API queries that were not successfully processed.

In those cases, compensation consists of restoring the credits actually deducted for those queries. Additional credits are not issued for requests that were not billed.

For smartCHECK (DB Screening), interruptions or limitations of government sources do not give rise to compensation, under the exclusions and limitations in sections [3.1](#availability-exclusions) and [6](#source-warranty-limitations) of this SLA.

The availability percentages in section 3 are the reference levels used to evaluate service performance. Missing them does not automatically produce monetary compensation when there are no actual charges that can be restored.

Compensation under this section is granted as service credits applicable to future consumption, not as cash refunds, without prejudice to the rights the parties may have for a material breach under the applicable commercial contract.

| Service | No compensation | Compensation |
| --- | --- | --- |
| Databases (smartCHECK, DB Screening) | 90.00% or higher | 89.99% or lower |
| Email/phone (smartACCESS, smartENROLL) | 99.00% or higher | 98.99% or lower |
| Biometrics (smartACCESS, smartENROLL) | 99.00% or higher | 98.99% or lower |
| Document scanning (smartENROLL, smartACCESS) | 99.00% or higher | 98.99% or lower |

Internal problems of the database-verification service (data lookup) exclude problems treated as force majeure (fortuitous event) arising from migrations, disconnections, or external intervention by the governments that hold the databases. Verifik acts as an intermediary and therefore has no power or control over the databases that are queried.

## 5. Dynamic Query for the smartCHECK service {#dynamic-query}

As part of the standard architecture of the smartCHECK service, Verifik implements a Dynamic Query mechanism designed to maximize availability, coverage, and reliability on compatible endpoints.

Dynamic Query lets smartCHECK and DB Screening automatically and sequentially query multiple authorized data sources when the primary data source returns an unsatisfactory response, including, without limitation, “Not Found” responses or equivalent HTTP 400-level responses. This architecture is intended to increase the likelihood of a satisfactory verification result by using multiple eligible data sources.

The customer acknowledges and agrees that the quality, integrity, and availability of government databases may vary significantly by jurisdiction, and that certain databases may be more likely to return unsatisfactory responses because of incomplete records, service interruptions, or limited data coverage.

To mitigate those limitations, Dynamic Query is enabled by default on every applicable smartCHECK endpoint and is an integral part of Verifik’s redundancy and failover strategy. On certain endpoints, this mechanism lets Verifik maintain service availability and coverage close to one hundred percent (100%) by dynamically routing requests to available alternative sources when necessary.

The customer further acknowledges and agrees that:

a) Dynamic Query is intended to increase the likelihood of satisfactory verification responses, and it does not guarantee a satisfactory match in every case.

b) Response times may vary and, in some cases, may be longer than those of standard single-source queries because requests to multiple sources are made in cascade.

c) The effectiveness and availability of Dynamic Query remain subject to the uptime, accessibility, and data quality of the underlying third-party or government sources.

d) Verifik reserves the right to modify, prioritize, or replace data sources within the Dynamic Query architecture, at its sole discretion, in order to maintain service continuity, optimize coverage, and improve verification performance.

Dynamic Query is an inherent feature of the smartCHECK service and applies automatically to every customer that uses eligible endpoints, unless Verifik provides otherwise in writing.

The billing rules associated with Dynamic Query, including dynamic pricing for the Colombian national ID, are in the [Billing and Credit Consumption Policy](/legal/billing-policy).

## 6. Warranty limitations for information sources {#source-warranty-limitations}

Verifik does not own or operate the government databases that are queried and does not control their updating, availability, or accuracy. Verifik therefore does not warrant the response time, average uptime, or accuracy of data from those sources. This limitation applies only to smartCHECK (DB Screening) services and does not release Verifik from the obligations it has expressly assumed regarding its own infrastructure.

**Version control.** Verifik identifies new versions of this SLA by their publication date. Changes to contracts already in force follow the amendment rules agreed in each contract.

<a id="dynamic-pricing-billing"></a>

**Related documents.** Billing rules and dynamic pricing are in the [Billing and Credit Consumption Policy](/legal/billing-policy#dynamic-pricing-billing).
