---
id: "es-docs-es-recursos-webhooks-el-objeto-de-webhook-descripcion"
title: "El Objeto de Webhook — Descripción"
sourcePath: "docs-es/recursos/webhooks/el-objeto-de-webhook.mdx"
locale: "es"
category: "recursos"
tags:
  - "recursos"
sourceAnchor: "Descripción"
slug: "/recursos/webhooks/el-objeto-de-webhook"
url: "https://docs.verifik.co/verifik-es/recursos/webhooks/el-objeto-de-webhook"
---

# El Objeto de Webhook

## Descripción

El objeto Webhook representa configuraciones de webhooks para recibir notificaciones desde Verifik hacia tu backend.

### Atributos

#### `client`

**Tipo:** string (reference id)  
**Requerido:** Sí

Referencia al cliente asociado con el webhook. Este es un campo requerido que vincula el webhook a un cliente específico.

#### `projectFlow`

**Tipo:** Array of string (reference id)  
**Requerido:** No

Arreglo de referencias a objetos `ProjectFlow`. Si no se proporcionan flujos de proyecto, este campo por defecto es un arreglo vacío.

#### `statistics`

**Tipo:** Object  
**Requerido:** No

Almacena datos estadísticos relacionados con el webhook. Por defecto, este campo es un objeto vacío `{}`.

#### `isActive`

**Tipo:** Boolean  
**Requerido:** Sí

Indica si el webhook está activo. Este es un campo requerido y debe establecerse como `true` o `false`.

#### `name`

**Tipo:** String  
**Requerido:** Sí

El nombre del webhook. Este es un campo requerido y debe proporcionarse como una cadena de texto.

#### `url`

**Tipo:** String  
**Requerido:** Sí

El endpoint URL al que el webhook enviará notificaciones. Este es un campo requerido y debe proporcionarse como una cadena válida.

#### `description`

**Tipo:** String  
**Requerido:** No

Una breve descripción del webhook. Este es un campo opcional y puede usarse para agregar más contexto o detalles sobre el webhook.

#### `notification`

**Tipo:** Object  
**Requerido:** No

Contiene configuraciones de notificación para el webhook. El objeto tiene los siguientes subcampos opcionales:

* **email** - `String` - Opcional - Dirección de correo electrónico a la cual se enviarán las notificaciones.
* **success** - `Boolean` - Opcional - Indica si se enviarán notificaciones en eventos exitosos. Por defecto es `false`.
* **fail** - `Boolean` - Opcional - Indica si se enviarán notificaciones en eventos fallidos. Por defecto es `true`.
