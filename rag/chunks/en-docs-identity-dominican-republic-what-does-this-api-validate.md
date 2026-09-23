---
id: "en-docs-identity-dominican-republic-what-does-this-api-validate"
title: "Dominican Citizen — What does this API validate?"
sourcePath: "docs/identity/dominican-republic.mdx"
locale: "en"
category: "identity"
tags:
  - "do"
  - "identity"
endpoints:
  - "/v2/do/cedula"
  - "/v2/do/cedula?"
  - "/v2/do/cedula?documentnumber=123456789&documenttype=cie"
sourceAnchor: "What does this API validate?"
slug: "/identity/dominican-republic"
url: "https://docs.verifik.co/identity/dominican-republic"
---

# Dominican Citizen
**API path(s):** /v2/do/cedula, /v2/do/cedula?, /v2/do/cedula?documentnumber=123456789&documenttype=cie

## What does this API validate?

Verifik's Identity Verification API helps you authenticate Dominican citizens using official government data. It's designed to streamline your KYC (Know Your Customer) processes, prevent fraud, and ensure you meet all regulatory requirements effortlessly.

We built this integration for businesses that need a fast, secure, and automated way to confirm the true identity of users, employees, or customers.

## What does this API validate?

Our API connects directly with official records to validate:

-   **Full Name & CIE Number**: Supports *Cédula de Identidad y Electoral* (CIE).
-   **Identity Match**: Confirms that the name provided matches the CIE number.

By verifying these details, you can be confident that the person you're dealing with is real and holds a valid document, significantly lowering the risk of impersonation and fraud.

## API Reference

### Endpoint

```
https://api.verifik.co/v2/do/cedula
```

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Parameters

| Name           | Type    | Required | Description                                    |
| -------------- | ------- | -------- | ---------------------------------------------- |
| `documentType` | string  | Yes      | Document type. Allowed value: `CIE`. |
| `documentNumber` | string | Yes      | Document number. |

### Request

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/do/cedula", {
  params: { documentNumber: "123456789", documentType: "CIE" },
  headers: { Accept: "application/json", Authorization: `Bearer ${process.env.VERIFIK_TOKEN}` },
});
console.log(data);
```

  
  

```php
 "123456789",
    "documentType" => "CIE"
]);
curl_setopt($ch, CURLOPT_URL, "https://api.verifik.co/v2/do/cedula?".$query);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);
echo $response;
```

  
  

```python

url = "https://api.verifik.co/v2/do/cedula"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentNumber": "123456789", "documentType": "CIE"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

  
  

```go
package main

    "fmt"
    "net/http"
)

func main() {
    url := "https://api.verifik.co/v2/do/cedula?documentNumber=123456789&documentType=CIE"
    req, _ := http.NewRequest("GET", url, nil)
    req.Header.Set("Accept", "application/json")
    req.Header.Set("Authorization", "Bearer "+getenv("VERIFIK_TOKEN"))
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    fmt.Println(resp.Status)
}
```
