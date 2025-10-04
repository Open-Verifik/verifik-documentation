---
id: document-liveness
title: Document Liveness
description: Advanced fraud detection system that ensures the authenticity of identity documents
---

# Document Liveness

Document Liveness is Verifik's advanced fraud detection system that ensures the authenticity of identity documents by detecting various types of document manipulation and presentation attacks. It uses cutting-edge AI technology to identify fake, manipulated, or fraudulent documents in real-time, providing comprehensive protection against document fraud.

## How Document Liveness Works

Document Liveness analyzes uploaded document images through multiple specialized detection pipelines, each designed to identify specific types of fraud attempts. The system processes documents through AI-powered algorithms that examine various aspects of document authenticity, from screen replay attacks to sophisticated digital manipulations.

## What Document Liveness Detects

Document Liveness provides comprehensive fraud detection across four critical areas of document security:

### Screen Replay Detection:
* Identifies documents displayed on screens or monitors
* Detects attempts to present digital copies instead of physical documents
* Recognizes screen glare, pixelation, and digital display artifacts
* Prevents fraud from photos of documents on devices

### Printed Copy Detection:
* Identifies photocopied or printed versions of documents
* Detects paper texture differences and print quality issues
* Recognizes scanning artifacts and reproduction patterns
* Prevents fraud from high-quality document reproductions

### Portrait Substitution Detection:
* Identifies when photos on documents have been replaced
* Detects inconsistencies in photo placement and quality
* Recognizes tampering and manipulation attempts
* Prevents fraud from document photo replacement

### Digital Manipulation Detection:
* Identifies digitally altered or edited documents
* Detects inconsistencies in document structure and formatting
* Recognizes artificial elements and manipulation artifacts
* Prevents fraud from sophisticated digital document fraud

## API Endpoints

### Create a Document Liveness
```http
POST https://api.verifik.co/v2/document-liveness
```

### List All Document Liveness
```http
GET https://api.verifik.co/v2/document-liveness
```

### Retrieve a Document Liveness
```http
GET https://api.verifik.co/v2/document-liveness/{livenessId}
```

## Document Liveness Object Structure

```json
{
  "id": "liveness_123456789",
  "documentId": "doc_123456789",
  "status": "completed",
  "results": {
    "screenReplay": {
      "detected": false,
      "confidence": 0.95,
      "score": 0.05
    },
    "printedCopy": {
      "detected": false,
      "confidence": 0.98,
      "score": 0.02
    },
    "portraitSubstitution": {
      "detected": false,
      "confidence": 0.97,
      "score": 0.03
    },
    "digitalManipulation": {
      "detected": false,
      "confidence": 0.96,
      "score": 0.04
    }
  },
  "overallScore": 0.96,
  "riskLevel": "low",
  "createdAt": "2024-01-15T10:30:00Z",
  "completedAt": "2024-01-15T10:32:00Z"
}
```

## Use Cases

- **Fraud Prevention**: Detect and prevent document fraud attempts
- **Compliance**: Meet regulatory requirements for document verification
- **Risk Management**: Assess document authenticity risk levels
- **Security**: Enhance overall system security through advanced detection
