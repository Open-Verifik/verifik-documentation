---
id: "en-docs-background-check-brazil-response-2"
title: "Background Check (CPF) — Response"
sourcePath: "docs/background-check/brazil.mdx"
locale: "en"
category: "background-check"
tags:
  - "br"
  - "background-check"
endpoints:
  - "/v2/br/background-check"
  - "/v2/br/background-check?documenttype=cpf&documentnumber=012.345.678-01&dateofbirth=17/02/2002"
sourceAnchor: "Response"
slug: "/background-check/brazil"
url: "https://docs.verifik.co/background-check/brazil"
---

# Background Check (CPF)
**API path(s):** /v2/br/background-check, /v2/br/background-check?documenttype=cpf&documentnumber=012.345.678-01&dateofbirth=17/02/2002

## Response

```json
{
  "data": {
    "documentType": "CPF",
    "documentNumber": "012.345.678-01",
    "firstName": "João",
    "lastName": "Silva",
    "fullName": "João Silva",
    "dateOfBirth": "17/02/2002",
    "certificationNumber": "123456789",
    "canIssueReports": true,
    "associatedNames": ["João Silva Santos"],
    "pdfReport": "base64_encoded_pdf_content",
    "status": "clear"
  },
  "signature": {
    "dateTime": "April 11, 2023 12:25 PM",
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
  "message": "missing documentType\n. missing documentNumber\n. missing dateOfBirth\n"
}
```

  
  

```json
{
  "code": "MissingParameter",
  "message": "documentType must be one of: [CPF]"
}
```

### Features

-   **CPF Verification**: Verify the authenticity of Brazilian CPF documents
-   **Complete Background Data**: Returns full name, document details, certification number, and PDF report
-   **Structured Response**: Organized data format for easy integration
-   **Multiple Programming Languages**: Support for JavaScript, Python, PHP, and Swift
-   **Error Handling**: Comprehensive error responses for various scenarios
