---
id: "en-docs-verifik-llc-service-level-agreement-dynamic-pricing-billing-3"
title: "Service Level Agreement — Dynamic pricing (billing)"
sourcePath: "docs/verifik-llc/service-level-agreement.md"
locale: "en"
category: "verifik-llc"
tags:
  - "verifik-llc"
sourceAnchor: "Dynamic pricing (billing)"
slug: "/verifik-llc/service-level-agreement"
url: "https://docs.verifik.co/verifik-llc/service-level-agreement"
---

# Service Level Agreement

## Dynamic pricing (billing)

When Dynamic Query uses an extended verification path on an eligible endpoint and returns a successful match (**HTTP 200**), **dynamic pricing** may apply. In that case, credits are deducted at the **premium tier** for that endpoint family—not at the standard tier associated with the base route.

Dynamic pricing applies today to the standard Colombia national ID endpoint (**`GET/POST /v2/co/cedula`**) when an extended verification path completes successfully after standard paths do not return a match. Credit amounts depend on the **Client's configured feature pricing** (standard rate vs. premium rate for that endpoint family).

Dynamic pricing **does not** change the smartCHECK charge rules above: validation and server errors (**403**, **409**, **412**, **422**, **500**) are not charged; **404** responses are charged at the standard tier when no successful match is returned across applicable paths.

For transparency, the Client may pass **`includeCost=true`** on eligible requests to receive a **`billing`** object when credits are charged (including when dynamic pricing applies). API request history records adjustment metadata (for example, standard vs. charged amounts).

Calling **`/v2/co/cedula/premium`** directly always uses premium pricing; dynamic pricing describes automatic escalation from the standard **`/v2/co/cedula`** route.

See [Colombia National ID (basic)](/identity-validation/colombia/colombian-citizen#dynamic-pricing) for API details.

## Contact Information

For support requests, please contact:

**Email**: support@verifik.co
**Website**: [Verifik.co](http://verifik.co)
**Discord**: Customer service channel
