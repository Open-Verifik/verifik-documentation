---
id: "en-docs-identity-validation-guatemala-request-2"
title: "Guatemalan Citizen — Request"
sourcePath: "docs/identity-validation/guatemala.mdx"
locale: "en"
category: "identity-validation"
tags:
  - "gt"
  - "identity-validation"
endpoint: "/v2/gt/cedula"
sourceAnchor: "Request"
slug: "/identity-validation/guatemala"
url: "https://docs.verifik.co/identity-validation/guatemala"
---

# Guatemalan Citizen
**API path(s):** /v2/gt/cedula

Verifik's Identity Verification API helps you authenticate Guatemalan citizens using official government data. It's designed to streamline your KYC (Know Your Customer) processes, prevent fraud, and ensure you meet all regulatory requirements effortlessly.
We built this integration for businesses that need a fast, secure, and automated way to confirm the true identity of users, employees, or customers.

## Request

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/gt/cedula", {
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
curl_setopt($ch, CURLOPT_URL, "https://api.verifik.co/v2/gt/cedula?".$query);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);
echo $response;
```

  
  

```python

url = "https://api.verifik.co/v2/gt/cedula"
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
    url := "https://api.verifik.co/v2/gt/cedula?documentType=CUI&documentNumber=2222624190903&dateOfBirth=12/03/1984"
    req, _ := http.NewRequest("GET", url, nil)
    req.Header.Set("Accept", "application/json")
    req.Header.Set("Authorization", "Bearer "+getenv("VERIFIK_TOKEN"))
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    fmt.Println(resp.Status)
}
```

### Response

  

```json
{
  "data": {
    "arrayName": [
      "ERICK",
      "ROBERTO",
      "RAMIREZ",
      "MORALES"
    ],
    "documentNumber": "2222624190903",
    "documentType": "CUI",
    "firstName": "ERICK ROBERTO",
    "fullName": "ERICK ROBERTO RAMIREZ MORALES",
    "lastName": "RAMIREZ MORALES"
  },
  "signature": {
    "dateTime": "January 16, 2024 3:44 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "GT001"
}
```

  
  

```json
{
  "code": "MissingParameter",
  "message": "missing documentType\n. missing documentNumber\n. missing dateOfBirth\n"
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
    "code": "InternalServerError",
    "message": "Server error."
}
```
