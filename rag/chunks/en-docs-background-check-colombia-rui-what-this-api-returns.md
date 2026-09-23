---
id: "en-docs-background-check-colombia-rui-what-this-api-returns"
title: "Colombia — RUI Classification — What this API returns"
sourcePath: "docs/background-check/colombia-rui.mdx"
locale: "en"
category: "background-check"
tags:
  - "co"
  - "background-check"
endpoint: "/v2/co/rui"
sourceAnchor: "What this API returns"
slug: "/background-check/colombia-rui"
url: "https://docs.verifik.co/background-check/colombia-rui"
---

# Colombia — RUI Classification
**API path(s):** /v2/co/rui

## What this API returns

Verifik queries the **Registro Universal de Ingresos (RUI)** via **DNP Ventanilla Social** using **`documentType`** and **`documentNumber`**.

:::info Replaces SISBEN
This product replaces the retired SISBEN lookup (`GET /v2/co/sisben`). Use **`GET /v2/co/rui`** for current income-group classification from Ventanilla Social.
:::

## What this API returns

- **`grupoIngresos`** — income-group description when returned by the source
- **`grupRui`** / **`nivelRui`** — RUI group letter and classification level (for example `A` / `A01`)
- **Location** — `municipio`, `departamento`, `codMpio`
- **Person fields** — `nombre`, `sexo`, `edad` when present
- Document identifiers (`documentType`, `documentNumber`) and a **signed** Verifik response

## API reference

### Endpoint

```
GET https://api.verifik.co/v2/co/rui
```

This endpoint is **GET-only** (query parameters). `POST` is also accepted with the same body fields.

### Headers

| Name | Value |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parameters

| name | type | required | description |
| --- | --- | --- | --- |
| `documentType` | string | yes | One of **`CC`**, **`CE`**, **`TI`**, **`PPT`**, **`PEP`**, **`RC`**. |
| `documentNumber` | string | yes | Document number without spaces or punctuation (5–15 characters). |

### Request

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/co/rui", {
	params: {
		documentType: "CC",
		documentNumber: "10000001",
	},
	headers: {
		Accept: "application/json",
		Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
	},
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/co/rui"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "CC", "documentNumber": "10000001"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```
