---
id: "es-docs-es-identidad-bolivia-votacion-solicitud-2"
title: "Bolivia - Lugar de Votación — Solicitud"
sourcePath: "docs-es/identidad/bolivia/votacion.mdx"
locale: "es"
category: "identidad"
tags:
  - "bo"
  - "co"
  - "identidad"
endpoint: "/v2/bo/votacion"
sourceAnchor: "Solicitud"
slug: "/identidad/bolivia/votacion"
url: "https://docs.verifik.co/verifik-es/identidad/bolivia/votacion"
---

# Bolivia - Lugar de Votación
**API path(s):** /v2/bo/votacion

Verifik consulta **Yo Participo (OEP)** usando **CI** y **fecha de nacimiento**. Usa este endpoint para **verificación electoral**, **incorporación de votantes** y **cumplimiento** cuando los datos OEP estén permitidos.
Devuelve detalles del lugar de votación cuando la fuente los proporciona:
- **`documentType`** — valor permitido: **CI**
- **`documentNumber`** — número de cédula de identidad (**5–13** caracteres)
- **`dateOfBirth`** — fecha de nacimiento en formato **DD/MM/YYYY** (debe coincidir con OEP)
- **`fullName`** — nombre completo del ciudadano en el padrón electoral
- **`votingStatus`** — si el ciudadano está habilitado para votar
- **`department`**, **`locality`**, **`pollingPlace`**, **`pollingTable`** — datos del recinto electoral
- **`election`** — etiqueta de elección o nota de actualización del padrón
- **Campos opcionales** — `isJury`, `jurySortDate`, `politicalMembership`, `latitude`, `longitude` cuando la fuente los incluye
- Respuesta **firmada** por Verifik

## Solicitud

```javascript
const { data } = await axios.get("https://api.verifik.co/v2/bo/votacion", {
  params: {
    documentType: "CI",
    documentNumber: "4511200",
    dateOfBirth: "27/03/1978",
  },
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
  },
});
console.log(data);
```

```python
url = "https://api.verifik.co/v2/bo/votacion"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "CI", "documentNumber": "4511200", "dateOfBirth": "27/03/1978"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

### Respuesta

```json
{
  "data": {
    "documentType": "CI",
    "documentNumber": "4511200",
    "fullName": "LIDIA IRIARTE TORREZ",
    "votingStatus": "USTED ESTA HABILITADO/A PARA VOTAR",
    "country": "BOLIVIA",
    "department": "Cochabamba",
    "locality": "Cercado, Cochabamba",
    "election": "Elecciones Generales 2026",
    "pollingPlace": "Unidad Educativa Santa Maria Micaela",
    "pollingTable": "18"
  },
  "signature": {
    "dateTime": "July 2, 2026 3:00 PM",
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
  "message": "missing dateOfBirth\n"
}
```

### Notas

- **`documentType`** debe ser **`CI`**; **`dateOfBirth`** es obligatoria y debe coincidir con OEP.
- Los campos opcionales de jurado, militancia y coordenadas aparecen solo cuando la fuente los incluye.
- Usa **`force=true`** cuando necesites omitir registros en caché de MongoDB.
- Trata las respuestas como **datos personales sensibles**; cumple las leyes de privacidad aplicables.
