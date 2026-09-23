---
id: "es-docs-es-validacion-vehiculos-colombia-runt-propietarios-vehiculo-endpoint"
title: "RUNT - Propietarios de vehículo por placa — Endpoint"
sourcePath: "docs-es/validacion-vehiculos/colombia/runt-propietarios-vehiculo.mdx"
locale: "es"
category: "validacion-vehiculos"
tags:
  - "co"
  - "validacion-vehiculos"
endpoints:
  - "/v2/co/runt/propietarios"
  - "/v2/co/runt/vehiculo/owners"
sourceAnchor: "Endpoint"
slug: "/validacion-vehiculos/colombia/runt-propietarios-vehiculo"
url: "https://docs.verifik.co/verifik-es/validacion-vehiculos/colombia/runt-propietarios-vehiculo"
---

# RUNT - Propietarios de vehículo por placa
**API path(s):** /v2/co/runt/propietarios, /v2/co/runt/vehiculo/owners

## Endpoint

Consulta los datos básicos de un vehículo colombiano y sus registros de propiedad usando únicamente la placa. Es útil para verificar titularidad, vincular vehículos y realizar procesos de debida diligencia.

### Endpoint

```
GET https://api.verifik.co/v2/co/runt/propietarios
```

La respuesta incluye `plate`, `brand`, `line`, `model` y un arreglo `owners` con identidad del propietario, período de propiedad, financiación, prenda y registro cuando estén disponibles. `GET /v2/co/runt/vehiculo/owners` es un alias legado del mismo handler; las integraciones nuevas deben usar `propietarios`.

### Headers

| Nombre | Valor |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parámetros

| Nombre | Tipo | Obligatorio | Descripción | Ejemplo |
| --- | --- | --- | --- | --- |
| `plate` | string | Sí | Placa colombiana de 5 a 9 caracteres alfanuméricos. | `CRL299` |

### Solicitud

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/co/runt/propietarios", {
	params: { plate: "CRL299" },
	headers: {
		Accept: "application/json",
		Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
	},
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/co/runt/propietarios"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
response = requests.get(url, headers=headers, params={"plate": "CRL299"})
print(response.json())
```

### Respuesta

  

```json
{
	"data": {
		"plate": "CRL299",
		"brand": "CHEVROLET",
		"line": "CRUZE",
		"model": "2012",
		"owners": [
			{
				"documentIssueDate": null,
				"documentNumber": "********",
				"documentType": "CC",
				"entity": "ENTIDAD FINANCIERA",
				"financingTime": 42.03,
				"financingType": "Prenda",
				"firstName": "PROPIETARIO",
				"fullName": "PROPIETARIO EJEMPLO",
				"lastName": "EJEMPLO",
				"ownerId": 10000001,
				"ownershipDuration": { "days": 23, "months": 6, "years": 8 },
				"ownershipEndDate": "2020-02-13T05:00:00.000+0000",
				"ownershipStartDate": "2011-07-21T05:00:00.000+0000",
				"pledge": "Prenda levantada",
				"registraduriaStatus": null,
				"vehicleRegistryNumber": "15514772"
			}
		]
	},
	"signature": {
		"dateTime": "September 8, 2026 11:00 PM",
		"message": "Certified by Verifik.co"
	},
	"id": "ABCDE"
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
	"message": "missing plate"
}
```
