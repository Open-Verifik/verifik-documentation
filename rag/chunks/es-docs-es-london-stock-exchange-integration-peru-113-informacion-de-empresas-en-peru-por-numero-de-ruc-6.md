---
id: "es-docs-es-london-stock-exchange-integration-peru-113-informacion-de-empresas-en-peru-por-numero-de-ruc-6"
title: "Perú — API pública Verifik — 113. Información de Empresas en Perú por Número de RUC"
sourcePath: "docs-es/london-stock-exchange-integration/peru.mdx"
locale: "es"
category: "london-stock-exchange-integration"
tags:
  - "pe"
  - "london-stock-exchange-integration"
endpoints:
  - "/v2/pe/cedula/extra?documenttype=dni&documentnumber=70904000"
  - "/v2/pe/cedula?documenttype=dni&documentnumber=01028795"
  - "/v2/pe/empresa?documenttype=ruc&documentnumber=20605980008"
  - "/v2/pe/foreigner-id/ce?documentnumber=005005393&dateofbirth=16/08/1993"
  - "/v2/pe/vehiculo/placa?plate=afj286"
  - "/v2/pe/vehiculo/soat?plate=afj289"
sourceAnchor: "113. Información de Empresas en Perú por Número de RUC"
slug: "/london-stock-exchange-integration/peru"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/peru"
---

# Perú — API pública Verifik
**API path(s):** /v2/pe/cedula/extra?documenttype=dni&documentnumber=70904000, /v2/pe/cedula?documenttype=dni&documentnumber=01028795, /v2/pe/empresa?documenttype=ruc&documentnumber=20605980008, /v2/pe/foreigner-id/ce?documentnumber=005005393&dateofbirth=16/08/1993, /v2/pe/vehiculo/placa?plate=afj286, /v2/pe/vehiculo/soat?plate=afj289

## 113. Información de Empresas en Perú por Número de RUC

**Ubicación en la colección:** v2 › pe › empresa › Información de Empresas en Perú por Número de RUC

**Qué hace (resumen):**

Este API permite a los usuarios obtener información de empresas en Perú proporcionando el número de RUC (Registro Único de Contribuyentes). El API devuelve datos como el nombre de la empresa, dirección, estado tributario y más. La información se obtiene de fuentes oficiales y está certificada por Verifik.co. El API puede ser utilizado por empresas, investigadores o cualquier persona que necesite verificar el estado o información de una empresa en Perú.

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v2/pe/empresa?documentType=RUC&documentNumber=20605980008
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| documentType | RUC | (Required) Tipo de documento. Valor permitido: RUC. |
| documentNumber | 20605980008 |  |

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v2/pe/empresa?documentType=RUC&documentNumber=20605980008" \
  -H "Accept: application/json"
```

**Ejemplos de respuesta que guarda Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "arrayName": [

            "APELLIDO",

            "NOMBRE",

            "SEGUNDO"

        ],

        "documentNumber": "20605980008",

        "documentType": "RUC",

        "firstName": "NOMBRE SEGUNDO",

        "fullName": "NOMBRE SEGUNDO APELLIDO",

        "lastName": "APELLIDO"

    },

    "signature": {

        "dateTime": "April 8, 2026 11:00 PM",

        "message": "Certified by Verifik.co"

    },

    "id": "IDNT1"

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

    "message": "documentNumber maximum length exceeded.\n"

}
```

---
