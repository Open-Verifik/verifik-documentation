---
id: "es-docs-es-smartenroll-smartenroll-admin-revision-kyc-detalles-de-verificacion-8"
title: "SmartEnroll Admin - Revisión y Gestión KYC — Detalles de Verificación"
sourcePath: "docs-es/smartenroll/smartenroll-admin-revision-kyc.md"
locale: "es"
category: "smartenroll"
tags:
  - "smartenroll"
sourceAnchor: "Detalles de Verificación"
---

# SmartEnroll Admin - Revisión y Gestión KYC

La interfaz de **Revisión KYC de SmartEnroll Admin** proporciona a los administradores herramientas integrales para revisar, gestionar y tomar decisiones sobre las verificaciones KYC de usuarios. Este poderoso panel de control te permite monitorear todo el proceso de incorporación, revisar resultados de verificación y tomar acciones apropiadas basadas en requisitos de cumplimiento.

## Detalles de Verificación

Para cada verificación de antecedentes realizada:

- **Tipo de Verificación**: Tipo de verificación de antecedentes (antecedentes penales, sanciones, etc.)
- **Fuente de Base de Datos**: Qué base de datos fue consultada
- **Resultado**: Aprobado, Fallido o No se Encontró Coincidencia
- **Fecha Realizada**: Cuándo se ejecutó la verificación
- **Detalles**: Información adicional si se encontraron registros

### Indicadores de Riesgo

- **✓ Limpio**: No se encontraron registros en ninguna base de datos verificada
- **⚠️ Advertencia**: Problemas menores o registros encontrados que pueden requerir revisión
- **✗ Alerta**: Registros significativos encontrados que pueden requerir rechazo

### Información de Cumplimiento

- **Cumplimiento Regulatorio**: Si las verificaciones cumplen con requisitos regulatorios
- **Cobertura de Verificación**: Qué bases de datos se incluyeron en el screening
- **Frecuencia de Actualización**: Qué tan actualizada está la información de la base de datos

:::important Nota de Cumplimiento
Las verificaciones de antecedentes penales y verificaciones de antecedentes deben cumplir con regulaciones locales. Asegura que la configuración de tu proyecto cumpla con todos los requisitos legales aplicables para tu jurisdicción.
:::

---

## Veredicto de Resultado y Acciones

La sección final permite a los administradores revisar el resultado general de verificación y tomar acciones apropiadas.

### Estado de Verificación

El sistema muestra el estado actual de verificación:

- **✓ Aprobado**: El usuario ha pasado todos los requisitos de verificación
- **✗ Rechazado**: El usuario ha sido rechazado basado en resultados de verificación
- **⏳ Pendiente**: La verificación aún está en progreso
- **⚠️ En Revisión**: Se requiere revisión manual
