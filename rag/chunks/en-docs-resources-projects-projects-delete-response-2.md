---
id: "en-docs-resources-projects-projects-delete-response-2"
title: "Delete Project — Response"
sourcePath: "docs/resources/projects/projects-delete.mdx"
locale: "en"
category: "resources"
tags:
  - "resources"
endpoint: "/api/projects"
sourceAnchor: "Response"
---

# Delete Project
**API path(s):** /api/projects

## Response

```json
{
    "data": {
        "_id": "64a1b2c3d4e5f6789012345",
        "name": "Deleted Project",
        "status": "deleted"
    }
}
```

  
  

```json
{
    "message": "Invalid project ID format",
    "code": "BadRequest",
    "status": 400,
    "timestamp": "2023-07-01T10:00:00.000Z"
}
```

  
  

```json
{
    "message": "Access forbidden",
    "code": "Forbidden",
    "status": 401,
    "timestamp": "2023-07-01T10:00:00.000Z"
}
```

or

```json
{
    "message": "Access forbidden",
    "code": "Forbidden"
}
```

  
  

```json
{
    "message": "Project not found",
    "code": "NotFound"
}
```

  
  

```json
{
    "message": "Cannot delete project with active flows",
    "code": "Conflict"
}
```

### Notes

- **Irreversible Action**: Project deletion is permanent and cannot be undone. All associated data will be permanently removed from the system.
- **Cascade Deletion**: When a project is deleted, the following associated resources are also removed: Project Flows, Webhooks, Project Members, and Configuration Data.
- **Pre-deletion Checks**: Before deleting, ensure no users are currently going through the KYC process, export any necessary data, check for external system dependencies, and ensure deletion complies with data retention requirements.
- **Project Status**: Only projects with status `draft` or `paused` can be deleted. Active projects must be paused first.
- **Safe Deletion**: Consider setting the project status to "paused" first to prevent new users from starting the process while you prepare for deletion.
- **Data Retention**: Ensure you have exported any necessary data before deletion, as this action permanently removes all project data.
