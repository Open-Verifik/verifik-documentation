---
id: "es-docs-es-validacion-vehiculos-colombia-resoluciones-simit-endpoint"
title: "SIMIT - Resoluciones — Endpoint"
sourcePath: "docs-es/validacion-vehiculos/colombia/resoluciones-simit.mdx"
locale: "es"
category: "validacion-vehiculos"
tags:
  - "co"
  - "validacion-vehiculos"
endpoint: "/v2/co/simit/resoluciones"
sourceAnchor: "Endpoint"
slug: "/validacion-vehiculos/colombia/resoluciones-simit"
url: "https://docs.verifik.co/verifik-es/validacion-vehiculos/colombia/resoluciones-simit"
---

# SIMIT - Resoluciones
**API path(s):** /v2/co/simit/resoluciones

## Endpoint

```
https://api.verifik.co/v2/co/simit/resoluciones
```

El Servicio de Resoluciones SIMIT proporciona acceso a información detallada sobre resoluciones de violaciones de tráfico para una persona o empresa específica en Colombia. Este servicio devuelve datos incluyendo el nombre del infractor, el estado de la resolución, la fecha de la resolución y el monto adeudado.

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

const { data } = await axios.get("https://api.verifik.co/v2/co/simit/resoluciones", {
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

url = "https://api.verifik.co/v2/co/simit/resoluciones"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "CC", "documentNumber": "123456789"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

### Respuesta

  

```json
{
  "data": {
    "resoluciones": [
      {
        "estadosResoluciones": "Pendiente de pago",
        "fechaComparendo": "20190503",
        "fechaResolucion": "20191001",
        "nombresInfractores": "PEPE SALGADO",
        "NúmeroComparendo": "99999999000000000936",
        "resoluciones": "S709332197",
        "secretarias": "Barrancabermeja",
        "total": "146770.0"
      }
    ]
  },
  "signature": {"message": "Certified by Verifik.co", "dateTime": "March 3, 2022 4:09 PM"}
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
