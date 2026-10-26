---
id: billing-policy
title: Billing and Credit Consumption Policy
description: Billing rules for API queries and dynamic pricing
slug: /legal/billing-policy
---

# Billing and Credit Consumption Policy

**Billing rules for API queries and dynamic pricing**

**Version 1.0 | Publication date: October 26, 2026**

This policy describes the general billing and credit-consumption rules that apply to the services identified here. Rates and particular terms are those expressly agreed with each customer. Publishing changes to this policy does not unilaterally modify contracts already in force.

## 1. smartCHECK (DB Screening) billing scheme

### 1.1. General billing rule

The billing scheme applies to the smartCHECK (DB Screening) solution, which queries government databases.

**General rule.** An HTTP 200 response is charged. HTTP 403, 412, 422, and 500 are not charged; neither are timeouts; nor HTTP 409 (including source unavailability and connection failures). HTTP 404 is charged only in the cases expressly indicated in section 1.2.

| Charged | Not charged |
| --- | --- |
| 200 | 403 |
|  | 404 |
|  | 409 |
|  | 412 |
|  | 422 |
|  | 500 |
|  | Timeout |

No endpoint outside Colombia is charged for HTTP 404. Endpoints that are not included in section 1.2 are also not charged for HTTP 404.

### 1.2. Colombia: HTTP 404 billing exceptions

This section is the only source of HTTP 404 charges in smartCHECK. Every route below is a Colombia API. Timeouts and HTTP 409 source failures are not charged.

**RUNT** (only an HTTP 404 with response code `NotFound`). HTTP 409 responses (for example, when the source is out of service or a RUNT worker is unavailable) are not charged.

| Product name | Route |
| --- | --- |
| Colombia RUNT driver lookup | `GET /v2/co/runt/conductor` |
| Colombia RUNT driver lookup (v3) | `GET /v3/co/runt/conductor` |
| Colombia RUNT vehicle lookup | `GET /v2/co/runt/vehiculo` |
| Colombia RUNT full vehicle record | `GET /v2/co/runt/vehiculo-completo` |
| Colombia RUNT vehicle SOAT | `GET /v2/co/runt/vehiculo-soat` |
| Colombia RUNT vehicle by plate | `GET /v2/co/runt/vehicle-by-plate` |
| Colombia RUNT vehicle by VIN | `GET /v2/co/runt/vehicle-by-vin` |
| Colombia RUNT vehicle by plate (simplified) | `GET /v2/co/runt/vehicle-by-plate-simplified` |
| Colombia RUNT vehicle by plate only | `GET /v2/co/runt/vehicle-by-plate-only` |

**Social-security affiliations.** Any HTTP 404 on the following route is billable, including when the message indicates an incorrect issue date. Connection failures that return HTTP 409 are not charged.

| Product name | Route |
| --- | --- |
| Colombia social-security affiliations | `GET /v2/co/afiliaciones` |

**SIBGA vehicle valuation** (only an HTTP 404 with response code `NotFound`).

| Product name | Route |
| --- | --- |
| Colombia SIBGA vehicle valuation | `GET /v2/co/sibga/valuation` |

**Colombian citizenship card (cédula).** Only an HTTP 404 whose message is `CEDULA NO EXISTE` is charged, at the validity-check rate. Any other HTTP 404 on the following route is not charged. `GET`/`POST /v2/co/cedula/vigencia` does not charge its own HTTP 404 responses.

| Product name | Route |
| --- | --- |
| Colombian citizenship-card lookup | `GET` / `POST /v2/co/cedula` |

**Not charged on HTTP 404:** other Colombia RUNT routes (including owner lookups), every endpoint outside Colombia, and every route not listed in this section. Facial liveness may charge HTTP 409 for a liveness failure; it is not charged on HTTP 404. smartBatch uses HTTP 404 only to mark rows as successful and does not charge credits for those responses.

## 2. Dynamic Query for smartCHECK

The technical description of Dynamic Query is in [section 5 of the Service Level Agreement](/legal/service-level-agreement#dynamic-query). This policy does not repeat it.

For billing purposes, on compatible endpoints Verifik may automatically and sequentially query alternative information sources when the primary source does not produce a satisfactory result. Dynamic Query may increase response times because it requires successive queries. Verifik may modify, prioritize, or replace the sources used in order to optimize the service. That does not authorize unilateral changes to agreed rates.

## 3. Dynamic pricing for the Colombian citizenship-card lookup {#dynamic-pricing-billing}

The customer acknowledges and agrees that queries made through the `GET`/`POST /v2/co/cedula` endpoints may be subject to dynamic pricing, depending on the information source used and on the result obtained through the Dynamic Query mechanism described in [section 5 of the Service Level Agreement](/legal/service-level-agreement#dynamic-query) and referred to in section 2 of this policy.

### 3.1. Standard and premium rates

When the query is successfully resolved (HTTP 200) through the standard sources, the standard rate for the Colombian national-ID lookup applies.

When the standard sources do not produce a satisfactory match and Dynamic Query obtains a successful response (HTTP 200) through an extended or premium verification source, the corresponding premium rate applies, even if the customer used the standard endpoint.

Standard and premium rates are those expressly agreed with each customer in the contract or rate schedule accepted by both parties.

### 3.2. Relationship to contractual rates

For the `GET`/`POST /v2/co/cedula` endpoints, the standard or premium category is determined under this policy, provided the applicable contract expressly incorporates this rule. If it conflicts with a general per-query rate, the specific category-selection rule prevails only when the contract so provides.

This rule does not authorize Verifik to unilaterally change the values of rates already agreed.

### 3.3. Unsuccessful responses and billing exceptions

HTTP 404 responses are charged only under the exceptions in section 1.2 and at the rate defined there.

Other non-billable responses are governed by section 1.1.

### 3.4. Billing transparency {#include-cost}

The customer may use the `includeCost=true` parameter on eligible requests to obtain information about the credits billed.

API request history shows consumption records and the corresponding billing adjustments, including cases in which the premium rate applies through Dynamic Query.

### 3.5. Direct premium lookup

Queries made directly through the `/v2/co/cedula/premium` endpoint are subject to the corresponding premium rate, whether or not the automatic escalation mechanism was used.

The provisions of this section apply only to the endpoints identified here and do not change the rates or billing terms of the other contracted services.

See [Colombian Citizen](/identity-validation/colombia/colombian-citizen) (basic national ID) for the API details.

**Term and particular conditions.** In the event of a discrepancy, the economic terms expressly accepted in the commercial contract prevail, except for the dynamic-pricing exceptions that contract specifically incorporates.
