---
id: "en-docs-business-validation-peru-request-2"
title: "Peruvian Business Verification — Request"
sourcePath: "docs/business-validation/peru.mdx"
locale: "en"
category: "business-validation"
tags:
  - "pe"
  - "business-validation"
endpoint: "/api/pe/company"
sourceAnchor: "Request"
slug: "/business-validation/peru"
url: "https://docs.verifik.co/business-validation/peru"
---

# Peruvian Business Verification
**API path(s):** /api/pe/company

Verifik's Business Verification API helps you authenticate Peruvian companies using official government data. It's designed to streamline your KYB (Know Your Business) processes, prevent fraud, and ensure you meet all regulatory requirements effortlessly.
We built this integration for businesses that need a fast, secure, and automated way to confirm the legitimacy of companies, partners, or vendors.

## Request

```javascript

const { data } = await axios.get("https://api.verifik.co/v3/pe/company", {
  params: { documentType: "RUC", documentNumber: "20605980008" },
  headers: { Accept: "application/json", Authorization: `Bearer ${process.env.VERIFIK_TOKEN}` },
});
console.log(data);
```

  
  

```php
 "RUC",
    "documentNumber" => "20605980008"
]);
curl_setopt($ch, CURLOPT_URL, "https://api.verifik.co/v3/pe/company?".$query);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);
echo $response;
```

  
  

```python

url = "https://api.verifik.co/v3/pe/company"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "RUC", "documentNumber": "20605980008"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

  
  

```go
package main

    "fmt"
    "net/http"
)

func main() {
    url := "https://api.verifik.co/v3/pe/company?documentType=RUC&documentNumber=20605980008"
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
    "address": "AV. VICTOR ANDRES BELAUNDE NRO. 332 INT. 702 URB. EL ROSARIO - LIMA LIMA SAN ISIDRO",
    "businessName": "MERCADOLIBRE PERU S.R.L.",
    "conditionTaxpayer": "HABIDO",
    "district": "SAN ISIDRO",
    "documentNumber": "20605980008",
    "documentType": "RUC",
    "nameVia": "VICTOR ANDRES BELAUNDE",
    "province": "LIMA",
    "simpleaddress": "AV. VICTOR ANDRES BELAUNDE NRO. 332 INT. 702 URB. EL ROSARIO",
    "state": "LIMA",
    "stateTaxpayer": "ACTIVO",
    "zoneCode": "URB.",
    "zoneType": "EL ROSARIO"
  },
  "signature": {
    "dateTime": "October 10, 2025 5:35 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "RLS8G"
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
