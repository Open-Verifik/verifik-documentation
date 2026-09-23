---
id: "es-docs-es-london-stock-exchange-integration-argentina-3-vehiculo-argentina-3"
title: "Argentina — API pública Verifik — 3. Vehiculo Argentina"
sourcePath: "docs-es/london-stock-exchange-integration/argentina.mdx"
locale: "es"
category: "london-stock-exchange-integration"
tags:
  - "ar"
  - "london-stock-exchange-integration"
endpoint: "/v2/ar/cedula"
sourceAnchor: "3. Vehiculo Argentina"
slug: "/london-stock-exchange-integration/argentina"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/argentina"
---

# Argentina — API pública Verifik
**API path(s):** /v2/ar/cedula

## 3. Vehiculo Argentina

**Ubicación en la colección:** v2 › ar › vehiculos › Vehiculo Argentina

**Qué hace (resumen):**

La API de verificación de Documento Nacional de Identidad (DNI) Argentino permite a los desarrolladores verificar la autenticidad de un documento de identidad argentino (Documento Nacional de Identidad, o DNI) al proporcionar el número de DNI. La API devuelve información como el nombre completo de la persona, el nombre y apellido por separado, y el número de DNI.

Esta información se puede utilizar para diversos fines, como verificar la identidad de un cliente o validar la información proporcionada por un usuario.

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v2/ar/vehicle?plate=AA123BB
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| plate | AA123BB |  |

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v2/ar/vehicle?plate=AA123BB" \
  -H "Accept: application/json"
```

**Ejemplos de respuesta que guarda Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "brand": "HERMANN",

        "codeRegistrySectional": "2097",

        "isPlateMercosur": "true",

        "model": "FURGON",

        "plate": "AA123BB",

        "recordAddress": "AV. CORRIENTES 2063  PISO: 1 DPTO: 35",

        "registrationDenomination": "CAPITAL FEDERAL N° 097",

        "registrationLocality": "CABA",

        "registrationProvince": "",

        "type": "MOTOVEHICULO",

        "version": "S.FP.3E.98 2+1",

        "year": "2021"

    },

    "signature": {

        "dateTime": "April 9, 2026 12:17 AM",

        "message": "Certified by Verifik.co"

    },

    "id": "SRAB4"

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

    "message": "plate format invalid for Argentina."

}
```

---
