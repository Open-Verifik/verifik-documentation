---
id: "es-docs-es-london-stock-exchange-integration-ecuador-93-empresa-4"
title: "Ecuador — API pública Verifik — 93. EMPRESA"
sourcePath: "docs-es/london-stock-exchange-integration/ecuador.mdx"
locale: "es"
category: "london-stock-exchange-integration"
tags:
  - "ec"
  - "london-stock-exchange-integration"
endpoints:
  - "/v2/ec/cedula?documenttype=ccec&documentnumber=0102260098"
  - "/v2/ec/company?documenttype=rucec&documentnumber=1790008959001"
  - "/v2/ec/vehiculo/placa/multas?plate=abb4568"
  - "/v2/ec/vehiculo/placa?plate=pbb3239"
sourceAnchor: "93. EMPRESA"
slug: "/london-stock-exchange-integration/ecuador"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/ecuador"
---

# Ecuador — API pública Verifik
**API path(s):** /v2/ec/cedula?documenttype=ccec&documentnumber=0102260098, /v2/ec/company?documenttype=rucec&documentnumber=1790008959001, /v2/ec/vehiculo/placa/multas?plate=abb4568, /v2/ec/vehiculo/placa?plate=pbb3239

## 93. EMPRESA

**Ubicación en la colección:** v2 › ec › company › EMPRESA

**Qué hace (resumen):**

Método para consultar informacion de una empresa de Ecuador.

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v2/ec/company?documentType=RUCEC&documentNumber=1790008959001
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| documentType | RUCEC | (Required) Tipo de documento. parámetro valido: RUCEC. |
| documentNumber | 1790008959001 | (Required) Numero de documento a consultar, sin espacios ni puntos y además debe ser de 13 dígitos. |

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v2/ec/company?documentType=RUCEC&documentNumber=1790008959001" \
  -H "Accept: application/json"
```

**Ejemplos de respuesta que guarda Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "documentType": "RUCEC",

        "documentNumber": "1790008959001",

        "legalName": "EMPRESA EJEMPLO SA",

        "status": "ACTIVO"

    },

    "signature": {

        "dateTime": "April 8, 2026 11:00 PM",

        "message": "Certified by Verifik.co"

    },

    "id": "CMPY1"

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

    "code": "MissingParameter",

    "message": "documentNumber invalid format."

}
```

---
