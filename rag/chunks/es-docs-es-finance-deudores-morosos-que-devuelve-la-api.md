---
id: "es-docs-es-finance-deudores-morosos-que-devuelve-la-api"
title: "Colombia — Deudores morosos (BDME) — Qué devuelve la API"
sourcePath: "docs-es/finance/deudores-morosos.mdx"
locale: "es"
category: "finance"
tags:
  - "co"
  - "finance"
endpoint: "/v2/co/deudoresmorosos"
sourceAnchor: "Qué devuelve la API"
slug: "/finance/deudores-morosos"
url: "https://docs.verifik.co/verifik-es/finance/deudores-morosos"
---

# Colombia — Deudores morosos (BDME)
**API path(s):** /v2/co/deudoresmorosos

## Qué devuelve la API

Verifik consulta la **BDME** (*Base de Datos de Morosos*), el boletín de **deudores morosos** de la **Contaduría General de la Nación**, usando **`documentType`** y **`documentNumber`**. La integración devuelve **estado** y campos de **reporte** cuando la fuente responde con coincidencia.

## Qué devuelve la API

- Eco de **`documentType`** / **`documentNumber`**
- **`status`** y campos de entidad / ciudad / teléfono cuando existan
- Respuesta **firmada** por Verifik

## Referencia de API

### Endpoint

```
GET https://api.verifik.co/v2/co/deudoresmorosos
```

Solo **GET** por query: **`documentType`** y **`documentNumber`**. No hay ruta **POST** en el backend actual.

### Headers

| Name | Value |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parámetros

| name | type | required | description |
| --- | --- | --- | --- |
| `documentType` | string | sí | Tipo de documento. Usa **`CC`**, **`CE`**, **`PA`**, **`NIT`** o **`PPT`** (mapeo a tipos BDME en la integración). |
| `documentNumber` | string | sí | Número **sin** espacios ni signos. |

### Solicitud

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/co/deudoresmorosos", {
	params: {
		documentType: "NIT",
		documentNumber: "800096561",
	},
	headers: {
		Accept: "application/json",
		Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
	},
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/co/deudoresmorosos"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "NIT", "documentNumber": "800096561"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```
