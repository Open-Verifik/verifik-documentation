---
id: "es-docs-es-validacion-vehiculos-argentina-buenos-aires-technical-inspection-endpoint"
title: "Buenos Aires - Inspección Técnica — Endpoint"
sourcePath: "docs-es/validacion-vehiculos/argentina/buenos-aires-technical-inspection.mdx"
locale: "es"
category: "validacion-vehiculos"
tags:
  - "ar"
  - "validacion-vehiculos"
endpoint: "/v2/ar/buenos-aires/technical-inspection"
sourceAnchor: "Endpoint"
slug: "/validacion-vehiculos/argentina/buenos-aires-technical-inspection"
url: "https://docs.verifik.co/verifik-es/validacion-vehiculos/argentina/buenos-aires-technical-inspection"
---

# Buenos Aires - Inspección Técnica
**API path(s):** /v2/ar/buenos-aires/technical-inspection

## Endpoint

### Endpoint

```
GET https://api.verifik.co/v2/ar/buenos-aires/technical-inspection
```

Utiliza este endpoint para consultar el historial de inspección técnica vehicular en Buenos Aires por placa. La respuesta devuelve registros con identificadores de verificación, fechas de verificación y vencimiento, tipo de resultado, número de oblea, comentarios, marca y modelo del vehículo, y nombre de la planta de inspección.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Accept        | `application/json` |
| Authorization | `Bearer `   |

### Parámetros

| Nombre | Tipo | Requerido | Descripción |
| ---- | ---- | -------- | ----------- |
| `plate` | string | **Yes** | Formato Mercosur `AA-123-BB` (envíe `AA123BB`, sin espacios ni signos de puntuación). |

### Solicitud

  

```javascript

const { data } = await axios.get('https://api.verifik.co/v2/ar/buenos-aires/technical-inspection', {
  params: { plate: 'AA123BB' },
  headers: {
    Accept: 'application/json',
    Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
  },
});

console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/ar/buenos-aires/technical-inspection"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"plate": "AA123BB"}
response = requests.get(url, headers=headers, params=params)
print(response.json())
```

### Respuesta

  

```json
{
  "data": {
    "plate": "AA123BB",
    "totalRecords": "1",
    "inspections": [
      {
        "verificationId": "10000001",
        "verificationDate": "2026-01-15 10:30:00",
        "resultTypeId": "2",
        "comments": "Observada",
        "stickerNumber": "OB-10000001",
        "expirationDate": "2027-01-15",
        "isReverification": false,
        "brand": "TOYOTA",
        "model": "COROLLA",
        "plantName": "Planta VTV Buenos Aires"
      }
    ]
  },
  "signature": {
    "dateTime": "July 1, 2026 10:00 AM",
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
