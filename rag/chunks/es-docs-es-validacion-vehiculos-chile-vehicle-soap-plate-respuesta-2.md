---
id: "es-docs-es-validacion-vehiculos-chile-vehicle-soap-plate-respuesta-2"
title: "🇨🇱 Chile - SOAP vehicular (por patente) — Respuesta"
sourcePath: "docs-es/validacion-vehiculos/chile/vehicle-soap-plate.mdx"
locale: "es"
category: "validacion-vehiculos"
tags:
  - "cl"
  - "validacion-vehiculos"
endpoint: "/v2/cl/vehicle-soap-plate"
sourceAnchor: "Respuesta"
slug: "/validacion-vehiculos/chile/vehicle-soap-plate"
url: "https://docs.verifik.co/verifik-es/validacion-vehiculos/chile/vehicle-soap-plate"
---

# 🇨🇱 Chile - SOAP vehicular (por patente)
**API path(s):** /v2/cl/vehicle-soap-plate

Consulta el **SOAP** vehicular (*Seguro Obligatorio de Accidentes Personales*) usando **solo la patente**. El servicio consulta Boostr, enriquece con AACH cuando hay póliza y devuelve datos del vehículo desde Carvuk si no hay SOAP activo.
- **`plate`** — Patente chilena, **4–6** caracteres alfanuméricos
- **`message`** — vacío si hay SOAP; `No_active_SOAP_certificate_found_for_this_plate` si el vehículo existe sin SOAP activo
- **`soap`** — **`status`**, **`policyNumber`**, **`insuranceCompany`**, **`validFrom`**, **`validTo`**, **`folioNumber`**, **`ownerName`**, **`ownerRut`**, **`premium`**
- **`vehicle`** — **`brand`**, **`model`**, **`year`**, **`type`**, **`engineNumber`**
- Respuesta firmada por Verifik
Útil para **cumplimiento de seguros**, **onboarding de flotas** y **siniestros** cuando solo se conoce la patente.

## Respuesta

```json
{
  "data": {
    "plate": "HTRT86",
    "message": "",
    "soap": {
      "status": "CERTIFICADO VALIDO",
      "policyNumber": "94596506",
      "insuranceCompany": "MUTUAL DE SEGUROS DE CHILE",
      "validFrom": "01/04/2026",
      "validTo": "31/03/2027",
      "folioNumber": "FOL789",
      "ownerName": "JUAN PEREZ LOPEZ",
      "ownerRut": "12.345.678-9",
      "premium": "$50.000"
    },
    "vehicle": {
      "brand": "MITSUBISHI",
      "model": "L200 KATANA 2.4",
      "year": "2016",
      "type": "CAMIONETA",
      "engineNumber": "ENG123456"
    }
  },
  "signature": {
    "dateTime": "July 7, 2026 11:00 AM",
    "message": "Certified by Verifik.co"
  }
}
```

  
  

```json
{
  "data": {
    "plate": "CSXZ27",
    "message": "No_active_SOAP_certificate_found_for_this_plate",
    "soap": {},
    "vehicle": {
      "brand": "MAHINDRA",
      "model": "PIK UP",
      "year": "2011",
      "type": "",
      "engineNumber": ""
    }
  },
  "signature": {
    "dateTime": "July 7, 2026 11:00 AM",
    "message": "Certified by Verifik.co"
  }
}
```

  
  

```json
{
  "code": "NotFound",
  "message": "Vehicle_not_found_for_this_plate"
}
```

  
  

```json
{
  "code": "MissingParameter",
  "message": "missing plate\n"
}
```

### Notas

- **Sin SOAP activo** devuelve **HTTP 200** con **`soap` vacío** y **`message: No_active_SOAP_certificate_found_for_this_plate`** — no es un 404.
- **Patentes de ejemplo (live):** `CLTK27`, `HTRT86`, `RRWX51`, `THHV64`, `CSXZ52`, `CSXZ57` devuelven SOAP activo; `CSXZ27` devuelve vehículo sin SOAP activo.
- **Sandbox:** patente **`BBCC12`**–**`BBCC21`** y **`HTRT86`** devuelven perfiles anidados estables; **`ERR404`** devuelve **404**.
- Para consulta por patente + póliza, ver [🇨🇱 Chile - SOAP vehicular](/verifik-es/validacion-vehiculos/chile/vehicle-soap).
