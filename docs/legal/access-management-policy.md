---
id: access-management-policy
title: Access Management Policy
description: Verifik's policy on granting logical and physical access to systems, including principles of least privilege and separation of duties
last_updated: January 2025
---

# Access Management Policy

## 1. Policy Statement

Verifik LLC ("Verifik", "we", "our", or "us") is committed to maintaining the security and integrity of our systems, data, and services. This Access Management Policy establishes the framework for granting, managing, monitoring, and revoking logical and physical access to Verifik's information systems, applications, and facilities.

## 2. Scope

This policy applies to:
- All employees, contractors, vendors, and third-party service providers with access to Verifik systems
- All logical access to information systems, applications, databases, and network resources
- All physical access to Verifik facilities, data centers, and equipment
- All user accounts, service accounts, and administrative accounts

## 3. Principles

### 3.1 Principle of Least Privilege

Verifik strictly adheres to the **Principle of Least Privilege**, which ensures that:

- **Minimal Access**: Users are granted only the minimum level of access necessary to perform their job functions
- **Role-Based Permissions**: Access is granted based on predefined roles that align with job responsibilities
- **Granular Controls**: Permissions are defined at a granular level (create, read, update, delete) for specific resources
- **Default Deny**: Access is denied by default unless explicitly granted
- **Regular Review**: Access permissions are reviewed regularly to ensure they remain appropriate

#### Implementation:

Our role-based access control (RBAC) system implements least privilege through:

