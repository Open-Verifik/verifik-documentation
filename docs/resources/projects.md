---
id: projects
title: Projects
description: Projects are the foundation of your Verifik system - they contain all the essential information about your company
---

# Projects

Projects are the foundation of your Verifik system - they contain all the essential information about your company or organization that will be used across all your verification services. Think of them as your company profile that ensures your brand is represented correctly and legally when using Verifik's services.

## How Projects Work

Every Project serves as a container for your company's identity, branding, and legal information. When users go through verification processes, Verifik uses your Project settings to display your brand, send communications, and ensure compliance with legal requirements.

### What Projects Store

Projects are comprehensive company profiles that define every aspect of how your brand appears to users:

#### Company Identity:
* Your company name and contact information
* Legal addresses and business details
* Contact email for support and communications
* Privacy policy and terms of service links

#### Branding & Design:
* Company logo and visual identity
* Color schemes for buttons, text, and backgrounds
* Custom images and positioning
* Overall look and feel of your verification interface

#### Legal & Compliance:
* Privacy policy requirements
* Terms and conditions links
* Data protection officer information
* Regulatory compliance settings

## API Endpoints

### Create a Project
```http
POST https://api.verifik.co/v2/projects
```

### List All Projects
```http
GET https://api.verifik.co/v2/projects
```

### Retrieve a Project
```http
GET https://api.verifik.co/v2/projects/{projectId}
```

### Update a Project
```http
PUT https://api.verifik.co/v2/projects/{projectId}
```

## Project Object Structure

```json
{
  "id": "proj_123456789",
  "name": "My Company",
  "description": "Company verification project",
  "logo": "https://example.com/logo.png",
  "primaryColor": "#0066CC",
  "secondaryColor": "#FFFFFF",
  "contactEmail": "support@mycompany.com",
  "privacyPolicyUrl": "https://mycompany.com/privacy",
  "termsOfServiceUrl": "https://mycompany.com/terms",
  "dataProtectionOfficer": {
    "name": "John Doe",
    "email": "dpo@mycompany.com",
    "address": "123 Main St, City, State"
  },
  "createdAt": "2024-01-15T10:30:00Z",
  "updatedAt": "2024-01-15T10:30:00Z"
}
```

## Use Cases

- **Brand Consistency**: Ensure your brand appears correctly across all verification flows
- **Legal Compliance**: Meet regulatory requirements for data protection
- **User Experience**: Provide a seamless, branded experience for your users
- **Multi-tenant Support**: Manage multiple projects for different business units
