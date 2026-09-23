---
id: "es-docs-es-resources-personas-el-objeto-persona-descripcion-general"
title: "El Objeto Persona — Descripción General"
sourcePath: "docs-es/resources/personas/el-objeto-persona.mdx"
locale: "es"
category: "resources"
tags:
  - "resources"
sourceAnchor: "Descripción General"
slug: "/resources/el-objeto-persona"
url: "https://docs.verifik.co/verifik-es/resources/el-objeto-persona"
---

# El Objeto Persona

## Descripción General

El objeto Persona representa individuos en el sistema de reconocimiento facial. Este objeto contiene toda la información necesaria para gestionar y rastrear personas dentro de tus proyectos de Verifik.

### Atributos

#### `name`

**Tipo:** String  
**Requerido:** Requerido

Nombre de la persona que vas a agregar a la BD.

#### `gender`

**Tipo:** String  
**Requerido:** Requerido

Género de la persona que vas a agregar a la BD. Opciones: `M` (Masculino) o `F` (Femenino).

#### `date_of_birth`

**Tipo:** Object  
**Requerido:** Requerido

Fecha de nacimiento de la persona que vas a agregar a la BD.

#### `nationality`

**Tipo:** String  
**Requerido:** Requerido

Nacionalidad de la persona que vas a agregar a la BD.

#### `images`

**Tipo:** Array de String  
**Requerido:** Requerido

Imágenes codificadas en Base64 para reconocimiento facial. Se pueden proporcionar múltiples imágenes para mejor precisión de reconocimiento.

#### `collections`

**Tipo:** Array de string (reference id)  
**Requerido:** Opcional

Array de IDs de colección relacionados con esta persona. Las colecciones ayudan a organizar personas en grupos.

#### `notes`

**Tipo:** String  
**Requerido:** Opcional

Notas adicionales sobre la persona.

#### `client`

**Tipo:** string (reference id)  
**Requerido:** Requerido

Referencia al cliente que posee este registro de persona.

#### `status`

**Tipo:** String  
**Requerido:** Opcional

Estado del registro de persona. Puede ser:

* `active` - La persona está activa en el sistema
* `inactive` - La persona está inactiva
* `pending` - El registro de persona está pendiente de aprobación

#### `faceEncodings`

**Tipo:** Array  
**Requerido:** Opcional

Codificaciones faciales computadas para reconocimiento facial (generadas automáticamente).

#### `createdAt`

**Tipo:** Date  
**Requerido:** Requerido

Marca de tiempo cuando se creó el registro de persona.

#### `updatedAt`

**Tipo:** Date  
**Requerido:** Requerido

Marca de tiempo cuando se actualizó el registro de persona por última vez.
