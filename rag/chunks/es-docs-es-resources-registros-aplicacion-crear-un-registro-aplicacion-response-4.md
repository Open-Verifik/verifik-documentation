---
id: "es-docs-es-resources-registros-aplicacion-crear-un-registro-aplicacion-response-4"
title: "Crear un Registro de Aplicación — Response"
sourcePath: "docs-es/resources/registros-aplicacion/crear-un-registro-aplicacion.mdx"
locale: "es"
category: "resources"
tags:
  - "app-registrations"
  - "resources"
endpoint: "/v2/app-registrations"
sourceAnchor: "Response"
---

# Crear un Registro de Aplicación
**API path(s):** /v2/app-registrations

## Response

```json
{
	"data": {
		"appRegistration": {
			"_id": "674de8df21c72be3cc42b8a7",
			"client": "507f1f77bcf86cd799439013",
			"project": "507f1f77bcf86cd799439011",
			"projectFlow": "507f1f77bcf86cd799439015",
			"status": "STARTED",
			"email": "user@example.com",
			"phone": "1234567890",
			"countryCode": "+1",
			"currentStep": "1",
			"language": "en",
			"createdAt": "2024-12-02T17:05:36.788Z",
			"updatedAt": "2024-12-02T17:05:36.788Z"
		},
		"informationValidation": {
			"_id": "674de8df21c72be3cc42b8a8",
			"fullName": "John Doe",
			"firstName": "John",
			"lastName": "Doe"
		},
		"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
	}
}
```

  
  

```json
{
	"message": "Needs an email or a phone at least",
	"code": "MissingParameter",
	"status": 409
}
```

  
  

```json
{
	"message": "email domain not allowed",
	"code": "PreconditionFailed",
	"status": 409
}
```

  
  

```json
{
	"message": "missing countryCode",
	"code": "MissingParameter",
	"status": 409
}
```

### Notes

-   **Generación de Token**: Se devuelve un token JWT en la respuesta que debe usarse para solicitudes de validación posteriores (email, teléfono, documento, biométrica).
-   **Información de Contacto**: Se debe proporcionar `email` o `phone` (con `countryCode`). Ambos pueden proporcionarse.
-   **Campos de Nombre**: Puedes usar `fullName` o la combinación `firstName`/`lastName`.
-   **Formato de Teléfono**: Los números de teléfono deben contener solo dígitos (sin espacios, guiones u otros caracteres).
-   **Código de País**: Debe estar en formato `+XXX` donde X son dígitos (máximo 1-3 dígitos).
-   **Estado**: Los nuevos registros de aplicación comienzan con estado `STARTED`.
-   **Idioma**: Por defecto es `"en"` si no se proporciona.
-   **Reanudar una sesión incompleta**: Usa [Reenviar enlace de registro de aplicación](/verifik-es/resources/registros-aplicacion/reenviar-enlace-registro-aplicacion). No recrees el registro con los mismos datos de contacto.
