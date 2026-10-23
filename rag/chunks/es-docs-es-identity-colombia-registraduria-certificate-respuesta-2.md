---
id: "es-docs-es-identity-colombia-registraduria-certificate-respuesta-2"
title: "Colombia — Certificado de vigencia de cédula (Registraduría) — Respuesta"
sourcePath: "docs-es/identity/colombia-registraduria-certificate.mdx"
locale: "es"
category: "identity"
tags:
  - "co"
  - "identity"
endpoint: "/v2/co/registraduria/certificado"
sourceAnchor: "Respuesta"
slug: "/identidad/colombia-registraduria-certificate"
url: "https://docs.verifik.co/verifik-es/identidad/colombia-registraduria-certificate"
---

# Colombia — Certificado de vigencia de cédula (Registraduría)
**API path(s):** /v2/co/registraduria/certificado

Este endpoint devuelve el **certificado de vigencia** de la **Cédula de Ciudadanía (CC)** desde la **Registraduría Nacional del Estado Civil**, usando **número de documento** y **fecha de expedición**. La respuesta incluye campos estructurados extraídos del PDF oficial (incluido **PDF en base64**) e información como **novedad** (estado de vigencia en la consulta previa).
El flujo aplica a titulares de **CC**; la API valida solo **`documentNumber`** y **`date`**.

## Respuesta

```json
{
	"data": {
		"codigoVerificacion": "ABC123XYZ",
		"novedad": "VIGENTE",
		"pdfBase64": "JVBERi0xLjQK...",
		"documento": {
			"cedula": "123456789",
			"fechaExpedicion": "10/10/2020",
			"lugarExpedicion": "BOGOTA D.C.",
			"nombre": "JUAN PEREZ"
		}
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

- **Fecha de expedición** en **`DD/MM/AAAA`**
- Datos del **certificado en PDF** con **base64** cuando la generación tiene éxito
- **GET** y **POST** comparten el mismo manejador

## Casos de uso

- **KYC** que requiere **certificado de vigencia** oficial para CC
- Reducción de fraude cuando la fecha de expedición debe coincidir con Registraduría

### Notas

- **`date`** es la **fecha de expedición del documento**, no la fecha de nacimiento.
- Un formato incorrecto suele devolver **409** (`MissingParameter`).
- Problemas temporales de disponibilidad de la fuente pueden aparecer como **409** con códigos como **`Endpoint_out_of_service`**.
- **`GET`** y **`POST`** comparten el mismo manejador.
- Trata **pdfBase64** y datos personales como **sensibles**; cumple la normativa colombiana y tus contratos.
