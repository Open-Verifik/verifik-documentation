---
id: "es-docs-es-resources-validaciones-biometricas-recuperar-una-validacion-biometric-endpoint"
title: "Recuperar una Validación Biométrica — Endpoint"
sourcePath: "docs-es/resources/validaciones-biometricas/recuperar-una-validacion-biometrica.mdx"
locale: "es"
category: "resources"
tags:
  - "biometric-validations"
  - "resources"
endpoints:
  - "/v2/biometric-validations/biometric_validation_123456789"
  - "/v2/biometric-validations/biometric_validation_123456789?populates[]=client&populates[]=project&populates[]=projectflow&sort=-createdat&limit=10"
  - "/v2/biometric-validations/{id}"
sourceAnchor: "Endpoint"
slug: "/resources/validaciones-biometricas/recuperar-una-validacion-biometrica"
url: "https://docs.verifik.co/verifik-es/resources/validaciones-biometricas/recuperar-una-validacion-biometrica"
---

# Recuperar una Validación Biométrica
**API path(s):** /v2/biometric-validations/biometric_validation_123456789, /v2/biometric-validations/biometric_validation_123456789?populates[]=client&populates[]=project&populates[]=projectflow&sort=-createdat&limit=10, /v2/biometric-validations/{id}

## Endpoint

**GET** `https://api.verifik.co/v2/biometric-validations/{id}`

Una Validación Biométrica es una instancia dentro del sistema de Verifik que te permite procesar y validar identidades de usuarios a través de reconocimiento facial y detección de vida. Este endpoint recupera un registro de validación biométrica específico por su identificador único, incluyendo todos los datos y relaciones asociados.

### Encabezados

#### Authorization
Tipo: String  
Requerido: Sí

`Bearer {YOUR_ACCESS_TOKEN}`

### Parámetros de Ruta

#### `id`
Tipo: String  
Requerido: Sí

Identificador único de la validación biométrica a recuperar.

### Parámetros de Consulta

#### `populates[]`
Tipo: Array  
Requerido: No

Campos a rellenar con datos relacionados.

Ejemplo: `populates[]=client&populates[]=project`

#### `sort`
Tipo: String  
Requerido: No

Orden de clasificación para resultados. Prefijo con `-` para descendente.

Ejemplo: `sort=-createdAt`

#### `limit`
Tipo: Number  
Requerido: No

Número máximo de resultados a devolver.

Ejemplo: `limit=10`

#### `where_client`
Tipo: String  
Requerido: No

Filtrar por ID de cliente.

Ejemplo: `where_client=507f1f77bcf86cd799439013`

#### `where_project`
Tipo: String  
Requerido: No

Filtrar por ID de proyecto.

Ejemplo: `where_project=507f1f77bcf86cd799439011`

#### `where_projectFlow`
Tipo: String  
Requerido: No

Filtrar por ID de flujo de proyecto.

Ejemplo: `where_projectFlow=507f1f77bcf86cd799439015`

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
