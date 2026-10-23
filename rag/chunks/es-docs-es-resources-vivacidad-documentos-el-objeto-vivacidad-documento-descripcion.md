---
id: "es-docs-es-resources-vivacidad-documentos-el-objeto-vivacidad-documento-descripcion"
title: "El Objeto de Vivacidad de Documento — Descripción"
sourcePath: "docs-es/resources/vivacidad-documentos/el-objeto-vivacidad-documento.mdx"
locale: "es"
category: "resources"
tags:
  - "resources"
sourceAnchor: "Descripción"
slug: "/resources/el-objeto-vivacidad-documento"
url: "https://docs.verifik.co/verifik-es/resources/el-objeto-vivacidad-documento"
---

# El Objeto de Vivacidad de Documento

## Descripción

El objeto de Vivacidad de Documento representa el resultado de todas las validaciones realizadas sobre un documento enviado como imagen en base64. Este objeto contiene información sobre diversas verificaciones anti-fraude, incluyendo detección de Reproducción en Pantalla, Copia Impresa, Sustitución de Retrato y Manipulación Digital.

### Atributos

#### `client`

Tipo: string (reference id)  
Requerido: Sí

Referencia al cliente propietario de este registro de vivacidad de documento.

#### `appRegistration`

Tipo: string (reference id)  
Requerido: Sí

Referencia al registro de aplicación asociado con esta validación de vivacidad de documento.

#### `imageSaved`

Tipo: Boolean  
Requerido: No  
Predeterminado: false

Indica si la imagen del documento procesado ha sido guardada en almacenamiento.

#### `imageUrl`

Tipo: String  
Requerido: No  
Predeterminado: ""

URL donde se almacena la imagen del documento procesado (cuando imageSaved es true).

#### `status`

Tipo: String  
Requerido: Sí

El estado actual de la validación de vivacidad de documento. Puede ser:

* `"new"` - Solicitud de validación creada pero aún no procesada (predeterminado)
* `"processing"` - Documento en análisis
* `"completed"` - Validación completada con éxito
* `"failed"` - La validación falló

#### `validationResults`

Tipo: Object  
Requerido: No

Contiene los resultados de varias verificaciones:

* `screenReplay` - Resultado de detección de reproducción en pantalla
* `printedCopy` - Resultado de detección de copia impresa
* `portraitSubstitution` - Resultado de detección de sustitución de retrato
* `digitalManipulation` - Resultado de detección de manipulación digital

#### `calibrationSettings`

Tipo: Object  
Requerido: No

Contiene la configuración de calibración utilizada para la validación:

* `screenReplayCalibration` - Nivel de calibración: `SOFT`, `REGULAR`, `HARD`
* `printedCopyCalibration` - Nivel de calibración: `SOFT`, `REGULAR`, `HARD`
* `portraitSubstitutionCalibration` - Nivel de calibración: `SOFT`, `REGULAR`, `HARD`

#### `validationFlags`

Tipo: Object  
Requerido: No

Contiene banderas de configuración de validación:

* `ignoreDocumentCroppedValidation` - Bandera booleana para ignorar recorte del documento
* `ignoreColourLessValidation` - Bandera booleana para ignorar falta de color

#### `riskScore`

Tipo: Number  
Requerido: No

Puntaje de evaluación de riesgo general del documento.

#### `confidence`

Tipo: Number  
Requerido: No

Puntaje de confianza para los resultados de validación.

#### `createdAt`

Tipo: Date  
Requerido: Sí

Marca de tiempo cuando se creó la validación de vivacidad de documento.

#### `updatedAt`

Tipo: Date  
Requerido: Sí

Marca de tiempo de la última actualización de la validación de vivacidad de documento.

#### `completedAt`

Tipo: Date  
Requerido: No

Marca de tiempo cuando la validación se completó exitosamente.
