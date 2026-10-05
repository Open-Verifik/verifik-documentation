---
id: "en-docs-legal-compliance-service-accounts-response-question"
title: "Compliance Response: Service Account Management — Question"
sourcePath: "docs/legal/compliance-service-accounts-response.md"
locale: "en"
category: "legal"
tags:
  - "legal"
sourceAnchor: "Question"
---

# Compliance Response: Service Account Management

## Question

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
