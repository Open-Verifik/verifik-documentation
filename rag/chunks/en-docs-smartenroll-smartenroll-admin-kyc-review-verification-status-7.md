---
id: "en-docs-smartenroll-smartenroll-admin-kyc-review-verification-status-7"
title: "SmartEnroll Admin - KYC Review & Management — Verification Status"
sourcePath: "docs/smartenroll/smartenroll-admin-kyc-review.md"
locale: "en"
category: "smartenroll"
tags:
  - "smartenroll"
sourceAnchor: "Verification Status"
---

# SmartEnroll Admin - KYC Review & Management

The **SmartEnroll Admin KYC Review** interface provides administrators with comprehensive tools to review, manage, and make decisions on user KYC verifications. This powerful dashboard allows you to monitor the entire enrollment process, review verification results, and take appropriate actions based on compliance requirements.

## Verification Status

The system displays the current verification status:

- **✓ Approved**: User has passed all verification requirements
- **✗ Rejected**: User has been rejected based on verification results
- **⏳ Pending**: Verification is still in progress
- **⚠️ Under Review**: Manual review is required

### Automated Decision

If automated decision-making is enabled:

- **Auto-Approved**: System automatically approved based on scores and checks
- **Auto-Rejected**: System automatically rejected based on failed criteria
- **Flagged for Review**: System flagged for manual review due to borderline scores or issues

### Manual Override

Administrators can manually change the verification result:

#### Approve User

- **When to Use**: 
  - Scores are borderline but acceptable
  - Document quality issues that don't affect validity
  - False positives in background checks
  - Other extenuating circumstances

- **Process**:
  1. Review all verification data
  2. Click "Approve" or "Override to Approve"
  3. Add optional notes explaining the decision
  4. Confirm the action

#### Reject User

- **When to Use**:
  - Failed verification requirements
  - Document authenticity concerns
  - Background check issues
  - Policy violations

- **Process**:
  1. Review all verification data
  2. Click "Reject" or "Override to Reject"
  3. Select rejection reason from predefined list
  4. Add detailed notes explaining the rejection
  5. Confirm the action

#### Request Additional Information

- **When to Use**:
  - Missing or unclear information
  - Need for additional documentation
  - Clarification required

- **Process**:
  1. Click "Request Information"
  2. Specify what information is needed
  3. Send notification to user
  4. User can provide additional information and resubmit
