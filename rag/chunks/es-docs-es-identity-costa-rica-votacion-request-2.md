---
id: "es-docs-es-identity-costa-rica-votacion-request-2"
title: "Costa Rica - Lugar de Votación — Request"
sourcePath: "docs-es/identity/costa-rica/votacion.mdx"
locale: "es"
category: "identity"
tags:
  - "cr"
  - "identity"
endpoint: "/v2/cr/votacion"
sourceAnchor: "Request"
slug: "/identity/costa-rica/votacion"
url: "https://docs.verifik.co/verifik-es/identity/costa-rica/votacion"
---

# Costa Rica - Lugar de Votación
**API path(s):** /v2/cr/votacion

Verifik consulta el padrón electoral **Donde Votar del TSE** con **CCCR** (cédula costarricense, **9 a 13 dígitos**). Usa este endpoint para **verificación electoral**, **incorporación de votantes** y flujos de **cumplimiento** cuando los datos electorales costarricenses estén permitidos.
Devuelve detalles del lugar de votación cuando la fuente los proporciona:
- **`documentType`** — valor permitido: **CCCR**
- **`documentNumber`** — cédula costarricense (**9 a 13** dígitos)
- **`fullName`**, **`firstName`**, **`firstLastName`**, **`secondLastName`** — nombre del ciudadano en el padrón electoral
- **`gender`** — código de sexo cuando la fuente lo proporciona
- **`province`**, **`canton`**, **`district`** — residencia y geografía electoral
- **`pollingPlace`**, **`pollingTable`** — datos del recinto de votación
- **`electoralCode`**, **`electorNumber`**, **`schoolAddress`** — metadatos de junta del TSE
- **Campos opcionales** — `latitude`, `longitude` cuando la fuente los incluye
- Respuesta **firmada** por Verifik

## Request

```javascript
const { data } = await axios.get("https://api.verifik.co/v2/cr/votacion", {
  params: {
    documentType: "CCCR",
    documentNumber: "401310036",
  },
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
  },
});
console.log(data);
```

```python
url = "https://api.verifik.co/v2/cr/votacion"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "CCCR", "documentNumber": "401310036"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

### Response

```json
{
  "data": {
    "documentType": "CCCR",
    "documentNumber": "401310036",
    "fullName": "MARIA ELENA LOPEZ GARCIA",
    "firstName": "MARIA",
    "firstLastName": "LOPEZ",
    "secondLastName": "GARCIA",
    "gender": "1",
    "province": "San José",
    "canton": "Central",
    "district": "Carmen",
    "pollingPlace": "Escuela República de Chile",
    "pollingTable": "12",
    "electoralCode": "210011",
    "electorNumber": "325",
    "schoolAddress": "COSTADO NORTE DE LA PLAZA DE DEPORTES",
    "latitude": 9.9281,
    "longitude": -84.0907
  },
  "signature": {
    "dateTime": "July 13, 2026 5:00 PM",
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
  "message": "missing documentNumber\n"
}
```

### Notas

- **`documentType`** debe ser **`CCCR`**; **`documentNumber`** debe tener **9 a 13** dígitos numéricos.
- **IDs de ejemplo en vivo** (padrón de producción): `401310036`, `401310030`, `401310039`, `402330708`, `114070037`.
- **Modo sandbox:** usa IDs de prueba **`010000001`** a **`010000010`** para perfiles estables; **`090040401`** devuelve **404**.
- Trata las respuestas como **datos personales sensibles**; cumple las leyes de privacidad aplicables.
- Ver también: [Consulta de identidad costarricense](/identity/costa-rica).
