---
id: "es-docs-es-identity-mexico-ine-ocr-referencia-de-la-api"
title: "México — OCR INE — Referencia de la API"
sourcePath: "docs-es/identity/mexico-ine-ocr.mdx"
locale: "es"
category: "identity"
tags:
  - "mx"
  - "identity"
endpoints:
  - "/v2/mx/curp"
  - "/v2/mx/ine"
  - "/v2/mx/ine/ocr"
sourceAnchor: "Referencia de la API"
slug: "/identity/mexico-ine-ocr"
url: "https://docs.verifik.co/verifik-es/identity/mexico-ine-ocr"
---

# México — OCR INE
**API path(s):** /v2/mx/curp, /v2/mx/ine, /v2/mx/ine/ocr

## Referencia de la API

Flujo en un solo request para una **INE** mexicana (*Credencial para Votar*):

1. **OCR Gemini de Verifik** extrae campos del frente (y opcionalmente el reverso)
2. Verifik arma los identificadores a partir de esa extracción
3. **Validación Nexcar** corre solo con números (sin OCR de imágenes del proveedor)
4. La respuesta incluye **`ocr`**, **`validation`** y **`validateParamsUsed`**

Envía JSON con:

- **`front`** (requerido) — URL pública o imagen en base64 del frente
- **`back`** (opcional) — URL pública o base64 del reverso; muy recomendado para CIC, OCR y MRZ

Para validar solo con números (sin imágenes), usa **[México — Validación INE](/identity/mexico-ine)** (`GET v2/mx/ine`). Para CURP, usa **[Ciudadano mexicano (CURP)](/identity/mexico)** (`v2/mx/curp`).

## Referencia de la API

### Endpoint

```
https://api.verifik.co/v2/mx/ine/ocr
```

Envía imágenes del frente (y opcionalmente del reverso). Verifik optimiza el tamaño, ejecuta Gemini OCR y valida los identificadores con Nexcar. Usa timeouts de cliente de al menos 60 segundos.

### Headers

| Name | Value |
| --- | --- |
| Content-Type | `application/json` |
| Authorization | `Bearer ` |

### Parameters

| Name | Type | Required | Description | Example |
| --- | --- | --- | --- | --- |
| `front` | string | Yes | Imagen del frente como URL pública o base64. | `https://example.com/ine-front.jpg` |
| `back` | string | No | Imagen del reverso como URL pública o base64. | `https://example.com/ine-back.jpg` |

### Request

  

```javascript

const { data } = await axios.post(
  "https://api.verifik.co/v2/mx/ine/ocr",
  {
    front: "https://example.com/ine-front.jpg",
    back: "https://example.com/ine-back.jpg",
  },
  {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
    },
  }
);
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/mx/ine/ocr"
headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}",
}
payload = {
    "front": "https://example.com/ine-front.jpg",
    "back": "https://example.com/ine-back.jpg",
}
r = requests.post(url, headers=headers, json=payload)
print(r.json())
```
