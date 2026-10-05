---
id: "es-docs-es-resources-registros-aplicacion-el-objeto-registro-aplicacion-overview"
title: "El Objeto Registro de Aplicación — Overview"
sourcePath: "docs-es/resources/registros-aplicacion/el-objeto-registro-aplicacion.mdx"
locale: "es"
category: "resources"
tags:
  - "resources"
sourceAnchor: "Overview"
---

# El Objeto Registro de Aplicación

## Overview

El objeto Registro de Aplicación representa los procesos de registro de usuarios dentro de tus proyectos Verifik. Este objeto contiene toda la información necesaria para rastrear y gestionar las solicitudes de registro de usuarios y sus procesos de validación asociados.

### Atributos

#### `client`
**Type:** string (reference id)  
**Required:** Yes

Cliente asociado con este registro.

#### `project`
**Type:** string (reference id)  
**Required:** Yes

Proyecto al que pertenece este registro.

#### `projectFlow`
**Type:** string (reference id)  
**Required:** Yes

Configuración de flujo específica para este registro.

#### `smartLink`
**Type:** String  
**Required:** No

Referencia a un **OneTimeLink** (`link.verifik.co`) cuando el registro se creó con ese producto. **No** es la URL de continuación de SmartEnroll hospedado. Para reanudar una sesión incompleta de `/sign-up/{projectId}`, llama [Reenviar enlace de registro de aplicación](/verifik-es/resources/registros-aplicacion/reenviar-enlace-registro-aplicacion).

#### `status`
**Type:** String  
**Required:** Yes

Estado actual del proceso de registro. Puede ser:
* `STARTED` - Solicitud de registro creada pero aún no procesada
* `ONGOING` - Registro en progreso
* `COMPLETED` - Registro completado exitosamente
* `COMPLETED_WITHOUT_KYC` - Registro completado sin verificación KYC
* `FAILED` - Registro fallido
* `NEEDS_MANUAL_VERIFICATION` - Registro requiere revisión manual
* `EXPIRED` - Sesión de registro expirada

#### `email`
**Type:** String  
**Required:** No

Dirección de correo electrónico del usuario a registrar. Se requiere `email` o `phone`.

#### `phone`
**Type:** String  
**Required:** No

Número de teléfono del usuario a registrar. Se requiere `email` o `phone`.

#### `countryCode`
**Type:** String  
**Required:** No

Código de país asociado con el número de teléfono. Requerido si se proporciona `phone`. Formato: `+123`

#### `fullName`
**Type:** String  
**Required:** No

Nombre completo de la persona que se está registrando. También se puede usar `firstName` y `lastName`.

#### `firstName`
**Type:** String  
**Required:** No

Nombre de pila de la persona que se está registrando.

#### `lastName`
**Type:** String  
**Required:** No

Apellido de la persona que se está registrando.

#### `language`
**Type:** String  
**Required:** No

Idioma preferido para la comunicación durante el proceso de registro. Por defecto: `"en"`

#### `currentStep`
**Type:** String  
**Required:** Yes

Paso actual en el proceso de registro.

#### `informationValidation`
**Type:** string (reference id)  
**Required:** No

Referencia al objeto de Validación de Información si se recopiló información básica.

#### `emailValidation`
**Type:** string (reference id)  
**Required:** No

Referencia al objeto de Validación de Correo Electrónico si se realizó validación de correo electrónico.

#### `phoneValidation`
**Type:** string (reference id)  
**Required:** No

Referencia al objeto de Validación de Teléfono si se realizó validación de teléfono.

#### `biometricValidation`
**Type:** string (reference id)  
**Required:** No

Referencia al objeto de Validación Biométrica si se realizó validación biométrica.

#### `documentValidation`
**Type:** string (reference id)  
**Required:** No

Referencia al objeto de Validación de Documento si se realizó validación de documento.

#### `person`
**Type:** string (reference id)  
**Required:** No

Referencia al objeto Person creado durante la validación biométrica.

#### `assignedCollection`
**Type:** string (reference id)  
**Required:** No

Referencia a la Colección asignada para almacenar datos biométricos.

#### `createdAt`
**Type:** Date  
**Required:** Yes

Marca de tiempo de cuándo se creó el registro de aplicación.

#### `updatedAt`
**Type:** Date  
**Required:** Yes

Marca de tiempo de cuándo se actualizó por última vez el registro de aplicación.
