---
id: "es-docs-es-resources-inicios-sesion-aplicacion-recuperar-un-inicio-sesion-aplica-respuesta-2"
title: "Recuperar un Inicio de Sesión de Aplicación — Respuesta"
sourcePath: "docs-es/resources/inicios-sesion-aplicacion/recuperar-un-inicio-sesion-aplicacion.mdx"
locale: "es"
category: "resources"
tags:
  - "app-logins"
  - "resources"
endpoint: "/v2/app-logins/{id}"
sourceAnchor: "Respuesta"
slug: "/resources/recuperar-un-inicio-sesion-aplicacion"
url: "https://docs.verifik.co/verifik-es/resources/recuperar-un-inicio-sesion-aplicacion"
---

# Recuperar un Inicio de Sesión de Aplicación
**API path(s):** /v2/app-logins/{id}

## Respuesta

```json
{
	"data": {
		"_id": "66e464acbad79f3a380d408f",
		"client": "613375a1eab2fe08527f81e2",
		"name": "",
		"status": "pending",
		"project": "6266193db77ccc8111730c90",
		"projectFlow": "658ed28b0990f300134d7b78",
		"type": "faceliveness",
		"biometricValidation": "66e464acbad79f3a380d408d",
		"accessControlLog": "66e464acbad79f3a380d4090",
		"updatedAt": "2024-09-13T16:13:32.942Z",
		"createdAt": "2024-09-13T16:13:32.942Z",
		"__v": 0
	}
}
```

	
	

```json
{
	"code": "NotFound",
	"message": "Registro no encontrado."
}
```
