---
id: "es-docs-es-london-stock-exchange-integration-colombia-58-informacion-de-votacion-para-ciudadanos-colombianos-35"
title: "Colombia — API pública Verifik — 58. Información de Votación para Ciudadanos Colombianos"
sourcePath: "docs-es/london-stock-exchange-integration/colombia.mdx"
locale: "es"
category: "london-stock-exchange-integration"
tags:
  - "co"
  - "london-stock-exchange-integration"
endpoint: "/v2/co/cedula/extra"
sourceAnchor: "58. Información de Votación para Ciudadanos Colombianos"
slug: "/london-stock-exchange-integration/colombia"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/colombia"
---

# Colombia — API pública Verifik
**API path(s):** /v2/co/cedula/extra

## 58. Información de Votación para Ciudadanos Colombianos

**Ubicación en la colección:** v2 › co › registraduria › votacion › Información de Votación para Ciudadanos Colombianos

**Qué hace (resumen):**

Este API te permite obtener información de votación para ciudadanos colombianos de la Registraduría Nacional del Estado Civil. Al proporcionar el número de documento del ciudadano, puedes acceder a detalles como la dirección, departamento, municipio, mesa de votación y puesto de votación. 

Utiliza esta API para integrar sin problemas información electoral en tus aplicaciones o servicios.

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v2/co/registraduria/votacion?documentNumber=1010103248
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| documentNumber | 1010103248 | (Required) Número de documento de la persona a consultar, sin espacios ni puntos. |

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v2/co/registraduria/votacion?documentNumber=1010103248" \
  -H "Accept: application/json"
```

**Ejemplos de respuesta que guarda Postman:**

- **HTTP 200 (OK)**

```json
{
    "data": {
        "documentNumber": "1121329661",
        "NUIP": "1121329661",
        "department": "LA GUAJIRA",
        "municipality": "VILLANUEVA",
        "votingStation": "COLEGIO SILVESTRE DANGOND DAZA",
        "address": "CRA 10  #  23 - 120",
        "pollingTable": "3"
    },
    "signature": {
        "dateTime": "March 7, 2026 10:05 PM",
        "message": "Certified by Verifik.co"
    },
    "id": "0NFN3"
}
```

---
