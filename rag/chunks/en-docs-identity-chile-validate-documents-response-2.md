---
id: "en-docs-identity-chile-validate-documents-response-2"
title: "Chile — Identity document validation — Response"
sourcePath: "docs/identity/chile-validate-documents.mdx"
locale: "en"
category: "identity"
tags:
  - "cl"
  - "identity"
endpoint: "/v2/cl/validate/documents"
sourceAnchor: "Response"
slug: "/identity/chile-validate-documents"
url: "https://docs.verifik.co/identity/chile-validate-documents"
---

# Chile — Identity document validation
**API path(s):** /v2/cl/validate/documents

This endpoint checks **document vigency** for Chilean **RUN** or **RUT** using the **printed serial number** on the physical ID, in addition to the identifier. Use it when you must confirm that a **card** is **valid** (not only that the number exists)—for example **high-assurance KYC** or **compliance** steps that go beyond a simple cedula lookup.
For name-only verification against civil registry without serial, use **[Identity verification in Chile](/identity/chile)** (`v2/cl/cedula`).

## Response

```json
{
  "data": {
    "documentType": "RUN",
    "documentNumber": "18.562.530-3",
    "serialNumber": "A123456789",
    "status": "Vigente"
  },
  "signature": {
    "dateTime": "April 9, 2026 4:00 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "CLVAL1"
}
```

  
  

```json
{
  "code": "NotFound",
  "message": "Record not found."
}
```

  
  

```json
{
  "code": "MissingParameter",
  "message": "documentType must be one of: [RUT, RUN]"
}
```

### Notes

- The exact `status` string depends on the upstream registry wording; treat it as a **vigency indicator**, not a substitute for legal advice.
- Collect **`serialNumber`** from the physical document; without it, validation cannot complete against the civil **Registro Civil** flow.
