---
id: "en-docs-services-verifik-enroll-code-solution-via-api-full-api-tutorial-getting-started"
title: "Enroll — Getting Started"
sourcePath: "docs/services/verifik-enroll-code-solution-via-api/full-api-tutorial.md"
locale: "en"
category: "services"
tags:
  - "services"
endpoint: "/v2"
sourceAnchor: "Getting Started"
slug: "/services/verifik-enroll-code-solution-via-api/full-api-tutorial"
url: "https://docs.verifik.co/services/verifik-enroll-code-solution-via-api/full-api-tutorial"
---

# Enroll
**API path(s):** /v2

## Getting Started

### Getting Started

The **recommended approach** is to use our [web app](https://app.verifik.co) for setup. Our intuitive UI handles all the configuration automatically, eliminating the need for manual API calls. However, if you prefer full API control, we provide comprehensive endpoints for every step of the process.

## Prerequisites

Before starting the integration, ensure you have:

- **API Access Token** - Obtain from [Verifik Dashboard](https://app.verifik.co)
- **HTTPS Endpoint** - Required for webhook configuration
- **Project Requirements** - Privacy policy and terms of service URLs
- **Supported Countries** - List of countries where your service will operate

## API Base URL

All API endpoints use the following base URL:
```
https://api.verifik.co/v2/
```

## Authentication

All API requests require authentication using a Bearer token:

```http
Authorization: Bearer YOUR_ACCESS_TOKEN
```

### Setup Process

| Step | Action | Documentation | Endpoint |
|------|--------|--------------|----------|
| 1 | **Create a Project** | [Create a Project](/resources/projects/projects-create) | `POST /projects` |
| 2 | **Create a Project Flow** | [Create a Project Flow](/resources/project-flows/project-flows-update) | `POST /project-flows` |
| 3 | **Configure App Registrations** | [Create an App Registration](/resources/app-registrations/create-an-app-registration) | `POST /app-registrations` |
| 4 | **Set up Webhooks** | [Create a Webhook](/resources/create-a-webhook) | `POST /webhooks` |
| 5 | **Configure App Logins** | [Create an App Login](/resources/create-an-app-login) | Auto-generated |
