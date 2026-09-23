---
id: "en-docs-identity-mexico-ine-request-2"
title: "Mexico — INE Validation — Request"
sourcePath: "docs/identity/mexico-ine.mdx"
locale: "en"
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
url: "https://docs.verifik.co/identity/mexico-ine"
---

# Mexico — INE Validation
**API path(s):** /v2/mx/curp, /v2/mx/ine, /v2/mx/ine/ocr

Validate a Mexican **INE** (*Credencial para Votar*) against the electoral registry. Send `documentType=INE` and a primary identifier in `documentNumber`. The API auto-detects whether the value is a **CIC** (9 digits), **OCR** (13 digits), or **clave de elector** (18 characters).
Optional fields cover card-model combinations required by the official source:
- **`citizenIdentifier`** — required for models **E, F, G, H** together with CIC
- **`emissionNumber`** — required for model **C** together with OCR and clave de elector
- **`model`** — optional hint (`C`–`H`) to select the correct field combination
For name and biographical lookup by **CURP**, use **[Mexican Citizen (CURP)](/identity/mexico)** (`v2/mx/curp`). To extract fields from INE images, use **[Mexico — INE OCR](/identity/mexico-ine-ocr)** (`v2/mx/ine/ocr`).

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

- `documentType` must be `INE`.
- `documentNumber` auto-detects CIC (9 digits), OCR (13 digits), or clave de elector (18 alphanumeric).
- Models E–H typically need `citizenIdentifier` with CIC; model C needs `emissionNumber` with OCR and clave de elector.
- Negative electoral verdicts (for example not vigente) still return HTTP **200** with `status` and `message` reflecting the registry result.
- Sandbox fixtures: `187639699`, `0276031206745`, `CSFTGV76061131H400`. Document `900404019` returns **404**.
- Related: [Mexican Citizen (CURP)](/identity/mexico), [Mexico — INE OCR](/identity/mexico-ine-ocr).
