---
id: "en-docs-business-validation-mexican-companies-request-2"
title: "Mexican Business Verification — Request"
sourcePath: "docs/business-validation/mexican-companies.mdx"
locale: "en"
category: "business-validation"
tags:
  - "mx"
  - "business-validation"
endpoint: "/v2/mx/company"
sourceAnchor: "Request"
slug: "/business-validation/mexican-companies"
url: "https://docs.verifik.co/business-validation/mexican-companies"
---

# Mexican Business Verification
**API path(s):** /v2/mx/company

Verifik's Business Verification API helps you authenticate Mexican companies using official government data. It's designed to streamline your KYB (Know Your Business) processes, prevent fraud, and ensure you meet all regulatory requirements effortlessly.
We built this integration for businesses that need a fast, secure, and automated way to confirm the legitimacy of companies, partners, or vendors.

## Request

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/mx/company", {
  params: { documentType: "FME", documentNumber: "N-2021007002" },
  headers: { Accept: "application/json", Authorization: `Bearer ${process.env.VERIFIK_TOKEN}` },
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/mx/company"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "FME", "documentNumber": "N-2021007002"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

### Response

  

```json
{
  "data": {
    "business": "AMASIJO INSUMOS",
    "city": "CHIHUAHUA",
    "detail": {
      "acts": [
        {
          "act": "Constitución de Sociedad por Acciones Simplificada",
          "documentNumber": "",
          "entryDate": "09/02/2021",
          "modality": "Inscripción vía web inmediata",
          "nci": "202100022232",
          "preCodedForm": "M47 - Constitución de Sociedad por Acciones Simplificada",
          "registrationDate": "09/02/2021"
        }
      ],
      "businessLine": "",
      "companyDuration": "INDEFINIDA",
      "corporatePurpose": "Comercio al por mayor de pan y pasteles y otros productos de panadería",
      "curp": "",
      "federalEntity": "Chihuahua",
      "fme": "N-2021007002",
      "fmeStatus": "Open",
      "legalName": "AMASIJO INSUMOS",
      "legalRegime": "Sociedad por Acciones Simplificada",
      "mainPartner": "LYDIA ESPARZA VARELA",
      "municipality": "Chihuahua",
      "nationality": "Mexican",
      "personType": "Legal entity",
      "registrationBackground": "",
      "registrationDate": "09/02/2021",
      "registrationOffice": "Chihuahua",
      "rfc": "",
      "socialAddress": "COLEGIO SAN MARCOS  1631,  , MISIONES UNIVERSIDAD, CHIHUAHUA, C. P. 31124"
    },
    "documentNumber": "N-2021007002",
    "documentType": "FME"
  },
  "signature": {
    "dateTime": "June 2, 2026 5:11 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "DG5PL"
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
  "message": "documentType must be one of: [FME]"
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
  "code": "InternalServerError",
  "message": "Server error."
}
```
