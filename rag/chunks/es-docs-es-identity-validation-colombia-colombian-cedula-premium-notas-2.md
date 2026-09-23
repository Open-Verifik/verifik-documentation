---
id: "es-docs-es-identity-validation-colombia-colombian-cedula-premium-notas-2"
title: "Colombia — Cédula nacional premium (CC) — Notas"
sourcePath: "docs-es/identity-validation/colombia/colombian-cedula-premium.mdx"
locale: "es"
category: "identity-validation"
tags:
  - "co"
  - "identity-validation"
endpoints:
  - "/v2/co/cedula"
  - "/v2/co/cedula/premium"
sourceAnchor: "Notas"
slug: "/validacion-identidad/colombia/cedula-premium-cc"
url: "https://docs.verifik.co/verifik-es/validacion-identidad/colombia/cedula-premium-cc"
---

# Colombia — Cédula nacional premium (CC)
**API path(s):** /v2/co/cedula, /v2/co/cedula/premium

**Finalidad:** **verificar** una **Cédula de Ciudadanía (CC)** frente a **fuentes oficiales** y devolver un **registro de identidad estructurado** para procesos de KYC y cumplimiento, no un simple sí/no sobre el número. Incluye **cómo figura el nombre**, **fecha de nacimiento**, **lugar y fecha de expedición** y, cuando las fuentes lo aportan, **género** e **indicación de supervivencia**, con un bloque de **certificación firmada**. Se **envía únicamente el número**; la **fecha de expedición se resuelve en el servidor** (sin tipo de documento ni fecha en la petición). El detalle equivale a [**cédula extra**](../../identity/colombia-full-id.mdx). El consumo de **créditos** es **superior** al de la [**consulta básica**](./colombian-citizen.mdx) por los pasos de resolución adicionales.

## Notas

- Solo **CC**: no se envía `documentType` ni `date`; el flujo resuelve la **fecha de expedición** de forma interna y luego aplica el mismo flujo ampliado que [**cédula extra**](../../identity/colombia-full-id.mdx).
- Comparado con [**consulta básica de cédula**](./colombian-citizen.mdx) (`/v2/co/cedula`), devuelve el conjunto **extra** completo a mayor coste en créditos.

### Premium directo vs precio dinámico

Esta página documenta el **endpoint premium explícito** (`/v2/co/cedula/premium`). Llamarlo directamente siempre usa **tarificación premium**.

El **precio dinámico** aplica cuando llama al [**endpoint básico de cédula**](./colombian-citizen.mdx#dynamic-pricing) (`/v2/co/cedula`) y la Consulta Dinámica escala automáticamente a una ruta de verificación extendida. Si esa escalada devuelve **HTTP 200**, se cobra el mismo **nivel premium** que esta ruta, no el nivel estándar. Consulte el [SLA — Precio dinámico (facturación)](/verifik-es/acuerdo-de-niveles-de-servicio#dynamic-pricing-billing).

### Solicitud

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/co/cedula/premium", {
	params: { documentNumber: "1234567890" },
	headers: {
		Accept: "application/json",
		Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
	},
});
console.log(data);
```

  
  

```javascript

const { data } = await axios.post(
	"https://api.verifik.co/v2/co/cedula/premium",
	{ documentNumber: "1234567890" },
	{
		headers: {
			Accept: "application/json",
			Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
		},
	}
);
console.log(data);
```

### Respuesta

  

Ejemplo de forma (placeholders ilustrativos, no personas reales):

```json
{
	"data": {
		"arrayName": ["NOMBRE1", "NOMBRE2", "APELLIDO1", "APELLIDO2"],
		"dateOfBirth": "1990-05-20",
		"documentNumber": "1234567890",
		"documentType": "CC",
		"expeditionDate": "2015-08-12",
		"expeditionPlace": {
			"municipio": "Municipio de ejemplo",
			"departamento": "Departamento de ejemplo"
		},
		"firstName": "NOMBRE1 NOMBRE2",
		"fullName": "NOMBRE1 NOMBRE2 APELLIDO1 APELLIDO2",
		"gender": "HOMBRE",
		"isAlive": true,
		"lastName": "APELLIDO1 APELLIDO2"
	},
	"signature": {
		"dateTime": "April 21, 2026 9:34 PM",
		"message": "Certified by Verifik.co"
	},
	"id": "XXXXX"
}
```

Los nombres de campos y su presencia pueden alinearse con las fuentes y la disponibilidad de datos oficiales.

  
  

```json
{
	"code": "NotFound",
	"message": "Record not found."
}
```

Se devuelve cuando las fuentes aguas arriba no ofrecen coincidencia o datos requeridos (p. ej. falla la resolución de expedición).

  
  

```json
{
	"code": "MissingParameter",
	"message": "documentNumber maximum length: 10\n"
}
```

La validación usa **5–10** caracteres para `documentNumber`; pueden aparecer otros mensajes de Joi por entrada inválida o faltante.
