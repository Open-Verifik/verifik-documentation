---
id: "es-docs-es-resources-validaciones-documentos-el-objeto-validacion-documento-descripcion"
title: "El Objeto de Validación de Documento — Descripción"
sourcePath: "docs-es/resources/validaciones-documentos/el-objeto-validacion-documento.mdx"
locale: "es"
category: "resources"
tags:
  - "resources"
sourceAnchor: "Descripción"
slug: "/resources/el-objeto-validacion-documento"
url: "https://docs.verifik.co/verifik-es/resources/el-objeto-validacion-documento"
---

# El Objeto de Validación de Documento

## Descripción

El objeto Validación de Documento representa el proceso de verificación de documentos dentro de tus proyectos de Verifik. Este objeto contiene toda la información necesaria para rastrear y gestionar solicitudes de verificación de documentos, incluyendo escaneo del documento, procesamiento OCR y resultados de validación.

### Atributos

#### `appRegistration`

Tipo: string (reference id)  
Requerido: No

Referencia al objeto AppRegistration asociado a esta validación de documento.

#### `client`

Tipo: string (reference id)  
Requerido: No

Referencia al objeto Client asociado a esta validación de documento.

#### `project`

Tipo: string (reference id)  
Requerido: No

Referencia al objeto Project asociado a esta validación de documento.

#### `projectFlow`

Tipo: string (reference id)  
Requerido: No

Referencia al objeto ProjectFlow asociado a esta validación de documento.

#### `status`

Tipo: String  
Requerido: Sí

El estado actual del proceso de validación de documento. Puede ser:

-   `"new"` - Solicitud de validación creada pero aún no procesada (predeterminado)
-   `"pending"` - El documento está siendo procesado
-   `"completed"` - La validación del documento se completó correctamente
-   `"failed"` - La validación del documento falló
-   `"expired"` - La sesión de validación ha expirado

#### `documentType`

Tipo: String  
Requerido: Sí

El tipo de documento que se está validando:

-   `"id"` - Cédula/Documento nacional de identidad
-   `"passport"` - Pasaporte
-   `"driver_license"` - Licencia de conducir
-   `"other"` - Otro tipo de documento

#### `country`

Tipo: String  
Requerido: Sí

Código del país donde se emitió el documento (p. ej., "US", "CO", "MX").

#### `documentData`

Tipo: Object  
Requerido: No

Contiene los datos extraídos del documento:

-   `firstName` - Nombre según el documento
-   `lastName` - Apellido según el documento
-   `middleName` - Segundo nombre según el documento
-   `documentNumber` - Número de documento
-   `birthDate` - Fecha de nacimiento
-   `expirationDate` - Fecha de expiración del documento
-   `issueDate` - Fecha de emisión del documento
-   `gender` - Género
-   `nationality` - Nacionalidad

#### `ocrResults`

Tipo: Object  
Requerido: No

Contiene los resultados del procesamiento OCR:

-   `confidence` - Puntaje de confianza del OCR
-   `rawText` - Texto bruto extraído
-   `fields` - Resultados de extracción de campos estructurados

#### `validationResults`

Tipo: Object  
Requerido: No

Contiene los resultados de la validación:

-   `documentAuthenticity` - Resultado de verificación de autenticidad del documento
-   `dataConsistency` - Resultado de verificación de consistencia de datos
-   `livenessDetection` - Resultado de detección de vivacidad
-   `antiSpoofing` - Resultado de detección anti‑suplantación

#### `images`

Tipo: Object  
Requerido: No

Contiene imágenes del documento:

-   `frontImage` - Imagen del frente (base64)
-   `backImage` - Imagen del reverso (base64)
-   `selfieImage` - Selfie para comparación

#### `riskScore`

Tipo: Number  
Requerido: No

Puntaje de evaluación de riesgo para la validación.

#### `age`

Tipo: String  
Requerido: No

Edad calculada a partir de la fecha de nacimiento.

#### `backUrl`

Tipo: String  
Requerido: No

URL a la que redirigir después de la validación.

#### `frontUrl`

Tipo: String  
Requerido: No

URL a la que redirigir al frente después de la validación.

#### `createdAt`

Tipo: Date  
Requerido: Sí

Fecha y hora en que se creó la validación de documento.

#### `updatedAt`

Tipo: Date  
Requerido: Sí

Fecha y hora de la última actualización de la validación de documento.

#### `completedAt`

Tipo: Date  
Requerido: No

Fecha y hora en que la validación de documento se completó correctamente.
