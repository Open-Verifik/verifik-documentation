---
id: "es-docs-es-resources-registros-aplicacion-sincronizar-estado-registro-aplicacion-endpoint"
title: "Sincronizar Estado de Registro de Aplicación — Endpoint"
sourcePath: "docs-es/resources/registros-aplicacion/sincronizar-estado-registro-aplicacion.mdx"
locale: "es"
category: "resources"
tags:
  - "app-registrations"
  - "resources"
endpoint: "/v2/app-registrations/{id}/sync"
sourceAnchor: "Endpoint"
---

# Sincronizar Estado de Registro de Aplicación
**API path(s):** /v2/app-registrations/{id}/sync

## Endpoint

```
PUT https://api.verifik.co/v2/app-registrations/{id}/sync
```

El endpoint `Sincronización de Registro de Aplicación` actualiza el estado y paso de un proceso de registro de aplicación. Este endpoint es útil para sincronizar el estado del registro, especialmente cuando se han cumplido condiciones o criterios específicos.

:::warning
El Token JWT que debes usar al ejecutar la `Sincronización` se proporciona desde el `Registro de Aplicación` en creación. Debes usar el token devuelto al crear un [Registro de Aplicación](/verifik-es/resources/registros-aplicacion/crear-un-registro-aplicacion) para autenticar esta solicitud.
:::

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Params

| Name     | Type   | Required | Description                                                                                                                                                                                                                                                                      |
| -------- | ------ | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`     | string | Yes      | El identificador único del registro de Registro de Aplicación que deseas sincronizar. Este es el `_id` devuelto al crear el registro de aplicación                                                                                                                               |
| `step`   | string | Yes      | Especifica el paso a actualizar. Valores válidos: `skipKYC`, `instructions`, `signUpForm`, `basicInformation`, `document`, `liveness`, `form`, `end`                                                                                                                             |
| `status` | string | Yes      | El nuevo estado del registro. Los valores válidos dependen del paso: Para `skipKYC`: `COMPLETED_WITHOUT_KYC`. Para `instructions`, `signUpForm`, `basicInformation`, `document`, `liveness`, `form`: `ONGOING`. Para `end`: `COMPLETED`, `FAILED`, o `NEEDS_MANUAL_VERIFICATION` |
