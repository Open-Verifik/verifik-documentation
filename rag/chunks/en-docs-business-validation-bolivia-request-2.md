---
id: "en-docs-business-validation-bolivia-request-2"
title: "Bolivian Business Verification — Request"
sourcePath: "docs/business-validation/bolivia.mdx"
locale: "en"
category: "business-validation"
tags:
  - "bo"
  - "business-validation"
endpoint: "/v2/bo/company"
sourceAnchor: "Request"
slug: "/business-validation/bolivia"
url: "https://docs.verifik.co/business-validation/bolivia"
---

# Bolivian Business Verification
**API path(s):** /v2/bo/company

Verifik's Business Verification API helps you authenticate Bolivian companies using official government data. It's designed to streamline your KYB (Know Your Business) processes, prevent fraud, and ensure you meet all regulatory requirements effortlessly.
We built this integration for businesses that need a fast, secure, and automated way to confirm the legitimacy of companies, partners, or vendors.

## Request

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/bo/company", {
  params: { documentNumber: "1234567", documentType: "NIT" },
  headers: { Accept: "application/json", Authorization: `Bearer ${process.env.VERIFIK_TOKEN}` },
});
console.log(data);
```

  
  

```php
 "1234567",
    "documentType" => "NIT"
]);
curl_setopt($ch, CURLOPT_URL, "https://api.verifik.co/v2/bo/company?".$query);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);
echo $response;
```

  
  

```python

url = "https://api.verifik.co/v2/bo/company"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentNumber": "1234567", "documentType": "NIT"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

  
  

```go
package main

    "fmt"
    "net/http"
)

func main() {
    url := "https://api.verifik.co/v2/bo/company?documentType=NIT&documentNumber=9287278014"
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
        "businessName": "INETYF AUTOMATIZACION",
        "dateLastState": "",
        "documentNumber": "5287278014",
        "documentType": "NIT",
        "status": "ACTIVO"
    },
    "signature": {
        "dateTime": "October 10, 2025 10:47 AM",
        "message": "Certified by Verifik.co"
    },
    "id": "80NJ4"
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
