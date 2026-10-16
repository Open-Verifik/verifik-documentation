---
id: "en-docs-identity-colombia-registraduria-certificate-what-this-api-returns"
title: "Colombia — Registraduría ID validity certificate (CC) — What this API returns"
sourcePath: "docs/identity/colombia-registraduria-certificate.mdx"
locale: "en"
category: "identity"
tags:
  - "co"
  - "identity"
endpoint: "/v2/co/registraduria/certificado"
sourceAnchor: "What this API returns"
slug: "/identity/colombia-registraduria-certificate"
url: "https://docs.verifik.co/identity/colombia-registraduria-certificate"
---

# Colombia — Registraduría ID validity certificate (CC)
**API path(s):** /v2/co/registraduria/certificado

## What this API returns

This endpoint returns the **certificate of validity** (*certificado de vigencia*) for a **Colombian Cédula de Ciudadanía (CC)** from **Registraduría Nacional del Estado Civil**, using the **document number** and **issue date**. The response includes structured fields parsed from the official PDF (including a **base64-encoded PDF**) and status information such as **novedad** (validity state from the preliminary check).

The underlying flow targets **CC** holders; the API validates **`documentNumber`** and **`date`** only.

## What this API returns

- **Validity status** context (**novedad**) from the upstream vigencia check
- **Structured document** fields (e.g. number, issue date, issue place, name) when parsing succeeds
- **Verification code** and **PDF** (**pdfBase64**) for audit and downstream use
- A **signed** Verifik response wrapper

## API reference

### Endpoint

```
GET https://api.verifik.co/v2/co/registraduria/certificado
```

The same integration is available as **`POST`** with a JSON body containing the same fields. **`GET`** uses **query parameters** as shown below.

### Headers

| Name | Value |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parameters

| name | type | required | description |
| --- | --- | --- | --- |
| `documentNumber` | string | yes | CC number without spaces or punctuation. |
| `date` | string | yes | **Issue date** of the document in **`DD/MM/YYYY`**. |

### Request

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/co/registraduria/certificado", {
	params: {
		documentNumber: "123456789",
		date: "10/10/2020",
	},
	headers: {
		Accept: "application/json",
		Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
	},
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/co/registraduria/certificado"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentNumber": "123456789", "date": "10/10/2020"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```
