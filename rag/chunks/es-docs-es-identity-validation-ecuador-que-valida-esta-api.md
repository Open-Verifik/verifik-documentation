---
id: "es-docs-es-identity-validation-ecuador-que-valida-esta-api"
title: "Ciudadano Ecuatoriano — ¿Qué valida esta API?"
sourcePath: "docs-es/identity-validation/ecuador.mdx"
locale: "es"
category: "identity-validation"
tags:
  - "ec"
  - "identity-validation"
endpoint: "/v2/ec/cedula"
sourceAnchor: "¿Qué valida esta API?"
slug: "/identity-validation/ecuador"
url: "https://docs.verifik.co/verifik-es/identity-validation/ecuador"
---

# Ciudadano Ecuatoriano
**API path(s):** /v2/ec/cedula

## ¿Qué valida esta API?

La API de Verificación de Identidad de Verifik te ayuda a autenticar ciudadanos ecuatorianos usando datos oficiales del gobierno. Está diseñada para agilizar tus procesos de KYC (Conozca a su Cliente), prevenir fraudes y asegurar el cumplimiento normativo sin complicaciones.

Creamos esta integración para empresas que necesitan una forma rápida, segura y automatizada de confirmar la verdadera identidad de usuarios, empleados o clientes.

## ¿Qué valida esta API?

Nuestra API se conecta directamente con registros oficiales para validar:

-   **Nombre Completo y Número CCEC**: Soporta *Cédula de Ciudadanía Ecuatoriana* (CCEC).
-   **Coincidencia de Identidad**: Verifica que el nombre proporcionado coincida con el número CCEC.

Al verificar estos detalles, puedes tener la certeza de que la persona con la que tratas es real y posee un documento válido, reduciendo significativamente el riesgo de suplantación y fraude.

## Referencia de API

### Endpoint

```
GET https://api.verifik.co/v2/ec/cedula
```

Consulta la identidad de un ciudadano ecuatoriano con **`documentType`** `CCEC` y **`documentNumber`**. Devuelve campos basados en registros oficiales para **KYC** y **cumplimiento**.

### Encabezados

| Nombre | Valor |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parámetros

| Nombre | Tipo | Requerido | Descripción |
| --- | --- | --- | --- |
| `documentType` | string | Sí | Tipo de documento. Valor permitido: `CCEC`. |
| `documentNumber` | string | Sí | Número de documento sin espacios ni puntos. |

### Solicitud

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/ec/cedula", {
  params: { documentType: "CCEC", documentNumber: "0102260098" },
  headers: { Accept: "application/json", Authorization: `Bearer ${process.env.VERIFIK_TOKEN}` },
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/ec/cedula"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "CCEC", "documentNumber": "0102260098"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```
