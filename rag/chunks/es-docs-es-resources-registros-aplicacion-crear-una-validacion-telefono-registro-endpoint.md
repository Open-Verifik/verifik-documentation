---
id: "es-docs-es-resources-registros-aplicacion-crear-una-validacion-telefono-registro-endpoint"
title: "Crear una Validación de Teléfono de Registro de Aplicación — Endpoint"
sourcePath: "docs-es/resources/registros-aplicacion/crear-una-validacion-telefono-registro-aplicacion.mdx"
locale: "es"
category: "resources"
tags:
  - "phone-validations"
  - "resources"
endpoint: "/v2/phone-validations/app-registration"
sourceAnchor: "Endpoint"
---

# Crear una Validación de Teléfono de Registro de Aplicación
**API path(s):** /v2/phone-validations/app-registration

## Endpoint

```
POST https://api.verifik.co/v2/phone-validations/app-registration
```

Una Validación de Teléfono es una instancia dentro del sistema de Verifik que te permite procesar y validar números telefónicos durante el proceso de registro de aplicación. Este proceso asegura la autenticidad de los números de teléfono de los usuarios y proporciona verificación segura mediante métodos de entrega por SMS o WhatsApp.

:::warning
El Token JWT que debes usar al crear `Validaciones de Teléfono de Registro de Aplicación` se proporciona desde el `Registro de Aplicación` en creación. Debes usar el token devuelto al crear un [Registro de Aplicación](/verifik-es/resources/registros-aplicacion/crear-un-registro-aplicacion) para autenticar esta solicitud.
:::

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |
