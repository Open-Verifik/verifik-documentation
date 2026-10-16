---
id: "en-docs-legal-access-management-policy-4-4-access-request-and-approval-process-4"
title: "Access Management Policy — 4.4 Access Request and Approval Process"
sourcePath: "docs/legal/access-management-policy.md"
locale: "en"
category: "legal"
tags:
  - "legal"
sourceAnchor: "4.4 Access Request and Approval Process"
---

# Access Management Policy

## 4.4 Access Request and Approval Process

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
