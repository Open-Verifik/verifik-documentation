---
id: "es-docs-es-biometrics-face-image-requirements-tratamiento-de-los-datos-4"
title: "Requisitos de la imagen facial — Tratamiento de los datos"
sourcePath: "docs-es/biometrics/face-image-requirements.mdx"
locale: "es"
category: "biometrics"
tags:
  - "biometrics"
sourceAnchor: "Tratamiento de los datos"
slug: "/requisitos-imagen-facial"
url: "https://docs.verifik.co/verifik-es/requisitos-imagen-facial"
---

# Requisitos de la imagen facial

## Tratamiento de los datos

Una llamada de vitalidad o de búsqueda es una clasificación puntual. **No** registra el rostro en una colección, por lo que un rostro que solo envías a `/liveness` o `/search` nunca aparecerá en un resultado de búsqueda posterior. Para hacer que un rostro sea buscable, regístralo explícitamente con el endpoint `/person`.

Verifik sí conserva un registro de auditoría de cada llamada — el puntaje, el resultado, el umbral aplicado y metadatos de la solicitud — para que los resultados sigan siendo verificables y facturables después del hecho. Que la imagen enviada se conserve depende del producto: las imágenes capturadas a través de SmartEnroll se almacenan como parte del registro de onboarding, mientras que las imágenes enviadas directamente a los endpoints públicos de vitalidad y búsqueda no se conservan una vez atendida la solicitud.

### Notas

- Conviene separar los rechazos por calidad de los rechazos por puntaje en tu interfaz. Un rechazo por calidad debe invitar a reintentar de inmediato con una indicación concreta; un rechazo por puntaje es un resultado negativo real.
- Los requisitos se expresan en píxeles del recuadro facial, no de la imagen. Una foto en 4K con un rostro de 100 píxeles de ancho sigue incumpliendo la regla de `224x224`.
- Enviar una imagen más grande no mejora el resultado una vez que el recuadro facial supera el mínimo. Prioriza buena iluminación y una pose centrada y frontal sobre la resolución bruta.
- Si tus usuarios usan cámaras web de escritorio, espera más rechazos por calidad que en móvil: las cámaras web de baja resolución producen con frecuencia recuadros faciales por debajo del mínimo.
