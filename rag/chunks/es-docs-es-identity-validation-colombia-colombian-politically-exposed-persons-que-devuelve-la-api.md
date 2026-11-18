---
id: "es-docs-es-identity-validation-colombia-colombian-politically-exposed-persons-que-devuelve-la-api"
title: "Colombia — Consulta PEP (personas políticamente expuestas) — Qué devuelve la API"
sourcePath: "docs-es/identity-validation/colombia/colombian-politically-exposed-persons.mdx"
locale: "es"
category: "identity-validation"
tags:
  - "co"
  - "identity-validation"
endpoint: "/v2/co/politically-exposed-persons"
sourceAnchor: "Qué devuelve la API"
slug: "/identity-validation/colombia/colombian-politically-exposed-persons"
url: "https://docs.verifik.co/verifik-es/identity-validation/colombia/colombian-politically-exposed-persons"
---

# Colombia — Consulta PEP (personas políticamente expuestas)
**API path(s):** /v2/co/politically-exposed-persons

## Qué devuelve la API

Este endpoint realiza **cribado AML / cumplimiento**: verifica si una **persona natural** o **empresa** colombiana figura como **persona políticamente expuesta (PEP)** en las fuentes integradas por Verifik, incluyendo detalle de declaraciones cuando la integración lo devuelve.

**No** es el **PEP** migratorio (*Permiso Especial de Permanencia*). Para el permiso de estadía ante Migración Colombia, usa [Colombia — PEP (Permiso Especial de Permanencia)](/verifik-es/identidad/colombia-id-pep).

## Qué devuelve la API

- Si el sujeto tiene **registros tipo PEP** en el conjunto de datos integrado
- Entradas en **`detail`** (declarante, entidad, cargo, tipo de publicación, fechas, estado) cuando la fuente las provee
- Respuestas **firmadas**; los resultados pueden **cachearse** en el servidor

## Referencia de API

### Endpoint

```
GET https://api.verifik.co/v2/co/politically-exposed-persons
```

Envía **`documentType`** y **`documentNumber`** en la **query**. Solo está expuesto como **GET**.

### Encabezados

| Nombre | Valor |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parámetros

| nombre | tipo | requerido | descripción |
| --- | --- | --- | --- |
| `documentType` | string | sí | **`CC`** (persona natural) o **`NIT`** (empresa). |
| `documentNumber` | string | sí | Número de documento o NIT sin espacios ni puntuación. |

### Solicitud

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/co/politically-exposed-persons", {
	params: { documentType: "CC", documentNumber: "123456789" },
	headers: {
		Accept: "application/json",
		Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
	},
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/co/politically-exposed-persons"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "CC", "documentNumber": "123456789"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```
