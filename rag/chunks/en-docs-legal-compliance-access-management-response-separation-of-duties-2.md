---
id: "en-docs-legal-compliance-access-management-response-separation-of-duties-2"
title: "Compliance Response: Access Management Policy — Separation of Duties"
sourcePath: "docs/legal/compliance-access-management-response.md"
locale: "en"
category: "legal"
tags:
  - "legal"
sourceAnchor: "Separation of Duties"
---

# Compliance Response: Access Management Policy

## Separation of Duties

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
