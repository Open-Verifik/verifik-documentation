---
id: "en-docs-smartenroll-smartenroll-admin-kyc-review-document-quality-indicators-4"
title: "SmartEnroll Admin - KYC Review & Management — Document Quality Indicators"
sourcePath: "docs/smartenroll/smartenroll-admin-kyc-review.md"
locale: "en"
category: "smartenroll"
tags:
  - "smartenroll"
sourceAnchor: "Document Quality Indicators"
---

# SmartEnroll Admin - KYC Review & Management

The **SmartEnroll Admin KYC Review** interface provides administrators with comprehensive tools to review, manage, and make decisions on user KYC verifications. This powerful dashboard allows you to monitor the entire enrollment process, review verification results, and take appropriate actions based on compliance requirements.

## Document Quality Indicators

- **Clarity Score**: How clear and readable the document is
- **Completeness**: Whether all required parts are visible
- **Authenticity**: Results of tampering detection
- **Expiration Status**: Whether the document is currently valid

:::tip Review Tip
Always review both front and back sides of documents when available. Some security features or important information may be on the back.
:::

---

## OCR Extraction Results

The OCR (Optical Character Recognition) extraction section displays all data automatically extracted from the user's identity document.

### Extracted Information

The system extracts and displays the following information from documents:

- **Personal Information**:
  - Full name (as it appears on the document)
  - Date of birth
  - Place of birth
  - Nationality
  - Gender

- **Document Details**:
  - Document number
  - Document type
  - Issue date
  - Expiration date
  - Issuing authority
  - Issuing location

- **Additional Information** (document-dependent):
  - Address
  - Blood type
  - Height
  - Other document-specific fields

### OCR Quality Indicators

- **Confidence Score**: How confident the system is in the extracted data (percentage)
- **Field-Level Confidence**: Individual confidence scores for each extracted field
- **Extraction Status**: Whether extraction was successful for all required fields

### Data Comparison

The interface highlights:

- **Matches**: Fields that match between registration data and document data
- **Mismatches**: Fields that don't match (may require attention)
- **Missing Data**: Required fields that couldn't be extracted

:::important Important
Review OCR extraction results carefully. While the system is highly accurate, manual verification may be needed for critical fields, especially when confidence scores are lower.
:::

---
