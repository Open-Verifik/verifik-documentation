---
id: "es-docs-es-biometrics-liveness-score-endpoint"
title: "Puntaje de Vitalidad — Endpoint"
sourcePath: "docs-es/biometrics/liveness-score.mdx"
locale: "es"
category: "biometrics"
tags:
  - "biometrics"
  - "face-recognition"
endpoints:
  - "/v2/face-recognition/liveness"
  - "/v2/face-recognition/liveness-score"
sourceAnchor: "Endpoint"
slug: "/puntaje-vitalidad"
url: "https://docs.verifik.co/verifik-es/puntaje-vitalidad"
---

# Puntaje de Vitalidad
**API path(s):** /v2/face-recognition/liveness, /v2/face-recognition/liveness-score

## Endpoint

```
POST https://api.verifik.co/v2/face-recognition/liveness-score
```

Devuelve un puntaje de vitalidad y un resultado de aprobado/rechazado para una imagen facial usando el stack de detección de ataques de presentación (PAD) de Verifik. Úsalo cuando necesites el contrato de vitalidad enfocado en el puntaje.

**Estabilidad de la API:** Este es un **endpoint público de producción**. Los contratos de solicitud y respuesta siguen la política estándar de cambios y deprecación de Verifik. La facturación usa el mismo AppFeature que [`POST /v2/face-recognition/liveness`](/verifik-es/deteccion-vitalidad).

### vs `/liveness`

| | `POST .../liveness` | `POST .../liveness-score` |
| --- | --- | --- |
| Uso | Detección de vitalidad estándar | Respuesta de vitalidad enfocada en el puntaje |
| Facturación | AppFeature de liveness | El mismo AppFeature (ruta reescrita para créditos) |
| Cuerpo | `os`, `image`, opcionales `collection_id`, `liveness_min_score` | Igual |

### Detección de ataques de presentación (PAD)

La vitalidad facial de Verifik (incluido este endpoint y [`/liveness`](/verifik-es/deteccion-vitalidad)) usa nuestro stack biométrico con detección de ataques de presentación (PAD). La vitalidad está **certificada iBeta Level 2** y alineada con **ISO 30107 Level 1 y Level 2**. Está diseñada para detectar vectores de spoofing comunes como **fotos impresas, reproducción de video y máscaras 3D**, mediante una verificación de vitalidad de una sola imagen.

### Headers

| Name | Value |
| --- | --- |
| Content-Type | `application/json` |
| Authorization | `Bearer ` |
