---
id: "en-docs-vehicle-validation-colombia-runt-vehicle-by-plate-only-what-this-api-returns"
title: "RUNT - Vehicle Records by Plate Only — What this API returns"
sourcePath: "docs/vehicle-validation/colombia/runt-vehicle-by-plate-only.mdx"
locale: "en"
category: "vehicle-validation"
tags:
  - "co"
  - "vehicle-validation"
endpoints:
  - "/v2/co/runt/vehicle-by-plate"
  - "/v2/co/runt/vehicle-by-plate-only"
sourceAnchor: "What this API returns"
slug: "/vehicle-validation/colombia/runt-vehicle-by-plate-only"
url: "https://docs.verifik.co/vehicle-validation/colombia/runt-vehicle-by-plate-only"
---

# RUNT - Vehicle Records by Plate Only
**API path(s):** /v2/co/runt/vehicle-by-plate, /v2/co/runt/vehicle-by-plate-only

## What this API returns

Query official RUNT vehicle information using **only** the license plate. Unlike [Vehicle records by plate](/vehicle-validation/colombia/runt-vehicle-by-plate), this endpoint does **not** require the owner's `documentType` or `documentNumber`.

Use it when you need name, technical, and status blocks for a Colombian plate without an owner document on hand.

## What this API returns

- **`informacionGeneral`** — plate, brand, line, model, class, service, status, and registration fields when present
- **`datosTecnicos`** — technical fields when present
- Time-bound blocks such as **`soat[]`** and **`tecnoMecanica[]`** when present
- Other RUNT vehicle blocks (`solicitudes`, `polizasResponsabilidadCivil`, and similar) when the source includes them
- **`documentType`** and **`documentNumber`** may be `null`
- A **signed** Verifik response

## API reference

### Endpoint

```
GET https://api.verifik.co/v2/co/runt/vehicle-by-plate-only
```

Send **`plate`** as a **query** parameter. The handler returns the full RUNT vehicle shape. Name, technical, and status sections are included when available. Owner document fields are not required and may come back as `null`.

### Headers

| Name | Value |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parameters

| Name | Type | Required | Description | Example |
| --- | --- | --- | --- | --- |
| `plate` | string | Yes | Colombian license plate, **5–9** alphanumeric characters. | `AA123BA` |

### Request

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/co/runt/vehicle-by-plate-only", {
	params: { plate: "AA123BA" },
	headers: {
		Accept: "application/json",
		Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
	},
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/co/runt/vehicle-by-plate-only"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
response = requests.get(url, headers=headers, params={"plate": "AA123BA"})
print(response.json())
```
