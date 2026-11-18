---
id: "en-docs-functions-decrypt-zelfproof-responses-6"
title: "Decrypt a ZelfProof — Responses"
sourcePath: "docs/functions/decrypt-zelfproof.md"
locale: "en"
category: "functions"
tags:
  - "functions"
endpoint: "/api/zelf-proof/decrypt"
sourceAnchor: "Responses"
---

# Decrypt a ZelfProof
**API path(s):** /api/zelf-proof/decrypt

## Responses

```json
{
    "validationError": "missing zelfProof\n"
}
```

* **200 OK**: The request was successful, and the decrypted data from the **ZelfProof** is returned in JSON format.

  ```json
  {
    "publicData": {
      "variable1": "string",
      "variable2": "string",
      "variable3": "string"
    },
    "difficulty": "EASY",
    "faceCropBase64": "string",
    "metadata": {
      "mnemonic": "string",
      "variable2": "string",
      "variable3": "string"
    },
    "identifier": "string"
  }
  ```
* **400 Bad Request**: There was an error with the request. Possible error codes include:

  ```json
  {
    "code": "ERR_INVALID_IMAGE",
    "message": "Invalid base64 string for the face image."
  }
  ```
* **401 Unauthorized**: The API Key is not present in the `X-api-key` header.

  ```json
  {
    "code": "ERR_API_KEY_NOT_PRESENT",
    "message": "API Key must be present in the x-api-key header."
  }
  ```
* **403 Forbidden**: The API Key is incorrect or there is an issue with licensing. Possible error codes include:
  * `ERR_API_KEY_NOT_VALID`: The provided API Key is not valid.
  * `ERR_LICENSE_EXPIRED`: The Zelf SDK license has expired.
  * `ERR_CANNOT_CONNECT_TO_TIME_SERVER`: Cannot connect to the time server to verify license expiry.
  * `ERR_CANNOT_CONNECT_TO_HOME_SERVER`: Cannot connect to the home server to verify license expiry.
  * `ERR_NUMBER_OF_AVAILABLE_INSTANCES_EXCEEDED`: The number of available instances for this license has been exceeded.
* **413 Payload Too Large**: The request sent is too large. Reduce the size of the image or data.

  ```json
  {
    "code": "ERR_PAYLOAD_IS_TOO_LARGE",
    "message": "The request sent is too big. Please try reducing the size of image(s)/data."
  }
  ```
* **422 Unprocessable Entity**: The request is invalid due to a specific error related to its content.

  ```json
  {
    "code": "ERR_UNPROCESSABLE_CONTENT",
    "message": "Invalid request: "
  }
  ```

#### Error Codes

Here are some specific error codes that might be returned during verification:

* **ERR\_INVALID\_IMAGE**: Invalid base64 string for the face image.
* **ERR\_NO\_FACE\_DETECTED**: No face detected in the image.
* **ERR\_MULTIPLE\_FACES\_DETECTED**: Multiple faces detected in the image.
* **ERR\_INVALID\_ZELFPROOF\_BYTES**: The provided hash bytes could not be interpreted as a valid base64 string.
* **ERR\_PARSE\_FAILED**: The hash could not be interpreted as a valid hash.
* **ERR\_PASSWORD\_REQUIRED**: A password is required to decrypt the hash but was not provided.
* **ERR\_INVALID\_PASSWORD**: The provided password is invalid.
* **ERR\_LIVENESS\_FAILED**: The user's face image in `face_base_64` is determined to not be live and `require_live_face` was set to true during hash creation.
* **ERR\_VERIFICATION\_FAILED**: Decryption failed due to the `face_base_64` not matching the face used to create the hash.

**Additional Liveness Error Codes:**

If the `face_base_64` is determined to be not suitable for liveness, the following error codes may be returned:

* **ERR\_LIVENESS\_FACE\_ANGLE\_TOO\_LARGE**: The face angle is too large (the user is not facing the camera).
* **ERR\_LIVENESS\_FACE\_IS\_OCCLUDED**: The face is occluded (e.g., by a mask).
* **ERR\_LIVENESS\_FACE\_CLOSE\_TO\_BORDER**: The face is too close to the border of the image.
* **ERR\_LIVENESS\_FACE\_TOO\_SMALL**: The face is too small in the image.
* **ERR\_LIVENESS\_EYES\_CLOSED**: The eyes are closed in the image.
