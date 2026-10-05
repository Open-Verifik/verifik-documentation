---
id: "es-docs-es-identity-colombia-procuraduria-que-devuelve-esta-api"
title: "Colombia — Consulta de ciudadano vía Procuraduría — Qué devuelve esta API"
sourcePath: "docs-es/identity/colombia-procuraduria.mdx"
locale: "es"
category: "identity"
tags:
  - "co"
  - "identity"
endpoint: "/v2/co/procuraduria"
sourceAnchor: "Qué devuelve esta API"
slug: "/identity/colombia-procuraduria"
url: "https://docs.verifik.co/verifik-es/identity/colombia-procuraduria"
---

# Colombia — Consulta de ciudadano vía Procuraduría
**API path(s):** /v2/co/procuraduria

## Qué devuelve esta API

Valida un número de documento colombiano y extrae **nombres** de la **Procuraduría General de la Nación**. Esta fuente oficial soporta *Cédula de ciudadanía* (**CC**), *Cédula de extranjería* (**CE**), *Permiso Especial de Permanencia* (**PEP**), *NIT* y *Permiso por Protección Temporal* (**PPT**).

A diferencia de [ciudadano por documento](/identity-validation/colombia/colombian-citizen) (`/v2/co/cedula`), este endpoint usa **solo Procuraduría** — **no** intenta DIAN, ADRES ni Registraduría. A diferencia de [antecedentes disciplinarios](/background-check/colombia-disciplinary-records-attorneys-office) (`/v2/co/procuraduria/antecedentes`), **no** devuelve `antecedentes` ni `legend`.

## Qué devuelve esta API

- **`documentNumber`**, **`documentType`**
- **`firstName`**, **`lastName`**, **`fullName`**, **`arrayName`**
- Respuesta Verifik **firmada**

## Referencia API

### Endpoint

```
GET https://api.verifik.co/v2/co/procuraduria
```

Usa este endpoint cuando necesitas **solo extracción de nombres** desde Procuraduría, incluidos tipos de documento que otras fuentes de `/cedula` no cubren. La misma integración está disponible como **`POST`** con cuerpo JSON. **`GET`** usa **parámetros de consulta**.

Campos típicos: `documentType`, `documentNumber`, `firstName`, `lastName`, `fullName`, `arrayName`. Usa `/v2/co/cedula` cuando quieras que Verifik intente varias fuentes oficiales. Usa `/v2/co/procuraduria/antecedentes` cuando necesites historial disciplinario.

### Headers

| Name | Value |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |
