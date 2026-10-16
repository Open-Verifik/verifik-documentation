---
id: "en-docs-legal-access-management-policy-1-policy-statement"
title: "Access Management Policy — 1. Policy Statement"
sourcePath: "docs/legal/access-management-policy.md"
locale: "en"
category: "legal"
tags:
  - "legal"
sourceAnchor: "1. Policy Statement"
---

# Access Management Policy

## 1. Policy Statement

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
