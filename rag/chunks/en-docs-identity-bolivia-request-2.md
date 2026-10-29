---
id: "en-docs-identity-bolivia-request-2"
title: "Bolivian Citizen — Request"
sourcePath: "docs/identity/bolivia.mdx"
locale: "en"
category: "identity"
tags:
  - "bo"
  - "identity"
endpoint: "/v2/bo/cedula"
sourceAnchor: "Request"
slug: "/identity/bolivia"
url: "https://docs.verifik.co/identity/bolivia"
---

# Bolivian Citizen
**API path(s):** /v2/bo/cedula

Verifik's Identity Verification API helps you authenticate Bolivian citizens using official government data. It's designed to streamline your KYC (Know Your Customer) processes, prevent fraud, and ensure you meet all regulatory requirements effortlessly.
We built this integration for businesses that need a fast, secure, and automated way to confirm the true identity of users, employees, or customers.

## Request

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/bo/cedula", {
  params: { documentType: "CI", documentNumber: "123456789", dateOfBirth: "15/03/1990" },
  headers: { Accept: "application/json", Authorization: `Bearer ${process.env.VERIFIK_TOKEN}` },
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/bo/cedula"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "CI", "documentNumber": "123456789", "dateOfBirth": "15/03/1990"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

### Response

  

```json
{
  "data": {
    "documentType": "CI",
    "documentNumber": "123456789",
    "firstName": "María",
    "lastName": "González",
    "fullName": "María González",
    "dateOfBirth": "1990-03-15"
  },
  "signature": {"message": "Certified by Verifik.co", "dateTime": "January 16, 2024 3:44 PM"},
  "id": "BO001"
}
```

  
  

```json
{
  "message": "Invalid document number",
  "code": "INVALID_DOCUMENT"
}
```

### Notes

- Birth date is required and must match the CI record.

---

## Common Use Cases

-   **Fintech & Banking**: Verify identities instantly during account opening or loan applications.
-   **E-commerce & Delivery**: Authenticate users and couriers before they become active on your platform.
-   **HR & Recruitment**: Validate candidate documents as part of your hiring workflow.
-   **Insurance & Healthcare**: Confirm identities before issuing policies or providing medical benefits.

## Official Sources & Reliability

We connect directly with official Bolivian government sources to ensure you receive verified, up-to-the-minute information.
Every query is handled with strict adherence to security and regulatory standards.
