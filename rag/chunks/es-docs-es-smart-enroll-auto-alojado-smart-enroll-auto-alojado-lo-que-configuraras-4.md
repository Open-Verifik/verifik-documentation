---
id: "es-docs-es-smart-enroll-auto-alojado-smart-enroll-auto-alojado-lo-que-configuraras-4"
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

-   **Nombre del Proyecto** - Un nombre descriptivo para tu proyecto KYC
-   **Países Permitidos** - Países donde los usuarios pueden completar la incorporación. Usa nombres de país específicos o `"All"` para permitir todos. Esta lista es independiente de la aceptación de documentos (Paso 3).
-   **Correo de Contacto** - Dirección de correo electrónico para comunicaciones relacionadas con el proyecto
-   **URLs de Privacidad y Términos** - Enlaces a tu política de privacidad y términos de servicio
-   **Información de Protección de Datos** - Detalles sobre tu Oficial de Protección de Datos (requerido para cumplimiento GDPR)

### Ejemplo: Crear un Proyecto Básico

:::tip Información de Protección de Datos
El campo `dataProtection` es requerido para cumplimiento con regulaciones de privacidad como GDPR. Asegúrate de proporcionar información precisa sobre tu Oficial de Protección de Datos o contacto de privacidad.
:::

---

## Paso 2: Formulario de Registro

Configura qué información recopilar de los usuarios cuando comiencen el proceso de incorporación. Este paso determina la recopilación de datos inicial antes de la verificación de documentos.

### Lo que Configurarás

-   **Recopilación de Nombre Completo** - Si recopilar el nombre completo del usuario (requerido)
-   **Formato de Nombre** - Recopilar el nombre como un campo o campos separados de nombre/apellido
-   **Recopilación de Email** - Si recopilar y verificar direcciones de correo electrónico
-   **Pasarela de Email** - Cómo enviar emails de verificación (Mailgun o ninguno)
-   **Recopilación de Teléfono** - Si recopilar y verificar números de teléfono
-   **Pasarela de Teléfono** - Cómo enviar códigos de verificación (SMS, WhatsApp, ambos, o ninguno)
-   **Campos Adicionales** - Campos personalizados específicos para las necesidades de tu negocio
-   **Visualización de Privacidad y Términos** - Si mostrar casillas de consentimiento
