---
id: "es-docs-es-resources-proyectos-recuperar-un-proyecto-respuesta-2"
title: "Obtener un proyecto — Respuesta"
sourcePath: "docs-es/resources/proyectos/recuperar-un-proyecto.mdx"
locale: "es"
category: "resources"
tags:
  - "resources"
endpoints:
  - "/v3/projects/${projectid}"
  - "/v3/projects/%s"
  - "/v3/projects/{id}"
  - "/v3/projects/{project_id}"
sourceAnchor: "Respuesta"
---

# Obtener un proyecto
**API path(s):** /v3/projects/${projectid}, /v3/projects/%s, /v3/projects/{id}, /v3/projects/{project_id}

## Respuesta

```json
{
    "data": {
        "_id": "64a1b2c3d4e5f6789012345",
        "name": "My KYC Project",
        "identifier": "my-kyc-project",
        "contactEmail": "admin@example.com",
        "privacyUrl": "https://example.com/privacy",
        "termsAndConditionsUrl": "https://example.com/terms",
        "status": "active",
        "currentStep": 6,
        "lastStep": 6,
        "demoMode": false,
        "demoOTP": null,
        "allowedCountries": ["United States", "Canada"],
        "dataProtection": {
            "name": "John Doe",
            "email": "dpo@example.com",
            "address": "123 Main St",
            "address2": "Suite 100",
            "city": "New York",
            "country": "United States",
            "postalCode": "10001"
        },
        "branding": {
            "backgroundColor": "#01236D",
            "buttonColor": "#B2BDD3",
            "buttonTextColor": "#FFFFFF",
            "textColor": "#8091B6",
            "titleColor": "#000000",
            "logo": "https://example.com/logo.png",
            "image": "https://example.com/hero-image.png",
            "imageBackgroundColor": "white",
            "backgroundImage": null,
            "backgroundImageColor": ""
        },
        "projectFlows": [
            {
                "_id": "64a1b2c3d4e5f6789012346",
                "type": "onboarding",
                "target": "personal",
                "status": "active",
                "version": 3,
                "redirectUrl": "https://example.com/success",
                "webhookUrl": "https://example.com/webhook",
                "signUpForm": {
                    "fullName": true,
                    "fullNameStyle": "separate",
                    "email": true,
                    "emailGateway": "mailgun",
                    "phone": true,
                    "phoneGateway": "whatsapp",
                    "countryCode": "US",
                    "showTermsAndConditions": true,
                    "showPrivacyNotice": true,
                    "allowAdditionalFields": false,
                    "additionalFields": []
                },
                "documents": {
                    "attemptLimit": 3,
                    "criminalHistoryVerification": true,
                    "informationVerification": true,
                    "screening": true,
                    "verificationMethods": ["SCAN_PROMPT"],
                    "documentTypes": [
                        {
                            "country": "United States",
                            "configurations": [
                                {
                                    "active": true,
                                    "documentCategory": "government_id",
                                    "documentTemplates": []
                                },
                                {
                                    "active": true,
                                    "documentCategory": "passport",
                                    "documentTemplates": []
                                }
                            ]
                        },
                        {
                            "country": "Canada",
                            "configurations": [
                                {
                                    "active": true,
                                    "documentCategory": "government_id",
                                    "documentTemplates": []
                                }
                            ]
                        }
                    ]
                },
                "liveness": {
                    "attemptLimit": 3,
                    "minScore": 0.65,
                    "searchMinScore": 0.8,
                    "searchMode": "FAST"
                },
                "steps": {
                    "document": "mandatory",
                    "liveness": "mandatory"
                },
                "integrations": {
                    "redirectUrl": "https://example.com/success",
                    "webhook": "64a1b2c3d4e5f6789012347",
                    "source": "NONE",
                    "strategy": "none",
                    "apiUrl": "",
                    "apiTestType": "email",
                    "apiTestValue": ""
                },
                "createdAt": "2023-07-01T10:00:00.000Z",
                "updatedAt": "2023-07-01T15:30:00.000Z"
            }
        ],
        "version": 2,
        "createdAt": "2023-07-01T10:00:00.000Z",
        "updatedAt": "2023-07-01T15:30:00.000Z"
    }
}
```

  
  

```json
{
    "message": "Invalid project ID format",
    "code": "InvalidParameter"
}
```

  
  

```json
{
    "message": "Access forbidden",
    "code": "Forbidden"
}
```
