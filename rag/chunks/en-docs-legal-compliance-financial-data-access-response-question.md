---
id: "en-docs-legal-compliance-financial-data-access-response-question"
title: "Compliance Response: Financial Institution Data Access — Question"
sourcePath: "docs/legal/compliance-financial-data-access-response.md"
locale: "en"
category: "legal"
tags:
  - "legal"
sourceAnchor: "Question"
---

# Compliance Response: Financial Institution Data Access

## Question

## Question
Please describe the access management process for anyone accessing our financial institution's data. How will that access be authenticated, authorized, and audited?

## Response

**Verifik does not access, store, or process financial institution data. All payment processing is handled by Stripe, a PCI-DSS Level 1 certified payment processor, and our platform operates on a credit-based system.**

### Payment Processing Architecture

**Stripe Integration:**
- **No Financial Data Access**: Verifik does not access, store, or process any financial institution data, bank account information, or payment card details
- **PCI-DSS Compliant Processor**: All payment transactions are processed exclusively through Stripe, a PCI-DSS Level 1 certified payment processor
- **Tokenization**: Stripe handles all payment card tokenization and secure storage
- **No Card Data Storage**: Payment card information never enters our systems or databases

**Credit-Based System:**
- **Internal Credits Only**: Our platform operates on an internal credit-based system for service consumption
- **No Financial Data**: Credits are non-financial units used solely for platform service allocation
- **Stripe Integration**: Credit purchases are processed through Stripe's secure payment APIs
- **Transaction Records**: We maintain records of credit transactions (purchases and consumption) but no financial institution or payment card data

### Access Management for Credit System

**Authentication:**
- **TOTP-Based Authentication**: All access to the credit system uses OTP-based authentication (email/SMS)
- **JWT Token Authorization**: Authenticated users receive cryptographically signed JWT tokens
- **Role-Based Access**: Access is controlled through role-based permissions (Admin, Accounting, Client Owner, etc.)

**Authorization:**
- **Least Privilege**: Users can only view and manage credits for their assigned clients/projects
- **Separation of Duties**: Credit management is separated by role (Accounting role for financial operations, Admin for oversight)
- **API Route Validation**: Every credit-related API request is validated for user permissions and resource access

**Auditing:**
- **Complete Audit Trail**: All credit transactions (purchases, consumption, adjustments) are logged with:
  - User identification
  - Timestamp
  - Transaction type and amount
  - Resource accessed
  - IP address and request details
- **Real-Time Monitoring**: Credit transactions are monitored in real-time for unusual patterns
- **Regular Reviews**: Credit transaction logs are reviewed quarterly as part of access reviews
- **Immutable Logs**: Audit logs are maintained in a tamper-evident format
