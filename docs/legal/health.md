---
id: health
title: Colombian RETHUS Verification Data
description: Verify Colombian health professional data and affiliations
---

# Health

## Colombian RETHUS Verification Data

### Endpoint

```
https://api.verifik.co/v2/co/cedula/rethus
```

This service allows you to verify the authenticity of a Colombian ID (Cédula) and access information from the National Unique Registry of Human Talent in Health (RETHUS). By providing the document type and number, you can retrieve details such as the individual's full name, RETHUS status, and their academic and Social Security data. The RETHUS data includes information about the healthcare professional's academic degrees and Social Security affiliation, including benefits and modalities.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### Query Parameters

| Name           | Type   | Required? | Description                                    | Example      |
| -------------- | ------ | --------- | ---------------------------------------------- | ------------ |
| documentType   | String | True      | Document type. Valid parameter: CC.           | `CC`         |
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
  url: 'https://api.verifik.co/v2/co/cedula/rethus',
  params: {
    documentType: 'CC',
    documentNumber: '123456789'
  },
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

conn.request("GET", "/v2/co/cedula/rethus?documentType=CC&documentNumber=123456789", headers=headers)

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

let request = NSMutableURLRequest(url: NSURL(string: "https://api.verifik.co/v2/co/cedula/rethus?documentType=CC&documentNumber=123456789")! as URL,
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

$response = $client->request('GET', 'https://api.verifik.co/v2/co/cedula/rethus?documentType=CC&documentNumber=123456789', [
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
    "documentType": "CC",
    "documentNumber": "123456789",
    "firstName": "Carlos",
    "lastName": "Mendoza",
    "fullName": "Carlos Mendoza",
    "rethusStatus": "active",
    "academicDegrees": [
      {
        "degree": "Médico General",
        "institution": "Universidad Nacional",
        "year": "2015"
      }
    ],
    "socialSecurityAffiliation": {
      "status": "active",
      "benefits": "Completo",
      "modality": "Contributivo"
    },
    "specialization": "Medicina General",
    "licenseNumber": "12345"
  }
}
```

  </TabItem>
  <TabItem value="404" label="404">

```json
{
  "success": false,
  "error": "Health professional not found",
  "code": "HEALTH_PROFESSIONAL_NOT_FOUND"
}
```

  </TabItem>
  <TabItem value="409" label="409">

```json
{
  "code": "MissingParameter",
  "message": "missing documentType\n. missing documentNumber\n"
}
```

  </TabItem>
</Tabs>

### Features

-   **Healthcare Verification**: Verify healthcare professional credentials
-   **Medical Licensing**: Confirm medical licenses and specializations
-   **RETHUS Database**: Access national registry of health professionals
-   **Academic Information**: Review professional degrees and institutions
-   **Social Security Data**: Check affiliation status and benefits
-   **Structured Response**: Organized data format for easy integration
-   **Multiple Programming Languages**: Support for JavaScript, Python, PHP and Swift
-   **Error Handling**: Comprehensive error responses for various scenarios

## Use Cases

- **Healthcare Verification**: Verify healthcare professional credentials
- **Medical Licensing**: Confirm medical licenses and specializations
- **Insurance Verification**: Verify health insurance affiliations
- **Regulatory Compliance**: Meet healthcare regulatory requirements
- **Patient Safety**: Ensure qualified healthcare providers
