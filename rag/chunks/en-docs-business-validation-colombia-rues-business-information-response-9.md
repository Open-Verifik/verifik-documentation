---
id: "en-docs-business-validation-colombia-rues-business-information-response-9"
title: "RUES Complete Business Validation (v3) — Response"
sourcePath: "docs/business-validation/colombia-rues-business-information.mdx"
locale: "en"
category: "business-validation"
tags:
  - "business-validation"
endpoint: "/v3/co/rues-complete"
sourceAnchor: "Response"
slug: "/business-validation/colombia-rues-business-information"
url: "https://docs.verifik.co/business-validation/colombia-rues-business-information"
---

# RUES Complete Business Validation (v3)
**API path(s):** /v3/co/rues-complete

Verifik's RUES Complete Business Validation API helps you retrieve comprehensive business information from Colombia's RUES (Registro Único Empresarial y Social) registry. It's designed to streamline your KYB (Know Your Business) processes, prevent fraud, and ensure you meet all regulatory requirements effortlessly.
We built this integration for businesses that need a fast, secure, and automated way to access complete business information for Colombian companies, partners, or vendors.

## Response

```json
{
    "data": {
        "commercialRegistry": {
            "NIT": "900537723",
            "acronym": null,
            "businessName": "SAVE THE CHILDREN INTERNATIONAL SCI",
            "commercialAddress": null,
            "companyType": "LAS DEMÁS ORGANIZACIONES CIVILES,CORPORACIONES,FUNDACIONES ",
            "email": null,
            "enrollmentDate": "2012-06-06",
            "idRm": "40090042398",
            "lastRenewedYear": "2023",
            "lastUpdatedDate": "2023-09-18",
            "legalRepresentatives": {
                "faculty": "Por Escritura Pública No. 3156 del 18 de mayo de 2016, de Notaría 62de Bogotá D.C., inscrita en esta Cámara de Comercio el 26 de mayo de2016 con el No. 00001174 del Libro V de las entidades extranjeras sinánimo de lucro, se designó a:.CARGO NOMBRE IDENTIFICACIÓN.Apoderado Maria Paula Martinez C.C. No. 52249963 Judicial Ong Villa Extranjera",
                "legalRepresentatives": [
                    [
                        {
                            "documentNumber": "52249963",
                            "documentType": "CC",
                            "name": "Maria Paula Martinez",
                            "role": "Apoderado"
                        },
                        {
                            "documentType": "No tiene identificación proporcionada.",
                            "name": "Ong Villa Extranjera",
                            "role": "Judicial"
                        }
                    ]
                ]
            },
            "organizationType": "SOCIEDAD ó PERSONA JURIDICA PRINCIPAL ó ESAL",
            "reasonForCancellation": "ENTIDAD SIN ANIMO DE LUCRO EXTRANJERAS",
            "registrationNumber": "0090042398",
            "renewalDate": "2023-06-09"
        },
        "economicActivities": [
            {
                "code": "8899",
                "description": "Otras actividades de asistencia social sin alojamiento n.c.p.",
                "name": "ciiu_act_econ_pri"
            },
            {
                "code": "",
                "description": "",
                "name": "ciiu_act_econ_sec"
            },
            {
                "code": "",
                "description": "",
                "name": "ciiu3"
            },
            {
                "code": "",
                "description": "",
                "name": "ciiu4"
            }
        ],
        "establishmentOwner": []
    },
    "signature": {
        "dateTime": "October 17, 2025 4:51 PM",
        "message": "Certified by Verifik.co"
    },
    "id": "GR1KS"
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
  "message": "missing documentNumber\n"
}
```

```json
{
  "code": "MissingParameter",
  "message": "missing category\n"
}
```

  
  

```json
{
    "code": "NotFound",
    "message": "Record not found."
}
```

  

---
