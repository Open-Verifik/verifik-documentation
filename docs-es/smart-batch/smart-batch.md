---
id: smart-batch
title: SmartBatch
description: Ejecuta consultas del catálogo como lote — Async en segundo plano o Sync como cadena de pasos — desde ai.verifik.co o async.verifik.co
slug: /smart-batch
---

import { Layers, Zap, RefreshCw, Bell, FileSpreadsheet, Globe } from 'lucide-react';

# SmartBatch

**SmartBatch** ejecuta una o muchas consultas del catálogo como un lote. Eliges los endpoints, mapeas los campos de entrada y decides cómo debe correr el lote. Úsalo desde la UI de Smart-Agent en [ai.verifik.co](https://ai.verifik.co) o desde la API en [async.verifik.co](https://async.verifik.co).

Una **configuración de lote** es la receta reutilizable: nombre, país, pasos (features del catálogo), estrategia de fusión, modo de ejecución y notificaciones opcionales. Cada vez que subes un archivo o encolas una consulta, SmartBatch crea un lote a partir de esa receta.

## Resumen

SmartBatch se apoya en el mismo catálogo de SmartCheck que ya usas. Sync espera en la petición actual. Async responde de inmediato y sigue trabajando después de que cierres la pestaña. Los lotes por archivo y las llamadas API de una fila comparten el mismo worker cuando la configuración es **Async**.

¿Necesitas llamar un path del catálogo como cola desde tu backend? Consulta [Llamar endpoints como cola (async)](/verifik-es/smart-batch/async-queue).

## Características principales

<div className="row">
  <div className="col col--4">
    <div className="card">
      <div className="card__header">
        <h3><Zap size={20} style={{display: 'inline', marginRight: '8px'}} />Async</h3>
      </div>
      <div className="card__body">
        <p>Corre en segundo plano. Puedes cerrar esta pestaña; seguimos procesando el lote.</p>
      </div>
    </div>
  </div>
  <div className="col col--4">
    <div className="card">
      <div className="card__header">
        <h3><RefreshCw size={20} style={{display: 'inline', marginRight: '8px'}} />Sync</h3>
      </div>
      <div className="card__body">
        <p>Corre en el servidor como una cadena de pasos conectados. Ideal si un paso necesita el resultado del anterior.</p>
      </div>
    </div>
  </div>
  <div className="col col--4">
    <div className="card">
      <div className="card__header">
        <h3><Layers size={20} style={{display: 'inline', marginRight: '8px'}} />Pasos del catálogo</h3>
      </div>
      <div className="card__body">
        <p>Agrega cualquier endpoint de SmartCheck con URL de catálogo como paso de verificación.</p>
      </div>
    </div>
  </div>
</div>

<div className="row">
  <div className="col col--4">
    <div className="card">
      <div className="card__header">
        <h3><Bell size={20} style={{display: 'inline', marginRight: '8px'}} />Notificaciones</h3>
      </div>
      <div className="card__body">
        <p>La URL del webhook y los correos al completar viven en la configuración, no como parámetros de consulta.</p>
      </div>
    </div>
  </div>
  <div className="col col--4">
    <div className="card">
      <div className="card__header">
        <h3><FileSpreadsheet size={20} style={{display: 'inline', marginRight: '8px'}} />Archivo o API</h3>
      </div>
      <div className="card__body">
        <p>Sube una hoja de cálculo o encola una fila con <code>type=queue</code>. Ambos reutilizan el mismo worker Async.</p>
      </div>
    </div>
  </div>
  <div className="col col--4">
    <div className="card">
      <div className="card__header">
        <h3><Globe size={20} style={{display: 'inline', marginRight: '8px'}} />Dashboard</h3>
      </div>
      <div className="card__body">
        <p>Revisa el progreso, los intentos, el costo por fila y el webhook vinculado desde el dashboard del lote.</p>
      </div>
    </div>
  </div>
</div>

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

### 3. Revisar parámetros

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

## Relacionado

- [SmartCheck](/verifik-es/verificacion-inteligente) — catálogo de APIs de identidad y datos
- [Llamar endpoints como cola (async)](/verifik-es/smart-batch/async-queue)
