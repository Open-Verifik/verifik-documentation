---
id: "es-docs-es-smartenroll-smartenroll-idioma-de-los-correos-otp-verifik-8"
title: "SmartEnroll — Idioma de los correos OTP / Verifik"
sourcePath: "docs-es/smartenroll/smartenroll.md"
locale: "es"
category: "smartenroll"
tags:
  - "smartenroll"
  - "app-registrations"
endpoint: "/v2/app-registrations/{id}/resend-link"
sourceAnchor: "Idioma de los correos OTP / Verifik"
---

# SmartEnroll
**API path(s):** /v2/app-registrations/{id}/resend-link

**SmartEnroll** es una solución sin código diseñada para proporcionar incorporaciones seguras y fluidas para los usuarios. Esta plataforma permite a las empresas ofrecer diversas verificaciones de incorporación, incluyendo verificación de correo electrónico, teléfono y biométrica, validaciones de documentos, verificaciones AML, verificaciones de manipulación y más. Todas estas características están integradas en nuestro proyecto asegurando una experiencia fácil de usar y segura. Con SmartEnroll, las empresas pueden integrar fácilmente estas soluciones KYC sin la necesidad de codificación compleja o desarrollo de infraestructura.

## Idioma de los correos OTP / Verifik

Seleccionar **Español** (u otro idioma) en el editor de plantillas de correo te permite **personalizar el texto de ese idioma**. **No** obliga por sí solo a que todos los correos se envíen en español.

Los correos OTP en producción usan:

1. El `language` de la sesión del usuario / solicitud API (el SDK envía el idioma activo de la interfaz), o
2. El **idioma predeterminado** del proyecto si se omite `language`, o
3. `en` como último recurso.

Existen textos predeterminados en español cuando el idioma resuelto es `es`; la copia personalizada en la pestaña Español es opcional. Usa **Enviar prueba** en la pestaña Español para previsualizar—eso no cambia por sí solo el idioma de envío en producción.

:::note Idioma de la cuenta del cliente
Cambiar el idioma de la cuenta del cliente en el admin de Verifik **no** controla el idioma de los correos OTP de SmartEnroll.
:::

---

## Reanudar un enrollment incompleto

Si un usuario inicia SmartEnroll hospedado y se va antes de terminar, guarda el `_id` del App Registration y más tarde llama `POST /v2/app-registrations/{id}/resend-link`. Redirígelo a `data.link`. No reutilices un token de creación caducado ni envíes de nuevo el formulario de alta con el mismo correo: eso muestra **already registered**.

Guía completa: [Reanudar un enrollment incompleto](/verifik-es/smartenroll/reanudar). API: [Reenviar enlace de registro de aplicación](/verifik-es/resources/registros-aplicacion/reenviar-enlace-registro-aplicacion).

---

## Mejores Prácticas

### Recomendaciones de Seguridad

1. **Establecer Límites de Intentos Apropiados**: Configura límites de intentos según tus requisitos de seguridad y necesidades de experiencia de usuario.
2. **Usar Puntuaciones Recomendadas**: Comienza con las puntuaciones biométricas recomendadas y ajusta según tus resultados de prueba.
3. **Actualizaciones Regulares de Listas Negras**: Mantén tus listas negras actualizadas para mantener la efectividad de seguridad.
4. **Monitorear Alertas de Webhook**: Configura un monitoreo adecuado para notificaciones de webhook para responder rápidamente a eventos de seguridad.
