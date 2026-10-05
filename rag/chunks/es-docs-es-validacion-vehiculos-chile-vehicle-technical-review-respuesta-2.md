---
id: "es-docs-es-validacion-vehiculos-chile-vehicle-technical-review-respuesta-2"
title: "🇨🇱 Chile - Revisión técnica vehicular — Respuesta"
sourcePath: "docs-es/validacion-vehiculos/chile/vehicle-technical-review.mdx"
locale: "es"
category: "validacion-vehiculos"
tags:
  - "cl"
  - "validacion-vehiculos"
sourceAnchor: "Respuesta"
slug: "/validacion-vehiculos/chile/vehicle-technical-review"
url: "https://docs.verifik.co/verifik-es/validacion-vehiculos/chile/vehicle-technical-review"
---

# 🇨🇱 Chile - Revisión técnica vehicular

Usa este endpoint cuando necesites datos de **revisión técnica / inspección** de un vehículo chileno por patente: datos del vehículo, planta, número de certificado, fecha de vencimiento y estado de revisión.
Endpoints vehiculares relacionados en Chile:
- **Información vehicular (`v2/cl/vehicle`)**: datos generales del registro, como marca, modelo, RUT del titular, motor, chasis, multas y encargos por robo.
- **Revisión técnica vehicular (`v3/cl/vehicle`)**: estado e historial de inspecciones técnicas.
- **SOAP vehicular (`v2/cl/vehicle-soap`)**: certificado de seguro obligatorio por patente y número de póliza.

## Respuesta

```json
{
	"data": {
		"plate": "XH6640",
		"vehicle": {
			"plate": "XH6640",
			"type": "CAMIONETA (CAP. DE CARGA MENOR A 1.750 KGS.) [B] (A2)",
			"mark": "PEUGEOT",
			"model": "PARTNER TOLE 1.9",
			"year": "2004",
			"engineNumber": "10DXDM0003203",
			"chasisNumber": "60548210",
			"vin": null,
			"sealType": "SELLO VERDE"
		},
		"history": [
			{
				"date": "2026-01-12",
				"plantCode": "PRT-014",
				"plantName": "REVISIONES METROPOLITANA",
				"certificateNumber": "RT-XH6640-2026",
				"expirationDate": "2027-01-12",
				"status": "APROBADA"
			}
		]
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
	"code": "Invalid_plate_format",
	"message": "Plate must match Chile vehicle format ABCD12 (4 letters and 2 digits) or XH6640 (2 letters and 4 digits)"
}
```

  
  

```json
{
	"code": "timeout_data_source",
	"message": "timeout_data_source"
}
```

### Notas

- `XH6640`, `FHDJ31` y `DCCH18` devuelven perfiles estables de revisión técnica.
- `BB985` devuelve `409 Invalid_plate_format` porque no cumple el formato v3 de patente.
