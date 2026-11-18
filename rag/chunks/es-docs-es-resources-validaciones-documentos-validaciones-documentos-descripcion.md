---
id: "es-docs-es-resources-validaciones-documentos-validaciones-documentos-descripcion"
title: "Validaciones de Documentos — Descripción"
sourcePath: "docs-es/resources/validaciones-documentos/validaciones-documentos.mdx"
locale: "es"
category: "resources"
tags:
  - "document-validations"
  - "resources"
endpoint: "/v2/document-validations"
sourceAnchor: "Descripción"
slug: "/resources/validaciones-documentos"
url: "https://docs.verifik.co/verifik-es/resources/validaciones-documentos"
---

# Validaciones de Documentos
**API path(s):** /v2/document-validations

## Descripción

Las Validaciones de Documentos son el sistema central de verificación dentro de Verifik que procesa y valida los documentos de identidad de los usuarios durante el proceso de registro en la app. Piénsalas como el sistema de control de calidad que garantiza que los documentos sean auténticos, legibles y coincidan con la identidad declarada del usuario.

### Cómo funcionan las Validaciones de Documentos

Cada Validación de Documento representa una sesión única de verificación que procesa los documentos de identidad enviados por el usuario. Cuando alguien sube o escanea su cédula, pasaporte o licencia, Verifik crea una Validación de Documento para analizar el documento, extraer información y verificar su autenticidad.

Actualmente, las Validaciones de Documentos admiten estos tipos:

-   **validation** - Proceso estándar de verificación de documentos
-   **login** - Verificación de documentos para flujos de inicio de sesión
-   **signup** - Verificación de documentos para registro de nuevos usuarios
-   **ocr** - Procesamiento de reconocimiento óptico de caracteres
-   **demo** - Fines de demostración y pruebas

### Qué registran las Validaciones de Documentos

Las Validaciones de Documentos son sistemas de verificación integrales que procesan todos los aspectos de los documentos de identidad:

#### Información del documento

-   Tipo y categoría del documento (cédula, pasaporte, licencia)
-   Número de documento y detalles de identificación
-   Verificación de país y nacionalidad
-   Extracción de información de edad y género

#### Proceso de verificación

-   Método de ingreso (cámara, carga de archivo o no establecido)
-   Evaluación de calidad y legibilidad del documento
-   Extracción y validación de texto por OCR
-   Verificación de características de seguridad

#### Resultados de la validación

-   Verificación de autenticidad del documento
-   Validación de exactitud de la información
-   Detección de características de seguridad
-   Evaluación y puntaje de riesgo
