---
id: "es-docs-es-london-stock-exchange-integration-colombia-72-sigep-by-name-48"
title: "Colombia — API pública Verifik — 72. SIGEP by name"
sourcePath: "docs-es/london-stock-exchange-integration/colombia.mdx"
locale: "es"
category: "london-stock-exchange-integration"
tags:
  - "co"
  - "london-stock-exchange-integration"
endpoint: "/v2/co/cedula/extra"
sourceAnchor: "72. SIGEP by name"
slug: "/london-stock-exchange-integration/colombia"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/colombia"
---

# Colombia — API pública Verifik
**API path(s):** /v2/co/cedula/extra

## 72. SIGEP by name

**Ubicación en la colección:** v2 › co › SIGEP › SIGEP by name

**Qué hace (resumen):**

La API de Certificados del SENA permite a los desarrolladores acceder a los datos de certificación de personas que han completado cursos con el Servicio Nacional de Aprendizaje (SENA), una institución colombiana que ofrece formación y educación técnica. Al proporcionar parámetros como el tipo de documento y el número de la persona, la API devuelve una respuesta en formato JSON que incluye información sobre el título, tipo, programa, fecha de certificación y enlace de descarga de cada certificado obtenido por la persona.

Esta API se puede utilizar para automatizar procesos de verificación de certificados o para crear aplicaciones personalizadas de gestión de certificados.

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v2/co/sigep/name?fullName=URIEL ALFREDO PRIETO ATUESTA
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| fullName | URIEL ALFREDO PRIETO ATUESTA | (Required) Número de documento de la persona a consultar, sin espacios ni puntos. |

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v2/co/sigep/name?fullName=URIEL ALFREDO PRIETO ATUESTA" \
  -H "Accept: application/json"
```

**Ejemplos de respuesta que guarda Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "fullName": "URIEL ALFREDO PRIETO ATUESTA",

        "matchStatus": "FOUND",

        "records": []

    },

    "signature": {

        "dateTime": "April 8, 2026 11:00 PM",

        "message": "Certified by Verifik.co"

    },

    "id": "SRCH1"

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

    "code": "Conflict",

    "message": "Endpoint out of service."

}
```

---
