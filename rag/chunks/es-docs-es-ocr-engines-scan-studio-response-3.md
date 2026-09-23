---
id: "es-docs-es-ocr-engines-scan-studio-response-3"
title: "Escaneo Estudio — Response"
sourcePath: "docs-es/ocr-engines/scan-studio.mdx"
locale: "es"
category: "ocr-engines"
tags:
  - "ocr"
  - "ocr-engines"
endpoints:
  - "/v2/ocr/scan-studio"
  - "/v3/ocr/scan-studio"
sourceAnchor: "Response"
slug: "/ocr-engines/escaneo-estudio"
url: "https://docs.verifik.co/verifik-es/ocr-engines/escaneo-estudio"
---

# Escaneo Estudio
**API path(s):** /v2/ocr/scan-studio, /v3/ocr/scan-studio

## Response

```json
{
  "data": {
    "age": "39",
    "client": "68f18d25aafc7dbd2a0bd416",
    "country": "Venezuela",
    "documentCategory": "ID",
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
        "fields": [
          {
            "textAnchor": {
              "textSegments": [
                {
                  "startIndex": "167",
                  "endIndex": "174"
                }
              ]
            },
            "type": "civilStatus",
            "mentionText": "SOLTERO",
            "confidence": 0.999997,
            "pageAnchor": {
              "pageRefs": [
                {
                  "boundingPoly": {
                    "normalizedVertices": [
                      {
                        "x": 0.45555556,
                        "y": 0.57798165
                      },
                      {
                        "x": 0.54444444,
                        "y": 0.57798165
                      },
                      {
                        "x": 0.54444444,
                        "y": 0.603211
                      },
                      {
                        "x": 0.45555556,
                        "y": 0.603211
                      }
                    ]
                  }
                }
              ]
            },
            "id": "0"
          },
          {
            "textAnchor": {
              "textSegments": [
                {
                  "startIndex": "156",
                  "endIndex": "166"
                }
              ]
            },
            "type": "dateOfBirth",
            "mentionText": "15/02/1986",
            "confidence": 0.9999982,
            "pageAnchor": {
              "pageRefs": [
                {
                  "boundingPoly": {
                    "normalizedVertices": [
                      {
                        "x": 0.34305555,
                        "y": 0.57798165
                      },
                      {
                        "x": 0.44027779,
                        "y": 0.57798165
                      },
                      {
                        "x": 0.44027779,
                        "y": 0.6055046
                      },
                      {
                        "x": 0.34305555,
                        "y": 0.6055046
                      }
                    ]
                  }
                }
              ]
            },
            "id": "1",
            "normalizedValue": {
              "text": "1986-02-15",
              "dateValue": {
                "year": 1986,
                "month": 2,
                "day": 15
              }
            }
          },
          {
            "textAnchor": {
              "textSegments": [
                {
                  "startIndex": "80",
                  "endIndex": "90"
                }
              ]
            },
            "type": "documentNumber",
            "mentionText": "18.016.774",
            "confidence": 0.99998796,
            "pageAnchor": {
              "pageRefs": [
                {
                  "boundingPoly": {
                    "normalizedVertices": [
                      {
                        "x": 0.43611112,
                        "y": 0.30963302
                      },
                      {
                        "x": 0.55138886,
                        "y": 0.30963302
                      },
                      {
                        "x": 0.55138886,
                        "y": 0.3325688
                      },
                      {
                        "x": 0.43611112,
                        "y": 0.3325688
                      }
                    ]
                  }
                }
              ]
            },
            "id": "2"
          },
          {
            "textAnchor": {
              "textSegments": [
                {
                  "startIndex": "129",
                  "endIndex": "144"
                }
              ]
            },
            "type": "firstName",
            "mentionText": "JOSE DEL CARMEN",
            "confidence": 0.999974,
            "pageAnchor": {
              "pageRefs": [
                {
                  "boundingPoly": {
                    "normalizedVertices": [
                      {
                        "x": 0.24583334,
                        "y": 0.40366971
                      },
                      {
                        "x": 0.45555556,
                        "y": 0.40366971
                      },
                      {
                        "x": 0.45555556,
                        "y": 0.43348625
                      },
                      {
                        "x": 0.24583334,
                        "y": 0.43348625
                      }
                    ]
                  }
                }
              ]
            },
            "id": "5"
          },
          {
            "textAnchor": {
              "textSegments": [
                {
                  "startIndex": "65",
                  "endIndex": "77"
                }
              ]
            },
            "type": "lastName",
            "mentionText": "TOVAR RATTIA",
            "confidence": 0.99997365,
            "pageAnchor": {
              "pageRefs": [
                {
                  "boundingPoly": {
                    "normalizedVertices": [
                      {
                        "x": 0.24444444,
                        "y": 0.35321102
                      },
                      {
                        "x": 0.4125,
                        "y": 0.35321102
                      },
                      {
                        "x": 0.4125,
                        "y": 0.38302752
                      },
                      {
                        "x": 0.24444444,
                        "y": 0.38302752
                      }
                    ]
                  }
                }
              ]
            },
            "id": "8"
          },
          {
            "textAnchor": {
              "textSegments": [
                {
                  "startIndex": "245",
                  "endIndex": "255"
                }
              ]
            },
            "type": "nationality",
            "mentionText": "VENEZOLANO",
            "confidence": 0.9999981,
            "pageAnchor": {
              "pageRefs": [
                {
                  "boundingPoly": {
                    "normalizedVertices": [
                      {
                        "x": 0.34305555,
                        "y": 0.82568806
                      },
                      {
                        "x": 0.5763889,
                        "y": 0.82568806
                      },
                      {
                        "x": 0.5763889,
                        "y": 0.86926603
                      },
                      {
                        "x": 0.34305555,
                        "y": 0.86926603
                      }
                    ]
                  }
                }
              ]
            },
            "id": "9"
          }
        ]
      },
      "documentType": "CCVE",
      "civilStatus": "SOLTERO",
      "gender": "Male",
      "dateOfBirth": "15/02/1986",
      "age": 39,
      "documentNumber": "18.016.774",
      "expeditionDate": "22/02/2023",
      "expireDate": "02/2033",
      "firstName": "JOSE DEL CARMEN",
      "fullName": "JOSE DEL CARMEN TOVAR RATTIA",
      "issuingOffice": "117",
      "lastName": "TOVAR RATTIA",
      "nationality": "VENEZOLANO",
      "country": "Venezuela",
      "category": "ID"
    },
    "requiresBackSide": false,
    "scoreValidated": false,
    "status": "ACTIVE_BUT_UNVERIFIED",
    "type": "ocr",
    "url": "https://cdn.verifik.co/ocr/68f18d25aafc7dbd2a0bd416/1761260917592-png",
    "validationMethod": "SCAN_STUDIO",
    "_id": "68fab57f46bb6a2e90510c8b",
    "updatedAt": "2025-10-23T23:08:47.863Z",
    "createdAt": "2025-10-23T23:08:47.863Z",
    "__v": 0
  },
  "signature": {
    "dateTime": "October 23, 2025 11:08 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "GR48F"
}
```
