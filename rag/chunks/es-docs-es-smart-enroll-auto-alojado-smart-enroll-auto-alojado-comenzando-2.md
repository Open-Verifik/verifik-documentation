---
id: "es-docs-es-smart-enroll-auto-alojado-smart-enroll-auto-alojado-comenzando-2"
title: "SmartEnroll: Auto-alojado — Comenzando"
sourcePath: "docs-es/smart-enroll-auto-alojado/smart-enroll-auto-alojado.md"
locale: "es"
category: "smart-enroll-auto-alojado"
tags:
  - "smart-enroll-auto-alojado"
endpoint: "/v3"
sourceAnchor: "Comenzando"
slug: "/smart-enroll-auto-alojado"
url: "https://docs.verifik.co/verifik-es/smart-enroll-auto-alojado"
---

# SmartEnroll: Auto-alojado
**API path(s):** /v3

La **API de SmartEnroll** proporciona acceso programático a toda la funcionalidad de SmartEnroll, permitiéndote construir flujos personalizados de KYC e incorporación que se integran perfectamente con tus sistemas existentes. Esta solución es perfecta para empresas que necesitan más control sobre la experiencia del usuario o desean integrar la incorporación en sus aplicaciones existentes.

## Comenzando

### Autenticación

Todas las solicitudes de API requieren un token JWT válido. Incluye el token en el encabezado de Autorización:

```http
Authorization: Bearer 
```

### URLs Base

-   **Producción**: `https://api.verifik.co/v3`
-   **Staging**: `https://staging-api.verifik.co/v3`
-   **Desarrollo**: `https://dev-api.verifik.co/v3`

:::tip Mejores Prácticas de Webhook
Para conectar webhooks, primero crea objetos de webhook a través del endpoint de Webhooks, luego vincula sus IDs al flujo de tu proyecto. Esto te permite reutilizar configuraciones de webhook en múltiples proyectos.
:::

---

## Paso 6: Personalización de UI

Personaliza el aspecto del flujo de SmartEnroll para que coincida con tu marca. Este paso configura elementos visuales y personalización.

### Lo que Configurarás

-   **Colores Primarios** - Colores principales de la marca para el tema (púrpura predeterminado)
-   **Colores de Foco** - Colores de hover/interacción (amarillo predeterminado)
-   **Carga de Logo** - Logo de tu marca para elementos de la UI
-   **Imágenes de Documentos** - Imágenes personalizadas para guiar las cargas de documentos
-   **Textos Personalizados** - Mensajes y etiquetas personalizados

### Ejemplo: Configurar Personalización de UI

### Ejemplo de Inicio Rápido

Aquí hay un ejemplo simple de cómo listar todos los proyectos usando la API:

### Recursos de la API

La API de SmartEnroll proporciona dos recursos principales:

#### Proyectos

Gestiona tus proyectos KYC con control completo sobre configuración, marca y ajustes de verificación.

-   **[Listar Proyectos](/verifik-es/resources/proyectos/listar-todos-los-proyectos)** - Recupera todos los proyectos
-   **[Obtener Proyecto](/verifik-es/resources/proyectos/recuperar-un-proyecto)** - Obtiene detalles del proyecto
-   **[Crear Proyecto](/verifik-es/resources/proyectos/crear-un-proyecto)** - Crea nuevos proyectos
-   **[Actualizar Proyecto](/verifik-es/resources/proyectos/actualizar-un-proyecto)** - Actualiza la configuración del proyecto
-   **[Eliminar Proyecto](/verifik-es/resources/proyectos/eliminar-un-proyecto)** - Elimina proyectos

#### Flujos de Proyecto

Configura flujos de verificación y gestiona ajustes específicos del proyecto.

-   **[Actualizar Flujo de Proyecto](/verifik-es/resources/flujos-de-proyecto/actualizar-un-flujo-de-proyecto)** - Actualiza la configuración del flujo de verificación
-   **[Eliminar Flujo de Proyecto](/verifik-es/resources/flujos-de-proyecto/eliminar-un-flujo-de-proyecto)** - Elimina flujos de proyecto

---
