---
id: "en-docs-resources-project-flows-the-project-flow-object-overview"
title: "The Project Flow Object — Overview"
sourcePath: "docs/resources/project-flows/the-project-flow-object.mdx"
locale: "en"
category: "resources"
tags:
  - "resources"
sourceAnchor: "Overview"
slug: "/resources/project-flows/the-project-flow-object"
url: "https://docs.verifik.co/resources/project-flows/the-project-flow-object"
---

# The Project Flow Object

## Overview

The Project Flow object represents flow configurations for projects in Verifik. Project Flows define various data points that Verifik will use to perform validations using passwordless and liveness detection technologies.

### Attributes

#### `project`
**Type:** string (reference id)  
**Required:** Yes

The project is the `_id` generated when creating a project correctly.

#### `type`
**Type:** String  
**Required:** Yes

The type determines what type of service you want to generate in this project flow. Can be:
* `"login"` - For existing users to access your system
* `"onboarding"` - For new users to enroll and create accounts

#### `status`
**Type:** String  
**Required:** Yes

The current status of the project flow. Can be:
* `"draft"` - Project flow is in draft mode
* `"active"` - Project flow is active and can be used
* `"paused"` - Project flow is paused

Only "active" projects can be used.

#### `version`
**Type:** Number  
**Required:** No

Version number of the project flow. Defaults to 1.

#### `name`
**Type:** String  
**Required:** Yes

Name of the project flow for identification purposes.

#### `description`
**Type:** String  
**Required:** No

Description of the project flow and its purpose.

#### `configuration`
**Type:** Object  
**Required:** Yes

Configuration object containing flow-specific settings:
* `emailVerification` - Email verification settings
* `phoneVerification` - Phone verification settings
* `biometricVerification` - Biometric verification settings
* `documentVerification` - Document verification settings
* `securityThresholds` - Security threshold settings
* `searchModes` - Search mode configurations

#### `steps`
**Type:** Array  
**Required:** Yes

Array of steps that define the flow sequence:
* `stepType` - Type of step (e.g., "email", "phone", "biometric", "document")
* `order` - Order of the step in the flow
* `required` - Whether the step is required
* `config` - Step-specific configuration

#### `client`
**Type:** string (reference id)  
**Required:** Yes

Reference to the client who owns this project flow.

#### `createdAt`
**Type:** Date  
**Required:** Yes

Timestamp when the project flow was created.

#### `updatedAt`
**Type:** Date  
**Required:** Yes

Timestamp when the project flow was last updated.

#### `emailTemplates`
**Type:** Object (map keyed by language code)  
**Required:** No

Per-locale OTP email copy overrides (for example `en`, `es`). Each entry may include fields such as `subject`, `message`, and `greeting`. Editing a language in the dashboard email template editor stores overrides under that key; it does **not** set a default send language. Live OTP emails use the `language` on the registration / email-validation request (the hosted SDK sends the enrollee UI language). Preview and **Send Test** use the language selected in the editor.

#### `emailTemplateDesign`
**Type:** String  
**Required:** No

OTP email layout variant (for example `standard` or `custom`). Applies to how template fields are rendered; language selection still comes from the request `language`.
