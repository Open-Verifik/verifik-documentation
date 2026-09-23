---
id: "es-docs-es-validacion-vehiculos-chile-caracteristicas-generales-4"
title: "🇨🇱 Chile - Información de Vehículos — Características Generales"
sourcePath: "docs-es/validacion-vehiculos/chile.mdx"
locale: "es"
category: "validacion-vehiculos"
tags:
  - "cl"
  - "validacion-vehiculos"
endpoints:
  - "/v2/cl/vehicle"
  - "/v2/cl/vehicle-soap"
  - "/v2/cl/vehicle/v3"
  - "/v2/cl/vehicle?plate=bbcc12"
sourceAnchor: "Características Generales"
slug: "/validacion-vehiculos/chile"
url: "https://docs.verifik.co/verifik-es/validacion-vehiculos/chile"
---

# 🇨🇱 Chile - Información de Vehículos
**API path(s):** /v2/cl/vehicle, /v2/cl/vehicle-soap, /v2/cl/vehicle/v3, /v2/cl/vehicle?plate=bbcc12

El servicio de validación de vehículos chilenos proporciona capacidades de verificación integrales para información vehicular. Este servicio te permite recuperar información detallada sobre vehículos registrados en Chile.
Endpoints vehiculares relacionados en Chile:
- **Información vehicular (`v2/cl/vehicle`)**: consulta comercial (Reale / getapi). Un **404** significa que la placa no está en esa fuente, no una caída del servicio.
- **Revisión técnica vehicular (`v3/cl/vehicle`)**: estado e historial de inspecciones técnicas. Ver [Chile - Revisión técnica vehicular](/verifik-es/validacion-vehiculos/chile/vehicle-technical-review). Usa esta ruta para ficha técnica / revisión (`GET /v3/cl/vehicle`, no `/v2/cl/vehicle/v3`).
- **SOAP vehicular (`v2/cl/vehicle-soap`)**: certificado de seguro obligatorio de accidentes personales. Ver [Chile - SOAP vehicular](/verifik-es/validacion-vehiculos/chile/vehicle-soap).

## Características Generales

-   **Múltiples Lenguajes de Programación**: Soporte para JavaScript, Python, PHP y Swift
-   **Datos en Tiempo Real**: Acceder a información actual y actualizada
-   **Manejo Completo de Errores**: Respuestas de error detalladas para varios escenarios
-   **Respuestas Estructuradas**: Respuestas JSON bien formateadas con verificación de firma
-   **Consulta comercial**: Devuelve datos cuando Reale / getapi tiene la placa; si no está, responde 404 y no es una caída
