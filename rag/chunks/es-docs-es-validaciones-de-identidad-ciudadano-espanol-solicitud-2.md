---
id: "es-docs-es-validaciones-de-identidad-ciudadano-espanol-solicitud-2"
title: "Ciudadano Español — Solicitud"
sourcePath: "docs-es/validaciones-de-identidad/ciudadano-espanol.mdx"
locale: "es"
category: "validaciones-de-identidad"
tags:
  - "es"
  - "validaciones-de-identidad"
endpoint: "/v2/es/cedula"
sourceAnchor: "Solicitud"
slug: "/validaciones-de-identidad/ciudadano-espanol"
url: "https://docs.verifik.co/verifik-es/validaciones-de-identidad/ciudadano-espanol"
---

# Ciudadano Español
**API path(s):** /v2/es/cedula

La API de Verificación de Identidad de Verifik te ayuda a autenticar ciudadanos y residentes españoles usando datos oficiales del gobierno. Está diseñada para agilizar tus procesos de KYC (Conozca a su Cliente), prevenir fraudes y asegurar el cumplimiento normativo sin complicaciones.
Creamos esta integración para empresas que necesitan una forma rápida, segura y automatizada de confirmar la verdadera identidad de usuarios, empleados o clientes.

## Solicitud

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/es/cedula", {
  params: { documentType: "DNIES", documentNumber: "123456789", date: "17/07/2024" },
  headers: { "Content-Type": "application/json", Authorization: `Bearer ${process.env.VERIFIK_TOKEN}` },
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/es/cedula"
headers = {"Content-Type": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "DNIES", "documentNumber": "123456789", "date": "17/07/2024"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

### Respuesta

  

```json
{
  "data": {
    "documentType": "DNIES",
    "documentNumber": "123456789",
    "fullName": "Juan Pérez",
    "names": ["Juan", "Pérez"]
  },
  "signature": {"message": "Certified by Verifik.co", "dateTime": "January 16, 2024 3:44 PM"},
  "id": "ES001"
}
```

  
  

```json
{
  "message": "Authentication required",
  "code": "UNAUTHORIZED"
}
```

  
  

```json
{
  "message": "Access forbidden",
  "code": "FORBIDDEN"
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
  "message": "\"date\" is required",
  "code": "MissingParameter"
}
```

```json
{
  "code": "MissingParameter",
  "message": "missing documentType\n"
}
```

```json
{
  "code": "MissingParameter",
  "message": "missing documentNumber\n"
}
```

```json
{
  "code": "MissingParameter",
  "message": "documentType must be one of: [DNIES, NIE]"
}
```

### Notas

- `date` debe seguir el formato `DD/MM/YYYY`.

---
