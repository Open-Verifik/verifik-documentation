---
id: "es-docs-es-identity-chile-validate-documents-respuesta-2"
title: "Chile — Validación de documento de identidad — Respuesta"
sourcePath: "docs-es/identity/chile-validate-documents.mdx"
locale: "es"
category: "identity"
tags:
  - "cl"
  - "identity"
endpoint: "/v2/cl/validate/documents"
sourceAnchor: "Respuesta"
slug: "/identidad/chile-validate-documents"
url: "https://docs.verifik.co/verifik-es/identidad/chile-validate-documents"
---

# Chile — Validación de documento de identidad
**API path(s):** /v2/cl/validate/documents

Este endpoint comprueba la **vigencia** del documento para **RUN** o **RUT** chileno usando el **número de serie** impreso en la cédula o tarjeta, además del identificador. Úsalo cuando debas confirmar que el **documento físico** es **válido**, no solo que el número existe—por ejemplo en **KYC de alta garantía** o pasos de **cumplimiento** que van más allá de una consulta simple a cédula.
Para verificación nominal contra registro civil **sin** serie, usa **[Verificación de identidad en Chile](/verifik-es/identidad/chile)** (`v2/cl/cedula`).

## Respuesta

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

### Notas

- El texto exacto de `status` depende del registro origen; trátalo como **indicador de vigencia**, no como asesoría legal.
- Solicita **`serialNumber`** del documento físico; sin él, la validación contra **Registro Civil** no puede completarse.
