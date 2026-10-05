---
id: "es-docs-es-validacion-de-vehiculo-brasil-respuesta-2"
title: "Información de vehículos — Respuesta"
sourcePath: "docs-es/validacion-de-vehiculo/brasil.md"
locale: "es"
category: "validacion-de-vehiculo"
tags:
  - "br"
  - "validacion-de-vehiculo"
endpoint: "/v2/br/vehicle"
sourceAnchor: "Respuesta"
slug: "/validacion-de-vehiculo/brasil"
url: "https://docs.verifik.co/verifik-es/validacion-de-vehiculo/brasil"
---

# Información de vehículos
**API path(s):** /v2/br/vehicle

## Respuesta

```json
{
	"data": {
		"bodyType": "Sedan",
		"brand": "FIAT",
		"chassis": "9BD197134D3048111",
		"color": "VERMELHA",
		"country": "Brasil",
		"denatranWarning": "",
		"doors": "4",
		"engine": "1.4",
		"factory": "Betim - MG",
		"fipeCodes": ["001381-1"],
		"fuelType": "Flexivel Alcool/Gasolina/GNV",
		"irregularitiesCount": 0,
		"irregularityCode": "",
		"manufacturer": "FIAT",
		"model": "Grand Siena TetraFuel 1.4 Flex GNV 4P",
		"modelYear": "2013",
		"plate": "ITU7764",
		"transmission": "Manual",
		"vehicle": "Grand Siena",
		"version": "TetraFuel",
		"yearOfManufacture": "2012"
	},
	"signature": {
		"dateTime": "October 10, 2025 6:57 PM",
		"message": "Certified by Verifik.co"
	},
	"id": "7ZNJG"
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

  
  

```json
{
	"code": "InternalServerError",
	"message": "Server error."
}
```

## Casos de Uso

-   **Verificación de Seguros**: Verificar detalles del vehículo para fines de seguros
-   **Concesionarios de Autos**: Validar información del vehículo antes de la compra
-   **Gestión de Flotas**: Rastrear información de vehículos de la empresa
-   **Aplicación de la Ley**: Verificar registro y propiedad del vehículo
-   **Debida Diligencia**: Verificar información del vehículo para transacciones
