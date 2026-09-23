---
id: "es-docs-es-resources-registros-aplicacion-reenviar-enlace-registro-aplicacion-response-3"
title: "Reenviar enlace de registro de aplicación — Response"
sourcePath: "docs-es/resources/registros-aplicacion/reenviar-enlace-registro-aplicacion.mdx"
locale: "es"
category: "resources"
tags:
  - "app-registrations"
  - "resources"
endpoints:
  - "/v2/app-registrations"
  - "/v2/app-registrations/${appregistrationid}/resend-link"
  - "/v2/app-registrations/%s/resend-link"
  - "/v2/app-registrations/{app_registration_id}/resend-link"
  - "/v2/app-registrations/{id}"
  - "/v2/app-registrations/{id}/resend-link"
sourceAnchor: "Response"
---

# Reenviar enlace de registro de aplicación
**API path(s):** /v2/app-registrations, /v2/app-registrations/${appregistrationid}/resend-link, /v2/app-registrations/%s/resend-link, /v2/app-registrations/{app_registration_id}/resend-link, /v2/app-registrations/{id}, /v2/app-registrations/{id}/resend-link

## Response

```json
{
	"data": {
		"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
		"link": "https://access.verifik.co/sign-up/6266193db77ccc8111730c90?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
		"firstName": "Robert",
		"lastName": "Sánchez",
		"fullName": "Robert Sánchez",
		"email": "robert_196@verifik.co",
		"step": "signUpForm",
		"steps": {
			"signUpForm": "mandatory",
			"basicInformation": "skip",
			"document": "optional",
			"liveness": "optional",
			"form": "skip"
		},
		"appRegistrationId": "6a98727a47eb5690a7f0b68f",
		"status": "ONGOING",
		"expiresAt": "2026-09-09 22:14:14",
		"accessType": "app_registration_initiated",
		"issuedAt": 1788990254,
		"emailSent": null
	}
}
```

Cuando `sendEmail` es `true` y el enrollee tiene email, `emailSent` se ve así:

```json
{
	"sent": true,
	"email": "robert_196@verifik.co",
	"mailgunId": ""
}
```

  
  

```json
{
	"code": "access_denied",
	"message": "403:access_denied"
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
	"code": "cannot_resend_link_for_this_status",
	"message": "409:cannot_resend_link_for_this_status"
}
```

Los tokens de cliente reciben este error cuando el estado es `COMPLETED`, `COMPLETED_WITHOUT_KYC` o `FAILED`. También se responde `409` con `MissingParameter` si `sendEmail` es true y no hay email del enrollee.

### Notes

-   **URL hospedada**: `data.link` es `{accessAppUrl}/sign-up/{projectId}?token={token}`. En producción el host es `https://access.verifik.co`.
-   **Reanudar, no recrear**: No vuelvas a llamar `POST /v2/app-registrations` con el mismo email o teléfono. Eso responde `409:email_is_registered_already` o `409:phone_is_registered_already`.
-   **Ventana del token de creación**: El JWT de create es válido **120 minutos**. Cuando caduca, genera un enlace nuevo aquí en lugar de reutilizar la URL original.
-   **No es una URL de resume**: [`GET /v2/app-registrations/{id}`](/verifik-es/resources/registros-aplicacion/recuperar-un-registro-aplicacion) y [`PUT /{id}/sync`](/verifik-es/resources/registros-aplicacion/sincronizar-estado-registro-aplicacion) no generan una URL de continuación hospedada. `smartLink` en el objeto App Registration es el producto OneTimeLink (`link.verifik.co`), no este flujo.
-   **Autorización**: Los tokens de sesión del enrollee no pueden llamar este endpoint. Usa el token de API del cliente dueño del proyecto.
