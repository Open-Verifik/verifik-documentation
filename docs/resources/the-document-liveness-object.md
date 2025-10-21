---
id: the-document-liveness-object
title: The Document Liveness Object
description: The Document Liveness object represents document authenticity validation results
---

# The Document Liveness Object

The Document Liveness object represents the result of all validations performed on a document passed via a base64 image. This object contains information about various anti-spoofing checks including Screen Replay, Printed Copy, Portrait Substitution, and Digital Manipulation detection.

## Attributes

**`client`** - ObjectId - Required

Reference to the client who owns this document liveness record.

**`appRegistration`** - ObjectId - Required

Reference to the app registration associated with this document liveness validation.

**`imageSaved`** - Boolean - Optional - Default: false

Indicates whether the processed document image has been saved to storage.

**`imageUrl`** - String - Optional - Default: ""

URL where the processed document image is stored (when imageSaved is true).

**`status`** - String - Required

The current status of the document liveness validation. Can be:

* `"new"` - Validation request created but not yet processed (default)
* `"processing"` - Document is being analyzed
* `"completed"` - Validation completed successfully
* `"failed"` - Validation failed

**`validationResults`** - Object - Optional

Contains the results of various validation checks:

* `screenReplay` - Screen replay detection result
* `printedCopy` - Printed copy detection result
* `portraitSubstitution` - Portrait substitution detection result
* `digitalManipulation` - Digital manipulation detection result

**`calibrationSettings`** - Object - Optional

Contains the calibration settings used for validation:

* `screenReplayCalibration` - Calibration level: `SOFT`, `REGULAR`, `HARD`
* `printedCopyCalibration` - Calibration level: `SOFT`, `REGULAR`, `HARD`
* `portraitSubstitutionCalibration` - Calibration level: `SOFT`, `REGULAR`, `HARD`

**`validationFlags`** - Object - Optional

Contains validation configuration flags:

* `ignoreDocumentCroppedValidation` - Boolean flag to ignore document cropping
* `ignoreColourLessValidation` - Boolean flag to ignore lack of color

**`riskScore`** - Number - Optional

Overall risk assessment score for the document.

**`confidence`** - Number - Optional

Confidence score for the validation results.

**`createdAt`** - Date - Required

Timestamp when the document liveness validation was created.

**`updatedAt`** - Date - Required

Timestamp when the document liveness validation was last updated.

**`completedAt`** - Date - Optional

Timestamp when the validation was completed successfully.

## Example Object

```json
{
  "_id": "document_liveness_123456789",
  "client": "client_123456789",
  "appRegistration": "app_registration_123456789",
  "imageSaved": true,
  "imageUrl": "https://cdn.verifik.co/images/document_123456789.jpg",
  "status": "completed",
  "validationResults": {
    "screenReplay": {
      "passed": true,
      "score": 0.95,
      "details": "No screen replay detected"
    },
    "printedCopy": {
      "passed": true,
      "score": 0.90,
      "details": "No printed copy detected"
    },
    "portraitSubstitution": {
      "passed": true,
      "score": 0.88,
      "details": "No portrait substitution detected"
    },
    "digitalManipulation": {
      "passed": true,
      "score": 0.92,
      "details": "No digital manipulation detected"
    }
  },
  "calibrationSettings": {
    "screenReplayCalibration": "REGULAR",
    "printedCopyCalibration": "REGULAR",
    "portraitSubstitutionCalibration": "REGULAR"
  },
  "validationFlags": {
    "ignoreDocumentCroppedValidation": false,
    "ignoreColourLessValidation": false
  },
  "riskScore": 0.05,
  "confidence": 0.91,
  "createdAt": "2024-01-15T10:30:00Z",
  "updatedAt": "2024-01-15T10:32:00Z",
  "completedAt": "2024-01-15T10:32:00Z"
}
```

### Features

- **Unique Identification**: Each validation has a unique ID for reference
- **Multiple States**: Support for different validation process states
- **Anti-Spoofing Validations**: Four types of attack detection
- **Calibration Configuration**: SOFT, REGULAR, and HARD levels
- **Validation Flags**: Settings to ignore cropping and lack of color
- **Detailed Scores**: Confidence scores for each validation
- **Image Storage**: Option to save images to CDN
- **Risk Assessment**: Overall document risk score
- **Complete Timestamps**: Record of creation, update, and completion
- **Context Information**: Client and application registration data