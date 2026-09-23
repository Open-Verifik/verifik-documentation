---
id: "es-docs-es-vehicle-validation-ecuador-vehicle-information-lookup-endpoint"
title: "🇪🇨 Ecuador - Consulta de Información de Vehículo — Endpoint"
sourcePath: "docs-es/vehicle-validation/ecuador/vehicle-information-lookup.mdx"
locale: "es"
category: "vehicle-validation"
tags:
  - "ec"
  - "vehicle-validation"
endpoint: "/v2/ec/vehiculo/placa/multas"
sourceAnchor: "Endpoint"
slug: "/vehicle-validation/ecuador/vehicle-information-lookup"
url: "https://docs.verifik.co/verifik-es/vehicle-validation/ecuador/vehicle-information-lookup"
---

# 🇪🇨 Ecuador - Consulta de Información de Vehículo
**API path(s):** /v2/ec/vehiculo/placa/multas

## Endpoint

El servicio de Multas de Placa de Vehículos de Ecuador te permite recuperar información sobre multas asociadas con la placa de matrícula de un vehículo en Ecuador. Puedes acceder a detalles como la información de registro del vehículo, incluyendo el número de placa, clase y modelo. El servicio también proporciona el estado actual, tipo de servicio y fecha de vencimiento del registro, junto con cualquier multa pendiente vinculada a la placa de matrícula.

Este servicio es útil para individuos y empresas que buscan mantenerse informados sobre las multas asociadas con sus vehículos y asegurar el cumplimiento de las leyes de tránsito ecuatorianas.

### Endpoint

```
GET https://api.verifik.co/v2/ec/vehiculo/placa/multas
```

Consulta un vehículo ecuatoriano por **`plate`** (placa). Devuelve datos de registro y **multas pendientes** para **cumplimiento**, **flotas** y **riesgo**.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Parámetros

| Name | Type | Required | Description | Example |
| ---- | ---- | -------- | ----------- | ------- |
| `plate` | string | **Sí** | Número de placa a consultar, sin espacios ni puntos. | `ABC1234` |

### Solicitud

  

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/ec/vehiculo/placa/multas',
  params: {
    plate: 'ABC1234'
  },
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Bearer '
  }
};

try {
  const { data } = await axios.request(options);
  console.log(data);
} catch (error) {
  console.error(error);
}
```
