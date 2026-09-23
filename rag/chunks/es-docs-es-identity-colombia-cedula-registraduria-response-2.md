---
id: "es-docs-es-identity-colombia-cedula-registraduria-response-2"
title: "Colombia — Consulta de ciudadano vía Registraduría (SCCRC) — Response"
sourcePath: "docs-es/identity/colombia-cedula-registraduria.mdx"
locale: "es"
category: "identity"
tags:
  - "co"
  - "identity"
endpoint: "/v2/co/cedula/registraduria"
sourceAnchor: "Response"
slug: "/identity/colombia-cedula-registraduria"
url: "https://docs.verifik.co/verifik-es/identity/colombia-cedula-registraduria"
---

# Colombia — Consulta de ciudadano vía Registraduría (SCCRC)
**API path(s):** /v2/co/cedula/registraduria

Consulta un registro civil de **nacimiento** (*registro civil de nacimiento*) de la **Registraduría Nacional del Estado Civil** (**SCCRC**) usando el número de **cédula (CC)**.
A diferencia de [ciudadano por documento](/identity-validation/colombia/colombian-citizen) (`/v2/co/cedula`), este endpoint usa **solo Registraduría** — **no** intenta Procuraduría ni DIAN. Úsalo para aislar el comportamiento de SCCRC en modo documento.

## Response

```json
{
	"data": {
		"documentType": "CC",
		"documentNumber": "1032386359",
		"firstName": "LILIA MANUELA",
		"lastName": "LESPORT FERNANDEZ",
		"fullName": "LILIA MANUELA LESPORT FERNANDEZ",
		"arrayName": ["LILIA", "MANUELA", "LESPORT", "FERNANDEZ"],
		"sexo": "FEMENINO",
		"serial": "0043721066",
		"oficina": "NOTARIA 1 VILLANUEVA - LA GUAJIRA",
		"expeditionPlace": "NOTARIA 1 VILLANUEVA - LA GUAJIRA",
		"fecha": "29 DE DICIEMBRE DE 2009",
		"dateOfBirth": "29 DE DICIEMBRE DE 2009",
		"recordType": "REGISTRO CIVIL DE NACIMIENTO"
	},
	"signature": {
		"dateTime": "July 22, 2026 12:00 PM",
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
	"message": "missing documentNumber"
}
```

## Características

- Consulta directa SCCRC en **modo documento** (solo CC)
- Omite Procuraduría y DIAN
- Respuesta de un solo registro (no array `matches`)
- **GET** y **POST** comparten el mismo handler

## Casos de uso

- Probar o depurar la búsqueda por documento de Registraduría de forma aislada
- Preferir SCCRC en modo documento cuando no se necesitan otras fuentes de `/cedula`
- Comparar modo documento vs [búsqueda por nombre](/identity-validation/colombia/colombian-citizen-by-name)

### Notas

- **`documentType`** debe ser **`CC`**.
- La búsqueda SCCRC por documento puede devolver **404** aunque [por nombre](/identity-validation/colombia/colombian-citizen-by-name) encuentre a la misma persona — el recall upstream difiere por modo.
- Problemas temporales de disponibilidad pueden aparecer como **409** (`Endpoint_out_of_service`).
- Relacionado: [Ciudadano por documento](/identity-validation/colombia/colombian-citizen), [Ciudadano por nombre](/identity-validation/colombia/colombian-citizen-by-name), [Registro civil por serial](/identity/colombia-registraduria-serial).
