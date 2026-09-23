---
id: "es-docs-es-autenticacion-api-key-acceso-por-telefono-respuesta-4"
title: "Acceso con API Key vía Teléfono — Respuesta"
sourcePath: "docs-es/autenticacion/api-key-acceso-por-telefono.mdx"
locale: "es"
category: "autenticacion"
tags:
  - "projects"
  - "autenticacion"
endpoint: "/v2/projects/phone-login"
sourceAnchor: "Respuesta"
slug: "/autenticacion/acceso-con-llave-por-telefono"
url: "https://docs.verifik.co/verifik-es/autenticacion/acceso-con-llave-por-telefono"
---

# Acceso con API Key vía Teléfono
**API path(s):** /v2/projects/phone-login

## Respuesta

```json
{
    "data": {
        "accessToken": "eyJhbGcpXVCJ9.eyJjbGllbnR...JZCIYiUzNjEaIWxYShWeBaRs",
        "tokenType": "bearer"
    }
}
```

  
  

```json
{
    "code": "BadRequest",
    "message": "Código OTP inválido.",
    "signature": {
        "dateTime": "August 31, 2022 3:24 PM",
        "message": "Certified by Verifik.co"
    }
}
```

  
  

```json
{
    "code": "MissingParameter",
    "message": "missing countryCode\n. missing phone\n. missing otp\n"
}
```

### Características

-   **Autenticación por Teléfono**: Inicio de sesión usando número de teléfono con verificación OTP
-   **Generación OTP**: Contraseña de un solo uso segura enviada vía WhatsApp/SMS
-   **Generación de Token**: Token de acceso válido por 30 días tras autenticación exitosa
-   **Respuesta Estructurada**: Formato de datos organizado para fácil integración
-   **Múltiples Lenguajes de Programación**: Soporte para JavaScript, Python, PHP y Swift
-   **Manejo de Errores**: Respuestas de error comprensivas para varios escenarios

**Nota**: Un token generado por este medio será válido por 30 días desde la respuesta exitosa. Verifik no es responsable de la gestión del Access Token.
