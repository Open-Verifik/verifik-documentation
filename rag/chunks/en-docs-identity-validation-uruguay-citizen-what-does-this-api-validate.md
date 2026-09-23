---
id: "en-docs-identity-validation-uruguay-citizen-what-does-this-api-validate"
title: "Uruguayan Citizen — What does this API validate?"
sourcePath: "docs/identity-validation/uruguay-citizen.mdx"
locale: "en"
category: "identity-validation"
tags:
  - "uy"
  - "identity-validation"
endpoints:
  - "/v2/uy/cedula"
  - "/v2/uy/cedula?"
  - "/v2/uy/cedula?documenttype=ccuy&documentnumber=123456789&dateofbirth=20/02/1978"
sourceAnchor: "What does this API validate?"
slug: "/identity-validation/uruguay-citizen"
url: "https://docs.verifik.co/identity-validation/uruguay-citizen"
---

# Uruguayan Citizen
**API path(s):** /v2/uy/cedula, /v2/uy/cedula?, /v2/uy/cedula?documenttype=ccuy&documentnumber=123456789&dateofbirth=20/02/1978

## What does this API validate?

Verifik's Identity Verification API helps you authenticate Uruguayan citizens using official government data. It's designed to streamline your KYC (Know Your Customer) processes, prevent fraud, and ensure you meet all regulatory requirements effortlessly.

We built this integration for businesses that need a fast, secure, and automated way to confirm the true identity of users, employees, or customers.

## What does this API validate?

Our API connects directly with official records to validate:

-   **Full Name & CCUY Number**: Supports *Cédula de Ciudadanía Uruguaya* (CCUY).
-   **Identity Match**: Confirms that the name provided matches the CCUY number.
-   **Date of Birth Verification**: Validates the date of birth matches the official records.

By verifying these details, you can be confident that the person you're dealing with is real and holds a valid document, significantly lowering the risk of impersonation and fraud.

## API Reference

### Endpoint

```
https://api.verifik.co/v2/uy/cedula
```

Verify Uruguayan identification by `documentType=CCUY`, `documentNumber`, and `dateOfBirth`.

### Headers

| Name | Value |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `documentType` | string | Yes | Allowed: `CCUY`. |
| `documentNumber` | string | Yes | Document number. |
| `dateOfBirth` | string | Yes | `DD/MM/YYYY`. |

### Request

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/uy/cedula", {
  params: { documentType: "CCUY", documentNumber: "123456789", dateOfBirth: "20/02/1978" },
  headers: { Accept: "application/json", Authorization: `Bearer ${process.env.VERIFIK_TOKEN}` },
});
console.log(data);
```

  
  

```php
 "CCUY",
    "documentNumber" => "123456789",
    "dateOfBirth" => "20/02/1978"
]);
curl_setopt($ch, CURLOPT_URL, "https://api.verifik.co/v2/uy/cedula?".$query);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);
echo $response;
```

  
  

```python

url = "https://api.verifik.co/v2/uy/cedula"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "CCUY", "documentNumber": "123456789", "dateOfBirth": "20/02/1978"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

  
  

```go
package main

    "fmt"
    "net/http"
)

func main() {
    url := "https://api.verifik.co/v2/uy/cedula?documentType=CCUY&documentNumber=123456789&dateOfBirth=20/02/1978"
    req, _ := http.NewRequest("GET", url, nil)
    req.Header.Set("Accept", "application/json")
    req.Header.Set("Authorization", "Bearer "+getenv("VERIFIK_TOKEN"))
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    fmt.Println(resp.Status)
}
```
