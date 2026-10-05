---
id: "en-docs-identity-validation-ecuador-request-2"
title: "Ecuadorian Citizen — Request"
sourcePath: "docs/identity-validation/ecuador.mdx"
locale: "en"
category: "identity-validation"
tags:
  - "ec"
  - "identity-validation"
endpoint: "/v2/ec/cedula"
sourceAnchor: "Request"
slug: "/identity-validation/ecuador"
url: "https://docs.verifik.co/identity-validation/ecuador"
---

# Ecuadorian Citizen
**API path(s):** /v2/ec/cedula

Verifik's Identity Verification API helps you authenticate Ecuadorian citizens using official government data. It's designed to streamline your KYC (Know Your Customer) processes, prevent fraud, and ensure you meet all regulatory requirements effortlessly.
We built this integration for businesses that need a fast, secure, and automated way to confirm the true identity of users, employees, or customers.

## Request

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/ec/cedula", {
  params: { documentType: "CCEC", documentNumber: "0102260098" },
  headers: { Accept: "application/json", Authorization: `Bearer ${process.env.VERIFIK_TOKEN}` },
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/ec/cedula"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "CCEC", "documentNumber": "0102260098"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

### Response

  

```json
{
  "data": {
    "documentType": "CCEC",
    "documentNumber": "123456789",
    "firstName": "Luis",
    "lastName": "Vega",
    "fullName": "Luis Vega"
  },
  "signature": {"message": "Certified by Verifik.co", "dateTime": "January 16, 2024 3:44 PM"},
  "id": "EC001"
}
```

  
  

```json
{
  "message": "Invalid document number",
  "code": "INVALID_DOCUMENT"
}
```

### Notes

- Provide the document number without spaces or periods.

---

## Common Use Cases

-   **Fintech & Banking**: Verify identities instantly during account opening or loan applications.
-   **E-commerce & Delivery**: Authenticate users and couriers before they become active on your platform.
-   **HR & Recruitment**: Validate candidate documents as part of your hiring workflow.
-   **Insurance & Healthcare**: Confirm identities before issuing policies or providing medical benefits.

## Official Sources & Reliability

We connect directly with official Ecuadorian government sources to ensure you receive verified, up-to-the-minute information.
Every query is handled with strict adherence to security and regulatory standards.
