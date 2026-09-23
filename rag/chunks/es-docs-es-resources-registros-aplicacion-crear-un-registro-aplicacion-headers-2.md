---
id: "es-docs-es-resources-registros-aplicacion-crear-un-registro-aplicacion-headers-2"
title: "Crear un Registro de Aplicación — Headers"
sourcePath: "docs-es/resources/registros-aplicacion/crear-un-registro-aplicacion.mdx"
locale: "es"
category: "resources"
tags:
  - "app-registrations"
  - "resources"
endpoint: "/v2/app-registrations"
sourceAnchor: "Headers"
---

# Crear un Registro de Aplicación
**API path(s):** /v2/app-registrations

## Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Params

| Name          | Type   | Required | Description                                                                                             |
| ------------- | ------ | -------- | ------------------------------------------------------------------------------------------------------- |
| `project`     | string | Yes      | ID único del proyecto asociado con este registro                                                        |
| `projectFlow` | string | Yes      | ID único del flujo de proyecto que define el proceso de registro y validación                           |
| `email`       | string | No       | Dirección de correo electrónico del usuario a registrar. Se requiere `email` o `phone`                  |
| `phone`       | string | No       | Número de teléfono del usuario a registrar (solo dígitos, sin espacios). Se requiere `email` o `phone`  |
| `countryCode` | string | No       | Código de país asociado con el número de teléfono. Requerido si se proporciona `phone`. Formato: `+123` |
| `fullName`    | string | No       | Nombre completo de la persona que se está registrando                                                   |
| `firstName`   | string | No       | Nombre de pila de la persona que se está registrando                                                    |
| `lastName`    | string | No       | Apellido de la persona que se está registrando                                                          |
| `language`    | string | No       | Idioma preferido para la comunicación durante el proceso de registro. Por defecto: `"en"`               |
