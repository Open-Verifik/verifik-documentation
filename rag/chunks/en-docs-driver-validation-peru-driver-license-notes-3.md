---
id: "en-docs-driver-validation-peru-driver-license-notes-3"
title: "Peru - Driver License — Notes"
sourcePath: "docs/driver-validation/peru-driver-license.mdx"
locale: "en"
category: "driver-validation"
tags:
  - "pe"
  - "driver-validation"
endpoints:
  - "/v2/pe/driver-license"
  - "/v2/pe/driver-license?documenttype=dni&documentnumber=10000001"
sourceAnchor: "Notes"
slug: "/driver-validation/peru-driver-license"
url: "https://docs.verifik.co/driver-validation/peru-driver-license"
---

# Peru - Driver License
**API path(s):** /v2/pe/driver-license, /v2/pe/driver-license?documenttype=dni&documentnumber=10000001

## Notes

- Only `documentType=DNI` is supported.
- `documentNumber` must be **6–8** digits.
- In **sandbox mode**, use `documentNumber` values **10000001**–**10000010** for stable sample responses; `90040401` returns **404**.
