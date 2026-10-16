---
id: "es-docs-es-smartenroll-smartenroll-admin-revision-kyc-historial-de-decisiones-10"
title: "SmartEnroll Admin - Revisión y Gestión KYC — Historial de Decisiones"
sourcePath: "docs-es/smartenroll/smartenroll-admin-revision-kyc.md"
locale: "es"
category: "smartenroll"
tags:
  - "smartenroll"
sourceAnchor: "Historial de Decisiones"
---

# SmartEnroll Admin - Revisión y Gestión KYC

La interfaz de **Revisión KYC de SmartEnroll Admin** proporciona a los administradores herramientas integrales para revisar, gestionar y tomar decisiones sobre las verificaciones KYC de usuarios. Este poderoso panel de control te permite monitorear todo el proceso de incorporación, revisar resultados de verificación y tomar acciones apropiadas basadas en requisitos de cumplimiento.

## Historial de Decisiones

La interfaz mantiene un rastro de auditoría completo:

- **Todos los Cambios de Estado**: Historial de todos los cambios de estado
- **Tomadores de Decisión**: Quién tomó cada decisión
- **Marcas de Tiempo**: Cuándo se tomó cada decisión
- **Notas**: Comentarios y notas agregadas con cada decisión
- **Códigos de Razón**: Razones categorizadas para rechazos o aprobaciones

### Configuración de Notificaciones

- **Notificaciones de Usuario**: Si los usuarios son notificados de cambios de estado
- **Plantillas de Correo Electrónico**: Plantillas de correo electrónico personalizables para aprobaciones/rechazos
- **Integración de Webhook**: Notificaciones automáticas a tus sistemas

:::warning Importante
Las anulaciones manuales deben usarse con juicio y documentarse completamente. Todas las decisiones deben basarse en políticas claras y requisitos de cumplimiento.
:::

---

## Mejores Prácticas para Revisión Admin

### Flujo de Trabajo de Revisión

1. **Comenzar con Resumen**: Revisar la lista de usuarios e identificar usuarios que requieren atención
2. **Verificar Datos de Registro**: Verificar toda la información proporcionada durante el registro
3. **Revisar Documentos**: Examinar imágenes de documentos para calidad y autenticidad
4. **Verificar Extracción OCR**: Asegurar que los datos extraídos sean precisos y completos
5. **Analizar Puntuaciones**: Revisar puntuaciones biométricas y resultados de comparación
6. **Verificar Antecedentes**: Revisar cualquier resultado de verificación de antecedentes
7. **Tomar Decisión**: Basado en toda la información, tomar una decisión informada
8. **Documentar Acciones**: Agregar notas explicando cualquier decisión manual
