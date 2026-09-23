---
id: "en-docs-business-validation-argentina-request-2"
title: "Argentine Business Verification — Request"
sourcePath: "docs/business-validation/argentina.mdx"
locale: "en"
category: "business-validation"
tags:
  - "ar"
  - "business-validation"
endpoint: "/v2/ar/company"
sourceAnchor: "Request"
slug: "/business-validation/argentina"
url: "https://docs.verifik.co/business-validation/argentina"
---

# Argentine Business Verification
**API path(s):** /v2/ar/company

Verifik's Business Verification API helps you authenticate Argentine companies using official government data. It's designed to streamline your KYB (Know Your Business) processes, prevent fraud, and ensure you meet all regulatory requirements effortlessly.
We built this integration for businesses that need a fast, secure, and automated way to confirm the legitimacy of companies, partners, or vendors.

## Request

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/ar/company", {
  params: { documentType: "CUIT", documentNumber: "33516727409" },
  headers: { Accept: "application/json", Authorization: `Bearer ${process.env.VERIFIK_TOKEN}` },
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/ar/company"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "CUIT", "documentNumber": "33516727409"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

### Response

  

```json
{
    "data": {
        "businessName": "MERCADOLIBRE S.R.L.",
        "contractDate": "15-07-1999",
        "documentNumber": "30703088534",
        "documentType": "CUIT",
        "economicActivities": {
            "mainActivity": [
                {
                    "code": "620900 (F-883)",
                    "description": "SERVICIOS DE INFORMÁTICA N.C.P.",
                    "startDate": "04/2015"
                }
            ],
            "secondaryActivity": [
                {
                    "code": "731009 (F-883)",
                    "description": "SERVICIOS DE PUBLICIDAD N.C.P.",
                    "startDate": "12/2014"
                },
                {
                    "code": "649999 (F-883)",
                    "description": "SERVICIOS DE FINANCIACIÓN Y ACTIVIDADES FINANCIERAS N.C.P.",
                    "startDate": "12/2014"
                },
                {
                    "code": "829900 (F-883)",
                    "description": "SERVICIOS EMPRESARIALES N.C.P.",
                    "startDate": "12/2014"
                },
                {
                    "code": "523090 (F-883)",
                    "description": "SERVICIOS DE GESTIÓN Y LOGÍSTICA PARA EL TRANSPORTE DE MERCADERÍAS N.C.P.",
                    "startDate": "08/2017"
                }
            ]
        },
        "legalForm": "S.R.L."
    },
    "signature": {
        "dateTime": "October 10, 2025 10:26 AM",
        "message": "Certified by Verifik.co"
    },
    "id": "AXR7A"
}
```

  
  

```json
{
    "code": "NotFound",
    "message": "Record not found."
}
```
