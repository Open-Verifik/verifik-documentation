---
id: "en-docs-vehicle-validation-chile-vehicle-soap-plate-endpoint"
title: "🇨🇱 Chile - Vehicle SOAP (by plate) — Endpoint"
sourcePath: "docs/vehicle-validation/chile/vehicle-soap-plate.mdx"
locale: "en"
category: "vehicle-validation"
tags:
  - "cl"
  - "vehicle-validation"
endpoint: "/v2/cl/vehicle-soap-plate"
sourceAnchor: "Endpoint"
slug: "/vehicle-validation/chile/vehicle-soap-plate"
url: "https://docs.verifik.co/vehicle-validation/chile/vehicle-soap-plate"
---

# 🇨🇱 Chile - Vehicle SOAP (by plate)
**API path(s):** /v2/cl/vehicle-soap-plate

## Endpoint

Query Chile vehicular **SOAP** (*Seguro Obligatorio de Accidentes Personales*) using **license plate only**. The service resolves SOAP coverage via Boostr, enriches with AACH when a policy number is available, and returns vehicle attributes from Carvuk when SOAP is missing.

Returns a **nested** payload when the source responds:

- **`plate`** — Chilean license plate (Patente), **4–6** alphanumeric characters
- **`message`** — empty when SOAP is found; `No_active_SOAP_certificate_found_for_this_plate` when the vehicle exists but has no active SOAP
- **`soap`** — when found: **`status`**, **`policyNumber`**, **`insuranceCompany`**, **`validFrom`**, **`validTo`**, **`folioNumber`**, **`ownerName`**, **`ownerRut`**, **`premium`**
- **`vehicle`** — **`brand`**, **`model`**, **`year`**, **`type`**, **`engineNumber`**
- **Signed** Verifik response

Use for **insurance compliance**, **fleet onboarding**, and **claims** workflows when only the plate is known.

### Endpoint

```
GET v2/cl/vehicle-soap-plate
```

### Headers

| Name | Value |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parameters

| Name | Type | Required | Description | Example |
| --- | --- | --- | --- | --- |
| `plate` | string | **Yes** | Chilean license plate (Patente), 4–6 alphanumeric characters. | `HTRT86` |

### Request

  

```javascript
const { data } = await axios.get("https://api.verifik.co/v2/cl/vehicle-soap-plate", {
  params: { plate: "HTRT86" },
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
  },
});
console.log(data);
```

  
  

```python
url = "https://api.verifik.co/v2/cl/vehicle-soap-plate"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"plate": "HTRT86"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```
