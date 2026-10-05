---
id: "es-docs-es-validacion-vehiculos-colombia-suspensiones-licencia-simit"
title: "SIMIT — Suspensiones de licencia — Service URL"
sourcePath: "docs-es/validacion-vehiculos/colombia/suspensiones-licencia-simit.mdx"
locale: "es"
category: "validacion-vehiculos"
tags:
  - "co"
  - "validacion-vehiculos"
endpoint: "/v2/co/simit/suspensiones"
sourceAnchor: "Service URL"
slug: "/validacion-vehiculos/colombia/suspensiones-licencia-simit"
url: "https://docs.verifik.co/verifik-es/validacion-vehiculos/colombia/suspensiones-licencia-simit"
---

# SIMIT — Suspensiones de licencia
**API path(s):** /v2/co/simit/suspensiones

## Service URL

```
GET https://api.verifik.co/v2/co/simit/suspensiones
```

La documentación canónica de API (inventario de endpoint) está en la versión en inglés: página **`/vehicle-validation/colombia/simit-suspensiones`**. Esta página resume el contrato para audiencia hispana.

Servicio **SIMIT** para consultar **suspensiones o cancelaciones** de licencia de conducción (y datos asociados cuando la fuente los provee) usando **`documentType`** y **`documentNumber`**.

### Headers

| Name | Value |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parámetros

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `documentType` | string | Sí | Tipo de documento del titular. Valores habituales: `CC`, `PA`, `CE`, `TI`, `RC`, `NIT`. |
| `documentNumber` | string | Sí | Número sin espacios ni signos. Si excede la longitud permitida, la API puede responder `409`. |

### Solicitud

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/co/simit/suspensiones", {
	params: { documentType: "CC", documentNumber: "123456789" },
	headers: {
		Accept: "application/json",
		Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
	},
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/co/simit/suspensiones"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "CC", "documentNumber": "123456789"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

### Respuesta

Igual estructura que la documentación en inglés (`200` / `404` / `409`). Los nombres de campos en `data` provienen de **SIMIT** y pueden variar frente al ejemplo.
