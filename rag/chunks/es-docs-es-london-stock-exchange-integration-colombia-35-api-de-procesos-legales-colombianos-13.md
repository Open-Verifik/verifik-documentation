---
id: "es-docs-es-london-stock-exchange-integration-colombia-35-api-de-procesos-legales-colombianos-13"
title: "Colombia — API pública Verifik — 35. API de Procesos Legales Colombianos"
sourcePath: "docs-es/london-stock-exchange-integration/colombia.mdx"
locale: "es"
category: "london-stock-exchange-integration"
tags:
  - "co"
  - "london-stock-exchange-integration"
endpoint: "/v2/co/cedula/extra"
sourceAnchor: "35. API de Procesos Legales Colombianos"
slug: "/london-stock-exchange-integration/colombia"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/colombia"
---

# Colombia — API pública Verifik
**API path(s):** /v2/co/cedula/extra

## 35. API de Procesos Legales Colombianos

**Ubicación en la colección:** v2 › co › fasecolda › sinsiestros › API de Procesos Legales Colombianos

**Qué hace (resumen):**

La API de Procesos Legales Colombianos proporciona información sobre los procesos legales asociados a un ciudadano o empresa colombiana. Dado un número de documento colombiano válido, esta API devuelve una lista de procesos legales que coinciden con el nombre consultado del sujeto, así como información sobre cada proceso legal, incluyendo la fecha del proceso, la última fecha de acción, la oficina donde se procesó y los sujetos involucrados en el proceso. Esta API es útil para personas y organizaciones que necesitan verificar el historial legal de una persona en Colombia.

Nota: La Rama Judicial no genera consultas exactas utilizando los datos de la cédula de identidad, las consultas se realizan a través del nombre, por lo que Verifik no garantiza una respuesta exitosa al 100% debido a esta limitación que presenta la fuente de datos.

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v2/co/fasecolda/sinister?plate=DCS022
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| plate | DCS022 | DCS022 |

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v2/co/fasecolda/sinister?plate=DCS022" \
  -H "Accept: application/json"
```

**Ejemplos de respuesta que guarda Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "plate": "DCS022",

        "sinister": [

            {

                "accidentDate": "20/10/2013",

                "id": "1",

                "protection": "PÃ©rdida Mayor CuantÃ­a"

            }

        ]

    },

    "signature": {

        "dateTime": "April 9, 2026 3:16 PM",

        "message": "Certified by Verifik.co"

    },

    "id": "F53V7"

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
