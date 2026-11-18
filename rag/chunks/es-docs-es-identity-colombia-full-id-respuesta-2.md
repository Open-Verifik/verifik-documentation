---
id: "es-docs-es-identity-colombia-full-id-respuesta-2"
title: "Colombia — Cédula con datos extendidos (CC) — Respuesta"
sourcePath: "docs-es/identity/colombia-full-id.mdx"
locale: "es"
category: "identity"
tags:
  - "co"
  - "identity"
endpoint: "/v2/co/cedula/extra"
sourceAnchor: "Respuesta"
slug: "/identidad/colombia-full-id"
url: "https://docs.verifik.co/verifik-es/identidad/colombia-full-id"
---

# Colombia — Cédula con datos extendidos (CC)
**API path(s):** /v2/co/cedula/extra

Verifik devuelve **datos extendidos** de la **Cédula de Ciudadanía (CC)** emparejando **número** y **fecha de expedición** con fuentes oficiales. Suele incluir **nombre**, **expedición**, **fecha y lugar**, **fecha de nacimiento**, **género** y **estado vital** cuando la fuente los provee.
Los datos son **sensibles**; úsalos solo donde la ley y tu política lo permitan.

## Respuesta

```json
{
	"data": {
		"documentType": "CC",
		"documentNumber": "123456789",
		"fullName": "MATEO VERIFIK",
		"firstName": "MATEO",
		"lastName": "VERIFIK",
		"arrayName": ["MATEO", "VERIFIK"],
		"expeditionDate": "2022-05-10T00:00:00.000Z",
		"expeditionPlace": {
			"municipio": "BOGOTA D.C.",
			"departamento": "BOGOTA"
		},
		"dateOfBirth": "1999-05-07T00:00:00.000Z",
		"gender": "HOMBRE",
		"isAlive": true
	},
	"signature": {
		"dateTime": "August 23, 2022 11:42 AM",
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
	"message": "date format required: DD/MM/YYYY\n"
}
```

## Características

- Solo **`CC`** en la capa de validación
- **`date`** = **fecha de expedición** en **`DD/MM/AAAA`**

## Casos de uso

- **KYC** de mayor rigor con datos demográficos
- **Antifraude** cuando se conoce la fecha de expedición

### Notas

- **`date`** es la **fecha de expedición del documento**, no la de nacimiento.
- Formato incorrecto → suele devolver **409**.
- **`GET`** y **`POST`** comparten el mismo manejador.
- Puede tratarse de **datos personales sensibles**; cumple la normativa colombiana de privacidad.
