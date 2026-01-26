---
id: validacion-de-vehiculo-estados-unidos-informacion-del-vehiculo
title: Estados Unidos - Información del Vehículo
description: Servicio de validación de vehículos de Estados Unidos para recuperar información de vehículos usando placa de matrícula y estado
slug: /validacion-de-vehiculo/estados-unidos/informacion-del-vehiculo
---

# Estados Unidos - Información del Vehículo

El servicio de validación de vehículos de Estados Unidos te permite recuperar información detallada sobre vehículos registrados en Estados Unidos usando el número de placa de matrícula y el estado.

## Endpoint

```
GET https://api.verifik.co/v2/us/vehicle
```

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### Parámetros

| Name | Type | Required | Description | Example |
| ---- | ---- | -------- | ----------- | ------- |
| `plate` | string | **Sí** | Número de placa de matrícula. | `ABC1234` |
| `state` | string | **Sí** | Código de estado de dos letras (por ejemplo, CA, NY, TX). | `CA` |

### Solicitud

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/us/vehicle',
  params: {
    plate: 'ABC1234',
    state: 'CA'
  },
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Bearer <tu_token>'
  }
};

try {
  const { data } = await axios.request(options);
  console.log(data);
} catch (error) {
  console.error(error);
}
```

### Respuesta

#### Success (200)

```json
{
  "data": {
    "plate": "ABC1234",
    "state": "CA",
    "make": "Toyota",
    "model": "Camry",
    "year": "2020",
    "vin": "4T1B11HK5JU123456",
    "bodyClass": "Sedan",
    "vehicleType": "Passenger"
  },
  "signature": {
    "dateTime": "January 16, 2024 3:44 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "USV001"
}
```

#### Not Found (404)

```json
{
    "code": "NotFound",
    "message": "Record not found."
}
```

## Características

- **Recuperación de Información de Vehículos**: Obtén detalles completos de vehículos desde el registro de vehículos de Estados Unidos
- **Clasificación de Vehículos**: Accede a información de clase de carrocería y tipo de vehículo
- **Datos en Tiempo Real**: Accede a información de vehículos actual y actualizada
- **Múltiples Estados**: Soporte para verificación de vehículos en múltiples estados de Estados Unidos

Para más información, visita la documentación en inglés: [United States Vehicle Information](/vehicle-validation/united-states/vehicle-information)
