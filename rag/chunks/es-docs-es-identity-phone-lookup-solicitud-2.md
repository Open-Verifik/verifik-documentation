---
id: "es-docs-es-identity-phone-lookup-solicitud-2"
title: "Global - Consulta de Teléfono — Solicitud"
sourcePath: "docs-es/identity/phone-lookup.mdx"
locale: "es"
category: "identity"
tags:
  - "look-ups"
  - "identity"
endpoint: "/v2/look-ups/phone"
sourceAnchor: "Solicitud"
slug: "/identity/phone-lookup"
url: "https://docs.verifik.co/verifik-es/identity/phone-lookup"
---

# Global - Consulta de Teléfono
**API path(s):** /v2/look-ups/phone

## Solicitud

```javascript

const options = {
  method: "GET",
  url: "https://api.verifik.co/v2/look-ups/phone",
  params: { countryCode: "57", phone: "3006094511" },
  headers: {
    Accept: "application/json",
    Authorization: "Bearer ",
  },
};

try {
  const { data } = await axios.request(options);
  console.log(data);
} catch (error) {
  console.error(error);
}
```

```python

conn = http.client.HTTPSConnection("api.verifik.co")
payload = ""
headers = {}
conn.request("GET", "/v2/look-ups/phone?countryCode=57&phone=3006094511", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

### Respuesta

```json
{
  "data": {
    "about": "",
    "access": "",
    "addresses": [],
    "companyName": {},
    "countryCode": "57",
    "enhanced": "",
    "gender": "",
    "imId": "",
    "internetAddresses": [],
    "jobTitle": "",
    "name": "JANE DOE",
    "phone": "3006094511",
    "phones": [],
    "score": 0.9
  },
  "signature": {
    "dateTime": "March 13, 2024 10:48 PM",
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
  "message": "countryCode|phone is missing"
}
```

```json
{
  "code": "Conflict",
  "message": "Endpoint out of service."
}
```

### Notas

- Se admiten **GET** y **POST**. POST envía los mismos campos en el cuerpo JSON.
- `countryCode` es el **código de llamada numérico** (por ejemplo `57`), no un código ISO2 como `CO`.
- Envíe `phone` como **número nacional solamente** — no vuelva a anteponer el código de país.
- Los campos de perfil además de `name`, `phone` y `countryCode` son opcionales; la fuente puede omitirlos.
- Esta ruta no tiene fixtures de sandbox. Las consultas van a la fuente en vivo. Las caídas temporales devuelven **409** con `Endpoint out of service.`
- Un **404** significa que no hay listado (o el código de llamada es desconocido). A los clientes de pago **no se les cobra** el 404.
- Este endpoint **no** demuestra que quien llama posee el aparato. Para verificación OTP, use [Validaciones de Teléfono](/verifik-es/resources/validaciones-telefono).
