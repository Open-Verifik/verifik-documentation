---
id: "en-docs-identity-mexico-request-2"
title: "Mexican Citizen — Request"
sourcePath: "docs/identity/mexico.mdx"
locale: "en"
category: "identity"
tags:
  - "mx"
  - "identity"
endpoint: "/v2/mx/curp"
sourceAnchor: "Request"
slug: "/identity/mexico"
url: "https://docs.verifik.co/identity/mexico"
---

# Mexican Citizen
**API path(s):** /v2/mx/curp

Verifik's Identity Verification API helps you authenticate Mexican citizens using the Unique Population Registry Code (CURP). It's designed to streamline your KYC (Know Your Customer) processes, prevent fraud, and ensure you meet all regulatory requirements effortlessly.
We built this integration for businesses that need a fast, secure, and automated way to confirm the true identity of users, employees, or customers.

## Request

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/mx/curp", {
  params: { documentNumber: "ABCD890513ABCDEF09", documentType: "CURP" },
  headers: { Accept: "application/json", Authorization: `Bearer ${process.env.VERIFIK_TOKEN}` },
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/mx/curp"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentNumber": "ABCD890513ABCDEF09", "documentType": "CURP"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

### Response

  

```json
{
  "data": {
    "documentType": "CURP",
    "documentNumber": "ABCD890513ABCDEF09",
    "firstName": "Juan",
    "lastName": "Pérez",
    "fullName": "Juan Pérez",
    "dateOfBirth": "1989-05-13",
    "nationality": "Mexican"
  },
  "signature": {"message": "Certified by Verifik.co", "dateTime": "January 16, 2024 3:44 PM"},
  "id": "MX001"
}
```

  
  

```json
{
  "message": "Invalid CURP number",
  "code": "INVALID_CURP"
}
```

### Notes

-   Make sure `documentNumber` strictly matches the CURP format.

---

## Common Use Cases

-   **Fintech & Banking**: Verify identities instantly during account opening or loan applications.
-   **E-commerce & Delivery**: Authenticate users and couriers before they become active on your platform.
-   **HR & Recruitment**: Validate candidate documents as part of your hiring workflow.
-   **Insurance & Healthcare**: Confirm identities before issuing policies or providing medical benefits.

## Official Sources & Reliability

We connect directly with official Mexican government sources (RENAPO) to ensure you receive verified, up-to-the-minute information.
Every query is handled with strict adherence to security and regulatory standards.
