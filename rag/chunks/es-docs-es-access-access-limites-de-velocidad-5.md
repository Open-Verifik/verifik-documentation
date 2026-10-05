---
id: "es-docs-es-access-access-limites-de-velocidad-5"
title: "Access — Límites de Velocidad"
sourcePath: "docs-es/access/access.md"
locale: "es"
category: "access"
tags:
  - "access"
endpoint: "/v2/access"
sourceAnchor: "Límites de Velocidad"
slug: "/acceso"
url: "https://docs.verifik.co/verifik-es/acceso"
---

# Access
**API path(s):** /v2/access

Todo lo que Acceso Inteligente tiene para ofrecer pero a nivel de API, dando la flexibilidad de codificar una solución personalizada basada en las necesidades de tu empresa.

## Límites de Velocidad

- **OTP de Correo**: 5 solicitudes por minuto por correo electrónico
- **OTP de Teléfono**: 3 solicitudes por minuto por número de teléfono
- **Biométrico**: 10 solicitudes por minuto por usuario

## Características de Seguridad

- **Autenticación de Token JWT**: Acceso seguro a API con tokens de tiempo limitado
- **Limitación de Velocidad**: Protección contra ataques de fuerza bruta
- **Expiración de OTP**: Contraseñas de un solo uso de tiempo limitado
- **Detección de Vida**: Previene ataques de suplantación en autenticación biométrica
- **Notificaciones de Webhook**: Monitoreo de eventos de seguridad en tiempo real

## Mejores Prácticas

1. **Siempre valida respuestas**: Verifica el campo `success` antes de procesar datos
2. **Maneja errores elegantemente**: Implementa manejo de errores apropiado para todas las llamadas de API
3. **Almacena tokens de forma segura**: Nunca expongas tokens JWT en código del lado del cliente
4. **Implementa lógica de reintento**: Maneja fallas temporales con retroceso exponencial
5. **Monitorea límites de velocidad**: Rastrea el uso de API para evitar alcanzar límites de velocidad

## Soporte

Para soporte técnico y documentación de API, contacta a nuestro equipo de soporte o visita nuestro portal de desarrolladores.

---

:::tip Consejo Pro
Comienza con la configuración de la aplicación web para la implementación más rápida, luego usa la API para integraciones personalizadas y características avanzadas.
:::

:::warning Aviso de Seguridad
Siempre usa HTTPS en producción y nunca expongas credenciales sensibles en código del lado del cliente.
:::
