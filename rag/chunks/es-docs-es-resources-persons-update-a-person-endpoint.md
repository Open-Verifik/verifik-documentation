---
id: "es-docs-es-resources-persons-update-a-person-endpoint"
title: "Actualizar una Persona — Endpoint"
sourcePath: "docs-es/resources/persons/update-a-person.mdx"
locale: "es"
category: "resources"
tags:
  - "face-recognition"
  - "resources"
endpoints:
  - "/v2/face-recognition/persons/person_123456789"
  - "/v2/face-recognition/persons/{id}"
sourceAnchor: "Endpoint"
slug: "/resources/persons/update-a-person"
url: "https://docs.verifik.co/verifik-es/resources/persons/update-a-person"
---

# Actualizar una Persona
**API path(s):** /v2/face-recognition/persons/person_123456789, /v2/face-recognition/persons/{id}

## Endpoint

```
PUT https://api.verifik.co/v2/face-recognition/persons/{id}
```

Este endpoint te permite actualizar la información de una persona existente en el sistema de reconocimiento facial.

### Encabezados

| Nombre | Valor |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parámetros de Ruta

| Nombre | Tipo | Requerido | Descripción |
| --- | --- | --- | --- |
| `id` | string | Sí | ID de la persona a actualizar |

### Parámetros del Cuerpo

| Nombre | Tipo | Requerido | Descripción |
| --- | --- | --- | --- |
| `name` | string | No | Nombre completo de la persona |
| `images` | array | No | 1–3 imágenes en Base64. **Reemplazan** todas las caras enroladas (no se agregan a las anteriores). |
| `gender` | string | No | Género de la persona (`M` o `F`) |
| `date_of_birth` | string | No | Fecha de nacimiento de la persona (ISO8601) |
| `nationality` | string | No | Nacionalidad de la persona |
| `collections` | array | No | Array de IDs de colección relacionados con esta persona |
| `notes` | string | No | Notas adicionales sobre la persona |

### Ejemplo de Solicitud

  

```javascript

const options = {
  method: 'PUT',
  url: 'https://api.verifik.co/v2/face-recognition/persons/person_123456789',
  data: {
    name: "John Doe Updated",
    gender: "M",
    date_of_birth: "1990-01-15",
    nationality: "US",
    notes: "Cliente VIP - Actualizado"
  },
  headers: {
    Accept: 'application/json',
    Authorization: 'Bearer '
  }
};

try {
  const { data } = await axios.request(options);
  console.log(data);
} catch (error) {
  console.error(error);
}
```

  
  

```python

conn = http.client.HTTPSConnection("api.verifik.co")

payload = json.dumps({
  "name": "John Doe Updated",
  "gender": "M",
  "date_of_birth": "1990-01-15",
  "nationality": "US",
  "notes": "Cliente VIP - Actualizado"
})

headers = {
    'Accept': "application/json",
    'Authorization': "Bearer ",
    'Content-Type': 'application/json'
}

conn.request("PUT", "/v2/face-recognition/persons/person_123456789", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```
