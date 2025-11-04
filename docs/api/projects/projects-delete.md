---
id: projects-delete
title: Delete Project
description: Remove a project and its associated project flows
---

import { Rocket, Lock, CheckCircle, XCircle, AlertTriangle } from 'lucide-react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeExamples from '@site/src/components/CodeExamples';

# Delete Project

Permanently delete a project and all its associated project flows. This action cannot be undone.

## <Rocket size={20} style={{display: 'inline', marginRight: '8px'}} />Endpoint

<div className="endpoint-card">
  <div className="endpoint-method delete">DELETE</div>
  <div className="endpoint-url">/v3/projects/&#123;id&#125;</div>
</div>

## <Lock size={20} style={{display: 'inline', marginRight: '8px'}} />Authentication

<div className="auth-card">
  <div className="auth-header">
    <h4><Lock size={16} style={{display: 'inline', marginRight: '6px'}} />JWT Token Required</h4>
  </div>
  <div className="auth-body">
    <p>Include your JWT token in the Authorization header for all requests:</p>
    <div className="code-block">
      <code>Authorization: Bearer &lt;your_jwt_token&gt;</code>
    </div>
  </div>
</div>

## Path Parameters

| Parameter | Type   | Required | Description                                    |
| --------- | ------ | -------- | ---------------------------------------------- |
| `id`      | string | Yes      | The unique identifier of the project to delete |

## Example Request

<CodeExamples
url="/v3/projects/64a1b2c3d4e5f6789012345"
method="DELETE"
params={{
    id: "64a1b2c3d4e5f6789012345"
  }}
/>

## Response Format

### Success Response (200 OK)

```json
{
	"data": {
		"_id": "64a1b2c3d4e5f6789012345",
		"name": "Deleted Project",
		"status": "deleted"
	}
}
```

## Cascade Deletion

When a project is deleted, the following associated resources are also removed:

-   **Project Flows**: All project flows associated with the project
-   **Webhooks**: Any webhooks configured for the project flows
-   **Project Members**: All team members assigned to the project
-   **Configuration Data**: All project-specific configuration and settings

:::warning Irreversible Action
Project deletion is permanent and cannot be undone. All associated data will be permanently removed from the system.
:::

## Error Responses

<Tabs>
<TabItem value="400" label="400 Bad Request">

```json
{
	"message": "Invalid project ID format",
	"code": "BadRequest",
	"status": 400,
	"timestamp": "2023-07-01T10:00:00.000Z"
}
```

**Common causes:**

-   Invalid project ID format
-   Missing project ID parameter

</TabItem>
<TabItem value="401" label="401 Unauthorized">

```json
{
	"message": "Access forbidden",
	"code": "Forbidden",
	"status": 401,
	"timestamp": "2023-07-01T10:00:00.000Z"
}
```

**Common causes:**

-   Missing or invalid JWT token
-   Expired authentication token

</TabItem>
<TabItem value="403" label="403 Forbidden">

```json
{
	"message": "Access forbidden",
	"code": "Forbidden"
}
```

**Common causes:**

-   Insufficient permissions
-   Invalid client access

</TabItem>
<TabItem value="404" label="404 Not Found">

```json
{
	"message": "Project not found",
	"code": "NotFound"
}
```

**Common causes:**

-   Project ID doesn't exist
-   Project belongs to different client
-   Project has already been deleted

</TabItem>
<TabItem value="409" label="409 Conflict">

```json
{
	"message": "Cannot delete project with active flows",
	"code": "Conflict"
}
```

**Common causes:**

-   Project has active project flows
-   Users are currently using the project
-   Project is in active use

</TabItem>
</Tabs>

## Examples

### Delete Project

<CodeExamples
url="/v3/projects/64a1b2c3d4e5f6789012345"
method="DELETE"
params={{
    id: "64a1b2c3d4e5f6789012345"
  }}
/>

### Delete Project with Confirmation

First, check if project exists:

<CodeExamples
url="/v3/projects/64a1b2c3d4e5f6789012345"
method="GET"
params={{
    id: "64a1b2c3d4e5f6789012345"
  }}
/>

Then proceed with deletion:

<CodeExamples
url="/v3/projects/64a1b2c3d4e5f6789012345"
method="DELETE"
params={{
    id: "64a1b2c3d4e5f6789012345"
  }}
/>

## Pre-deletion Checks

Before deleting a project, consider:

1. **Active Users**: Ensure no users are currently going through the KYC process
2. **Data Backup**: Export any necessary data before deletion
3. **Dependencies**: Check for any external systems that depend on this project
4. **Compliance**: Ensure deletion complies with data retention requirements

## Rate Limits

-   **50 requests per minute** per user

:::tip Safe Deletion
Before deleting a project, consider setting its status to "paused" first to prevent new users from starting the process while you prepare for deletion.
:::

:::warning Data Retention
Ensure you have exported any necessary data before deletion, as this action permanently removes all project data.
:::

:::note Project Status
Only projects with status "draft" or "paused" can be deleted. Active projects must be paused first.
:::
