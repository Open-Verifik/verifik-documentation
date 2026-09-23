---
id: "es-docs-es-smartenroll-smartenroll-4-registro-biometrico-4"
title: "SmartEnroll — 4. Registro Biométrico"
sourcePath: "docs-es/smartenroll/smartenroll.md"
locale: "es"
category: "smartenroll"
tags:
  - "smartenroll"
  - "app-registrations"
endpoint: "/v2/app-registrations/{id}/resend-link"
sourceAnchor: "4. Registro Biométrico"
---

# SmartEnroll
**API path(s):** /v2/app-registrations/{id}/resend-link

**SmartEnroll** es una solución sin código diseñada para proporcionar incorporaciones seguras y fluidas para los usuarios. Esta plataforma permite a las empresas ofrecer diversas verificaciones de incorporación, incluyendo verificación de correo electrónico, teléfono y biométrica, validaciones de documentos, verificaciones AML, verificaciones de manipulación y más. Todas estas características están integradas en nuestro proyecto asegurando una experiencia fácil de usar y segura. Con SmartEnroll, las empresas pueden integrar fácilmente estas soluciones KYC sin la necesidad de codificación compleja o desarrollo de infraestructura.

## 4. Registro Biométrico

**Registro Biométrico:** Esta es la parte de verificación biométrica del flujo, donde se verifica el rostro del usuario para confirmar su presencia durante el proceso de incorporación.

-   **Establecer un Límite de Intentos**: Especifica cuántas veces un usuario puede fallar la detección de vivacidad antes de ser bloqueado de continuar. Los intentos permitidos se pueden personalizar de 3 a 10.
-   **Puntuación de Vivacidad:** Personaliza el umbral para la detección de vivacidad. Esta puntuación determina qué tan estricto es el sistema al verificar que la entrada biométrica proviene de una persona viva, no de una imagen o video estático. La recomendación predeterminada es del 50%, lo que asegura que la verificación de vivacidad funcione óptimamente en la mayoría de los dispositivos.
-   **Puntuación de Comparación:** Esta puntuación establece la precisión de comparar (1:1) el rostro del usuario final con el documento proporcionado. Una puntuación más alta significa más seguridad, criterios de coincidencia más estrictos y exige un mayor parecido con el usuario para obtener acceso. El valor por defecto / recomendado en el flujo hospedado es **85% (`0.85`)**. SmartEnroll hospedado permite **`0.65`–`0.95`**. La API directa de face-recognition acepta **`0.67`–`0.95`**. Los retratos impresos en documentos suelen estar desgastados, rayados o a baja resolución: algunas cédulas colombianas son especialmente pobres, y el mismo problema de calidad puede aparecer en otros países. Un selfie en vivo vs una foto impresa puntúa más bajo que en vivo vs en vivo. Bajar hacia **65% (`0.65`)** reduce rechazos falsos de usuarios genuinos con documentos de mala calidad; también sube el riesgo de falsos aceptados. Conserva `0.85` salvo que veas fallos reales.

:::warning Aviso de Seguridad
Las puntuaciones más altas proporcionan mejor seguridad pero pueden aumentar las tasas de rechazo falso. Prueba con tu base de usuarios para encontrar el equilibrio óptimo. `cropFace` en servidor no está soportado en las APIs de face-recognition compare: envía imágenes enfocadas en el rostro o recorta en el cliente.
:::

Para leer scores de forma programática tras el enrollment (populates, webhooks, umbrales), consulta la [Guía de API de SmartEnroll](/verifik-es/smartenroll/guia-api).

---
