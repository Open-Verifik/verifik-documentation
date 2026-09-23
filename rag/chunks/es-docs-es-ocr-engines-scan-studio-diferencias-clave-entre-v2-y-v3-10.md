---
id: "es-docs-es-ocr-engines-scan-studio-diferencias-clave-entre-v2-y-v3-10"
title: "Escaneo Estudio — Diferencias Clave Entre v2 y v3"
sourcePath: "docs-es/ocr-engines/scan-studio.mdx"
locale: "es"
category: "ocr-engines"
tags:
  - "ocr"
  - "ocr-engines"
endpoints:
  - "/v2/ocr/scan-studio"
  - "/v3/ocr/scan-studio"
sourceAnchor: "Diferencias Clave Entre v2 y v3"
slug: "/ocr-engines/escaneo-estudio"
url: "https://docs.verifik.co/verifik-es/ocr-engines/escaneo-estudio"
---

# Escaneo Estudio
**API path(s):** /v2/ocr/scan-studio, /v3/ocr/scan-studio

## Diferencias Clave Entre v2 y v3

| Característica | Versión 2 | Versión 3 |
|----------------|-----------|-----------|
| **Estructura de Campos** | Campos organizados en objeto `fields` con `kind`, `value`, `content`, `confidence` | Campos organizados como array con `type`, `mentionText`, `confidence`, `textAnchor`, `pageAnchor` |
| **Regiones Delimitadoras** | Usa coordenadas `polygon` con valores de píxeles absolutos | Usa `normalizedVertices` con coordenadas relativas (0-1) |
| **Puntuaciones de Confianza** | Una confianza por campo | Puntuación de confianza mejorada con mayor precisión |
| **Campos Adicionales** | Campos básicos del documento | Campos adicionales como `country`, `documentCategory`, `nationality` |
| **Valores Normalizados** | Solo texto extraído en bruto | Incluye `normalizedValue` para fechas y otros datos estructurados |
| **Estructura de Respuesta** | Incluye campos `age`, `gender` | También incluye campos `age`, `gender` más `country`, `documentCategory` |
| **Identificación de Campos** | Usa nombres de campos como claves | Usa `id` y `type` para mejor identificación de campos |

### Beneficios de Migración

- **Precisión Mejorada**: Precisión OCR mejorada con mejor puntuación de confianza
- **Mejor Estructura**: Datos de campo más organizados con coordenadas normalizadas
- **Datos Adicionales**: Extracción de información de documentos más completa
- **Preparado para el Futuro**: Desarrollo activo y soporte para v3

### Características

-   **Modelos Pre-entrenados**: Aprovecha modelos pre-entrenados desarrollados por Verifik para un rendimiento excepcional
-   **Alta Precisión**: Precisión superior en la extracción de datos con puntuaciones de confianza para cada campo
-   **Datos Estructurados**: Devuelve datos de campo organizados con regiones delimitadoras y niveles de confianza
-   **Múltiples Tipos de Documentos**: Soporte para varias identificaciones emitidas por el gobierno y documentos
-   **Proceso de Validación**: Toda la información extraída pasa por un riguroso proceso de validación y verificación
- El parámetro `cropFace` ayuda a mejorar la precisión enfocándose en el contenido del documento.
