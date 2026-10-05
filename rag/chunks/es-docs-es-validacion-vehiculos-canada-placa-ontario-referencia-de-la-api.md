---
id: "es-docs-es-validacion-vehiculos-canada-placa-ontario-referencia-de-la-api"
title: "\\U0001F1E8\\U0001F1E6 Canadá - Vencimiento de Placa Ontario — Referencia de la API"
sourcePath: "docs-es/validacion-vehiculos/canada/placa-ontario.mdx"
locale: "es"
category: "validacion-vehiculos"
tags:
  - "ca"
  - "validacion-vehiculos"
endpoint: "/v2/ca/ontario/plate"
sourceAnchor: "Referencia de la API"
slug: "/validacion-vehiculos/canada/placa-ontario"
url: "https://docs.verifik.co/verifik-es/validacion-vehiculos/canada/placa-ontario"
---

# \U0001F1E8\U0001F1E6 Canadá - Vencimiento de Placa Ontario
**API path(s):** /v2/ca/ontario/plate

## Referencia de la API

Consulta el vencimiento de la calcomanía de placa de Ontario usando el **número de placa** y el **número de permiso del vehículo** (tarjeta verde / documento de registro emitido por Ontario).

Campos típicos de respuesta: `expired`, `plateNumber`, `permitNumber`, `expiryDate` y `success`. `expired` es `true` cuando `expiryDate` es anterior al momento actual.

Utiliza este servicio para confirmar rápidamente la vigencia de la calcomanía ante el registro gubernamental de Ontario. Ideal para onboarding de flotas, cumplimiento normativo y verificación de vehículos.

## Referencia de la API

### Endpoint

```
https://api.verifik.co/v2/ca/ontario/plate
```

Envía una solicitud GET con los parámetros **`plate`** y **`permitNumber`**.

### Encabezados

| Nombre          | Valor              |
| --------------- | ------------------ |
| Accept          | `application/json` |
| Authorization   | `Bearer `   |

### Parámetros

| Nombre | Tipo | Requerido | Descripción | Ejemplo |
| ------ | ---- | --------- | ----------- | ------- |
| `plate` | string | **Sí** | Placa de pasajero de Ontario en formato **ABCD123** (4 letras + 3 dígitos, sin espacios). | `BKTR456` |
| `permitNumber` | string | **Sí** | Número de permiso del documento de registro (8 caracteres). | `N9166001` |

### Solicitud

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/ca/ontario/plate", {
  params: { plate: "BKTR456", permitNumber: "N9166001" },
  headers: { Accept: "application/json", Authorization: `Bearer ${process.env.VERIFIK_TOKEN}` },
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/ca/ontario/plate"
params = {"plate": "BKTR456", "permitNumber": "N9166001"}
headers = {"Accept": "application/json", "Authorization": "Bearer "}
response = requests.get(url, params=params, headers=headers)
print(response.text)
```
