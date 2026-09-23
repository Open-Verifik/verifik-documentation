---
id: "es-docs-es-resources-registros-aplicacion-validar-una-validacion-telefono-regist-response-3"
title: "Validar una Validación de Teléfono de Registro de Aplicación — Response"
sourcePath: "docs-es/resources/registros-aplicacion/validar-una-validacion-telefono-registro-aplicacion.mdx"
locale: "es"
category: "resources"
tags:
  - "phone-validations"
  - "resources"
endpoint: "/v2/phone-validations"
sourceAnchor: "Response"
---

# Validar una Validación de Teléfono de Registro de Aplicación
**API path(s):** /v2/phone-validations

## Response

```json
{
	"data": {
		"_id": "674de8df21c72be3cc42b8a7",
		"status": "validated",
		"countryCode": "+507",
		"phone": "62647737",
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
	"code": "phone_validation_not_found",
	"message": "404:phone_validation_not_found"
}
```

  
  

```json
{
	"code": "MissingParameter",
	"message": "missing phone\n. missing countryCode\n. missing otp"
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
	"code": "phoneValidation_has_expired",
	"message": "412:phoneValidation_has_expired"
}
```

### Notes

-   **Flujo de Incorporación**: Este endpoint está específicamente diseñado para usuarios en el proceso de registro de aplicación, donde la validación de teléfono es parte del viaje de incorporación.
-   **Expiración de OTP**: Los OTPs tienen una vida útil limitada (típicamente 10 minutos) y expirarán después del tiempo predefinido. Los OTPs expirados no pueden ser validados.
-   **Actualizaciones de Estado**: La validación exitosa actualiza automáticamente el estado de la validación de teléfono a "validated" y puede activar pasos adicionales de incorporación.
-   **Eventos de Webhook**: Los eventos de validación activan notificaciones de webhook para seguimiento y propósitos de integración.
-   **Vida Facial**: Algunos flujos de proyecto pueden recomendar verificación de vida facial después de la validación de teléfono como parte del proceso de incorporación.
-   **Vinculación de Registro de Aplicación**: Cuando se valida a través de este endpoint, la validación de teléfono se vincula automáticamente al registro de registro de aplicación del usuario.
-   **Formato de Número de Teléfono**: Los números de teléfono tienen espacios eliminados automáticamente durante el procesamiento.
-   **Formato de Código de País**: El código de país debe estar en formato `+XXX` donde X son dígitos (máximo 1-3 dígitos).
