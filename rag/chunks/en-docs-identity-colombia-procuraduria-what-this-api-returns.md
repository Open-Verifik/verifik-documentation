---
id: "en-docs-identity-colombia-procuraduria-what-this-api-returns"
title: "Colombia — Citizen lookup via Procuraduría — What this API returns"
sourcePath: "docs/identity/colombia-procuraduria.mdx"
locale: "en"
category: "identity"
tags:
  - "co"
  - "identity"
endpoints:
  - "/v2/co/cedula"
  - "/v2/co/procuraduria"
  - "/v2/co/procuraduria/antecedentes"
sourceAnchor: "What this API returns"
slug: "/identity/colombia-procuraduria"
url: "https://docs.verifik.co/identity/colombia-procuraduria"
---

# Colombia — Citizen lookup via Procuraduría
**API path(s):** /v2/co/cedula, /v2/co/procuraduria, /v2/co/procuraduria/antecedentes

## What this API returns

Validate a Colombian document number and extract **names** from **Procuraduría General de la Nación**. This is the official source that supports *Cédula de ciudadanía* (**CC**), *Cédula de extranjería* (**CE**), *Permiso Especial de Permanencia* (**PEP**), *NIT*, and *Permiso por Protección Temporal* (**PPT**).

Unlike [citizen by document](/identity-validation/colombia/colombian-citizen) (`/v2/co/cedula`), this endpoint hits **Procuraduría only** — it does **not** try DIAN, ADRES, or Registraduría. Unlike [disciplinary records](/background-check/colombia-disciplinary-records-attorneys-office) (`/v2/co/procuraduria/antecedentes`), it does **not** return `antecedentes` or `legend`.

## What this API returns

- **`documentNumber`**, **`documentType`**
- **`firstName`**, **`lastName`**, **`fullName`**, **`arrayName`**
- A **signed** Verifik response wrapper

## API reference

### Endpoint

```
GET https://api.verifik.co/v2/co/procuraduria
```

Use this endpoint when you need **name extraction only** from Procuraduría, including document types that other `/cedula` sources do not cover. The same integration is available as **`POST`** with a JSON body. **`GET`** uses **query parameters** as shown below.

Typical fields: `documentType`, `documentNumber`, `firstName`, `lastName`, `fullName`, `arrayName`. Use `/v2/co/cedula` when you want Verifik to try multiple government sources. Use `/v2/co/procuraduria/antecedentes` when you need disciplinary history.

### Headers

| Name | Value |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |
