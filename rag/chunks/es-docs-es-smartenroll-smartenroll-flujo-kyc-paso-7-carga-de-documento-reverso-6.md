---
id: "es-docs-es-smartenroll-smartenroll-flujo-kyc-paso-7-carga-de-documento-reverso-6"
title: "Flujo KYC de SmartEnroll - Guía para Usuarios Finales — Paso 7: Carga de Documento - Reverso"
sourcePath: "docs-es/smartenroll/smartenroll-flujo-kyc.md"
locale: "es"
category: "smartenroll"
tags:
  - "smartenroll"
sourceAnchor: "Paso 7: Carga de Documento - Reverso"
---

# Flujo KYC de SmartEnroll - Guía para Usuarios Finales

El **Flujo KYC de SmartEnroll** es un proceso integral de verificación de identidad que guía a los usuarios finales a través de una experiencia de incorporación segura. Este flujo combina múltiples métodos de verificación incluyendo validación de correo electrónico, verificación telefónica, escaneo de documentos y autenticación biométrica para asegurar el más alto nivel de seguridad y cumplimiento.

## Paso 7: Carga de Documento - Reverso

Muchos documentos de identidad requieren que se verifiquen tanto el anverso como el reverso. Después de capturar exitosamente el anverso, los usuarios proceden a capturar el reverso.

#### Proceso de Captura del Reverso

El proceso es similar a la captura del anverso:

1. **Seguir las Mismas Guías**: Usar los mismos requisitos de iluminación, posicionamiento y calidad
2. **Capturar Reverso**: Tomar una foto o cargar el reverso del documento
3. **Vista Previa**: Revisar la imagen capturada
4. **Confirmar o Volver a Tomar**: Proceder si está satisfecho, o volver a tomar si es necesario

:::important Importante
Algunos documentos pueden tener información importante en el reverso (como características de seguridad adicionales o fechas de expiración). Asegúrate de que ambos lados sean claramente visibles y legibles.
:::

Después de que ambos lados sean capturados, el sistema procesa los documentos.

---

### Paso 8: Procesamiento de Documento - Extracción OCR

Una vez que ambos lados del documento están cargados, el sistema procesa automáticamente las imágenes usando tecnología de Reconocimiento Óptico de Caracteres (OCR).

#### Procesamiento OCR

El sistema extrae información clave del documento:

- **Información Personal**:
  - Nombre completo
  - Fecha de nacimiento
  - Número de documento
  - Nacionalidad
- **Detalles del Documento**:
  - Tipo de documento
  - Fecha de emisión
  - Fecha de expiración
  - Autoridad emisora
- **Características de Seguridad**:
  - Verificación de elementos de seguridad
  - Detección de manipulación
  - Verificaciones de autenticidad

#### Indicadores de Procesamiento

Durante el procesamiento, los usuarios típicamente ven:

- **Indicador de Carga**: Animación de progreso mostrando que el sistema está trabajando
- **Mensajes de Estado**: Actualizaciones sobre qué está verificando el sistema
- **Tiempo Estimado**: Cuánto tiempo podría tomar el procesamiento

:::tip Consejo para el Usuario
El procesamiento generalmente toma 10-30 segundos. Por favor sé paciente y no cierres el navegador o la aplicación durante este tiempo.
:::

Después de la extracción OCR, el sistema valida los datos extraídos.

---
