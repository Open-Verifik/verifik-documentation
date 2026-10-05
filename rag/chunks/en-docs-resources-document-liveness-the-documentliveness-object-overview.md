---
id: "en-docs-resources-document-liveness-the-documentliveness-object-overview"
title: "The Document Liveness Object — Overview"
sourcePath: "docs/resources/document-liveness/the-documentliveness-object.mdx"
locale: "en"
category: "resources"
tags:
  - "resources"
sourceAnchor: "Overview"
slug: "/resources/document-liveness/the-documentliveness-object"
url: "https://docs.verifik.co/resources/document-liveness/the-documentliveness-object"
---

# The Document Liveness Object

## Overview

The Document Liveness object represents the result of all validations performed on a document passed via a base64 image. This object contains information about various anti-spoofing checks including Screen Replay, Printed Copy, Portrait Substitution, and Digital Manipulation detection.

### Attributes

#### `client`

Type: string (reference id)  
Required: Yes

Reference to the client who owns this document liveness record.

#### `appRegistration`

Type: string (reference id)  
Required: Yes

Reference to the app registration associated with this document liveness validation.

#### `imageSaved`

Type: Boolean  
Required: No  
Default: false

Indicates whether the processed document image has been saved to storage.

#### `imageUrl`

Type: String  
Required: No  
Default: ""

URL where the processed document image is stored (when imageSaved is true).

#### `status`

Type: String  
Required: Yes

The current status of the document liveness validation. Can be:

* `"new"` - Validation request created but not yet processed (default)
* `"processing"` - Document is being analyzed
* `"completed"` - Validation completed successfully
* `"failed"` - Validation failed

#### `validationResults`

Type: Object  
Required: No

Contains the results of various validation checks:

* `screenReplay` - Screen replay detection result
* `printedCopy` - Printed copy detection result
* `portraitSubstitution` - Portrait substitution detection result
* `digitalManipulation` - Digital manipulation detection result

#### `calibrationSettings`

Type: Object  
Required: No

Contains the calibration settings used for validation:

* `screenReplayCalibration` - Calibration level: `SOFT`, `REGULAR`, `HARD`
* `printedCopyCalibration` - Calibration level: `SOFT`, `REGULAR`, `HARD`
* `portraitSubstitutionCalibration` - Calibration level: `SOFT`, `REGULAR`, `HARD`

#### `validationFlags`

Type: Object  
Required: No

Contains validation configuration flags:

* `ignoreDocumentCroppedValidation` - Boolean flag to ignore document cropping
* `ignoreColourLessValidation` - Boolean flag to ignore lack of color

#### `riskScore`

Type: Number  
Required: No

Overall risk assessment score for the document.

#### `confidence`

Type: Number  
Required: No

Confidence score for the validation results.

#### `createdAt`

Type: Date  
Required: Yes

Timestamp when the document liveness validation was created.

#### `updatedAt`

Type: Date  
Required: Yes

Timestamp when the document liveness validation was last updated.

#### `completedAt`

Type: Date  
Required: No

Timestamp when the validation was completed successfully.
