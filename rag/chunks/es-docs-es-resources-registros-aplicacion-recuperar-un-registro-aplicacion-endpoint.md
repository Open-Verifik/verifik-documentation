---
id: "es-docs-es-resources-registros-aplicacion-recuperar-un-registro-aplicacion-endpoint"
title: "Obtener Registro de Aplicación — Endpoint"
sourcePath: "docs-es/resources/registros-aplicacion/recuperar-un-registro-aplicacion.mdx"
locale: "es"
category: "resources"
tags:
  - "app-registrations"
  - "resources"
endpoint: "/v2/app-registrations/{id}"
sourceAnchor: "Endpoint"
---

# Obtener Registro de Aplicación
**API path(s):** /v2/app-registrations/{id}

## Endpoint

```
GET https://api.verifik.co/v2/app-registrations/{id}
```

Recupera información detallada sobre un registro de aplicación específico por su ID. Puedes poblar objetos relacionados como validaciones, proyecto y flujo de proyecto.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Params

| Name          | Type   | Required | Description                                                                                                                                                                                                                                                                                                        |
| ------------- | ------ | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`          | string | Yes      | El identificador único del registro de aplicación                                                                                                                                                                                                                                                                  |
| `populates[]` | array  | No       | Poblar objetos relacionados. Disponibles: `project`, `projectFlow`, `emailValidation`, `phoneValidation`, `biometricValidation`, `documentValidation`, `informationValidation`, `person`, `face`, `documentFace`, `compareFaceVerification`, `cryptoValidation`, `formSubmittion`, `signature`, `accessControlLog` |
