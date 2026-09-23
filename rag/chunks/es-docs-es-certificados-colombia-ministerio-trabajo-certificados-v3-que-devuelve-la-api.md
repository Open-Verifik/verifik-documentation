---
id: "es-docs-es-certificados-colombia-ministerio-trabajo-certificados-v3-que-devuelve-la-api"
title: "Colombia — Certificados Ministerio del Trabajo (v3) — Qué devuelve la API"
sourcePath: "docs-es/certificados/colombia-ministerio-trabajo-certificados-v3.mdx"
locale: "es"
category: "certificados"
tags:
  - "certificados"
sourceAnchor: "Qué devuelve la API"
slug: "/certificados/colombia-ministerio-trabajo-certificados-v3"
url: "https://docs.verifik.co/verifik-es/certificados/colombia-ministerio-trabajo-certificados-v3"
---

# Colombia — Certificados Ministerio del Trabajo (v3)

## Qué devuelve la API

Este endpoint devuelve información de **certificados del Ministerio del Trabajo** para una persona en Colombia, incluyendo datos asociados al **curso de alturas**, desde el **microservicio de Bogotá**. La integración **v3** devuelve el objeto completo y expone las filas de certificados en **`records`** (mapeado desde `constances` en origen).

## Qué devuelve la API

- **`records`** — filas de certificados / constancias
- Otros **campos** que envíe el microservicio en `data`
- Respuesta **firmada** por Verifik

## Referencia de API

### Endpoint

```
GET https://api.verifik.co/v3/co/ministerio-de-trabajo/certificados
```

Solo **GET** con **query**. La ruta legacy **`v2`** usa los mismos parámetros con otra forma de respuesta; ver notas.

Resumen: **`documentType`**, **`documentNumber`**.

### Headers

| Name | Value |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parámetros

| name | type | required | description |
| --- | --- | --- | --- |
| `documentType` | string | sí | Uno de **`CC`**, **`CE`**, **`PPT`**, **`PA`**. |
| `documentNumber` | string | sí | Número **sin** espacios ni signos. |

### Solicitud

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v3/co/ministerio-de-trabajo/certificados", {
	params: {
		documentType: "CC",
		documentNumber: "123456789",
	},
	headers: {
		Accept: "application/json",
		Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
	},
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v3/co/ministerio-de-trabajo/certificados"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "CC", "documentNumber": "123456789"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```
