---
id: "en-docs-business-validation-ecuador-request-2"
title: "Ecuadorian Business Verification — Request"
sourcePath: "docs/business-validation/ecuador.mdx"
locale: "en"
category: "business-validation"
tags:
  - "ec"
  - "business-validation"
endpoints:
  - "/v2/ec/company"
  - "/v3/ec/company"
  - "/v3/ec/company?"
  - "/v3/ec/company?documenttype=rucec&documentnumber=1793197955001"
sourceAnchor: "Request"
slug: "/business-validation/ecuador"
url: "https://docs.verifik.co/business-validation/ecuador"
---

# Ecuadorian Business Verification
**API path(s):** /v2/ec/company, /v3/ec/company, /v3/ec/company?, /v3/ec/company?documenttype=rucec&documentnumber=1793197955001

Verifik's Business Verification API helps you authenticate Ecuadorian companies using official government data. It's designed to streamline your KYB (Know Your Business) processes, prevent fraud, and ensure you meet regulatory requirements.
We built this integration for businesses that need a fast, secure, and automated way to confirm the legitimacy of companies, partners, or vendors.

## Request

```javascript

const { data } = await axios.get("https://api.verifik.co/v3/ec/company", {
  params: { documentType: "RUCEC", documentNumber: "1793197955001" },
  headers: { Accept: "application/json", Authorization: `Bearer ${process.env.VERIFIK_TOKEN}` },
});
console.log(data);
```

  
  

```php
 "RUCEC",
    "documentNumber" => "1793197955001"
]);
curl_setopt($ch, CURLOPT_URL, "https://api.verifik.co/v3/ec/company?".$query);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);
echo $response;
```

  
  

```python

url = "https://api.verifik.co/v3/ec/company"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "RUCEC", "documentNumber": "1793197955001"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

  
  

```go
package main

    "fmt"
    "net/http"
)

func main() {
    url := "https://api.verifik.co/v3/ec/company?documentType=RUCEC&documentNumber=1793197955001"
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
    "accountingRequired": "SI",
    "businessName": "PANADERÍA Y PASTELERIA 227 S.A.S.",
    "cancellationSuspensionReason": null,
    "category": null,
    "contributorDates": {
      "startOfActivities": "2022-07-19 00:00:00.0",
      "cessation": "",
      "restartOfActivities": "",
      "lastUpdate": "2023-08-09 08:34:14.0"
    },
    "documentNumber": "1793197955001",
    "documentType": "RUCEC",
    "ghostTaxpayer": "NO",
    "legalRepresentatives": [
      {
        "identification": "1708262132",
        "name": "LIZARZABURU CASTILLO PABLO ANDRES"
      }
    ],
    "mainEconomicActivity": "ACTIVIDADES DE PREPARACIÓN Y SERVICIO DE BEBIDAS PARA SU CONSUMO INMEDIATO EN: CAFÉS, TIENDAS DE JUGOS DE FRUTA, VENDEDORES AMBULANTES DE BEBIDAS, ETCÉTERA.",
    "nonexistentTransactions": "NO",
    "regime": "GENERAL",
    "ruc": "1793197955001",
    "specialTaxpayer": "NO",
    "status": "ACTIVO",
    "taxpayerType": "SOCIEDAD",
    "withholdingAgent": "SI"
  },
  "signature": {
    "dateTime": "July 17, 2026 6:15 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "CMPY1"
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
  "message": "documentType must be one of: [RUCEC]"
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
