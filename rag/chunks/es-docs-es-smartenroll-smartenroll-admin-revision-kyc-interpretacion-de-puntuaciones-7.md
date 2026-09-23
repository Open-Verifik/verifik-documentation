---
id: "es-docs-es-smartenroll-smartenroll-admin-revision-kyc-interpretacion-de-puntuaciones-7"
title: "SmartEnroll Admin - Revisión y Gestión KYC — Interpretación de Puntuaciones"
sourcePath: "docs-es/smartenroll/smartenroll-admin-revision-kyc.md"
locale: "es"
category: "smartenroll"
tags:
  - "smartenroll"
sourceAnchor: "Interpretación de Puntuaciones"
---

# SmartEnroll Admin - Revisión y Gestión KYC

La interfaz de **Revisión KYC de SmartEnroll Admin** proporciona a los administradores herramientas integrales para revisar, gestionar y tomar decisiones sobre las verificaciones KYC de usuarios. Este poderoso panel de control te permite monitorear todo el proceso de incorporación, revisar resultados de verificación y tomar acciones apropiadas basadas en requisitos de cumplimiento.

## Interpretación de Puntuaciones

- **Puntuaciones Altas (85%+)**: Coincidencia fuerte frente al umbral por defecto hospedado (`0.85`), típicamente auto-aprobada
- **Puntuaciones Medias (70-84%)**: Puede requerir revisión manual; es común en caras de documentos impresos vs selfies en vivo aunque sea la misma persona
- **Cerca del mínimo de la API (~67%)**: Permitido en APIs de face-recognition (`0.67`–`0.95`); solo apropiado si el umbral del proyecto se bajó tras probar el riesgo de falsos aceptados
- **Puntuaciones Bajas (muy por debajo del umbral del proyecto)**: Probable rechazo o requiere investigación

:::warning Guías de Revisión
Las puntuaciones por debajo del umbral configurado deben ser cuidadosamente revisadas. Considera el contexto, calidad del documento y otros factores antes de tomar una decisión final. El historial FaceVerification está disponible vía populate del app registration (`compareFaceVerification`), no hay GET público por id de verificación; los registros expiran en unos 90 días en producción. Para la receta completa de integración, consulta la [Guía de API de SmartEnroll](/verifik-es/smartenroll/guia-api).
:::

---

## Verificaciones de Antecedentes Penales

Si tu proyecto SmartEnroll está configurado con screening de base de datos, esta sección muestra los resultados de verificaciones de antecedentes penales y verificación de antecedentes.

### Resultados de Verificación de Antecedentes

- **Estado de Antecedentes Penales**:
  - Indicador de registro limpio
  - Indicador de registro encontrado
  - Estado de verificación (pendiente, completado, fallido)

- **Resultados de Screening de Base de Datos**:
  - Verificaciones de base de datos gubernamental
  - Verificación de lista negra
  - Screening de lista de vigilancia
  - Verificaciones de lista de sanciones
