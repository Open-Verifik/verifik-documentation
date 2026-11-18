---
id: "es-docs-es-recursos-validaciones-biometricas-crear-validacion-biometrica-endpoint"
title: "Crear una Validación Biométrica — Endpoint"
sourcePath: "docs-es/recursos/validaciones-biometricas/crear-validacion-biometrica.mdx"
locale: "es"
category: "recursos"
tags:
  - "biometric-validations"
  - "recursos"
endpoint: "/v2/biometric-validations"
sourceAnchor: "Endpoint"
slug: "/recursos/validaciones-biometricas/crear-validacion-biometrica"
url: "https://docs.verifik.co/verifik-es/recursos/validaciones-biometricas/crear-validacion-biometrica"
---

# Crear una Validación Biométrica
**API path(s):** /v2/biometric-validations

## Endpoint

**POST** `https://api.verifik.co/v2/biometric-validations`

Una Validación Biométrica es una instancia dentro del sistema de Verifik que te permite procesar y validar identidades de usuarios a través de reconocimiento facial y detección de vida. Este proceso asegura la autenticidad de los usuarios verificando sus características biométricas únicas mediante tecnología de seguridad avanzada.

### Encabezados

#### Content-Type
Tipo: String  
Requerido: Sí

`application/json`

#### Authorization
Tipo: String  
Requerido: Sí

`Bearer {YOUR_ACCESS_TOKEN}`

### Parámetros

#### `project`
Tipo: String  
Requerido: Sí

Identificador único del proyecto donde se utilizará esta validación biométrica.

#### `projectFlow`
Tipo: String  
Requerido: Sí

Identificador único de la configuración del flujo de proyecto.

#### `identifier`
Tipo: String  
Requerido: Sí

Identificador único para el usuario o sesión (ej. email, teléfono, o ID personalizado).

#### `type`
Tipo: String  
Requerido: Sí

Tipo de validación: `validation`, `login`, `onboarding`, o `oneTimeLink`.

#### `expiresAt`
Tipo: String  
Requerido: No

Fecha de expiración opcional para la sesión de validación.

#### `redirectUrl`
Tipo: String  
Requerido: No

URL opcional para redirección después de la validación.

#### `webhookUrl`
Tipo: String  
Requerido: No

URL de webhook opcional para notificaciones de validación.

#### `requires2FA`
Tipo: Boolean  
Requerido: No

Indicador opcional si se requiere autenticación de dos factores.

#### `ipAddress`
Tipo: String  
Requerido: No

Dirección IP opcional del usuario.

#### `sendViaEmail`
Tipo: Boolean  
Requerido: No

Indicador opcional para enviar enlace de validación por correo electrónico.

#### `email`
Tipo: String  
Requerido: No

Dirección de correo electrónico a la cual enviar el enlace de validación (requerido si sendViaEmail es true).

#### `language`
Tipo: String  
Requerido: No

Idioma para plantillas de correo electrónico (en/es). Por defecto "en".
