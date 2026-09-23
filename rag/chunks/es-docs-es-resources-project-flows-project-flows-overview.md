---
id: "es-docs-es-resources-project-flows-project-flows-overview"
title: "Flujos de Proyecto — Overview"
sourcePath: "docs-es/resources/project-flows/project-flows.mdx"
locale: "es"
category: "resources"
tags:
  - "project-flows"
  - "resources"
endpoint: "/v2/project-flows"
sourceAnchor: "Overview"
slug: "/resources/project-flows"
url: "https://docs.verifik.co/verifik-es/resources/project-flows"
---

# Flujos de Proyecto
**API path(s):** /v2/project-flows

## Overview

Project Flows are the blueprints that define how users will verify their identity in your system. Think of them as the instruction manual that tells Verifik exactly what steps to follow, what information to collect, and how strict to be during the verification process.

### How Project Flows Work

Every Project Flow is a configuration template that defines the complete user verification journey. When someone wants to use your system, Verifik follows your Project Flow step-by-step to ensure they meet your security and compliance requirements.

Currently, Project Flows support these types:

* **onboarding** - For new users to enroll and create accounts
* **login** - For existing users to access your system

### What Project Flows Configure

Project Flows are comprehensive configuration systems that define every aspect of your verification process:

#### User Experience
* Which forms to show and in what order
* What information is required vs. optional
* How users can submit documents
* Whether signatures are needed

#### Security Settings
* Who can access your system (whitelist/blacklist)
* How strict to be with identity verification
* What security checks to perform
* How to handle suspicious activity

#### Integration Options
* Which databases to check against
* What external services to use
* How to handle verification failures
* Custom business logic and rules

### API Endpoints

#### Create a Project Flow
```
POST https://api.verifik.co/v2/project-flows
```

#### List All Project Flows
```
GET https://api.verifik.co/v2/project-flows
```

#### Retrieve a Project Flow
```
GET https://api.verifik.co/v2/project-flows/{flowId}
```

#### Update a Project Flow
```
PUT https://api.verifik.co/v2/project-flows/{flowId}
```
