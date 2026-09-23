---
id: "es-docs-es-smartenroll-smartenroll-admin-revision-kyc-puntuaciones-de-incorporacion-y-comparaciones-6"
title: "SmartEnroll Admin - Revisión y Gestión KYC — Puntuaciones de Incorporación y Comparaciones"
sourcePath: "docs-es/smartenroll/smartenroll-admin-revision-kyc.md"
locale: "es"
category: "smartenroll"
tags:
  - "smartenroll"
sourceAnchor: "Puntuaciones de Incorporación y Comparaciones"
---

# SmartEnroll Admin - Revisión y Gestión KYC

La interfaz de **Revisión KYC de SmartEnroll Admin** proporciona a los administradores herramientas integrales para revisar, gestionar y tomar decisiones sobre las verificaciones KYC de usuarios. Este poderoso panel de control te permite monitorear todo el proceso de incorporación, revisar resultados de verificación y tomar acciones apropiadas basadas en requisitos de cumplimiento.

## Puntuaciones de Incorporación y Comparaciones

Esta sección proporciona resultados integrales de puntuación y comparación del proceso de verificación biométrica.

### Puntuaciones Biométricas

- **Puntuación de Vivacidad**: 
  - Indica qué tan confiado está el sistema de que el usuario es una persona viva
  - Típicamente mostrado como un porcentaje (ej: 85%)
  - Puntuaciones más altas indican detección de vivacidad más fuerte

- **Puntuación de Comparación Facial**:
  - Puntuación de similitud entre la selfie y la foto del documento
  - Típicamente mostrado como un porcentaje (ej: 92%)
  - Indica qué tan bien coinciden las caras
  - Los umbrales son configurables por proyecto

### Desglose de Puntuaciones

La interfaz puede mostrar:

- **Puntuación General**: Puntuación combinada o ponderada de todos los pasos de verificación
- **Puntuaciones Paso a Paso**: Puntuaciones individuales para cada componente de verificación
- **Comparación de Umbral**: Si las puntuaciones cumplen con los umbrales configurados
- **Nivel de Riesgo**: Evaluación de riesgo general basada en las puntuaciones

### Resultados de Comparación

- **Coincidencia de Nombres**: 
  - Comparación entre nombre de registro y nombre del documento
  - Resalta coincidencias exactas y variaciones
  - Puede tener en cuenta variaciones comunes de nombres

- **Coincidencia Facial**:
  - Indicadores de comparación visual
  - Vista lado a lado de foto del documento y selfie
  - Porcentaje de confianza de coincidencia

- **Consistencia de Datos**:
  - Resultados de validación cruzada de campos
  - Verificaciones de consistencia en toda la información proporcionada
