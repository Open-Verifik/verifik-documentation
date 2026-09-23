---
id: "en-docs-background-check-colombia-police-record-check-response-3"
title: "Colombia - Colombian Police Record Check — Response"
sourcePath: "docs/background-check/colombia-police-record-check.mdx"
locale: "en"
category: "background-check"
tags:
  - "co"
  - "background-check"
endpoints:
  - "/v2/co/policia/consultar"
  - "/v2/co/policia/consultar?documenttype=cc&documentnumber=1032386359"
  - "/v2/co/policia/rnmc"
sourceAnchor: "Response"
slug: "/background-check/colombia-police-record-check"
url: "https://docs.verifik.co/background-check/colombia-police-record-check"
---

# Colombia - Colombian Police Record Check
**API path(s):** /v2/co/policia/consultar, /v2/co/policia/consultar?documenttype=cc&documentnumber=1032386359, /v2/co/policia/rnmc

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

### Notes

- **GET** and **POST** are both supported. POST accepts the same fields in a JSON body.
- The Policía portal prints **apellidos then nombres**. Verifik returns given names first: `firstName` `LILIA MANUELA`, `lastName` `LESPORT FERNANDEZ`, `fullName` `LILIA MANUELA LESPORT FERNANDEZ`, and `arrayName` as given names then surnames.
- Production `data.details` is only the **NO TIENE** / **REGISTRA ASUNTOS** sentence. The constitutional legend is stripped.
- Sandbox responses may also include `legend`. Do not treat `legend` as a guaranteed production field.
- Allowed `documentType` values are **CC**, **CE**, **PPT**, **PA**, and **DP** (Documento Diplomático). **PPT** is accepted; the portal maps it like a passport.
- This route does not require an expedition `date` (RNMC does).
- Temporary upstream or captcha failures return **409** with `Endpoint_out_of_service` or `captcha_failed`.
- For pending corrective measures, use [Colombia - Verify Police Compliance with Corrective Measures](/background-check/colombia-police-compliance-corrective-measures) (`GET /v2/co/policia/rnmc`).
