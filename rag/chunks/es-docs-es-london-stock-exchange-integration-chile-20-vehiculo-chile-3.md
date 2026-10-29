---
id: "es-docs-es-london-stock-exchange-integration-chile-20-vehiculo-chile-3"
title: "Chile — API pública Verifik — 20. Vehículo Chile"
sourcePath: "docs-es/london-stock-exchange-integration/chile.mdx"
locale: "es"
category: "london-stock-exchange-integration"
tags:
  - "cl"
  - "london-stock-exchange-integration"
endpoint: "/v2/cl/cedula"
sourceAnchor: "20. Vehículo Chile"
slug: "/london-stock-exchange-integration/chile"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/chile"
---

# Chile — API pública Verifik
**API path(s):** /v2/cl/cedula

## 20. Vehículo Chile

**Ubicación en la colección:** v2 › cl › vehicle › Vehículo Chile

**Qué hace (resumen):**

Este API le permite verificar la información de un vehículo registrado en Chile al proporcionar su número de placa de matrícula. La respuesta incluye detalles como el número de chasis, número de motor, fabricante, modelo, año, color y cualquier multa pendiente asociada al vehículo. Además, la API también proporciona información sobre el propietario del vehículo, su tipo y origen, cuando esté disponible. 

Tenga en cuenta que debe proporcionar el número de placa de matrícula del vehículo para consultar su información.

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v2/cl/vehicle?plate=BB985
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| plate | BB985 | (Requerido) Placa a consultar, sin espacios ni puntos. |
| force | true | Opcional; reservado para forzar actualización cuando el servicio lo permita. |

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v2/cl/vehicle?plate=BB985" \
  -H "Accept: application/json"
```

**Ejemplos de respuesta que guarda Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "chasisNumber": "ME1KG0447E2066723",

        "color": "NEGRO",

        "engineNumber": "1ES3032465",

        "fines": "NO POSEE MULTAS",

        "manufacturer": "INDIA YAMAHA MOTOR PVT. LTD",

        "mark": "YAMAHA",

        "model": "FZ 16",

        "orderTheft": "NO DISPONIBLE",

        "origin": "INDIA",

        "owner": "SALAH-EDDINE SALIHI",

        "plate": "BB985",

        "publicTrans": "NO",

        "revision": "AGOSTO (REVISION VENCIDA - SIN SELLO)",

        "rut": "26043542-6",

        "type": "MOTO",

        "typeTransPub": "NO APLICA",

        "year": "2014"

    },

    "signature": {

        "dateTime": "April 9, 2026 3:00 PM",

        "message": "Certified by Verifik.co"

    },

    "id": "VVBWL"

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

    "message": "plate format invalid."

}
```

---