- **Resource-Specific Permissions**: Users can only access resources (clients, subscriptions, transactions, etc.) that are explicitly assigned to them
- **Action-Based Controls**: Permissions are separated into distinct actions (create, read, update, delete) with different privilege levels
- **Own vs. Any Access**: The system distinguishes between "own" resources (user's own data) and "any" resources (all data), with stricter controls on "any" access
- **API Route Validation**: Each API request is validated to ensure the user has permission to access the specific route and resource

### 3.2 Separation of Duties

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

### 4.2 Authorization

Authorization is enforced through multiple layers:

- **Role-Based Access Control (RBAC)**: Access decisions are based on user roles and assigned permissions
- **Resource-Level Authorization**: Users can only access resources (clients, projects, subscriptions) that are explicitly assigned to them
- **API Route Validation**: Each API endpoint validates that the user has permission to access the specific route
- **Project-Based Scoping**: Access is scoped to specific projects, limiting visibility to authorized resources only
- **Client Isolation**: Client data is isolated, ensuring users can only access data for their assigned client(s)

### 4.3 Access Control Implementation

Our access control system implements the following controls:

```42:90:verifik-backend/Core/roleManager.js
const setRoleOwn = (role, model, crud = {}) => {
	const acRole = AC.grant(role);
	if (crud.all) {
		return acRole.createOwn(model).deleteOwn(model).updateOwn(model).readOwn(model);
	}

	if (crud.create || abilityDefaultMap.createOwn) {
		acRole.createOwn(model);
	}

	if (crud.read || abilityDefaultMap.readOwn) {
		acRole.readOwn(model);
	}

	if (crud.update || abilityDefaultMap.updateOwn) {
		acRole.updateOwn(model);
	}

	if (crud.delete || abilityDefaultMap.deleteOwn) {
		acRole.deleteOwn(model);
	}

	return;
};

const setRoleAny = (role, model, crud = {}) => {
	const acRole = AC.grant(role);
	if (crud.all) {
		return acRole.createAny(model).deleteAny(model).updateAny(model).readAny(model);
	}

	if (crud.create || abilityDefaultMap.createAny) {
		acRole.createAny(model);
	}

	if (crud.read || abilityDefaultMap.readAny) {
		acRole.readAny(model);
	}

	if (crud.update || abilityDefaultMap.updateAny) {
		acRole.updateAny(model);
	}

	if (crud.delete || abilityDefaultMap.deleteAny) {
		acRole.deleteAny(model);
	}

	return;
};
```

**Key Features:**
- **Own vs. Any Permissions**: Distinguishes between accessing one's own resources vs. all resources
- **CRUD Granularity**: Separate permissions for Create, Read, Update, and Delete operations
- **Model-Level Controls**: Permissions are defined per data model (client, subscription, transaction, etc.)
- **Default Restrictions**: Delete operations are restricted by default (deleteOwn: false, deleteAny: false)

### 4.4 Access Request and Approval Process

1. **Access Request**: Users must submit access requests through designated channels
2. **Manager Approval**: Access requests require approval from the user's manager or designated authority
3. **Role Assignment**: Access is granted based on job function and assigned role
4. **Documentation**: All access grants are documented and tracked
5. **Provisioning**: Access is provisioned only after approval and verification

### 4.5 Access Review and Recertification

- **Regular Reviews**: Access permissions are reviewed at least annually or when job functions change
- **Automated Monitoring**: System access is continuously monitored for unusual patterns
- **Access Logging**: All access attempts and actions are logged for audit purposes
- **Revocation**: Access is immediately revoked upon termination, role change, or security incident

### 4.6 Access Validation

Every API request undergoes validation:

```79:139:verifik-backend/Repositories/Base/middlewares/base.middleware.js
const validateClient = async (ctx, next) => {
	const user = ctx.state.user;

	if (!user) {
		ctx.status = 401;
		ctx.body = { message: "Authentication required", code: "UNAUTHORIZED" };
		return;
	}

	if (user.guestId) {
		ctx.status = 403;
		ctx.body = { message: "Registration is required to access this service", code: "FORBIDDEN" };
		return;
	}

	if (_isValidSuperAdmin(user)) return await next();

	if (!user.clientId) {
		ctx.status = 403;
		ctx.body = { message: "Access forbidden", code: "FORBIDDEN" };
		return;
	}

	try {
		const isTokenExpired = HelpersModule.checkIfTokenExpired(ctx.state.user);

		if (isTokenExpired) {
			ctx.status = 403;
			ctx.body = { message: "token_expired", code: "FORBIDDEN" };
			return;
		}

		const route = ctx.path.split("/:")[0];

		const clientDetails = await ClientModule.canUseAPI(route, user);

		await _validateCreditIntent(ctx);

		if (!clientDetails.canUseAPI) {
			ctx.status = 403;
			ctx.body = { message: clientDetails.errorMessage || "Cannot use the API, please contact us.", code: "FORBIDDEN" };
			return;
		}

		if (!user.staffId && clientDetails.client.JWTPhrase && user.JWTPhrase !== clientDetails.client.JWTPhrase) {
			ctx.status = 403;
			ctx.body = { message: "token_expired", code: "FORBIDDEN" };
			return;
		}

		_assignRequestParams(ctx, clientDetails);
	} catch (exception) {
		console.error({ exception });

		ctx.status = 403;
		ctx.body = { message: exception.message, code: "FORBIDDEN" };
		return;
	}

	await next();
};
```

**Validation Steps:**
1. User authentication verification
2. Token expiration check
3. Route-specific permission validation
4. Client assignment verification
5. JWT phrase validation for enhanced security

## 5. Physical Access Management

### 5.1 Facility Access

- **Badge System**: Physical access to Verifik facilities requires badge-based access control
- **Visitor Management**: All visitors must be registered and escorted
- **Access Logging**: All physical access is logged and monitored
- **Restricted Areas**: Sensitive areas (server rooms, data centers) have additional access controls

### 5.2 Data Center Access

- **Third-Party Hosting**: Verifik utilizes cloud-based infrastructure (AWS, MongoDB Atlas) with physical security managed by certified providers
- **Provider Compliance**: All hosting providers maintain SOC 2, ISO 27001, or equivalent certifications
- **Access Controls**: Physical access to data centers is restricted to authorized personnel only
- **Monitoring**: Data center access is monitored 24/7 with video surveillance

### 5.3 Equipment Access

- **Laptop Encryption**: All company-issued laptops are encrypted
- **Mobile Device Management**: Mobile devices are managed through MDM solutions
- **Remote Access**: Remote access requires VPN and multi-factor authentication
- **Device Policies**: All devices must comply with Verifik's security policies

## 6. Access Control for Third Parties

### 6.1 Vendor Access

- **Limited Access**: Third-party vendors are granted only the minimum access necessary
- **Contractual Requirements**: Vendor agreements include security and access control requirements
- **Regular Reviews**: Vendor access is reviewed regularly and revoked when no longer needed
- **Monitoring**: Vendor access is monitored and logged

### 6.2 Service Provider Access

- **Certified Providers**: We only use service providers with appropriate security certifications
- **Data Processing Agreements**: All service providers sign data processing agreements
- **Access Auditing**: Service provider access is audited regularly

## 7. Access Monitoring and Logging

### 7.1 Access Logging

- **Comprehensive Logging**: All access attempts (successful and failed) are logged
- **Audit Trail**: Complete audit trails are maintained for all system access
- **Log Retention**: Access logs are retained according to legal and regulatory requirements
- **Log Analysis**: Logs are regularly analyzed for suspicious activity

### 7.2 Monitoring

- **Real-Time Monitoring**: System access is monitored in real-time
- **Anomaly Detection**: Unusual access patterns trigger alerts
- **Incident Response**: Security incidents are responded to immediately
- **Regular Reporting**: Access reports are generated and reviewed regularly

## 8. Access Revocation

### 8.1 Immediate Revocation

Access is immediately revoked in the following circumstances:
- Employee termination
- Contractor contract termination
- Security incident or breach
- Violation of security policies
- Change in job function requiring different access

### 8.2 Revocation Process

1. **Notification**: The security team is immediately notified
2. **Access Disabled**: All logical access is disabled within 24 hours
3. **Physical Access**: Badges and physical access are revoked
4. **Verification**: Revocation is verified and documented
5. **Audit**: Revocation is logged in the audit trail

## 9. Compliance and Audit

### 9.1 Compliance Requirements

This policy is designed to comply with:
- **SOC 2**: Security, availability, and confidentiality controls
- **GDPR**: Data protection and privacy requirements
- **CCPA/CPRA**: California privacy requirements
- **Industry Standards**: OWASP security guidelines and best practices

### 9.2 Internal Audits

- **Regular Audits**: Access controls are audited at least annually
- **Access Reviews**: User access is reviewed quarterly
- **Policy Compliance**: Policy compliance is verified through regular assessments
- **Remediation**: Identified issues are remediated promptly

### 9.3 External Audits

- **Third-Party Audits**: External security audits are conducted regularly
- **Certification Maintenance**: We maintain appropriate security certifications
- **Audit Documentation**: All audit findings are documented and tracked

## 10. Training and Awareness

- **Security Training**: All employees receive security training upon hire and annually
- **Access Policy Training**: Employees are trained on access management policies and procedures
- **Awareness Programs**: Regular security awareness programs are conducted
- **Documentation**: Access management procedures are documented and accessible

## 11. Incident Response

### 11.1 Access-Related Incidents

- **Detection**: Unauthorized access attempts are detected through monitoring
- **Response**: Security incidents are responded to immediately
- **Investigation**: All incidents are investigated thoroughly
- **Remediation**: Access controls are strengthened based on incident findings

### 11.2 Breach Notification

- **Legal Requirements**: Breaches are reported according to legal and regulatory requirements
- **Stakeholder Notification**: Affected parties are notified as required
- **Documentation**: All breach incidents are documented and tracked

## 12. Policy Review and Updates

- **Annual Review**: This policy is reviewed at least annually
- **Update Process**: Policy updates are approved by senior management
- **Version Control**: Policy versions are tracked and maintained
- **Communication**: Policy updates are communicated to all relevant personnel

## 13. Responsibilities

### 13.1 Security Team

- Develop and maintain access management policies
- Implement and monitor access controls
- Conduct access reviews and audits
- Respond to access-related security incidents

### 13.2 IT Department

- Provision and deprovision user accounts
- Maintain access control systems
- Monitor system access
- Implement technical access controls

### 13.3 Managers

- Approve access requests for their team members
- Review access permissions regularly
- Report access-related issues
- Ensure compliance with access policies

### 13.4 All Employees

- Follow access management policies and procedures
- Report suspicious access activity
- Protect their credentials
- Complete required security training

## 14. Contact Information

For questions about this policy or to report access-related security concerns, please contact:

- **Email**: security@verifik.co
- **Privacy**: privacy@verifik.co

## 15. Document Control

- **Policy Owner**: Verifik Security Team
- **Last Updated**: January 2025
- **Next Review Date**: January 2026
- **Version**: 1.0

---

**Document Status**: This is the current version of Verifik's Access Management Policy. This policy is subject to periodic review and updates to reflect changes in technology, business practices, and regulatory requirements.

