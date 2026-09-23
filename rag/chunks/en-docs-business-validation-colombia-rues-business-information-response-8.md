---
id: "en-docs-business-validation-colombia-rues-business-information-response-8"
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

Category: `ESAL`

```json
{
    "data": {
        "commercialRegistry": {
            "NIT": "805019139",
            "acronym": null,
            "businessName": "FUNDACION MANOS DE LIBERTAD",
            "commercialAddress": null,
            "companyType": "FUNDACIONES",
            "email": null,
            "enrollmentDate": "2001-02-09",
            "lastRenewedYear": "2025",
            "lastUpdatedDate": "2025-02-28",
            "legalRepresentatives": {
                "faculty": "Por documento privado No. --------------- del 06 de febrero de 2001, inscritoen esta Cámara de Comercio el 12 de febrero de 2001 con el No. 211 del LibroI, se designó a: CARGO NOMBREIDENTIFICACIÓN REPRESENTANTE ELENA PEREZ DELGADO C.C.36110054 LEGAL- PRESIDENTE",
                "legalRepresentatives": [
                    [
                        {
                            "documentNumber": "36110054",
                            "documentType": "CC",
                            "name": "Elena Perez Delgado",
                            "role": "Representante Legal"
                        }
                    ]
                ]
            },
            "organizationType": "SOCIEDAD ó PERSONA JURIDICA PRINCIPAL ó ESAL",
            "reasonForCancellation": "ENTIDAD SIN ANIMO DE LUCRO",
            "registrationNumber": "9000004106",
            "renewalDate": "2025-02-18"
        },
        "economicActivities": [
            {
                "code": "9499",
                "description": "Actividades de otras asociaciones n.c.p.",
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
        "dateTime": "October 17, 2025 4:48 PM",
        "message": "Certified by Verifik.co"
    },
    "id": "DMD09"
}
```

Category: `EXTRANJERAS`
