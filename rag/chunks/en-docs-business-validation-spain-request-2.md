---
id: "en-docs-business-validation-spain-request-2"
title: "Spanish Business Verification — Request"
sourcePath: "docs/business-validation/spain.mdx"
locale: "en"
category: "business-validation"
tags:
  - "es"
  - "business-validation"
endpoints:
  - "/v2/es/company"
  - "/v2/es/company?"
  - "/v2/es/company?documenttype=cif&documentnumber=33011826"
sourceAnchor: "Request"
slug: "/business-validation/spain"
url: "https://docs.verifik.co/business-validation/spain"
---

# Spanish Business Verification
**API path(s):** /v2/es/company, /v2/es/company?, /v2/es/company?documenttype=cif&documentnumber=33011826

Verifik's Business Verification API helps you authenticate Spanish companies using official government data. It's designed to streamline your KYB (Know Your Business) processes, prevent fraud, and ensure you meet all regulatory requirements effortlessly.
We built this integration for businesses that need a fast, secure, and automated way to confirm the legitimacy of companies, partners, or vendors.

## Request

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/es/company", {
  params: { documentType: "CIF", documentNumber: "33011826" },
  headers: { Accept: "application/json", Authorization: `Bearer ${process.env.VERIFIK_TOKEN}` },
});
console.log(data);
```

  
  

```php
 "CIF",
    "documentNumber" => "33011826"
]);
curl_setopt($ch, CURLOPT_URL, "https://api.verifik.co/v2/es/company?".$query);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);
echo $response;
```

  
  

```python

url = "https://api.verifik.co/v2/es/company"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "CIF", "documentNumber": "33011826"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

  
  

```go
package main

    "fmt"
    "net/http"
)

func main() {
    url := "https://api.verifik.co/v2/es/company?documentType=CIF&documentNumber=33011826"
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
        "address": "C/ MATEMATICO PEDRAYES, 23 33005, OVIEDO, ASTURIAS",
        "businessName": "SERESCO SA.",
        "cnae": "6209 Otros servicios relacionados con las tecnologías de la información y la informática",
        "constitutionDate": "",
        "documentNumber": "33011826",
        "documentType": "CIF",
        "legalForm": "SOCIEDAD ANONIMA",
        "phone": "985235364",
        "sic": "7379 Servicios relacionados con computación SC",
        "socialObject": ""
    },
    "signature": {
        "dateTime": "May 18, 2026 10:30 PM",
        "message": "Certified by Verifik.co"
    },
    "id": "BC529"
}
```

  
  

```json
{
    "code": "MissingParameter",
    "message": "documentType must be one of: [NIF,CIF]"
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
