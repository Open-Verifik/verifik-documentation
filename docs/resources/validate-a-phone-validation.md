---
id: validate-a-phone-validation
title: Validate a Phone Validation
description: Validate a phone validation by providing the verification code
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Validate a Phone Validation

**POST** `https://api.verifik.co/v2/phone-validations/{id}/validate`

This service validates a phone validation by providing the verification code. The system will check the code against the stored verification code and update the validation status accordingly.

## Headers

| Name          | Value                        |
| ------------- | ---------------------------- |
| Content-Type  | `application/json`           |
| Authorization | `Bearer {YOUR_ACCESS_TOKEN}` |

## Path Parameters

| Name | Type   | Description                                                      |
| ---- | ------ | ---------------------------------------------------------------- |
| `id` | string | The unique identifier of the phone validation record you want to validate. |

## Body

| Name               | Type   | Required | Description                                    |
| ------------------ | ------ | -------- | ---------------------------------------------- |
| `verificationCode` | string | **Yes**  | The verification code received via SMS        |

## Request

<Tabs>
  <TabItem value="javascript" label="JavaScript">

```javascript
import axios from 'axios';

const options = {
  method: 'POST',
  url: 'https://api.verifik.co/v2/phone-validations/phone_validation_123456789/validate',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer <your_token>'
  },
  data: {
    verificationCode: '123456'
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
import json

conn = http.client.HTTPSConnection("api.verifik.co")

payload = json.dumps({
  "verificationCode": "123456"
})

headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer <your_token>'
}

conn.request("POST", "/v2/phone-validations/phone_validation_123456789/validate", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

  </TabItem>
  <TabItem value="php" label="PHP">

```php
<?php

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://api.verifik.co/v2/phone-validations/phone_validation_123456789/validate', [
  'headers' => [
    'Content-Type' => 'application/json',
    'Authorization' => 'Bearer <your_token>',
  ],
  'json' => [
    'verificationCode' => '123456'
  ]
]);

echo $response->getBody();
```

  </TabItem>
  <TabItem value="swift" label="Swift">

```swift
import Foundation

let headers = [
  "Content-Type": "application/json",
  "Authorization": "Bearer <your_token>"
]

let parameters = [
  "verificationCode": "123456"
] as [String : Any]

let postData = try JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://api.verifik.co/v2/phone-validations/phone_validation_123456789/validate")! as URL,
                                        cachePolicy: .useProtocolCachePolicy,
                                    timeoutInterval: 10.0)
request.httpMethod = "POST"
request.allHTTPHeaderFields = headers
request.httpBody = postData as Data

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

## Response

<Tabs>
  <TabItem value="200" label="200">

```json
{
  "success": true,
  "data": {
    "_id": "phone_validation_123456789",
    "client": "client_123456789",
    "project": "project_123456789",
    "projectFlow": "flow_123456789",
    "status": "validated",
    "countryCode": "+1",
    "phone": "1234567890",
    "type": "validation",
    "validationMethod": "verificationCode",
    "verificationCode": "123456",
    "expiresAt": "2024-01-15T11:30:00Z",
    "attempts": 1,
    "maxAttempts": 3,
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-15T10:32:00Z",
    "validatedAt": "2024-01-15T10:32:00Z"
  },
  "signature": {
    "dateTime": "April 11, 2023 12:25 PM",
    "message": "Certified by Verifik.co"
  }
}
```

  </TabItem>
  <TabItem value="400" label="400">

```json
{
  "success": false,
  "error": "Invalid verification code",
  "code": "INVALID_CODE"
}
```

  </TabItem>
  <TabItem value="409" label="409">

```json
{
  "success": false,
  "error": "Verification code expired",
  "code": "CODE_EXPIRED"
}
```

  </TabItem>
  <TabItem value="410" label="410">

```json
{
  "success": false,
  "error": "Maximum attempts exceeded",
  "code": "MAX_ATTEMPTS_EXCEEDED"
}
```

  </TabItem>
</Tabs>

## Features

- **Code Validation**: Validates 6-digit OTP codes sent via SMS
- **Attempt Control**: Tracks validation attempts and maximum limits
- **Expiration**: Handles expired codes with appropriate responses
- **Status Update**: Updates validation status after successful verification
- **Timestamps**: Records when validation was completed
- **Country Codes**: Maintains country code information during validation
- **Multiple Languages**: Support for JavaScript, Python, PHP and Swift
- **Error Handling**: Detailed error responses for different scenarios
