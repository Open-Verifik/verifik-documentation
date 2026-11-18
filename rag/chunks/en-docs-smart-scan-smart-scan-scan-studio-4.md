---
id: "en-docs-smart-scan-smart-scan-scan-studio-4"
title: "Smart Scan — Scan Studio"
sourcePath: "docs/smart-scan/smart-scan.md"
locale: "en"
category: "smart-scan"
tags:
  - "smart-scan"
  - "scan"
endpoint: "/v2/scan"
sourceAnchor: "Scan Studio"
slug: "/smart-scan"
url: "https://docs.verifik.co/smart-scan"
---

# Smart Scan
**API path(s):** /v2/scan

**OCR** stands for **Optical Character Recognition**. It is a technology that converts different types of documents, such as scanned paper documents, PDF files, or images captured by a digital camera, into editable and searchable data. The primary purpose of OCR is to recognize and extract text from these non-editable formats so that it can be electronically stored, manipulated, and searched.

## Scan Studio

#### Extract Text with Trained Model

```http
POST /studio/extract
Content-Type: application/json
Authorization: Bearer 

{
  "document": "base64_encoded_image",
  "model_id": "your_trained_model_id",
  "confidence_threshold": 0.8
}
```

**Use Cases:**
- High-accuracy extraction for specific document types
- Consistent results for standardized documents
- Production-ready applications requiring reliability

---

## Response Format

All API responses follow a consistent format:

### Success Response

```json
{
  "success": true,
  "data": {
    "extractedText": "Complete extracted text content",
    "confidence": 0.95,
    "fields": {
      "name": "John Doe",
      "date": "2024-01-15",
      "amount": "$1,250.00"
    },
    "processing_time": "2.3s",
    "model_used": "scan-prompt-v1"
  },
  "message": "Text extraction completed successfully"
}
```

### Error Response

```json
{
  "success": false,
  "error": "Invalid document format",
  "code": "INVALID_DOCUMENT",
  "details": {
    "supported_formats": ["jpg", "png", "pdf"]
  }
}
```

---

## Best Practices

### Document Preparation

1. **Image Quality**: Ensure documents are clear, well-lit, and high resolution
2. **Format Support**: Use supported formats (JPG, PNG, PDF) for optimal results
3. **Document Orientation**: Ensure documents are properly oriented before processing
4. **File Size**: Keep file sizes reasonable (under 10MB) for faster processing

### API Usage

1. **Batch Processing**: Process multiple documents in batches for efficiency
2. **Error Handling**: Implement proper error handling for failed extractions
3. **Confidence Thresholds**: Set appropriate confidence thresholds based on your needs
4. **Rate Limiting**: Respect API rate limits to avoid service interruptions
