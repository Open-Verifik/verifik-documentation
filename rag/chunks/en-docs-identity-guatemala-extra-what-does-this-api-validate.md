---
id: "en-docs-identity-guatemala-extra-what-does-this-api-validate"
title: "Guatemala Extra — What does this API validate?"
sourcePath: "docs/identity/guatemala-extra.mdx"
locale: "en"
category: "identity"
tags:
  - "gt"
  - "identity"
endpoint: "/v2/gt/cedula/extra"
sourceAnchor: "What does this API validate?"
slug: "/identity/guatemala-extra"
url: "https://docs.verifik.co/identity/guatemala-extra"
---

# Guatemala Extra
**API path(s):** /v2/gt/cedula/extra

## What does this API validate?

Verifik's Identity Verification API helps you authenticate Guatemalan citizens using official government data. This endpoint provides additional details such as birth date and gender.

## What does this API validate?

Our API connects directly with official records to validate:

-   **Full Name & CUI Number**: Supports *Cédula de Vecindad* or *Documento Personal de Identificación* (CUI).
-   **Identity Match**: Confirms that the name provided matches the CUI number.
-   **Extra Data**: Retrieves **Birth Date** and **Gender**.

By verifying these details, you can be confident that the person you're dealing with is real and holds a valid document, significantly lowering the risk of impersonation and fraud.

## API Reference

### Endpoint

```
https://api.verifik.co/v2/gt/cedula/extra
```

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Parameters

| Name           | Type    | Required | Description                                    |
| -------------- | ------- | -------- | ---------------------------------------------- |
| `documentType` | string  | Yes      | Document type. Allowed value: `CUI`. |
| `documentNumber` | string | Yes      | Document number. |
| `dateOfBirth`  | string  | Yes      | Date of birth (`DD/MM/YYYY`). Required by validation for this route. |

### Request

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/gt/cedula/extra", {
  params: { documentType: "CUI", documentNumber: "2222624190903", dateOfBirth: "12/03/1984" },
  headers: { Accept: "application/json", Authorization: `Bearer ${process.env.VERIFIK_TOKEN}` },
});
console.log(data);
```

  
  

```php
 "CUI",
    "documentNumber" => "2222624190903",
    "dateOfBirth" => "12/03/1984"
]);
curl_setopt($ch, CURLOPT_URL, "https://api.verifik.co/v2/gt/cedula/extra?".$query);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);
echo $response;
```

  
  

```python

url = "https://api.verifik.co/v2/gt/cedula/extra"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "CUI", "documentNumber": "2222624190903", "dateOfBirth": "12/03/1984"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

  
  

```go
package main

    "fmt"
    "net/http"
)

func main() {
    url := "https://api.verifik.co/v2/gt/cedula/extra?documentType=CUI&documentNumber=2222624190903&dateOfBirth=12/03/1984"
    req, _ := http.NewRequest("GET", url, nil)
    req.Header.Set("Accept", "application/json")
    req.Header.Set("Authorization", "Bearer "+getenv("VERIFIK_TOKEN"))
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    fmt.Println(resp.Status)
}
```
