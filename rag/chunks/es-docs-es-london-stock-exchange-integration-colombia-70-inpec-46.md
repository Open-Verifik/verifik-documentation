---
id: "es-docs-es-london-stock-exchange-integration-colombia-70-inpec-46"
title: "Colombia — API pública Verifik — 70. inpec"
sourcePath: "docs-es/london-stock-exchange-integration/colombia.mdx"
locale: "es"
category: "london-stock-exchange-integration"
tags:
  - "co"
  - "london-stock-exchange-integration"
endpoint: "/v2/co/cedula/extra"
sourceAnchor: "70. inpec"
slug: "/london-stock-exchange-integration/colombia"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/colombia"
---

# Colombia — API pública Verifik
**API path(s):** /v2/co/cedula/extra

## 70. inpec

**Ubicación en la colección:** v2 › co › inpec › inpec

**Qué hace (resumen):**

La API de Certificados del SENA permite a los desarrolladores acceder a los datos de certificación de personas que han completado cursos con el Servicio Nacional de Aprendizaje (SENA), una institución colombiana que ofrece formación y educación técnica. Al proporcionar parámetros como el tipo de documento y el número de la persona, la API devuelve una respuesta en formato JSON que incluye información sobre el título, tipo, programa, fecha de certificación y enlace de descarga de cada certificado obtenido por la persona.

Esta API se puede utilizar para automatizar procesos de verificación de certificados o para crear aplicaciones personalizadas de gestión de certificados.

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v2/co/inpec?documentType=CC&documentNumber=80086615&firstSurname=MURCIA
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| documentType | CC | (Required) Tipo de documento. Parámetros válidos: CC, , CE, PA, RC, PEP.  |
| documentNumber | 80086615 | (Required) Número de documento de la persona a consultar, sin espacios ni puntos. |
| firstSurname | MURCIA |  |

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v2/co/inpec?documentType=CC&documentNumber=80086615&firstSurname=MURCIA" \
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

        "documentNumber": "80086615",

        "documentType": "CC",

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
