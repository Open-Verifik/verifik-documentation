---
id: "en-docs-resources-support-tickets-the-support-ticket-object-overview"
title: "The Support Ticket Object — Overview"
sourcePath: "docs/resources/support-tickets/the-support-ticket-object.mdx"
locale: "en"
category: "resources"
tags:
  - "resources"
sourceAnchor: "Overview"
slug: "/resources/the-support-ticket-object"
url: "https://docs.verifik.co/resources/the-support-ticket-object"
---

# The Support Ticket Object

## Overview

The Support Ticket object represents customer support tickets and their threads for customer support and issue tracking. This object contains all the information needed to manage and track support requests.

### Attributes

#### `title`

**Type:** String  
**Required:** Yes

The title or subject of the support ticket.

#### `description`

**Type:** String  
**Required:** Yes

Detailed description of the issue or request.

#### `status`

**Type:** String  
**Required:** Yes

Current status of the support ticket. Can be:

* `open` - Ticket is open and awaiting response
* `pending` - Ticket is pending action
* `in_progress` - Ticket is being worked on
* `resolved` - Ticket has been resolved
* `closed` - Ticket is closed

#### `priority`

**Type:** String  
**Required:** Yes

Priority level of the ticket. Can be:

* `low` - Low priority
* `medium` - Medium priority
* `high` - High priority
* `urgent` - Urgent priority

#### `category`

**Type:** String  
**Required:** Yes

Category of the support ticket. Can be:

* `technical` - Technical issues
* `billing` - Billing and payment issues
* `account` - Account-related issues
* `feature_request` - Feature requests
* `general` - General inquiries

#### `client`

**Type:** string (reference id)  
**Required:** Yes

Reference to the client who created the ticket.

#### `assignedTo`

**Type:** string (reference id)  
**Required:** No

Reference to the support agent assigned to handle the ticket.

#### `threads`

**Type:** Array  
**Required:** No

Array of message threads in the ticket:

* `author` - Author of the message
* `message` - Message content
* `timestamp` - When the message was sent
* `type` - Type of message (user, agent, system)

#### `attachments`

**Type:** Array  
**Required:** No

Array of file attachments:

* `filename` - Name of the file
* `url` - URL to access the file
* `size` - File size in bytes
* `type` - File type/MIME type

#### `tags`

**Type:** Array  
**Required:** No

Array of tags for categorizing and filtering tickets.

#### `resolution`

**Type:** String  
**Required:** No

Resolution details when the ticket is resolved.

#### `createdAt`

**Type:** Date  
**Required:** Yes

Timestamp when the support ticket was created.

#### `updatedAt`

**Type:** Date  
**Required:** Yes

Timestamp when the support ticket was last updated.

#### `resolvedAt`

**Type:** Date  
**Required:** No

Timestamp when the ticket was resolved.
