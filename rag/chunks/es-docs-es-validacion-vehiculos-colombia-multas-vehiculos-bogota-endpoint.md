---
id: "es-docs-es-validacion-vehiculos-colombia-multas-vehiculos-bogota-endpoint"
title: "Verificación de Multas de Vehículos — Endpoint"
sourcePath: "docs-es/validacion-vehiculos/colombia/multas-vehiculos-bogota.mdx"
locale: "es"
category: "validacion-vehiculos"
tags:
  - "co"
  - "validacion-vehiculos"
endpoint: "/v2/co/bogota/vehicle/fines"
sourceAnchor: "Endpoint"
slug: "/validacion-vehiculos/colombia/multas-vehiculos-bogota"
url: "https://docs.verifik.co/verifik-es/validacion-vehiculos/colombia/multas-vehiculos-bogota"
---

# Verificación de Multas de Vehículos
**API path(s):** /v2/co/bogota/vehicle/fines

## Endpoint

```
GET https://api.verifik.co/v2/co/bogota/vehicle/fines
```

Este servicio te permite verificar multas asociadas con un vehículo en Bogotá, Colombia, usando su número de placa de matrícula. La respuesta proporciona información detallada incluyendo tipo de multa, estado, número, fechas y detalles de pago.

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

const { data } = await axios.get("https://api.verifik.co/v2/co/bogota/vehicle/fines", {
  params: { plate: "ABC123" },
  headers: { 
    Accept: "application/json", 
    Authorization: `Bearer ${process.env.VERIFIK_TOKEN}` 
  },
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/co/bogota/vehicle/fines"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"plate": "ABC123"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

### Respuesta

  

```json
{
  "data": {
    "fines": [
      {
        "type": "Comparendo - comparendera",
        "status": "vigente",
        "number": "11001000000035429360",
        "plate": "ABC123",
        "impositionDate": "14/11/2022",
        "notificationDate": "14/11/2022",
        "balance": "468500",
        "discountValue": "0",
        "pendingBalance": "549500",
        "interest": "81000",
        "total": "549500",
        "totalCollections": "0",
        "impositionMedium": "Control en vía apoyado en dispositivos móviles",
        "courseAttendanceMessage": null,
        "installmentNumber": "0",
        "installmentStatus": null,
        "installmentCount": "0",
        "documentType": "C",
        "documentNumber": "123456789",
        "name": "MATEO VERIFIK",
        "moratoryInterest": "0"
      }
    ],
    "plate": "ABC123"
  },
  "signature": {"message": "Certified by Verifik.co", "dateTime": "July 3, 2024 4:03 PM"},
  "id": "Y5GS6"
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
