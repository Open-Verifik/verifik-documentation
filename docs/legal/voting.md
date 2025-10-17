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

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="javascript" label="JavaScript">

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

  </TabItem>
  <TabItem value="python" label="Python">

```python
import http.client

conn = http.client.HTTPSConnection("api.verifik.co")

headers = {
    'Accept': "application/json",
    'Authorization': "Bearer <token>"
}

conn.request("GET", "/v2/co/registraduria/votacion?documentNumber=123456789", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

  </TabItem>
  <TabItem value="swift" label="Swift">

```swift
import Foundation

let headers = [
  "Accept": "application/json",
  "Authorization": "Bearer <token>"
]

let request = NSMutableURLRequest(url: NSURL(string: "https://api.verifik.co/v2/co/registraduria/votacion?documentNumber=123456789")! as URL,
                                        cachePolicy: .useProtocolCachePolicy,
                                    timeoutInterval: 10.0)
request.httpMethod = "GET"
request.allHTTPHeaderFields = headers

let session = URLSession.shared
let dataTask = session.dataTask(with: request as URLRequest, completionHandler: { (data, response, error) -> Void in
  if (error != nil) {
    print(error as Any)
  } else {
    let httpResponse = response as? HTTPURLResponse
    print(httpResponse)
  }
})

dataTask.resume()
```

  </TabItem>
  <TabItem value="php" label="PHP">

```php
<?php

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://api.verifik.co/v2/co/registraduria/votacion?documentNumber=123456789', [
  'headers' => [
    'Accept' => 'application/json',
    'Authorization' => 'Bearer <token>',
  ],
]);

echo $response->getBody();
```

  </TabItem>
</Tabs>

### Response

<Tabs>
  <TabItem value="200" label="200">

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

  </TabItem>
  <TabItem value="404" label="404">

```json
{
  "success": false,
  "error": "Voter not found",
  "code": "VOTER_NOT_FOUND"
}
```

  </TabItem>
  <TabItem value="409" label="409">

```json
{
  "code": "MissingParameter",
  "message": "missing documentNumber\n"
}
```

  </TabItem>
</Tabs>

### Features

-   **Voter Registration Verification**: Confirm voter registration status
-   **Location Information**: Details about polling table and voting station
-   **Demographic Data**: Information about department and municipality
-   **Structured Response**: Organized data format for easy integration
-   **Multiple Programming Languages**: Support for JavaScript, Python, PHP and Swift
-   **Error Handling**: Comprehensive error responses for various scenarios

## Use Cases

- **Voter Registration Verification**: Confirm voter registration status
- **Election Day Support**: Help voters find their polling locations
- **Demographic Analysis**: Analyze voter distribution and demographics
- **Election Monitoring**: Track voter participation and registration
- **Civic Engagement**: Support democratic processes and voter education
