---
id: "es-docs-es-validacion-vehiculos-argentina-buenos-aires-traffic-infractions-endpoint"
title: "Buenos Aires - Infracciones de Tránsito — Endpoint"
sourcePath: "docs-es/validacion-vehiculos/argentina/buenos-aires-traffic-infractions.mdx"
locale: "es"
category: "validacion-vehiculos"
tags:
  - "ar"
  - "validacion-vehiculos"
endpoint: "/v2/ar/buenos-aires/traffic-infractions"
sourceAnchor: "Endpoint"
slug: "/validacion-vehiculos/argentina/buenos-aires-traffic-infractions"
url: "https://docs.verifik.co/verifik-es/validacion-vehiculos/argentina/buenos-aires-traffic-infractions"
---

# Buenos Aires - Infracciones de Tránsito
**API path(s):** /v2/ar/buenos-aires/traffic-infractions

## Endpoint

### Endpoint

```
GET https://api.verifik.co/v2/ar/buenos-aires/traffic-infractions
```

Utiliza este endpoint para verificar si una placa tiene infracciones de tránsito en Buenos Aires. La respuesta incluye la placa, total de registros, números de caso y acta, estado, montos, autoridad emisora, fechas y detalles de infracción cuando se encuentren registros.

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

const { data } = await axios.get('https://api.verifik.co/v2/ar/buenos-aires/traffic-infractions', {
  params: { plate: 'AA123BB' },
  headers: {
    Accept: 'application/json',
    Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
  },
});

console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/ar/buenos-aires/traffic-infractions"
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
    "infractions": [
      {
        "caseNumber": "BA-10000001",
        "actNumber": "ACT-10000001",
        "status": "Pendiente",
        "isExpired": false,
        "totalAmount": "10012501",
        "details": [
          {
            "article": "Ley 24.449",
            "description": "Exceso de velocidad"
          }
        ],
        "issuingAuthority": "Buenos Aires",
        "infractionDate": "2026-01-15T12:00:00.000Z",
        "issueDate": "2026-01-16T12:00:00.000Z",
        "dueDate": "2026-02-15T12:00:00.000Z"
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
