---
id: "es-docs-es-identity-mexico-ine-request-2"
title: "México — Validación INE — Request"
sourcePath: "docs-es/identity/mexico-ine.mdx"
locale: "es"
category: "identity"
tags:
  - "mx"
  - "identity"
endpoints:
  - "/v2/mx/curp"
  - "/v2/mx/ine"
  - "/v2/mx/ine/ocr"
sourceAnchor: "Request"
slug: "/identity/mexico-ine"
url: "https://docs.verifik.co/verifik-es/identity/mexico-ine"
---

# México — Validación INE
**API path(s):** /v2/mx/curp, /v2/mx/ine, /v2/mx/ine/ocr

Valida una **INE** mexicana (*Credencial para Votar*) contra el padrón electoral. Envía `documentType=INE` y un identificador principal en `documentNumber`. La API detecta automáticamente si el valor es un **CIC** (9 dígitos), **OCR** (13 dígitos) o **clave de elector** (18 caracteres).
Los campos opcionales cubren las combinaciones por modelo de credencial que exige la fuente oficial:
- **`citizenIdentifier`** — requerido para modelos **E, F, G, H** junto con CIC
- **`emissionNumber`** — requerido para el modelo **C** junto con OCR y clave de elector
- **`model`** — pista opcional (`C`–`H`) para seleccionar la combinación correcta
Para consultar nombre y datos biográficos por **CURP**, usa **[Ciudadano mexicano (CURP)](/identity/mexico)** (`v2/mx/curp`). Para extraer campos desde imágenes del INE, usa **[México — OCR INE](/identity/mexico-ine-ocr)** (`v2/mx/ine/ocr`).

## Request

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/mx/ine", {
  params: {
    documentType: "INE",
    documentNumber: "187639699",
  },
  headers: { Accept: "application/json", Authorization: `Bearer ${process.env.VERIFIK_TOKEN}` },
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/mx/ine"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "INE", "documentNumber": "187639699"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

### Response

  

```json
{
  "data": {
    "cic": "187639699",
    "documentNumber": "187639699",
    "documentType": "INE",
    "electorKey": "CSFTGV76061131H400",
    "emissionNumber": "1",
    "emissionYear": "2018",
    "federalDistrict": "04",
    "identifierType": "cic",
    "localDistrict": "03",
    "message": "Vigente como medio de identificacion y puede votar",
    "messageCode": "3",
    "ocr": "0276031206745",
    "registrationYear": "2010",
    "status": "OK",
    "validity": "31 de diciembre de 2030"
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
  "message": "missing documentNumber\n"
}
```

### Notes

- `documentType` debe ser `INE`.
- `documentNumber` detecta automáticamente CIC (9 dígitos), OCR (13 dígitos) o clave de elector (18 alfanuméricos).
- Los modelos E–H suelen requerir `citizenIdentifier` con CIC; el modelo C requiere `emissionNumber` con OCR y clave de elector.
- Los veredictos electorales negativos (por ejemplo no vigente) siguen devolviendo HTTP **200** con `status` y `message` del padrón.
- Fixtures sandbox: `187639699`, `0276031206745`, `CSFTGV76061131H400`. El documento `900404019` devuelve **404**.
- Relacionados: [Ciudadano mexicano (CURP)](/identity/mexico), [México — OCR INE](/identity/mexico-ine-ocr).
