---
id: "es-docs-es-identity-chile-solicitud-2"
title: "Ciudadano Chileno — Solicitud"
sourcePath: "docs-es/identity/chile.mdx"
locale: "es"
category: "identity"
tags:
  - "cl"
  - "identity"
endpoint: "/v2/cl/cedula"
sourceAnchor: "Solicitud"
slug: "/identidad/chile"
url: "https://docs.verifik.co/verifik-es/identidad/chile"
---

# Ciudadano Chileno
**API path(s):** /v2/cl/cedula

La API de Verificación de Identidad de Verifik te ayuda a autenticar ciudadanos chilenos usando el Rol Único Nacional (RUN). Está diseñada para agilizar tus procesos de KYC (Conozca a su Cliente), prevenir fraudes y asegurar el cumplimiento normativo sin complicaciones.
Creamos esta integración para empresas que necesitan una forma rápida, segura y automatizada de confirmar la verdadera identidad de usuarios, empleados o clientes.

## Solicitud

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/cl/cedula", {
  params: { documentType: "RUN", documentNumber: "212957739" },
  headers: { Accept: "application/json", Authorization: `Bearer ${process.env.VERIFIK_TOKEN}` },
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/cl/cedula"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "RUN", "documentNumber": "212957739"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

### Respuesta

  

```json
{
  "data": {
    "documentType": "RUN",
    "documentNumber": "212957739",
    "firstName": "Carlos",
    "lastName": "Rodríguez",
    "fullName": "Carlos Rodríguez"
  },
  "signature": {"message": "Certified by Verifik.co", "dateTime": "January 16, 2024 3:44 PM"},
  "id": "CL001"
}
```

  
  

```json
{
  "message": "Invalid RUN number",
  "code": "INVALID_RUN"
}
```

### Notas

-   Proporciona el RUN/RUT sin espacios o separadores.
-   **RUN vs RUT**: En Chile, RUN (Rol Único Nacional) y RUT (Rol Único Tributario) son dos términos que se refieren al mismo número de identificación. El gobierno chileno usa ambos términos de manera intercambiable:
  - **RUN** es el término usado por el Registro Civil para identificación personal
  - **RUT** es el término usado por el Servicio de Impuestos Internos (SII) para fines tributarios
  - Ambos términos identifican el mismo número único asignado a ciudadanos y residentes chilenos. Puedes usar `RUN` o `RUT` como parámetro `documentType` - ambos funcionarán de manera idéntica.

---
