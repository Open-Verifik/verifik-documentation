---
id: project-flows-delete
title: Delete Project Flow
description: Remove a project flow and its associated configuration
---

import { Rocket, Lock, CheckCircle, XCircle, AlertTriangle } from 'lucide-react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeExamples from '@site/src/components/CodeExamples';

# Delete Project Flow

Permanently delete a project flow and all its associated configuration. This action cannot be undone.

## <Rocket size={20} style={{display: 'inline', marginRight: '8px'}} />Endpoint

<div className="endpoint-card">
  <div className="endpoint-method delete">DELETE</div>
  <div className="endpoint-url">/v3/project-flows/&#123;id&#125;</div>
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

| Parameter | Type   | Required | Description                                         |
| --------- | ------ | -------- | --------------------------------------------------- |
| `id`      | string | Yes      | The unique identifier of the project flow to delete |

## Example Request

<CodeExamples
url="/v3/project-flows/64a1b2c3d4e5f6789012346"
method="DELETE"
params={{
    id: "64a1b2c3d4e5f6789012346"
  }}
/>

## Response Format

### Success Response (200 OK)

```json
{
	"data": {
		"_id": "64a1b2c3d4e5f6789012346",
		"type": "onboarding",
		"target": "personal",
		"status": "deleted"
	}
}
```

## Soft Delete Behavior

In development environments, project flows are soft-deleted rather than permanently removed:

-   **Development**: Project flows are marked as deleted but remain in the database
-   **Production**: Project flows are permanently removed from the database

## Cascade Deletion

When a project flow is deleted, the following associated resources are also removed:

-   **Configuration Data**: All flow-specific configuration and settings
-   **Webhook References**: Any webhook associations
-   **Integration Settings**: API endpoints and test configurations
-   **Document Templates**: Associated document processing templates

:::warning Irreversible Action
Project flow deletion is permanent and cannot be undone. All associated configuration data will be permanently removed from the system.
:::

## Error Responses

<Tabs>
<TabItem value="400" label="400 Bad Request">

```json
{
	"message": "Invalid project flow ID format",
	"code": "BadRequest"
}
```

**Common causes:**

-   Invalid project flow ID format
-   Missing project flow ID parameter

</TabItem>
<TabItem value="401" label="401 Unauthorized">

```json
{
	"message": "Access forbidden",
	"code": "Forbidden"
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
	"message": "Project flow not found",
	"code": "NotFound"
}
```

**Common causes:**

-   Project flow ID doesn't exist
-   Project flow belongs to different client
-   Project flow has already been deleted

</TabItem>
<TabItem value="409" label="409 Conflict">

```json
{
	"message": "Cannot delete project flow with active users",
	"code": "Conflict"
}
```

**Common causes:**

-   Users are currently going through the verification process
-   Project flow is in active use
-   Cannot delete active flows

</TabItem>
</Tabs>

## Examples

### Delete Project Flow

<CodeExamples
url="/v3/project-flows/64a1b2c3d4e5f6789012346"
method="DELETE"
params={{
    id: "64a1b2c3d4e5f6789012346"
  }}
/>

### Delete Project Flow with Confirmation

First, check if project flow exists:

<CodeExamples
url="/v3/project-flows/64a1b2c3d4e5f6789012346"
method="GET"
params={{
    id: "64a1b2c3d4e5f6789012346"
  }}
/>

Then proceed with deletion:

<CodeExamples
url="/v3/project-flows/64a1b2c3d4e5f6789012346"
method="DELETE"
params={{
    id: "64a1b2c3d4e5f6789012346"
  }}
/>

## Pre-deletion Checks

Before deleting a project flow, consider:

1. **Active Users**: Ensure no users are currently going through the verification process
2. **Project Dependencies**: Check if the parent project depends on this flow
3. **Data Backup**: Export any necessary configuration data before deletion
4. **Integration Dependencies**: Verify no external systems depend on this flow

## Impact on Parent Project

Deleting a project flow will:

-   Remove the flow from the parent project's `projectFlows` array
-   Update the project's `lastStep` if this was the active flow
-   Potentially affect the project's overall configuration status

## Rate Limits

-   **50 requests per minute** per user

:::tip Safe Deletion
Before deleting a project flow, consider setting its status to "paused" first to prevent new users from starting the process while you prepare for deletion.
:::

:::warning Data Retention
Ensure you have exported any necessary configuration data before deletion, as this action permanently removes all flow-specific settings.
:::

:::note Project Impact
Deleting a project flow may affect the parent project's functionality. Ensure the project has alternative flows or is ready for deletion as well.
:::
