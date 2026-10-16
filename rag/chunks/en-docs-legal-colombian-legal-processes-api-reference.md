---
id: "en-docs-legal-colombian-legal-processes-api-reference"
title: "Colombia — Judicial processes — API Reference"
sourcePath: "docs/legal/colombian-legal-processes.mdx"
locale: "en"
category: "legal"
tags:
  - "co"
  - "legal"
endpoint: "/v2/co/rama/procesos"
sourceAnchor: "API Reference"
slug: "/legal/colombian-legal-processes"
url: "https://docs.verifik.co/legal/colombian-legal-processes"
---

# Colombia — Judicial processes
**API path(s):** /v2/co/rama/procesos

## API Reference

Verifik’s **Judicial processes** endpoint returns a **list of legal processes** from Colombia’s judicial system for a given **CC** (natural person) or **NIT** (company). Typical fields include process dates, last action, court office (**despacho**), department, and **sujetosProcesales**, with **pagination** when there are many matches.

## API Reference

### Endpoint

```
GET https://api.verifik.co/v2/co/rama/procesos
```

Send **`documentType`** and **`documentNumber`** as **query** parameters.

**Data-source limitation:** Judicial Branch lookups are driven by **name resolution** tied to the document, not only raw ID fields. Match quality can vary, so Verifik **does not guarantee** a complete or successful hit on every request.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Accept        | `application/json` |
| Authorization | `Bearer `   |

### Parameters

| Name               | Type   | Required | Description                                                                 |
| ------------------ | ------ | -------- | --------------------------------------------------------------------------- |
| `documentType`     | string | Yes      | `CC` (citizen) or `NIT` (company tax ID).                                   |
| `documentNumber`   | string | Yes      | Document or NIT number to search.                                            |

### Request

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/co/rama/procesos", {
	params: { documentType: "CC", documentNumber: "123456789" },
	headers: {
		Accept: "application/json",
		Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
	},
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/co/rama/procesos"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "CC", "documentNumber": "123456789"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

  
  

```bash
curl -sS "https://api.verifik.co/v2/co/rama/procesos?documentType=CC&documentNumber=123456789" \
  -H "Accept: application/json" \
  -H "Authorization: Bearer $VERIFIK_TOKEN"
```
