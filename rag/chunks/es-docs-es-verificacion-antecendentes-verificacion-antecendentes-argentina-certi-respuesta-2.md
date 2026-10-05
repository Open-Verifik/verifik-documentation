---
id: "es-docs-es-verificacion-antecendentes-verificacion-antecendentes-argentina-certi-respuesta-2"
title: "Argentina - Certificado de Antecedentes Penales — Respuesta"
sourcePath: "docs-es/verificacion-antecendentes/verificacion-antecendentes-argentina-certificado-penal.mdx"
locale: "es"
category: "verificacion-antecendentes"
tags:
  - "ar"
  - "verificacion-antecendentes"
endpoint: "/v2/ar/dnrec/antecedentes"
sourceAnchor: "Respuesta"
slug: "/verificacion-antecendentes/verificacion-antecendentes-argentina-certificado-penal"
url: "https://docs.verifik.co/verifik-es/verificacion-antecendentes/verificacion-antecendentes-argentina-certificado-penal"
---

# Argentina - Certificado de Antecedentes Penales
**API path(s):** /v2/ar/dnrec/antecedentes

## Respuesta

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

### Notas

- `requestCode` y `securityCode` son obligatorios; valores faltantes devuelven **409** `MissingParameter`.
- Códigos inválidos o vencidos devuelven **404** `NotFound`.
- En **modo sandbox**, usa `requestCode=02118499487` y `securityCode=371488F861` para una respuesta de ejemplo estable; `requestCode=90040401` devuelve **404**.
