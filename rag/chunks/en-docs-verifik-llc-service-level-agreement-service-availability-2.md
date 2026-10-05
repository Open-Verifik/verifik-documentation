---
id: "en-docs-verifik-llc-service-level-agreement-service-availability-2"
title: "Service Level Agreement — Service Availability"
sourcePath: "docs/verifik-llc/service-level-agreement.md"
locale: "en"
category: "verifik-llc"
tags:
  - "verifik-llc"
sourceAnchor: "Service Availability"
slug: "/verifik-llc/service-level-agreement"
url: "https://docs.verifik.co/verifik-llc/service-level-agreement"
---

# Service Level Agreement

## Service Availability

Verifik commits to maintaining the following service availability standards:

- **Uptime**: 99.9% availability per month
- **Response Time**: API responses within 2 seconds for 95% of requests
- **Maintenance Windows**: Scheduled maintenance will be announced 48 hours in advance

## Service Credits

In the event that Verifik fails to meet the service availability standards, Users may be eligible for service credits as follows:

- **99.0% - 99.9% uptime**: 5% service credit
- **95.0% - 99.0% uptime**: 10% service credit
- **Below 95.0% uptime**: 25% service credit

## Exclusions

The following events are excluded from service availability calculations:

- Scheduled maintenance windows
- Force majeure events
- User-caused issues
- Third-party service outages
- Network connectivity issues outside Verifik's control

## Dynamic Query for smartCHECK Service

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
