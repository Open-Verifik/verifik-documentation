---
id: crear-nuevo-token-y-revocar-tokens-previos
title: Crear nuevo token y revocar tokens previos
description: Crea un nuevo token y revoca todos los tokens anteriores por seguridad
slug: /autenticacion/crear-nuevo-token-y-revocar-tokens
---

# Crear nuevo token y revocar tokens previos

## Expirar y renovar token (POST)

Este servicio realiza dos acciones cuando se usa:

1. Expira todos los tokens que se generaron previamente con cualquiera de los otros servicios mencionados.
2. Crea un token completamente nuevo. Este token expira en 30 días, como un token normal de Verifik.

Solo necesitas proporcionar un token válido, y el servicio hará el resto. Ten en cuenta que después de usar este servicio, el único token útil será el generado por este servicio.

**Utiliza este servicio si sientes que alguno de los tokens que has creado está siendo usado por alguien más, o si no puedes asegurar que tú y tu equipo son los únicos usando los servicios de Verifik.**

### Implementación

**Endpoint:**

`POST - https://api.verifik.co/v2/auth/renew-and-revoke`

#### Headers

Debes proporcionar un token que siga siendo válido.

```json
{
    "Authorization": "<token>"
}
```

#### Respuesta exitosa (Todos los tokens expiran y se genera uno nuevo)

```json
{
  "token": "string"
}
```


