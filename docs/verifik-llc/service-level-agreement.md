---
id: service-level-agreement-llc
title: Service Level Agreement
description: Verifik's service level agreement and support terms
slug: /verifik-llc/service-level-agreement
---

# Service Level Agreement

## Service Channels

The User shall have access to the following Verifik service channels:

1. CRM on [Verifik.co](http://verifik.co)
2. Email support@verifik.co
3. Customer service Discord channel

## Hours of Operation

The User will be able to access the support provided by Verifik, Monday through Friday (business days) from 8:00 AM to 5:00 PM UTC-5

## Criticality Levels

The requests or requirements raised by Users to the support team will be classified according to the impact they have on the User's operation, as follows:

| **Critical:** | Total service unavailability.                                                |
| ------------- | ---------------------------------------------------------------------------- |
| **Urgent:**   | Loss of specific functionality for all use cases.                            |
| **Medium:**   | Loss of functionality in specific cases.                                     |
| **Normal:**   | Other requests or general inquiries that do not affect Service Availability. |

## Support Response Times

### Definitions

Terms used in this section, shall have the following meanings:

i. **Attention**: The time elapsed between the request or requirement and the assignment of a service agent.
ii. **Review**: The time elapsed between the agent's greeting and the first response regarding the request or requirement.
iii. **Escalation**: The time elapsed between the agent's escalation and the case review by the person to whom it was escalated. This time only applies in events where it is necessary to escalate the user's request or requirement.
iv. **Resolution**: The time elapsed between the agent's greeting and the moment the case is resolved.

The response time varies according to the criticality of the requirement, as follows:

| **SEVERITY/TIME** | **ATTENTION** | **REVIEW** | **ESCALATION** | **RESOLUTION** |
| ----------------- | ------------- | ---------- | -------------- | -------------- |
| **Critical**      | 0.5 hr        | 0.5 hr     | 15 mins        | 48 hrs         |
| **Urgent**        | 0.5 hr        | 0.5 hr     | 15 mins        | 48 hrs         |
| **Medium**        | 1 hr          | 1 hr       | 0.5 hr         | 96 hrs         |
| **Normal**        | 1 hrs         | 1 hrs      | 0.5 hr         | 96 hrs         |

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

## Contact Information

For support requests, please contact:

**Email**: support@verifik.co
**Website**: [Verifik.co](http://verifik.co)
**Discord**: Customer service channel
