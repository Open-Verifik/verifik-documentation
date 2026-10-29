---
id: "es-docs-es-biometrics-face-image-requirements-requisitos-de-la-imagen-para-vitalidad"
title: "Requisitos de la imagen facial — Requisitos de la imagen para vitalidad"
sourcePath: "docs-es/biometrics/face-image-requirements.mdx"
locale: "es"
category: "biometrics"
tags:
  - "biometrics"
sourceAnchor: "Requisitos de la imagen para vitalidad"
slug: "/requisitos-imagen-facial"
url: "https://docs.verifik.co/verifik-es/requisitos-imagen-facial"
---

# Requisitos de la imagen facial

## Requisitos de la imagen para vitalidad

Cada llamada de vitalidad y de búsqueda facial es tan buena como la imagen que envías. Esta página reúne las reglas de captura, los umbrales de puntaje que Verifik aplica y los motivos de rechazo exactos que puedes esperar, para que ajustes tu interfaz de captura antes de salir a producción.

Aplica a los endpoints de vitalidad ([`/liveness`](/verifik-es/deteccion-vitalidad), [`/liveness-score`](/verifik-es/puntaje-vitalidad)), a los endpoints de búsqueda facial ([`/search`](/verifik-es/buscar), [`/search-live-face`](/verifik-es/buscar-cara-en-vivo), [`/search-active-user`](/verifik-es/buscar-usuario-activo), [`/search-crops`](/verifik-es/buscar-recortes)) y a los endpoints de comparación facial ([`/compare`](/verifik-es/comparar), [`/compare-live`](/verifik-es/comparar-en-vivo), [`/compare-with-liveness`](/verifik-es/comparar-con-deteccion-vitalidad)). SmartEnroll aplica las mismas reglas internamente, así que esta guía también mejora las tasas de finalización del onboarding.

### Requisitos de la imagen para vitalidad

La vitalidad es más estricta que la simple comparación facial. Para asegurar que impresiones en alta resolución, máscaras y reproducciones de video no puedan suplantar la verificación, el fotograma enviado debe cumplir todo lo siguiente:

- Debe haber solo un rostro principal en la imagen. Debe estar completamente visible dentro del encuadre y totalmente descubierto, sin oclusiones. No se permite recorte. Los rostros pequeños del fondo no se tienen en cuenta.
- El tamaño mínimo del recuadro facial que se puede procesar es de **224x224 píxeles**.
- El margen entre el recuadro facial y los bordes de la imagen debe ser de al menos **25 píxeles**.
- La distancia entre las pupilas debe ser de al menos **80 píxeles**.
- El ángulo de rotación fuera del plano (inclinación y giro del rostro) no debe superar los **±30 grados**.
- No se admiten lentes de ojo de pez ni gafas de sol.

Un fotograma que incumpla cualquiera de estas reglas se rechaza por calidad antes de recibir un puntaje. Ese resultado es distinto de un puntaje bajo, y conviene tratarlos de forma diferente en tu interfaz: el usuario puede corregir un problema de calidad volviendo a capturar, mientras que un puntaje bajo significa que el fotograma era utilizable pero no pareció real.
