---
id: "es-docs-es-london-stock-exchange-integration-canada-15-licencia-conductor-ontario"
title: "Canadá — API pública Verifik — 15. Licencia Conductor Ontario"
sourcePath: "docs-es/london-stock-exchange-integration/canada.mdx"
locale: "es"
category: "london-stock-exchange-integration"
tags:
  - "ca"
  - "london-stock-exchange-integration"
endpoints:
  - "/v2/ca/british-columbia/driver-license?documentnumber=7793458&lastname=jiwa"
  - "/v2/ca/company?business=bai"
  - "/v2/ca/ontario/driver-license?documentnumber=s62912794485721"
sourceAnchor: "15. Licencia Conductor Ontario"
slug: "/london-stock-exchange-integration/canada"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/canada"
---

# Canadá — API pública Verifik
**API path(s):** /v2/ca/british-columbia/driver-license?documentnumber=7793458&lastname=jiwa, /v2/ca/company?business=bai, /v2/ca/ontario/driver-license?documentnumber=s62912794485721

## 15. Licencia Conductor Ontario

[English version](/london-stock-exchange-integration/canada/) · **Español** (esta página)

# Canadá

## 15. Licencia Conductor Ontario

**Ubicación en la colección:** v2 › ca › ontario › driver-license › Licencia Conductor Ontario

**Qué hace (resumen):**

The Ontario Driver's License API allows you to quickly obtain essential information about a driver's license issued in the province of Ontario, Canada. By providing the document number, you can access details such as the license status and the associated verification number.

Use this API to validate and verify the authenticity of Ontario driver's licenses efficiently. Whether you need to confirm the validity of a driver's license for identification or regulatory purposes, this API provides accurate and up-to-date license information.

Integrate this API seamlessly into your systems to enhance your verification processes and maintain compliance with Ontario's driver's license requirements. Empower your applications with the capability to verify Ontario driver's licenses with ease.

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v2/ca/ontario/driver-license?documentNumber=S62912794485721
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| documentNumber | S62912794485721 | (Required) Driver's license to consult, all data must be entered exactly as found in this document, additionally keep in mind that it only applies to Ontario licenses, another license will fail for this service. |

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v2/ca/ontario/driver-license?documentNumber=S62912794485721" \
  -H "Accept: application/json"
```

**Ejemplos de respuesta que guarda Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "documentNumber": "S62912794485721"

    },

    "signature": {

        "dateTime": "April 8, 2026 11:00 PM",

        "message": "Certified by Verifik.co"

    },

    "id": "GNRC1"

}
```

- **HTTP 404 (Not Found)**

```json
{

    "code": "NotFound",

    "message": "Record not found."

}
```

- **HTTP 409 (Conflict)**

```json
{

    "code": "Conflict",

    "message": "Endpoint out of service."

}
```

---
