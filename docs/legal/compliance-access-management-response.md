# Compliance Response: Access Management Policy

## Question
Describe your policy on granting logical and physical access to systems. Do you follow the principle of least privilege and separation of duties? Please attach your most recent Access Management policy if available.

## Response

### Overview

Verifik LLC maintains a comprehensive Access Management Policy that governs both logical and physical access to our systems, applications, and facilities. We strictly adhere to the **Principle of Least Privilege** and implement **Separation of Duties** throughout our organization.

### Principle of Least Privilege

**Yes, we strictly follow the Principle of Least Privilege.**

Our implementation includes:

1. **Role-Based Access Control (RBAC)**: All access is granted based on predefined roles that align with job responsibilities. Users receive only the minimum permissions necessary to perform their duties.

2. **Granular Permission Controls**: Our access control system implements granular permissions at the resource and action level:
   - **Resource-Level**: Users can only access specific resources (clients, projects, subscriptions) assigned to them
   - **Action-Level**: Permissions are separated into distinct actions (create, read, update, delete)
   - **Own vs. Any Access**: The system distinguishes between accessing one's own resources vs. all resources, with stricter controls on broader access

3. **Default Deny**: Access is denied by default unless explicitly granted through our role-based system.

4. **API Route Validation**: Every API request is validated to ensure the user has permission to access the specific route and resource.

5. **Regular Access Reviews**: Access permissions are reviewed at least annually or when job functions change to ensure they remain appropriate.

### Separation of Duties

**Yes, we implement Separation of Duties.**

Our role structure ensures that critical functions are separated:

1. **Super Admin Roles**:
   - **Admin**: Full administrative oversight
   - **Developer**: Technical development and maintenance (separate from business operations)
   - **Accounting**: Financial and billing access only (separate from technical access)
   - **Sales**: Customer-facing access with limited administrative capabilities

2. **Client Roles**:
   - **Client Owner**: Full access to their own client resources
   - **Staff Members**: Limited access based on assigned permissions within a client account
   - **Project Members**: Access limited to specific projects

3. **System-Level Separation**:
   - System administration, security administration, and business operations are handled by different roles
   - Sensitive operations require approval from different authority levels
   - Complete audit trails enable independent review

### Logical Access Management

**Authentication:**
- Multi-Factor Authentication (MFA) via OTP (One-Time Password) through email or phone
- JWT token-based authentication with cryptographic signing
- Token expiration and revocation capabilities
- Passwords and OTPs are hashed using bcrypt (never stored in plain text)

**Authorization:**
- Role-Based Access Control (RBAC) with resource-level authorization
- Project-based scoping to limit visibility to authorized resources
- Client data isolation ensuring users can only access their assigned client(s)
- API route validation on every request

**Access Control:**
- All access attempts (successful and failed) are logged
- Real-time monitoring for unusual access patterns
- Immediate revocation upon termination, role change, or security incident
- Regular access reviews and recertification

### Physical Access Management

**Facility Access:**
- Badge-based access control system
- Visitor registration and escort requirements
- Access logging and monitoring
- Restricted areas with additional controls

**Data Center Access:**
- Cloud-based infrastructure (AWS, MongoDB Atlas) with physical security managed by certified providers
- All hosting providers maintain SOC 2, ISO 27001, or equivalent certifications
- 24/7 monitoring with video surveillance

**Equipment Security:**
- Encrypted company-issued laptops
- Mobile Device Management (MDM) for mobile devices
- VPN and MFA required for remote access

### Access Monitoring and Compliance

- **Comprehensive Logging**: All access attempts are logged with complete audit trails
- **Real-Time Monitoring**: System access is monitored in real-time with anomaly detection
- **Regular Audits**: Access controls are audited at least annually
- **Compliance**: Our policies comply with SOC 2, GDPR, CCPA/CPRA, and industry best practices (OWASP)

### Access Request and Approval Process

1. Access requests require manager approval
2. Access is granted based on job function and assigned role
3. All access grants are documented and tracked
4. Access is provisioned only after approval and verification
5. Access is immediately revoked upon termination or role change

### Policy Documentation

**Attached Policy Document:**

We have attached our most recent **Access Management Policy** document, which provides comprehensive details on:

- Complete policy statement and scope
- Detailed implementation of least privilege and separation of duties
- Logical and physical access management procedures
- Access request, approval, and revocation processes
- Monitoring, logging, and audit requirements
- Compliance and incident response procedures

**Policy Location:** `/docs/legal/access-management-policy.md`

**Policy Details:**
- **Last Updated**: January 2025
- **Version**: 1.0
- **Next Review Date**: January 2026
- **Policy Owner**: Verifik Security Team

### Contact Information

For questions about our access management practices or to request additional documentation, please contact:

- **Security Team**: security@verifik.co
- **Privacy Team**: privacy@verifik.co

---

**Verifik LLC**  
30 N Gould St, Ste 30338  
Sheridan, WY 82801

---

*This response is current as of January 2025 and reflects Verifik's current access management practices and policies.*

