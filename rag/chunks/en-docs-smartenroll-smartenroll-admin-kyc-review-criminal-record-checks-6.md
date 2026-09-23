---
id: "en-docs-smartenroll-smartenroll-admin-kyc-review-criminal-record-checks-6"
title: "SmartEnroll Admin - KYC Review & Management — Criminal Record Checks"
sourcePath: "docs/smartenroll/smartenroll-admin-kyc-review.md"
locale: "en"
category: "smartenroll"
tags:
  - "smartenroll"
sourceAnchor: "Criminal Record Checks"
---

# SmartEnroll Admin - KYC Review & Management

The **SmartEnroll Admin KYC Review** interface provides administrators with comprehensive tools to review, manage, and make decisions on user KYC verifications. This powerful dashboard allows you to monitor the entire enrollment process, review verification results, and take appropriate actions based on compliance requirements.

## Criminal Record Checks

If your SmartEnroll project is configured with database screening, this section displays the results of criminal record and background checks.

### Background Check Results

- **Criminal Record Status**:
  - Clean record indicator
  - Record found indicator
  - Check status (pending, completed, failed)

- **Database Screening Results**:
  - Government database checks
  - Blacklist verification
  - Watchlist screening
  - Sanctions list checks

### Check Details

For each background check performed:

- **Check Type**: Type of background check (criminal records, sanctions, etc.)
- **Database Source**: Which database was queried
- **Result**: Pass, Fail, or No Match Found
- **Date Performed**: When the check was executed
- **Details**: Additional information if records were found

### Risk Indicators

- **✓ Clean**: No records found in any checked database
- **⚠️ Warning**: Minor issues or records found that may require review
- **✗ Alert**: Significant records found that may require rejection

### Compliance Information

- **Regulatory Compliance**: Whether checks meet regulatory requirements
- **Check Coverage**: Which databases were included in the screening
- **Update Frequency**: How current the database information is

:::important Compliance Note
Criminal record checks and background checks must comply with local regulations. Ensure your project configuration meets all applicable legal requirements for your jurisdiction.
:::

---

## Result Verdict & Actions

The final section allows administrators to review the overall verification result and take appropriate actions.
