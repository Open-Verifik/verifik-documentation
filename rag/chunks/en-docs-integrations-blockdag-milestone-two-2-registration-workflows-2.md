---
id: "en-docs-integrations-blockdag-milestone-two-2-registration-workflows-2"
title: "BlockDAG Milestone 2: Name Service — 2. Registration Workflows"
sourcePath: "docs/integrations/blockdag-milestone-two.md"
locale: "en"
category: "integrations"
tags:
  - "integrations"
sourceAnchor: "2. Registration Workflows"
---

# BlockDAG Milestone 2: Name Service

## 2. Registration Workflows

**Objective**: Create seamless online and offline name registration processes

**Tasks**:
- [ ] Design registration workflow UI/UX
- [ ] Implement online registration with biometric recovery
- [ ] Implement offline registration with QR code generation
- [ ] Create name availability checking system
- [ ] Build registration confirmation and receipt system
- [ ] Implement name renewal workflows

**Registration Flow**:

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                            REGISTRATION WORKFLOW                                    │
└─────────────────────────────────────────────────────────────────────────────────────┘

1. NAME AVAILABILITY CHECK
   ┌──────────────┐    ┌──────────────────┐    ┌─────────────────-┐
   │ User enters  │───▶│ Check name       │───▶│ Return available │
   │ desired name │    │ availability     │    │ or suggest      │
   └──────────────┘    └──────────────────┘    └─────────────────-┘

2. BIOMETRIC REGISTRATION
   ┌──────────────┐    ┌──────────────────┐    ┌─────────────────-┐
   │ Face capture │───▶│ Generate ZelfProof│───▶│ Create wallet    │
   └──────────────┘    └──────────────────┘    └─────────────────-┘
                                │
   ┌──────────────┐    ┌──────────────────┐    ┌─────────────────-┐
   │ Store proof  │◄───│ Generate QR code │◄───│ Encrypt metadata │
   └──────────────┘    └──────────────────┘    └─────────────────-┘

3. PAYMENT PROCESSING
   ┌──────────────┐    ┌──────────────────┐    ┌─────────────────-┐
   │ Calculate    │───▶│ Process BDAG     │───▶│ Confirm payment  │
   │ registration │    │ payment          │    │ and activate     │
   │ fee          │    │                  │    │ name             │
   └──────────────┘    └──────────────────┘    └─────────────────-┘
```

**Acceptance Criteria**:
- Online registration completes in &lt;2 minutes
- Offline registration generates valid QR codes
- Name availability checking &lt;500ms response time
- Registration success rate &gt;95%
- Payment processing integration functional

**Estimated Effort**: 2.5 weeks

---
