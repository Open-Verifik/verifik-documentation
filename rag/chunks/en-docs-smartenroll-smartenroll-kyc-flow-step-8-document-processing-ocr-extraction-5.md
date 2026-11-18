---
id: "en-docs-smartenroll-smartenroll-kyc-flow-step-8-document-processing-ocr-extraction-5"
title: "SmartEnroll KYC Flow - End User Guide — Step 8: Document Processing - OCR Extraction"
sourcePath: "docs/smartenroll/smartenroll-kyc-flow.md"
locale: "en"
category: "smartenroll"
tags:
  - "smartenroll"
sourceAnchor: "Step 8: Document Processing - OCR Extraction"
---

# SmartEnroll KYC Flow - End User Guide

The **SmartEnroll KYC Flow** is a comprehensive identity verification process that guides end-users through a secure onboarding experience. This flow combines multiple verification methods including email validation, phone verification, document scanning, and biometric authentication to ensure the highest level of security and compliance.

## Step 8: Document Processing - OCR Extraction

Once both sides of the document are uploaded, the system automatically processes the images using Optical Character Recognition (OCR) technology.

#### OCR Processing

The system extracts key information from the document:

- **Personal Information**:
  - Full name
  - Date of birth
  - Document number
  - Nationality
- **Document Details**:
  - Document type
  - Issue date
  - Expiration date
  - Issuing authority
- **Security Features**:
  - Verification of security elements
  - Tampering detection
  - Authenticity checks

#### Processing Indicators

During processing, users typically see:

- **Loading Indicator**: Progress animation showing the system is working
- **Status Messages**: Updates on what the system is checking
- **Estimated Time**: How long processing might take

:::tip User Tip
Processing usually takes 10-30 seconds. Please be patient and don't close the browser or app during this time.
:::

After OCR extraction, the system validates the extracted data.

---

### Step 9: Document Validation

The system performs comprehensive validation checks on the document and extracted data.

#### Validation Checks

The system verifies:

1. **Document Authenticity**:
   - Security features verification
   - Tampering detection
   - Format validation
   - Expiration status

2. **Data Consistency**:
   - Comparison with registration information (name matching)
   - Cross-field validation
   - Format validation (dates, numbers, etc.)

3. **Database Screening** (if enabled):
   - Government database verification
   - Blacklist checks
   - Criminal record checks (if configured)

4. **Quality Checks**:
   - Image clarity
   - Readability of extracted text
   - Completeness of information

#### Validation Results

- **Success**: If all validations pass, users proceed to biometric verification
- **Issues Found**: If problems are detected, users may see:
  - Specific error messages
  - Guidance on how to fix issues
  - Option to retry document capture

:::warning Important
If validation fails, carefully review the error message. Common issues include:
- Document expired or not yet valid
- Name mismatch with registration information
- Poor image quality
- Document not fully visible in the photo
:::

After successful document validation, users proceed to biometric verification.

---
