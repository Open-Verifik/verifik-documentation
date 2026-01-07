---
id: brazil
title: Brazil
description: Conduct background checks on Brazilian individuals using CPF
slug: /background-check/brazil
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Brazil

## Endpoint

```
https://api.verifik.co/v2/br/background-check
```

The Brazil Background service provides detailed information about Brazilian individuals. When making a query, the response includes relevant data such as associated names, ability to issue reports, certification number, document number, document type, first name, full name, last name, and a base64-encoded PDF file.

This information can be used for a variety of purposes, such as employment screening, due diligence, compliance verification, and fraud prevention.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### Parameters

:::info
For the complete list of supported **Document Types** and their specific mandatory parameters, please visit the [Document Types](/docs/background-check/document-types) guide.
:::

| Name           | Type    | Required | Description                                    |
| -------------- | ------- | -------- | ---------------------------------------------- |
| `documentType` | string  | Yes      | Document type. Allowed parameter: CPF. |
| `documentNumber` | string | Yes      | Document number of the person to consult. |
| `dateOfBirth` | string | Yes      | Date of birth of the person to consult, valid format: dd/mm/yyyy. |

### Request

<Tabs>
  <TabItem value="javascript" label="JavaScript">

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/br/background-check',
  params: {
    documentType: 'CPF',
    documentNumber: '012.345.678-01',
    dateOfBirth: '17/02/2002'
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
    'Authorization': "Bearer <your_token>"
}

conn.request("GET", "/v2/br/background-check?documentType=CPF&documentNumber=012.345.678-01&dateOfBirth=17/02/2002", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

  </TabItem>
  <TabItem value="php" label="PHP">

```php
<?php

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://api.verifik.co/v2/br/background-check?documentType=CPF&documentNumber=012.345.678-01&dateOfBirth=17/02/2002', [
  'headers' => [
    'Accept' => 'application/json',
    'Authorization' => 'Bearer <your_token>',
  ],
]);

echo $response->getBody();
```

  </TabItem>
  <TabItem value="swift" label="Swift">

```swift
import Foundation

let headers = [
  "Accept": "application/json",
  "Authorization": "Bearer <your_token>"
]

let request = NSMutableURLRequest(url: NSURL(string: "https://api.verifik.co/v2/br/background-check?documentType=CPF&documentNumber=012.345.678-01&dateOfBirth=17/02/2002")! as URL,
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
</Tabs>

### Response

<Tabs>
  <TabItem value="200" label="200">

```json
{
  "data": {
    "documentType": "CPF",
    "documentNumber": "012.345.678-01",
    "firstName": "João",
    "lastName": "Silva",
    "fullName": "João Silva",
    "dateOfBirth": "17/02/2002",
    "certificationNumber": "123456789",
    "canIssueReports": true,
    "associatedNames": ["João Silva Santos"],
    "pdfReport": "base64_encoded_pdf_content",
    "status": "clear"
  },
  "signature": {
    "dateTime": "April 11, 2023 12:25 PM",
    "message": "Certified by Verifik.co"
  }
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
  "message": "missing documentType\n. missing documentNumber\n. missing dateOfBirth\n"
}
```

  </TabItem>
  <TabItem value="409-2" label="409 (Invalid Type)">

```json
{
  "code": "MissingParameter",
  "message": "documentType must be one of: [CPF]"
}
```

  </TabItem>
</Tabs>

### Features

-   **CPF Verification**: Verify the authenticity of Brazilian CPF documents
-   **Complete Background Data**: Returns full name, document details, certification number, and PDF report
-   **Structured Response**: Organized data format for easy integration
-   **Multiple Programming Languages**: Support for JavaScript, Python, PHP, and Swift
-   **Error Handling**: Comprehensive error responses for various scenarios
