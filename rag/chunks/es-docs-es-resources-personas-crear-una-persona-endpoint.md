---
id: "es-docs-es-resources-personas-crear-una-persona-endpoint"
title: "Crear una Persona — Endpoint"
sourcePath: "docs-es/resources/personas/crear-una-persona.mdx"
locale: "es"
category: "resources"
tags:
  - "face-recognition"
  - "resources"
endpoint: "/v2/face-recognition/persons"
sourceAnchor: "Endpoint"
slug: "/resources/crear-una-persona"
url: "https://docs.verifik.co/verifik-es/resources/crear-una-persona"
---

# Crear una Persona
**API path(s):** /v2/face-recognition/persons

## Endpoint

```
https://api.verifik.co/v2/face-recognition/persons
```

La API de Crear Persona te permite crear una nueva persona dentro del sistema de reconocimiento facial. Puedes asociar una persona con su nombre, imágenes, género, fecha de nacimiento, nacionalidad, colecciones y notas adicionales.

#### Encabezados

#### `Content-Type`

**Tipo:** String  
**Requerido:** Requerido  
**Valor:** `application/json`

#### `Authorization`

**Tipo:** String  
**Requerido:** Requerido  
**Valor:** `Bearer `

#### Parámetros

#### `name`

**Tipo:** String  
**Requerido:** Sí

Nombre completo de la persona.

#### `images`

**Tipo:** Array de String  
**Requerido:** Sí

1–3 imágenes en Base64 (sin prefijo `data:`). Enviar más de una pose (frente + un poco de perfil + otra luz) hace el enrolamiento más robusto.

#### `gender`

**Tipo:** String  
**Requerido:** No

Género de la persona (`M` o `F`).

#### `date_of_birth`

**Tipo:** String (ISO8601)  
**Requerido:** No

Fecha de nacimiento de la persona.

#### `nationality`

**Tipo:** String  
**Requerido:** No

Nacionalidad de la persona.

#### `collections`

**Tipo:** Array de String  
**Requerido:** No

Array de IDs de colección relacionados con esta persona.

#### `notes`

**Tipo:** String  
**Requerido:** No

Notas adicionales sobre la persona.

### Solicitud

  

```javascript

const options = {
  method: 'POST',
  url: 'https://api.verifik.co/v2/face-recognition/persons',
  data: {
    name: "John Doe",
    images: [
      "base64_encoded_image_1",
      "base64_encoded_image_2"
    ],
    gender: "M",
    date_of_birth: "1990-01-15",
    "nationality": "US",
    "collections": ["collection_123456789"],
    "notes": "Cliente VIP"
  },
  headers: {
    Accept: 'application/json',
    Authorization: 'jwt '
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
})

headers = {
    'Accept': "application/json",
    'Authorization': "JWT token",
    'Content-Type': 'application/json'
}

conn.request("POST", "/v2/face-recognition/persons", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

  
  

```php
request('POST', 'https://api.verifik.co/v2/face-recognition/persons', [
  'headers' => [
    'Accept' => 'application/json',
    'Authorization' => 'JWT token',
    'Content-Type' => 'application/json',
  ],
  'json' => [
    'name' => 'John Doe',
    'images' => [
      'base64_encoded_image_1',
      'base64_encoded_image_2'
    ],
    'gender' => 'M',
    'date_of_birth' => '1990-01-15',
    'nationality' => 'US',
    'collections' => ['collection_123456789'],
    'notes' => 'Cliente VIP'
  ]
]);

echo $response->getBody();
```

  
  

```go
package main

	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
)

func main() {
	url := "https://api.verifik.co/v2/face-recognition/persons"

	payload := map[string]interface{}{
		"name":          "John Doe",
		"images":        []string{"base64_encoded_image_1", "base64_encoded_image_2"},
		"gender":        "M",
		"date_of_birth": "1990-01-15",
		"nationality":   "US",
		"collections":   []string{"collection_123456789"},
		"notes":         "Cliente VIP",
	}

	jsonData, _ := json.Marshal(payload)

	req, _ := http.NewRequest("POST", url, bytes.NewBuffer(jsonData))
	req.Header.Add("Accept", "application/json")
	req.Header.Add("Authorization", "JWT token")
	req.Header.Add("Content-Type", "application/json")

	client := &http.Client{}
	res, _ := client.Do(req)
	defer res.Body.Close()

	body, _ := io.ReadAll(res.Body)
	fmt.Println(string(body))
}
```
