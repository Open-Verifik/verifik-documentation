---
id: "es-docs-es-smartenroll-smartenroll-admin-revision-kyc-caracteristicas-de-la-lista-2"
title: "SmartEnroll Admin - Revisión y Gestión KYC — Características de la Lista"
sourcePath: "docs-es/smartenroll/smartenroll-admin-revision-kyc.md"
locale: "es"
category: "smartenroll"
tags:
  - "smartenroll"
sourceAnchor: "Características de la Lista"
---

# SmartEnroll Admin - Revisión y Gestión KYC

La interfaz de **Revisión KYC de SmartEnroll Admin** proporciona a los administradores herramientas integrales para revisar, gestionar y tomar decisiones sobre las verificaciones KYC de usuarios. Este poderoso panel de control te permite monitorear todo el proceso de incorporación, revisar resultados de verificación y tomar acciones apropiadas basadas en requisitos de cumplimiento.

## Características de la Lista

La lista de usuarios proporciona la siguiente información y capacidades:

- **Información del Usuario**:
  - Nombre e identificación del usuario
  - Fecha y hora de registro
  - Estado actual de verificación
  - Indicador de progreso de incorporación

- **Indicadores de Estado**:
  - **Pendiente**: El usuario ha comenzado pero no completado el proceso de incorporación
  - **En Progreso**: El usuario está actualmente pasando por pasos de verificación
  - **Aprobado**: El usuario ha completado exitosamente todos los requisitos de verificación
  - **Rechazado**: El usuario ha sido rechazado basado en resultados de verificación
  - **En Revisión**: Se requiere o está en progreso una revisión manual

- **Búsqueda y Filtrado**:
  - Buscar por nombre de usuario, correo electrónico o número de documento
  - Filtrar por estado de verificación
  - Filtrar por rango de fecha de registro
  - Filtrar por proyecto o tipo de incorporación

- **Acciones Rápidas**:
  - Ver perfil detallado del usuario
  - Acceder a resultados de verificación
  - Reenviar enlace de incorporación
  - Exportar datos de usuario

:::tip Consejo Profesional
Usa las funciones de búsqueda y filtrado para encontrar rápidamente usuarios específicos o revisar usuarios por estado. Esto es especialmente útil al gestionar grandes números de incorporaciones.
:::

---

## Detalles de Registro de Usuario

### Información del Formulario de Registro

Al ver el perfil de un usuario, puedes ver toda la información que proporcionaron durante el proceso de registro inicial.

#### Datos de Registro Disponibles

- **Información Personal**:
  - Nombre y apellido
  - Nombre completo como fue ingresado
  - Fecha de nacimiento (si se recopiló)

- **Información de Contacto**:
  - Dirección de correo electrónico
  - Número de teléfono con código de país
  - Estado de verificación para correo electrónico y teléfono

- **Información Adicional** (si está configurada):
  - Nombre de la empresa
  - Rol o posición
  - Cualquier campo personalizado configurado para tu proyecto

- **Metadatos de Registro**:
  - Marca de tiempo de registro
  - Dirección IP (si se registró)
  - Información del dispositivo
  - Fuente de referencia (si aplica)

#### Indicadores de Estado de Verificación

Cada pieza de información muestra su estado de verificación:

- ✓ **Verificado**: Verificado exitosamente (OTP de correo electrónico, OTP de teléfono, etc.)
- ⏳ **Pendiente**: Verificación en progreso o aún no completada
- ✗ **Fallido**: Verificación falló o expiró
- ⚠️ **Advertencia**: Verificación completada pero con problemas

:::important Importante
Toda la información de registro se muestra exactamente como el usuario la ingresó. Compara esto con la información del documento para identificar cualquier discrepancia que pueda requerir atención.
:::

---
