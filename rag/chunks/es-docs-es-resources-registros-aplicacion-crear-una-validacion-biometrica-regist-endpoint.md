---
id: "es-docs-es-resources-registros-aplicacion-crear-una-validacion-biometrica-regist-endpoint"
title: "Crear una Validación Biométrica de Registro de Aplicación — Endpoint"
sourcePath: "docs-es/resources/registros-aplicacion/crear-una-validacion-biometrica-registro-aplicacion.mdx"
locale: "es"
category: "resources"
tags:
  - "biometric-validations"
  - "resources"
endpoint: "/v2/biometric-validations/app-registration"
sourceAnchor: "Endpoint"
---

# Crear una Validación Biométrica de Registro de Aplicación
**API path(s):** /v2/biometric-validations/app-registration

## Endpoint

```
POST https://api.verifik.co/v2/biometric-validations/app-registration
```

Una Validación Biométrica es una instancia dentro del sistema de Verifik que te permite procesar y validar identidades de usuarios a través de reconocimiento facial y detección de vida durante el proceso de incorporación. Este proceso asegura la autenticidad de los usuarios verificando sus características biométricas únicas a través de tecnología de seguridad avanzada. Este endpoint está específicamente diseñado para usuarios que están en medio de un flujo de registro de aplicación.

:::warning
El Token JWT que debes usar al crear `Validaciones Biométricas de Registro de Aplicación` se proporciona desde el `Registro de Aplicación` en creación. Debes usar el token devuelto al crear un [Registro de Aplicación](/verifik-es/resources/registros-aplicacion/crear-un-registro-aplicacion) para autenticar esta solicitud.
:::

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Params

| Name    | Type    | Required | Description                                                                                                                                                                                            |
| ------- | ------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `image` | string  | Yes      | Imagen facial codificada en Base64 que se usará para validación biométrica y detección de vida. La imagen debe estar en formato data URI (ej: `data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...`)      |
| `os`    | string  | Yes      | Sistema operativo del dispositivo. Valores válidos: `DESKTOP`, `IOS`, `ANDROID`                                                                                                                        |
| `force` | boolean | No       | Bandera opcional para forzar la creación incluso si ya existe una persona. Por defecto: `false`. Cuando se establece en `true`, esto sobrescribirá los registros de persona existentes si es necesario |
