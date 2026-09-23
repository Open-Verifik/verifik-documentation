---
id: "en-docs-resources-support-tickets-support-tickets-api-endpoints-2"
title: "Support Tickets — API Endpoints"
sourcePath: "docs/resources/support-tickets/support-tickets.mdx"
locale: "en"
category: "resources"
tags:
  - "resources"
sourceAnchor: "API Endpoints"
slug: "/resources/support-tickets"
url: "https://docs.verifik.co/resources/support-tickets"
---

# Support Tickets

## API Endpoints

#### Create a Support Ticket

**POST** `/v2/support-tickets`

Creates a new support ticket with the specified details.

#### Retrieve a Support Ticket

**GET** `/v2/support-tickets/:id`

Retrieves details of a specific support ticket.

#### List All Support Tickets

**GET** `/v2/support-tickets`

Lists all support tickets with optional filtering.

### Support Ticket Object Structure

For detailed information about the Support Ticket object and its properties, see [The Support Ticket Object](/resources/the-support-ticket-object).

### Use Cases

-   **Customer Support** - Manage and track customer service requests
-   **Issue Resolution** - Streamline problem-solving processes
-   **SLA Management** - Track response times and resolution metrics
-   **Communication** - Maintain clear communication with users
