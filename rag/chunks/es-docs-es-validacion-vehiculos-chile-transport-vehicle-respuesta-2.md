---
id: "es-docs-es-validacion-vehiculos-chile-transport-vehicle-respuesta-2"
title: "🇨🇱 Chile - Vehículo de transporte público — Respuesta"
sourcePath: "docs-es/validacion-vehiculos/chile/transport-vehicle.mdx"
locale: "es"
category: "validacion-vehiculos"
tags:
  - "cl"
  - "validacion-vehiculos"
endpoint: "/v2/cl/transport-vehicle"
sourceAnchor: "Respuesta"
slug: "/validacion-vehiculos/chile/transport-vehicle"
url: "https://docs.verifik.co/verifik-es/validacion-vehiculos/chile/transport-vehicle"
---

# 🇨🇱 Chile - Vehículo de transporte público
**API path(s):** /v2/cl/transport-vehicle

El servicio de validación de vehículos de transporte público en Chile permite consultar el registro **RNT** (*Registro Nacional de Transporte*) y obtener datos del operador, del servicio y del vehículo para patentes de buses y transporte público.

## Respuesta

```json
{
	"data": {
		"plate": "BBCC12",
		"brand": "MERCEDES BENZ",
		"model": "O500 RS",
		"serviceType": "TRANSPORTE URBANO DE PASAJEROS",
		"vehicleStatus": "VIGENTE",
		"capacity": "45",
		"region": "METROPOLITANA DE SANTIAGO",
		"serviceStatus": "HABILITADO"
	},
	"signature": {
		"dateTime": "January 16, 2024 3:44 PM",
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

### Notas

- **Sandbox:** placas **`BBCC12`**–**`BBCC21`**; **`ERR404`** → **404**.
- Para consulta de vehículo **particular** en Chile, ver [🇨🇱 Chile - Información de Vehículos](/verifik-es/validacion-vehiculos/chile).
