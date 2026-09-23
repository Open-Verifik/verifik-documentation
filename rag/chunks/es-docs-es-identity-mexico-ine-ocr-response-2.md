---
id: "es-docs-es-identity-mexico-ine-ocr-response-2"
title: "México — OCR INE — Response"
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
sourceAnchor: "Response"
slug: "/identity/mexico-ine-ocr"
url: "https://docs.verifik.co/verifik-es/identity/mexico-ine-ocr"
---

# México — OCR INE
**API path(s):** /v2/mx/curp, /v2/mx/ine, /v2/mx/ine/ocr

Flujo en un solo request para una **INE** mexicana (*Credencial para Votar*):
1. **OCR Gemini de Verifik** extrae campos del frente (y opcionalmente el reverso)
2. Verifik arma los identificadores a partir de esa extracción
3. **Validación Nexcar** corre solo con números (sin OCR de imágenes del proveedor)
4. La respuesta incluye **`ocr`**, **`validation`** y **`validateParamsUsed`**
Envía JSON con:
- **`front`** (requerido) — URL pública o imagen en base64 del frente
- **`back`** (opcional) — URL pública o base64 del reverso; muy recomendado para CIC, OCR y MRZ
Para validar solo con números (sin imágenes), usa **[México — Validación INE](/identity/mexico-ine)** (`GET v2/mx/ine`). Para CURP, usa **[Ciudadano mexicano (CURP)](/identity/mexico)** (`v2/mx/curp`).

## Response

```json
{
  "data": {
    "ocr": {
      "birthDate": "11/06/1976",
      "cic": "187639699",
      "citizenIdentifier": "031206745",
      "curp": "MAFC760611MYNRLR03",
      "documentType": "INE",
      "electorKey": "CSFTGV76061131H400",
      "firstName": "CARLA ISABEL",
      "fullName": "CARLA ISABEL MARTINEZ FERNANDEZ",
      "ocr": "0276031206745",
      "subType": "E",
      "type": "INE",
      "validity": "2029"
    },
    "validation": {
      "cic": "187639699",
      "documentNumber": "187639699",
      "documentType": "INE",
      "electorKey": "CSFTGV76061131H400",
      "ocr": "0276031206745",
      "status": "OK",
      "validity": "31 de diciembre de 2030"
    },
    "validateParamsUsed": {
      "documentType": "INE",
      "documentNumber": "187639699",
      "ocr": "0276031206745",
      "citizenIdentifier": "031206745",
      "model": "E"
    }
  },
  "signature": {
    "dateTime": "July 14, 2026 10:00 AM",
    "message": "Certified by Verifik.co"
  }
}
```

  
  

```json
{
  "code": "NotFound",
  "message": "Record not found."
}
```

  
  

```json
{
  "code": "MissingParameter",
  "message": "front is required"
}
```

### Notes

- Se cobra **`mexico_api_ine_ocr`** una vez por el shot combinado (Gemini OCR + validación Nexcar).
- `front` es requerido; `back` es opcional pero recomendado.
- Las imágenes se redimensionan/comprimen antes de Gemini.
- Si el OCR no obtiene un identificador usable, responde **409** y no llama a Nexcar.
- Sandbox: cualquier `front` válido devuelve el fixture anidado; si contiene `404`, responde **404**.
- Relacionado: [México — Validación INE](/identity/mexico-ine), [Ciudadano mexicano (CURP)](/identity/mexico).
