---
id: "es-docs-es-smartenroll-smartenroll-admin-revision-kyc-revision-de-escaneo-de-documentos-4"
title: "SmartEnroll Admin - Revisión y Gestión KYC — Revisión de Escaneo de Documentos"
sourcePath: "docs-es/smartenroll/smartenroll-admin-revision-kyc.md"
locale: "es"
category: "smartenroll"
tags:
  - "smartenroll"
sourceAnchor: "Revisión de Escaneo de Documentos"
---

# SmartEnroll Admin - Revisión y Gestión KYC

La interfaz de **Revisión KYC de SmartEnroll Admin** proporciona a los administradores herramientas integrales para revisar, gestionar y tomar decisiones sobre las verificaciones KYC de usuarios. Este poderoso panel de control te permite monitorear todo el proceso de incorporación, revisar resultados de verificación y tomar acciones apropiadas basadas en requisitos de cumplimiento.

## Revisión de Escaneo de Documentos

La sección de escaneo de documentos proporciona a los administradores una vista detallada de todos los documentos cargados por el usuario durante el proceso KYC.

### Información de Documentos Disponible

- **Tipo de Documento**: 
  - ID Gubernamental
  - Pasaporte
  - Licencia de Conducir
  - Otros tipos de documentos aceptados

- **Imágenes del Documento**:
  - Anverso del documento (vista de alta resolución)
  - Reverso del documento (si se requiere)
  - Indicadores de calidad y estado de validación

- **Metadatos de Carga**:
  - Marca de tiempo de carga
  - Método de captura (cámara o carga de archivo)
  - Puntuación de calidad de imagen
  - Tamaño y formato de archivo

### Estado de Validación del Documento

Cada documento muestra su estado de validación:

- **✓ Válido**: El documento pasó todas las verificaciones de validación
- **⚠️ Advertencia**: El documento tiene problemas menores pero aún puede ser aceptable
- **✗ Inválido**: El documento falló la validación (expirado, manipulado, etc.)
- **⏳ Procesando**: El documento aún se está procesando

### Indicadores de Calidad del Documento

- **Puntuación de Claridad**: Qué tan claro y legible es el documento
- **Completitud**: Si todas las partes requeridas son visibles
- **Autenticidad**: Resultados de detección de manipulación
- **Estado de Expiración**: Si el documento es actualmente válido

:::tip Consejo de Revisión
Siempre revisa tanto el anverso como el reverso de los documentos cuando estén disponibles. Algunas características de seguridad o información importante pueden estar en el reverso.
:::

---
