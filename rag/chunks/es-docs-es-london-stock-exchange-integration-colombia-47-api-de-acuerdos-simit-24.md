---
id: "es-docs-es-london-stock-exchange-integration-colombia-47-api-de-acuerdos-simit-24"
title: "Colombia — API pública Verifik — 47. API de Acuerdos SIMIT"
sourcePath: "docs-es/london-stock-exchange-integration/colombia.mdx"
locale: "es"
category: "london-stock-exchange-integration"
tags:
  - "co"
  - "london-stock-exchange-integration"
endpoint: "/v2/co/cedula/extra"
sourceAnchor: "47. API de Acuerdos SIMIT"
slug: "/london-stock-exchange-integration/colombia"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/colombia"
---

# Colombia — API pública Verifik
**API path(s):** /v2/co/cedula/extra

## 47. API de Acuerdos SIMIT

**Ubicación en la colección:** v2 › co › simit › acuerdos › API de Acuerdos SIMIT

**Qué hace (resumen):**

La API de Acuerdos SIMIT proporciona una forma sencilla de obtener los acuerdos de pago para infracciones de tráfico en el sistema SIMIT de Colombia. La API devuelve una respuesta en formato JSON con los detalles del acuerdo, incluyendo el nombre del infractor, el número de resolución, la secretaría emisora y el monto total adeudado.

Los desarrolladores pueden utilizar esta API para automatizar el proceso de obtención de acuerdos de pago para infracciones de tráfico e integrar los datos en sus aplicaciones.

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v2/co/simit/acuerdos?documentType=CC&documentNumber=12345
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| documentType | CC | (Required) Tipo de documento. Parámetros válidos: CC, PA, CE, , RC, NIT. |
| documentNumber | 12345 | (Required)  Número de documento a consultar, sin espacios ni puntos. |

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v2/co/simit/acuerdos?documentType=CC&documentNumber=12345" \
  -H "Accept: application/json"
```

**Ejemplos de respuesta que guarda Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "acuerdosPagos": [

            {

                "estadosResoluciones": "2",

                "fechaComparendo": "1900/01/01",

                "fechaResolucion": "2018 00:00:00/02/16",

                "noComparendo": "NO REPORTADO",

                "permitePago": "S",

                "resoluciones": "324",

                "secretaria": "NO DISPONIBLE",

                "total": "837716"

            },

            {

                "estadosResoluciones": "2",

                "fechaComparendo": "1900/01/01",

                "fechaResolucion": "2018 00:00:00/07/09",

                "noComparendo": "NO REPORTADO",

                "permitePago": "S",

                "resoluciones": "09072018",

                "secretaria": "NO DISPONIBLE",

                "total": "390621"

            },

            {

                "estadosResoluciones": "2",

                "fechaComparendo": "1900/01/01",

                "fechaResolucion": "2018 00:00:00/07/09",

                "noComparendo": "NO REPORTADO",

                "permitePago": "S",

                "resoluciones": "0907182",

                "secretaria": "NO DISPONIBLE",

                "total": "380861"

            },

            {

                "estadosResoluciones": "2",

                "fechaComparendo": "1900/01/01",

                "fechaResolucion": "2018 00:00:00/07/09",

                "noComparendo": "NO REPORTADO",

                "permitePago": "S",

                "resoluciones": "0907181",

                "secretaria": "NO DISPONIBLE",

                "total": "527616"

            },

            {

                "estadosResoluciones": "2",

                "fechaComparendo": "1900/01/01",

                "fechaResolucion": "2018 00:00:00/07/09",

                "noComparendo": "NO REPORTADO",

                "permitePago": "S",

                "resoluciones": "090718",

                "secretaria": "NO DISPONIBLE",

                "to
… (respuesta recortada)
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
