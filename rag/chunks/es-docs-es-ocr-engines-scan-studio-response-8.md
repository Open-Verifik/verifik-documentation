---
id: "es-docs-es-ocr-engines-scan-studio-response-8"
title: "Escaneo Estudio — Response"
sourcePath: "docs-es/ocr-engines/scan-studio.mdx"
locale: "es"
category: "ocr-engines"
tags:
  - "ocr"
  - "ocr-engines"
endpoint: "/v2/ocr/scan-studio"
sourceAnchor: "Response"
slug: "/ocr-engines/escaneo-estudio"
url: "https://docs.verifik.co/verifik-es/ocr-engines/escaneo-estudio"
---

# Escaneo Estudio
**API path(s):** /v2/ocr/scan-studio

## Response

```json
{
  "data": {
    "age": "39",
    "client": "68f18d25aafc7dbd2a0bd416",
    "documentCategory": "Unknown",
    "documentNumber": "18.016.774",
    "documentType": "CCVE",
    "firstNameMatchPercentage": 0,
    "fullNameMatchPercentage": 0,
    "gender": "Male",
    "imageValidated": false,
    "infoValidationSupported": true,
    "inputMethod": "NOT_SET",
    "lastNameMatchPercentage": 0,
    "namesMatch": false,
    "nationality": "VENEZOLANO",
    "OCRExtraction": {
      "details": {
        "docType": "VE",
        "boundingRegions": [
          {
            "pageNumber": 1,
            "polygon": [
              {
                "x": 0,
                "y": 0
              },
              {
                "x": 720,
                "y": 0
              },
              {
                "x": 720,
                "y": 436
              },
              {
                "x": 0,
                "y": 436
              }
            ]
          }
        ],
        "spans": [
          {
            "offset": 0,
            "length": 256
          }
        ],
        "fields": {
          "documentNumber": {
            "kind": "string",
            "value": "18.016.774",
            "boundingRegions": [
              {
                "pageNumber": 1,
                "polygon": [
                  {
                    "x": 318,
                    "y": 132
                  },
                  {
                    "x": 395,
                    "y": 133
                  },
                  {
                    "x": 395,
                    "y": 148
                  },
                  {
                    "x": 318,
                    "y": 147
                  }
                ]
              }
            ],
            "content": "18.016.774",
            "spans": [
              {
                "offset": 57,
                "length": 10
              }
            ],
            "confidence": 0.941
          },
          "lastName": {
            "kind": "string",
            "value": "TOVAR RATTIA",
            "boundingRegions": [
              {
                "pageNumber": 1,
                "polygon": [
                  {
                    "x": 179,
                    "y": 150
                  },
                  {
                    "x": 293,
                    "y": 151
                  },
                  {
                    "x": 293,
                    "y": 168
                  },
                  {
                    "x": 179,
                    "y": 167
                  }
                ]
              }
            ],
            "content": "TOVAR RATTIA",
            "spans": [
              {
                "offset": 78,
                "length": 12
              }
            ],
            "confidence": 0.92
          },
          "firstName": {
            "kind": "string",
            "value": "JOSE DEL CARMEN",
            "boundingRegions": [
              {
                "pageNumber": 1,
                "polygon": [
                  {
                    "x": 178,
                    "y": 174
                  },
                  {
                    "x": 326,
                    "y": 174
                  },
                  {
                    "x": 326,
                    "y": 192
                  },
                  {
                    "x": 178,
                    "y": 192
                  }
                ]
              }
            ],
            "content": "JOSE DEL CARMEN",
            "spans": [
              {
                "offset": 129,
                "length": 15
              }
            ],
            "confidence": 0.915
          }
        },
        "confidence": 0.987
      },
      "documentNumber": "18.016.774",
      "lastName": "TOVAR RATTIA",
      "firstName": "JOSE DEL CARMEN",
      "fullName": "JOSE DEL CARMEN TOVAR RATTIA"
    },
    "requiresBackSide": false,
    "scoreValidated": false,
    "status": "ACTIVE_BUT_UNVERIFIED",
    "type": "ocr",
    "url": "https://cdn.verifik.co/ocr/68f18d25aafc7dbd2a0bd416/1761259822044-png",
    "validationMethod": "SCAN_STUDIO",
    "_id": "68fab14516e502ba73138dd9",
    "updatedAt": "2025-10-23T22:50:45.467Z",
    "createdAt": "2025-10-23T22:50:45.467Z",
    "__v": 0
  },
  "signature": {
    "dateTime": "October 23, 2025 10:50 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "5G4EJ",
  "deprecation": {
    "message": "This endpoint is deprecated. Please use the new endpoint instead. This endpoint will be removed on November 25, 2025. Check the documentation for more information.",
    "code": "DEPRECATED",
    "deadline": "2025-11-25 11:59:59",
    "details": {
      "documentation": "https://docs.verifik.co/ocr-engines/scan-studio",
      "endpoint": "https://api.verifik.co/v2/ocr/scan-studio",
      "replacement": "https://api.verifik.co/v3/ocr/scan-studio"
    }
  }
}
```
