---
id: "es-docs-es-validacion-vehiculos-colombia-impuestos-bogota-endpoint"
title: "Impuestos en Bogotá — Endpoint"
sourcePath: "docs-es/validacion-vehiculos/colombia/impuestos-bogota.mdx"
locale: "es"
category: "validacion-vehiculos"
tags:
  - "co"
  - "validacion-vehiculos"
endpoint: "/v2/co/bogota/vehicle/tax"
sourceAnchor: "Endpoint"
slug: "/validacion-de-vehiculo/colombia/taxes-in-bogota"
url: "https://docs.verifik.co/verifik-es/validacion-de-vehiculo/colombia/taxes-in-bogota"
---

# Impuestos en Bogotá
**API path(s):** /v2/co/bogota/vehicle/tax

## Endpoint

```
GET https://api.verifik.co/v2/co/bogota/vehicle/tax
```

Este servicio proporciona información sobre las obligaciones tributarias de un vehículo registrado en Bogotá. Necesitas proporcionar el tipo y número de documento del propietario, junto con la placa de matrícula del vehículo. La respuesta incluye detalles del vehículo y el estado de las obligaciones tributarias para años fiscales específicos.

### Headers

| Name | Value |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parámetros

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `plate` | string | Yes | Placa a consultar, sin espacios ni puntos. |
| `documentNumber` | string | Yes | Número de documento a consultar, sin espacios ni puntos. |
| `documentType` | string | Yes | Tipo de documento. Permitidos: `CC`, `NIT`. |

### Solicitud

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/co/bogota/vehicle/tax", {
  params: { 
    plate: "ABC123", 
    documentType: "CC", 
    documentNumber: "123456789" 
  },
  headers: { 
    Accept: "application/json", 
    Authorization: `Bearer ${process.env.VERIFIK_TOKEN}` 
  },
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/co/bogota/vehicle/tax"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"plate": "ABC123", "documentType": "CC", "documentNumber": "123456789"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

### Respuesta

  

```json
{
  "data": {
    "details": "",
    "documentNumber": "123456789",
    "documentType": "CC",
    "obligation": {
      "vehicle": [
        {
          "brand": "MAZDA",
          "form": "2020003010100010240",
          "linea": "050365",
          "model": "2021",
          "obligation": "1.080.000",
          "obligationStatus": "Moroso",
          "plate": "ABC123",
          "reference": "0000020034588543",
          "taxableYear": "2020",
          "totalToPay": "1.080.000"
        }
      ]
    },
    "plate": "ABC123"
  },
  "signature": {"message": "Certified by Verifik.co", "dateTime": "July 3, 2024 3:59 PM"},
  "id": "5P20N"
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
