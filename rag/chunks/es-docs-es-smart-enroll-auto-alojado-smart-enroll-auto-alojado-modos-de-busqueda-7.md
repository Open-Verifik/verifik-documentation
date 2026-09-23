---
id: "es-docs-es-smart-enroll-auto-alojado-smart-enroll-auto-alojado-modos-de-busqueda-7"
title: "SmartEnroll: Auto-alojado — Modos de Búsqueda"
sourcePath: "docs-es/smart-enroll-auto-alojado/smart-enroll-auto-alojado.md"
locale: "es"
category: "smart-enroll-auto-alojado"
tags:
  - "smart-enroll-auto-alojado"
endpoint: "/v3"
sourceAnchor: "Modos de Búsqueda"
slug: "/smart-enroll-auto-alojado"
url: "https://docs.verifik.co/verifik-es/smart-enroll-auto-alojado"
---

# SmartEnroll: Auto-alojado
**API path(s):** /v3

La **API de SmartEnroll** proporciona acceso programático a toda la funcionalidad de SmartEnroll, permitiéndote construir flujos personalizados de KYC e incorporación que se integran perfectamente con tus sistemas existentes. Esta solución es perfecta para empresas que necesitan más control sobre la experiencia del usuario o desean integrar la incorporación en sus aplicaciones existentes.

## Modos de Búsqueda

-   **FAST** - Optimizado para velocidad, adecuado para la mayoría de los casos de uso
-   **ACCURATE** - Más lento pero más preciso, recomendado para aplicaciones de alta seguridad

---

## Paso 5: Integraciones

Conecta tu proyecto KYC a sistemas externos, configura webhooks para notificaciones en tiempo real y establece redirecciones post-incorporación.

### Lo que Configurarás

-   **URL de Redirección** - Hacia dónde enviar a los usuarios después de completar la incorporación (requerido)
-   **Webhook** - Endpoint para recibir eventos de incorporación en tiempo real
-   **Integración de Lista Negra** - Conectar a bases de datos externas para prevenir inscripción
-   **Integración de API** - Enlazar a tu base de datos de clientes para validación de datos

### Ejemplo: Configurar Integraciones

:::info Integración de Lista Negra
La función de lista negra te permite conectar una base de datos externa. Los usuarios encontrados en esta base de datos serán prevenidos de completar la incorporación. Establece `source` en "API" o "CSV" y configura los detalles de conexión apropiados.
:::

### Fuentes de Integración

-   **NONE** - Sin integración externa
-   **API** - Conectar a un endpoint de API RESTful
-   **CSV** - Cargar un archivo CSV (próximamente)

### Estrategias de Integración

-   **none** - Permitir que todos los usuarios se inscriban
-   **blacklist** - Prevenir que usuarios encontrados en la base de datos externa se inscriban

---

## Paso 6: Personalización de Interfaz de Usuario

Personaliza la apariencia visual de tu flujo de incorporación para que coincida con la identidad de tu marca. Este paso es opcional pero recomendado para una experiencia de usuario fluida.
