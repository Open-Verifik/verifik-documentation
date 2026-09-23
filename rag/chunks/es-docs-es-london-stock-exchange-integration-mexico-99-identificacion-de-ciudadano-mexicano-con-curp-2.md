---
id: "es-docs-es-london-stock-exchange-integration-mexico-99-identificacion-de-ciudadano-mexicano-con-curp-2"
title: "México — API pública Verifik — 99. Identificación de Ciudadano Mexicano con CURP"
sourcePath: "docs-es/london-stock-exchange-integration/mexico.mdx"
locale: "es"
category: "london-stock-exchange-integration"
tags:
  - "mx"
  - "london-stock-exchange-integration"
endpoints:
  - "/v2/mx/company?documenttype=fme&documentnumber=n-2021007300"
  - "/v2/mx/curp?documentnumber=nuha930929hslxrl02&documenttype=curp"
  - "/v2/mx/vehiculo/placa?plate=338er"
  - "/v2/mx/vehiculo/placa?plate=mse9670"
sourceAnchor: "99. Identificación de Ciudadano Mexicano con CURP"
slug: "/london-stock-exchange-integration/mexico"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/mexico"
---

# México — API pública Verifik
**API path(s):** /v2/mx/company?documenttype=fme&documentnumber=n-2021007300, /v2/mx/curp?documentnumber=nuha930929hslxrl02&documenttype=curp, /v2/mx/vehiculo/placa?plate=338er, /v2/mx/vehiculo/placa?plate=mse9670

## 99. Identificación de Ciudadano Mexicano con CURP

**Ubicación en la colección:** v2 › mx › company › Identificación de Ciudadano Mexicano con CURP

**Qué hace (resumen):**

La API de CURP te permite verificar fácilmente la identidad de ciudadanos mexicanos a través de su número de CURP. Con esta API, puedes obtener información personal importante como el nombre completo, fecha de nacimiento, nacionalidad y documento probatorio asociado a un número de CURP específico.

Los datos devueltos también incluyen detalles sobre el lugar de registro y otra información relevante, lo que la convierte en una herramienta esencial para la verificación de identidad y la prevención de fraudes.

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v2/mx/company?documentType=FME&documentNumber=N-2021007300
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| documentType | FME | (Required) Tipo de documento. Parámetro valido: CURP. |
| documentNumber | N-2021007300 | (Required) Documento de la persona a consultar, sin espacios ni puntos. |

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v2/mx/company?documentType=FME&documentNumber=N-2021007300" \
  -H "Accept: application/json"
```

**Ejemplos de respuesta que guarda Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "documentType": "FME",

        "documentNumber": "N-2021007300",

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
