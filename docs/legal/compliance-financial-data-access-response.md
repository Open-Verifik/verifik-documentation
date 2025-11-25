# Compliance Response: Financial Institution Data Access

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

### Data Access Controls

**Credit Data Access:**
- **Client Isolation**: Clients can only access their own credit balance and transaction history
- **Staff Permissions**: Staff members have limited access based on their assigned role and client assignments
- **Admin Oversight**: Administrative access is restricted to authorized personnel with appropriate roles
- **Encrypted Storage**: Credit transaction data is encrypted at rest using Google Cloud Platform encryption

**Stripe Data:**
- **No Direct Access**: Verifik personnel do not have access to Stripe's payment processing systems or financial data
- **API Integration Only**: Integration with Stripe is limited to secure API calls for payment processing
- **Stripe Dashboard Access**: Only authorized accounting personnel have read-only access to Stripe dashboard for reconciliation purposes, with access logged and monitored

### Compliance & Security

- **PCI-DSS Compliance**: By using Stripe, we leverage their PCI-DSS Level 1 certification without handling card data ourselves
- **SOC 2 Alignment**: Access controls, authentication, and auditing align with SOC 2 requirements
- **GDPR/CCPA Compliance**: Credit transaction data is handled in accordance with data protection regulations
- **Regular Audits**: Access to credit systems is audited annually; transaction logs are reviewed quarterly

**Contact:** security@verifik.co | privacy@verifik.co

---

*Verifik LLC - 30 N Gould St, Ste 30338, Sheridan, WY 82801*

