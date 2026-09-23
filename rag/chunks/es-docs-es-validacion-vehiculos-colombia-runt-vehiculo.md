---
id: "es-docs-es-validacion-vehiculos-colombia-runt-vehiculo"
title: "RUNT — Vehículo (registro básico) — Service URL"
sourcePath: "docs-es/validacion-vehiculos/colombia/runt-vehiculo.mdx"
locale: "es"
category: "validacion-vehiculos"
tags:
  - "co"
  - "validacion-vehiculos"
endpoint: "/v2/co/runt/vehiculo"
sourceAnchor: "Service URL"
slug: "/validacion-vehiculos/colombia/runt-vehiculo"
url: "https://docs.verifik.co/verifik-es/validacion-vehiculos/colombia/runt-vehiculo"
---

# RUNT — Vehículo (registro básico)
**API path(s):** /v2/co/runt/vehiculo

## Service URL

```
GET https://api.verifik.co/v2/co/runt/vehiculo
```

La referencia canónica de contrato API está en inglés: **`/vehicle-validation/colombia/runt-vehiculo`**.

Consulta en **RUNT** la información del vehículo asociada a **placa** y **titular** (`documentType` + `documentNumber`). Pensado para **registro, identidad y datos técnicos básicos**; el informe histórico completo está en **`/v2/co/runt/vehicle-by-plate`**.

### Headers

| Name | Value |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parámetros

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `documentType` | string | Sí | Tipo de documento del titular: **`CC`**, **`CE`**, **`PA`**, **`NIT`**. |
| `documentNumber` | string | Sí | Número sin espacios ni signos. |
| `plate` | string | Sí | Placa (validación API: **5–9** caracteres). |

### Solicitud

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/co/runt/vehiculo", {
	params: { documentType: "CC", documentNumber: "123456789", plate: "ABC123" },
	headers: {
		Accept: "application/json",
		Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
	},
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/co/runt/vehiculo"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "CC", "documentNumber": "123456789", "plate": "ABC123"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

### Respuesta

Misma familia de estructura que la documentación en inglés (`200` / `404` / `409`). Los campos exactos dependen de **RUNT** y del formateo del servicio.
