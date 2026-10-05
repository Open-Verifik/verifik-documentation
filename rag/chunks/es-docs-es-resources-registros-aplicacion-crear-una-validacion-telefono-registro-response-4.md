---
id: "es-docs-es-resources-registros-aplicacion-crear-una-validacion-telefono-registro-response-4"
title: "Crear una Validación de Teléfono de Registro de Aplicación — Response"
sourcePath: "docs-es/resources/registros-aplicacion/crear-una-validacion-telefono-registro-aplicacion.mdx"
locale: "es"
category: "resources"
tags:
  - "phone-validations"
  - "resources"
endpoint: "/v2/phone-validations/app-registration"
sourceAnchor: "Response"
---

# Crear una Validación de Teléfono de Registro de Aplicación
**API path(s):** /v2/phone-validations/app-registration

## Response

```json
{
	"data": {
		"client": "507f1f77bcf86cd799439013",
		"project": "507f1f77bcf86cd799439011",
		"projectFlow": "507f1f77bcf86cd799439015",
		"status": "sent",
		"countryCode": "+507",
		"phone": "62647737",
		"phoneGateway": "whatsapp",
		"otp": "$2a$10$/v55.1QmwlCdX6zD1jy51OF87POIDZzj30.UmTtp13pZv6uKm.a.m",
		"expiresAt": "2024-12-02T17:15:35.000Z",
		"phoneData": {},
		"type": "validation",
		"redirectUrl": "https://api.verifik.co",
		"requires2FA": false,
		"ipAddress": "172.17.0.1",
		"language": "en",
		"_id": "674de8df21c72be3cc42b8a7",
		"updatedAt": "2024-12-02T17:05:36.788Z",
		"createdAt": "2024-12-02T17:05:36.788Z",
		"__v": 0,
		"new": true
	}
}
```

  
  

```json
{
	"code": "MissingParameter",
	"message": "missing project\n. missing validationMethod\n. missing phone\n. missing countryCode\n. missing type"
}
```

  
  

```json
{
	"code": "MissingParameter",
	"message": "Invalid countryCode format. CountryCode should be in the format + followed by 1 to 3 digits."
}
```

  
  

```json
{
	"code": "project_not_found",
	"message": "404:project_not_found"
}
```

  
  

```json
{
	"code": "projectFlow_not_found",
	"message": "404:projectFlow_not_found"
}
```

### Notes

-   **Formato de Código de País**: El `countryCode` debe estar en formato `+XXX` donde X son dígitos (máximo 1-3 dígitos). Por ejemplo: `+1`, `+507`, `+52`.
-   **Número de Teléfono**: Los espacios en los números de teléfono se eliminan automáticamente durante el procesamiento.
-   **Seguridad OTP**: El OTP se encripta usando bcrypt antes del almacenamiento por seguridad.
-   **Puerta de Enlace por Defecto**: Las validaciones de teléfono usan por defecto el método de entrega WhatsApp basado en la configuración de tu flujo de proyecto.
-   **Vinculación Automática**: Cuando se crea a través del endpoint de registro de aplicación, la validación de teléfono se vincula automáticamente al registro de registro de aplicación del usuario.
-   **Carga de Créditos**: Este endpoint carga automáticamente créditos de tu plan SmartEnroll.
-   **Registro de Aplicación Requerido**: Este endpoint requiere una sesión de registro de aplicación activa. Debes usar el token devuelto al crear un Registro de Aplicación.
