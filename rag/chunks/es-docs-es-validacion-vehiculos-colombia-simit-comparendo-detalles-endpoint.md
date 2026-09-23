---
id: "es-docs-es-validacion-vehiculos-colombia-simit-comparendo-detalles-endpoint"
title: "SIMIT - Detalles de comparendo — Endpoint"
sourcePath: "docs-es/validacion-vehiculos/colombia/simit-comparendo-detalles.mdx"
locale: "es"
category: "validacion-vehiculos"
tags:
  - "co"
  - "validacion-vehiculos"
endpoints:
  - "/v2/co/simit/comparendo"
  - "/v2/co/simit/comparendos"
sourceAnchor: "Endpoint"
slug: "/validacion-vehiculos/colombia/simit-comparendo-detalles"
url: "https://docs.verifik.co/verifik-es/validacion-vehiculos/colombia/simit-comparendo-detalles"
---

# SIMIT - Detalles de comparendo
**API path(s):** /v2/co/simit/comparendo, /v2/co/simit/comparendos

## Endpoint

```
https://api.verifik.co/v2/co/simit/comparendo
```

El servicio de **Detalles de comparendo SIMIT** devuelve **información detallada de un comparendo** cuando proporciona el documento, el número de comparendo y el identificador del organismo de tránsito. Complementa el endpoint de **listado** [SIMIT - Multas](/verifik-es/validacion-vehiculos/colombia/multas-simit) (`GET /v2/co/simit/comparendos`), que devuelve todos los comparendos de una persona.

Úselo para **verificación de multas**, **revisión de disputas** y **cumplimiento de flotas**.

### Headers

| Name | Value |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parámetros

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `documentType` | string | Yes | Tipo de documento. Valores válidos: `CC`, `CE`, `PA`, `PPT`, `NIT`, `RC`, `TI`. |
| `documentNumber` | string | Yes | Número de documento a consultar, sin espacios ni puntos. |
| `numeroComparendo` | string | Yes | Número de comparendo SIMIT. |
| `idOrganismoTransito` | string | Yes | Identificador del organismo de tránsito en SIMIT. |

### Solicitud

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/co/simit/comparendo", {
  params: {
    documentType: "CC",
    documentNumber: "10000001",
    numeroComparendo: "2561200100010000000001",
    idOrganismoTransito: "25612100",
  },
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
  },
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/co/simit/comparendo"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {
    "documentType": "CC",
    "documentNumber": "10000001",
    "numeroComparendo": "2561200100010000000001",
    "idOrganismoTransito": "25612100",
}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```
