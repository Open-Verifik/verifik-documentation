---
id: "es-docs-es-validacion-vehiculos-chile-vehicle-soap-consulta-soap-vehicular"
title: "🇨🇱 Chile - SOAP vehicular — Consulta SOAP vehicular"
sourcePath: "docs-es/validacion-vehiculos/chile/vehicle-soap.mdx"
locale: "es"
category: "validacion-vehiculos"
tags:
  - "cl"
  - "validacion-vehiculos"
endpoint: "/v2/cl/vehicle-soap"
sourceAnchor: "Consulta SOAP vehicular"
slug: "/validacion-vehiculos/chile/vehicle-soap"
url: "https://docs.verifik.co/verifik-es/validacion-vehiculos/chile/vehicle-soap"
---

# 🇨🇱 Chile - SOAP vehicular
**API path(s):** /v2/cl/vehicle-soap

## Consulta SOAP vehicular

La consulta **SOAP** vehicular (*Seguro Obligatorio de Accidentes Personales*) valida el seguro obligatorio de accidentes personales de un vehículo registrado en Chile. Consulta por **placa** y **número de póliza** para obtener aseguradora, titular, vigencia y datos del vehículo en el registro AACH.

## Consulta SOAP vehicular

### Endpoint

```
https://api.verifik.co/v2/cl/vehicle-soap
```

Consulta por **placa** (`plate`) y **número de póliza** (`policyNumber`; el servicio usa los últimos cuatro dígitos en el registro AACH). Suele devolver **status**, **insuranceCompany**, **ownerName**, **ownerRut**, **validFrom**, **validTo**, **brand**, **model**, **manufactureYear**, **engineNumber** y **premium**—útil para **cumplimiento de seguros**, **onboarding de flotas** y **siniestros**.

### Encabezados

| Nombre | Valor |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parámetros

| Nombre | Tipo | Requerido | Descripción | Ejemplo |
| --- | --- | --- | --- | --- |
| `plate` | string | **Sí** | Patente chilena, 4–6 caracteres alfanuméricos. | `HTRT86` |
| `policyNumber` | string | **Sí** | Número de póliza; se usan los últimos cuatro dígitos para la consulta SOAP AACH. | `94596506` |

### Solicitud

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/cl/vehicle-soap", {
	params: { plate: "HTRT86", policyNumber: "94596506" },
	headers: {
		Accept: "application/json",
		Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
	},
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/cl/vehicle-soap"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"plate": "HTRT86", "policyNumber": "94596506"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```
