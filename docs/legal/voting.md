---
id: voting
title: Retrieve Voting Information for Colombian Citizens
description: Retrieve voting information for Colombian citizens
---

# Voting

## Retrieve Voting Information for Colombian Citizens

### Endpoint

```
https://api.verifik.co/v2/co/registraduria/votacion
```

The Voting Information service allows you to retrieve voting details from the "Registraduría Nacional del Estado Civil" for Colombian citizens. By providing the citizen's document number, you can access information such as their address, department, municipality, polling table, and voting station.

This service is valuable for verifying voter registration and facilitating the voting process.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### Query Parameters

| Name           | Type   | Required? | Description                                    | Example      |
| -------------- | ------ | --------- | ---------------------------------------------- | ------------ |
| documentNumber | String | True      | Document number of the person to consult, without spaces or points. | `123456789`  |

### Request

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/co/registraduria/votacion',
  params: {documentNumber: '123456789'},
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
    "documentNumber": "123456789",
    "firstName": "María",
    "lastName": "González",
    "fullName": "María González",
    "address": "Calle 123 #45-67",
    "department": "Cundinamarca",
    "municipality": "Bogotá D.C.",
    "pollingTable": "123",
    "votingStation": "Colegio San José",
    "votingStationAddress": "Carrera 7 #32-16",
    "status": "active"
  }
}
```

### Error Responses

```json
{
  "success": false,
  "error": "Voter not found",
  "code": "VOTER_NOT_FOUND"
}
```

## Use Cases

- **Voter Registration Verification**: Confirm voter registration status
- **Election Day Support**: Help voters find their polling locations
- **Demographic Analysis**: Analyze voter distribution and demographics
- **Election Monitoring**: Track voter participation and registration
- **Civic Engagement**: Support democratic processes and voter education
