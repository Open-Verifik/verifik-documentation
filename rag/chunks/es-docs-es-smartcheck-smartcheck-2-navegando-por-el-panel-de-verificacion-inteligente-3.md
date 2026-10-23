---
id: "es-docs-es-smartcheck-smartcheck-2-navegando-por-el-panel-de-verificacion-inteligente-3"
title: "SmartCheck — 2. Navegando por el Panel de Verificación Inteligente"
sourcePath: "docs-es/smartcheck/smartcheck.md"
locale: "es"
category: "smartcheck"
tags:
  - "smartcheck"
sourceAnchor: "2. Navegando por el Panel de Verificación Inteligente"
slug: "/verificacion-inteligente"
url: "https://docs.verifik.co/verifik-es/verificacion-inteligente"
---

# SmartCheck

## 2. Navegando por el Panel de Verificación Inteligente

El panel de Verificación Inteligente está diseñado para ser intuitivo y fácil de usar:

* **Búsqueda y Filtros de API:** Usa la barra de búsqueda para encontrar rápidamente la API que necesitas escribiendo palabras clave. Los filtros por país y categoría te permiten reducir los servicios disponibles, asegurando que puedas encontrar la API exacta requerida para tu proceso de verificación.
* **Endpoints de API:** Cada endpoint de API se lista con una breve descripción de su funcionalidad, precio por solicitud y países soportados. Hacer clic en un endpoint proporciona información más detallada y un fragmento de código de muestra para fácil integración.

### 3. Realizando una Solicitud de API

Para realizar una solicitud de API, sigue estos pasos:

* **Selecciona la API:** Elige la API apropiada del panel. Por ejemplo, si necesitas verificar la identidad de un ciudadano colombiano, selecciona la API "Información del Ciudadano Colombiano".
* **Ingresa Parámetros:** Ingresa los parámetros requeridos, como tipo de documento y número de documento. La plataforma te guiará sobre las entradas necesarias para asegurar una solicitud exitosa.
* **Prueba la API:** Usa la característica de prueba integrada para enviar la solicitud. Verificación Inteligente devolverá los datos en tiempo real, que puedes revisar tanto en una vista formateada como en JSON sin procesar. Este paso asegura que la API funcione como se espera antes de integrarla en tu sistema.

### 4. Revisando el Informe de Consulta

Una vez que se completa una solicitud de API, Verificación Inteligente genera un informe de consulta. Este informe está disponible en la plataforma y puede ser visto en cualquier momento:

* **Parámetros Utilizados:** El informe detalla los parámetros que se utilizaron en la solicitud, como números de documento y tipos.
* **Resultados:** Los resultados se muestran en un formato sin código para fácil interpretación, listando información relevante como nombres, fechas y estados de verificación. Para desarrolladores, también está disponible una vista JSON, mostrando todos los datos devueltos por la API.
* **Documentación:** Cada informe incluye la documentación necesaria para entender los resultados, incluyendo qué representan los datos y cómo fueron obtenidos.
