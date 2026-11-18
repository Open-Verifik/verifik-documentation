---
id: "es-docs-es-smartenroll-smartenroll-flujo-kyc-paso-9-validacion-de-documento-7"
title: "Flujo KYC de SmartEnroll - Guía para Usuarios Finales — Paso 9: Validación de Documento"
sourcePath: "docs-es/smartenroll/smartenroll-flujo-kyc.md"
locale: "es"
category: "smartenroll"
tags:
  - "smartenroll"
sourceAnchor: "Paso 9: Validación de Documento"
---

# Flujo KYC de SmartEnroll - Guía para Usuarios Finales

El **Flujo KYC de SmartEnroll** es un proceso integral de verificación de identidad que guía a los usuarios finales a través de una experiencia de incorporación segura. Este flujo combina múltiples métodos de verificación incluyendo validación de correo electrónico, verificación telefónica, escaneo de documentos y autenticación biométrica para asegurar el más alto nivel de seguridad y cumplimiento.

## Paso 9: Validación de Documento

El sistema realiza verificaciones exhaustivas de validación en el documento y los datos extraídos.

#### Verificaciones de Validación

El sistema verifica:

1. **Autenticidad del Documento**:
   - Verificación de características de seguridad
   - Detección de manipulación
   - Validación de formato
   - Estado de expiración

2. **Consistencia de Datos**:
   - Comparación con información de registro (coincidencia de nombres)
   - Validación cruzada de campos
   - Validación de formato (fechas, números, etc.)

3. **Screening de Base de Datos** (si está habilitado):
   - Verificación de base de datos gubernamental
   - Verificaciones de listas negras
   - Verificaciones de antecedentes penales (si está configurado)

4. **Verificaciones de Calidad**:
   - Claridad de imagen
   - Legibilidad del texto extraído
   - Completitud de la información

#### Resultados de Validación

- **Éxito**: Si todas las validaciones pasan, los usuarios proceden a la verificación biométrica
- **Problemas Encontrados**: Si se detectan problemas, los usuarios pueden ver:
  - Mensajes de error específicos
  - Guía sobre cómo corregir problemas
  - Opción de reintentar la captura del documento

:::warning Importante
Si la validación falla, revisa cuidadosamente el mensaje de error. Problemas comunes incluyen:
- Documento expirado o aún no válido
- Nombre no coincide con la información de registro
- Calidad de imagen deficiente
- Documento no completamente visible en la foto
:::

Después de una validación exitosa del documento, los usuarios proceden a la verificación biométrica.

---
