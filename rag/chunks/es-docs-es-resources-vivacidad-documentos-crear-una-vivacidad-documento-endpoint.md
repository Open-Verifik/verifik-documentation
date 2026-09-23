---
id: "es-docs-es-resources-vivacidad-documentos-crear-una-vivacidad-documento-endpoint"
title: "Crear una Validación de Vivacidad de Documento — Endpoint"
sourcePath: "docs-es/resources/vivacidad-documentos/crear-una-vivacidad-documento.mdx"
locale: "es"
category: "resources"
tags:
  - "document-liveness"
  - "resources"
endpoint: "/v2/document-liveness"
sourceAnchor: "Endpoint"
slug: "/resources/crear-una-vivacidad-documento"
url: "https://docs.verifik.co/verifik-es/resources/crear-una-vivacidad-documento"
---

# Crear una Validación de Vivacidad de Documento
**API path(s):** /v2/document-liveness

## Endpoint

```
POST https://api.verifik.co/v2/document-liveness
```

Una Validación de Vivacidad de Documento es el resultado de todas las validaciones realizadas sobre un documento enviado como imagen en base64. Tenemos cuatro tipos de validaciones que ejecutamos sobre el documento: **Reproducción en Pantalla (Screen Replay), Copia Impresa (Printed Copy), Sustitución de Retrato (Portrait Substitution) y Manipulación Digital (Digital Manipulation).** También puedes decidir almacenar el base64 en nuestro CDN para poder recuperar la imagen que probaste.

### Encabezados

#### Content-Type
Tipo: String  
Requerido: Sí

`application/json`

#### Authorization
Tipo: String  
Requerido: Sí

`Bearer `

### Parámetros de Cuerpo

#### `image`
Tipo: Blob  
Requerido: Sí

El documento a probar en formato base64.

#### `saveImage`
Tipo: Boolean  
Requerido: No

Este booleano define si guardamos la imagen o no para futuras inspecciones.

#### `validateScreenReplay`
Tipo: Boolean  
Requerido: No

Realiza una validación para comprobar si el ataque provino de una reproducción en pantalla.

#### `validatePrintedCopy`
Tipo: Boolean  
Requerido: No

Realiza una validación para comprobar si el ataque provino de una copia impresa.

#### `validatePortraitSubstitution`
Tipo: Boolean  
Requerido: No

Realiza una validación para comprobar si el ataque provino de una sustitución de retrato.

#### `validateDigitalManipulation`
Tipo: Boolean  
Requerido: No

Realiza una validación para comprobar si el ataque provino de una manipulación digital.

#### `screenReplayCalibration`
Tipo: String  
Requerido: No

Puedes ajustar la calibración entre `SOFT`, `REGULAR` o `HARD`. El valor por defecto es `REGULAR`.

#### `printedCopyCalibration`
Tipo: String  
Requerido: No

Puedes ajustar la calibración entre `SOFT`, `REGULAR` o `HARD`. El valor por defecto es `REGULAR`.

#### `portraitSubstitutionCalibration`
Tipo: String  
Requerido: No

Puedes ajustar la calibración entre `SOFT`, `REGULAR` o `HARD`. El valor por defecto es `REGULAR`.

#### `ignoreDocumentCroppedValidation`
Tipo: Boolean  
Requerido: No

Ignora si el documento fue recortado.

#### `ignoreColourLessValidation`
Tipo: Boolean  
Requerido: No

Ignora la falta de color en el documento.
