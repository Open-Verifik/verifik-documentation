---
id: "es-docs-es-validacion-vehiculos-chile-respuesta-3"
title: "🇨🇱 Chile - Información de Vehículos — Respuesta"
sourcePath: "docs-es/validacion-vehiculos/chile.mdx"
locale: "es"
category: "validacion-vehiculos"
tags:
  - "cl"
  - "validacion-vehiculos"
endpoints:
  - "/v2/cl/vehicle"
  - "/v2/cl/vehicle-soap"
  - "/v2/cl/vehicle/v3"
  - "/v2/cl/vehicle?plate=bbcc12"
sourceAnchor: "Respuesta"
slug: "/validacion-vehiculos/chile"
url: "https://docs.verifik.co/verifik-es/validacion-vehiculos/chile"
---

# 🇨🇱 Chile - Información de Vehículos
**API path(s):** /v2/cl/vehicle, /v2/cl/vehicle-soap, /v2/cl/vehicle/v3, /v2/cl/vehicle?plate=bbcc12

El servicio de validación de vehículos chilenos proporciona capacidades de verificación integrales para información vehicular. Este servicio te permite recuperar información detallada sobre vehículos registrados en Chile.
Endpoints vehiculares relacionados en Chile:
- **Información vehicular (`v2/cl/vehicle`)**: consulta comercial (Reale / getapi). Un **404** significa que la placa no está en esa fuente, no una caída del servicio.
- **Revisión técnica vehicular (`v3/cl/vehicle`)**: estado e historial de inspecciones técnicas. Ver [Chile - Revisión técnica vehicular](/verifik-es/validacion-vehiculos/chile/vehicle-technical-review). Usa esta ruta para ficha técnica / revisión (`GET /v3/cl/vehicle`, no `/v2/cl/vehicle/v3`).
- **SOAP vehicular (`v2/cl/vehicle-soap`)**: certificado de seguro obligatorio de accidentes personales. Ver [Chile - SOAP vehicular](/verifik-es/validacion-vehiculos/chile/vehicle-soap).

## Respuesta

```json
{
	"data": {
		"chasisNumber": "ME1KG0447E2066723",
		"color": "NEGRO",
		"engineNumber": "1ES3032465",
		"fines": "NO POSEE MULTAS",
		"manufacturer": "NO DISPONIBLE",
		"mark": "YAMAHA",
		"model": "FZ 16",
		"orderTheft": "NO DISPONIBLE",
		"origin": "NO DISPONIBLE",
		"owner": "",
		"plate": "BBCC12",
		"publicTrans": "NO DISPONIBLE",
		"revision": "NO DISPONIBLE",
		"rut": "26043542-6",
		"type": "MOTO",
		"typeTransPub": "NO DISPONIBLE",
		"year": "2014"
	},
	"signature": {
		"dateTime": "April 21, 2023 8:32 PM",
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

Un **404** significa que esta placa no está en la fuente Reale / getapi. No es una caída del servicio. Para revisión técnica, llama **`GET /v3/cl/vehicle`**.

  
  

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

## Características

### Consulta de Información Vehicular

-   **Registro Vehicular**: Verificar registro de vehículos en Chile
-   **Especificaciones Técnicas**: Obtener número de chasis, número de motor, fabricante, modelo
-   **Detalles del Vehículo**: Acceder a información de año, color y tipo
-   **Información del Propietario**: Recuperar RUT del propietario y detalles
-   **Estado de Multas**: Verificar multas pendientes asociadas al vehículo
-   **Estado de Robo**: Verificar si el vehículo tiene órdenes de robo
-   **Transporte Público**: Verificar clasificación de transporte público
