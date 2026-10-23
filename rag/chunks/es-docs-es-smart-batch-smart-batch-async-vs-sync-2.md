---
id: "es-docs-es-smart-batch-smart-batch-async-vs-sync-2"
title: "SmartBatch — Async vs Sync"
sourcePath: "docs-es/smart-batch/smart-batch.md"
locale: "es"
category: "smart-batch"
tags:
  - "smart-batch"
sourceAnchor: "Async vs Sync"
slug: "/smart-batch"
url: "https://docs.verifik.co/verifik-es/smart-batch"
---

# SmartBatch

**SmartBatch** ejecuta una o muchas consultas del catálogo como un lote. Eliges los endpoints, mapeas los campos de entrada y decides cómo debe correr el lote. Úsalo desde la UI de Smart-Agent en [ai.verifik.co](https://ai.verifik.co) o desde la API en [async.verifik.co](https://async.verifik.co).
Una **configuración de lote** es la receta reutilizable: nombre, país, pasos (features del catálogo), estrategia de fusión, modo de ejecución y notificaciones opcionales. Cada vez que subes un archivo o encolas una consulta, SmartBatch crea un lote a partir de esa receta.

## Async vs Sync

El asistente y el dashboard usan las etiquetas de producto **Async** y **Sync**.

| Modo de ejecución | Qué ocurre | Cuándo usarlo |
| --- | --- | --- |
| **Async** (predeterminado) | El lote corre en segundo plano. Puedes cerrar la pestaña de Smart-Agent. Un worker reclama cada fila, llama la URL del feature y registra el intento. | Consultas fire-and-forget, archivos grandes, flujos con webhook. |
| **Sync** | El servidor ejecuta los pasos como una cadena conectada y espera cada resultado. Los pasos posteriores pueden usar salidas anteriores. | Recetas de varios pasos donde el paso 2 depende del paso 1. |

Los créditos se cobran cuando el feature realmente corre (la llamada del worker en Async, la llamada del paso en Sync), no cuando encolas una fila.

:::note Valores de `type` en la API
En `async.verifik.co`, omite `type` o envía `type=sync` para esperar el resultado. Envía `type=queue` para encolar. Esos valores corresponden a la misma idea Async / Sync. Desde la UI no pasas `queue` ni `featureRunner`.
:::

## Crear una configuración en ai.verifik.co

Abre [https://ai.verifik.co](https://ai.verifik.co), ve a **Smart Batch** y elige **Crear**.

### 1. Información básica

Ingresa el nombre de la configuración, la descripción y el país. Elige el **Modo de ejecución**:

- **Async** — Corre en segundo plano. Puedes cerrar esta pestaña; seguimos procesando el lote.
- **Sync** — Corre en el servidor como una cadena de pasos conectados. Ideal si un paso necesita el resultado del anterior.

Async es el predeterminado.

### 2. Seleccionar endpoints

Busca en el catálogo y agrega los pasos de verificación que necesites. Cada paso es un feature de SmartCheck con URL (identidad, afiliaciones, vehículos, etc.). Los features sin URL de catálogo (passwordless, generadores PDF) no pueden correr como paso de lote.
