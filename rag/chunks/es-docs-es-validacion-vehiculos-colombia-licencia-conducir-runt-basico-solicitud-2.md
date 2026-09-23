---
id: "es-docs-es-validacion-vehiculos-colombia-licencia-conducir-runt-basico-solicitud-2"
title: "Consulta de Licencia de Conducción en RUNT (Básico) | Verifik API Colombia — Solicitud"
sourcePath: "docs-es/validacion-vehiculos/colombia/licencia-conducir-runt-basico.mdx"
locale: "es"
category: "validacion-vehiculos"
tags:
  - "co"
  - "validacion-vehiculos"
sourceAnchor: "Solicitud"
slug: "/validacion-vehiculos/colombia/licencia-conducir-runt-basico"
url: "https://docs.verifik.co/verifik-es/validacion-vehiculos/colombia/licencia-conducir-runt-basico"
---

# Consulta de Licencia de Conducción en RUNT (Básico) | Verifik API Colombia

La misma consulta RUNT que [Premium v2](/verifik-es/validacion-vehiculos/colombia/licencia-conducir-runt), cobrada a la **tarifa actual de conductor**. Debe enviar `primerApellido`. Si lo omite, la API responde `409 MissingParameter`.
Use esta ruta cuando ya conoce el primer apellido. Si se queda en v2 y envía `primerApellido`, también paga esta tarifa Básica sin cambiar la URL.

## Solicitud

```javascript

const { data } = await axios.get("https://api.verifik.co/v3/co/runt/conductor", {
	params: {
		documentType: "CC",
		documentNumber: "123456789",
		primerApellido: "GARCIA",
	},
	headers: {
		Accept: "application/json",
		Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
	},
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v3/co/runt/conductor"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "CC", "documentNumber": "123456789", "primerApellido": "GARCIA"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

### Respuesta

  

```json
{
	"code": "MissingParameter",
	"message": "\"primerApellido\" is required"
}
```

### Notas

- Una solicitud API y una fila de créditos a la tarifa Básica de conductor.
- Sin `primerApellido` este endpoint no consulta el nombre del ciudadano.
- Para resolución automática del apellido (Premium), use [`/v2/co/runt/conductor`](/verifik-es/validacion-vehiculos/colombia/licencia-conducir-runt).
