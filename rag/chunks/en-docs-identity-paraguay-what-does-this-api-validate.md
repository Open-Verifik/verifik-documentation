---
id: "en-docs-identity-paraguay-what-does-this-api-validate"
title: "Paraguayan Citizen — What does this API validate?"
sourcePath: "docs/identity/paraguay.mdx"
locale: "en"
category: "identity"
tags:
  - "py"
  - "identity"
endpoint: "/v2/py/cic"
sourceAnchor: "What does this API validate?"
slug: "/identity/paraguay"
url: "https://docs.verifik.co/identity/paraguay"
---

# Paraguayan Citizen
**API path(s):** /v2/py/cic

## What does this API validate?

Verifik's Identity Verification API helps you authenticate Paraguayan citizens using official government data. It's designed to streamline your KYC (Know Your Customer) processes, prevent fraud, and ensure you meet all regulatory requirements effortlessly.

We built this integration for businesses that need a fast, secure, and automated way to confirm the true identity of users, employees, or customers.

## What does this API validate?

Our API connects directly with official records to validate:

-   **Full Name & CIC Number**: Supports *Cédula de Identidad Civil* (CIC).
-   **Identity Match**: Confirms that the name provided matches the CIC number.

By verifying these details, you can be confident that the person you're dealing with is real and holds a valid document, significantly lowering the risk of impersonation and fraud.

## API Reference

### Endpoint

```
GET https://api.verifik.co/v2/py/cic
```

Verify a Paraguayan citizen using **`documentNumber`** (CIC). Returns identity fields to support **KYC** and **compliance**.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Parameters

| Name           | Type    | Required | Description                                    |
| -------------- | ------- | -------- | ---------------------------------------------- |
| `documentNumber` | string | Yes      | CIC document number. |

### Request

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/py/cic", {
  params: { documentNumber: "1234567" },
  headers: { Accept: "application/json", Authorization: `Bearer ${process.env.VERIFIK_TOKEN}` },
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/py/cic"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentNumber": "1234567"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```
