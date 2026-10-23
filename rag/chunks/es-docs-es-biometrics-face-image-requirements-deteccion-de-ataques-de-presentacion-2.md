---
id: "es-docs-es-biometrics-face-image-requirements-deteccion-de-ataques-de-presentacion-2"
title: "Requisitos de la imagen facial — Detección de ataques de presentación"
sourcePath: "docs-es/biometrics/face-image-requirements.mdx"
locale: "es"
category: "biometrics"
tags:
  - "biometrics"
sourceAnchor: "Detección de ataques de presentación"
slug: "/requisitos-imagen-facial"
url: "https://docs.verifik.co/verifik-es/requisitos-imagen-facial"
---

# Requisitos de la imagen facial

## Detección de ataques de presentación

La vitalidad facial de Verifik utiliza detección de ataques de presentación (PAD) y cuenta con **certificación iBeta Nivel 2**, alineada con **ISO 30107-3**. El motor subyacente reporta una Tasa de Error de Clasificación de Ataques de Presentación (APCER) del 0% frente al conjunto de ataques de iBeta Nivel 2, que cubre fotografías impresas, reproducción en pantalla y video, y máscaras 3D.

### Umbrales

Verifik aplica sus propios umbrales por encima del motor de reconocimiento, por lo que los valores siguientes son los que realmente rigen tus solicitudes.

#### Vitalidad

| Comportamiento | Valor |
| --- | --- |
| Parámetro | `liveness_min_score` |
| Valor por defecto | `0.6` |
| Rango aceptado | `0.5` – `1.0` |
| Regla de aprobación | `liveness_score > liveness_min_score` (estrictamente mayor que) |
| Valor por defecto en SmartEnroll | `0.65`, configurable por flujo de proyecto |

Observa que la regla de aprobación es una comparación estricta. Un puntaje de exactamente `0.6` frente a un umbral de `0.6` es un rechazo, no una aprobación.

El motor subyacente considera real un puntaje `>= 0.5`. El valor por defecto de Verifik de `0.6` es deliberadamente más estricto, y el piso de `0.5` implica que no puedes configurar un umbral más laxo que el del propio motor. Una excepción: [`/compare-live`](/verifik-es/comparar-en-vivo) eleva ese piso a `0.52`.

#### Búsqueda facial

| Parámetro | Obligatorio | Valor por defecto | Rango |
| --- | --- | --- | --- |
| `min_score` | Sí | Ninguno — debes enviarlo | `0.2` – `1.0` en `/search`, `0.5` – `1.0` en las variantes con rostro en vivo |
| `search_mode` | Sí | Ninguno — debes enviarlo | `FAST` o `ACCURATE` |
| `max_results` | No | `10` | Hasta `100` |

Los resultados se devuelven ordenados por puntaje de similitud descendente, y solo se incluyen las coincidencias por encima de `min_score`. El puntaje es un número entre 0 y 1, donde 1 es una coincidencia perfecta y 0 es una discrepancia total.

Hay dos particularidades de Verifik fáciles de pasar por alto. Primero, `min_score` **no tiene valor por defecto**: la solicitud se rechaza con `409 MissingParameter` si lo omites, mientras que el motor subyacente habría aplicado `0.81`. Segundo, `search_mode` es obligatorio y no tiene equivalente en el motor: usa `ACCURATE` para mayor precisión a costa de latencia, y `FAST` cuando la rapidez importa más.
