---
id: "en-docs-resources-document-liveness-create-a-document-liveness-endpoint"
title: "Create a Document Liveness Validation — Endpoint"
sourcePath: "docs/resources/document-liveness/create-a-document-liveness.mdx"
locale: "en"
category: "resources"
tags:
  - "document-liveness"
  - "resources"
endpoint: "/v2/document-liveness"
sourceAnchor: "Endpoint"
slug: "/resources/create-a-document-liveness"
url: "https://docs.verifik.co/resources/create-a-document-liveness"
---

# Create a Document Liveness Validation
**API path(s):** /v2/document-liveness

## Endpoint

**POST** `https://api.verifik.co/v2/document-liveness`

A Document Liveness Validation is the result of all validations performed on a document passed via a base64 image. We have four types of validations that we perform on the document: **Screen Replay, Printed Copy, Portrait Substitution, Digital Manipulation.** You can also decide to store the base64 in our CDN so you can retrieve the image that you tested.

### Headers

#### Content-Type
Type: String  
Required: Yes

`application/json`

#### Authorization
Type: String  
Required: Yes

`Bearer `

### Body Parameters

#### `image`
Type: blob  
Required: Yes

The document to test in base64 format.

#### `saveImage`
Type: Boolean  
Required: No

This boolean will define if we save the image or not for further inspection.

#### `validateScreenReplay`
Type: Boolean  
Required: No

Perform a validation to check if the attack came from a screen replay

#### `validatePrintedCopy`
Type: Boolean  
Required: No

Perform a validation to check if the attack came from a printed copy

#### `validatePortraitSubstitution`
Type: Boolean  
Required: No

Perform a validation to check if the attack came from a portrait substitution

#### `validateDigitalManipulation`
Type: Boolean  
Required: No

Perform a validation to check if the attack came from a digital manipulation

#### `screenReplayCalibration`
Type: string  
Required: No

You can adjust the calibration from `SOFT`, `REGULAR` or `HARD`. Default value is `REGULAR`.

#### `printedCopyCalibration`
Type: string  
Required: No

You can adjust the calibration from `SOFT`, `REGULAR` or `HARD`. Default value is `REGULAR`.

#### `portraitSubstitutionCalibration`
Type: string  
Required: No

You can adjust the calibration from `SOFT`, `REGULAR` or `HARD`. Default value is `REGULAR`.

#### `ignoreDocumentCroppedValidation`
Type: Boolean  
Required: No

It will ignore if the document was cropped.

#### `ignoreColourLessValidation`
Type: Boolean  
Required: No

It will ignore the lack of color in the document.
