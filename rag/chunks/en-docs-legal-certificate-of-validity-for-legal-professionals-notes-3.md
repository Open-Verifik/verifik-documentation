---
id: "en-docs-legal-certificate-of-validity-for-legal-professionals-notes-3"
title: "Certificate of Validity for Legal Professionals — Notes"
sourcePath: "docs/legal/certificate-of-validity-for-legal-professionals.mdx"
locale: "en"
category: "legal"
tags:
  - "co"
  - "legal"
endpoints:
  - "/v2/co/rama/certificado/vigencia"
  - "/v2/co/rama/certificado/vigencia?documenttype=cc&documentnumber=123456789&quality=abg"
sourceAnchor: "Notes"
slug: "/legal/certificate-of-validity-for-legal-professionals"
url: "https://docs.verifik.co/legal/certificate-of-validity-for-legal-professionals"
---

# Certificate of Validity for Legal Professionals
**API path(s):** /v2/co/rama/certificado/vigencia, /v2/co/rama/certificado/vigencia?documenttype=cc&documentnumber=123456789&quality=abg

## Notes

- **`documentType`** is restricted to **`CC`** or **`CE`** at the API layer (not NIT).
- Typical **`quality`** values include **`ABG`** (lawyer), **`JUEZPAZ`**, and **`LT`**; confirm the code required for your integration.
