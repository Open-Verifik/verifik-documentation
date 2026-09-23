---
id: "en-docs-legal-certificate-of-validity-for-legal-professionals-response-2"
title: "Certificate of Validity for Legal Professionals — Response"
sourcePath: "docs/legal/certificate-of-validity-for-legal-professionals.mdx"
locale: "en"
category: "legal"
tags:
  - "co"
  - "legal"
endpoints:
  - "/v2/co/rama/certificado/vigencia"
  - "/v2/co/rama/certificado/vigencia?documenttype=cc&documentnumber=123456789&quality=abg"
sourceAnchor: "Response"
slug: "/legal/certificate-of-validity-for-legal-professionals"
url: "https://docs.verifik.co/legal/certificate-of-validity-for-legal-professionals"
---

# Certificate of Validity for Legal Professionals
**API path(s):** /v2/co/rama/certificado/vigencia, /v2/co/rama/certificado/vigencia?documenttype=cc&documentnumber=123456789&quality=abg

## Response

```json
{
  "data": {
    "certificado": "",
    "documentNumber": "123456789",
    "documentType": "CC",
    "encalidad": "Abogado",
    "estado": "Vigente",
    "fechaCreacion": "30/05/2014",
    "fechaExpedicion": "2014/05/30",
    "idHojaDeVida": "5757153a-0e73-e123-80f1-001234b16b17",
    "motivoNoVigencia": " - ",
    "numeroTarCarLice": "123456",
    "observacionesPenaAccesoria": null
  },
  "signature": {
    "dateTime": "April 5, 2024 2:17 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "CHKEH"
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
  "message": "Validation error (missing or invalid query parameter, or documentType not CC/CE)."
}
```

## Features

-   **Professional Verification**: Verify the current status of legal professionals in Colombia
-   **Multiple Professional Types**: Support for ABG (Abogado), JUEZPAZ (Juez de Paz), and LT (Legal Technician)
-   **Status Tracking**: Check if professional is currently active (Vigente) or inactive
-   **Certification Details**: Access creation and issuance dates of professional certifications
-   **Unique Identification**: Get unique resume identifier for each professional
-   **License Information**: Access professional license numbers and details
-   **Structured Response**: Organized data format for easy integration
-   **Multiple Programming Languages**: Support for JavaScript, Python, PHP, and Swift
-   **Error Handling**: Comprehensive error responses for various scenarios

## Use Cases

- **Professional Verification**: Verify the credentials and status of legal professionals
- **Due Diligence**: Check professional status during legal consultations
- **Compliance Verification**: Ensure legal professionals meet current requirements
- **Background Checks**: Verify professional history and current status
- **Legal Services**: Validate professionals before engaging their services
