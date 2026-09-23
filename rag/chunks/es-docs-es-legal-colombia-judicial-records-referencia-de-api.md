---
id: "es-docs-es-legal-colombia-judicial-records-referencia-de-api"
title: "Colombia — Antecedentes judiciales (expedientes) — Referencia de API"
sourcePath: "docs-es/legal/colombia-judicial-records.mdx"
locale: "es"
category: "legal"
tags:
  - "co"
  - "legal"
endpoints:
  - "/v2/co/rama/juzgado/expedientes"
  - "/v2/co/rama/juzgado/expedientes?documenttype=cc&documentnumber=1234567890&city=bogota"
sourceAnchor: "Referencia de API"
slug: "/legal/antecedentes-judiciales-colombia"
url: "https://docs.verifik.co/verifik-es/legal/antecedentes-judiciales-colombia"
---

# Colombia — Antecedentes judiciales (expedientes)
**API path(s):** /v2/co/rama/juzgado/expedientes, /v2/co/rama/juzgado/expedientes?documenttype=cc&documentnumber=1234567890&city=bogota

## Referencia de API

Este endpoint devuelve **datos de expediente judicial** desde el sistema judicial colombiano para titulares de **CC** (**cédula de ciudadanía**) en una **ciudad** (circuito) determinada. Suele incluir despacho (**EPMS**), fechas, municipio, radicación y nombres de partes cuando la fuente los provee.

## Referencia de API

### Endpoint

```
GET https://api.verifik.co/v2/co/rama/juzgado/expedientes
```

Envía **`documentType`**, **`documentNumber`** y **`city`** en la **query**.

### Encabezados

| Nombre        | Valor              |
| ------------- | ------------------ |
| Accept        | `application/json` |
| Authorization | `Bearer `   |

### Parámetros

| Nombre           | Tipo   | Requerido | Descripción |
| ---------------- | ------ | --------- | ----------- |
| `documentType`   | string | Sí        | Debe ser **`CC`**. |
| `documentNumber` | string | Sí        | Número de documento según la consulta. |
| `city`           | string | Sí        | Código de ciudad/circuito, p. ej. **`BOGOTA`**, **`MEDELLIN`**, **`CALI`**, **`BARRANQUILLA`**, u otros admitidos por la integración. |

### Solicitud

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/co/rama/juzgado/expedientes", {
	params: {
		documentType: "CC",
		documentNumber: "1234567890",
		city: "BOGOTA",
	},
	headers: {
		Accept: "application/json",
		Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
	},
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/co/rama/juzgado/expedientes"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "CC", "documentNumber": "1234567890", "city": "BOGOTA"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

  
  

```bash
curl -sS "https://api.verifik.co/v2/co/rama/juzgado/expedientes?documentType=CC&documentNumber=1234567890&city=BOGOTA" \
  -H "Accept: application/json" \
  -H "Authorization: Bearer $VERIFIK_TOKEN"
```
