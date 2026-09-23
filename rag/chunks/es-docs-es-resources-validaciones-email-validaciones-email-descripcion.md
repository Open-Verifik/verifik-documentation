---
id: "es-docs-es-resources-validaciones-email-validaciones-email-descripcion"
title: "Validaciones de Email — Descripción"
sourcePath: "docs-es/resources/validaciones-email/validaciones-email.mdx"
locale: "es"
category: "resources"
tags:
  - "email-validations"
  - "resources"
endpoint: "/v2/email-validations"
sourceAnchor: "Descripción"
slug: "/resources/validaciones-email"
url: "https://docs.verifik.co/verifik-es/resources/validaciones-email"
---

# Validaciones de Email
**API path(s):** /v2/email-validations

## Descripción

Las Validaciones de Email son el sistema central de verificación dentro de Verifik que procesa y valida direcciones de email de los usuarios durante los procesos de autenticación y registro. Piénsalas como el punto de control de seguridad que asegura que los usuarios son quienes dicen ser verificando la titularidad del email mediante códigos de verificación seguros.

### Cómo funcionan las Validaciones de Email

Cada Validación de Email representa una sesión única de verificación que procesa direcciones de email proporcionadas por el usuario. Cuando alguien ingresa su email durante el registro, inicio de sesión o verificación de cuenta, Verifik crea una Validación de Email para enviar un código de verificación seguro y confirmar la titularidad del email del usuario.

Actualmente, las Validaciones de Email admiten estos tipos:

-   **validation** - Proceso estándar de verificación de email
-   **login** - Verificación de email para autenticación de usuarios
-   **onboarding** - Verificación de email para registro de nuevos usuarios
-   **oneTimeLink** - Verificación mediante enlace de acceso de un solo uso

### Qué registran las Validaciones de Email

Las Validaciones de Email son sistemas de verificación integrales que procesan todos los aspectos de la verificación por email:

#### Información del email

-   Dirección de email y verificación de titularidad
-   Nombre del usuario y datos de contacto
-   Asociación con proyecto y cliente
-   Método de verificación y configuraciones de seguridad

#### Proceso de verificación

-   Generación y envío de contraseñas de un solo uso (OTP)
-   Estado de envío de email y confirmación de entrega
-   Validación de código e intentos de verificación
-   Gestión de expiración y seguridad

#### Funciones de seguridad

-   Limitación de tasa y prevención de abuso
-   Generación y validación segura de códigos
-   Seguimiento de entrega y confirmación
-   Detección y prevención de fraude
