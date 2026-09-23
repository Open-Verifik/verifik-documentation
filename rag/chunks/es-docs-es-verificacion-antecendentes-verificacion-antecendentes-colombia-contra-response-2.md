---
id: "es-docs-es-verificacion-antecendentes-verificacion-antecendentes-colombia-contra-response-2"
title: "Colombia - Certificado de Contraloría — Response"
sourcePath: "docs-es/verificacion-antecendentes/verificacion-antecendentes-colombia-contraloria.mdx"
locale: "es"
category: "verificacion-antecendentes"
tags:
  - "co"
  - "verificacion-antecendentes"
endpoints:
  - "/v2/co/contraloria/certificado"
  - "/v2/co/contraloria/certificado?documenttype=cc&documentnumber=123456789"
sourceAnchor: "Response"
slug: "/verificacion-antecendentes/verificacion-antecendentes-colombia-contraloria"
url: "https://docs.verifik.co/verifik-es/verificacion-antecendentes/verificacion-antecendentes-colombia-contraloria"
---

# Colombia - Certificado de Contraloría
**API path(s):** /v2/co/contraloria/certificado, /v2/co/contraloria/certificado?documenttype=cc&documentnumber=123456789

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

### Features

-   **Certificado de Contraloría**: Verificación del certificado de buena conducta ante la Contraloría General de Colombia
-   **Documento PDF**: Devuelve el certificado oficial codificado en base64
-   **Información oficial**: Certificados emitidos por la autoridad competente
-   **Respuesta estructurada**: Formato de datos organizado para integración sencilla
-   **Varios lenguajes de programación**: Ejemplos en JavaScript, Python, PHP y Swift
-   **Manejo de errores**: Respuestas de error claras para distintos escenarios
