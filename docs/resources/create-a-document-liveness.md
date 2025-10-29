---
id: create-a-document-liveness
title: Create a Document Liveness Validation
description: Create a document liveness validation to verify document authenticity
slug: /resources/create-a-document-liveness
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Create a Document Liveness Validation

## Endpoint

```
POST https://api.verifik.co/v2/document-liveness
```

A Document Liveness Validation is the result of all validations performed on a document passed via a base64 image. We have four types of validations that we perform on the document: **Screen Replay, Printed Copy, Portrait Substitution, Digital Manipulation.** You can also decide to store the base64 in our CDN so you can retrieve the image that you tested.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### Body Parameters

| Name                               | Type    | Description                                                                                    |
| ---------------------------------- | ------- | ---------------------------------------------------------------------------------------------- |
| `image`                            | blob    | The document to test in base64 format.                                                        |
| `saveImage`                        | Boolean | This boolean will define if we save the image or not for further inspection.                 |
| `validateScreenReplay`             | Boolean | Perform a validation to check if the attack came from a screen replay                         |
| `validatePrintedCopy`              | Boolean | Perform a validation to check if the attack came from a printed copy                          |
| `validatePortraitSubstitution`    | Boolean | Perform a validation to check if the attack came from a portrait substitution                 |
| `validateDigitalManipulation`     | Boolean | Perform a validation to check if the attack came from a digital manipulation                  |
| `screenReplayCalibration`          | string  | You can adjust the calibration from `SOFT`, `REGULAR` or `HARD`. Default value is `REGULAR`. |
| `printedCopyCalibration`          | string  | You can adjust the calibration from `SOFT`, `REGULAR` or `HARD`. Default value is `REGULAR`. |
| `portraitSubstitutionCalibration` | string  | You can adjust the calibration from `SOFT`, `REGULAR` or `HARD`. Default value is `REGULAR`. |
| `ignoreDocumentCroppedValidation` | Boolean | It will ignore if the document was cropped.                                                   |
| `ignoreColourLessValidation`      | Boolean | It will ignore the lack of color in the document.                                            |

### Request

<Tabs>
  <TabItem value="javascript" label="JavaScript">

```javascript
import axios from 'axios';

const options = {
  method: 'POST',
  url: 'https://api.verifik.co/v2/document-liveness',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer <your_token>'
  },
  data: {
    image: 'base64_encoded_document_image',
    saveImage: true,
    validatePrintedCopy: true,
    validateScreenReplay: true,
    validatePortraitSubstitution: true,
    validateDigitalManipulation: true,
    screenReplayCalibration: 'REGULAR',
    printedCopyCalibration: 'REGULAR',
    portraitSubstitutionCalibration: 'REGULAR',
    ignoreDocumentCroppedValidation: false,
    ignoreColourLessValidation: false
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
  "image": "base64_encoded_document_image",
  "saveImage": True,
  "validatePrintedCopy": True,
  "validateScreenReplay": True,
  "validatePortraitSubstitution": True,
  "validateDigitalManipulation": True,
  "screenReplayCalibration": "REGULAR",
  "printedCopyCalibration": "REGULAR",
  "portraitSubstitutionCalibration": "REGULAR",
  "ignoreDocumentCroppedValidation": False,
  "ignoreColourLessValidation": False
})

headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer <your_token>'
}

conn.request("POST", "/v2/document-liveness", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

  </TabItem>
  <TabItem value="php" label="PHP">

```php
<?php

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://api.verifik.co/v2/document-liveness', [
  'headers' => [
    'Content-Type' => 'application/json',
    'Authorization' => 'Bearer <your_token>',
  ],
  'json' => [
    'image' => 'base64_encoded_document_image',
    'saveImage' => true,
    'validatePrintedCopy' => true,
    'validateScreenReplay' => true,
    'validatePortraitSubstitution' => true,
    'validateDigitalManipulation' => true,
    'screenReplayCalibration' => 'REGULAR',
    'printedCopyCalibration' => 'REGULAR',
    'portraitSubstitutionCalibration' => 'REGULAR',
    'ignoreDocumentCroppedValidation' => false,
    'ignoreColourLessValidation' => false
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
  "image": "base64_encoded_document_image",
  "saveImage": true,
  "validatePrintedCopy": true,
  "validateScreenReplay": true,
  "validatePortraitSubstitution": true,
  "validateDigitalManipulation": true,
  "screenReplayCalibration": "REGULAR",
  "printedCopyCalibration": "REGULAR",
  "portraitSubstitutionCalibration": "REGULAR",
  "ignoreDocumentCroppedValidation": false,
  "ignoreColourLessValidation": false
] as [String : Any]

