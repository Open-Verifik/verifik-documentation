---
id: "es-docs-es-validacion-vehiculos-colombia-pico-y-placa-bogota-endpoint"
title: "Pico y Placa — Endpoint"
sourcePath: "docs-es/validacion-vehiculos/colombia/pico-y-placa-bogota.mdx"
locale: "es"
category: "validacion-vehiculos"
tags:
  - "co"
  - "validacion-vehiculos"
endpoint: "/v2/co/vehiculo/pico-y-placa"
sourceAnchor: "Endpoint"
slug: "/validacion-vehiculos/colombia/pico-y-placa-bogota"
url: "https://docs.verifik.co/verifik-es/validacion-vehiculos/colombia/pico-y-placa-bogota"
---

# Pico y Placa
**API path(s):** /v2/co/vehiculo/pico-y-placa

## Endpoint

```
GET https://api.verifik.co/v2/co/vehiculo/pico-y-placa
```

Este servicio proporciona información **en tiempo real** sobre el **Pico y Placa** para vehículos registrados en **Bogotá, Colombia**. Es una política de restricción que limita la circulación según el **último dígito** de la placa. La respuesta puede incluir **excepciones** o condiciones especiales (por ejemplo discapacidad u otras autorizadas) cuando apliquen a la **`plate`** consultada.

### Headers

| Nombre       | Valor              |
| ------------ | ------------------ |
| Accept       | `application/json` |
| Authorization | `Bearer `   |

### Parámetros

| Nombre  | Tipo   | Requerido | Descripción |
| ------- | ------ | --------- | ----------- |
| `plate` | string | Sí        | Placa a consultar (sin espacios; formato de placa bogotana). |

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
