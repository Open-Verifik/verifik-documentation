---
id: "es-docs-es-resources-validaciones-email-el-objeto-validacion-email-descripcion"
title: "El Objeto de Validación de Email — Descripción"
sourcePath: "docs-es/resources/validaciones-email/el-objeto-validacion-email.mdx"
locale: "es"
category: "resources"
tags:
  - "resources"
sourceAnchor: "Descripción"
slug: "/resources/el-objeto-validacion-email"
url: "https://docs.verifik.co/verifik-es/resources/el-objeto-validacion-email"
---

# El Objeto de Validación de Email

## Descripción

El objeto Validación de Email representa el proceso de verificación de direcciones de email dentro de tus proyectos de Verifik. Este objeto contiene toda la información necesaria para rastrear y gestionar solicitudes de validación de email.

### Atributos

#### `client`

**Tipo:** string (reference id)  
**Requerido:** Opcional

La cuenta de cliente a la que pertenece esta validación de email. Se establece automáticamente en función de tu token de autenticación.

#### `project`

**Tipo:** string (reference id)  
**Requerido:** Opcional

El proyecto donde se realiza esta validación de email. Es el `_id` generado al crear un proyecto.

#### `projectFlow`

**Tipo:** string (reference id)  
**Requerido:** Sí

El flujo de proyecto donde se realiza esta validación de email. Es el `_id` generado al crear un flujo de proyecto.

#### `status`

**Tipo:** String  
**Requerido:** Sí

El estado actual del proceso de validación de email. Puede ser:

-   `"new"` - Solicitud de validación creada pero aún no procesada (predeterminado)
-   `"sent"` - Se ha enviado el email de verificación al usuario
-   `"validated"` - La validación de email se completó correctamente
-   `"expired"` - El código de validación ha expirado
-   `"failed"` - La validación falló o fue rechazada

#### `email`

**Tipo:** String  
**Requerido:** Sí

La dirección de email que se está validando. Los espacios se eliminan automáticamente y se convierte a minúsculas.

#### `type`

**Tipo:** String  
**Requerido:** Sí

El tipo de validación de email que se está realizando:

-   `"validation"` - Verificación de email estándar
-   `"login"` - Verificación de email para inicio de sesión
-   `"onboarding"` - Verificación de email para registro de nuevo usuario
-   `"oneTimeLink"` - Verificación mediante enlace de acceso de un solo uso

#### `validationMethod`

**Tipo:** String  
**Requerido:** Sí

El método utilizado para la validación de email:

-   `"verificationCode"` - Código OTP enviado por email
-   `"oneTimeLink"` - Enlace de un solo uso enviado por email

#### `verificationCode`

**Tipo:** String  
**Requerido:** Opcional

El código OTP generado para la verificación de email (solo presente cuando `validationMethod` es `"verificationCode"`).

#### `expiresAt`

**Tipo:** Date  
**Requerido:** Opcional

La fecha y hora de expiración del código de validación.

#### `redirectUrl`

**Tipo:** String  
**Requerido:** Opcional

URL a la que redirigir después de una validación exitosa.

#### `webhookUrl`

**Tipo:** String  
**Requerido:** Opcional

URL de webhook para notificaciones del estado de la validación.

#### `identityUrl`

**Tipo:** String  
**Requerido:** Opcional

URL de verificación de identidad para pasos de verificación adicionales.

#### `requires2FA`

**Tipo:** Boolean  
**Requerido:** Opcional

Indicador que señala si se requiere autenticación de dos factores.

#### `ipAddress`

**Tipo:** String  
**Requerido:** Opcional

Dirección IP del usuario que realiza la validación.

#### `attempts`

**Tipo:** Number  
**Requerido:** Opcional

Número de intentos de validación realizados.

#### `maxAttempts`

**Tipo:** Number  
**Requerido:** Opcional

Número máximo de intentos de validación permitidos.

#### `createdAt`

**Tipo:** Date  
**Requerido:** Sí

Fecha y hora cuando se creó la validación de email.

#### `updatedAt`

**Tipo:** Date  
**Requerido:** Sí

Fecha y hora de la última actualización de la validación de email.

#### `validatedAt`

**Tipo:** Date  
**Requerido:** Opcional

Fecha y hora cuando la validación de email se completó correctamente.
