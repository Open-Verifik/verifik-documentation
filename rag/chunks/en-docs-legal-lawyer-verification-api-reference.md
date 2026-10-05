---
id: "en-docs-legal-lawyer-verification-api-reference"
title: "Colombia — Lawyer lookup — API Reference"
sourcePath: "docs/legal/lawyer-verification.mdx"
locale: "en"
category: "legal"
tags:
  - "co"
  - "legal"
endpoint: "/v2/co/rama/abogados"
sourceAnchor: "API Reference"
slug: "/legal/lawyer-verification"
url: "https://docs.verifik.co/legal/lawyer-verification"
---

# Colombia — Lawyer lookup
**API path(s):** /v2/co/rama/abogados

## API Reference

Verifik’s **Lawyer lookup** endpoint queries Colombia’s **public lawyer registry** (Rama Judicial integration) using **`documentType`** and **`documentNumber`**. Use it to confirm whether a person appears as a registered lawyer and to read registration-related fields returned by the source.

**Accepted `documentType` values:** **`CC`**, **`CE`**, or **`NIT`** (see parameters below).

## API Reference

### Endpoint

```
GET https://api.verifik.co/v2/co/rama/abogados
```

Send **`documentType`** and **`documentNumber`** as **query** parameters.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Accept        | `application/json` |
| Authorization | `Bearer `   |

### Parameters

| Name               | Type   | Required | Description                                                                 |
| ------------------ | ------ | -------- | --------------------------------------------------------------------------- |
| `documentType`     | string | Yes      | `CC` (citizen ID), `CE` (foreigner ID), or `NIT` (tax ID for legal entity). |
| `documentNumber`   | string | Yes      | Document or NIT number to search.                                              |

### Request

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/co/rama/abogados", {
	params: { documentType: "CC", documentNumber: "123456789" },
	headers: {
		Accept: "application/json",
		Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
	},
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/co/rama/abogados"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "CC", "documentNumber": "123456789"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

  
  

```bash
curl -sS "https://api.verifik.co/v2/co/rama/abogados?documentType=CC&documentNumber=123456789" \
  -H "Accept: application/json" \
  -H "Authorization: Bearer $VERIFIK_TOKEN"
```
