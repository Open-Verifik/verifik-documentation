---
id: "en-docs-legal-voting-eci-epic-request-2"
title: "India EPIC (Voter ID) — Polling & voting location | Verifik — Request"
sourcePath: "docs/legal/voting-eci-epic.mdx"
locale: "en"
category: "legal"
tags:
  - "in"
  - "legal"
endpoints:
  - "/v2/in/epic"
  - "/v2/in/epic**](/legal/epic-eci"
  - "/v2/in/epic/votacion"
sourceAnchor: "Request"
slug: "/legal/voting-eci-epic"
url: "https://docs.verifik.co/legal/voting-eci-epic"
---

# India EPIC (Voter ID) — Polling & voting location | Verifik
**API path(s):** /v2/in/epic, /v2/in/epic**](/legal/epic-eci, /v2/in/epic/votacion

This endpoint returns **where the voter is assigned to vote**: assembly, district, part (polling-section) details, building name, and related location fields—based on a valid **10-character EPIC** (*Elector's Photo Identity Card* number). It complements the [name-lookup API](/legal/epic-eci) when you need **polling-place context** for logistics, support, or compliance checks.

## Request

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

### Response

  

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
