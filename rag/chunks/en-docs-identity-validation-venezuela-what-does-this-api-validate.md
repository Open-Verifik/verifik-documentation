---
id: "en-docs-identity-validation-venezuela-what-does-this-api-validate"
title: "Venezuelan Citizen Information — What does this API validate?"
sourcePath: "docs/identity-validation/venezuela.mdx"
locale: "en"
category: "identity-validation"
tags:
  - "ve"
  - "identity-validation"
endpoints:
  - "/v2/ve/cedula"
  - "/v2/ve/cedula?"
  - "/v2/ve/cedula?documentnumber=10000001"
sourceAnchor: "What does this API validate?"
slug: "/identity-validation/venezuela"
url: "https://docs.verifik.co/identity-validation/venezuela"
---

# Venezuelan Citizen Information
**API path(s):** /v2/ve/cedula, /v2/ve/cedula?, /v2/ve/cedula?documentnumber=10000001

## What does this API validate?

Verifik's Identity Verification API helps you authenticate Venezuelan citizens using official government data. It's designed to streamline your KYC (Know Your Customer) processes, prevent fraud, and ensure you meet all regulatory requirements effortlessly.

We built this integration for businesses that need a fast, secure, and automated way to confirm the true identity of users, employees, or customers.

## What does this API validate?

Our API connects directly with official records to validate:

-   **Full Name & Document Number**: Supports Venezuelan identity documents (CCVE).
-   **Identity Match**: Confirms that the name provided matches the document number.
-   **Optional Personal Details**: May include date of birth, gender, and marital status when available.

By verifying these details, you can be confident that the person you're dealing with is real and holds a valid document, significantly lowering the risk of impersonation and fraud.

## API Reference

### Endpoint

```
https://api.verifik.co/v2/ve/cedula
```

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Parameters

| Name           | Type    | Required | Description                                    |
| -------------- | ------- | -------- | ---------------------------------------------- |
| `documentNumber` | string | Yes      | National cédula number (CCVE). Dots and spaces are stripped. Do not send `documentType`. |

### Request

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/ve/cedula", {
  params: { documentNumber: "10000001" },
  headers: { Accept: "application/json", Authorization: `Bearer ${process.env.VERIFIK_TOKEN}` },
});
console.log(data);
```

  
  

```php
 "10000001"
]);
curl_setopt($ch, CURLOPT_URL, "https://api.verifik.co/v2/ve/cedula?".$query);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);
echo $response;
```

  
  

```python

url = "https://api.verifik.co/v2/ve/cedula"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentNumber": "10000001"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

  
  

```go
package main

    "fmt"
    "net/http"
)

func main() {
    url := "https://api.verifik.co/v2/ve/cedula?documentNumber=10000001"
    req, _ := http.NewRequest("GET", url, nil)
    req.Header.Set("Accept", "application/json")
    req.Header.Set("Authorization", "Bearer "+getenv("VERIFIK_TOKEN"))
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    fmt.Println(resp.Status)
}
```
