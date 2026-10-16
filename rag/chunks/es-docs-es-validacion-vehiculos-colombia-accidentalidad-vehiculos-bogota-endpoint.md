---
id: "es-docs-es-validacion-vehiculos-colombia-accidentalidad-vehiculos-bogota-endpoint"
title: "Accidentalidad de Vehículos — Endpoint"
sourcePath: "docs-es/validacion-vehiculos/colombia/accidentalidad-vehiculos-bogota.mdx"
locale: "es"
category: "validacion-vehiculos"
tags:
  - "co"
  - "validacion-vehiculos"
endpoint: "/v2/co/bogota/vehicle/accidentality"
sourceAnchor: "Endpoint"
slug: "/validacion-vehiculos/colombia/accidentalidad-vehiculos-bogota"
url: "https://docs.verifik.co/verifik-es/validacion-vehiculos/colombia/accidentalidad-vehiculos-bogota"
---

# Accidentalidad de Vehículos
**API path(s):** /v2/co/bogota/vehicle/accidentality

## Endpoint

```
GET https://api.verifik.co/v2/co/bogota/vehicle/accidentality
```

Este servicio proporciona información detallada sobre el historial de accidentes de un vehículo registrado en Bogotá, Colombia. La respuesta incluye un array de accidentes con fechas, números de formulario y niveles de gravedad.

### Headers

| Name | Value |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parámetros

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `plate` | string | Yes | Placa a consultar, sin espacios ni puntos. |

### Solicitud

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/co/bogota/vehicle/accidentality", {
  params: { plate: "ABC123" },
  headers: { 
    Accept: "application/json", 
    Authorization: `Bearer ${process.env.VERIFIK_TOKEN}` 
  },
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/co/bogota/vehicle/accidentality"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"plate": "ABC123"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

### Respuesta

  

```json
{
  "data": {
    "accident": [
      {
        "date": "VIERNES, 20 FEBRERO 2015 00:00",
        "form": "A1689",
        "seriousness": "SOLO DAÑOS"
      },
      {
        "date": "LUNES, 10 FEBRERO 2014 00:00",
        "form": "A1428611",
        "seriousness": "SOLO DAÑOS"
      },
      {
        "date": "SÁBADO, 9 MARZO 2013 00:00",
        "form": "A1247163",
        "seriousness": "SOLO DAÑOS"
      }
    ],
    "plate": "TSP331"
  },
  "signature": {"message": "Certified by Verifik.co", "dateTime": "July 3, 2024 3:58 PM"},
  "id": "3C9YY"
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
