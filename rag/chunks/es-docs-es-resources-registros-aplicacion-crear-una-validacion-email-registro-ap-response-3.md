---
id: "es-docs-es-resources-registros-aplicacion-crear-una-validacion-email-registro-ap-response-3"
title: "Crear una Validación de Email de Registro de Aplicación — Response"
sourcePath: "docs-es/resources/registros-aplicacion/crear-una-validacion-email-registro-aplicacion.mdx"
locale: "es"
category: "resources"
tags:
  - "email-validations"
  - "resources"
endpoint: "/v2/email-validations/app-registration"
sourceAnchor: "Response"
---

# Crear una Validación de Email de Registro de Aplicación
**API path(s):** /v2/email-validations/app-registration

## Response

```json
{
	"data": {
		"status": "sent",
		"validationMethod": "verificationCode",
		"extraParams": [],
		"type": "onboarding",
		"requires2FA": false,
		"deleted": false,
		"_id": "65c28d66c3abd708cc9b12e2",
		"email": "user@example.com",
		"project": "6266193db77ccc8322530c90",
		"projectFlow": "658ed28b02589f325134d7b78",
		"ipAddress": "4.246.194.90",
		"emailData": {
			"firstName": "John",
			"title": "Verifik Client App",
			"projectName": "Verifik Client App",
			"contactEmail": "support@verifik.co",
			"logo": "https://cdn.verifik.co/access/verifikprojectlogo.png",
			"authLink": "https://access.verifik.co/sign-up/6266193db77ccc8111730c90?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...&otp="
		},
		"otp": "$2a$10$MCdw130G.RbW4je9Uj2MvuSTzm7.raG23f0Zaasda0FKC1Gl98r0s4D1m",
		"expiresAt": "2024-02-06T19:59:58.000Z",
		"client": "613375a1eab2fe01237f81e2",
		"updatedAt": "2024-02-06T19:49:59.397Z",
		"createdAt": "2024-02-06T19:49:59.397Z",
		"__v": 0,
		"existing": false,
		"sent": true
	}
}
```

  
  

```json
{
	"message": "missing project\n. missing validationMethod\n. missing email\n. missing type",
	"code": "MissingParameter"
}
```

  
  

```json
{
	"message": "Invalid email format",
	"code": "MissingParameter"
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

  
  

```json
{
	"code": "security_not_set",
	"message": "404:security_not_set"
}
```

### Notes

-   **Vinculación de Registro de Aplicación**: Este endpoint vincula automáticamente la validación de email al registro de aplicación del usuario usando el `appRegistrationId` del token de autenticación.
-   **Carga de Créditos**: Cada solicitud de validación de email consume créditos de tu plan SmartEnroll (manejado automáticamente).
-   **Datos de Email Mejorados**: El sistema pobla automáticamente datos de email adicionales incluyendo el nombre de pila del usuario de su validación de información si está disponible.
-   **Generación de Enlace de Autenticación**: Para flujos de incorporación, el sistema genera un token JWT seguro y un enlace de autenticación para una experiencia de usuario fluida.
-   **Prevención de Duplicados**: Si ya existe una validación de email activa para el mismo email, flujo de proyecto y tipo, el sistema reenviará el OTP existente en lugar de crear uno nuevo.
-   **Características de Seguridad**: El sistema valida políticas de seguridad de email y requisitos de verificación de identidad basados en la configuración de tu flujo de proyecto.
-   **Formato de Email**: La dirección de email se convierte automáticamente a minúsculas y se eliminan los espacios en blanco.
