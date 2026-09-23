---
id: "en-docs-identity-el-salvador-what-does-this-api-validate"
title: "Salvadoran Citizen — What does this API validate?"
sourcePath: "docs/identity/el-salvador.mdx"
locale: "en"
category: "identity"
tags:
  - "sv"
  - "identity"
endpoints:
  - "/v2/sv/dui"
  - "/v2/sv/dui?"
  - "/v2/sv/dui?documentnumber=123456789&dateofbirth=01/12/1995"
sourceAnchor: "What does this API validate?"
slug: "/identity/el-salvador"
url: "https://docs.verifik.co/identity/el-salvador"
---

# Salvadoran Citizen
**API path(s):** /v2/sv/dui, /v2/sv/dui?, /v2/sv/dui?documentnumber=123456789&dateofbirth=01/12/1995

## What does this API validate?

Verifik's Identity Verification API helps you authenticate Salvadoran citizens using official government data. It's designed to streamline your KYC (Know Your Customer) processes, prevent fraud, and ensure you meet all regulatory requirements effortlessly.

We built this integration for businesses that need a fast, secure, and automated way to confirm the true identity of users, employees, or customers.

## What does this API validate?

Our API connects directly with official records to validate:

-   **Full Name & DUI Number**: Supports *Documento Único de Identidad* (DUI).
-   **Identity Match**: Confirms that the name provided matches the DUI number.
-   **Date of Birth Verification**: Validates the date of birth matches the official records.

By verifying these details, you can be confident that the person you're dealing with is real and holds a valid document, significantly lowering the risk of impersonation and fraud.

## API Reference

### Endpoint

```
https://api.verifik.co/v2/sv/dui
```

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Parameters

| Name           | Type    | Required | Description                                    |
| -------------- | ------- | -------- | ---------------------------------------------- |
| `documentNumber` | string | Yes      | DUI number without spaces. |
| `dateOfBirth` | string | Yes      | Date of birth in `DD/MM/YYYY` format. |

### Request

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/sv/dui", {
  params: { documentNumber: "123456789", dateOfBirth: "01/12/1995" },
  headers: { Accept: "application/json", Authorization: `Bearer ${process.env.VERIFIK_TOKEN}` },
});
console.log(data);
```

  
  

```php
 "123456789",
    "dateOfBirth" => "01/12/1995"
]);
curl_setopt($ch, CURLOPT_URL, "https://api.verifik.co/v2/sv/dui?".$query);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);
echo $response;
```

  
  

```python

url = "https://api.verifik.co/v2/sv/dui"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentNumber": "123456789", "dateOfBirth": "01/12/1995"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

  
  

```go
package main

    "fmt"
    "net/http"
)

func main() {
    url := "https://api.verifik.co/v2/sv/dui?documentNumber=123456789&dateOfBirth=01/12/1995"
    req, _ := http.NewRequest("GET", url, nil)
    req.Header.Set("Accept", "application/json")
    req.Header.Set("Authorization", "Bearer "+getenv("VERIFIK_TOKEN"))
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    fmt.Println(resp.Status)
}
```
