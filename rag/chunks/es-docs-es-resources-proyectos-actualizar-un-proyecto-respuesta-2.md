---
id: "es-docs-es-resources-proyectos-actualizar-un-proyecto-respuesta-2"
title: "Actualizar un proyecto — Respuesta"
sourcePath: "docs-es/resources/proyectos/actualizar-un-proyecto.mdx"
locale: "es"
category: "resources"
tags:
  - "resources"
sourceAnchor: "Respuesta"
---

# Actualizar un proyecto

## Respuesta

```json
{
    "data": {
        "_id": "64a1b2c3d4e5f6789012345",
        "name": "Updated Project Name",
        "identifier": null,
        "contactEmail": "new-admin@example.com",
        "privacyUrl": "https://example.com/privacy",
        "termsAndConditionsUrl": "https://example.com/terms",
        "status": "draft",
        "currentStep": 6,
        "lastStep": 6,
        "demoMode": false,
        "demoOTP": null,
        "allowedCountries": ["United States", "Canada", "Mexico"],
        "dataProtection": {
            "name": "Updated DPO",
            "email": "updated-dpo@example.com",
            "address": "789 New St",
            "address2": "",
            "city": "Toronto",
            "country": "Canada",
            "postalCode": "M5H 2N2"
        },
        "branding": {
            "bgColor": "#1a365d",
            "tabColor": "#01236D",
            "borderColor": "#B2BDD3",
            "buttonColor": "#3182ce",
            "buttonTxtColor": "#ffffff",
            "secondaryButtonColor": "#B2BDD3",
            "secondaryButtonTextColor": "#FFFFFF",
            "txtColor": "#8091B6",
            "titleColor": "#1a202c",
            "logo": "https://example.com/logo.png",
            "rightImage": null,
            "rightImagePosition": "center center",
            "rightBackgroundColor": "white"
        },
        "projectFlows": "64a1b2c3d4e5f6789012346",
        "version": 2,
        "createdAt": "2023-07-01T10:00:00.000Z",
        "updatedAt": "2023-07-01T16:45:00.000Z"
    },
    "status": "completed"
}
```

  
  

```json
{
    "message": "Invalid project ID format",
    "code": "BadRequest",
    "status": 400,
    "timestamp": "2023-07-01T10:00:00.000Z"
}
```

  
  

```json
{
    "message": "Access forbidden",
    "code": "Forbidden",
    "status": 401,
    "timestamp": "2023-07-01T10:00:00.000Z"
}
```

o

```json
{
    "message": "Access forbidden",
    "code": "Forbidden",
    "status": 403,
    "timestamp": "2023-07-01T10:00:00.000Z"
}
```

  
  

```json
{
    "message": "Project not found",
    "code": "NotFound",
    "status": 404,
    "timestamp": "2023-07-01T10:00:00.000Z"
}
```

  
  

```json
{
    "message": "Country not supported. contact support to help you include your country to our list.",
    "code": "MissingParameter",
    "status": 409,
    "timestamp": "2023-07-01T10:00:00.000Z"
}
```

  
  

```json
{
    "message": "Project flow validation failed",
    "code": "UnprocessableEntity",
    "status": 422,
    "timestamp": "2023-07-01T10:00:00.000Z",
    "details": [
        {
            "field": "projectFlow.documents.verificationMethods",
            "message": "verificationMethods is required when documents step is not skipped"
        }
    ]
}
```
