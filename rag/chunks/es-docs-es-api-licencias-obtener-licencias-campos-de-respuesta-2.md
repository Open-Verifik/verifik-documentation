---
id: "es-docs-es-api-licencias-obtener-licencias-campos-de-respuesta-2"
title: "Obtener Licencias — Campos de Respuesta"
sourcePath: "docs-es/api/licencias/obtener-licencias.md"
locale: "es"
category: "api"
tags:
  - "api"
sourceAnchor: "Campos de Respuesta"
---

# Obtener Licencias

Obtener una lista de todas las licencias disponibles en el sistema.

## Campos de Respuesta

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `licenses` | array | Array de objetos de licencia |
| `licenses[].id` | string | Identificador único para la licencia |
| `licenses[].name` | string | Nombre legible de la licencia |
| `licenses[].domain` | string | Tipo de dominio al que se aplica esta licencia |
| `licenses[].type` | string | Tipo de licencia ("personal", "business", "enterprise") |
| `licenses[].price` | number | Precio de la licencia en USD |
| `licenses[].duration` | number | Duración de la licencia en años |
| `licenses[].features` | array | Array de características incluidas en esta licencia |
| `licenses[].status` | string | Estado de la licencia ("active", "inactive", "pending") |
| `licenses[].createdAt` | string | Timestamp ISO cuando se creó la licencia |
| `licenses[].updatedAt` | string | Timestamp ISO cuando se actualizó la licencia por última vez |
| `pagination` | object | Información de paginación |
| `pagination.page` | number | Número de página actual |
| `pagination.limit` | number | Elementos por página |
| `pagination.total` | number | Número total de licencias |
| `pagination.totalPages` | number | Número total de páginas |
