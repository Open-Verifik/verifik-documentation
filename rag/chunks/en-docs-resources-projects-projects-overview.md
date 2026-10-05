---
id: "en-docs-resources-projects-projects-overview"
title: "Projects — Overview"
sourcePath: "docs/resources/projects/projects.mdx"
locale: "en"
category: "resources"
tags:
  - "projects"
  - "resources"
endpoint: "/v2/projects"
sourceAnchor: "Overview"
slug: "/resources/projects/projects"
url: "https://docs.verifik.co/resources/projects/projects"
---

# Projects
**API path(s):** /v2/projects

## Overview

Projects are the foundation of your Verifik system - they contain all the essential information about your company or organization that will be used across all your verification services. Think of them as your company profile that ensures your brand is represented correctly and legally when using Verifik's services.

### How Projects Work

Every Project serves as a container for your company's identity, branding, and legal information. When users go through verification processes, Verifik uses your Project settings to display your brand, send communications, and ensure compliance with legal requirements.

### What Projects Store

Projects are comprehensive company profiles that define every aspect of how your brand appears to users:

#### Company Identity
* Your company name and contact information
* Legal addresses and business details
* Contact email for support and communications
* Privacy policy and terms of service links

#### Branding & Design
* Company logo and visual identity
* Color schemes for buttons, text, and backgrounds
* Custom images and positioning
* Overall look and feel of your verification interface

#### Legal & Compliance
* Privacy policy requirements
* Terms and conditions links
* Data protection officer information
* Regulatory compliance settings

### API Endpoints

#### Create a Project
```
POST https://api.verifik.co/v2/projects
```

#### List All Projects
```
GET https://api.verifik.co/v2/projects
```

#### Retrieve a Project
```
GET https://api.verifik.co/v2/projects/{projectId}
```

#### Update a Project
```
PUT https://api.verifik.co/v2/projects/{projectId}
```
