---
id: "es-docs-es-validacion-vehiculos-argentina-solicitud-2"
title: "Argentina - Información Vehicular — Solicitud"
sourcePath: "docs-es/validacion-vehiculos/argentina.md"
locale: "es"
category: "validacion-vehiculos"
tags:
  - "ar"
  - "validacion-vehiculos"
endpoint: "/v2/ar/vehicle"
sourceAnchor: "Solicitud"
slug: "/validacion-de-vehiculo/argentina"
url: "https://docs.verifik.co/verifik-es/validacion-de-vehiculo/argentina"
---

# Argentina - Información Vehicular
**API path(s):** /v2/ar/vehicle

## Solicitud

```javascript

const options = {
	method: "GET",
	url: "https://api.verifik.co/v2/ar/vehicle",
	params: { plate: "AA123BB" },
	headers: {
		Accept: "application/json",
		Authorization: "Bearer ",
	},
};

try {
	const { data } = await axios.request(options);
	console.log(data);
} catch (error) {
	console.error(error);
}
```

  
  

```php
 "AA123BB"
]);
curl_setopt($ch, CURLOPT_URL, "https://api.verifik.co/v2/ar/vehicle?".$query);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);
echo $response;
```

  
  

```python

url = "https://api.verifik.co/v2/ar/vehicle"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"plate": "AA123BB"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

### Respuesta

  

```json
{
	"data": {
		"brand": "HERMANN",
		"codeRegistrySectional": "2097",
		"isPlateMercosur": "true",
		"model": "FURGON",
		"plate": "AA123BB",
		"recordAddress": "AV. CORRIENTES 2063  PISO: 1 DPTO: 35",
		"registrationDenomination": "CAPITAL FEDERAL N° 097",
		"registrationLocality": "CABA",
		"registrationProvince": "",
		"type": "MOTOVEHICULO",
		"version": "S.FP.3E.98 2+1",
		"year": "2021"
	},
	"signature": {
		"dateTime": "October 10, 2025 6:21 PM",
		"message": "Certified by Verifik.co"
	},
	"id": "2SJOD"
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
