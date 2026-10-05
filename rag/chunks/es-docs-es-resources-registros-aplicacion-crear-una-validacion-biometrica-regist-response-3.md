---
id: "es-docs-es-resources-registros-aplicacion-crear-una-validacion-biometrica-regist-response-3"
title: "Crear una Validación Biométrica de Registro de Aplicación — Response"
sourcePath: "docs-es/resources/registros-aplicacion/crear-una-validacion-biometrica-registro-aplicacion.mdx"
locale: "es"
category: "resources"
tags:
  - "biometric-validations"
  - "resources"
endpoint: "/v2/biometric-validations/app-registration"
sourceAnchor: "Response"
---

# Crear una Validación Biométrica de Registro de Aplicación
**API path(s):** /v2/biometric-validations/app-registration

## Response

```json
{
	"data": {
		"_id": "674de8df21c72be3cc42b8a7",
		"client": "507f1f77bcf86cd799439013",
		"project": "507f1f77bcf86cd799439011",
		"projectFlow": "507f1f77bcf86cd799439015",
		"status": "STARTED",
		"email": "user@example.com",
		"countryCode": "+1",
		"phone": "5551234567",
		"biometricValidation": "674de8df21c72be3cc42b8a8",
		"person": "674de8df21c72be3cc42b8a9",
		"informationValidation": "674de8df21c72be3cc42b8a10",
		"assignedCollection": "507f1f77bcf86cd799439016",
		"createdAt": "2024-12-02T17:05:36.788Z",
		"updatedAt": "2024-12-02T17:05:36.788Z"
	}
}
```

  
  

```json
{
	"code": "person_already_set",
	"message": "409:person_already_set"
}
```

  
  

```json
{
	"code": "liveness_failed",
	"message": "409:liveness_failed@0.45"
}
```

El mensaje incluye la puntuación de vida que falló el umbral.

  
  

```json
{
	"code": "appRegistration_not_found",
	"message": "404:appRegistration_not_found"
}
```

  
  

```json
{
	"code": "collection_not_set",
	"message": "409:collection_not_set"
}
```

### Notes

-   **Registro de Aplicación Requerido**: Este endpoint requiere una sesión de registro de aplicación activa con estado "STARTED" o "ONGOING".
-   **Detección de Vida**: La tecnología avanzada anti-spoofing asegura que la persona siendo verificada esté físicamente presente.
-   **Integración de Colección**: El proyecto debe tener una colección asignada para el almacenamiento de datos biométricos.
-   **Creación de Persona**: Un registro de persona se crea automáticamente y se vincula al registro de aplicación.
-   **Carga de Créditos**: Este endpoint carga automáticamente créditos de tu plan SmartEnroll.
-   **Procesamiento de Imágenes**: Las imágenes faciales se procesan tanto para coincidencia biométrica como para detección de vida.
-   **Bandera Force**: Usa la bandera force para sobrescribir registros de persona existentes si es necesario.
-   **Configuración de Vida**: El sistema usa configuraciones de vida por defecto del flujo de proyecto (puntuación mínima: 0.6, modo de búsqueda: ACCURATE, puntuación mínima de búsqueda: 0.9). Estas se pueden personalizar en la configuración de tu flujo de proyecto.
