---
id: "es-docs-es-validacion-vehiculos-chile-vehicle-soap-plate-endpoint"
title: "🇨🇱 Chile - SOAP vehicular (por patente) — Endpoint"
sourcePath: "docs-es/validacion-vehiculos/chile/vehicle-soap-plate.mdx"
locale: "es"
category: "validacion-vehiculos"
tags:
  - "cl"
  - "validacion-vehiculos"
endpoint: "/v2/cl/vehicle-soap-plate"
sourceAnchor: "Endpoint"
slug: "/validacion-vehiculos/chile/vehicle-soap-plate"
url: "https://docs.verifik.co/verifik-es/validacion-vehiculos/chile/vehicle-soap-plate"
---

# 🇨🇱 Chile - SOAP vehicular (por patente)
**API path(s):** /v2/cl/vehicle-soap-plate

## Endpoint

Consulta el **SOAP** vehicular (*Seguro Obligatorio de Accidentes Personales*) usando **solo la patente**. El servicio consulta Boostr, enriquece con AACH cuando hay póliza y devuelve datos del vehículo desde Carvuk si no hay SOAP activo.

- **`plate`** — Patente chilena, **4–6** caracteres alfanuméricos
- **`message`** — vacío si hay SOAP; `No_active_SOAP_certificate_found_for_this_plate` si el vehículo existe sin SOAP activo
- **`soap`** — **`status`**, **`policyNumber`**, **`insuranceCompany`**, **`validFrom`**, **`validTo`**, **`folioNumber`**, **`ownerName`**, **`ownerRut`**, **`premium`**
- **`vehicle`** — **`brand`**, **`model`**, **`year`**, **`type`**, **`engineNumber`**
- Respuesta firmada por Verifik

Útil para **cumplimiento de seguros**, **onboarding de flotas** y **siniestros** cuando solo se conoce la patente.

### Endpoint

```
GET v2/cl/vehicle-soap-plate
```

### Encabezados

| Nombre | Valor |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parámetros

| Nombre | Tipo | Requerido | Descripción | Ejemplo |
| --- | --- | --- | --- | --- |
| `plate` | string | **Sí** | Patente chilena, 4–6 caracteres alfanuméricos. | `HTRT86` |

### Solicitud

  

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
