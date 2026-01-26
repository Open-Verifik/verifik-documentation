# Compliance Response: Access Management Policy

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

### Infrastructure & Cloud Security

- **Google Cloud Platform**: All infrastructure is hosted on Google Cloud Platform (GCP)
- **Cloud Provider Security**: Physical access to data centers is managed by Google Cloud, which maintains SOC 2, ISO 27001, and other industry certifications
- **Identity & Access Management**: GCP IAM is used to manage cloud resource access with role-based permissions
- **Encrypted Storage**: All data at rest is encrypted using Google Cloud's encryption services
- **Network Security**: VPCs, firewalls, and network policies restrict access to cloud resources

### Access Management Process

1. **Request & Approval**: Access requests require manager approval
2. **Role-Based Provisioning**: Access granted based on job function and assigned role
3. **Documentation**: All access grants are documented and tracked
4. **Immediate Revocation**: Access revoked within 24 hours of termination or role change
5. **Annual Reviews**: Access permissions reviewed and recertified annually

### Compliance & Monitoring

- **Comprehensive Logging**: All access attempts (successful and failed) are logged
- **Audit Trails**: Complete audit trails maintained for regulatory compliance
- **Regular Audits**: Access controls audited annually; user access reviewed quarterly
- **Standards Compliance**: Aligned with SOC 2, GDPR, CCPA/CPRA, and OWASP best practices

### Attached Policy Document

We have attached our **Access Management Policy** (Version 1.0, January 2025) which provides comprehensive details on our access management framework, procedures, and controls.

**Contact:** security@verifik.co | privacy@verifik.co
---

*Verifik LLC - 30 N Gould St, Ste 30338, Sheridan, WY 82801*

