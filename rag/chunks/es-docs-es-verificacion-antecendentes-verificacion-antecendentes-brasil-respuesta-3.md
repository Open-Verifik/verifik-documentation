---
id: "es-docs-es-verificacion-antecendentes-verificacion-antecendentes-brasil-respuesta-3"
title: "Verificación de antecedentes (CPF) — Respuesta"
sourcePath: "docs-es/verificacion-antecendentes/verificacion-antecendentes-brasil.mdx"
locale: "es"
category: "verificacion-antecendentes"
tags:
  - "br"
  - "verificacion-antecendentes"
endpoint: "/v2/br/background-check"
sourceAnchor: "Respuesta"
slug: "/verificacion-antecendentes/verificacion-antecendentes-brasil"
url: "https://docs.verifik.co/verifik-es/verificacion-antecendentes/verificacion-antecendentes-brasil"
---

# Verificación de antecedentes (CPF)
**API path(s):** /v2/br/background-check

## Respuesta

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

### Características

-   **Verificación de CPF**: Verificar la autenticidad de documentos CPF brasileños
-   **Datos Completos de Antecedentes**: Retorna nombre completo, detalles del documento, número de certificación y reporte PDF
-   **Respuesta Estructurada**: Formato de datos organizado para fácil integración
-   **Múltiples Lenguajes de Programación**: Soporte para JavaScript, Python, PHP y Swift
-   **Manejo de Errores**: Respuestas de error comprensivas para varios escenarios
