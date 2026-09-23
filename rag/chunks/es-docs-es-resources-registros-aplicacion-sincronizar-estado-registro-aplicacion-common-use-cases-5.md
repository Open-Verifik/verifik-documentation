---
id: "es-docs-es-resources-registros-aplicacion-sincronizar-estado-registro-aplicacion-common-use-cases-5"
title: "Sincronizar Estado de Registro de Aplicación — Common Use Cases"
sourcePath: "docs-es/resources/registros-aplicacion/sincronizar-estado-registro-aplicacion.mdx"
locale: "es"
category: "resources"
tags:
  - "app-registrations"
  - "resources"
endpoints:
  - "/v2/app-registrations/${appregistrationid}/sync"
  - "/v2/app-registrations/%s/sync"
  - "/v2/app-registrations/{app_registration_id}/sync"
  - "/v2/app-registrations/{id}/sync"
sourceAnchor: "Common Use Cases"
---

# Sincronizar Estado de Registro de Aplicación
**API path(s):** /v2/app-registrations/${appregistrationid}/sync, /v2/app-registrations/%s/sync, /v2/app-registrations/{app_registration_id}/sync, /v2/app-registrations/{id}/sync

## Common Use Cases

-   **Completar Registro**: Usa el paso `end` con estado `COMPLETED` para finalizar el registro de usuario
-   **Omitir Verificación**: Usa el paso `skipKYC` para omitir requisitos de verificación cuando sea apropiado
-   **Revisión Manual**: Usa el paso `end` con estado `NEEDS_MANUAL_VERIFICATION` para registros marcados
-   **Progresión de Pasos**: Usa pasos intermedios para mover usuarios a través del flujo de registro

Este endpoint proporciona control integral sobre el proceso de registro de aplicación, permitiéndote gestionar la progresión del usuario, manejar casos límite y asegurar la generación adecuada de tokens de autenticación para flujos de incorporación.
