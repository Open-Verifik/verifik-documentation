---
id: "es-docs-es-validacion-vehiculos-chile-vehicle-technical-review-endpoint"
title: "🇨🇱 Chile - Revisión técnica vehicular — Endpoint"
sourcePath: "docs-es/validacion-vehiculos/chile/vehicle-technical-review.mdx"
locale: "es"
category: "validacion-vehiculos"
tags:
  - "cl"
  - "validacion-vehiculos"
sourceAnchor: "Endpoint"
slug: "/validacion-vehiculos/chile/vehicle-technical-review"
url: "https://docs.verifik.co/verifik-es/validacion-vehiculos/chile/vehicle-technical-review"
---

# 🇨🇱 Chile - Revisión técnica vehicular

## Endpoint

Usa este endpoint cuando necesites datos de **revisión técnica / inspección** de un vehículo chileno por patente: datos del vehículo, planta, número de certificado, fecha de vencimiento y estado de revisión.

Endpoints vehiculares relacionados en Chile:

- **Información vehicular (`v2/cl/vehicle`)**: datos generales del registro, como marca, modelo, RUT del titular, motor, chasis, multas y encargos por robo.
- **Revisión técnica vehicular (`v3/cl/vehicle`)**: estado e historial de inspecciones técnicas.
- **SOAP vehicular (`v2/cl/vehicle-soap`)**: certificado de seguro obligatorio por patente y número de póliza.

### Endpoint

```text
GET https://api.verifik.co/v3/cl/vehicle
```

### Headers

| Nombre | Valor |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parámetros

| Nombre | Tipo | Requerido | Descripción | Ejemplo |
| --- | --- | --- | --- | --- |
| `plate` | string | **Sí** | Patente chilena en formato compatible con v3, como cuatro letras y dos dígitos o dos letras y cuatro dígitos. | `XH6640` |

### Solicitud

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v3/cl/vehicle", {
	params: { plate: "XH6640" },
	headers: {
		Accept: "application/json",
		Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
	},
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v3/cl/vehicle"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"plate": "XH6640"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```
