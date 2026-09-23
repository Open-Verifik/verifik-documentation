---
id: "en-docs-legal-colombia-judicial-records-api-reference"
title: "Colombia — Judicial records (court files / expedientes) — API Reference"
sourcePath: "docs/legal/colombia-judicial-records.mdx"
locale: "en"
category: "legal"
tags:
  - "co"
  - "legal"
endpoints:
  - "/v2/co/rama/juzgado/expedientes"
  - "/v2/co/rama/juzgado/expedientes?documenttype=cc&documentnumber=1234567890&city=bogota"
sourceAnchor: "API Reference"
slug: "/legal/colombia-judicial-records"
url: "https://docs.verifik.co/legal/colombia-judicial-records"
---

# Colombia — Judicial records (court files / expedientes)
**API path(s):** /v2/co/rama/juzgado/expedientes, /v2/co/rama/juzgado/expedientes?documenttype=cc&documentnumber=1234567890&city=bogota

## API Reference

Verifik’s **Judicial records** endpoint returns **court file (expediente)** details from Colombia’s judicial system for a **cédula de ciudadanía (CC)** holder in a given **city** (circuit). Typical fields include court office (**EPMS**), receipt date, municipality, filing number, and party names when returned by the source.

## API Reference

### Endpoint

```
GET https://api.verifik.co/v2/co/rama/juzgado/expedientes
```

Send **`documentType`**, **`documentNumber`**, and **`city`** as **query** parameters.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Accept        | `application/json` |
| Authorization | `Bearer `   |

### Parameters

| Name             | Type   | Required | Description |
| ---------------- | ------ | -------- | ----------- |
| `documentType`   | string | Yes      | Must be **`CC`** (cédula de ciudadanía). |
| `documentNumber` | string | Yes      | ID number without formatting as required for lookup. |
| `city`           | string | Yes      | Judicial circuit city code, e.g. **`BOGOTA`**, **`MEDELLIN`**, **`CALI`**, **`BARRANQUILLA`**, and others supported by the integration. |

### Request

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/co/rama/juzgado/expedientes", {
	params: {
		documentType: "CC",
		documentNumber: "1234567890",
		city: "BOGOTA",
	},
	headers: {
		Accept: "application/json",
		Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
	},
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/co/rama/juzgado/expedientes"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "CC", "documentNumber": "1234567890", "city": "BOGOTA"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

  
  

```bash
curl -sS "https://api.verifik.co/v2/co/rama/juzgado/expedientes?documentType=CC&documentNumber=1234567890&city=BOGOTA" \
  -H "Accept: application/json" \
  -H "Authorization: Bearer $VERIFIK_TOKEN"
```
