---
id: "en-docs-identity-validation-spain-citizen-request-2"
title: "Spanish Citizen — Request"
sourcePath: "docs/identity-validation/spain-citizen.mdx"
locale: "en"
category: "identity-validation"
tags:
  - "es"
  - "identity-validation"
endpoint: "/v2/es/cedula"
sourceAnchor: "Request"
slug: "/identity-validation/spain-citizen"
url: "https://docs.verifik.co/identity-validation/spain-citizen"
---

# Spanish Citizen
**API path(s):** /v2/es/cedula

Verifik's Identity Verification API helps you authenticate Spanish citizens and residents using official government data. It's designed to streamline your KYC (Know Your Customer) processes, prevent fraud, and ensure you meet all regulatory requirements effortlessly.
We built this integration for businesses that need a fast, secure, and automated way to confirm the true identity of users, employees, or customers.

## Request

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/es/cedula", {
  params: { documentType: "DNIES", documentNumber: "123456789", date: "17/07/2024" },
  headers: { "Content-Type": "application/json", Authorization: `Bearer ${process.env.VERIFIK_TOKEN}` },
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/es/cedula"
headers = {"Content-Type": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "DNIES", "documentNumber": "123456789", "date": "17/07/2024"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

### Response

  

```json
{
  "data": {
    "documentType": "DNIES",
    "documentNumber": "123456789",
    "fullName": "Juan Pérez",
    "names": ["Juan", "Pérez"]
  },
  "signature": {"message": "Certified by Verifik.co", "dateTime": "January 16, 2024 3:44 PM"},
  "id": "ES001"
}
```

  
  

```json
{
  "message": "Authentication required",
  "code": "UNAUTHORIZED"
}
```

  
  

```json
{
  "message": "Access forbidden",
  "code": "FORBIDDEN"
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
  "message": "\"date\" is required",
  "code": "MissingParameter"
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
  "code": "MissingParameter",
  "message": "missing documentNumber\n"
}
```

```json
{
  "code": "MissingParameter",
  "message": "documentType must be one of: [DNIES, NIE]"
}
```

### Notes

- `date` must follow the format `DD/MM/YYYY`.

---
