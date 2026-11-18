---
id: "es-docs-es-resources-inicios-sesion-aplicacion-crear-una-validacion-biometrica-i-respuesta-3"
title: "Crear una Validación Biométrica de Inicio de Sesión de Aplicación — Respuesta"
sourcePath: "docs-es/resources/inicios-sesion-aplicacion/crear-una-validacion-biometrica-inicio-sesion-aplicacion.mdx"
locale: "es"
category: "resources"
tags:
  - "biometric-validations"
  - "resources"
endpoint: "/v2/biometric-validations/app-login"
sourceAnchor: "Respuesta"
slug: "/resources/crear-una-validacion-biometrica-inicio-sesion-aplicacion"
url: "https://docs.verifik.co/verifik-es/resources/crear-una-validacion-biometrica-inicio-sesion-aplicacion"
---

# Crear una Validación Biométrica de Inicio de Sesión de Aplicación
**API path(s):** /v2/biometric-validations/app-login

## Respuesta

```json
{
	"data": {
		"livenessSession": {
			"_id": "674de8df21c72be3cc42b8a7",
			"identifier": "user@example.com",
			"client": "507f1f77bcf86cd799439013",
			"project": "507f1f77bcf86cd799439011",
			"projectFlow": "507f1f77bcf86cd799439015",
			"status": "active",
			"expiresAt": "2024-12-02T17:15:35.000Z",
			"createdAt": "2024-12-02T17:05:36.788Z",
			"updatedAt": "2024-12-02T17:05:36.788Z"
		},
		"biometricValidation": {
			"_id": "674de8df21c72be3cc42b8a8",
			"client": "507f1f77bcf86cd799439013",
			"project": "507f1f77bcf86cd799439011",
			"projectFlow": "507f1f77bcf86cd799439015",
			"status": "new",
			"livenessSession": "674de8df21c72be3cc42b8a7",
			"type": "login",
			"url": "https://access.verifik.co/sign-in/507f1f77bcf86cd799439011?type=liveness",
			"assignedCollection": "507f1f77bcf86cd799439016",
			"collectionCode": "col_12345",
			"redirectUrl": null,
			"webhook": null,
			"requires2FA": false,
			"createdAt": "2024-12-02T17:05:36.788Z",
			"updatedAt": "2024-12-02T17:05:36.788Z"
		},
		"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
	}
}
```

	
	

```json
{
	"code": "token_not_right",
	"message": "403:token_not_right"
}
```

	
	

```json
{
	"code": "MissingParameter",
	"message": "falta proyecto"
}
```

	
	

```json
{
	"code": "Project_not_found_or_featured_disabled",
	"message": "404:Project_not_found_or_featured_disabled"
}
```

### Características

- **Validación Específica para Inicio de Sesión**: Diseñada específicamente para flujos de validación biométrica de inicio de sesión de aplicación
- **Detección de Vida**: Reconocimiento facial avanzado con tecnología anti-suplantación
- **Sesiones Seguras**: Creación automática de sesiones de vida seguras con expiración
- **Múltiples Lenguajes de Programación**: Soporte para JavaScript, Python, PHP y Swift
- **Integración de Correo Electrónico**: Notificaciones por correo electrónico opcionales con enlaces de validación
- **Soporte de Webhook**: Notificaciones en tiempo real para eventos de validación
- **Plantillas Multi-idioma**: Soporte para plantillas de correo electrónico en inglés y español
- **Características de Seguridad**: Seguimiento de dirección IP y soporte para 2FA
