---
id: brazil
title: Brazil
description: Verify Brazilian vehicle information using license plate
---

# Brazil

## Endpoint

```
https://api.verifik.co/v2/br/vehicle
```

The Brazilian Vehicle information service allows you to verify the authenticity of Brazilian vehicle information by providing the vehicle's license plate number. The service returns detailed information about the vehicle, including its brand, model, year of manufacture, engine, transmission, fuel type, and more.

This service is useful for car dealerships, insurance companies, and any business or individual looking to verify Brazilian vehicle information.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### Query Parameters

| Name   | Type   | Required? | Description                                    | Example      |
| ------ | ------ | --------- | ---------------------------------------------- | ------------ |
| plate  | String | True      | Plate to consult, without spaces or points.  | `ABC0123`    |

### Request

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="javascript" label="JavaScript">

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/br/vehicle',
  params: {plate: 'ITU7764'},
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
$ch = curl_init("https://api.verifik.co/v2/br/vehicle");
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Accept: application/json",
    "Authorization: Bearer " . getenv("VERIFIK_TOKEN")
]);
$query = http_build_query([
    "plate" => "ITU7764"
]);
curl_setopt($ch, CURLOPT_URL, "https://api.verifik.co/v2/br/vehicle?".$query);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);
echo $response;
```

  </TabItem>
  <TabItem value="python" label="Python">

```python
import os, requests

url = "https://api.verifik.co/v2/br/vehicle"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"plate": "ITU7764"}
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
    "bodyType": "Sedan",
    "brand": "FIAT",
    "chassis": "9BD197134D3048111",
    "color": "VERMELHA",
    "country": "Brasil",
    "denatranWarning": "",
    "doors": "4",
    "engine": "1.4",
    "factory": "Betim - MG",
    "fipeCodes": [
      "001381-1"
    ],
    "fuelType": "Flexivel Alcool/Gasolina/GNV",
    "irregularitiesCount": 0,
    "irregularityCode": "",
    "manufacturer": "FIAT",
    "model": "Grand Siena TetraFuel 1.4 Flex GNV 4P",
    "modelYear": "2013",
    "plate": "ITU7764",
    "transmission": "Manual",
    "vehicle": "Grand Siena",
    "version": "TetraFuel",
    "yearOfManufacture": "2012"
  },
  "signature": {
    "dateTime": "October 10, 2025 6:57 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "7ZNJG"
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
