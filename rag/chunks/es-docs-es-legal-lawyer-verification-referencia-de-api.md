---
id: "es-docs-es-legal-lawyer-verification-referencia-de-api"
title: "Colombia — Consulta de abogados — Referencia de API"
sourcePath: "docs-es/legal/lawyer-verification.mdx"
locale: "es"
category: "legal"
tags:
  - "co"
  - "legal"
endpoint: "/v2/co/rama/abogados"
sourceAnchor: "Referencia de API"
slug: "/legal/verificacion-abogados"
url: "https://docs.verifik.co/verifik-es/legal/verificacion-abogados"
---

# Colombia — Consulta de abogados
**API path(s):** /v2/co/rama/abogados

## Referencia de API

El endpoint **Consulta de abogados** interroga el **registro público de abogados** (integración Rama Judicial) con **`documentType`** y **`documentNumber`**.

**Valores admitidos de `documentType`:** **`CC`**, **`CE`** o **`NIT`**.

## Referencia de API

### Endpoint

```
GET https://api.verifik.co/v2/co/rama/abogados
```

Envía **`documentType`** y **`documentNumber`** en la **query**.

### Encabezados

| Nombre        | Valor              |
| ------------- | ------------------ |
| Accept        | `application/json` |
| Authorization | `Bearer `   |

### Parámetros

| Nombre             | Tipo   | Requerido | Descripción                                                                 |
| ------------------ | ------ | --------- | --------------------------------------------------------------------------- |
| `documentType`     | string | Sí        | `CC`, `CE` o `NIT`.                                                         |
| `documentNumber`   | string | Sí        | Número de documento o NIT a consultar.                                       |

### Solicitud

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/co/rama/abogados", {
	params: { documentType: "CC", documentNumber: "123456789" },
	headers: {
		Accept: "application/json",
		Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
	},
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/co/rama/abogados"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "CC", "documentNumber": "123456789"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```
