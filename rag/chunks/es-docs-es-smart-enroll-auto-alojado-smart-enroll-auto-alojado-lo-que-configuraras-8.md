---
id: "es-docs-es-smart-enroll-auto-alojado-smart-enroll-auto-alojado-lo-que-configuraras-8"
title: "SmartEnroll: Auto-alojado — Lo que Configurarás"
sourcePath: "docs-es/smart-enroll-auto-alojado/smart-enroll-auto-alojado.md"
locale: "es"
category: "smart-enroll-auto-alojado"
tags:
  - "smart-enroll-auto-alojado"
sourceAnchor: "Lo que Configurarás"
slug: "/smart-enroll-auto-alojado"
url: "https://docs.verifik.co/verifik-es/smart-enroll-auto-alojado"
---

# SmartEnroll: Auto-alojado

La **API de SmartEnroll** proporciona acceso programático a toda la funcionalidad de SmartEnroll, permitiéndote construir flujos personalizados de KYC e incorporación que se integran perfectamente con tus sistemas existentes. Esta solución es perfecta para empresas que necesitan más control sobre la experiencia del usuario o desean integrar la incorporación en sus aplicaciones existentes.

## Lo que Configurarás

-   **Logo** - El logo de tu empresa (mostrado en la parte superior)
-   **Color de Fondo** - Color de fondo principal
-   **Color de Botón** - Color del botón principal
-   **Color de Texto del Botón** - Color del texto para los botones
-   **Color del Título** - Color para encabezados y títulos
-   **Color del Texto** - Color para el texto del cuerpo
-   **Imagen** - Imagen de fondo o decorativa
-   **Color de Fondo de Imagen** - Color de fondo para el área de la imagen

### Ejemplo: Configurar Personalización de Marca

:::tip Guías de Color

-   Usa alto contraste entre texto y fondos para accesibilidad
-   Prueba tu esquema de colores tanto en dispositivos de escritorio como móviles
-   Asegúrate de que los colores de los botones destaquen del fondo
-   Considera tus guías de marca al elegir colores
    :::

---

## Ejemplo de Proyecto Completo

Aquí hay un ejemplo completo que muestra cómo crear un proyecto KYC completamente configurado en una sola solicitud:

---

## Gestión del Ciclo de Vida del Proyecto

### Activando tu Proyecto

Una vez que hayas configurado todos los pasos, cambia el estado del proyecto para que esté activo:

### Valores de Estado del Proyecto

-   **draft** - El proyecto se está configurando, no accesible para usuarios finales
-   **active** - El proyecto está activo y aceptando inscripciones de usuarios
-   **paused** - El proyecto está temporalmente deshabilitado, no se aceptan nuevas inscripciones

:::warning Antes de Activar
Asegúrate de que todos los pasos requeridos estén configurados y probados correctamente antes de establecer el estado en "active". Los usuarios no podrán completar la incorporación si faltan pasos requeridos o están mal configurados.
:::

---
