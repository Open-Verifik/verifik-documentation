---
id: "es-docs-es-verificacion-antecendentes-verificacion-antecendentes-chile-certifica-respuesta-2"
title: "Chile - Verificación de Certificado del Registro Civil — Respuesta"
sourcePath: "docs-es/verificacion-antecendentes/verificacion-antecendentes-chile-certificado-registro-civil.mdx"
locale: "es"
category: "verificacion-antecendentes"
tags:
  - "cl"
  - "verificacion-antecendentes"
endpoint: "/v2/cl/registro-civil/certificado"
sourceAnchor: "Respuesta"
slug: "/verificacion-antecendentes/verificacion-antecendentes-chile-certificado-registro-civil"
url: "https://docs.verifik.co/verifik-es/verificacion-antecendentes/verificacion-antecendentes-chile-certificado-registro-civil"
---

# Chile - Verificación de Certificado del Registro Civil
**API path(s):** /v2/cl/registro-civil/certificado

## Respuesta

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

### Notas

- `folio` debe tener entre **10 y 15** caracteres.
- Timeouts del Registro Civil pueden devolver **409** `timeout_data_source`.
- En **modo sandbox**, usa `folio=50070080804` y `verificationCode=2aacbb9a636a` para una respuesta de ejemplo estable; `folio=9004040100001` devuelve **404**.
