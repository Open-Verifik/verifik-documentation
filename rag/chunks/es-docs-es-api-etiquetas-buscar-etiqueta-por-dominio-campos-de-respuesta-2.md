---
id: "es-docs-es-api-etiquetas-buscar-etiqueta-por-dominio-campos-de-respuesta-2"
title: "Buscar Etiquetas por Dominio — Campos de Respuesta"
sourcePath: "docs-es/api/etiquetas/buscar-etiqueta-por-dominio.md"
locale: "es"
category: "api"
tags:
  - "api"
endpoints:
  - "/api/sessions"
  - "/api/tags/search-by-domain"
sourceAnchor: "Campos de Respuesta"
---

# Buscar Etiquetas por Dominio
**API path(s):** /api/sessions, /api/tags/search-by-domain

Buscar todas las etiquetas dentro de un dominio específico y sistema de almacenamiento.

## Campos de Respuesta

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `data` | array | Array de objetos de etiqueta encontrados en el dominio |
| `id` | string | Identificador único para la etiqueta |
| `name` | string | Nombre completo de la etiqueta (ej., "username.zelf.hold") |
| `cid` | string | Identificador de contenido para almacenamiento IPFS |
| `size` | number | Tamaño del archivo en bytes |
| `number_of_files` | number | Número de archivos asociados con la etiqueta |
| `mime_type` | string | Tipo MIME del contenido almacenado |
| `group_id` | string\|null | Identificador de grupo (usualmente null) |
| `created_at` | string | Timestamp ISO cuando se creó la etiqueta |
| `url` | string | URL directa para acceder al contenido almacenado |
| `publicData` | object | Información pública de blockchain y metadatos |
| `publicData.btcAddress` | string | Dirección Bitcoin asociada con la etiqueta |
| `publicData.domain` | string | Nombre del dominio (zelf, avax, bdag) |
| `publicData.ethAddress` | string | Dirección Ethereum asociada con la etiqueta |
| `publicData.solanaAddress` | string | Dirección Solana asociada con la etiqueta |
| `publicData.suiAddress` | string | Dirección Sui asociada con la etiqueta |
| `publicData.zelfName` | string | Nombre completo Zelf (ej., "username.zelf.hold") |
| `publicData.extraParams` | string | String JSON que contiene metadatos adicionales |
| `publicData.zelfProof` | string | Datos ZelfProof encriptados (cuando está disponible) |

```json
{
  "validationError": "Domain 'invalid' is not active"
}
```

```json
{
  "error": "Protected resource, use Authorization header to get access"
}
```

```json
{
  "validationError": "missing domain\n"
}
```

```json
{
  "message": "Internal server error",
  "code": "INTERNAL_ERROR"
}
```
