---
id: "es-docs-es-verificacion-antecendentes-verificacion-antecendentes-colombia-polici-response-3"
title: "Colombia - Verificación de Antecedentes Policiales — Response"
sourcePath: "docs-es/verificacion-antecendentes/verificacion-antecendentes-colombia-policia.mdx"
locale: "es"
category: "verificacion-antecendentes"
tags:
  - "co"
  - "verificacion-antecendentes"
endpoints:
  - "/v2/co/policia/consultar"
  - "/v2/co/policia/rnmc"
sourceAnchor: "Response"
slug: "/verificacion-antecendentes/verificacion-antecendentes-colombia-policia"
url: "https://docs.verifik.co/verifik-es/verificacion-antecendentes/verificacion-antecendentes-colombia-policia"
---

# Colombia - Verificación de Antecedentes Policiales
**API path(s):** /v2/co/policia/consultar, /v2/co/policia/rnmc

## Response

```json
{
  "data": {
    "documentType": "CC",
    "documentNumber": "1032386359",
    "firstName": "LILIA MANUELA",
    "lastName": "LESPORT FERNANDEZ",
    "fullName": "LILIA MANUELA LESPORT FERNANDEZ",
    "arrayName": ["LILIA", "MANUELA", "LESPORT", "FERNANDEZ"],
    "details": "NO TIENE ASUNTOS PENDIENTES CON LAS AUTORIDADES JUDICIALES de conformidad con lo establecido en el artículo 248 de la Constitución Política de Colombia."
  },
  "signature": {
    "dateTime": "March 13, 2024 10:48 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "7QS69"
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
  "message": "documentType must be one of: [CC,CE,PPT,PA,DP]"
}
```

  
  

```json
{
  "code": "Endpoint_out_of_service",
  "message": "Endpoint_out_of_service"
}
```

### Notas

- Se admiten **GET** y **POST**. POST envía los mismos campos en el cuerpo JSON.
- El portal de la Policía imprime **apellidos y luego nombres**. Verifik devuelve primero los nombres de pila: `firstName` `LILIA MANUELA`, `lastName` `LESPORT FERNANDEZ`, `fullName` `LILIA MANUELA LESPORT FERNANDEZ` y `arrayName` con nombres y luego apellidos.
- En producción, `data.details` es solo la oración **NO TIENE** / **REGISTRA ASUNTOS**. La leyenda constitucional se elimina.
- El sandbox puede incluir también `legend`. No trate `legend` como un campo garantizado en producción.
- Los `documentType` permitidos son **CC**, **CE**, **PPT**, **PA** y **DP** (Documento Diplomático). **PPT** se acepta; el portal lo trata como un pasaporte.
- Esta ruta no exige `date` de expedición (RNMC sí).
- Fallos temporales del origen o del captcha devuelven **409** con `Endpoint_out_of_service` o `captcha_failed`.
- Para medidas correctivas pendientes, use [Colombia - Cumplimiento Policial](/verifik-es/verificacion-antecendentes/verificacion-antecendentes-colombia-cumplimiento-policial) (`GET /v2/co/policia/rnmc`).
