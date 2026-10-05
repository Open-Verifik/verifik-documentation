---
id: "en-docs-vehicle-validation-chile-vehicle-soap-plate-response-2"
title: "🇨🇱 Chile - Vehicle SOAP (by plate) — Response"
sourcePath: "docs/vehicle-validation/chile/vehicle-soap-plate.mdx"
locale: "en"
category: "vehicle-validation"
tags:
  - "cl"
  - "vehicle-validation"
endpoint: "/v2/cl/vehicle-soap-plate"
sourceAnchor: "Response"
slug: "/vehicle-validation/chile/vehicle-soap-plate"
url: "https://docs.verifik.co/vehicle-validation/chile/vehicle-soap-plate"
---

# 🇨🇱 Chile - Vehicle SOAP (by plate)
**API path(s):** /v2/cl/vehicle-soap-plate

Query Chile vehicular **SOAP** (*Seguro Obligatorio de Accidentes Personales*) using **license plate only**. The service resolves SOAP coverage via Boostr, enriches with AACH when a policy number is available, and returns vehicle attributes from Carvuk when SOAP is missing.
Returns a **nested** payload when the source responds:
- **`plate`** — Chilean license plate (Patente), **4–6** alphanumeric characters
- **`message`** — empty when SOAP is found; `No_active_SOAP_certificate_found_for_this_plate` when the vehicle exists but has no active SOAP
- **`soap`** — when found: **`status`**, **`policyNumber`**, **`insuranceCompany`**, **`validFrom`**, **`validTo`**, **`folioNumber`**, **`ownerName`**, **`ownerRut`**, **`premium`**
- **`vehicle`** — **`brand`**, **`model`**, **`year`**, **`type`**, **`engineNumber`**
- **Signed** Verifik response
Use for **insurance compliance**, **fleet onboarding**, and **claims** workflows when only the plate is known.

## Response

```json
{
  "data": {
    "plate": "HTRT86",
    "message": "",
    "soap": {
      "status": "CERTIFICADO VALIDO",
      "policyNumber": "94596506",
      "insuranceCompany": "MUTUAL DE SEGUROS DE CHILE",
      "validFrom": "01/04/2026",
      "validTo": "31/03/2027",
      "folioNumber": "FOL789",
      "ownerName": "JUAN PEREZ LOPEZ",
      "ownerRut": "12.345.678-9",
      "premium": "$50.000"
    },
    "vehicle": {
      "brand": "MITSUBISHI",
      "model": "L200 KATANA 2.4",
      "year": "2016",
      "type": "CAMIONETA",
      "engineNumber": "ENG123456"
    }
  },
  "signature": {
    "dateTime": "July 7, 2026 11:00 AM",
    "message": "Certified by Verifik.co"
  }
}
```

  
  

```json
{
  "data": {
    "plate": "CSXZ27",
    "message": "No_active_SOAP_certificate_found_for_this_plate",
    "soap": {},
    "vehicle": {
      "brand": "MAHINDRA",
      "model": "PIK UP",
      "year": "2011",
      "type": "",
      "engineNumber": ""
    }
  },
  "signature": {
    "dateTime": "July 7, 2026 11:00 AM",
    "message": "Certified by Verifik.co"
  }
}
```

  
  

```json
{
  "code": "NotFound",
  "message": "Vehicle_not_found_for_this_plate"
}
```

  
  

```json
{
  "code": "MissingParameter",
  "message": "missing plate\n"
}
```

### Notes

- **No active SOAP** returns **HTTP 200** with empty **`soap`** and **`message: No_active_SOAP_certificate_found_for_this_plate`** — not a 404.
- **Example plates (live):** `CLTK27`, `HTRT86`, `RRWX51`, `THHV64`, `CSXZ52`, `CSXZ57` return active SOAP; `CSXZ27` returns vehicle data with no active SOAP.
- **Sandbox mode:** plates **`BBCC12`**–**`BBCC21`** and **`HTRT86`** return stable nested profiles; **`ERR404`** returns **404**.
- For plate + policy lookup, see [🇨🇱 Chile - Vehicle SOAP](/vehicle-validation/chile/vehicle-soap).
- Registry **availability** is environment-dependent; outages may return **409** timeout errors.
