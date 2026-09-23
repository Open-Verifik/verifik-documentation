---
id: "en-docs-identity-mexico-ine-ocr-api-reference"
title: "Mexico — INE OCR — API reference"
sourcePath: "docs/identity/mexico-ine-ocr.mdx"
locale: "en"
category: "identity"
tags:
  - "mx"
  - "identity"
endpoints:
  - "/v2/mx/curp"
  - "/v2/mx/ine"
  - "/v2/mx/ine/ocr"
sourceAnchor: "API reference"
slug: "/identity/mexico-ine-ocr"
url: "https://docs.verifik.co/identity/mexico-ine-ocr"
---

# Mexico — INE OCR
**API path(s):** /v2/mx/curp, /v2/mx/ine, /v2/mx/ine/ocr

## API reference

One-shot flow for a Mexican **INE** (*Credencial para Votar*):

1. **Verifik Gemini OCR** extracts credential fields from front (and optional back) images
2. Verifik builds identifier params from that extraction
3. **Nexcar validate** runs with numbers only (no vendor image OCR)
4. Response returns **`ocr`**, **`validation`**, and **`validateParamsUsed`**

Send JSON with:

- **`front`** (required) — public URL or base64 image of the credential front
- **`back`** (optional) — public URL or base64 of the reverse; strongly recommended for CIC, OCR, and MRZ

For numbers-only electoral validation (no images), use **[Mexico — INE Validation](/identity/mexico-ine)** (`GET v2/mx/ine`). For CURP identity lookup, use **[Mexican Citizen (CURP)](/identity/mexico)** (`v2/mx/curp`).

## API reference

### Endpoint

```
https://api.verifik.co/v2/mx/ine/ocr
```

Submit front (and optional back) images. Verifik optimizes image size, runs Gemini OCR, then validates extracted identifiers with Nexcar. Allow client timeouts of at least 60 seconds.

### Headers

| Name | Value |
| --- | --- |
| Content-Type | `application/json` |
| Authorization | `Bearer ` |

### Parameters

| Name | Type | Required | Description | Example |
| --- | --- | --- | --- | --- |
| `front` | string | Yes | Front image as a public URL or base64 string (with or without `data:` prefix). | `https://example.com/ine-front.jpg` |
| `back` | string | No | Back image as a public URL or base64 string. Improves CIC/OCR accuracy. | `https://example.com/ine-back.jpg` |

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
