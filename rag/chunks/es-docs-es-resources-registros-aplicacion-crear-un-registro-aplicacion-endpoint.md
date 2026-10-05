---
id: "es-docs-es-resources-registros-aplicacion-crear-un-registro-aplicacion-endpoint"
title: "Crear un Registro de Aplicación — Endpoint"
sourcePath: "docs-es/resources/registros-aplicacion/crear-un-registro-aplicacion.mdx"
locale: "es"
category: "resources"
tags:
  - "app-registrations"
  - "resources"
endpoint: "/v2/app-registrations"
sourceAnchor: "Endpoint"
---

# Crear un Registro de Aplicación
**API path(s):** /v2/app-registrations

## Endpoint

```
POST https://api.verifik.co/v2/app-registrations
```

Un Registro de Aplicación es una instancia dentro del sistema de Verifik que permite a un usuario iniciar el proceso de autenticación y validación utilizando flujos de proyecto específicos, detalles de correo electrónico y/o teléfono. Este proceso asegura la identidad del usuario y proporciona validación segura a través de varios pasos de verificación.

:::warning
Al crear un Registro de Aplicación, se devuelve un `token` en la solicitud. Debes usar este token para crear [validaciones de documentos](/verifik-es/resources/registros-aplicacion/crear-una-validacion-documento-registro-aplicacion), [validaciones de correo electrónico](/verifik-es/resources/registros-aplicacion/crear-una-validacion-email-registro-aplicacion), [validaciones de teléfono](/verifik-es/resources/registros-aplicacion/crear-una-validacion-telefono-registro-aplicacion) y [validaciones biométricas](/verifik-es/resources/registros-aplicacion/crear-una-validacion-biometrica-registro-aplicacion) **para Registros de Aplicación**. Esto asegura que las validaciones estén relacionadas con el registrante de la aplicación.

El token de creación es válido **120 minutos**. **No** vuelvas a llamar este endpoint con el mismo `email` o `phone` para "refrescar" la sesión: responde `409:email_is_registered_already` o `409:phone_is_registered_already`. Para reanudar un enrollment hospedado incompleto, llama [Reenviar enlace de registro de aplicación](/verifik-es/resources/registros-aplicacion/reenviar-enlace-registro-aplicacion) y redirige al usuario a `data.link`. Guía: [Reanudar un enrollment incompleto](/verifik-es/smartenroll/reanudar).
:::
