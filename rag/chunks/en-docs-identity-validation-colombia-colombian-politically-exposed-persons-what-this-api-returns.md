---
id: "en-docs-identity-validation-colombia-colombian-politically-exposed-persons-what-this-api-returns"
title: "Colombia — Politically exposed persons (PEP) lookup — What this API returns"
sourcePath: "docs/identity-validation/colombia/colombian-politically-exposed-persons.mdx"
locale: "en"
category: "identity-validation"
tags:
  - "co"
  - "identity-validation"
endpoint: "/v2/co/politically-exposed-persons"
sourceAnchor: "What this API returns"
slug: "/identity-validation/colombia/colombian-politically-exposed-persons"
url: "https://docs.verifik.co/identity-validation/colombia/colombian-politically-exposed-persons"
---

# Colombia — Politically exposed persons (PEP) lookup
**API path(s):** /v2/co/politically-exposed-persons

## What this API returns

This endpoint performs **AML / compliance** screening: it checks whether a **Colombian natural person** or **business** appears in **politically exposed persons (PEP)** sources used by Verifik, including declaration-related detail when returned by the integration.

This is **not** the immigration **PEP** (*Permiso Especial de Permanencia*). For Migración Colombia’s special stay permit, use [Colombia — PEP (Special Stay Permit)](/identity/colombia-pep-id).

## What this API returns

- Whether the subject has **PEP-related records** in the integrated dataset
- **`detail`** entries (e.g. declarant, entity, position, publication type, dates, status) when the source provides them
- **Signed** responses; results may be **cached** server-side for repeat lookups

## API reference

### Endpoint

```
GET https://api.verifik.co/v2/co/politically-exposed-persons
```

Send **`documentType`** and **`documentNumber`** as **query** parameters. This route is exposed as **GET** only.

### Headers

| Name | Value |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parameters

| name | type | required | description |
| --- | --- | --- | --- |
| `documentType` | string | yes | **`CC`** (natural person) or **`NIT`** (company). |
| `documentNumber` | string | yes | Document or NIT number without spaces or punctuation. |

### Request

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/co/politically-exposed-persons", {
	params: { documentType: "CC", documentNumber: "123456789" },
	headers: {
		Accept: "application/json",
		Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
	},
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/co/politically-exposed-persons"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "CC", "documentNumber": "123456789"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```
