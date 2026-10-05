---
id: "es-docs-es-resources-personas-crear-una-persona-ejemplo-de-respuesta-2"
title: "Crear una Persona — Ejemplo de Respuesta"
sourcePath: "docs-es/resources/personas/crear-una-persona.mdx"
locale: "es"
category: "resources"
tags:
  - "face-recognition"
  - "resources"
endpoint: "/v2/face-recognition/persons"
sourceAnchor: "Ejemplo de Respuesta"
slug: "/resources/crear-una-persona"
url: "https://docs.verifik.co/verifik-es/resources/crear-una-persona"
---

# Crear una Persona
**API path(s):** /v2/face-recognition/persons

## Ejemplo de Respuesta

```json

let headers = [
  "Accept": "application/json",
  "Authorization": "JWT token",
  "Content-Type": "application/json"
]

let parameters = [
  "name": "John Doe",
  "images": [
    "base64_encoded_image_1",
    "base64_encoded_image_2"
  ],
  "gender": "M",
  "date_of_birth": "1990-01-15",
  "nationality": "US",
  "collections": ["collection_123456789"],
  "notes": "Cliente VIP"
] as [String : Any]

let postData = try? JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://api.verifik.co/v2/face-recognition/persons")! as URL,
                                        cachePolicy: .useProtocolCachePolicy,
                                    timeoutInterval: 10.0)
request.httpMethod = "POST"
request.allHTTPHeaderFields = headers
request.httpBody = postData

let session = URLSession.shared
let dataTask = session.dataTask(with: request as URLRequest, completionHandler: { (data, response, error) -> Void in
  if (error != nil) {
    print(error as Any)
  } else {
    let httpResponse = response as? HTTPURLResponse
    print(httpResponse)
  }
})

dataTask.resume()
```

### Respuesta

  

```json
{
  "success": true,
  "data": {
    "_id": "person_123456789",
    "name": "John Doe",
    "gender": "M",
    "date_of_birth": {
      "year": 1990,
      "month": 1,
      "day": 15
    },
    "nationality": "US",
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
}
```

  
  

El nombre y la fecha de nacimiento ya están enrolados en la colección solicitada. `data` es la persona existente para que puedas actualizar o verificar 1:1 en lugar de adivinar con una búsqueda 1:N.

```json
{
  "message": "person_already_set",
  "code": "PreconditionFailed",
  "data": {
    "_id": "693c646dfd68b59e4e8d1d58",
    "name": "Maria Perez",
    "date_of_birth": "1994-02-07",
    "gender": "F",
    "collections": [
      {
        "_id": "6612a020a55c329bfb3f62e6",
        "code": "ed27d231-b437-42c5-94c5-a2130c447d1e",
        "name": "CholloApp"
      }
    ],
    "thumbnails": [
      {
        "id": "thumb-1",
        "thumbnail": ""
      }
    ]
  }
}
```

`thumbnails` son los recortes de la cara ya enrolada, para que puedas mostrar esa persona junto a la foto que acabas de intentar enrolar. También puedes encontrar el mismo registro con [Buscar una Persona por Nombre](/resources/lookup-a-person). Payloads de imagen muy cortos aún pueden devolver `412` con `"message": "only_images_in_base64"`.

  
  

```json
{
  "error": "Formato de imagen inválido",
  "message": "INVALID_IMAGE_FORMAT"
}
```

  
  

```json
{
  "error": "El nombre de la persona es requerido",
  "message": "NAME_REQUIRED"
}
```
