---
id: "es-docs-es-legal-votacion-eci-epic-solicitud-2"
title: "India — EPIC: mesa y lugar de votación | Verifik — Solicitud"
sourcePath: "docs-es/legal/votacion-eci-epic.mdx"
locale: "es"
category: "legal"
tags:
  - "in"
  - "legal"
endpoint: "/v2/in/epic/votacion"
sourceAnchor: "Solicitud"
slug: "/legal/votacion-eci-epic"
url: "https://docs.verifik.co/verifik-es/legal/votacion-eci-epic"
---

# India — EPIC: mesa y lugar de votación | Verifik
**API path(s):** /v2/in/epic/votacion

Este endpoint devuelve **dónde vota** el elector: asignación a **asamblea (AC)**, **distrito**, **parte** (sección de votación), **edificio** y datos de ubicación asociados a un **EPIC** válido de **10 caracteres**. Complementa la [API de solo nombres](../epic-eci) cuando necesitas **logística, soporte o comprobación de padrón** por lugar de votación.

## Solicitud

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/in/epic/votacion", {
  params: { documentNumber: "IHM2796746" },
  headers: { Accept: "application/json", Authorization: `Bearer ${process.env.VERIFIK_TOKEN}` },
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/in/epic/votacion"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentNumber": "IHM2796746"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

### Respuesta

  

```json
{
  "data": {
    "documentNumber": "IHM2796746",
    "sectionNo": 1,
    "partNumber": "142",
    "partName": "Prafullakanan Deshapriya Bidyamandir (Balak)",
    "partNameLocal": "প্রফুল্লকানন দেশপ্রিয় বিদ্যামন্দির (বালক)",
    "partSerialNumber": 124,
    "assemblyName": "Rajarhat  Gopalpur",
    "assemblyNameLocal": "রাজারহাট গোপালপুর",
    "acNumber": 117,
    "districtName": "NORTH 24 PARGANAS",
    "districtNameLocal": "উত্তর 24 পরগণা",
    "stateName": "West Bengal",
    "stateNameLocal": "पश्चिम बंगाल",
    "parliamentName": "Dum dum",
    "parliamentNameLocal": null,
    "parliamentNo": "16",
    "buildingName": "Prafullakanan Deshapriya Bidyamandir (Balak)",
    "buildingNameLocal": "প্রফুল্লকানন দেশপ্রিয় বিদ্যামন্দির (বালক)",
    "buildingAddress": "Krishnapur",
    "buildingAddressLocal": "কৃষ্ণপুর",
    "roomDetails": "- ROOM-2"
  },
  "signature": {
    "dateTime": "March 25, 2026 10:54 AM",
    "message": "Certified by Verifik.co"
  },
  "id": "0JXEN"
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

  
  

```json
{
  "code": "InternalServerError",
  "message": "Server error."
}
```
