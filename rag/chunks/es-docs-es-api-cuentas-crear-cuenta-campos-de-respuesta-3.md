---
id: "es-docs-es-api-cuentas-crear-cuenta-campos-de-respuesta-3"
title: "Crear Cuenta — Campos de Respuesta"
sourcePath: "docs-es/api/cuentas/crear-cuenta.md"
locale: "es"
category: "api"
tags:
  - "api"
endpoint: "/api/clients"
sourceAnchor: "Campos de Respuesta"
---

# Crear Cuenta
**API path(s):** /api/clients

Crear una nueva cuenta de cliente con verificación biométrica facial y autenticación con contraseña maestra.

## Campos de Respuesta

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `data.ipfsHash` | string | Hash IPFS de los datos de cuenta almacenados |
| `data.token` | string | Token de autenticación JWT para futuras solicitudes |
| `data.zelfAccount` | object | Datos de cuenta almacenados en IPFS |
| `data.zelfAccount.url` | string | URL IPFS para acceder a los datos de cuenta |
| `data.zelfAccount.cid` | string | Identificador de contenido para IPFS |
| `data.zelfAccount.pinned` | boolean | Si los datos están fijados en IPFS |
| `data.zelfAccount.web3` | boolean | Si la cuenta soporta características Web3 |
| `data.zelfAccount.name` | string | Nombre de archivo de cuenta en IPFS |
| `data.zelfAccount.publicData` | object | Información pública de la cuenta |
| `data.zelfAccount.publicData.accountEmail` | string | Dirección de email de la cuenta |
| `data.zelfAccount.publicData.accountPhone` | string | Número de teléfono de la cuenta |
| `data.zelfAccount.publicData.accountCompany` | string | Nombre de empresa de la cuenta |
| `data.zelfAccount.publicData.accountCountryCode` | string | Código de país de la cuenta |
| `data.zelfAccount.publicData.accountType` | string | Tipo de cuenta ("client_account") |
| `data.zelfAccount.publicData.accountSubscriptionId` | string | Nivel de suscripción ("free") |
| `data.zelfAccount.publicData.name` | string | Nombre para mostrar de la cuenta |
| `data.zelfProof` | string | Prueba criptográfica ZelfProof |

## Notas

- Este endpoint no requiere autenticación
- La imagen facial debe proporcionarse en formato base64
- La contraseña maestra es requerida para la seguridad de la cuenta
- Todos los campos requeridos deben proporcionarse
- El idioma por defecto es "en" si no se especifica
- El campo empresa es requerido
- Los datos de cuenta se almacenan en IPFS (Sistema de Archivos InterPlanetario)
- Devuelve un token JWT para futuras autenticaciones
- La validación de email es obligatoria (debe ser formato de email válido)
- La cuenta se fija automáticamente en IPFS para persistencia
