---
id: "es-docs-es-identity-colombia-registraduria-certificate-que-devuelve-la-api"
title: "Colombia — Certificado de vigencia de cédula (Registraduría) — Qué devuelve la API"
sourcePath: "docs-es/identity/colombia-registraduria-certificate.mdx"
locale: "es"
category: "identity"
tags:
  - "co"
  - "identity"
endpoint: "/v2/co/registraduria/certificado"
sourceAnchor: "Qué devuelve la API"
slug: "/identidad/colombia-registraduria-certificate"
url: "https://docs.verifik.co/verifik-es/identidad/colombia-registraduria-certificate"
---

# Colombia — Certificado de vigencia de cédula (Registraduría)
**API path(s):** /v2/co/registraduria/certificado

## Qué devuelve la API

Este endpoint devuelve el **certificado de vigencia** de la **Cédula de Ciudadanía (CC)** desde la **Registraduría Nacional del Estado Civil**, usando **número de documento** y **fecha de expedición**. La respuesta incluye campos estructurados extraídos del PDF oficial (incluido **PDF en base64**) e información como **novedad** (estado de vigencia en la consulta previa).

El flujo aplica a titulares de **CC**; la API valida solo **`documentNumber`** y **`date`**.

## Qué devuelve la API

- Contexto de **estado de vigencia** (**novedad**) según la consulta upstream
- **Datos del documento** (número, expedición, lugar, nombre) cuando el parseo es correcto
- **Código de verificación** y **PDF** (**pdfBase64**) para auditoría
- Respuesta **firmada** por Verifik

## Referencia de API

### Endpoint

```
GET https://api.verifik.co/v2/co/registraduria/certificado
```

La misma integración está disponible como **`POST`** con cuerpo JSON con los mismos campos. **`GET`** usa **parámetros de consulta** como abajo.

### Headers

| Name | Value |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parámetros

| name | type | required | description |
| --- | --- | --- | --- |
| `documentNumber` | string | sí | Número de CC sin espacios ni signos. |
| `date` | string | sí | **Fecha de expedición** en **`DD/MM/AAAA`**. |

### Solicitud

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/co/registraduria/certificado", {
	params: { documentNumber: "123456789", date: "10/10/2020" },
	headers: {
		Accept: "application/json",
		Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
	},
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/co/registraduria/certificado"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentNumber": "123456789", "date": "10/10/2020"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```
