---
id: mexico
title: Mexico
description: Verify Mexican vehicle information using license plate
---

# Mexico

## Endpoint

```
https://api.verifik.co/v2/mx/vehiculo/placa
```

The Vehicle Information service provides detailed information about a vehicle in Mexico based on its license plate number. This service specifically returns information about a vehicle's make, model, year, VIN, and other related details.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### Query Parameters

| Name   | Type   | Required? | Description                                    | Example      |
| ------ | ------ | --------- | ---------------------------------------------- | ------------ |
| plate  | String | True      | Vehicle license plate to consult.             | `ABC1234`    |

### Request

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/mx/vehiculo/placa',
  params: {plate: 'ABC1234'},
  headers: {
    Accept: 'application/json',
    Authorization: 'Bearer <your_token>'
  }
};

try {
  const { data } = await axios.request(options);
  console.log(data);
} catch (error) {
  console.error(error);
}
```

### Response

```json
{
  "success": true,
  "data": {
    "plate": "ABC1234",
    "make": "Nissan",
    "model": "Sentra",
    "year": "2021",
    "engine": "2.0L",
    "transmission": "CVT",
    "fuelType": "Gasoline",
    "vin": "1N4AL3AP8JC123456",
    "registrationDate": "10/08/2021",
    "status": "active",
    "owner": "Carlos Rodríguez",
    "state": "Jalisco",
    "city": "Guadalajara"
  }
}
```

### Error Responses

```json
{
  "success": false,
  "error": "Vehicle not found",
  "code": "VEHICLE_NOT_FOUND"
}
```

## Use Cases

- **Insurance Verification**: Verify vehicle details for insurance purposes
- **Car Dealerships**: Validate vehicle information before purchase
- **Fleet Management**: Track company vehicle information
- **Law Enforcement**: Verify vehicle registration and ownership
- **Due Diligence**: Verify vehicle information for transactions
