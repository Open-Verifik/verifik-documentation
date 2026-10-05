---
id: "es-docs-es-api-cuentas-crear-cuenta-endpoint"
title: "Crear Cuenta — Endpoint"
sourcePath: "docs-es/api/cuentas/crear-cuenta.md"
locale: "es"
category: "api"
tags:
  - "api"
sourceAnchor: "Endpoint"
---

# Crear Cuenta

## Endpoint

Crear una nueva cuenta de cliente con verificación biométrica facial y autenticación con contraseña maestra.

### Endpoint

```
POST /api/clients
```

## Descripción

Este endpoint te permite crear una nueva cuenta de cliente con la información proporcionada. No se requiere autenticación para la creación de cuenta, pero se requiere verificación biométrica facial y una contraseña maestra por seguridad. La cuenta se almacena en IPFS y devuelve un token JWT para futuras autenticaciones.

### Parámetros

| Parámetro | Tipo | Requerido | Descripción |
|-----------|------|-----------|-------------|
| `name` | string | Sí | Nombre del cliente |
| `countryCode` | string | Sí | Código de país (ej., "+1") |
| `phone` | string | Sí | Número de teléfono |
| `email` | string | Sí | Dirección de email válida |
| `language` | string | No | Idioma preferido ("en" o "es") |
| `company` | string | Sí | Nombre de la empresa |
| `faceBase64` | string | Sí | Imagen facial codificada en base64 para verificación biométrica |
| `masterPassword` | string | Sí | Contraseña maestra para seguridad de la cuenta |

### Respuesta

```json
{
  "data": {
    "ipfsHash": "bafkreic6je22ypwrat7xlso7igw4gfvnkoyf7lhdztwu3hxojyrsi72v6e",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "zelfAccount": {
      "url": "https://blush-selective-earwig-920.mypinata.cloud/ipfs/bafkreic6je22ypwrat7xlso7igw4gfvnkoyf7lhdztwu3hxojyrsi72v6e",
      "cid": "bafkreic6je22ypwrat7xlso7igw4gfvnkoyf7lhdztwu3hxojyrsi72v6e",
      "ipfs_pin_hash": "bafkreic6je22ypwrat7xlso7igw4gfvnkoyf7lhdztwu3hxojyrsi72v6e",
      "ipfsHash": "bafkreic6je22ypwrat7xlso7igw4gfvnkoyf7lhdztwu3hxojyrsi72v6e",
      "pinned": true,
      "web3": true,
      "name": "testclient_1758854160982_y992b@example.com.account",
      "publicData": {
        "accountEmail": "testclient_1758854160982_y992b@example.com",
        "accountPhone": "5554160982",
        "accountCompany": "Test Company",
        "accountCountryCode": "+1",
        "accountType": "client_account",
        "accountSubscriptionId": "free",
        "name": "Test Client"
      }
    },
    "zelfProof": "AhfX5KHGyDdYzSeEs5AlNyxP+Nc1mUiAZD2hODPTnjvem7UI1baWW8ZoCrW10U4uG9ZcxT3EJgX5w6lPwdvMa4v+YZ/L4Hut54j4sMjCzLYEmNLSYkLEFUpsYB6MHnCIpbnP52Jr0khuDLK+3vIoll0doNRq+hJvo6VfOtwzqVNXe0tIxAs8yy8dfzRUg2DntRNSkrcEk2XNW2s6jG3wCDD5BHFL+DA5AaytZP0xl4DI572hf8KEM0YMBzQAfNeofeJTNeEfk1SjtGcf1Xj2abLk3ImCJ+VUm4h3G9fcL12b4qVIE+aqBnuTWJBmAU/9RzxNL2RPX4ZFppQ63JImnJqFR+Pyte24rCFDVir1qFI27Ny7zOvokxt/VwN9GfXuQwv1xTRiccjmqJywZavVzqBMTI6haL99IJK6HTkLLXVJ3ebKS0jXO6p5LLFSDPod/2zuNkVkUtrWupYVo5SL58DWpAHrImKiKrgJgpVgNt78SRbM4z9zOeD7lB2ugUek3lmUMXqoTL4A8Rz7gOzdVCKAzFf47lZ+X1lD7ldPtvxsagqKw/krpXHZ7AxuO3ARwbWY13SBTeSdyDR7NJ7WbebWhiTI07hRRLrEv+9i06eGd4tFaUg+UaLKJLHqLYsKqI8yKpvL5QnduKnLNOgiU1WYsvfw6it6TI41y3LpTaR/FczoucuTO9oUNN5Ktskjh6bSjJAKtT6Ttt2t5OLek0urUkoGtMwMDIhMof2C/IMV6JSJLX5yxjwj16WJtVvNxTW5L4iEIKXm6agYWt94ia3LP9V/AGmZuSGW0JOfpisHqzRN+alBFDu9k99juGWbSUEp42454vFvBM7ALl7yi9Gpv9k6sUJRUoS/QdLnm3AgKIpLBWvNJooofmQIbDCfutpdFphFbyHp6vkWkTC497urbZkH/NkEvuvtP+F9FgLI+5LFQzGIzqb4LS5SIQ1Zi9nrUXkzfgmeOXc9ht1DsgYetGFMfgzPG0nqs5LGuv9EBO9zBDDiBH7mlM/Y43hugl9/14o41iRpi5Efw3UQQmTd6qWp0yfAaXhIox0yFM3Gg74S1DtCf9C0i4SQuZzIEJS/YSJNDy8396z39uZP7Z2QBcmOdEszXE8Frw6w3dDrSJDExCZ8TZ3TZBkVae7MpgUaKGiL0ZcssYApixrxEYEj728YGuI0RXO0s/rc8yCnoeoU3rahqKjP5FlzvtJkTNXp262nDBFIOGJ+UmAIc1Ii7JE0gg=="
  }
}
```

```json
{
  "validationError": "missing countryCode\n. missing phone\n. missing email\n. missing company\n. missing faceBase64\n. missing masterPassword\n"
}
```

```json
{
  "validationError": "\"email\" must be a valid email"
}
```
