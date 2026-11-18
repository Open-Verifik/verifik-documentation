---
id: "es-docs-es-verificacion-antecendentes-verificacion-antecendentes-colombia-rui-que-retorna-esta-api"
title: "Colombia — Clasificación RUI — Qué retorna esta API"
sourcePath: "docs-es/verificacion-antecendentes/verificacion-antecendentes-colombia-rui.mdx"
locale: "es"
category: "verificacion-antecendentes"
tags:
  - "co"
  - "verificacion-antecendentes"
endpoint: "/v2/co/rui"
sourceAnchor: "Qué retorna esta API"
slug: "/verificacion-antecendentes/verificacion-antecendentes-colombia-rui"
url: "https://docs.verifik.co/verifik-es/verificacion-antecendentes/verificacion-antecendentes-colombia-rui"
---

# Colombia — Clasificación RUI
**API path(s):** /v2/co/rui

## Qué retorna esta API

Verifik consulta el **Registro Universal de Ingresos (RUI)** en **Ventanilla Social DNP** usando **`documentType`** y **`documentNumber`**.

:::info Reemplaza SISBEN
Este producto reemplaza la consulta SISBEN retirada (`GET /v2/co/sisben`). Use **`GET /v2/co/rui`** para la clasificación actual de grupo de ingresos en Ventanilla Social.
:::

## Qué retorna esta API

- **`grupoIngresos`** — descripción del grupo de ingresos cuando la fuente la entrega
- **`grupRui`** / **`nivelRui`** — letra de grupo y nivel RUI (por ejemplo `A` / `A01`)
- **Ubicación** — `municipio`, `departamento`, `codMpio`
- **Datos de la persona** — `nombre`, `sexo`, `edad` cuando existen
- Identificadores del documento (`documentType`, `documentNumber`) y una respuesta **firmada** de Verifik

## Referencia de la API

### Endpoint

```
GET https://api.verifik.co/v2/co/rui
```

Este endpoint es **solo GET** (parámetros de consulta). También se acepta `POST` con los mismos campos en el body.

### Encabezados

| Name | Value |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parámetros

| name | type | required | description |
| --- | --- | --- | --- |
| `documentType` | string | sí | Uno de **`CC`**, **`CE`**, **`TI`**, **`PPT`**, **`PEP`**, **`RC`**. |
| `documentNumber` | string | sí | Número de documento sin espacios ni puntuación (5–15 caracteres). |

### Solicitud

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/co/rui", {
	params: {
		documentType: "CC",
		documentNumber: "10000001",
	},
	headers: {
		Accept: "application/json",
		Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
	},
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/co/rui"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "CC", "documentNumber": "10000001"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```
