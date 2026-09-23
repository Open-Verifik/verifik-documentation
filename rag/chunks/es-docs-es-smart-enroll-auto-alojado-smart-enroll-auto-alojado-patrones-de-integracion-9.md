---
id: "es-docs-es-smart-enroll-auto-alojado-smart-enroll-auto-alojado-patrones-de-integracion-9"
title: "SmartEnroll: Auto-alojado — Patrones de Integración"
sourcePath: "docs-es/smart-enroll-auto-alojado/smart-enroll-auto-alojado.md"
locale: "es"
category: "smart-enroll-auto-alojado"
tags:
  - "smart-enroll-auto-alojado"
endpoint: "/v3"
sourceAnchor: "Patrones de Integración"
slug: "/smart-enroll-auto-alojado"
url: "https://docs.verifik.co/verifik-es/smart-enroll-auto-alojado"
---

# SmartEnroll: Auto-alojado
**API path(s):** /v3

La **API de SmartEnroll** proporciona acceso programático a toda la funcionalidad de SmartEnroll, permitiéndote construir flujos personalizados de KYC e incorporación que se integran perfectamente con tus sistemas existentes. Esta solución es perfecta para empresas que necesitan más control sobre la experiencia del usuario o desean integrar la incorporación en sus aplicaciones existentes.

## Patrones de Integración

### Configuración Progresiva

Construye tu proyecto paso a paso, siguiendo el flujo de trabajo de la interfaz de SmartEnroll:

1. **Crear** el proyecto con información básica
2. **Configurar** campos del formulario de registro
3. **Establecer** verificación de documentos
4. **Habilitar** detección de vivacidad
5. **Conectar** integraciones y webhooks
6. **Personalizar** marca y apariencia
7. **Activar** el proyecto

Este enfoque proporciona mejor manejo de errores y validación en cada paso.

### Configuración de Solicitud Única

Crea un proyecto completo en una sola llamada a la API si tienes todos los detalles de configuración preparados. Esto es ideal para:

-   Creación automatizada de proyectos
-   Despliegues basados en plantillas
-   Migración desde otros sistemas

:::tip Mejor Práctica
Usa el enfoque progresivo al construir proyectos manualmente o a través de una interfaz de usuario. Usa el enfoque de solicitud única para automatización y plantillas.
:::

---

## Soporte

Para soporte técnico y asistencia con documentación de la API:

-   **Documentación**: Visita nuestro [portal de desarrolladores](https://docs.verifik.co)
-   **Soporte**: Contacta a nuestro equipo de soporte
-   **Estado**: Revisa nuestra [página de estado de API](https://status.verifik.co)

:::tip Obtener Ayuda
Al contactar a soporte, incluye tu ID de proyecto, endpoint de API y detalles de solicitud/respuesta para asistencia más rápida.
:::

:::warning Importante
Siempre prueba tu integración completamente en el ambiente de desarrollo antes de desplegar a producción.
:::
