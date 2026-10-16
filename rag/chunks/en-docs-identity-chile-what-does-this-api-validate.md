---
id: "en-docs-identity-chile-what-does-this-api-validate"
title: "Chilean Citizen — What does this API validate?"
sourcePath: "docs/identity/chile.mdx"
locale: "en"
category: "identity"
tags:
  - "cl"
  - "identity"
endpoint: "/v2/cl/cedula"
sourceAnchor: "What does this API validate?"
slug: "/identity/chile"
url: "https://docs.verifik.co/identity/chile"
---

# Chilean Citizen
**API path(s):** /v2/cl/cedula

## What does this API validate?

Verifik's Identity Verification API helps you authenticate Chilean citizens using the Unique National Role (RUN). It's designed to streamline your KYC (Know Your Customer) processes, prevent fraud, and ensure you meet all regulatory requirements effortlessly.

We built this integration for businesses that need a fast, secure, and automated way to confirm the true identity of users, employees, or customers.

## What does this API validate?

Our API connects directly with official records to validate:

-   **Full Name & RUN**: Supports *Rol Único Nacional* (RUN).
-   **Identity Match**: Confirms that the name provided matches the RUN number.

By verifying these details, you can be confident that the person you're dealing with is real and holds a valid document, significantly lowering the risk of impersonation and fraud.

## API Reference

### Endpoint

```
https://api.verifik.co/v2/cl/cedula
```

Verify Chilean national ID (RUN/RUT): confirm name and identity fields against official civil-registry sources for KYC, onboarding, and fraud prevention.

### Headers

| Name | Value |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `documentType` | string | Yes | Allowed value: `RUN`. |
| `documentNumber` | string | Yes | RUN value without spaces or separators. |

### Request

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/cl/cedula", {
  params: { documentType: "RUN", documentNumber: "212957739" },
  headers: { Accept: "application/json", Authorization: `Bearer ${process.env.VERIFIK_TOKEN}` },
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/cl/cedula"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "RUN", "documentNumber": "212957739"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```
