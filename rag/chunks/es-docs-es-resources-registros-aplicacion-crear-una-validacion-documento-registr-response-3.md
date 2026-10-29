---
id: "es-docs-es-resources-registros-aplicacion-crear-una-validacion-documento-registr-response-3"
title: "Crear una Validación de Documento de Registro de Aplicación — Response"
sourcePath: "docs-es/resources/registros-aplicacion/crear-una-validacion-documento-registro-aplicacion.mdx"
locale: "es"
category: "resources"
tags:
  - "document-validations"
  - "resources"
endpoint: "/v2/document-validations/app-registration"
sourceAnchor: "Response"
---

# Crear una Validación de Documento de Registro de Aplicación
**API path(s):** /v2/document-validations/app-registration

## Response

```json
{
	"data": {
		"documentValidation": {
			"_id": "507f1f77bcf86cd799439011",
			"appRegistration": "507f1f77bcf86cd799439012",
			"client": "507f1f77bcf86cd799439013",
			"project": "507f1f77bcf86cd799439014",
			"projectFlow": "507f1f77bcf86cd799439015",
			"documentType": "Passport",
			"documentCategory": "ID",
			"status": "ASSESSING",
			"validationMethod": "OCR",
			"inputMethod": "FILE_UPLOAD",
			"imageValidated": false,
			"namesMatch": false,
			"fullNameMatchPercentage": 0,
			"firstNameMatchPercentage": 0,
			"lastNameMatchPercentage": 0,
			"type": "validation",
			"createdAt": "2025-01-01T00:00:00.000Z",
			"updatedAt": "2025-01-01T00:00:00.000Z"
		}
	}
}
```

  
  

```json
{
	"code": "MissingParameter",
	"message": "missing image"
}
```

  
  

```json
{
	"code": "MissingParameter",
	"message": "Either image or backImage must be provided"
}
```

  
  

```json
{
	"code": "already_exists",
	"message": "409:already_exists"
}
```

Este error ocurre cuando ya existe una validación de documento para el registro de aplicación y el parámetro `force` no está establecido en `true`.

  
  

```json
{
	"code": "appRegistration_not_found",
	"message": "404:appRegistration_not_found"
}
```

  
  

```json
{
	"code": "document_settings_not_set",
	"message": "404:document_settings_not_set"
}
```

### Notes

-   **Registro de Aplicación Requerido**: Este endpoint requiere una sesión de registro de aplicación activa. Debes usar el token devuelto al crear un Registro de Aplicación.
-   **Al Menos Una Imagen Requerida**: Se debe proporcionar `image` o `backImage` (o ambos) en la solicitud.
-   **Procesamiento de Documentos**: Los documentos se procesan usando OCR (Reconocimiento Óptico de Caracteres) para extraer y validar información.
-   **Valores de Estado**: El estado de validación del documento puede ser `ASSESSING`, `VALIDATED`, `FAILED`, u otros valores de estado dependiendo del proceso de validación.
-   **Carga de Créditos**: Este endpoint carga automáticamente créditos de tu plan SmartEnroll.
-   **Bandera Force**: Usa el parámetro `force` para sobrescribir validaciones de documento existentes si es necesario.
