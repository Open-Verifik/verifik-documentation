---
id: "es-docs-es-validacion-vehiculos-argentina-rto-endpoint"
title: "Argentina - RTO — Endpoint"
sourcePath: "docs-es/validacion-vehiculos/argentina/rto.mdx"
locale: "es"
category: "validacion-vehiculos"
tags:
  - "ar"
  - "validacion-vehiculos"
endpoint: "/v2/ar/rto"
sourceAnchor: "Endpoint"
slug: "/validacion-vehiculos/argentina/rto"
url: "https://docs.verifik.co/verifik-es/validacion-vehiculos/argentina/rto"
---

# Argentina - RTO
**API path(s):** /v2/ar/rto

## Endpoint

### Endpoint

```
GET https://api.verifik.co/v2/ar/rto
```

Utiliza este endpoint para consultar registros de inspección RTO argentinos por placa. La respuesta incluye resultado de inspección, tipo de inspección, fechas de inspección y vencimiento, certificado, categoría de escalabilidad, centro de inspección y tipo de alerta.

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

const { data } = await axios.get('https://api.verifik.co/v2/ar/rto', {
  params: { plate: 'AA123BB' },
  headers: {
    Accept: 'application/json',
    Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
  },
});

console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/ar/rto"
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
        "plate": "AA123BB",
        "result": "CONDICIONAL",
        "inspectionType": "RTO",
        "inspectionDate": "2026-01-15",
        "expirationDate": "2027-01-15",
        "certificate": "RTO-10000001",
        "scalabilityCategory": "L",
        "inspectionCenter": "CENT UTN",
        "alertType": "danger"
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
