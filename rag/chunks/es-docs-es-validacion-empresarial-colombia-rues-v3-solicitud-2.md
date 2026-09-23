---
id: "es-docs-es-validacion-empresarial-colombia-rues-v3-solicitud-2"
title: "Colombia — Consulta RUES (v3) — Solicitud"
sourcePath: "docs-es/validacion-empresarial/colombia-rues-v3.mdx"
locale: "es"
category: "validacion-empresarial"
tags:
  - "validacion-empresarial"
sourceAnchor: "Solicitud"
slug: "/business-validation/colombia-rues-v3"
url: "https://docs.verifik.co/verifik-es/business-validation/colombia-rues-v3"
---

# Colombia — Consulta RUES (v3)

Verifik consulta **RUES** (*Registro Único Empresarial y Social*) con **`NIT`**, **categoría** de registro y devuelve un **resumen** normalizado para esa línea. Es el endpoint **básico** **`/v3/co/rues`**; para el **expediente completo** usa **`/v3/co/rues-complete`**.

## Solicitud

```javascript

const { data } = await axios.get("https://api.verifik.co/v3/co/rues", {
	params: {
		documentType: "NIT",
		documentNumber: "800096561",
		category: "RM",
	},
	headers: {
		Accept: "application/json",
		Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
	},
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v3/co/rues"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "NIT", "documentNumber": "800096561", "category": "RM"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

### Respuesta

  

```json
{
	"data": {
		"businessName": "EJEMPLO SAS",
		"documentNumber": "800096561",
		"documentType": "NIT",
		"fullNit": "800096561-7",
		"location": "…",
		"organizationType": "…",
		"status": "ACTIVA",
		"category": "RM",
		"registration": "…",
		"chamberCode": "…"
	},
	"signature": {
		"dateTime": "January 16, 2024 3:44 PM",
		"message": "Certified by Verifik.co"
	}
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
	"message": "documentType must be [NIT]"
}
```

## Casos de uso

- Verificación **KYB** rápida
- Comprobar existencia en RUES antes de un **`rues-complete`**

### Notas

- Este endpoint devuelve un **resumen**, no el expediente completo. Para representantes, actividades y establecimientos, usa **`GET /v3/co/rues-complete`** ([RUES expediente completo (v3)](/verifik-es/business-validation/rues-complete-v3)).
- **`/v2/co/rues`** es legado; nuevas integraciones en **v3**.
- **`category`** es opcional (por defecto **`RM`**); indícala cuando no consultes Registro Mercantil.
