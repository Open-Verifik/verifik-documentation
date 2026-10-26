---
id: data-retention-overview
title: Data Retention & Privacy APIs
description: API endpoints for managing data retention policies, right to erasure, and automated purge workflows
---

### Overview

The Data Retention APIs allow you to manage storage policies, configure GDPR / Habeas Data compliance lifecycles, and execute manual erasure requests on individual records or entire projects.

### Available Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | [`/v2/data-retention/policy`](./retrieve-data-retention-policy) | Retrieve the resolved data retention policy for an account or project |
| `PUT` | [`/v2/client-settings/data`](./update-client-retention-policy) | Update account-wide data retention settings |
| `PUT` | [`/v2/projects/:id/data-retention`](./update-project-retention-policy) | Configure project-level retention overrides |
| `DELETE` | [`/v2/document-validations/:id/files`](./delete-document-validation-files) | Erase stored document images, preserving verification results |
| `DELETE` | [`/v2/app-registrations/:id/data`](./delete-app-registration-data) | Right to Erasure: permanently delete all images and PII for an enrollee |
| `POST` | [`/v2/data-retention/erase`](./erase-data-bulk) | Trigger asynchronous bulk erasure across projects |

For an in-depth explanation of retention modes, media types, and automated background purge mechanics, see the [SmartEnroll Data Retention & Privacy Guide](/smartenroll/data-retention).
