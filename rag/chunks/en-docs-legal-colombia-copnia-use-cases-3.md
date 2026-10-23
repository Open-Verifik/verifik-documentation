---
id: "en-docs-legal-colombia-copnia-use-cases-3"
title: "Colombia — COPNIA professional licenses by document — Use cases"
sourcePath: "docs/legal/colombia-copnia.mdx"
locale: "en"
category: "legal"
tags:
  - "co"
  - "legal"
endpoint: "/v2/co/copnia"
sourceAnchor: "Use cases"
slug: "/legal/colombia-copnia"
url: "https://docs.verifik.co/legal/colombia-copnia"
---

# Colombia — COPNIA professional licenses by document
**API path(s):** /v2/co/copnia

Verifik queries **COPNIA** (*Consejo Profesional Nacional de Ingeniería*) using **`documentType`** and **`documentNumber`**. The live source is the COPNIA Certificate of Good Standing portal. Use this endpoint for **credentialing**, **hiring**, and **compliance** checks on Colombian engineering professionals.

## Use cases

- **Hiring** and **contractor** credentialing for engineering roles
- **Compliance** checks before awarding public or private contracts
- **Workforce** onboarding when a COPNIA matrícula is required

### Notes

- Sandbox document example: **`CC` / `80176161`**. The sandbox license number is **`091132-0839078 CNDC`**.
- At most **10** licenses are detail-hydrated. Extra rows keep `licenseNumber` and `profession` only. A failed detail fetch is omitted silently (the list row remains).
- A source or session failure can return **`409`** with `timeout_data_source`.
- Treat responses as **sensitive personal data** and follow Colombian habeas data rules.
- To look up one matrícula by registration number, use [COPNIA by license](/legal/colombia-copnia-license).
