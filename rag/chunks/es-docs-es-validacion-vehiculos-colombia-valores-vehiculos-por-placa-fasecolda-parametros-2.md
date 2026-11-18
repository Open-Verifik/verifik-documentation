---
id: "es-docs-es-validacion-vehiculos-colombia-valores-vehiculos-por-placa-fasecolda-parametros-2"
title: "Valores de Vehículos por Placa — Parámetros"
sourcePath: "docs-es/validacion-vehiculos/colombia/valores-vehiculos-por-placa-fasecolda.mdx"
locale: "es"
category: "validacion-vehiculos"
tags:
  - "co"
  - "validacion-vehiculos"
endpoint: "/v2/co/fasecolda/values-by-plate"
sourceAnchor: "Parámetros"
slug: "/validacion-de-vehiculo/colombia/valores-de-vehiculos-por-placa-fasecolda"
url: "https://docs.verifik.co/verifik-es/validacion-de-vehiculo/colombia/valores-de-vehiculos-por-placa-fasecolda"
---

# Valores de Vehículos por Placa
**API path(s):** /v2/co/fasecolda/values-by-plate

La API de Valores de Vehículos por Placa Fasecolda de Verifik te ayuda a obtener información completa de vehículos usando placas de matrícula. Está diseñada para agilizar tus procesos de verificación de vehículos, proporcionar valoraciones precisas y asegurar que tengas datos completos del vehículo.
Creamos esta integración para empresas que necesitan una forma rápida, segura y automatizada de acceder a información y valores de vehículos usando placas de matrícula.

## Parámetros

| Nombre | Tipo | Requerido | Descripción |
| --- | --- | --- | --- |
| `plate` | string | Sí | Placa a consultar sin espacios ni puntos. |

### Solicitud

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/co/fasecolda/values-by-plate", {
  params: { plate: "ABC123" },
  headers: { 
    Accept: "application/json", 
    Authorization: `Bearer ${process.env.VERIFIK_TOKEN}` 
  },
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/co/fasecolda/values-by-plate"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"plate": "ABC123"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

### Respuesta

  

```json
{
  "data": {
    "absShow": "NO",
    "airbags": "0",
    "airconditioningShow": "SI",
    "axles": "2",
    "bcpp": "64200",
    "brakes": "DISCO/TAMBOR",
    "capacityLoad": "0",
    "capacityPassengers": "5",
    "category": "LIVIANO PASAJEROS",
    "class": "AUTOMOVIL",
    "country": "COL",
    "cylinderCapacity": "1598",
    "doors": "5",
    "electricChairs": "0",
    "electricGlasses": "0",
    "electricMirrors": "0",
    "explorersShow": "NO",
    "foodSystem": "NO APLICA",
    "fuel": "GASOLINA",
    "groupUpdate": "1",
    "homoloCode": "08001151",
    "importedShow": "NO",
    "line1": "SANDERO [FL]",
    "line2": "AUTHENTIQUE",
    "line3": "MT 1600CC 8V AA",
    "long": "4057",
    "marke": "RENAULT",
    "novelty": "A",
    "observation": "",
    "plate": "ABC123",
    "power": "90",
    "rearSuspension": "NO APLICA",
    "reverseCameraShow": "NO",
    "segmentCylinder": "L",
    "segmentSize": "B",
    "sensorsShow": "NO",
    "service": "PARTICULAR",
    "sunroofShow": "NO",
    "tachometer": "NO APLICA",
    "traction": "DELANTERA",
    "transmission": "4X2",
    "typeAddress": "HIDRÁULICA",
    "typeAirConditioning": "MANUAL",
    "typeBox": "MECANICA",
    "typeHeadlights": "HALOGENO",
    "typology": "HATCHBACK",
    "upholsteryLeatherShow": "NO",
    "valueModel": [
      {
        "modelo": "2016",
        "valor": 34500,
        "estado": "USADO",
        "modeloId": 47,
        "idEstado": 1
      },
      {
        "modelo": "2015",
        "valor": 32800,
        "estado": "USADO",
        "modeloId": 46,
        "idEstado": 1
      }
    ],
    "weight": "1108"
  },
  "signature": {"message": "Certified by Verifik.co", "dateTime": "October 12, 2023 7:38 PM"},
  "id": "mhlt7"
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
