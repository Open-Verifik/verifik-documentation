---
id: "en-docs-legal-access-management-policy-3-2-separation-of-duties-2"
title: "Access Management Policy — 3.2 Separation of Duties"
sourcePath: "docs/legal/access-management-policy.md"
locale: "en"
category: "legal"
tags:
  - "legal"
sourceAnchor: "3.2 Separation of Duties"
---

# Access Management Policy

## 3.2 Separation of Duties

Verifik implements **Separation of Duties** to prevent conflicts of interest and reduce the risk of fraud or error:

- **Role Segregation**: Critical functions are separated across different roles to ensure no single individual has complete control over a process
- **Administrative Separation**: System administration, security administration, and business operations are handled by different roles
- **Approval Workflows**: Sensitive operations require approval from a different role or authority level
- **Audit Trail**: All access and actions are logged to enable independent review

#### Role Structure:

Our system implements separation of duties through distinct role types:

1. **Super Admin Roles**:
   - **Admin**: Full administrative access with oversight capabilities
   - **Developer**: Technical access for system development and maintenance
   - **Accounting**: Financial and billing access only
   - **Sales**: Customer-facing access with limited administrative capabilities

2. **Client Roles**:
   - **Client Owner**: Full access to their own client resources
   - **Staff Members**: Limited access based on assigned permissions within a client account
   - **Project Members**: Access limited to specific projects

3. **System Roles**:
   - **Guest Users**: Minimal read-only access for unauthenticated users
   - **Authenticated Users**: Access based on verified identity and assigned roles

## 4. Logical Access Management

### 4.1 Authentication

All logical access to Verifik systems requires strong authentication:

- **Multi-Factor Authentication (MFA)**: Access requires OTP (One-Time Password) verification via email or phone
- **JWT Token-Based Authentication**: All API access uses cryptographically signed JSON Web Tokens (JWT)
- **Token Expiration**: Tokens include expiration timestamps and are automatically invalidated
- **Token Revocation**: Tokens can be revoked and regenerated for security purposes
- **Password Security**: Passwords and OTPs are hashed using bcrypt before storage (never stored in plain text)
