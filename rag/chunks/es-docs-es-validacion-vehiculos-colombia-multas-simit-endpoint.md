---
id: "es-docs-es-validacion-vehiculos-colombia-multas-simit-endpoint"
title: "SIMIT - Multas — Endpoint"
sourcePath: "docs-es/validacion-vehiculos/colombia/multas-simit.mdx"
locale: "es"
category: "validacion-vehiculos"
tags:
  - "co"
  - "validacion-vehiculos"
endpoint: "/v2/co/simit/comparendos"
sourceAnchor: "Endpoint"
slug: "/validacion-vehiculos/colombia/multas-simit"
url: "https://docs.verifik.co/verifik-es/validacion-vehiculos/colombia/multas-simit"
---

# SIMIT - Multas
**API path(s):** /v2/co/simit/comparendos

## Endpoint

```
https://api.verifik.co/v2/co/simit/comparendos
```

El Servicio de Comparendos proporciona información detallada sobre comparendos asociados con un vehículo específico en Colombia. Al ingresar el número de placa de matrícula del vehículo, los usuarios pueden acceder a detalles completos sobre cada comparendo, incluyendo su estado, fecha, ubicación y el tipo de violación de tráfico.

### Headers

| Name | Value |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parámetros

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `documentType` | string | Yes | Tipo de documento. Parámetros válidos: `CC`, `PA`, `CE`, `TI`, `RC`. |
| `documentNumber` | string | Yes | Número de documento a consultar, sin espacios ni puntos. |

### Solicitud

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/co/simit/comparendos", {
  params: { 
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

url = "https://api.verifik.co/v2/co/simit/comparendos"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "CC", "documentNumber": "123456789"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

### Respuesta

  

```json
{
  "data": {
    "comparendos": [
      {
        "tipovehiculo": "AUTOMOVIL",
        "estadoComparendo": "Pendiente",
        "fechaComparendo": "2016/02/23",
        "fotodeteccion": false,
        "NúmeroComparendo": "2561200100015264662173",
        "placavehiculo": "AAA123",
        "secretariaComparendo": "Ricaurte",
        "total": 344730,
        "idOrganismoTransito": "25612123",
        "codigoInfraccion": "C35",
        "descripcionInfraccion": "No realizar la revisión técnico-mecánica en el plazo legal establecido o cuando el vehiculo no se encuentre en adecuadas condiciones técnico-mecánicas o de emisión de gases, aun cuando porte los certificados correspondientes.",
        "direccionComparendo": "CARRERA 9 CON CALLE 10 AGUA DE DIOS",
        "infractorComparendo": "CAR BER",
        "serviciovehiculo": "Particular"
      }
    ]
  },
  "signature": {"message": "Certified by Verifik.co", "dateTime": "February 13, 2023 6:17 AM"}
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
  "message": "missing documentType. missing documentNumber"
}
```
