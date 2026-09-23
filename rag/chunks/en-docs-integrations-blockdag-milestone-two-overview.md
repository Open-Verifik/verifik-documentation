---
id: "en-docs-integrations-blockdag-milestone-two-overview"
title: "BlockDAG Milestone 2: Name Service — Overview"
sourcePath: "docs/integrations/blockdag-milestone-two.md"
locale: "en"
category: "integrations"
tags:
  - "integrations"
sourceAnchor: "Overview"
---

# BlockDAG Milestone 2: Name Service

## Overview

## Overview

**Duration**: Weeks 5-8  
**Phase**: Name Service Implementation  
**Focus**: Domain resolution system and registration workflows

This milestone builds upon the foundation established in Milestone 1 to create a complete name service system for BlockDAG, including domain resolution, registration workflows, and payment integration.

---

## Deliverables

### 1. Name Resolution System

**Objective**: Implement `*.blockdag` domain support with full resolution capabilities

**Tasks**:
- [ ] Design domain resolution architecture
- [ ] Implement DNS-like resolution for BlockDAG names
- [ ] Create name validation and formatting rules
- [ ] Build resolution caching system
- [ ] Implement subdomain support
- [ ] Create resolution API endpoints

**API Endpoints**:

```javascript
// Resolve name to BlockDAG address
GET /blockdag-name-service/resolve/{name}
Response: {
  "name": "john.blockdag",
  "address": "bdag1234...5678",
  "expires": "2025-01-15T10:30:00Z",
  "status": "active"
}

// Batch resolve multiple names
POST /blockdag-name-service/resolve/batch
{
  "names": ["john.blockdag", "alice.blockdag", "bob.blockdag"]
}

// Get name history and metadata
GET /blockdag-name-service/metadata/{name}
```

**Domain Rules**:
- Names must be 3-63 characters long
- Only alphanumeric characters and hyphens allowed
- Cannot start or end with hyphen
- Reserved names list (admin, www, api, etc.)

**Acceptance Criteria**:
- Domain resolution working for all valid names
- Subdomain resolution functional
- Caching system improves performance by 80%
- Batch resolution supports up to 100 names
- Resolution time &lt;100ms average

**Estimated Effort**: 2 weeks

---
