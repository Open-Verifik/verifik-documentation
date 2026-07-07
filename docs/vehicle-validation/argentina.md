---
id: argentina
title: Argentina - Vehicle Information
description: Verify Argentine vehicle information using license plate
keywords:
  - v2/ar/vehicle
  - /v2/ar/vehicle
  - v2 ar vehicle
  - api/ar/vehicle
  - /api/ar/vehicle
  - api ar vehicle
  - api.verifik.co/v2/ar/vehicle
  - 'https://api.verifik.co/v2/ar/vehicle'
  - GET v2/ar/vehicle
  - GET /v2/ar/vehicle
  - ar/vehicle
  - /ar/vehicle
---

# Argentina - Vehicle Information

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
| Authorization | `Bearer <token>`   |

### Parameters

| Name   | Type   | Required? | Description                                    | Example      |
| ------ | ------ | --------- | ---------------------------------------------- | ------------ |
| plate  | String | True      | Mercosur format `AA-123-BB` (send as `AA123BB`, without spaces or dots). | `AA123BB`     |

### Request

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="javascript" label="JavaScript">

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/ar/vehicle',
  params: {plate: 'AA123BB'},
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

  </TabItem>
  <TabItem value="php" label="PHP">

```php
<?php
$ch = curl_init("https://api.verifik.co/v2/ar/vehicle");
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Accept: application/json",
    "Authorization: Bearer " . getenv("VERIFIK_TOKEN")
]);
$query = http_build_query([
    "plate" => "AA123BB"
]);
curl_setopt($ch, CURLOPT_URL, "https://api.verifik.co/v2/ar/vehicle?".$query);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);
echo $response;
```

  </TabItem>
  <TabItem value="python" label="Python">

```python
import os, requests

url = "https://api.verifik.co/v2/ar/vehicle"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"plate": "AA123BB"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

  </TabItem>
</Tabs>

### Response

<Tabs>
  <TabItem value="200" label="200">

```json
{
  "data": {
    "brand": "HERMANN",
    "codeRegistrySectional": "2097",
    "isPlateMercosur": "true",
    "model": "FURGON",
    "plate": "AA123BB",
    "recordAddress": "AV. CORRIENTES 2063  PISO: 1 DPTO: 35",
    "registrationDenomination": "CAPITAL FEDERAL N° 097",
    "registrationLocality": "CABA",
    "registrationProvince": "",
    "type": "MOTOVEHICULO",
    "version": "S.FP.3E.98 2+1",
    "year": "2021"
  },
  "signature": {
    "dateTime": "October 10, 2025 6:21 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "2SJOD"
}
```

  </TabItem>
  <TabItem value="404" label="404">

```json
{
  "code": "NotFound",
  "message": "Record not found."
}
```

  </TabItem>
  <TabItem value="409" label="409">

```json
{
  "code": "MissingParameter",
  "message": "missing plate\n"
}
```

  </TabItem>
  <TabItem value="500" label="500">

```json
{
  "code": "InternalServerError",
  "message": "Server error."
}
```

  </TabItem>
</Tabs>


## Use Cases

- **Insurance Verification**: Verify vehicle details for insurance purposes
- **Car Dealerships**: Validate vehicle information before purchase
- **Fleet Management**: Track company vehicle information
- **Law Enforcement**: Verify vehicle registration and ownership
- **Due Diligence**: Verify vehicle information for transactions
