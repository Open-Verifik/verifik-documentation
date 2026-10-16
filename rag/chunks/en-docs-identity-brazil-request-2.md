---
id: "en-docs-identity-brazil-request-2"
title: "Brazilian Citizen — Request"
sourcePath: "docs/identity/brazil.mdx"
locale: "en"
category: "identity"
tags:
  - "br"
  - "identity"
endpoint: "/v2/br/cedula"
sourceAnchor: "Request"
slug: "/identity/brazil"
url: "https://docs.verifik.co/identity/brazil"
---

# Brazilian Citizen
**API path(s):** /v2/br/cedula

Verifik's Identity Verification API helps you authenticate Brazilian citizens using the Cadastro de Pessoas Físicas (CPF). It's designed to streamline your KYC (Know Your Customer) processes, prevent fraud, and ensure you meet all regulatory requirements effortlessly.
We built this integration for businesses that need a fast, secure, and automated way to confirm the true identity of users, employees, or customers.

## Request

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/br/cedula", {
  params: { documentType: "CPF", documentNumber: "012.345.678-01", dateOfBirth: "17/02/2002" },
  headers: { Accept: "application/json", Authorization: `Bearer ${process.env.VERIFIK_TOKEN}` },
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/br/cedula"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "CPF", "documentNumber": "012.345.678-01", "dateOfBirth": "17/02/2002"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

### Response

  

```json
{
  "data": {
    "arrayName": [
      "RAISSA",
      "LARA",
      "ROCHA",
      "ALVES",
      "FERREIRA"
    ],
    "dateOfBirth": "2002-02-17",
    "documentNumber": "01916658601",
    "documentType": "CPF",
    "firstName": "RAISSA LARA ROCHA",
    "fullName": "RAISSA LARA ROCHA ALVES FERREIRA",
    "lastName": "ALVES FERREIRA"
  },
  "signature": {
    "dateTime": "October 8, 2025 6:44 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "AMARG"
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
  "message": "missing dateOfBirth\n"
}
```

```json
{
  "code": "MissingParameter",
  "message": "documentType must be one of: [CPF]"
}
```

```json
{
  "code": "MissingParameter",
  "message": "dateOfBirth format required: DD/MM/YYYY\n"
}
```

  
  

```json
{
  "code": "NotFound",
  "message": "Record not found."
}
```
