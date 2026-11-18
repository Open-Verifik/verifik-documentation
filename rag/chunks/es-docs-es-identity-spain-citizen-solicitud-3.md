---
id: "es-docs-es-identity-spain-citizen-solicitud-3"
title: "España — Verificación de identidad (DNI / NIE) — Solicitud"
sourcePath: "docs-es/identity/spain-citizen.mdx"
locale: "es"
category: "identity"
tags:
  - "es"
  - "identity"
endpoint: "/v2/es/cedula"
sourceAnchor: "Solicitud"
slug: "/identidad/ciudadano-espanol"
url: "https://docs.verifik.co/verifik-es/identidad/ciudadano-espanol"
---

# España — Verificación de identidad (DNI / NIE)
**API path(s):** /v2/es/cedula

La API de Verificación de Identidad de Verifik te ayuda a autenticar ciudadanos y residentes españoles usando datos oficiales del gobierno. Está diseñada para agilizar tus procesos de KYC (Conozca a su Cliente), prevenir fraudes y asegurar el cumplimiento normativo sin complicaciones.
Creamos esta integración para empresas que necesitan una forma rápida, segura y automatizada de confirmar la verdadera identidad de usuarios, empleados o clientes.
**Qué recibes en la práctica:** una respuesta estructurada que te permite decidir si aceptas o rechazas el alta de un usuario en función de si el **tipo y número de documento**, el **nombre** y la **fecha de caducidad** son coherentes entre sí según la fuente consultada. No sustituye el asesoramiento legal de tu equipo de cumplimiento, pero sí reduce errores manuales y acelera el “sí o no” en tiempo real dentro de tu producto.
**Cuándo usarla:** apertura de cuentas, préstamos, alquileres de larga duración, altas laborales sensibles, marketplaces con verificación de vendedores, o cualquier flujo donde un documento falso o caducado suponga riesgo reputacional o financiero. La integración es por HTTPS y encaja en flujos totalmente automatizados (formularios web, apps móviles, backoffice interno).
**Qué debes tener claro antes de integrar:** necesitas el tipo de documento (`DNIES` o `NIE`), el número sin espacios y la **fecha de vencimiento** en el formato indicado en la referencia de API. Sin esos datos la validación no puede completarse. Los tiempos de respuesta están pensados para UX en línea; revisa límites de tu plan y manejo de errores (documento no encontrado, parámetros incorrectos, etc.) en la sección de respuestas.

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
