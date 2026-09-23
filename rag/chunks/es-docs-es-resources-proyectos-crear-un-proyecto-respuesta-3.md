---
id: "es-docs-es-resources-proyectos-crear-un-proyecto-respuesta-3"
title: "Crear un proyecto — Respuesta"
sourcePath: "docs-es/resources/proyectos/crear-un-proyecto.mdx"
locale: "es"
category: "resources"
tags:
  - "resources"
endpoint: "/v3/projects"
sourceAnchor: "Respuesta"
slug: "/resources/proyectos/crear-un-proyecto"
url: "https://docs.verifik.co/verifik-es/resources/proyectos/crear-un-proyecto"
---

# Crear un proyecto
**API path(s):** /v3/projects

## Respuesta

```json
{
		"data": {
				"_id": "64a1b2c3d4e5f6789012345",
				"name": "My KYC Project",
				"identifier": null,
				"contactEmail": "admin@example.com",
				"privacyUrl": "https://example.com/privacy",
				"termsAndConditionsUrl": "https://example.com/terms",
				"status": "draft",
				"currentStep": 0,
				"lastStep": 0,
				"demoMode": false,
				"demoOTP": null,
				"allowedCountries": ["United States", "Canada"],
				"dataProtection": {
						"name": "John Doe",
						"email": "dpo@example.com",
						"address": "123 Main St",
						"address2": "",
						"city": "New York",
						"country": "United States",
						"postalCode": "10001"
				},
				"branding": {
						"bgColor": "#01236D",
						"tabColor": "#01236D",
						"borderColor": "#B2BDD3",
						"buttonColor": "#B2BDD3",
						"buttonTxtColor": "#FFFFFF",
						"secondaryButtonColor": "#B2BDD3",
						"secondaryButtonTextColor": "#FFFFFF",
						"txtColor": "#8091B6",
						"titleColor": "#000000",
						"logo": null,
						"rightImage": null,
						"rightImagePosition": "center center",
						"rightBackgroundColor": "white"
				},
				"projectFlows": "64a1b2c3d4e5f6789012346",
				"version": 2,
				"createdAt": "2023-07-01T10:00:00.000Z",
				"updatedAt": "2023-07-01T10:00:00.000Z"
		}
}
```

	
	

```json
{
		"message": "Invalid request body",
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
