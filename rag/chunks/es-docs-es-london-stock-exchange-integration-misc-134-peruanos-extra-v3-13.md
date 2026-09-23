---
id: "es-docs-es-london-stock-exchange-integration-misc-134-peruanos-extra-v3-13"
title: "Otros — API pública Verifik — 134. Peruanos  extra v3"
sourcePath: "docs-es/london-stock-exchange-integration/misc.mdx"
locale: "es"
category: "london-stock-exchange-integration"
tags:
  - "dea?documenttype=curp&documentnumber=gusj860517hjczls06"
  - "europol?documenttype=ccve&documentnumber=25622914"
  - "fbi?documenttype=cc&documentnumber=80251972"
  - "interpol?documenttype=ppt&documentnumber=5519356&expeditiondate=01"
  - "ip-lookup?ip=54.196.228.28"
  - "ofac?documenttype=nit&documentnumber=1121329661"
  - "tin"
  - "usa"
  - "london-stock-exchange-integration"
endpoints:
  - "/v2/dea?documenttype=curp&documentnumber=gusj860517hjczls06"
  - "/v2/europol?documenttype=ccve&documentnumber=25622914"
  - "/v2/fbi?documenttype=cc&documentnumber=80251972"
  - "/v2/interpol?documenttype=ppt&documentnumber=5519356&expeditiondate=01/12/2023"
  - "/v2/ip-lookup?ip=54.196.228.28"
  - "/v2/ofac?documenttype=nit&documentnumber=1121329661"
  - "/v2/tin/validate?mscode=es&tinnumber=819128y"
  - "/v2/usa/company?business=apple"
  - "/v2/usa/florida/driver-license?documentnumber=s514-172-80-844-0"
  - "/v2/usa/ssn?documentnumber=769-82-2324"
  - "/v2/usa/vehicle-by-vin?vin=1g3ak47a7cm535209"
  - "/v2/usa/vehicle?state=ar&plate=explore"
  - "/v3/co/ministerio-de-trabajo/certificados?documenttype=cc&documentnumber=1057582023"
  - "/v3/co/rues-complete?documenttype=nit&documentnumber=52993862&category=rnt"
  - "/v3/co/rues?documenttype=nit&documentnumber=1121329661&category=rm"
  - "/v3/pe/cedula/extra?documenttype=dni&documentnumber=43451826"
  - "/v3/pe/cedula?documenttype=dni&documentnumber=43451826"
  - "/v3/pe/company?documenttype=ruc&documentnumber=20605980008"
sourceAnchor: "134. Peruanos  extra v3"
slug: "/london-stock-exchange-integration/misc"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/misc"
---

# Otros — API pública Verifik
**API path(s):** /v2/dea?documenttype=curp&documentnumber=gusj860517hjczls06, /v2/europol?documenttype=ccve&documentnumber=25622914, /v2/fbi?documenttype=cc&documentnumber=80251972, /v2/interpol?documenttype=ppt&documentnumber=5519356&expeditiondate=01/12/2023, /v2/ip-lookup?ip=54.196.228.28, /v2/ofac?documenttype=nit&documentnumber=1121329661, /v2/tin/validate?mscode=es&tinnumber=819128y, /v2/usa/company?business=apple, /v2/usa/florida/driver-license?documentnumber=s514-172-80-844-0, /v2/usa/ssn?documentnumber=769-82-2324, /v2/usa/vehicle-by-vin?vin=1g3ak47a7cm535209, /v2/usa/vehicle?state=ar&plate=explore, /v3/co/ministerio-de-trabajo/certificados?documenttype=cc&documentnumber=1057582023, /v3/co/rues-complete?documenttype=nit&documentnumber=52993862&category=rnt, /v3/co/rues?documenttype=nit&documentnumber=1121329661&category=rm, /v3/pe/cedula/extra?documenttype=dni&documentnumber=43451826, /v3/pe/cedula?documenttype=dni&documentnumber=43451826, /v3/pe/company?documenttype=ruc&documentnumber=20605980008

## 134. Peruanos  extra v3

**Ubicación en la colección:** v3 › pe › cedula › extra › Peruanos  extra v3

**Qué hace (resumen):**

Este API permite a los usuarios obtener información detallada sobre las cédulas de identidad peruanas (DNI). El API devuelve una respuesta en formato JSON que incluye el tipo de documento, número de documento, nombre completo, primer nombre, apellido, dígito de verificación, fecha de nacimiento, fecha de expedición, fecha de vencimiento, fecha de fallecimiento (si corresponde), edad, género, estado civil, provincia, área, distrito de residencia, estado de donante, ubigeo, código postal, área de defunción (si corresponde), provincia de defunción (si corresponde) y distrito de defunción (si corresponde).

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v3/pe/cedula/extra?documentType=DNI&documentNumber=43451826
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| documentType | DNI | (Required) Tipo de documento. Parámetro válido: DNI. |
| documentNumber | 43451826 | (Required) Número de documento de la persona a consultar, sin espacios ni puntos. |

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v3/pe/cedula/extra?documentType=DNI&documentNumber=43451826" \
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

        "documentNumber": "43451826",

        "documentType": "DNI",

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
