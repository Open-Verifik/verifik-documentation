---
id: "es-docs-es-validacion-vehiculos-chile-transport-vehicle-consulta-de-vehiculo-de-transporte-publico"
title: "🇨🇱 Chile - Vehículo de transporte público — Consulta de vehículo de transporte público"
sourcePath: "docs-es/validacion-vehiculos/chile/transport-vehicle.mdx"
locale: "es"
category: "validacion-vehiculos"
tags:
  - "cl"
  - "validacion-vehiculos"
endpoint: "/v2/cl/transport-vehicle"
sourceAnchor: "Consulta de vehículo de transporte público"
slug: "/validacion-vehiculos/chile/transport-vehicle"
url: "https://docs.verifik.co/verifik-es/validacion-vehiculos/chile/transport-vehicle"
---

# 🇨🇱 Chile - Vehículo de transporte público
**API path(s):** /v2/cl/transport-vehicle

## Consulta de vehículo de transporte público

El servicio de validación de vehículos de transporte público en Chile permite consultar el registro **RNT** (*Registro Nacional de Transporte*) y obtener datos del operador, del servicio y del vehículo para patentes de buses y transporte público.

## Consulta de vehículo de transporte público

### Endpoint

```
https://api.verifik.co/v2/cl/transport-vehicle
```

Consulta por **placa** (`plate`, sin espacios ni puntos). Suele devolver **marca**, **modelo**, **serviceType**, **vehicleStatus**, **capacity**, **region**, **serviceFolio**, **serviceResponsibleName**, **serviceExpiryDate** y **plate**—útil para **cumplimiento de flotas**, **onboarding de operadores** y **debida diligencia** de transporte.

### Encabezados

| Nombre | Valor |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parámetros

| Nombre | Tipo | Requerido | Descripción | Ejemplo |
| --- | --- | --- | --- | --- |
| `plate` | string | **Sí** | Formato actual `BB-CC-12` (envíe `BBCC12`, cuatro letras + dos dígitos). | `BBCC12` |

### Solicitud

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/cl/transport-vehicle", {
	params: { plate: "BBCC12" },
	headers: {
		Accept: "application/json",
		Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
	},
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/cl/transport-vehicle"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"plate": "BBCC12"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```
