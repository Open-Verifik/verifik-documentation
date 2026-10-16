---
id: "es-docs-es-smartenroll-smartenroll-admin-revision-kyc-resultados-de-extraccion-ocr-5"
title: "SmartEnroll Admin - Revisión y Gestión KYC — Resultados de Extracción OCR"
sourcePath: "docs-es/smartenroll/smartenroll-admin-revision-kyc.md"
locale: "es"
category: "smartenroll"
tags:
  - "smartenroll"
sourceAnchor: "Resultados de Extracción OCR"
---

# SmartEnroll Admin - Revisión y Gestión KYC

La interfaz de **Revisión KYC de SmartEnroll Admin** proporciona a los administradores herramientas integrales para revisar, gestionar y tomar decisiones sobre las verificaciones KYC de usuarios. Este poderoso panel de control te permite monitorear todo el proceso de incorporación, revisar resultados de verificación y tomar acciones apropiadas basadas en requisitos de cumplimiento.

## Resultados de Extracción OCR

La sección de extracción OCR (Reconocimiento Óptico de Caracteres) muestra todos los datos extraídos automáticamente del documento de identidad del usuario.

### Información Extraída

El sistema extrae y muestra la siguiente información de los documentos:

- **Información Personal**:
  - Nombre completo (como aparece en el documento)
  - Fecha de nacimiento
  - Lugar de nacimiento
  - Nacionalidad
  - Género

- **Detalles del Documento**:
  - Número de documento
  - Tipo de documento
  - Fecha de emisión
  - Fecha de expiración
  - Autoridad emisora
  - Ubicación de emisión

- **Información Adicional** (dependiente del documento):
  - Dirección
  - Tipo de sangre
  - Altura
  - Otros campos específicos del documento

### Indicadores de Calidad OCR

- **Puntuación de Confianza**: Qué tan confiado está el sistema en los datos extraídos (porcentaje)
- **Confianza a Nivel de Campo**: Puntuaciones de confianza individuales para cada campo extraído
- **Estado de Extracción**: Si la extracción fue exitosa para todos los campos requeridos

### Comparación de Datos

La interfaz resalta:

- **Coincidencias**: Campos que coinciden entre datos de registro y datos del documento
- **No Coincidencias**: Campos que no coinciden (pueden requerir atención)
- **Datos Faltantes**: Campos requeridos que no pudieron ser extraídos

:::important Importante
Revisa los resultados de extracción OCR cuidadosamente. Aunque el sistema es muy preciso, puede ser necesaria una verificación manual para campos críticos, especialmente cuando las puntuaciones de confianza son más bajas.
:::

---
