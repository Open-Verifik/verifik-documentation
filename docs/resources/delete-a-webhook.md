---
id: delete-a-webhook
title: Delete a Webhook
description: Permanently remove a specific webhook
slug: /resources/delete-a-webhook
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Delete a Webhook

## Endpoint

```
DELETE https://api.verifik.co/v2/webhooks/{id}
```

To delete a specific webhook, make a DELETE request to the endpoint where `{id}` should be replaced with the unique identifier of the webhook you want to delete.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### Parameters

| Name | Type   | Required | Description                                                      |
| ---- | ------ | -------- | ---------------------------------------------------------------- |
| `id` | string | Yes      | ID of the webhook that you want to delete.                       |

### Request

<Tabs>
  <TabItem value="javascript" label="JavaScript">

```javascript
import axios from 'axios';

const options = {
  method: 'DELETE',
  url: 'https://api.verifik.co/v2/webhooks/66df1c0ad08b9d244bd1c806',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer <your_token>'
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
  'Content-Type': 'application/json',
  'Authorization': 'Bearer <your_token>'
}

conn.request("DELETE", "/v2/webhooks/66df1c0ad08b9d244bd1c806", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

  </TabItem>
  <TabItem value="php" label="PHP">

```php
<?php

$client = new \GuzzleHttp\Client();

$response = $client->request('DELETE', 'https://api.verifik.co/v2/webhooks/66df1c0ad08b9d244bd1c806', [
  'headers' => [
    'Content-Type': 'application/json',
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
  "Content-Type": "application/json",
  "Authorization": "Bearer <your_token>"
]

let request = NSMutableURLRequest(url: NSURL(string: "https://api.verifik.co/v2/webhooks/66df1c0ad08b9d244bd1c806")! as URL,
                                        cachePolicy: .useProtocolCachePolicy,
                                    timeoutInterval: 10.0)
request.httpMethod = "DELETE"
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
    "_id": "66df1c0ad08b9d244bd1c806",
    "client": "613375a1eab2fe08527f81e2",
    "projectFlow": [],
    "isActive": true,
    "name": "Postman sample",
    "url": "https://sandbox.verifik.co/v2/webhooks/logs",
    "notification": {
      "success": false,
      "fail": true,
      "_id": "66df1c0ad08b9d244bd1c805"
    },
    "updatedAt": "2024-09-09T16:02:18.713Z",
    "createdAt": "2024-09-09T16:02:18.713Z",
    "__v": 0
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
</Tabs>

### Features

- **Permanent Deletion**: Completely remove webhooks from your account
- **Confirmation Response**: Returns the deleted webhook data for confirmation
- **Multiple Programming Languages**: Support for JavaScript, Python, PHP, and Swift
- **Error Handling**: Proper 404 responses for non-existent webhooks
- **Safe Operation**: Verify webhook ID before deletion