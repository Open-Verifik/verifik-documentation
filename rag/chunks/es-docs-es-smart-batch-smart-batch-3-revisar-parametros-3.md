---
id: "es-docs-es-smart-batch-smart-batch-3-revisar-parametros-3"
title: "SmartBatch — 3. Revisar parámetros"
sourcePath: "docs-es/smart-batch/smart-batch.md"
locale: "es"
category: "smart-batch"
tags:
  - "smart-batch"
sourceAnchor: "3. Revisar parámetros"
slug: "/smart-batch"
url: "https://docs.verifik.co/verifik-es/smart-batch"
---

# SmartBatch

**SmartBatch** ejecuta una o muchas consultas del catálogo como un lote. Eliges los endpoints, mapeas los campos de entrada y decides cómo debe correr el lote. Úsalo desde la UI de Smart-Agent en [ai.verifik.co](https://ai.verifik.co) o desde la API en [async.verifik.co](https://async.verifik.co).
Una **configuración de lote** es la receta reutilizable: nombre, país, pasos (features del catálogo), estrategia de fusión, modo de ejecución y notificaciones opcionales. Cada vez que subes un archivo o encolas una consulta, SmartBatch crea un lote a partir de esa receta.

## 3. Revisar parámetros

Confirma los parámetros requeridos de cada paso. Esos campos se mapean desde los encabezados del archivo que subas (o desde el `inputData` de la API cuando encolas una sola fila).

### 4. Revisar y crear

Revisa el resumen. Opcionalmente abre **Notificaciones**:

- **URL del webhook** — Enviamos por POST los eventos de fila y lote completados a esta dirección. Prueba la URL antes de continuar.
- **Correos al completar** — Direcciones opcionales que reciben un mensaje cuando el lote termina.

Guarda la configuración. Las notificaciones quedan en la config. Las llamadas posteriores con `type=queue` reutilizan la config Async correspondiente (`Queue …`) en lugar de crear una nueva cada vez.

## Ejecutar y vigilar un lote

Desde la configuración puedes subir un archivo o iniciar una ejecución. El **dashboard** muestra:

- Estado y progreso por fila
- Historial de intentos de cada fila
- Costo por fila
- El webhook vinculado (clic para ir a Smart Monitor)

Las configuraciones de lote vinculadas también aparecen en la lista y el detalle de webhooks de Smart Monitor.

## Lotes por archivo y llamadas API de una fila

| Cómo empiezas | Host | Resultado |
| --- | --- | --- |
| Subes un archivo en Smart-Agent | [ai.verifik.co](https://ai.verifik.co) | Un lote con N filas |
| `GET`/`POST` al path del catálogo con `type=queue` | [async.verifik.co](https://async.verifik.co) | `202` y un lote de una fila |

Cuando la configuración es **Async**, ambos caminos usan el mismo worker en segundo plano. Consulta [Llamar endpoints como cola (async)](/verifik-es/smart-batch/async-queue) para la API de la A a la Z.
