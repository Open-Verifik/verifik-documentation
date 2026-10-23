---
id: "es-docs-es-resources-validaciones-telefono-el-objeto-validacion-telefono-descripcion"
title: "El Objeto de Validación de Teléfono — Descripción"
sourcePath: "docs-es/resources/validaciones-telefono/el-objeto-validacion-telefono.mdx"
locale: "es"
category: "resources"
tags:
  - "resources"
sourceAnchor: "Descripción"
slug: "/resources/validaciones-de-telefono/el-objeto-de-validaciones-de-telefono"
url: "https://docs.verifik.co/verifik-es/resources/validaciones-de-telefono/el-objeto-de-validaciones-de-telefono"
---

# El Objeto de Validación de Teléfono

## Descripción

El objeto Validación de Teléfono representa el proceso de verificación de números telefónicos dentro de tus proyectos de Verifik. Este objeto contiene toda la información necesaria para rastrear y gestionar solicitudes de verificación de teléfono.

### Atributos

#### `client`

**Tipo:** string (reference id)  
**Requerido:** Solo lectura

La cuenta de cliente a la que pertenece esta validación de teléfono. Se establece automáticamente en función de tu token de autenticación.

#### `project`

**Tipo:** string (reference id)  
**Requerido:** Opcional

El proyecto donde se realiza esta validación. Opcional para envíos **manuales / Smart Tools** (`POST /phone-validations/manual`).

#### `projectFlow`

**Tipo:** string (reference id)  
**Requerido:** Opcional

El flujo de proyecto. Requerido en la mayoría de flujos con proyecto; se omite en envíos manuales independientes.

#### `source`

**Tipo:** String  
**Requerido:** Opcional (por defecto `"flow"`)

Cómo se creó el OTP:

-   `"manual"` — Smart Tools / `POST /phone-validations/manual`
-   `"flow"` — Flujo de proyecto o app registration

#### `phoneGateway`

**Tipo:** String  
**Requerido:** Opcional

Canal de entrega: `"sms"`, `"whatsapp"` o `"none"`.

#### `phoneData`

**Tipo:** Object  
**Requerido:** Opcional

Metadatos de plantilla. `phoneData.title` es el nombre de empresa / sección en el mensaje (máx. 15 caracteres).

#### `status`

**Tipo:** String  
**Requerido:** Sí

El estado actual del proceso de validación de teléfono. Puede ser:

-   `"new"` - Solicitud de validación creada pero aún no procesada (predeterminado)
-   `"sent"` - Se ha enviado el código de verificación al usuario
-   `"validated"` - El teléfono ha sido verificado exitosamente
-   `"failed"` - La validación de teléfono falló o expiró

#### `countryCode`

**Tipo:** String  
**Requerido:** Sí

El código de marcación internacional del número telefónico (p. ej., "+1" para EE. UU., "+44" para Reino Unido, "+57" para Colombia).

#### `phone`

**Tipo:** String  
**Requerido:** Sí

El número de teléfono que se está validando (los espacios se eliminan automáticamente).

#### `type`

**Tipo:** String  
**Requerido:** Sí

El tipo de validación de teléfono que se está realizando:

-   `"validation"` - Validación general de número telefónico
-   `"login"` - Verificación de teléfono durante el inicio de sesión
-   `"onboarding"` - Verificación de teléfono durante el registro de usuario

#### `validationMethod`

**Tipo:** String  
**Requerido:** Sí

El método utilizado para la validación de teléfono:

-   `"verificationCode"` - Código OTP enviado por SMS
-   `"manual"` - Proceso de verificación manual

#### `verificationCode`

**Tipo:** String  
**Requerido:** Opcional

El código OTP generado para la verificación de teléfono (solo presente cuando `validationMethod` es `"verificationCode"`).

#### `expiresAt`

**Tipo:** Date  
**Requerido:** Opcional

La fecha y hora de expiración del código de validación. Por defecto es **10 minutos** después de enviar o reenviar el OTP. Úsala para mostrar una cuenta regresiva en tu UI; después de ese momento, la verificación falla con `phoneValidation_has_expired`.

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

Fecha y hora cuando se creó la validación de teléfono.

#### `updatedAt`

**Tipo:** Date  
**Requerido:** Sí

Fecha y hora de la última actualización de la validación de teléfono.

#### `validatedAt`

**Tipo:** Date  
**Requerido:** Opcional

Fecha y hora cuando la validación de teléfono se completó correctamente.
