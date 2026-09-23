---
id: "en-docs-ocr-engines-scan-studio-key-differences-between-v2-and-v3-10"
title: "Scan Studio — Key Differences Between v2 and v3"
sourcePath: "docs/ocr-engines/scan-studio.mdx"
locale: "en"
category: "ocr-engines"
tags:
  - "ocr"
  - "ocr-engines"
endpoints:
  - "/v2/ocr/scan-studio"
  - "/v3/ocr/scan-studio"
sourceAnchor: "Key Differences Between v2 and v3"
slug: "/ocr-engines/scan-studio"
url: "https://docs.verifik.co/ocr-engines/scan-studio"
---

# Scan Studio
**API path(s):** /v2/ocr/scan-studio, /v3/ocr/scan-studio

## Key Differences Between v2 and v3

| Feature | Version 2 | Version 3 |
|---------|-----------|-----------|
| **Field Structure** | Fields organized in `fields` object with `kind`, `value`, `content`, `confidence` | Fields organized as array with `type`, `mentionText`, `confidence`, `textAnchor`, `pageAnchor` |
| **Bounding Regions** | Uses `polygon` coordinates with absolute pixel values | Uses `normalizedVertices` with relative coordinates (0-1) |
| **Confidence Scores** | Single confidence per field | Enhanced confidence scoring with more precision |
| **Additional Fields** | Basic document fields | Additional fields like `country`, `documentCategory`, `nationality` |
| **Normalized Values** | Raw extracted text only | Includes `normalizedValue` for dates and other structured data |
| **Response Structure** | Includes `age`, `gender` fields | Also includes `age`, `gender` fields plus `country`, `documentCategory` |
| **Field Identification** | Uses field names as keys | Uses `id` and `type` for better field identification |

### Migration Benefits

- **Enhanced Accuracy**: Improved OCR accuracy with better confidence scoring
- **Better Structure**: More organized field data with normalized coordinates
- **Additional Data**: More comprehensive document information extraction
- **Future-Proof**: Active development and support for v3

### Features

-   **Pre-trained Models**: Leverages pre-trained models developed by Verifik for exceptional performance
-   **High Accuracy**: Superior accuracy in data extraction with confidence scores for each field
-   **Structured Data**: Returns organized field data with bounding regions and confidence levels
-   **Multiple Document Types**: Supports various government-issued IDs and documents
-   **Validation Process**: All extracted information undergoes rigorous validation and verification
- The `cropFace` parameter helps improve accuracy by focusing on document content.
