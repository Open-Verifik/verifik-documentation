---
id: "es-docs-es-london-stock-exchange-integration-panama-104-informacion-de-empresas-panama-3"
title: "Panamá — API pública Verifik — 104. Información de empresas  Panamá"
sourcePath: "docs-es/london-stock-exchange-integration/panama.mdx"
locale: "es"
category: "london-stock-exchange-integration"
tags:
  - "pa"
  - "london-stock-exchange-integration"
endpoints:
  - "/v2/pa/cedula?documenttype=ccpa&documentnumber=9-718-196&dateofbirth=25/06/1983"
  - "/v2/pa/company?documenttype=ru&documentnumber=155703400-2-2021&dv=39"
  - "/v2/pa/vehiculo/placa?plate=am5240"
sourceAnchor: "104. Información de empresas  Panamá"
slug: "/london-stock-exchange-integration/panama"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/panama"
---

# Panamá — API pública Verifik
**API path(s):** /v2/pa/cedula?documenttype=ccpa&documentnumber=9-718-196&dateofbirth=25/06/1983, /v2/pa/company?documenttype=ru&documentnumber=155703400-2-2021&dv=39, /v2/pa/vehiculo/placa?plate=am5240

## 104. Información de empresas  Panamá

**Ubicación en la colección:** v2 › pa › empresas › Información de empresas  Panamá

**Qué hace (resumen):**

Este API permite a los usuarios obtener información sobre un vehículo registrado en Panamá mediante su número de placa. La respuesta incluye detalles como la marca y modelo del vehículo, año de fabricación, números de serie del motor y carrocería, estado de registro y más. La API también proporciona información sobre el estado de la póliza del vehículo, el número de certificado de seguro y las fechas de inicio y fin de vigencia de la póliza de seguro.

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v2/pa/company?documentType=RU&documentNumber=155703400-2-2021&dv=39
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| documentType | RU |  |
| documentNumber | 155703400-2-2021 | (Required) Placa a consultar sin espacios ni puntos. |
| dv | 39 |  |

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v2/pa/company?documentType=RU&documentNumber=155703400-2-2021&dv=39" \
  -H "Accept: application/json"
```

**Ejemplos de respuesta que guarda Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "documentType": "RU",

        "documentNumber": "155703400-2-2021",

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
