---
id: "es-docs-es-smart-enroll-auto-alojado-smart-enroll-auto-alojado-requisitos-de-paso-6"
title: "SmartEnroll: Auto-alojado — Requisitos de Paso"
sourcePath: "docs-es/smart-enroll-auto-alojado/smart-enroll-auto-alojado.md"
locale: "es"
category: "smart-enroll-auto-alojado"
tags:
  - "smart-enroll-auto-alojado"
endpoint: "/v3"
sourceAnchor: "Requisitos de Paso"
slug: "/smart-enroll-auto-alojado"
url: "https://docs.verifik.co/verifik-es/smart-enroll-auto-alojado"
---

# SmartEnroll: Auto-alojado
**API path(s):** /v3

La **API de SmartEnroll** proporciona acceso programático a toda la funcionalidad de SmartEnroll, permitiéndote construir flujos personalizados de KYC e incorporación que se integran perfectamente con tus sistemas existentes. Esta solución es perfecta para empresas que necesitan más control sobre la experiencia del usuario o desean integrar la incorporación en sus aplicaciones existentes.

## Requisitos de Paso

-   **mandatory** - Los usuarios deben completar la verificación de documentos para proceder
-   **optional** - Los usuarios pueden optar por omitir la verificación de documentos
-   **skip** - La verificación de documentos no se incluye en el flujo

---

## Paso 4: Detección de Vivacidad

Configura la verificación biométrica para asegurar que los usuarios estén físicamente presentes durante la incorporación. Este paso utiliza reconocimiento facial y detección de vivacidad para prevenir fraude.

### Lo que Configurarás

-   **Requisito del Paso de Vivacidad** - Si la verificación biométrica es obligatoria, opcional u omitida
-   **Límite de Intentos** - Número máximo de intentos de verificación de vivacidad (1-5)
-   **Puntuación de Vivacidad** - Puntuación mínima para confirmar que el usuario está vivo (0.52 - 0.90)
-   **Puntuación de Comparación** - Puntuación mínima para hacer coincidir el rostro con la foto del documento (`0.65`–`0.95`; por defecto `0.85`). Los retratos impresos (cédulas colombianas desgastadas y documentos similares en otros países) suelen puntuar más bajo frente a un selfie en vivo; `0.65` es el mínimo hospedado si aceptas más riesgo de falsos aceptados.
-   **Modo de Búsqueda** - Equilibrio entre velocidad y precisión (FAST o ACCURATE)

### Ejemplo: Configurar Detección de Vivacidad

:::tip Puntuaciones de Vivacidad

-   **minScore (0.65 recomendado)** - Puntuaciones más bajas funcionan con cámaras de baja calidad pero pueden aumentar falsos positivos
-   **searchMinScore (0.80 recomendado)** - Puntuaciones más altas proporcionan mejor coincidencia rostro-a-documento pero requieren mejor calidad de imagen

Comienza con valores recomendados y ajusta según tus requisitos de seguridad y retroalimentación de experiencia de usuario.
:::