let postData = try JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://api.verifik.co/v2/document-liveness")! as URL,
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

### Response

<Tabs>
  <TabItem value="200" label="200">

```json
{
  "data": {
    "client": "68f18d25aafc7dbd2a0bd416",
    "imageSaved": true,
    "imageUrl": "https://cdn.verifik.co/document-liveness/document-liveness-1761614605009",
    "validateScreenReplay": true,
    "validatePrintedCopy": true,
    "validatePortraitSubstitution": false,
    "validateDigitalManipulation": false,
    "sreenReplayScore": 0.20818532,
    "printedCopyScore": 2.725058,
    "portraitSubstitutionScore": 0,
    "digitalManipulationScore": 0,
    "screenReplayProbability": 0.0008,
    "printedCopyProbability": 0.0001,
    "portraitSubstitutionProbability": 0,
    "digitalManipulationProbability": 0,
    "sreenReplayCalibration": "REGULAR",
    "printedCopyCalibration": "REGULAR",
    "portraitSubstitutionCalibration": "REGULAR",
    "digitalManipulationCalibration": "REGULAR",
    "ignoreDocumentCroppedValidation": false,
    "ignoreColourLessValidation": false,
    "screenReplayWarnings": ["GLARE_ON_IMAGE", "IMAGE_IS_TOO_COMPRESSED", "IMAGE_TOO_BLURRY"],
    "printedCopyWarnings": ["GLARE_ON_IMAGE", "IMAGE_IS_TOO_COMPRESSED", "IMAGE_TOO_BLURRY"],
    "portraitSubstitutionWarnings": [],
    "digitalManipulationWarnings": [],
    "screenReplayErrors": [],
    "printedCopyErrors": [],
    "portraitSubstitutionErrors": [],
    "digitalManipulationErrors": [],
    "aggregatedScore": 0.0004,
    "isLive": false,
    "aggregateWarnings": ["GLARE_ON_IMAGE", "IMAGE_IS_TOO_COMPRESSED", "IMAGE_TOO_BLURRY"],
    "_id": "69001b0d3440483cbaae2d68",
    "updatedAt": "2025-10-28T01:23:59.928Z",
    "createdAt": "2025-10-28T01:23:59.928Z",
    "__v": 0,
    "chargesCount": 2,
    "rawResponse": {
      "pipeline_results": [
        {
          "pipeline_name": "screen-replay_2024-09",
          "liveness_score": 0.20818532,
          "liveness_probability": "0.0008",
          "is_live": false,
          "image_quality_warnings": ["GLARE_ON_IMAGE", "IMAGE_IS_TOO_COMPRESSED", "IMAGE_TOO_BLURRY"],
          "status": "success"
        },
        {
          "pipeline_name": "printed-copy_2024-09",
          "liveness_score": 2.725058,
          "liveness_probability": "0.0001",
          "is_live": false,
          "image_quality_warnings": ["GLARE_ON_IMAGE", "IMAGE_IS_TOO_COMPRESSED", "IMAGE_TOO_BLURRY"],
          "status": "success"
        }
      ],
      "charges_count": 2,
      "aggregate_liveness_probability": "0.0004",
      "aggregate_is_live": false,
      "aggregate_image_quality_warnings": ["GLARE_ON_IMAGE", "IMAGE_IS_TOO_COMPRESSED", "IMAGE_TOO_BLURRY"]
    }
  },
  "signature": {
    "dateTime": "October 28, 2025 1:24 AM",
    "message": "Certified by Verifik.co"
  },
  "id": "8YISP"
}
```

  </TabItem>
  <TabItem value="400" label="400">

```json
{
  "error": "Invalid image format",
  "message": "INVALID_IMAGE_FORMAT"
}
```

  </TabItem>
  <TabItem value="413" label="413">

```json
{
  "error": "Image too large",
  "message": "IMAGE_TOO_LARGE"
}
```

  </TabItem>
</Tabs>

### Features

- **Anti-Spoofing Detection**: Four types of validations to detect attacks
- **Screen Replay**: Detects if the document comes from a screen
- **Printed Copy**: Detects if the document is a printed copy
- **Portrait Substitution**: Detects if the photo was substituted
- **Digital Manipulation**: Detects digital manipulation of the document
- **Adjustable Calibration**: SOFT, REGULAR, and HARD levels for each validation
- **Image Storage**: Option to save images to CDN
- **Confidence Scores**: Detailed scores for each validation
- **Multiple Languages**: Support for JavaScript, Python, PHP, and Swift
- **Error Handling**: Detailed error responses for different scenarios
