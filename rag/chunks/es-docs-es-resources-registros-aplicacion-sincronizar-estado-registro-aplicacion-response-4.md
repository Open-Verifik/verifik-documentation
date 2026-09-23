---
id: "es-docs-es-resources-registros-aplicacion-sincronizar-estado-registro-aplicacion-response-4"
title: "Sincronizar Estado de Registro de Aplicación — Response"
sourcePath: "docs-es/resources/registros-aplicacion/sincronizar-estado-registro-aplicacion.mdx"
locale: "es"
category: "resources"
tags:
  - "app-registrations"
  - "resources"
endpoints:
  - "/v2/app-registrations/${appregistrationid}/sync"
  - "/v2/app-registrations/%s/sync"
  - "/v2/app-registrations/{app_registration_id}/sync"
  - "/v2/app-registrations/{id}/sync"
sourceAnchor: "Response"
---

# Sincronizar Estado de Registro de Aplicación
**API path(s):** /v2/app-registrations/${appregistrationid}/sync, /v2/app-registrations/%s/sync, /v2/app-registrations/{app_registration_id}/sync, /v2/app-registrations/{id}/sync

## Response

```json
{
	"data": {
		"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
		"firstName": "John",
		"lastName": "Doe",
		"fullName": "John Doe",
		"step": "signUpForm",
		"steps": {
			"signUpForm": "mandatory",
			"basicInformation": "skip",
			"document": "mandatory",
			"liveness": "mandatory",
			"form": "skip"
		},
		"appRegistrationId": "507f1f77bcf86cd799439011",
		"status": "ONGOING"
	}
}
```

  
  

```json
{
	"code": "Conflict",
	"message": "signUpForm_validation_not_passed"
}
```

  
  

```json
{
	"code": "AppRegistration_not_found",
	"message": "404:AppRegistration_not_found"
}
```

  
  

```json
{
	"code": "step_not_supported",
	"message": "500:step_not_supported"
}
```

### Notes

-   **No es una URL de resume hospedada**: Este endpoint actualiza paso y estado **dentro** de una sesión activa. No genera `https://access.verifik.co/sign-up/{projectId}?token=...`. Para devolver al usuario a SmartEnroll hospedado, usa [Reenviar enlace de registro de aplicación](/verifik-es/resources/registros-aplicacion/reenviar-enlace-registro-aplicacion).
-   **Generación de Token**: El paso `end` es el único paso que garantiza la generación de token para autenticación de usuario
-   **Requisitos de Validación**: Cada paso puede tener requisitos de validación específicos que deben cumplirse
-   **Lógica de Omitir KYC**: Omitir KYC solo funciona si no se configuran pasos de verificación obligatorios
-   **Integración de Webhook**: Todos los cambios de estado activan eventos de webhook si están configurados en el flujo de proyecto
-   **Control de Flujo de Estado**:
    -   `ONGOING` - Continúa el proceso de registro al siguiente paso
    -   `COMPLETED` - Finaliza el registro y proporciona acceso completo
    -   `FAILED` - Marca el registro como fallido pero aún proporciona token de acceso
    -   `NEEDS_MANUAL_VERIFICATION` - Requiere revisión humana antes de la finalización
