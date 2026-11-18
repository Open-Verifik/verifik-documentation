---
id: "es-docs-es-resources-registros-aplicacion-listar-todos-los-registros-aplicacion-endpoint"
title: "Listar Registros de Aplicación — Endpoint"
sourcePath: "docs-es/resources/registros-aplicacion/listar-todos-los-registros-aplicacion.mdx"
locale: "es"
category: "resources"
tags:
  - "app-registrations"
  - "resources"
endpoint: "/v2/app-registrations"
sourceAnchor: "Endpoint"
---

# Listar Registros de Aplicación
**API path(s):** /v2/app-registrations

## Endpoint

```
GET https://api.verifik.co/v2/app-registrations
```

Recupera una lista paginada de todos los registros de aplicación asociados con el usuario autenticado. Puedes filtrar por estado, proyecto y otros criterios.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Params

| Name                | Type    | Required | Description                                                                                                                                                                              |
| ------------------- | ------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `page`              | integer | No       | Número de página (por defecto: 1)                                                                                                                                                        |
| `limit`             | integer | No       | Número de elementos por página (por defecto: 10, máximo: 100)                                                                                                                            |
| `where_status`      | string  | No       | Filtrar por estado (`STARTED`, `ONGOING`, `COMPLETED`, `COMPLETED_WITHOUT_KYC`, `FAILED`, `NEEDS_MANUAL_VERIFICATION`, `EXPIRED`)                                                        |
| `where_project`     | string  | No       | Filtrar por ID de proyecto                                                                                                                                                               |
| `where_projectFlow` | string  | No       | Filtrar por ID de flujo de proyecto                                                                                                                                                      |
| `in_status`         | array   | No       | Filtrar por múltiples estados (`["ONGOING", "COMPLETED"]`)                                                                                                                               |
| `populates[]`       | array   | No       | Poblar objetos relacionados. Disponibles: `project`, `projectFlow`, `emailValidation`, `phoneValidation`, `biometricValidation`, `documentValidation`, `informationValidation`, `person` |
