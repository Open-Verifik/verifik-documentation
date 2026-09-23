---
id: "en-docs-business-validation-colombia-legal-invoicer-verification-parameters-2"
title: "Colombia Legal Invoicer Verification — Parameters"
sourcePath: "docs/business-validation/colombia-legal-invoicer-verification.mdx"
locale: "en"
category: "business-validation"
tags:
  - "co"
  - "business-validation"
endpoints:
  - "/v2/co/company/dian"
  - "/v2/co/company/dian/invoicer"
sourceAnchor: "Parameters"
slug: "/business-validation/colombia-legal-invoicer-verification"
url: "https://docs.verifik.co/business-validation/colombia-legal-invoicer-verification"
---

# Colombia Legal Invoicer Verification
**API path(s):** /v2/co/company/dian, /v2/co/company/dian/invoicer

Verifik's Legal Invoicer Verification API helps you validate whether a Colombian company has a legal invoicer registered in DIAN (Dirección de Impuestos y Aduanas Nacionales). It's designed to streamline your KYB (Know Your Business) processes, prevent fraud, and ensure you meet all regulatory requirements effortlessly.
We built this integration for businesses that need a fast, secure, and automated way to confirm the invoicer registration status of Colombian companies, partners, or vendors.

## Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `documentType` | string | Yes | Must be **`NIT`**. |
| `documentNumber` | string | Yes | Tax ID (NIT). Spaces are removed server-side; you may include or omit the verification digit. Minimum length **5** characters (API validation). |

### Request

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/co/company/dian/invoicer", {
  params: { documentType: "NIT", documentNumber: "901708460" },
  headers: { Accept: "application/json", Authorization: `Bearer ${process.env.VERIFIK_TOKEN}` },
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/co/company/dian/invoicer"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "NIT", "documentNumber": "901708460"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

### Response

  

```json
{
  "data": {
    "documentNumber": "901708460",
    "documentType": "NIT",
    "email": "info@sayshannon.com",
    "nit": "901708460"
  },
  "signature": {
    "dateTime": "October 10, 2025 5:11 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "JS4GP"
}
```

  
  

```json

{
    "code": "NotFound",
    "message": "Record not found."
}
```

  
  

```json
{
  "code": "MissingParameter",
  "message": "documentType must be one of: [NIT]"
}
```
```json
{
  "code": "MissingParameter",
  "message": "missing documentNumber\n"
}
```
```json
{
  "code": "MissingParameter",
  "message": "missing documentType\n"
}
```

  
  

```json
{
  "code": "InternalServerError",
  "message": "Server error."
}
```
