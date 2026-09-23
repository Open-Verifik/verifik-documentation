---
id: "es-docs-es-validacion-vehiculos-chile-vehicle-stolen-endpoint"
title: "🇨🇱 Chile - Vehículo Robado — Endpoint"
sourcePath: "docs-es/validacion-vehiculos/chile/vehicle-stolen.mdx"
locale: "es"
category: "validacion-vehiculos"
tags:
  - "cl"
  - "validacion-vehiculos"
endpoint: "/v2/cl/vehicle-stolen"
sourceAnchor: "Endpoint"
slug: "/validacion-vehiculos/chile/vehicle-stolen"
url: "https://docs.verifik.co/verifik-es/validacion-vehiculos/chile/vehicle-stolen"
---

# 🇨🇱 Chile - Vehículo Robado
**API path(s):** /v2/cl/vehicle-stolen

## Endpoint

Consulta si un vehículo chileno tiene un **encargo vigente por robo o hurto**.

Devuelve un payload firmado cuando la consulta responde:

- **`plate`** — patente chilena, **4–7** caracteres alfanuméricos
- **`hasTheftReport`** — `true` cuando hay un encargo vigente; `false` en caso contrario
- **`description`** — texto de estado (p. ej. `NO REGISTRA ENCARGO Vigentes`)
- **`theftReport`** — objeto del reporte: **`typeCode`**, **`plateOriginal`**, **`plateFormatted`**, **`reportDate`**, **`partiallyResolved`**, **`items`**
- **`items[]`** — especies robadas: **`name`**, **`description`**, **`serial`**, **`resolvedDate`**, **`delivered`**, **`deliveryDate`**, **`type`**
- Respuesta **firmada** por Verifik

Útil para **suscripción de seguros**, **onboarding de flotas** y **due diligence** antes de registrar o financiar un vehículo chileno.

### Endpoint

```
GET v2/cl/vehicle-stolen
```

Campos típicos: **`plate`**, **`hasTheftReport`**, **`description`** y **`theftReport`**. Un vehículo sin encargo vigente igual responde **HTTP 200**.

### Encabezados

| Nombre | Valor |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parámetros

| Nombre | Tipo | Requerido | Descripción | Ejemplo |
| --- | --- | --- | --- | --- |
| `plate` | string | **Sí** | Patente chilena, 4–7 caracteres alfanuméricos. | `PTKX93` |

### Request

  

```javascript
const { data } = await axios.get("https://api.verifik.co/v2/cl/vehicle-stolen", {
  params: { plate: "PTKX93" },
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
  },
});
console.log(data);
```

  
  

```python
url = "https://api.verifik.co/v2/cl/vehicle-stolen"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"plate": "PTKX93"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```
