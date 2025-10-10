---
id: el-objeto-persona
title: El Objeto Persona
description: El objeto Persona representa individuos en el sistema de reconocimiento facial
---

# El Objeto Persona

El objeto Persona representa individuos en el sistema de reconocimiento facial. Este objeto contiene toda la información necesaria para gestionar y rastrear personas dentro de tus proyectos Verifik.

## Atributos

**`name`** - String - Requerido

Nombre de la persona que vas a agregar a la base de datos.

**`gender`** - String - Requerido

Género de la persona que vas a agregar a la base de datos. Opciones: `M` (Masculino) o `F` (Femenino).

**`date_of_birth`** - Object - Requerido

Fecha de nacimiento de la persona que vas a agregar a la base de datos.

**`nationality`** - String - Requerido

Nacionalidad de la persona que vas a agregar a la base de datos.

**`images`** - Array of String - Requerido

Imágenes codificadas en Base64 para reconocimiento facial. Se pueden proporcionar múltiples imágenes para mejor precisión de reconocimiento.

**`collections`** - Array of String - Opcional

Array de IDs de colección relacionados con esta persona. Las colecciones ayudan a organizar personas en grupos.

**`notes`** - String - Opcional

Notas adicionales sobre la persona.

**`client`** - ObjectId - Requerido

Referencia al cliente que posee este registro de persona.

**`status`** - String - Opcional

Estado del registro de persona. Puede ser:

* `active` - La persona está activa en el sistema
* `inactive` - La persona está inactiva
* `pending` - El registro de persona está pendiente de aprobación

**`faceEncodings`** - Array - Opcional

Codificaciones faciales calculadas para reconocimiento facial (generadas automáticamente).

**`createdAt`** - Date - Requerido

Marca de tiempo cuando se creó el registro de persona.

**`updatedAt`** - Date - Requerido

Marca de tiempo cuando se actualizó por última vez el registro de persona.

## Ejemplo de Objeto

```json
{
  "_id": "person_123456789",
  "name": "Juan Pérez",
  "gender": "M",
  "date_of_birth": {
    "year": 1990,
    "month": 1,
    "day": 15
  },
  "nationality": "CO",
  "images": [
    "base64_encoded_image_1",
    "base64_encoded_image_2"
  ],
  "collections": ["collection_123456789"],
  "notes": "Cliente VIP",
  "client": "client_123456789",
  "status": "active",
  "faceEncodings": [
    "face_encoding_1",
    "face_encoding_2"
  ],
  "createdAt": "2024-01-15T10:30:00Z",
  "updatedAt": "2024-01-15T10:30:00Z"
}
```
