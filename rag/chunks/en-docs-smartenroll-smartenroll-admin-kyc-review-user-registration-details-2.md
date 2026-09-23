---
id: "en-docs-smartenroll-smartenroll-admin-kyc-review-user-registration-details-2"
title: "SmartEnroll Admin - KYC Review & Management — User Registration Details"
sourcePath: "docs/smartenroll/smartenroll-admin-kyc-review.md"
locale: "en"
category: "smartenroll"
tags:
  - "smartenroll"
sourceAnchor: "User Registration Details"
---

# SmartEnroll Admin - KYC Review & Management

The **SmartEnroll Admin KYC Review** interface provides administrators with comprehensive tools to review, manage, and make decisions on user KYC verifications. This powerful dashboard allows you to monitor the entire enrollment process, review verification results, and take appropriate actions based on compliance requirements.

## User Registration Details

### Sign-Up Form Information

When viewing a user's profile, you can see all the information they provided during the initial registration process.

#### Registration Data Available

- **Personal Information**:
  - First name and last name
  - Full name as entered
  - Date of birth (if collected)

- **Contact Information**:
  - Email address
  - Phone number with country code
  - Verification status for email and phone

- **Additional Information** (if configured):
  - Company name
  - Role or position
  - Any custom fields configured for your project

- **Registration Metadata**:
  - Registration timestamp
  - IP address (if logged)
  - Device information
  - Referral source (if applicable)

#### Verification Status Indicators

Each piece of information shows its verification status:

- ✓ **Verified**: Successfully verified (email OTP, phone OTP, etc.)
- ⏳ **Pending**: Verification in progress or not yet completed
- ✗ **Failed**: Verification failed or expired
- ⚠️ **Warning**: Verification completed but with issues

:::important Important
All registration information is displayed exactly as the user entered it. Compare this with the document information to identify any discrepancies that may require attention.
:::

---

## Resend Enrollment Link

Administrators can resend enrollment links to users who may not have completed the process or need to restart their verification.

### When to Resend Enrollment Links

Common scenarios for resending enrollment links:

- **Incomplete Enrollment**: User started but didn't finish the process
- **Expired Link**: The original enrollment link has expired
- **User Request**: User contacted support requesting a new link
- **Technical Issues**: User experienced technical problems during enrollment
- **Re-enrollment**: User needs to complete the process again after rejection
