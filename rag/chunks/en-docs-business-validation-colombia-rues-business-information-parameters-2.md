---
id: "en-docs-business-validation-colombia-rues-business-information-parameters-2"
title: "RUES Complete Business Validation (v3) — Parameters"
sourcePath: "docs/business-validation/colombia-rues-business-information.mdx"
locale: "en"
category: "business-validation"
tags:
  - "business-validation"
endpoint: "/api/co/rues-complete"
sourceAnchor: "Parameters"
slug: "/business-validation/colombia-rues-business-information"
url: "https://docs.verifik.co/business-validation/colombia-rues-business-information"
---

# RUES Complete Business Validation (v3)
**API path(s):** /api/co/rues-complete

Verifik's RUES Complete Business Validation API helps you retrieve comprehensive business information from Colombia's RUES (Registro Único Empresarial y Social) registry. It's designed to streamline your KYB (Know Your Business) processes, prevent fraud, and ensure you meet all regulatory requirements effortlessly.
We built this integration for businesses that need a fast, secure, and automated way to access complete business information for Colombian companies, partners, or vendors.

## Parameters

| Name           | Type    | Required | Description                                    |
| -------------- | ------- | -------- | ---------------------------------------------- |
| `category` | string  | Yes      | One of: `"RM"`, `"PROP"`, `"RUNEOL"`, `"RNT"`, `"ESAL"`, `"RESAL"`, `"JUEGOS"`, `"EXTRANJERAS"`. |
| `documentNumber` | string | Yes      | Legal business ID (e.g., `1121329661`). |
| `documentType` | string | Yes      | Company document type. For Colombia use `NIT`. |

### Request

  

```javascript

const { data } = await axios.get(
  "https://api.verifik.co/v3/co/rues-complete",
  {
    params: { category: "RM", documentNumber: "1121329661", documentType: "NIT" },
    headers: { Accept: "application/json", Authorization: `Bearer ${process.env.VERIFIK_TOKEN}` },
  }
);
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v3/co/rues-complete"
headers = {
    "Accept": "application/json",
    "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"
}
params = {"category": "RM", "documentNumber": "1121329661", "documentType": "NIT"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```
