# Compliance Response: Service Account Management

## Question
How are service accounts managed?

## Response

**Verifik manages service accounts through Google Cloud Platform (GCP) IAM and maintains strict controls over service account credentials and API keys used for system integrations.**

### Google Cloud Platform Service Accounts

**GCP IAM Management:**
- **Service Account Creation**: Service accounts are created through GCP IAM with specific roles and permissions
- **Least Privilege**: Each service account is granted only the minimum permissions necessary for its function (e.g., Document AI access, cloud storage)
- **Credential Storage**: Service account credentials (JSON keys) are stored securely in encrypted configuration files, never in code repositories
- **JWT-Based Authentication**: Service accounts use JWT tokens for OAuth2 authentication with Google services
- **Token Expiration**: Access tokens expire after 1 hour and are automatically regenerated as needed

**Service Account Usage:**
- **Google Document AI**: Service accounts authenticate with Google Cloud services for document processing
- **Cloud Storage**: Service accounts access GCP storage buckets with restricted permissions
- **API Integrations**: Service accounts are used for secure API-to-API communication with third-party services

### API Key Management

**Client API Keys:**
- **Unique Per Client**: Each client receives a unique API key for authentication
- **Secure Storage**: API keys are stored encrypted in our database
- **JWT Token Generation**: API keys are used to generate time-limited JWT tokens (not for direct API access)
- **Revocation Capability**: API keys can be immediately revoked and regenerated
- **Access Logging**: All API key usage is logged with client identification and request details

**Third-Party API Keys:**
- **Environment Variables**: Third-party service API keys (Stripe, Azure, etc.) are stored in secure environment variables
- **No Code Storage**: API keys are never stored in source code or version control
- **Rotation Policy**: API keys are rotated regularly and upon security incidents
- **Access Restriction**: API keys are scoped to specific services and functions

### Authentication & Authorization

**Service Account Authentication:**
- **JWT Token Generation**: Service accounts use JWT tokens signed with private keys for authentication
- **OAuth2 Flow**: Tokens are exchanged for OAuth2 access tokens with Google services
- **Scope Limitation**: Tokens are scoped to specific services (e.g., `cloud-platform` scope for Document AI)
- **Automatic Renewal**: Expired tokens are automatically regenerated

**Authorization:**
- **Role-Based Permissions**: Service accounts are assigned specific IAM roles in GCP
- **Resource-Level Access**: Access is restricted to specific resources (projects, buckets, processors)
- **No Human Access**: Service accounts are not used for human user access

### Auditing & Monitoring

**Access Logging:**
- **GCP Audit Logs**: All service account activity is logged in GCP Cloud Audit Logs
- **API Key Usage**: Client API key usage is logged with timestamps, endpoints, and request details
- **Token Generation**: JWT token generation and usage is logged for audit purposes

**Monitoring:**
- **Anomaly Detection**: Unusual service account activity triggers alerts
- **Regular Reviews**: Service account permissions are reviewed quarterly
- **Access Reports**: Service account access reports are generated and reviewed annually
- **Revocation Tracking**: All service account and API key revocations are logged

### Management Process

**Service Account Lifecycle:**
1. **Creation**: Service accounts created through GCP IAM with minimal required permissions
2. **Credential Management**: Credentials stored securely, never in code repositories
3. **Regular Review**: Permissions reviewed quarterly; unnecessary accounts deactivated
4. **Rotation**: Credentials rotated annually or upon security incidents
5. **Deactivation**: Service accounts deactivated immediately when no longer needed

**API Key Lifecycle:**
1. **Provisioning**: API keys generated and assigned to clients through secure process
2. **Storage**: Keys stored encrypted in database with client association
3. **Usage Monitoring**: All API key usage monitored and logged
4. **Revocation**: Keys can be immediately revoked; clients can regenerate keys
5. **Expiration**: JWT tokens generated from API keys have expiration timestamps

### Security Controls

- **Encryption**: Service account credentials and API keys are encrypted at rest
- **Access Control**: Only authorized personnel can create or modify service accounts
- **Separation of Duties**: Service account management is separated from application development
- **Compliance**: Service account management aligns with SOC 2, GDPR, and industry best practices

**Contact:** security@verifik.co | privacy@verifik.co

---

*Verifik LLC - 30 N Gould St, Ste 30338, Sheridan, WY 82801*

