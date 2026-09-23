---
id: "en-docs-legal-access-management-policy-4-2-authorization-3"
title: "Access Management Policy — 4.2 Authorization"
sourcePath: "docs/legal/access-management-policy.md"
locale: "en"
category: "legal"
tags:
  - "legal"
sourceAnchor: "4.2 Authorization"
---

# Access Management Policy

## 4.2 Authorization

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
