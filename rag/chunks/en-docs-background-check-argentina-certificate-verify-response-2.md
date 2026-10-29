---
id: "en-docs-background-check-argentina-certificate-verify-response-2"
title: "Argentina - Criminal Record Certificate — Response"
sourcePath: "docs/background-check/argentina-certificate-verify.mdx"
locale: "en"
category: "background-check"
tags:
  - "ar"
  - "background-check"
endpoint: "/v2/ar/dnrec/antecedentes"
sourceAnchor: "Response"
slug: "/background-check/argentina-certificate-verify"
url: "https://docs.verifik.co/background-check/argentina-certificate-verify"
---

# Argentina - Criminal Record Certificate
**API path(s):** /v2/ar/dnrec/antecedentes

## Response

```json
{
  "data": {
    "urlPDF": "https://www.dnrec.jus.gov.ar/ConsultaCAP/Certificado.aspx?solic=02118499487&segur=371488F861",
    "pdfBase64": "JVBERi0xLjMKJeLjz9MKMSAwIG9iago8PC9UeXBlL0NhdGFsb2cv...",
    "requestCode": "02118499487",
    "securityCode": "371488F861",
    "details": {
      "name": "MARIA ELENA LOPEZ",
      "dni": "27123456",
      "dateOfBirth": "15/03/1985",
      "nationality": "ARGENTINA",
      "procedureCode": "DNREC01",
      "issueDate": "10 de junio de 2024",
      "criminalRecordStatement": "No registra antecedentes penales a informar por esta Reparticion"
    }
  },
  "signature": {
    "dateTime": "June 23, 2026 10:00 AM",
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
  "message": "missing requestCode\n. missing securityCode\n"
}
```

### Notes

- Both `requestCode` and `securityCode` are required; missing values return **409** `MissingParameter`.
- Invalid or expired certificate codes return **404** `NotFound`.
- In **sandbox mode**, use `requestCode=02118499487` and `securityCode=371488F861` for a stable sample response; `requestCode=90040401` returns **404**.
