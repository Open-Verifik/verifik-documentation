---
id: "es-docs-es-resources-registros-aplicacion-crear-una-validacion-documento-registr-endpoint"
title: "Crear una Validación de Documento de Registro de Aplicación — Endpoint"
sourcePath: "docs-es/resources/registros-aplicacion/crear-una-validacion-documento-registro-aplicacion.mdx"
locale: "es"
category: "resources"
tags:
  - "document-validations"
  - "resources"
endpoint: "/v2/document-validations/app-registration"
sourceAnchor: "Endpoint"
---

# Crear una Validación de Documento de Registro de Aplicación
**API path(s):** /v2/document-validations/app-registration

## Endpoint

```
POST https://api.verifik.co/v2/document-validations/app-registration
```

Una Validación de Documento es una instancia dentro del sistema de Verifik que te permite procesar y validar documentos de identidad durante el proceso de registro de aplicación. Este proceso asegura la autenticidad de los documentos del usuario y proporciona verificación segura a través de varios métodos de análisis.

:::warning
El Token JWT que debes usar al crear `Validaciones de Documento de Registro de Aplicación` se proporciona desde el `Registro de Aplicación` en creación. Debes usar el token devuelto al crear un [Registro de Aplicación](/verifik-es/resources/registros-aplicacion/crear-un-registro-aplicacion) para autenticar esta solicitud.
:::

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Params

| Name        | Type    | Required | Description                                                                                                                                                                                                                       |
| ----------- | ------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `image`     | string  | No       | La imagen codificada en base64 del documento que será escaneado y analizado. Se requiere `image` o `backImage`                                                                                                                    |
| `backImage` | string  | No       | La imagen codificada en base64 del reverso del documento que será escaneado y analizado. Se requiere `image` o `backImage`                                                                                                        |
| `force`     | boolean | No       | Usa `force` para sobrescribir valores de intentos anteriores. Cuando se establece en `true`, esto permitirá crear una nueva validación de documento incluso si ya existe una para el registro de aplicación. Por defecto: `false` |
