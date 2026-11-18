---
id: "es-docs-es-validacion-vehiculos-chile-vehicle-soap-respuesta-2"
title: "🇨🇱 Chile - SOAP vehicular — Respuesta"
sourcePath: "docs-es/validacion-vehiculos/chile/vehicle-soap.mdx"
locale: "es"
category: "validacion-vehiculos"
tags:
  - "cl"
  - "validacion-vehiculos"
endpoint: "/v2/cl/vehicle-soap"
sourceAnchor: "Respuesta"
slug: "/validacion-vehiculos/chile/vehicle-soap"
url: "https://docs.verifik.co/verifik-es/validacion-vehiculos/chile/vehicle-soap"
---

# 🇨🇱 Chile - SOAP vehicular
**API path(s):** /v2/cl/vehicle-soap

La consulta **SOAP** vehicular (*Seguro Obligatorio de Accidentes Personales*) valida el seguro obligatorio de accidentes personales de un vehículo registrado en Chile. Consulta por **placa** y **número de póliza** para obtener aseguradora, titular, vigencia y datos del vehículo en el registro AACH.

## Respuesta

```json
{
	"data": {
		"status": "VIGENTE",
		"plate": "HTRT86",
		"policyNumber": "94596506",
		"vehicleType": "AUTOMOVIL",
		"brand": "TOYOTA",
		"model": "COROLLA",
		"manufactureYear": "2019",
		"engineNumber": "ENG123456",
		"folioNumber": "FOL789",
		"insuranceCompany": "MAPFRE",
		"ownerName": "JUAN PEREZ LOPEZ",
		"ownerRut": "12.345.678-9",
		"validFrom": "01/01/2026",
		"validTo": "31/12/2026",
		"premium": "$50.000"
	},
	"signature": {
		"dateTime": "June 30, 2026 12:00 PM",
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

  
  

```json
{
	"code": "MissingParameter",
	"message": "missing plate\n"
}
```

### Notas

- **Modo sandbox:** patentes **`BBCC12`**–**`BBCC21`** devuelven perfiles SOAP fijos (`BBCC15` = **VENCIDO**); **`HTRT86`** + **`policyNumber=94596506`** devuelve el perfil demo estilo producción; **`ERR404`** devuelve **404**; patentes no mapeadas devuelven **200** aleatorio.
- **Ejemplos sandbox:** `BBCC12`/`94590001` (sedán, MAPFRE), `BBCC18`/`94590007` (camioneta, CHUBB), `HTRT86`/`94596506` (demo TOYOTA COROLLA).
- Para consulta de vehículo **particular** en Chile, ver [🇨🇱 Chile - Información de Vehículos](/verifik-es/validacion-vehiculos/chile).
