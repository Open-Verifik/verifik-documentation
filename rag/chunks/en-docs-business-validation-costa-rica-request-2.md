---
id: "en-docs-business-validation-costa-rica-request-2"
title: "Costa Rican Business Verification (NITE) — Request"
sourcePath: "docs/business-validation/costa-rica.mdx"
locale: "en"
category: "business-validation"
tags:
  - "cr"
  - "business-validation"
endpoint: "/v2/cr/company"
sourceAnchor: "Request"
slug: "/business-validation/costa-rica"
url: "https://docs.verifik.co/business-validation/costa-rica"
---

# Costa Rican Business Verification (NITE)
**API path(s):** /v2/cr/company

Verifik's Business Verification API helps you authenticate Costa Rican companies using official government data. It's designed to streamline your KYB (Know Your Business) processes, prevent fraud, and ensure you meet all regulatory requirements effortlessly.
We built this integration for businesses that need a fast, secure, and automated way to confirm the legitimacy of companies, partners, or vendors.

## Request

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/cr/company", {
  params: { documentType: "NITE", documentNumber: "3101122876" },
  headers: { Accept: "application/json", Authorization: `Bearer ${process.env.VERIFIK_TOKEN}` },
});
console.log(data);
```

  
  

```php
 "NITE",
    "documentNumber" => "3101122876"
]);
curl_setopt($ch, CURLOPT_URL, "https://api.verifik.co/v2/cr/company?".$query);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);
echo $response;
```

  
  

```python

url = "https://api.verifik.co/v2/cr/company"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "NITE", "documentNumber": "3101122876"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

  
  

```go
package main

    "fmt"
    "net/http"
)

func main() {
    url := "https://api.verifik.co/v2/cr/company?documentType=NITE&documentNumber=3101122876"
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
    "businessName": "ENLACES CASUALES COSTA RICA SOCIEDAD ANONIMA",
    "documentNumber": "3101122876",
    "documentType": "NITE"
  },
  "signature": {
    "dateTime": "October 10, 2025 5:18 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "U6IYC"
}
```

  
  

```json
{
    "code": "NotFound",
    "message": "Record not found."
}
```

  
  

```json
{
  "code": "MissingParameter",
  "message": "documentType must be one of: [NITE]"
}
```
```json
{
  "code": "MissingParameter",
  "message": "missing documentNumber\n"
}
```
```json
{
  "code": "MissingParameter",
  "message": "missing documentType\n"
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
