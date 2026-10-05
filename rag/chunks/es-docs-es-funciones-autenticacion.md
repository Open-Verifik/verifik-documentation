---
id: "es-docs-es-funciones-autenticacion"
title: "Autenticación — Autenticación endpoint"
sourcePath: "docs-es/funciones/autenticacion.md"
locale: "es"
category: "funciones"
tags:
  - "funciones"
sourceAnchor: "Autenticación endpoint"
---

# Autenticación

## Autenticación endpoint

To access our services, we require a JWT token for each API that is protected on our end, for that you will require your **email** and **apiKey** to generate a temporal token that will enable you to access the APIs.

:::info
Join our Discord to request access to the API. [https://discord.gg/49JnBAsaq9](https://discord.gg/49JnBAsaq9)
:::

### Autenticación endpoint

```
https://api.zelf.world/api/clients/auth
```

This endpoint allows the creation of a new **JWT (JSON Web Token)** that you will need to authenticate your account.

#### Request

* **Endpoint**: `/api/clients/auth`
* **Method**: POST
* **Content-Type**: `application/json`

**Headers**

The request body should be a JSON object containing the following fields:

```json
"x-Api-Key": "client_927218f5abf23ebeb226e281"
```

**Request Body**

The request body should be a JSON object containing the following fields:

```json
{
  "email": "noreply@zelf.world",
}
```

The request was successful, and JWT is returned in JSON format.

```json
{
    "token": "yJhbGciOiJIUzI1NiIsVCJ9.eyJ6ZW...2hN7CLEebrvSDgM"
}
```

```json
{
    "error": "client_invalid_api_key"
}
```

```json
{
    "error": "client_not_found"
}
```
