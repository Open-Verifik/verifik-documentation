---
id: "es-docs-es-recursos-documentos-de-validacion-el-objeto-de-validacion-de-document-descripcion"
title: "El Objeto de Validación de Documentos — Descripción"
sourcePath: "docs-es/recursos/documentos-de-validacion/el-objeto-de-validacion-de-documentos.mdx"
locale: "es"
category: "recursos"
tags:
  - "recursos"
sourceAnchor: "Descripción"
slug: "/recursos/documentos-de-validacion/el-objeto-de-validacion-de-documentos"
url: "https://docs.verifik.co/verifik-es/recursos/documentos-de-validacion/el-objeto-de-validacion-de-documentos"
---

# El Objeto de Validación de Documentos

## Descripción

El objeto Validación de Documento representa el proceso de verificación de documentos dentro de tus proyectos Verifik. Este objeto contiene toda la información necesaria para rastrear y gestionar las solicitudes de verificación de documentos y sus resultados asociados.

### Atributos Principales

#### `client`
**Tipo:** string (reference id)  
**Requerido:** Sí

Cliente asociado con esta validación de documento.

#### `project`
**Tipo:** string (reference id)  
**Requerido:** Sí

Proyecto al que pertenece esta validación de documento.

#### `projectFlow`
**Tipo:** string (reference id)  
**Requerido:** Sí

Configuración de flujo específica para esta validación de documento.

#### `status`
**Tipo:** String  
**Requerido:** Sí

Estado actual del proceso de validación de documento. Puede ser:
* `new` - Solicitud de validación creada pero aún no procesada
* `processing` - Validación en proceso
* `validated` - El documento ha sido verificado exitosamente
* `failed` - La validación de documento falló
* `expired` - La validación de documento expiró

#### `documentType`
**Tipo:** String  
**Requerido:** Sí

Tipo de documento que se está validando (por ejemplo, `passport`, `drivers_license`, `id_card`).

#### `documentNumber`
**Tipo:** String  
**Requerido:** Sí

Número del documento que se está validando.

#### `documentImage`
**Tipo:** String  
**Requerido:** No

Imagen del documento codificada en Base64.

#### `verificationResults`
**Tipo:** Object  
**Requerido:** No

Resultados de la verificación del documento, incluyendo:
* `isValid` - Boolean indicando si el documento es válido
* `confidence` - Nivel de confianza de la verificación (0.0 a 1.0)
* `extractedData` - Datos extraídos del documento

#### `createdAt`
**Tipo:** Date  
**Requerido:** Sí

Marca de tiempo de cuándo se creó la validación de documento.

#### `updatedAt`
**Tipo:** Date  
**Requerido:** Sí

Marca de tiempo de cuándo se actualizó por última vez la validación de documento.
