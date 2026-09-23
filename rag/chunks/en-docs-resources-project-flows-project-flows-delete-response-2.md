---
id: "en-docs-resources-project-flows-project-flows-delete-response-2"
title: "Delete Project Flow — Response"
sourcePath: "docs/resources/project-flows/project-flows-delete.mdx"
locale: "en"
category: "resources"
tags:
  - "resources"
endpoints:
  - "/v3/project-flows/${flowid}"
  - "/v3/project-flows/%s"
  - "/v3/project-flows/{flow_id}"
  - "/v3/project-flows/{id}"
sourceAnchor: "Response"
---

# Delete Project Flow
**API path(s):** /v3/project-flows/${flowid}, /v3/project-flows/%s, /v3/project-flows/{flow_id}, /v3/project-flows/{id}

## Response

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

  
  

```json
{
    "message": "Invalid project flow ID format",
    "code": "BadRequest"
}
```

  
  

```json
{
    "message": "Access forbidden",
    "code": "Forbidden"
}
```

  
  

```json
{
    "message": "Project flow not found",
    "code": "NotFound"
}
```

  
  

```json
{
    "message": "Cannot delete project flow with active users",
    "code": "Conflict"
}
```

### Notes

- **Irreversible Action**: Project flow deletion is permanent and cannot be undone. All associated configuration data will be permanently removed from the system.
- **Soft Delete Behavior**: In development environments, project flows are soft-deleted (marked as deleted but remain in database). In production, they are permanently removed.
- **Cascade Deletion**: When a project flow is deleted, the following associated resources are also removed: Configuration Data, Webhook References, Integration Settings, and Document Templates.
- **Impact on Parent Project**: Deleting a project flow will remove it from the parent project's `projectFlows` array and may affect the project's overall configuration status.
- **Pre-deletion Checks**: Before deleting, ensure no users are currently going through the verification process, check if the parent project depends on this flow, export any necessary configuration data, and verify no external systems depend on this flow.
- **Safe Deletion**: Consider setting the project flow status to "paused" first to prevent new users from starting the process while you prepare for deletion.
- **Data Retention**: Ensure you have exported any necessary configuration data before deletion, as this action permanently removes all flow-specific settings.
