# Create a Document Liveness

<mark style="color:green;">`POST`</mark> `https://api.verifik.co/v2/document-liveness`

A Document Liveness is the result of all the validations performed on the document passed via a base64 image. We have four types of validations that we perform to the document: ***Screen Replay, Printed Copy, Portrait Substitution, Digital Manipulation.** You can also decide to store the base64 into our CDN so you can retrieve the image that you tested.*

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

#### **Body**

<table><thead><tr><th width="291.7109375">Name</th><th width="121.66015625">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>image</code></td><td><code>blob</code></td><td>The document to test in base64 format.</td></tr><tr><td><code>saveImage</code></td><td><code>Boolean</code></td><td>This boolean will define if we save the image or not for further inspection.</td></tr><tr><td><code>validateScreenReplay</code></td><td><code>Boolean</code></td><td>Perform a validation to check if the attack came from a screen replay</td></tr><tr><td><code>validatePrintedCopy</code></td><td><code>Boolean</code></td><td>Perform a validation to check if the attack came from a printed copy</td></tr><tr><td><code>validatePortraitSubstitution</code></td><td><code>Boolean</code></td><td>Perform a validation to check if the attack came from a portrait substitution</td></tr><tr><td><code>validateDigitalManipulation</code></td><td><code>Boolean</code></td><td>Perform a validation to check if the attack came from a digital manipulation</td></tr><tr><td><code>screenReplayCalibration</code></td><td><code>String</code></td><td><p>You can adjust the calibration from <code>SOFT</code>, <code>REGULAR</code> or <code>HARD</code></p><p>default value is <code>REGULAR</code>.</p></td></tr><tr><td><code>printedCopyCalibration</code></td><td><code>String</code></td><td><p>You can adjust the calibration from <code>SOFT</code>, <code>REGULAR</code> or <code>HARD</code></p><p>default value is <code>REGULAR</code>.</p></td></tr><tr><td><code>portraitSubstitutionCalibration</code></td><td><code>Strnig</code></td><td><p>You can adjust the calibration from <code>SOFT</code>, <code>REGULAR</code> or <code>HARD</code></p><p>default value is <code>REGULAR</code>.</p></td></tr><tr><td><code>ignoreDocumentCroppedValidation</code></td><td><code>Boolean</code></td><td>it will ignore if the document was cropped.</td></tr><tr><td><code>ignoreColourLessValidation</code></td><td><code>Boolean</code></td><td>it will ignore the lack of color in the document.</td></tr></tbody></table>

#### Body example

```json
{
    "image": "{{documentoDeAnuar}}",
    "saveImage": true,
    "validatePrintedCopy": true,
    "validateScreenReplay": true,
    "validatePortraitSubstitution": true,
    "validateDigitalManipulation": true
}
```

### **Response**

**Key Features:**
- **Individual Pipeline Results**: Each validation type (screen replay, printed copy, portrait substitution, digital manipulation) returns its own score, probability, and warnings
- **Aggregate Results**: Overall `aggregatedScore`, `isLive` status, and `aggregateWarnings` across all validations
- **`rawResponse`**: Complete raw response from the internal API containing detailed pipeline results with `liveness_probability`, `is_live` boolean, and `image_quality_warnings` for each pipeline
- **`chargesCount`**: Number of pipelines processed (cost indicator)

{% tabs %}
{% tab title="200" %}

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
        "screenReplayWarnings": [
            "GLARE_ON_IMAGE",
            "IMAGE_IS_TOO_COMPRESSED",
            "IMAGE_TOO_BLURRY"
        ],
        "printedCopyWarnings": [
            "GLARE_ON_IMAGE",
            "IMAGE_IS_TOO_COMPRESSED",
            "IMAGE_TOO_BLURRY"
        ],
        "portraitSubstitutionWarnings": [],
        "digitalManipulationWarnings": [],
        "screenReplayErrors": [],
        "printedCopyErrors": [],
        "portraitSubstitutionErrors": [],
        "digitalManipulationErrors": [],
        "aggregatedScore": 0.0004,
        "isLive": false,
        "aggregateWarnings": [
            "GLARE_ON_IMAGE",
            "IMAGE_IS_TOO_COMPRESSED",
            "IMAGE_TOO_BLURRY"
        ],
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
                    "image_quality_warnings": [
                        "GLARE_ON_IMAGE",
                        "IMAGE_IS_TOO_COMPRESSED",
                        "IMAGE_TOO_BLURRY"
                    ],
                    "status": "success"
                },
                {
                    "pipeline_name": "printed-copy_2024-09",
                    "liveness_score": 2.725058,
                    "liveness_probability": "0.0001",
                    "is_live": false,
                    "image_quality_warnings": [
                        "GLARE_ON_IMAGE",
                        "IMAGE_IS_TOO_COMPRESSED",
                        "IMAGE_TOO_BLURRY"
                    ],
                    "status": "success"
                }
            ],
            "charges_count": 2,
            "aggregate_liveness_probability": "0.0004",
            "aggregate_is_live": false,
            "aggregate_image_quality_warnings": [
                "GLARE_ON_IMAGE",
                "IMAGE_IS_TOO_COMPRESSED",
                "IMAGE_TOO_BLURRY"
            ]
        }
    },
    "signature": {
        "dateTime": "October 28, 2025 1:24 AM",
        "message": "Certified by Verifik.co"
    },
    "id": "8YISP"
}
```

{% endtab %}

{% tab title="409" %}

```json
{
    "message": "At least one validation must be selected. Please enable one of: validateScreenReplay, validatePrintedCopy, validatePortraitSubstitution, or validateDigitalManipulation",
    "code": "MissingParameter"
}
```

{% endtab %}
{% endtabs %}
