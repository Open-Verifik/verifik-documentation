---
id: "es-docs-es-smartenroll-smartenroll-admin-revision-kyc-decision-automatizada-9"
title: "SmartEnroll Admin - Revisión y Gestión KYC — Decisión Automatizada"
sourcePath: "docs-es/smartenroll/smartenroll-admin-revision-kyc.md"
locale: "es"
category: "smartenroll"
tags:
  - "smartenroll"
sourceAnchor: "Decisión Automatizada"
---

# SmartEnroll Admin - Revisión y Gestión KYC

La interfaz de **Revisión KYC de SmartEnroll Admin** proporciona a los administradores herramientas integrales para revisar, gestionar y tomar decisiones sobre las verificaciones KYC de usuarios. Este poderoso panel de control te permite monitorear todo el proceso de incorporación, revisar resultados de verificación y tomar acciones apropiadas basadas en requisitos de cumplimiento.

## Decisión Automatizada

Si la toma de decisiones automatizada está habilitada:

- **Auto-Aprobado**: El sistema aprobó automáticamente basado en puntuaciones y verificaciones
- **Auto-Rechazado**: El sistema rechazó automáticamente basado en criterios fallidos
- **Marcado para Revisión**: El sistema marcó para revisión manual debido a puntuaciones límite o problemas

### Anulación Manual

Los administradores pueden cambiar manualmente el resultado de verificación:

#### Aprobar Usuario

- **Cuándo Usar**: 
  - Las puntuaciones son límite pero aceptables
  - Problemas de calidad de documento que no afectan la validez
  - Falsos positivos en verificaciones de antecedentes
  - Otras circunstancias atenuantes

- **Proceso**:
  1. Revisar todos los datos de verificación
  2. Haz clic en "Aprobar" o "Anular para Aprobar"
  3. Agregar notas opcionales explicando la decisión
  4. Confirmar la acción

#### Rechazar Usuario

- **Cuándo Usar**:
  - Requisitos de verificación fallidos
  - Preocupaciones de autenticidad del documento
  - Problemas de verificación de antecedentes
  - Violaciones de política

- **Proceso**:
  1. Revisar todos los datos de verificación
  2. Haz clic en "Rechazar" o "Anular para Rechazar"
  3. Seleccionar razón de rechazo de lista predefinida
  4. Agregar notas detalladas explicando el rechazo
  5. Confirmar la acción

#### Solicitar Información Adicional

- **Cuándo Usar**:
  - Información faltante o poco clara
  - Necesidad de documentación adicional
  - Aclaración requerida

- **Proceso**:
  1. Haz clic en "Solicitar Información"
  2. Especificar qué información se necesita
  3. Enviar notificación al usuario
  4. El usuario puede proporcionar información adicional y volver a enviar
