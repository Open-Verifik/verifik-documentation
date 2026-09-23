---
id: "en-docs-business-validation-paraguay-request-2"
title: "Paraguayan Business Verification — Request"
sourcePath: "docs/business-validation/paraguay.mdx"
locale: "en"
category: "business-validation"
tags:
  - "py"
  - "business-validation"
endpoints:
  - "/v2/py/company"
  - "/v2/py/company?"
  - "/v2/py/company?documenttype=ruc&documentnumber=80033331"
sourceAnchor: "Request"
slug: "/business-validation/paraguay"
url: "https://docs.verifik.co/business-validation/paraguay"
---

# Paraguayan Business Verification
**API path(s):** /v2/py/company, /v2/py/company?, /v2/py/company?documenttype=ruc&documentnumber=80033331

Verifik's Business Verification API helps you authenticate Paraguayan companies using official government data. It's designed to streamline your KYB (Know Your Business) processes, prevent fraud, and ensure you meet all regulatory requirements effortlessly.
We built this integration for businesses that need a fast, secure, and automated way to confirm the legitimacy of companies, partners, or vendors.

## Request

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/py/company", {
  params: { documentType: "RUC", documentNumber: "80033331" },
  headers: { Accept: "application/json", Authorization: `Bearer ${process.env.VERIFIK_TOKEN}` },
});
console.log(data);
```

  
  

```php
 "RUC",
    "documentNumber" => "80033331"
]);
curl_setopt($ch, CURLOPT_URL, "https://api.verifik.co/v2/py/company?".$query);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);
echo $response;
```

  
  

```python

url = "https://api.verifik.co/v2/py/company"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "RUC", "documentNumber": "80033331"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

  
  

```go
package main

    "fmt"
    "net/http"
)

func main() {
    url := "https://api.verifik.co/v2/py/company?documentType=RUC&documentNumber=80033331"
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
    "businessName": "CONDOMINIO MANUEL ADOLFO FERREIRA BRUSQUETTI Y OTRO",
    "documentNumber": "80033331",
    "documentType": "RUC",
    "fullRUC": "80033331-4"
  },
  "signature": {
    "dateTime": "October 10, 2025 5:32 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "NI85Y"
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
  "message": "documentType must be one of: [RUC]"
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
