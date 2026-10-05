---
id: "en-docs-business-validation-panama-response-3"
title: "Panamanian Business Verification — Response"
sourcePath: "docs/business-validation/panama.mdx"
locale: "en"
category: "business-validation"
tags:
  - "pa"
  - "business-validation"
endpoint: "/v2/pa/company"
sourceAnchor: "Response"
slug: "/business-validation/panama"
url: "https://docs.verifik.co/business-validation/panama"
---

# Panamanian Business Verification
**API path(s):** /v2/pa/company

Verifik's Business Verification API helps you authenticate Panamanian companies using official government data. It's designed to streamline your KYB (Know Your Business) processes, prevent fraud, and ensure you meet all regulatory requirements effortlessly.
We built this integration for businesses that need a fast, secure, and automated way to confirm the legitimacy of companies, partners, or vendors.

## Response

```json
{
  "data": {
    "address": "PROVINCIA PANAMÁ",
    "businessName": "MATA ENTERPRISES, S.A.",
    "capital": "1,000.00",
    "currencyType": "Dólares americanos",
    "currentStatus": "DISUELTO",
    "documentNumber": "155703400-2-2021",
    "documentType": "RUC",
    "dv": "39",
    "folioOrFincaOrFicha": "(MERCANTIL) Folio Nº 126965 (S)",
    "idFolio": "1183912",
    "organizationType": "SOCIEDAD ANONIMA",
    "recordType": "Mercantil",
    "registrationDate": "13/03/1984",
    "representatives": {
      "director": "ABDIEL NU#EZ",
      "president": "JOSE ALBERTO RUIZ",
      "representative": "EL PRESIDENTE, EN SU AUSENCIA EL TESORERO O EL SECRETARIO.",
      "residentAgent": "JURGEN MOSSACK",
      "secretary": "LETICIA MONTOYA",
      "subscriber": "DIVA ARGELIS PATINO DE DONADO",
      "secretarioAsistente": "ABDIEL NU#EZ",
      "tesoreroAsistente": "CORNELIO MCKAY",
      "treasurer": "FRANCIS PEREZ",
      "vicePresident": "ABDIEL NU#EZ"
    },
    "status": "",
    "validity": "PERPETUA"
  },
  "signature": {
    "dateTime": "October 10, 2025 5:25 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "1SPK4"
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
  "code": "MissingParameter",
  "message": "missing dv\n"
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
