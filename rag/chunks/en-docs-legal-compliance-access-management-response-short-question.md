---
id: "en-docs-legal-compliance-access-management-response-short-question"
title: "Compliance Response: Access Management Policy — Question"
sourcePath: "docs/legal/compliance-access-management-response-short.md"
locale: "en"
category: "legal"
tags:
  - "legal"
sourceAnchor: "Question"
---

# Compliance Response: Access Management Policy

## Question

## Question
Describe your policy on granting logical and physical access to systems. Do you follow the principle of least privilege and separation of duties? Please attach your most recent Access Management policy if available.

## Response

**Yes, Verifik strictly adheres to the Principle of Least Privilege and implements Separation of Duties across all systems.**

### Principle of Least Privilege

We implement least privilege through:

- **Role-Based Access Control (RBAC)**: Users receive only the minimum permissions necessary for their job function
- **Granular Permissions**: Access is controlled at the resource and action level (create, read, update, delete)
- **Default Deny**: All access is denied by default unless explicitly granted
- **Resource Isolation**: Users can only access resources (clients, projects, subscriptions) explicitly assigned to them
- **Regular Reviews**: Access permissions are reviewed annually and upon role changes

### Separation of Duties

We enforce separation of duties through distinct role structures:

- **Super Admin Roles**: Admin, Developer, Accounting, and Sales roles with segregated responsibilities
- **Client Roles**: Client Owner, Staff Members, and Project Members with limited, scoped access
- **Approval Workflows**: Sensitive operations require approval from different authority levels
- **Audit Trails**: Complete logging enables independent review of all access and actions

### Logical Access Controls

- **Multi-Factor Authentication**: OTP-based MFA via email/phone for all system access
- **JWT Token Authentication**: Cryptographically signed tokens with expiration and revocation
- **API Route Validation**: Every request is validated for user permissions and resource access
- **Real-Time Monitoring**: Access is monitored continuously with anomaly detection
