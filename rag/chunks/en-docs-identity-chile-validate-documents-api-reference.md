---
id: "en-docs-identity-chile-validate-documents-api-reference"
title: "Chile — Identity document validation — API reference"
sourcePath: "docs/identity/chile-validate-documents.mdx"
locale: "en"
category: "identity"
tags:
  - "cl"
  - "identity"
endpoints:
  - "/v2/cl/cedula"
  - "/v2/cl/validate/documents"
sourceAnchor: "API reference"
slug: "/identity/chile-validate-documents"
url: "https://docs.verifik.co/identity/chile-validate-documents"
---

# Chile — Identity document validation
**API path(s):** /v2/cl/cedula, /v2/cl/validate/documents

## API reference

This endpoint checks **document vigency** for Chilean **RUN** or **RUT** using the **printed serial number** on the physical ID, in addition to the identifier. Use it when you must confirm that a **card** is **valid** (not only that the number exists)—for example **high-assurance KYC** or **compliance** steps that go beyond a simple cedula lookup.

For name-only verification against civil registry without serial, use **[Identity verification in Chile](/identity/chile)** (`v2/cl/cedula`).

## API reference

### Endpoint

```
https://api.verifik.co/v2/cl/validate/documents
```

Submit **RUN** or **RUT**, **document number**, and **printed serial** to obtain a **vigency-style status** from civil or tax validation sources—use when the physical ID must be confirmed, not only the number.

### Headers

| Name | Value |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `documentType` | string | Yes | `RUN` (civil card flow) or `RUT` (tax-oriented flow). |
| `documentNumber` | string | Yes | Identifier without spaces, per integration guidelines. |
| `serialNumber` | string | Yes | Serial printed on the document; required for the underlying validation sources. |

### Request

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/cl/validate/documents", {
  params: {
    documentType: "RUN",
    documentNumber: "18562530-3",
    serialNumber: "A123456789",
  },
  headers: { Accept: "application/json", Authorization: `Bearer ${process.env.VERIFIK_TOKEN}` },
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/cl/validate/documents"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {
    "documentType": "RUN",
    "documentNumber": "18562530-3",
    "serialNumber": "A123456789",
}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```
