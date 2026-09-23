---
id: "es-docs-es-validacion-vehiculos-colombia-registros-vehiculos-por-vin-runt-respuesta-5"
title: "Registros de Vehículos por VIN en RUNT — Respuesta"
sourcePath: "docs-es/validacion-vehiculos/colombia/registros-vehiculos-por-vin-runt.mdx"
locale: "es"
category: "validacion-vehiculos"
tags:
  - "co"
  - "validacion-vehiculos"
endpoint: "/v2/co/runt/vehicle-by-vin"
sourceAnchor: "Respuesta"
slug: "/validacion-vehiculos/colombia/registros-vehiculos-por-vin-runt"
url: "https://docs.verifik.co/verifik-es/validacion-vehiculos/colombia/registros-vehiculos-por-vin-runt"
---

# Registros de Vehículos por VIN en RUNT
**API path(s):** /v2/co/runt/vehicle-by-vin

La API de Validación Vehicular por VIN de Verifik permite consultar el historial completo y las especificaciones técnicas de un vehículo registrado en Colombia utilizando su Número de Identificación Vehicular (VIN).
Este método es particularmente útil cuando no se dispone de la placa o para verificar la autenticidad de la identidad de un vehículo durante inspecciones, ya que el VIN es un identificador único y difícil de alterar.

## Respuesta

```json
{
	"code": "NotFound",
	"message": "Record not found."
}
```

  
  

```json
{
	"code": "MissingParameter",
	"message": "missing vin"
}
```

```json
{
	"code": "MissingParameter",
	"message": "missing vin\n"
}
```

  
  

```json
{
	"code": "InternalServerError",
	"message": "Server error."
}
```
