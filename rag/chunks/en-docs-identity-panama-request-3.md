---
id: "en-docs-identity-panama-request-3"
title: "Panamanian Citizen — Request"
sourcePath: "docs/identity/panama.mdx"
locale: "en"
category: "identity"
tags:
  - "pa"
  - "identity"
endpoint: "/v2/pa/cedula"
sourceAnchor: "Request"
slug: "/identity/panama"
url: "https://docs.verifik.co/identity/panama"
---

# Panamanian Citizen
**API path(s):** /v2/pa/cedula

Verifik's Identity Verification API helps you authenticate Panamanian citizens. It's designed to streamline your KYC (Know Your Customer) processes, prevent fraud, and ensure you meet all regulatory requirements effortlessly.
We built this integration for businesses that need a fast, secure, and automated way to confirm the true identity of users, employees, or customers.

## Request

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/pa/cedula", {
  params: { documentType: "CCPA", documentNumber: "8-1251-1829" },
  headers: { Accept: "application/json", Authorization: `Bearer ${process.env.VERIFIK_TOKEN}` },
});
console.log(data);
```

  
  

```php
 "CCPA",
    "documentNumber" => "8-1251-1829"
]);
curl_setopt($ch, CURLOPT_URL, "https://api.verifik.co/v2/pa/cedula?".$query);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);
echo $response;
```

  
  

```python

url = "https://api.verifik.co/v2/pa/cedula"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "CCPA", "documentNumber": "8-1251-1829"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

  
  

```go
package main

    "fmt"
    "net/http"
)

func main() {
    url := "https://api.verifik.co/v2/pa/cedula?documentType=CCPA&documentNumber=8-1251-1829"
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
    "documentType": "CCPA",
    "documentNumber": "8-1251-1829",
    "firstName": "Roberto",
    "lastName": "Martínez",
    "fullName": "Roberto Martínez"
  },
  "signature": {"message": "Certified by Verifik.co", "dateTime": "January 16, 2024 3:44 PM"},
  "id": "PA001"
}
```

  
  

```json
{
  "message": "Invalid document number",
  "code": "INVALID_DOCUMENT"
}
```

  
  

```json
{
  "code": "MissingParameter",
  "message": "missing documentNumber"
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
