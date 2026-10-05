---
id: "en-docs-legal-verify-colombian-affiliations-features-3"
title: "Colombia — Health & social security affiliations — Features"
sourcePath: "docs/legal/verify-colombian-affiliations.mdx"
locale: "en"
category: "legal"
tags:
  - "co"
  - "legal"
endpoint: "/v2/co/afiliaciones"
sourceAnchor: "Features"
slug: "/legal/verify-colombian-affiliations"
url: "https://docs.verifik.co/legal/verify-colombian-affiliations"
---

# Colombia — Health & social security affiliations
**API path(s):** /v2/co/afiliaciones

Verifik returns **affiliation and personal data** for a Colombian individual from official **health and social security** sources (including **RUAF / SISPRO** flows), using **document type**, **document number**, and **document issue date**. Typical blocks include **EPS** (health), **ARL** (occupational risk), **pension (AP)**, **caja de compensación**, and **cesantías**, plus **personal** fields when returned by the source.
This endpoint is **GET-only** (query parameters). Use it for **employment**, **benefits**, and **compliance** checks where this data is allowed.

## Features

- **Supported document types** at validation: **CC**, **CE**, **PA**, **PE**
- **Issue date** must match **`DD/MM/YYYY`**

## Use cases

- **Employment** and **contractor** onboarding
- **Benefits** and **payroll** eligibility checks

### Notes

- **`date`** is the **document issue date**, not the date of birth.
- This route is exposed as **GET** with **query parameters** only (no **POST** in the current backend).
- **`PE`** is **permiso especial de permanencia** (as used in the integration), not “PEP” in the sense of politically exposed persons.
- A **404** (record not found or incorrect expedition date) is billed. Connection failures (captcha, timeout, or upstream outage) return **409** with `Unable to connect to the source. Please try again later.` and are not billed.
- Response fields can include **special-category personal data**; use only where permitted by law and policy.
