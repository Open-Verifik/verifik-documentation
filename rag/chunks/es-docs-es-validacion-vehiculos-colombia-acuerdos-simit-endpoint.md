---
id: "es-docs-es-validacion-vehiculos-colombia-acuerdos-simit-endpoint"
title: "SIMIT - Acuerdos — Endpoint"
sourcePath: "docs-es/validacion-vehiculos/colombia/acuerdos-simit.mdx"
locale: "es"
category: "validacion-vehiculos"
tags:
  - "co"
  - "validacion-vehiculos"
endpoint: "/v2/co/simit/acuerdos"
sourceAnchor: "Endpoint"
slug: "/validacion-vehiculos/colombia/acuerdos-simit"
url: "https://docs.verifik.co/verifik-es/validacion-vehiculos/colombia/acuerdos-simit"
---

# SIMIT - Acuerdos
**API path(s):** /v2/co/simit/acuerdos

## Endpoint

```
https://api.verifik.co/v2/co/simit/acuerdos
```

El Servicio de Acuerdos SIMIT proporciona un método eficiente para recuperar acuerdos de pago relacionados con violaciones de tráfico en el sistema SIMIT de Colombia. Al consultar el servicio con detalles relevantes, los usuarios pueden obtener información completa sobre acuerdos de pago incluyendo detalles del infractor, números de resolución y montos adeudados.

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

const { data } = await axios.get("https://api.verifik.co/v2/co/simit/acuerdos", {
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

url = "https://api.verifik.co/v2/co/simit/acuerdos"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "CC", "documentNumber": "123456789"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

### Respuesta

  

```json
{
  "data": {
    "acuerdosPagos": [
      {
        "estadosResoluciones": "Acuerdo de pago",
        "fechaComparendo": "1900/01/01",
        "fechaResolucion": "2018/07/05",
        "noComparendo": "NO REPORTADO",
        "nombresInfractores": "PEPE SALGADO",
        "permitePago": "N",
        "resoluciones": "0003030",
        "secretarias": "Barrancabermeja",
        "total": "558864.0"
      }
    ]
  },
  "signature": {"message": "Certified by Verifik.co", "dateTime": "March 3, 2022 12:11 PM"}
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
