---
id: "en-docs-resources-webhooks-the-webhook-object-overview"
title: "The Webhook Object — Overview"
sourcePath: "docs/resources/webhooks/the-webhook-object.mdx"
locale: "en"
category: "resources"
tags:
  - "resources"
sourceAnchor: "Overview"
slug: "/resources/the-webhook-object"
url: "https://docs.verifik.co/resources/the-webhook-object"
---

# The Webhook Object

## Overview

The Webhook object represents webhook configurations for receiving notifications from Verifik to your backend.

### Attributes

#### `client`

**Type:** string (reference id)  
**Required:** Yes

Reference to the client associated with the webhook. This is a required field that links the webhook to a specific client.

#### `projectFlow`

**Type:** Array of string (reference id)  
**Required:** No

Array of references to `ProjectFlow` objects. If no project flows are provided, this field defaults to an empty array.

#### `statistics`

**Type:** Object  
**Required:** No

Stores statistical data related to the webhook. By default, this field is an empty object `{}`.

#### `isActive`

**Type:** Boolean  
**Required:** Yes

Indicates whether the webhook is active. This is a required field and must be set to either `true` or `false`.

#### `name`

**Type:** String  
**Required:** Yes

The name of the webhook. This is a required field and must be provided as a string.

#### `url`

**Type:** String  
**Required:** Yes

The URL endpoint that the webhook will send notifications to. This is a required field and must be provided as a valid string.

#### `description`

**Type:** String  
**Required:** No

A brief description of the webhook. This is an optional field and can be used to add more context or details about the webhook.

#### `notification`

**Type:** Object  
**Required:** No

Contains notification settings for the webhook. The object has the following optional sub-fields:

* **email** - `String` - Optional - Email address to which notifications will be sent.
* **success** - `Boolean` - Optional - Indicates whether to send notifications on successful events. Defaults to `false`.
* **fail** - `Boolean` - Optional - Indicates whether to send notifications on failure events. Defaults to `true`.
