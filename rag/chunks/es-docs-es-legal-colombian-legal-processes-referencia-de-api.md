---
id: "es-docs-es-legal-colombian-legal-processes-referencia-de-api"
title: "Colombia — Procesos judiciales — Referencia de API"
sourcePath: "docs-es/legal/colombian-legal-processes.mdx"
locale: "es"
category: "legal"
tags:
  - "co"
  - "legal"
endpoint: "/v2/co/rama/procesos"
sourceAnchor: "Referencia de API"
slug: "/legal/procesos-judiciales-colombianos"
url: "https://docs.verifik.co/verifik-es/legal/procesos-judiciales-colombianos"
---

# Colombia — Procesos judiciales
**API path(s):** /v2/co/rama/procesos

## Referencia de API

Este endpoint devuelve un **listado de procesos judiciales** asociados a una persona (**CC**) o empresa (**NIT**). Incluye fechas, despacho, departamento, sujetos procesales y **paginación** cuando aplica.

## Referencia de API

### Endpoint

```
GET https://api.verifik.co/v2/co/rama/procesos
```

Envía **`documentType`** y **`documentNumber`** en la **query**.

**Limitación:** la consulta en la Rama Judicial se basa en **coincidencia por nombre** vinculada al documento; no hay garantía del 100% de éxito en todos los casos.

### Encabezados

| Nombre        | Valor              |
| ------------- | ------------------ |
| Accept        | `application/json` |
| Authorization | `Bearer `   |

### Parámetros

| Nombre             | Tipo   | Requerido | Descripción                                                                 |
| ------------------ | ------ | --------- | --------------------------------------------------------------------------- |
| `documentType`     | string | Sí        | `CC` o `NIT`.                                                               |
| `documentNumber`   | string | Sí        | Número de documento o NIT.                                                    |

### Solicitud

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/co/rama/procesos", {
	params: { documentType: "CC", documentNumber: "123456789" },
	headers: {
		Accept: "application/json",
		Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
	},
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/co/rama/procesos"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "CC", "documentNumber": "123456789"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```
