---
id: "es-docs-es-identidad-honduras-votacion-solicitud-2"
title: "Honduras - Lugar de Votación — Solicitud"
sourcePath: "docs-es/identidad/honduras/votacion.mdx"
locale: "es"
category: "identidad"
tags:
  - "hn"
  - "co"
  - "identidad"
endpoint: "/v2/hn/votacion"
sourceAnchor: "Solicitud"
slug: "/identidad/honduras/votacion"
url: "https://docs.verifik.co/verifik-es/identidad/honduras/votacion"
---

# Honduras - Lugar de Votación
**API path(s):** /v2/hn/votacion

Verifik consulta el registro nacional de consulta electoral **Donde Me Toca Votar** usando **DNIHN** (número de identidad de **13 dígitos**). Usa este endpoint para **verificación electoral**, **incorporación de votantes** y **cumplimiento** cuando los datos electorales hondureños estén permitidos.
Devuelve detalles del lugar de votación cuando la fuente los proporciona:
- **`documentType`** — valor permitido: **DNIHN**
- **`documentNumber`** — número de identidad hondureño (**13** dígitos)
- **`fullName`** — nombre completo del ciudadano en el padrón electoral
- **`gender`** — sexo cuando la fuente lo proporciona
- **`department`**, **`municipality`**, **`electoralSector`** — residencia y sector electoral
- **`pollingPlace`**, **`pollingTable`** (JRV), **`lineNumber`** — datos del recinto de votación
- **`enabled`** — si el ciudadano está habilitado para votar
- **`fullAddress`** — dirección formateada del recinto
- **Campos opcionales** — `latitude`, `longitude` cuando la fuente los incluye
- Respuesta **firmada** por Verifik

## Solicitud

```javascript
const { data } = await axios.get("https://api.verifik.co/v2/hn/votacion", {
  params: {
    documentType: "DNIHN",
    documentNumber: "0501199705651",
  },
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
  },
});
console.log(data);
```

```python
url = "https://api.verifik.co/v2/hn/votacion"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "DNIHN", "documentNumber": "0501199705651"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

### Respuesta

```json
{
  "data": {
    "documentType": "DNIHN",
    "documentNumber": "0501199705651",
    "fullName": "CHRISTOPHER ALEXANDER RUBIO ROMERO",
    "gender": "MASCULINO",
    "department": "ESPAÑA",
    "municipality": "MADRID",
    "electoralSector": "MADRID",
    "pollingPlace": "CONSULADO DE MADRID EN ESPAÑA",
    "pollingTable": "12",
    "lineNumber": "42",
    "enabled": true,
    "fullAddress": "CONSULADO DE MADRID EN ESPAÑA, MADRID, ESPAÑA, Honduras"
  },
  "signature": {
    "dateTime": "July 9, 2026 5:00 PM",
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

- **`documentType`** debe ser **`DNIHN`**; **`documentNumber`** debe tener exactamente **13** dígitos numéricos.
- **IDs de ejemplo en vivo** (padrón de producción): `0501199705651`, `0828200300064`, `0801198000420`, `0801198000427`, `0801198000428`, `0801197302222`, `0801198000421`.
- **Modo sandbox:** usa IDs de prueba con relleno **`0000010000001`** a **`0000010000010`** para perfiles estables; **`0000090040401`** devuelve **404**.
- **Límites de la fuente:** si el registro electoral limita solicitudes, Verifik puede devolver **409** con `Endpoint_out_of_service` (temporal; reintenta más tarde).
- Trata las respuestas como **datos personales sensibles**; cumple las leyes de privacidad aplicables.
- Ver también: [Ciudadano Hondureño](/verifik-es/identidad/honduras).
