---
id: "es-docs-es-resources-validaciones-biometricas-listar-todas-las-validaciones-biom-endpoint"
title: "Listar Todas las Validaciones Biométricas — Endpoint"
sourcePath: "docs-es/resources/validaciones-biometricas/listar-todas-las-validaciones-biometricas.mdx"
locale: "es"
category: "resources"
tags:
  - "biometric-validations"
  - "biometric-validations?page=1&perpage=10&populates[]=client&populates[]=project&where_status=validated&where_type=login&sort=-createdat"
  - "resources"
endpoints:
  - "/v2/biometric-validations"
  - "/v2/biometric-validations?page=1&perpage=10&populates[]=client&populates[]=project&where_status=validated&where_type=login&sort=-createdat"
sourceAnchor: "Endpoint"
slug: "/resources/listar-todas-las-validaciones-biometricas"
url: "https://docs.verifik.co/verifik-es/resources/listar-todas-las-validaciones-biometricas"
---

# Listar Todas las Validaciones Biométricas
**API path(s):** /v2/biometric-validations, /v2/biometric-validations?page=1&perpage=10&populates[]=client&populates[]=project&where_status=validated&where_type=login&sort=-createdat

## Endpoint

**GET** `https://api.verifik.co/v2/biometric-validations`

Recupera una lista de registros de validaciones biométricas basada en filtros y parámetros especificados.

### Encabezados

#### Authorization
Tipo: String  
Requerido: Sí

`Bearer {YOUR_ACCESS_TOKEN}`

### Parámetros de Consulta

#### `page`
Tipo: Number  
Requerido: No

Número de página (comienza en 1).

Ejemplo: `page=1`

#### `perPage`
Tipo: Number  
Requerido: No

Elementos por página (por defecto: 20).

Ejemplo: `perPage=10`

#### `offset`
Tipo: Number  
Requerido: No

Alternativa a page para omitir registros.

Ejemplo: `offset=20`

#### `populates[]`
Tipo: Array  
Requerido: No

Campos a rellenar con datos relacionados.

Ejemplo: `populates[]=client&populates[]=project`

#### `where_client`
Tipo: String  
Requerido: No

Filtrar por ID de cliente.

Ejemplo: `where_client=507f1f77bcf86cd799439013`

#### `where_status`
Tipo: String  
Requerido: No

Filtrar por estado de validación.

Ejemplo: `where_status=validated`

#### `where_type`
Tipo: String  
Requerido: No

Filtrar por tipo de validación.

Ejemplo: `where_type=login`

#### `where_livenessSession`
Tipo: String  
Requerido: No

Filtrar por ID de sesión de vida.

Ejemplo: `where_livenessSession=674de8df21c72be3cc42b8a7`

#### `in_status`
Tipo: Array  
Requerido: No

Filtrar por múltiples estados.

Ejemplo: `in_status[]=validated&in_status[]=failed`

#### `where>_createdAt`
Tipo: String  
Requerido: No

Filtrar registros creados después de la fecha.

Ejemplo: `where>_createdAt=2024-12-01`

#### `sort`
Tipo: String  
Requerido: No

Orden de clasificación (prefijo con `-` para descendente).

Ejemplo: `sort=-createdAt`
