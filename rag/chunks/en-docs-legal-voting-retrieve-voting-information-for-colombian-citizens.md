---
id: "en-docs-legal-voting-retrieve-voting-information-for-colombian-citizens"
title: "Retrieve Voting Information for Colombian Citizens — Retrieve Voting Information for Colombian Citizens"
sourcePath: "docs/legal/voting.md"
locale: "en"
category: "legal"
tags:
  - "co"
  - "legal"
endpoint: "/v2/co/registraduria/votacion"
sourceAnchor: "Retrieve Voting Information for Colombian Citizens"
---

# Retrieve Voting Information for Colombian Citizens
**API path(s):** /v2/co/registraduria/votacion

## Retrieve Voting Information for Colombian Citizens

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
| Authorization | `Bearer `   |

### Query Parameters

| Name           | Type   | Required? | Description                                    | Example      |
| -------------- | ------ | --------- | ---------------------------------------------- | ------------ |
| documentNumber | String | True      | Document number of the person to consult, without spaces or points. | `123456789`  |

### Request

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/co/registraduria/votacion',
  params: {documentNumber: '123456789'},
  headers: {
    Accept: 'application/json',
    Authorization: 'Bearer '
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
