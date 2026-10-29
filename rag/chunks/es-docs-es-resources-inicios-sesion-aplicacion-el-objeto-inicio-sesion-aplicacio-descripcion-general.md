---
id: "es-docs-es-resources-inicios-sesion-aplicacion-el-objeto-inicio-sesion-aplicacio-descripcion-general"
title: "El Objeto Inicio de Sesión de Aplicación — Descripción General"
sourcePath: "docs-es/resources/inicios-sesion-aplicacion/el-objeto-inicio-sesion-aplicacion.mdx"
locale: "es"
category: "resources"
tags:
  - "resources"
sourceAnchor: "Descripción General"
slug: "/resources/el-objeto-inicio-sesion-aplicacion"
url: "https://docs.verifik.co/verifik-es/resources/el-objeto-inicio-sesion-aplicacion"
---

# El Objeto Inicio de Sesión de Aplicación

## Descripción General

El objeto Inicio de Sesión de Aplicación representa sesiones de autenticación de usuarios en Verifik. Rastrea intentos de inicio de sesión y los vincula a métodos de validación específicos (correo electrónico, teléfono o biométrico).

### Atributos

#### `client`
**Tipo:** string (reference id)  
**Requerido:** Sí

ID del cliente asociado con esta solicitud de inicio de sesión.

#### `name`
**Tipo:** String  
**Requerido:** No

Nombre opcional para la sesión de inicio de sesión.

#### `status`
**Tipo:** String  
**Requerido:** No

Estado de la solicitud de inicio de sesión (por ejemplo, pendiente, completado, fallido).

#### `project`
**Tipo:** string (reference id)  
**Requerido:** Sí

ID del proyecto vinculado a esta solicitud de inicio de sesión.

#### `projectFlow`
**Tipo:** string (reference id)  
**Requerido:** Sí

ID del ProjectFlow que define la configuración de flujo para este inicio de sesión.

#### `type`
**Tipo:** String  
**Requerido:** Sí

Tipo de inicio de sesión que se está intentando. Debe ser uno de:
* `email`
* `phone`
* `faceLiveness`

#### `emailValidation`
**Tipo:** string (reference id)  
**Requerido:** No

Referencia al objeto EmailValidation si se utiliza un inicio de sesión basado en correo electrónico.

#### `phoneValidation`
**Tipo:** string (reference id)  
**Requerido:** No

Referencia al objeto PhoneValidation si se utiliza un inicio de sesión basado en teléfono.

#### `biometricValidation`
**Tipo:** string (reference id)  
**Requerido:** No

Referencia al objeto BiometricValidation si se utiliza un inicio de sesión biométrico.

#### `face`
**Tipo:** string (reference id)  
**Requerido:** No

Referencia al objeto IdentityImage, utilizado para reconocimiento facial o verificaciones de vida.

#### `accessControlLog`
**Tipo:** string (reference id)  
**Requerido:** No

Referencia al objeto AccessControlLog, utilizado para registrar acciones de control de acceso relacionadas con este inicio de sesión.
