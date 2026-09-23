---
id: "en-docs-smartenroll-smartenroll-admin-kyc-review-decision-history-8"
title: "SmartEnroll Admin - KYC Review & Management — Decision History"
sourcePath: "docs/smartenroll/smartenroll-admin-kyc-review.md"
locale: "en"
category: "smartenroll"
tags:
  - "smartenroll"
sourceAnchor: "Decision History"
---

# SmartEnroll Admin - KYC Review & Management

The **SmartEnroll Admin KYC Review** interface provides administrators with comprehensive tools to review, manage, and make decisions on user KYC verifications. This powerful dashboard allows you to monitor the entire enrollment process, review verification results, and take appropriate actions based on compliance requirements.

## Decision History

The interface maintains a complete audit trail:

- **All Status Changes**: History of all status changes
- **Decision Makers**: Who made each decision
- **Timestamps**: When each decision was made
- **Notes**: Comments and notes added with each decision
- **Reason Codes**: Categorized reasons for rejections or approvals

### Notification Settings

- **User Notifications**: Whether users are notified of status changes
- **Email Templates**: Customizable email templates for approvals/rejections
- **Webhook Integration**: Automatic notifications to your systems

:::warning Important
Manual overrides should be used judiciously and documented thoroughly. All decisions should be based on clear policies and compliance requirements.
:::

---

## Best Practices for Admin Review

### Review Workflow

1. **Start with Overview**: Review the user list and identify users requiring attention
2. **Check Registration Data**: Verify all information provided during sign-up
3. **Review Documents**: Examine document images for quality and authenticity
4. **Verify OCR Extraction**: Ensure extracted data is accurate and complete
5. **Analyze Scores**: Review biometric scores and comparison results
6. **Check Background**: Review any background check results
7. **Make Decision**: Based on all information, make an informed decision
8. **Document Actions**: Add notes explaining any manual decisions

### Red Flags to Watch For

- **Document Issues**:
  - Expired documents
  - Poor image quality
  - Signs of tampering
  - Mismatched information

- **Biometric Concerns**:
  - Low liveness scores
  - Poor face matching
  - Multiple failed attempts

- **Data Inconsistencies**:
  - Name mismatches
  - Date discrepancies
  - Address inconsistencies

- **Background Check Alerts**:
  - Criminal records
  - Sanctions list matches
  - Blacklist hits
