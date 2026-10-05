---
id: "en-docs-vehicle-validation-colombia-bogota-pico-y-placa-endpoint"
title: "Pico y Placa — Endpoint"
sourcePath: "docs/vehicle-validation/colombia/bogota-pico-y-placa.mdx"
locale: "en"
category: "vehicle-validation"
tags:
  - "co"
  - "vehicle-validation"
endpoint: "/v2/co/vehiculo/pico-y-placa"
sourceAnchor: "Endpoint"
slug: "/vehicle-validation/colombia/vehicle-validation-colombia-bogota-pico-y-placa"
url: "https://docs.verifik.co/vehicle-validation/colombia/vehicle-validation-colombia-bogota-pico-y-placa"
---

# Pico y Placa
**API path(s):** /v2/co/vehiculo/pico-y-placa

## Endpoint

```
GET https://api.verifik.co/v2/co/vehiculo/pico-y-placa
```

This service provides **real-time** information on the **Pico y Placa** schedule for vehicles registered in **Bogotá, Colombia**. Pico y Placa is a traffic restriction policy that limits circulation based on the **last digit** of the license plate. The response can include **exceptions** or special conditions (for example disability or other approved exemptions) when they apply to the queried **`plate`**.

### Headers

| Name | Value |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `plate` | string | Yes | License plate to query (no spaces; use Bogotá plate format). |

### Request

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/co/vehiculo/pico-y-placa", {
  params: { plate: "ABC123" },
  headers: { 
    Accept: "application/json", 
    Authorization: `Bearer ${process.env.VERIFIK_TOKEN}` 
  },
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/co/vehiculo/pico-y-placa"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"plate": "ABC123"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

### Response

  

```json
{
  "data": {
    "placa": "ABC123",
    "causalExcepcion": "Discapacidad - Documento #: 12345678",
    "activoDesde": "16-06-2022 07:00:28 PM",
    "estado": "ACTIVO",
    "detalles": {
      "informaciónDeLaExcepcion": [
        "Tipo Excepción: Discapacidad",
        "Descripción: vehiculos de personas con discapacidad.Automotores que transporten o sean conducidos por personas con discapacidad permanente, cuya condición motora, sensorial o mental limite su movilidad, siempre y cuando cumplan las normas establecidas.",
        "Fecha Registro: 16-06-2022 05:25:29 PM"
      ],
      "observaciones": [
        "Información validada ante en RUNT. "
      ],
      "informaciónDeLaPersonaEnCondicionDeDiscapacidad": [
        "Nombres: MATEO VERIFIK",
        "No. Documento: 1112345678"
      ],
      "informaciónDelvehiculo": [
        "Placa: EHO820",
        "ACTIVO"
      ]
    }
  },
  "signature": {"message": "Certified by Verifik.co", "dateTime": "August 23, 2022 10:55 AM"}
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
