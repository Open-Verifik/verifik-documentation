---
id: "es-docs-es-certificados-sena-certificados-respuesta-2"
title: "Colombia — Certificados SENA — Respuesta"
sourcePath: "docs-es/certificados/sena-certificados.mdx"
locale: "es"
category: "certificados"
tags:
  - "co"
  - "certificados"
endpoint: "/v2/co/sena/certificados"
sourceAnchor: "Respuesta"
slug: "/certificados/sena-certificados"
url: "https://docs.verifik.co/verifik-es/certificados/sena-certificados"
---

# Colombia — Certificados SENA
**API path(s):** /v2/co/sena/certificados

Este endpoint devuelve **registros de formación y certificación del SENA** (Servicio Nacional de Aprendizaje) para una persona en Colombia, obtenidos del portal oficial de certificados digitales del SENA. Cada fila describe el título del programa, el tipo de certificación, la fecha de expedición y un enlace para descargar el certificado digital cuando esté disponible.
Úselo para **verificación laboral**, **validación de competencias** y **cumplimiento educativo** cuando este registro esté permitido.

## Respuesta

```json
{
	"data": [
		{
			"record": "1",
			"title": "TÉCNICO EN SISTEMAS",
			"type": "TITULO",
			"program": "ANALISIS Y DESARROLLO DE SOFTWARE",
			"certificationDate": "15/06/2019",
			"certificationSignature": "SIG-EJEMPLO",
			"certificateDownload": "https://certificados.sena.edu.co/CertificadoDigital/cert-ejemplo.pdf"
		}
	],
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
	"message": "documentType must be one of [CC, NIT]"
}
```

## Características

- **Tipos de documento**: **CC**, **TI**, **CE**, **PA**, **RC**, **PEP**
- Parámetros de consulta **GET**
- Devuelve **varias filas de certificados** cuando la persona tiene más de un registro SENA

## Casos de uso

- Verificación de **competencias técnicas** y **formación profesional**
- **Debida diligencia** del empleador e incorporación de **contratistas**
- **Cumplimiento educativo** para roles que exigen credenciales SENA

### Notas

- Cuando el SENA reporta **sin certificados** para el documento, la integración puede devolver **404** (mensaje upstream: *“No se ha encontrado certificados”*).
- **Modo sandbox**: use `documentNumber` **`10000001`**–**`10000010`** para filas de ejemplo fijas; **`90040401`** devuelve **404**.
- El validador de ruta acepta actualmente **`CC`** y **`NIT`** en la capa de middleware; otros tipos listados en el catálogo pueden depender del soporte del portal SENA.
- La **disponibilidad** del portal SENA y el manejo de **captcha** dependen del entorno; las interrupciones pueden devolver errores **5xx**.
- Trate los resultados como **datos personales / educativos** según la ley colombiana y sus políticas.
