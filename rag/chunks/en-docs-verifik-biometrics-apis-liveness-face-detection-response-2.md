---
id: "en-docs-verifik-biometrics-apis-liveness-face-detection-response-2"
title: "Face Detection — Response"
sourcePath: "docs/verifik-biometrics-apis/liveness/face-detection.mdx"
locale: "en"
category: "verifik-biometrics-apis"
tags:
  - "biometrics"
  - "face-recognition"
  - "verifik-biometrics-apis"
endpoint: "/v2/face-recognition/detect"
sourceAnchor: "Response"
slug: "/verifik-biometrics-apis/liveness/face-detection"
url: "https://docs.verifik.co/verifik-biometrics-apis/liveness/face-detection"
---

# Face Detection
**API path(s):** /v2/face-recognition/detect

Detects and extracts faces from images. This endpoint can be used to identify and locate faces in images before performing liveness detection or face comparison.

## Response

```json
{
  "id": "DETECT123",
  "data": {
    "faces": [
      {
        "bounding_box": {
          "x": 100,
          "y": 150,
          "width": 200,
          "height": 250
        },
        "confidence": 0.99,
        "landmarks": {
          "left_eye": {"x": 150, "y": 200},
          "right_eye": {"x": 250, "y": 200},
          "nose": {"x": 200, "y": 250},
          "mouth": {"x": 200, "y": 300}
        },
        "attributes": {
          "age": 30,
          "gender": "male"
        }
      }
    ],
    "face_count": 1
  },
  "signature": {
    "message": "Certified by Verifik.co",
    "dateTime": "January 16, 2024 3:44 PM"
  }
}
```

  
  

```json
{
  "message": "Authentication required",
  "code": "UNAUTHORIZED"
}
```

  
  

```json
{
  "message": "\"image\" is required",
  "code": "MissingParameter"
}
```

  
  

```json
{
  "message": "internal_error",
  "code": "ERROR"
}
```

### Notes

- `image` may be base64 or an `https` URL. If URL, the service fetches and converts it internally.
- `return_landmarks` and `return_attributes` are optional and default to `false` for faster processing.
- The response includes bounding boxes for all detected faces in the image.
