---
id: "es-docs-es-resources-inicios-sesion-aplicacion-ejemplo-acceso-por-email-resumen-del-flujo-completo-4"
title: "Ejemplo de Acceso por Email — Resumen del Flujo Completo"
sourcePath: "docs-es/resources/inicios-sesion-aplicacion/ejemplo-acceso-por-email.mdx"
locale: "es"
category: "resources"
tags:
  - "app-logins"
  - "email-validations"
  - "resources"
endpoints:
  - "/v2/app-logins/app_login_id"
  - "/v2/app-logins/app_login_id?populates[]=emailvalidation"
  - "/v2/app-logins/{apploginid}"
  - "/v2/email-validations"
  - "/v2/email-validations/validate"
sourceAnchor: "Resumen del Flujo Completo"
slug: "/resources/ejemplo-acceso-por-email"
url: "https://docs.verifik.co/verifik-es/resources/ejemplo-acceso-por-email"
---

# Ejemplo de Acceso por Email
**API path(s):** /v2/app-logins/app_login_id, /v2/app-logins/app_login_id?populates[]=emailvalidation, /v2/app-logins/{apploginid}, /v2/email-validations, /v2/email-validations/validate

## Resumen del Flujo Completo

1. **El usuario inicia sesión** con su dirección de correo electrónico
2. **El sistema crea validación de correo electrónico** y envía OTP al correo electrónico del usuario
3. **El usuario recibe OTP** por correo electrónico
4. **El usuario ingresa OTP** en tu aplicación
5. **El sistema valida OTP** y crea registro de AppLogin
6. **El sistema recupera objeto AppLogin** con detalles completos de validación
7. **El usuario obtiene acceso** con token de autenticación y datos completos de inicio de sesión

## Documentación Relacionada

- [Crear una Validación de Correo Electrónico](/verifik-es/resources/crear-una-validacion-email)
- [Validar una Validación de Correo Electrónico](/verifik-es/resources/validar-una-validacion-email)
- [Recuperar un Inicio de Sesión de Aplicación](/verifik-es/resources/recuperar-un-inicio-sesion-aplicacion)
- [Crear un Inicio de Sesión de Aplicación](/verifik-es/resources/app-logins/create-an-app-login-crear-inicio-de-sesion-en-la-app)

## Tutorial en Video

### Características

- **Autenticación Basada en Correo Electrónico**: Inicio de sesión seguro mediante verificación OTP por correo electrónico
- **Creación Automática de AppLogin**: Los registros de AppLogin se crean automáticamente tras una validación exitosa
- **OTP con Límite de Tiempo**: Los códigos OTP expiran por seguridad
- **Múltiples Lenguajes de Programación**: Soporte para JavaScript, Python, PHP y Swift
- **Integración Completa**: Tutorial de principio a fin para flujos de autenticación por correo electrónico
- **Acceso Basado en Token**: Tokens de autenticación seguros para acceso a la aplicación
