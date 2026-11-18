---
id: "es-docs-es-biometrics-verificar-cara-respuesta-2"
title: "Verificar cara (1:1 contra persona enrolada) — Respuesta"
sourcePath: "docs-es/biometrics/verificar-cara.mdx"
locale: "es"
category: "biometrics"
tags:
  - "biometrics"
  - "face-recognition"
endpoint: "/v2/face-recognition/verify"
sourceAnchor: "Respuesta"
slug: "/verificar-cara"
url: "https://docs.verifik.co/verifik-es/verificar-cara"
---

# Verificar cara (1:1 contra persona enrolada)
**API path(s):** /v2/face-recognition/verify

## Respuesta

```json
{
  "id": "9DVKW",
  "data": {
    "match": {
      "id": "68defec6a9a7b4933d5652f3",
      "name": "Jane Doe",
      "score": 0.9132,
      "gender": "F",
      "date_of_birth": "1990-01-15",
      "thumbnails": [
        { "id": "thumb-uuid", "thumbnail": "" }
      ],
      "collections": []
    }
  },
  "signature": {
    "message": "Certified by Verifik.co",
    "dateTime": "April 9, 2026 12:12 AM"
  }
}
```

  
  

```json
{
  "message": "Authentication required",
  "code": "UNAUTHORIZED"
}
```

  
  

```json
{
  "message": "token_expired",
  "code": "FORBIDDEN"
}
```

  
  

```json
{
  "message": "\"min_score\" is required",
  "code": "MissingParameter"
}
```

  
  

```json
{
  "message": "internal_error",
  "code": "ERROR"
}
```

### Notas

- **1:1 frente al enrolamiento**: A diferencia de **Búsqueda facial (1:N)**, aquí ya sabes **qué persona** probar; este endpoint puntúa las imágenes de prueba contra ese registro.
- **Imágenes**: Usa una o más capturas del mismo sujeto; base64 crudo sin prefijo `data:` salvo que tu cliente lo añada de forma consistente.
- **Flujos relacionados**: Para comparar dos conjuntos de imágenes sin `id` enrolado, usa **Comparación facial**; para búsqueda en galería, usa **Búsqueda facial**.
