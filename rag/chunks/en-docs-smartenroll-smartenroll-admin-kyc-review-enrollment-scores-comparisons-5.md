---
id: "en-docs-smartenroll-smartenroll-admin-kyc-review-enrollment-scores-comparisons-5"
title: "SmartEnroll Admin - KYC Review & Management — Enrollment Scores & Comparisons"
sourcePath: "docs/smartenroll/smartenroll-admin-kyc-review.md"
locale: "en"
category: "smartenroll"
tags:
  - "smartenroll"
sourceAnchor: "Enrollment Scores & Comparisons"
---

# SmartEnroll Admin - KYC Review & Management

The **SmartEnroll Admin KYC Review** interface provides administrators with comprehensive tools to review, manage, and make decisions on user KYC verifications. This powerful dashboard allows you to monitor the entire enrollment process, review verification results, and take appropriate actions based on compliance requirements.

## Enrollment Scores & Comparisons

This section provides comprehensive scoring and comparison results from the biometric verification process.

### Biometric Scores

- **Liveness Score**: 
  - Indicates how confident the system is that the user is a live person
  - Typically displayed as a percentage (e.g., 85%)
  - Higher scores indicate stronger liveness detection

- **Face Comparison Score**:
  - Similarity score between the selfie and the document photo
  - Typically displayed as a percentage (e.g., 92%)
  - Indicates how well the faces match
  - Thresholds are configurable per project

### Score Breakdown

The interface may show:

- **Overall Score**: Combined or weighted score from all verification steps
- **Step-by-Step Scores**: Individual scores for each verification component
- **Threshold Comparison**: Whether scores meet configured thresholds
- **Risk Level**: Overall risk assessment based on scores

### Comparison Results

- **Name Matching**: 
  - Comparison between registration name and document name
  - Highlights exact matches and variations
  - May account for common name variations

- **Face Matching**:
  - Visual comparison indicators
  - Side-by-side view of document photo and selfie
  - Matching confidence percentage

- **Data Consistency**:
  - Cross-field validation results
  - Consistency checks across all provided information

### Score Interpretation

- **High Scores (85%+)**: Strong match against the hosted default threshold (`0.85`), typically auto-approved
- **Medium Scores (70-84%)**: May require manual review; common for printed-document faces vs live selfies even when the person is the same
- **Near API minimum (~67%)**: Allowed on direct face-recognition APIs (`0.67`–`0.95`); only appropriate if the project threshold was lowered after testing false-accept risk
- **Low Scores (well below your project threshold)**: Likely rejection or requires investigation

:::warning Review Guidelines
Scores below the configured threshold should be carefully reviewed. Consider the context, document quality, and other factors before making a final decision. FaceVerification history is available via app-registration populate (`compareFaceVerification`), not a public GET-by-verification-id; records expire after about 90 days in production. For the full integrator recipe, see the [SmartEnroll API Companion](/smartenroll/api-companion).
:::

---
