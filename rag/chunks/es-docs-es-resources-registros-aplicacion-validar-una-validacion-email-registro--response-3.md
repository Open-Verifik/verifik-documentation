---
id: "es-docs-es-resources-registros-aplicacion-validar-una-validacion-email-registro--response-3"
title: "Validar una Validación de Email de Registro de Aplicación — Response"
sourcePath: "docs-es/resources/registros-aplicacion/validar-una-validacion-email-registro-aplicacion.mdx"
locale: "es"
category: "resources"
tags:
  - "email-validations"
  - "resources"
endpoints:
  - "/v2/email-validations/${emailvalidationid}"
  - "/v2/email-validations/%s"
  - "/v2/email-validations/{email_validation_id}"
  - "/v2/email-validations/{id}"
sourceAnchor: "Response"
---

# Validar una Validación de Email de Registro de Aplicación
**API path(s):** /v2/email-validations/${emailvalidationid}, /v2/email-validations/%s, /v2/email-validations/{email_validation_id}, /v2/email-validations/{id}

## Response

```json
{
	"data": {
		"_id": "674de8df21c72be3cc42b8a7",
		"status": "validated",
		"email": "user@example.com",
		"type": "onboarding",
		"showFaceLivenessRecommendation": false
	}
}
```

  
  

```json
{
	"code": "otp_does_not_match",
	"message": "403:otp_does_not_match"
}
```

  
  

```json
{
	"code": "email_validation_not_found",
	"message": "404:email_validation_not_found"
}
```

  
  

```json
{
	"code": "MissingParameter",
	"message": "missing_email_and_otp"
}
```

  
  

```json
{
	"code": "emailValidation_has_expired",
	"message": "412:emailValidation_has_expired"
}
```

### Notes

-   **Flujo de Incorporación**: Este endpoint está específicamente diseñado para usuarios en el proceso de registro de aplicación, donde la validación de email es parte del viaje de incorporación.
-   **Expiración de OTP**: Los OTPs tienen una vida útil limitada (típicamente 10 minutos) y expirarán después del tiempo predefinido. Los OTPs expirados no pueden ser validados.
-   **Actualizaciones de Estado**: La validación exitosa actualiza automáticamente el estado de la validación de email a "validated" y puede activar pasos adicionales de incorporación.
-   **Eventos de Webhook**: Los eventos de validación activan notificaciones de webhook para seguimiento y propósitos de integración.
-   **Vinculación de Registro de Aplicación**: Cuando se valida a través de este endpoint, la validación de email se vincula automáticamente al registro de registro de aplicación del usuario.
-   **Formato de Email**: Las direcciones de email se convierten automáticamente a minúsculas y se eliminan los espacios durante el procesamiento.
-   **Modo Demo**: Si el proyecto está en modo demo, se pueden aceptar OTPs de demo especiales para propósitos de prueba.
