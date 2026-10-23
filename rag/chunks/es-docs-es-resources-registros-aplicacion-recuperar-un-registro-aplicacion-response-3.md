---
id: "es-docs-es-resources-registros-aplicacion-recuperar-un-registro-aplicacion-response-3"
title: "Obtener Registro de Aplicación — Response"
sourcePath: "docs-es/resources/registros-aplicacion/recuperar-un-registro-aplicacion.mdx"
locale: "es"
category: "resources"
tags:
  - "app-registrations"
  - "resources"
endpoint: "/v2/app-registrations/{id}"
sourceAnchor: "Response"
---

# Obtener Registro de Aplicación
**API path(s):** /v2/app-registrations/{id}

## Response

```json
{
    "data": {
        "_id": "674de8df21c72be3cc42b8a7",
        "client": "507f1f77bcf86cd799439013",
        "project": {
            "_id": "507f1f77bcf86cd799439011",
            "name": "Example Project"
        },
        "projectFlow": {
            "_id": "507f1f77bcf86cd799439015",
            "type": "onboarding",
            "target": "personal"
        },
        "status": "ONGOING",
        "email": "user@example.com",
        "phone": "1234567890",
        "countryCode": "+1",
        "currentStep": "1",
        "language": "en",
        "emailValidation": {
            "_id": "674de8df21c72be3cc42b8a8",
            "email": "user@example.com",
            "status": "validated"
        },
        "phoneValidation": {
            "_id": "674de8df21c72be3cc42b8a9",
            "phone": "1234567890",
            "status": "validated"
        },
        "biometricValidation": null,
        "documentValidation": null,
        "informationValidation": {
            "_id": "674de8df21c72be3cc42b8a10",
            "fullName": "John Doe",
            "firstName": "John",
            "lastName": "Doe"
        },
        "createdAt": "2024-12-02T17:05:36.788Z",
        "updatedAt": "2024-12-02T17:05:36.788Z"
    }
}
```

  
  

```json
{
    "message": "Access forbidden",
    "code": "Forbidden"
}
```

  
  

```json
{
    "message": "AppRegistration_not_found",
    "code": "NotFound"
}
```

### Notes

-   **Populates**: Usa el parámetro de consulta `populates[]` para incluir objetos relacionados en la respuesta. Esto reduce la necesidad de llamadas API adicionales.
-   **Sin URL de continuación**: Esta respuesta no incluye un `link` de resume hospedado. Usa [Reenviar enlace de registro de aplicación](/verifik-es/resources/registros-aplicacion/reenviar-enlace-registro-aplicacion) cuando el usuario deba continuar SmartEnroll.
-   **Acceso con Token**: Cuando uses un token de registro de aplicación, puedes acceder a tu propio registro usando el endpoint `/me` o omitiendo el ID.
-   **Valores de Estado**: El estado puede ser `STARTED`, `ONGOING`, `COMPLETED`, `COMPLETED_WITHOUT_KYC`, `FAILED`, `NEEDS_MANUAL_VERIFICATION`, o `EXPIRED`.
-   **Objetos Relacionados**: Los objetos poblados incluyen detalles completos en lugar de solo referencias por id.
