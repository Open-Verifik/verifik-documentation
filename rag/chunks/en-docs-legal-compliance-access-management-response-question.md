---
id: "en-docs-legal-compliance-access-management-response-question"
title: "Compliance Response: Access Management Policy — Question"
sourcePath: "docs/legal/compliance-access-management-response.md"
locale: "en"
category: "legal"
tags:
  - "legal"
sourceAnchor: "Question"
---

# Compliance Response: Access Management Policy

## Question

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
