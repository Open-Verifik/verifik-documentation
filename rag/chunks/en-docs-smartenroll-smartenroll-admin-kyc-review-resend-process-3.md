---
id: "en-docs-smartenroll-smartenroll-admin-kyc-review-resend-process-3"
title: "SmartEnroll Admin - KYC Review & Management — Resend Process"
sourcePath: "docs/smartenroll/smartenroll-admin-kyc-review.md"
locale: "en"
category: "smartenroll"
tags:
  - "smartenroll"
sourceAnchor: "Resend Process"
---

# SmartEnroll Admin - KYC Review & Management

The **SmartEnroll Admin KYC Review** interface provides administrators with comprehensive tools to review, manage, and make decisions on user KYC verifications. This powerful dashboard allows you to monitor the entire enrollment process, review verification results, and take appropriate actions based on compliance requirements.

## Resend Process

1. **Select User**: Navigate to the user's profile from the user list
2. **Access Resend Option**: Click on "Resend Enrollment Link" or similar action button
3. **Confirm Action**: Confirm that you want to send a new enrollment link
4. **Link Sent**: The system sends a new enrollment link to the user's registered email address

### Link Configuration

- **Expiration**: New links typically have the same expiration settings as configured for your project
- **One-Time Use**: Links are typically single-use to maintain security
- **Notification**: Users receive an email notification with the new link

:::warning Security Note
Only resend enrollment links when necessary and verify the user's identity before sending. Unauthorized link resends could pose security risks.
:::

---

## Document Scanning Review

The document scanning section provides administrators with a detailed view of all documents uploaded by the user during the KYC process.

### Document Information Available

- **Document Type**: 
  - Government ID
  - Passport
  - Driving License
  - Other accepted document types

- **Document Images**:
  - Front side of the document (high-resolution view)
  - Back side of the document (if required)
  - Quality indicators and validation status

- **Upload Metadata**:
  - Upload timestamp
  - Capture method (camera or file upload)
  - Image quality score
  - File size and format

### Document Validation Status

Each document shows its validation status:

- **✓ Valid**: Document passed all validation checks
- **⚠️ Warning**: Document has minor issues but may still be acceptable
- **✗ Invalid**: Document failed validation (expired, tampered, etc.)
- **⏳ Processing**: Document is still being processed
