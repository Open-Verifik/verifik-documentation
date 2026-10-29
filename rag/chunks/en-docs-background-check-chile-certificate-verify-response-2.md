---
id: "en-docs-background-check-chile-certificate-verify-response-2"
title: "Chile - Civil Registry Certificate Verification — Response"
sourcePath: "docs/background-check/chile-certificate-verify.mdx"
locale: "en"
category: "background-check"
tags:
  - "cl"
  - "background-check"
endpoint: "/v2/cl/registro-civil/certificado"
sourceAnchor: "Response"
slug: "/background-check/chile-certificate-verify"
url: "https://docs.verifik.co/background-check/chile-certificate-verify"
---

# Chile - Civil Registry Certificate Verification
**API path(s):** /v2/cl/registro-civil/certificado

## Response

```json
{
  "data": {
    "response": "Certificado verificado correctamente",
    "urlPDF": "https://www.registrocivil.cl/OficinaInternet/verificacion/sandbox-50070080804.pdf",
    "pdfBase64": "JVBERi0xLjMKJeLjz9MKMSAwIG9iago8PC9UeXBlL0NhdGFsb2cv...",
    "verificationCode": "2aacbb9a636a",
    "folio": "50070080804",
    "details": {
      "name": "JUAN CARLOS PEREZ GONZALEZ",
      "run": "12.345.678-9",
      "dateOfBirth": "15/08/1985",
      "registers": [
        {
          "register": "Registro General de Condenas",
          "run": "12.345.678-9",
          "fines": "No registra anotaciones"
        },
        {
          "register": "Registro Especial de Condenas por Actos de Violencia Intrafamiliar",
          "run": "12.345.678-9",
          "fines": "No registra anotaciones"
        }
      ]
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
  "message": "missing folio\n. missing verificationCode\n"
}
```

```json
{
  "code": "MissingParameter",
  "message": "folio length must be at least 10 characters long"
}
```

### Notes

- `folio` must be between **10 and 15** characters.
- Upstream timeouts from the Registro Civil source may return **409** `timeout_data_source`.
- In **sandbox mode**, use `folio=50070080804` and `verificationCode=2aacbb9a636a` for a stable sample response; `folio=9004040100001` returns **404**.
