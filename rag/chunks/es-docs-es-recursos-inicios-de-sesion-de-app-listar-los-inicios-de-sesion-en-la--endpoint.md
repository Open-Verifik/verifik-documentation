---
id: "es-docs-es-recursos-inicios-de-sesion-de-app-listar-los-inicios-de-sesion-en-la--endpoint"
title: "Listar Todos los Inicios de Sesión de Aplicación — Endpoint"
sourcePath: "docs-es/recursos/inicios-de-sesion-de-app/listar-los-inicios-de-sesion-en-la-app.mdx"
locale: "es"
category: "recursos"
tags:
  - "app-logins"
  - "recursos"
endpoint: "/v2/app-logins"
sourceAnchor: "Endpoint"
slug: "/recursos/inicios-de-sesion-de-app/listar-los-inicios-de-sesion-en-la-app"
url: "https://docs.verifik.co/verifik-es/recursos/inicios-de-sesion-de-app/listar-los-inicios-de-sesion-en-la-app"
---

# Listar Todos los Inicios de Sesión de Aplicación
**API path(s):** /v2/app-logins

## Endpoint

```
GET https://api.verifik.co/v2/app-logins
```

### Encabezados

| Nombre        | Valor              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Parámetros

| Nombre del Parámetro               | Tipo   | Requerido | Descripción                                                                                                                      |
| ---------------------------------- | ------ | -------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `page`                             | number | No       | Especifica la página de los resultados a recuperar. Por defecto es `1`                                                           |
| `populates[]`                      | array  | No       | Un array que especifica qué validaciones incluir (por ejemplo, `emailValidation`, `phoneValidation`, `biometricValidation`)      |
| `sort`                             | string | No       | Campo por el cual ordenar los resultados. Por defecto es por fecha de creación (`-createdAt`)                                   |
| `where-exists_emailValidation`     | number | No       | Filtrar resultados donde existe validación de correo electrónico (`1` para incluir)                                             |
| `where-exists_phoneValidation`     | number | No       | Filtrar resultados donde existe validación de teléfono (`1` para incluir)                                                       |
| `where-exists_biometricValidation` | number | No       | Filtrar resultados donde existe validación biométrica (`1` para incluir)                                                        |
| `like_name`                        | string | No       | Buscar resultados por nombre (soporta coincidencia parcial)                                                                      |
