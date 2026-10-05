---
id: "en-docs-smart-scan-smart-scan-ocr-solutions-interface-3"
title: "Smart Scan — OCR Solutions Interface"
sourcePath: "docs/smart-scan/smart-scan.md"
locale: "en"
category: "smart-scan"
tags:
  - "smart-scan"
  - "scan"
endpoint: "/v2/scan"
sourceAnchor: "OCR Solutions Interface"
slug: "/smart-scan"
url: "https://docs.verifik.co/smart-scan"
---

# Smart Scan
**API path(s):** /v2/scan

**OCR** stands for **Optical Character Recognition**. It is a technology that converts different types of documents, such as scanned paper documents, PDF files, or images captured by a digital camera, into editable and searchable data. The primary purpose of OCR is to recognize and extract text from these non-editable formats so that it can be electronically stored, manipulated, and searched.

## OCR Solutions Interface

---

## Service Comparison

In the following table you will find some considerations of each service, this will help you to make a choice in which specific service it's right for you and your project:

Properties
SCANPROMPT
SCANSTUDIO

Accuracy
Medium
High

Number of Scan fields
Unlimited Fields
Unlimited Fields

Prompt compatible
✓
✗

Training required from Verifik Team
✗
✓

No-code Solution
✗
✗

Supported Documents
Global
Global (Need training)

### Choosing the Right Service

  
    
      
        🎯 Choose Scan Prompt When:
      
      
        
          You need flexibility in text extraction
          You want to use custom prompts
          You're working with diverse document types
          You need quick setup without training
          Medium accuracy is acceptable for your use case
        
      
    
  
  
    
      
        🎨 Choose Scan Studio When:
      
      
        
          You need high accuracy extraction
          You're working with specific document types
          You can invest time in model training
          You have consistent document formats
          Accuracy is critical for your application
        
      
    
  

---

## Getting Started

### Authentication

All API requests require a valid JWT token. Include the token in the Authorization header:

```bash
Authorization: Bearer 
```

### Base URL

```bash
https://api.verifik.co/v2/scan
```

---

## API Endpoints

### Scan Prompt

#### Extract Text with Prompt

```http
POST /prompt/extract
Content-Type: application/json
Authorization: Bearer 

{
  "document": "base64_encoded_image",
  "prompt": "Extract all text from this document",
  "fields": ["name", "date", "amount"]
}
```

**Use Cases:**
- Flexible text extraction with custom prompts
- Quick setup for diverse document types
- Dynamic field extraction based on prompts
