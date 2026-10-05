---
id: "es-docs-es-vehicle-validation-colombia-verifik-pico-y-placa-for-bogota-service-url"
title: "Pico y Placa — Service URL"
sourcePath: "docs-es/vehicle-validation/colombia/verifik-pico-y-placa-for-bogota.mdx"
locale: "es"
category: "vehicle-validation"
tags:
  - "co"
  - "vehicle-validation"
endpoint: "/v2/co/vehiculo/pico-y-placa"
sourceAnchor: "Service URL"
slug: "/vehicle-validation/colombia/verifik-pico-y-placa-for-bogota"
url: "https://docs.verifik.co/verifik-es/vehicle-validation/colombia/verifik-pico-y-placa-for-bogota"
---

# Pico y Placa
**API path(s):** /v2/co/vehiculo/pico-y-placa

## Service URL

```
https://api.verifik.co/v2/co/vehiculo/pico-y-placa
```

Este servicio proporciona información en tiempo real sobre el horario de Pico y Placa para vehículos registrados en Bogotá, Colombia. Pico y Placa es una política de restricción de tráfico que limita la circulación de vehículos basándose en el último dígito de la placa de matrícula. La API recupera información sobre cualquier excepción o condición especial que pueda aplicar.

### Headers

| Name | Value |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parámetros

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `plate` | string | Yes | Placa del vehículo a consultar. |

### Solicitud

  

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

### Respuesta

  

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
