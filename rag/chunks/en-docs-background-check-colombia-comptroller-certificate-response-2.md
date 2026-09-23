---
id: "en-docs-background-check-colombia-comptroller-certificate-response-2"
title: "Colombia - Contraloría Certificate — Response"
sourcePath: "docs/background-check/colombia-comptroller-certificate.mdx"
locale: "en"
category: "background-check"
tags:
  - "co"
  - "background-check"
endpoint: "/v2/co/contraloria/certificado"
sourceAnchor: "Response"
slug: "/background-check/colombia-comptroller-certificate"
url: "https://docs.verifik.co/background-check/colombia-comptroller-certificate"
---

# Colombia - Contraloría Certificate
**API path(s):** /v2/co/contraloria/certificado

## Response

```json
{
  "data": {
    "documentType": "CC",
    "documentNumber": "1020729123",
    "searchDate": "2022-03-22T15:37:23.487Z",
    "pdfBase64": "data:application/pdf;base64,STRING_BASE_64"
  },
  "signature": {
    "dateTime": "March 22, 2022 4:37 AM",
    "message": "Certified by Verifik.co"
  }
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
"message": "missing documentType\n. missing documentNumber\n"
}
```

```json
{
"code": "MissingParameter",
"message": "documentType must be one of: [CC, CE, PA, PEP]"
}
```
