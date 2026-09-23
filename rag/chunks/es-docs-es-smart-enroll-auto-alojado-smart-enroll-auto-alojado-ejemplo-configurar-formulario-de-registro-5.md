---
id: "es-docs-es-smart-enroll-auto-alojado-smart-enroll-auto-alojado-ejemplo-configurar-formulario-de-registro-5"
title: "SmartEnroll: Auto-alojado — Ejemplo: Configurar Formulario de Registro"
sourcePath: "docs-es/smart-enroll-auto-alojado/smart-enroll-auto-alojado.md"
locale: "es"
category: "smart-enroll-auto-alojado"
tags:
  - "smart-enroll-auto-alojado"
endpoint: "/v3"
sourceAnchor: "Ejemplo: Configurar Formulario de Registro"
slug: "/smart-enroll-auto-alojado"
url: "https://docs.verifik.co/verifik-es/smart-enroll-auto-alojado"
---

# SmartEnroll: Auto-alojado
**API path(s):** /v3

La **API de SmartEnroll** proporciona acceso programático a toda la funcionalidad de SmartEnroll, permitiéndote construir flujos personalizados de KYC e incorporación que se integran perfectamente con tus sistemas existentes. Esta solución es perfecta para empresas que necesitan más control sobre la experiencia del usuario o desean integrar la incorporación en sus aplicaciones existentes.

## Ejemplo: Configurar Formulario de Registro

:::info Opciones de Formato de Nombre

-   **together** - Campo único para nombre completo (ej., "Juan Pérez")
-   **separate** - Campos separados para nombre y apellido

Elige según tus requisitos regionales y preferencias de experiencia de usuario.
:::

---

## Paso 3: Verificación de Documentos

Configura cómo los usuarios verificarán sus documentos de identidad. Este paso es crucial para el cumplimiento KYC y la verificación de identidad.

### Lo que Configurarás

-   **Requisito del Paso de Documento** - Si la verificación de documentos es obligatoria, opcional u omitida
-   **Límite de Intentos** - Número máximo de intentos de carga (1-5)
-   **Tipos de Documentos** - Qué documentos aceptar por país (ID gubernamental, pasaporte, licencia de conducir)
-   **Métodos de Verificación** - Cómo se validarán los documentos (escaneo, carga, o ambos)
-   **Verificación Avanzada** - Verificaciones adicionales como verificación de información, screening o historial criminal

### Categorías de Documentos

Para KYC personal, puedes configurar estos tipos de documentos:

-   **government_id** - Tarjetas de identificación emitidas por el gobierno
-   **passport** - Pasaportes internacionales
-   **license** - Licencias de conducir

### Ejemplo: Configurar Verificación de Documentos

:::warning Tipos de Documentos por País
Cada país debe tener al menos una configuración de documento activa cuando el paso de documento no se omite. Configura los tipos de documentos según lo que se usa comúnmente en cada país. `"All"` en `allowedCountries` **no** crea automáticamente filas de `documentTypes`: agrega un bloque por país.
:::

:::info Catálogo vacío vs configuración incompleta
Un mensaje de catálogo vacío significa que no hay plantillas aprobadas para ese **país + categoría** (incluyendo plantillas globales `World`). Por ejemplo, **Estados Unidos** a menudo no tiene plantillas de `government_id`, pero sí muchas licencias de conducir estatales bajo `license`. Los errores de configuración incompleta significan que una fila tiene el país vacío o una categoría activa sin plantillas válidas: elige un país en cada fila y deja inactivas las categorías vacías.
:::

:::tip Idiomas y correos OTP
Define `defaultLanguage` en el proyecto (por ejemplo `"es"`) para que los nuevos usuarios y los correos OTP usen ese idioma cuando se omita `language`. Al crear un registro de app o una validación de correo vía API, aún puedes enviar `language: "es"` explícitamente. El SDK usa el idioma predeterminado del proyecto y luego envía el idioma activo de la interfaz en las solicitudes OTP. Personalizar la copia en español en el editor de plantillas solo guarda overrides.
:::
