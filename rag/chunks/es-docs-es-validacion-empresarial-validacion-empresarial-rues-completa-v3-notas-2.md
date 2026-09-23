---
id: "es-docs-es-validacion-empresarial-validacion-empresarial-rues-completa-v3-notas-2"
title: "Colombia — RUES expediente completo (v3) — Notas"
sourcePath: "docs-es/validacion-empresarial/validacion-empresarial-rues-completa-v3.mdx"
locale: "es"
category: "validacion-empresarial"
tags:
  - "validacion-empresarial"
sourceAnchor: "Notas"
slug: "/business-validation/rues-complete-v3"
url: "https://docs.verifik.co/verifik-es/business-validation/rues-complete-v3"
---

# Colombia — RUES expediente completo (v3)

Recupera información empresarial **completa** del registro RUES de Colombia (mismos parámetros que `GET /v3/co/rues`, con mucho más detalle en la respuesta).

## Notas

- Esta ruta solo admite los parámetros anteriores. **`municipality`**, **`chamber`** y **`page`** **no** forman parte de **`GET /v3/co/rues-complete`**.
- Para un **resumen** más ligero, usa **`GET /v3/co/rues`** ([Colombia — Consulta RUES (v3)](/verifik-es/business-validation/colombia-rues-v3)).
- **Precio:** la consulta completa tiene un costo mayor que la básica porque Verifik consolida más detalle de RUES (representantes, actividades, establecimientos, etc.) en una sola respuesta firmada.

### Solicitud

  

```javascript

const { data } = await axios.get(
  "https://api.verifik.co/v3/co/rues-complete",
  {
    params: { category: "RM", documentNumber: "1121329661", documentType: "NIT" },
    headers: { Accept: "application/json", Authorization: `Bearer ${process.env.VERIFIK_TOKEN}` },
  }
);
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v3/co/rues-complete"
headers = {
    "Accept": "application/json",
    "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"
}
params = {"category": "RM", "documentNumber": "1121329661", "documentType": "NIT"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```
