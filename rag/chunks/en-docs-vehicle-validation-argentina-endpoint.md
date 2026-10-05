---
id: "en-docs-vehicle-validation-argentina-endpoint"
title: "Argentina - Vehicle Information — Endpoint"
sourcePath: "docs/vehicle-validation/argentina.md"
locale: "en"
category: "vehicle-validation"
tags:
  - "ar"
  - "vehicle-validation"
endpoint: "/v2/ar/vehicle"
sourceAnchor: "Endpoint"
---

# Argentina - Vehicle Information
**API path(s):** /v2/ar/vehicle

## Endpoint

### Endpoint

```
GET https://api.verifik.co/v2/ar/vehicle
```

The Argentine Vehicle Information service provides detailed information about vehicles registered in Argentina using their license plate number. This service returns comprehensive vehicle data including make, model, year, engine specifications, and registration details.

### Related Argentina Vehicle Services

- [Argentina Vehicle v3](/vehicle-validation/argentina/vehicle-v3) returns vehicle identifiers, active policy status, and technical-sheet data when available.
- [Buenos Aires Traffic Infractions](/vehicle-validation/argentina/buenos-aires-traffic-infractions) checks traffic infraction records by plate.
- [Buenos Aires Technical Inspection](/vehicle-validation/argentina/buenos-aires-technical-inspection) checks VTV-style technical inspection history by plate.
- [Argentina RTO](/vehicle-validation/argentina/rto) checks RTO inspection records by plate.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Parameters

| Name   | Type   | Required? | Description                                    | Example      |
| ------ | ------ | --------- | ---------------------------------------------- | ------------ |
| plate  | String | True      | Mercosur format `AA-123-BB` (send as `AA123BB`, without spaces or dots). | `AA123BB`     |

### Request

  

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/ar/vehicle',
  params: {plate: 'AA123BB'},
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

  
  

```php
 "AA123BB"
]);
curl_setopt($ch, CURLOPT_URL, "https://api.verifik.co/v2/ar/vehicle?".$query);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);
echo $response;
```

  
  

```python

url = "https://api.verifik.co/v2/ar/vehicle"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"plate": "AA123BB"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```
