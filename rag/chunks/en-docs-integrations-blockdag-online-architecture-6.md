---
id: "en-docs-integrations-blockdag-online-architecture-6"
title: "BlockDAG — Online Architecture"
sourcePath: "docs/integrations/blockdag.md"
locale: "en"
category: "integrations"
tags:
  - "integrations"
sourceAnchor: "Online Architecture"
---

# BlockDAG

## Online Architecture

// Full decryption service
POST /zelf-name-service/v2/decrypt
{
  "zelfName": "john.blockdag",
  "faceBase64": "encrypted_face_data",
  "password": "optional_password"
}

// Search with backend processing
POST /zelf-name-service/v2/search
{
  "zelfName": "john.blockdag",
  "environment": "both"
}
```
