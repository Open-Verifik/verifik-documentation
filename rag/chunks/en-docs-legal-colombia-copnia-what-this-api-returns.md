---
id: "en-docs-legal-colombia-copnia-what-this-api-returns"
title: "Colombia — COPNIA professional licenses by document — What this API returns"
sourcePath: "docs/legal/colombia-copnia.mdx"
locale: "en"
category: "legal"
tags:
  - "co"
  - "legal"
endpoint: "/v2/co/copnia"
sourceAnchor: "What this API returns"
slug: "/legal/colombia-copnia"
url: "https://docs.verifik.co/legal/colombia-copnia"
---

# Colombia — COPNIA professional licenses by document
**API path(s):** /v2/co/copnia

## What this API returns

Verifik queries **COPNIA** (*Consejo Profesional Nacional de Ingeniería*) using **`documentType`** and **`documentNumber`**. The live source is the COPNIA Certificate of Good Standing portal. Use this endpoint for **credentialing**, **hiring**, and **compliance** checks on Colombian engineering professionals.

## What this API returns

- **Identity** fields: `documentType`, `documentNumber`, `firstName`, `lastName`, `fullName`, `arrayName`
- **`licenses[]`** — professional registrations found for that person
- Each license may include **`licenseNumber`**, **`licenseStatus`**, **`licenseType`**, **`profession`**, **`resolutionDate`**, **`resolutionNumber`**
- A **signed** Verifik response

## API reference

### Endpoint

```
GET https://api.verifik.co/v2/co/copnia
```

Send **`documentType`** and **`documentNumber`** as **query** parameters. The handler returns the person plus a `licenses` array. Detail fields (`licenseStatus`, `licenseType`, `resolutionDate`, `resolutionNumber`) are hydrated for at most **10** licenses; additional rows keep list data (`licenseNumber` and `profession`) only.

### Headers

| Name | Value |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parameters

| Name | Type | Required | Description | Example |
| --- | --- | --- | --- | --- |
| `documentType` | string | Yes | One of **`CC`**, **`CE`**, **`PA`**, **`PEP`**, **`PE`**, **`PPT`**, **`TI`**, **`NIT`**. | `CC` |
| `documentNumber` | string | Yes | Document number without spaces or punctuation (minimum **5** characters). | `80176161` |
