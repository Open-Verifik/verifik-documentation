---
id: "es-docs-es-autenticacion-renovar-tu-token-jwt-respuesta-2"
title: "Renovar tu token (JWT) — Respuesta"
sourcePath: "docs-es/autenticacion/renovar-tu-token-jwt.mdx"
locale: "es"
category: "autenticacion"
tags:
  - "auth"
  - "autenticacion"
endpoints:
  - "/v2/auth/session"
  - "/v2/auth/session?origin=refresh&expiresin=120"
sourceAnchor: "Respuesta"
slug: "/autenticacion/renovar-tu-token-jwt"
url: "https://docs.verifik.co/verifik-es/autenticacion/renovar-tu-token-jwt"
---

# Renovar tu token (JWT)
**API path(s):** /v2/auth/session, /v2/auth/session?origin=refresh&expiresin=120

## Respuesta

```json
{
    "accessToken": "eyJhbGcpXVCJ9.eyJjbGllbnR...JZCIYiUzNjEaIWxYShWeBaRs",
    "tokenType": "bearer"
}
```

  
  

```json
{
    "code": "Unauthorized",
    "message": "Invalid or expired token.",
    "signature": {
        "dateTime": "August 31, 2022 3:24 PM",
        "message": "Certified by Verifik.co"
    }
}
```

  
  

```json
{
    "code": "MissingParameter",
    "message": "missing Authorization header"
}
```

### Características

-   **Renovación de Token**: Renueva los tokens de acceso para extender su periodo de validez
-   **Validez de 30 Días**: Los tokens extendidos permanecen válidos por 30 días
-   **Proceso Simple**: Solo requiere el token válido existente
-   **Respuesta Estructurada**: Formato de datos organizado para fácil integración
-   **Múltiples Lenguajes de Programación**: Soporte para JavaScript, Python, PHP y Swift
-   **Manejo de Errores**: Respuestas de error comprensivas para varios escenarios
