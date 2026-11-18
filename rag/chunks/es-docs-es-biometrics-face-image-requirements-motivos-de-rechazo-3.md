---
id: "es-docs-es-biometrics-face-image-requirements-motivos-de-rechazo-3"
title: "Requisitos de la imagen facial — Motivos de rechazo"
sourcePath: "docs-es/biometrics/face-image-requirements.mdx"
locale: "es"
category: "biometrics"
tags:
  - "biometrics"
sourceAnchor: "Motivos de rechazo"
slug: "/requisitos-imagen-facial"
url: "https://docs.verifik.co/verifik-es/requisitos-imagen-facial"
---

# Requisitos de la imagen facial

## Motivos de rechazo

Cuando una captura se rechaza por calidad, la respuesta incluye un código de motivo estable. Cada uno corresponde a un requisito concreto de los anteriores, lo que facilita mostrar al usuario una corrección puntual en lugar de un mensaje de error genérico.

| Motivo | Requisito incumplido | Qué decirle al usuario |
| --- | --- | --- |
| `no_face_detected` | Un rostro completamente visible | Ubica tu rostro dentro del encuadre en un lugar bien iluminado |
| `multiple_faces_detected` | Solo un rostro principal | Asegúrate de ser la única persona en el encuadre |
| `face_occluded` | Rostro descubierto, sin oclusiones | Retira cualquier cosa que cubra tu rostro, como mascarilla, gafas o gorra |
| `face_close_to_border` | Margen de 25 píxeles con los bordes | Aléjate un poco y centra tu rostro en el encuadre |
| `face_not_centered` | Margen de 25 píxeles con los bordes | Alinea tu rostro con el centro del encuadre |
| `face_too_far` | Recuadro facial de 224x224, 80 píxeles entre pupilas | Acerca la cámara para que tu rostro ocupe más del encuadre |
| `face_too_close` | Sin recorte, margen de 25 píxeles con los bordes | Aleja un poco la cámara |
| `face_rotation_too_large` | ±30 grados de inclinación y giro | Mira de frente a la cámara y mantén la cabeza recta |
| `poor_lighting` | Rostro completamente visible | Ubícate en un lugar más iluminado y evita luces fuertes detrás de ti |

Otros dos motivos no corresponden a problemas de captura:

- `liveness_failed` — el fotograma era utilizable y recibió un puntaje, pero no superó el umbral. El puntaje se incluye en la respuesta para que puedas mostrarlo.
- `liveness_error` — la verificación no pudo completarse por una razón que no se puede atribuir a la captura. Trátalo como reintentable.
