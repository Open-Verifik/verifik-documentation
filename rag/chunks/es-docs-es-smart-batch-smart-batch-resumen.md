---
id: "es-docs-es-smart-batch-smart-batch-resumen"
title: "SmartBatch — Resumen"
sourcePath: "docs-es/smart-batch/smart-batch.md"
locale: "es"
category: "smart-batch"
tags:
  - "smart-batch"
sourceAnchor: "Resumen"
slug: "/smart-batch"
url: "https://docs.verifik.co/verifik-es/smart-batch"
---

# SmartBatch

## Resumen

**SmartBatch** ejecuta una o muchas consultas del catálogo como un lote. Eliges los endpoints, mapeas los campos de entrada y decides cómo debe correr el lote. Úsalo desde la UI de Smart-Agent en [ai.verifik.co](https://ai.verifik.co) o desde la API en [async.verifik.co](https://async.verifik.co).

Una **configuración de lote** es la receta reutilizable: nombre, país, pasos (features del catálogo), estrategia de fusión, modo de ejecución y notificaciones opcionales. Cada vez que subes un archivo o encolas una consulta, SmartBatch crea un lote a partir de esa receta.

## Resumen

SmartBatch se apoya en el mismo catálogo de SmartCheck que ya usas. Sync espera en la petición actual. Async responde de inmediato y sigue trabajando después de que cierres la pestaña. Los lotes por archivo y las llamadas API de una fila comparten el mismo worker cuando la configuración es **Async**.

¿Necesitas llamar un path del catálogo como cola desde tu backend? Consulta [Llamar endpoints como cola (async)](/verifik-es/smart-batch/async-queue).

## Características principales

  
    
      
        Async
      
      
        Corre en segundo plano. Puedes cerrar esta pestaña; seguimos procesando el lote.
      
    
  
  
    
      
        Sync
      
      
        Corre en el servidor como una cadena de pasos conectados. Ideal si un paso necesita el resultado del anterior.
      
    
  
  
    
      
        Pasos del catálogo
      
      
        Agrega cualquier endpoint de SmartCheck con URL de catálogo como paso de verificación.
      
    
  

  
    
      
        Notificaciones
      
      
        La URL del webhook y los correos al completar viven en la configuración, no como parámetros de consulta.
      
    
  
  
    
      
        Archivo o API
      
      
        Sube una hoja de cálculo o encola una fila con type=queue. Ambos reutilizan el mismo worker Async.
      
    
  
  
    
      
        Dashboard
      
      
        Revisa el progreso, los intentos, el costo por fila y el webhook vinculado desde el dashboard del lote.
