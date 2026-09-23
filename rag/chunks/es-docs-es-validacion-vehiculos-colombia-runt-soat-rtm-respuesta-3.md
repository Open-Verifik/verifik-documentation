---
id: "es-docs-es-validacion-vehiculos-colombia-runt-soat-rtm-respuesta-3"
title: "SOAT y RTM — Respuesta"
sourcePath: "docs-es/validacion-vehiculos/colombia/runt-soat-rtm.mdx"
locale: "es"
category: "validacion-vehiculos"
tags:
  - "co"
  - "validacion-vehiculos"
endpoints:
  - "/v2/co/runt/vehiculo"
  - "/v2/co/runt/vehiculo?documenttype=cc&documentnumber=123456789&plate=abc123"
sourceAnchor: "Respuesta"
slug: "/validacion-vehiculos/colombia/runt-soat-rtm"
url: "https://docs.verifik.co/verifik-es/validacion-vehiculos/colombia/runt-soat-rtm"
---

# SOAT y RTM
**API path(s):** /v2/co/runt/vehiculo, /v2/co/runt/vehiculo?documenttype=cc&documentnumber=123456789&plate=abc123

La API de Validación de SOAT y RTM de Verifik proporciona acceso en tiempo real al estado de los documentos obligatorios para vehículos registrados en Colombia: el Seguro Obligatorio de Accidentes de Tránsito (SOAT) y la Revisión Técnico-Mecánica (RTM).
Este servicio es crítico para asegurar que los vehículos cumplan con la normativa de tránsito colombiana, ayudando a prevenir multas y problemas legales.

## Respuesta

```json
{
	"data": {
		"documentType": "CC",
		"documentNumber": "123456789",
		"plate": "XXXXX",
		"vehicleInformation": {
			"color": "PLATEADO",
			"brand": "CHERY",
			"line": "QQ3 SQR7080 S116",
			"status": "ACTIVO",
			"enrollmentDate": "07/10/2010",
			"plate": "XXXXX"
		},
		"soat": {
			"valid": true,
			"expeditionDate": "10/09/2021",
			"dueDate": "11/09/2022",
			"coverageStartDate": "12/09/2021",
			"soatNumber": "XXXXXX"
		},
		"techReview": {
			"valid": true,
			"reviewNumber": "XXXXX",
			"expeditionDate": "12/09/2021",
			"dueDate": "12/09/2022",
			"requireTechReview": true
		},
		"consultationDateTime": "2022-03-03T17:10:00.568Z"
	},
	"signature": {
		"dateTime": "March 3, 2022 12:10 PM",
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
	"message": "missing documentType\n. missing documentNumber\n. missing plate\n"
}
```

```json
{
	"code": "MissingParameter",
	"message": "documentType must be one of: [CC]"
}
```

---

## Casos de Uso Empresariales

La API de consulta de SOAT y RTM en RUNT es utilizada por múltiples sectores:

-   **Verificación de Vehículos**: Validar información completa de vehículos registrados en Colombia
-   **Servicios de Seguros**: Verificar estado del SOAT y fechas de vencimiento
-   **Revisión Técnica**: Validar estado de la revisión técnica vehicular
-   **Control de Tránsito**: Verificar cumplimiento de regulaciones vehiculares
-   **Empresas de Transporte**: Validar flotas vehiculares y sus documentos
-   **Verificación de Propiedad**: Confirmar datos del propietario y del vehículo
