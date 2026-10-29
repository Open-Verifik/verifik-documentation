---
id: "en-docs-resources-document-liveness-create-a-document-liveness-request-2"
title: "Create a Document Liveness Validation — Request"
sourcePath: "docs/resources/document-liveness/create-a-document-liveness.mdx"
locale: "en"
category: "resources"
tags:
  - "document-liveness"
  - "resources"
endpoint: "/v2/document-liveness"
sourceAnchor: "Request"
slug: "/resources/create-a-document-liveness"
url: "https://docs.verifik.co/resources/create-a-document-liveness"
---

# Create a Document Liveness Validation
**API path(s):** /v2/document-liveness

## Request

```javascript

const options = {
  method: 'POST',
  url: 'https://api.verifik.co/v2/document-liveness',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '
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

```python

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
  'Authorization': 'Bearer '
}

conn.request("POST", "/v2/document-liveness", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

```php
request('POST', 'https://api.verifik.co/v2/document-liveness', [
  'headers' => [
    'Content-Type' => 'application/json',
    'Authorization' => 'Bearer ',
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

```go
package main

  "bytes"
  "encoding/json"
  "fmt"
  "net/http"
  "io/ioutil"
)

func main() {
  url := "https://api.verifik.co/v2/document-liveness"

  payload := map[string]interface{}{
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
    "ignoreColourLessValidation": false,
  }

  jsonData, _ := json.Marshal(payload)

  req, _ := http.NewRequest("POST", url, bytes.NewBuffer(jsonData))

  req.Header.Add("Content-Type", "application/json")
  req.Header.Add("Authorization", "Bearer ")

  res, _ := http.DefaultClient.Do(req)

  defer res.Body.Close()
  body, _ := ioutil.ReadAll(res.Body)

  fmt.Println(string(body))
}
```
