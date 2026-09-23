---
id: "es-docs-es-identity-chile-validate-documents-referencia-de-api"
title: "Chile — Validación de documento de identidad — Referencia de API"
sourcePath: "docs-es/identity/chile-validate-documents.mdx"
locale: "es"
category: "identity"
tags:
  - "cl"
  - "identity"
endpoints:
  - "/v2/cl/cedula"
  - "/v2/cl/validate/documents"
sourceAnchor: "Referencia de API"
slug: "/identidad/chile-validate-documents"
url: "https://docs.verifik.co/verifik-es/identidad/chile-validate-documents"
---

# Chile — Validación de documento de identidad
**API path(s):** /v2/cl/cedula, /v2/cl/validate/documents

## Referencia de API

Este endpoint comprueba la **vigencia** del documento para **RUN** o **RUT** chileno usando el **número de serie** impreso en la cédula o tarjeta, además del identificador. Úsalo cuando debas confirmar que el **documento físico** es **válido**, no solo que el número existe—por ejemplo en **KYC de alta garantía** o pasos de **cumplimiento** que van más allá de una consulta simple a cédula.

Para verificación nominal contra registro civil **sin** serie, usa **[Verificación de identidad en Chile](/verifik-es/identidad/chile)** (`v2/cl/cedula`).

## Referencia de API

### Endpoint

```
https://api.verifik.co/v2/cl/validate/documents
```

Envía **RUN** o **RUT**, **número de documento** y **serie impresa** para obtener un **estado de vigencia** desde fuentes de validación civil o tributaria—úsalo cuando deba confirmarse el documento físico, no solo el número.

### Encabezados

| Nombre | Valor |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parámetros

| Nombre | Tipo | Requerido | Descripción |
| --- | --- | --- | --- |
| `documentType` | string | Sí | `RUN` (flujo cédula/registro civil) o `RUT` (flujo tributario). |
| `documentNumber` | string | Sí | Identificador sin espacios, según guías de integración. |
| `serialNumber` | string | Sí | Serie impresa en el documento; requerida por las fuentes de validación. |

### Solicitud

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/cl/validate/documents", {
  params: {
    documentType: "RUN",
    documentNumber: "18562530-3",
    serialNumber: "A123456789",
  },
  headers: { Accept: "application/json", Authorization: `Bearer ${process.env.VERIFIK_TOKEN}` },
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/cl/validate/documents"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {
    "documentType": "RUN",
    "documentNumber": "18562530-3",
    "serialNumber": "A123456789",
}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```
