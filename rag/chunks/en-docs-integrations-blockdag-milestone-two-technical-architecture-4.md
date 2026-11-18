---
id: "en-docs-integrations-blockdag-milestone-two-technical-architecture-4"
title: "BlockDAG Milestone 2: Name Service — Technical Architecture"
sourcePath: "docs/integrations/blockdag-milestone-two.md"
locale: "en"
category: "integrations"
tags:
  - "integrations"
sourceAnchor: "Technical Architecture"
---

# BlockDAG Milestone 2: Name Service

## Technical Architecture

### Name Service System

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                            MILESTONE 2 ARCHITECTURE                                │
└─────────────────────────────────────────────────────────────────────────────────────┘

┌──────────────────┐     ┌──────────────────────────────────────────────────────────┐
│   Demo App UI    │     │                 Name Service Core                       │
│                  │     │                                                          │
│ ┌──────────────┐ │     │ ┌─────────────┐  ┌─────────────┐  ┌─────────────────┐   │
│ │ Name Search  │ │────▶│ │ Resolution  │  │ Registration│  │ Payment         │   │
│ │ Interface    │ │     │ │ Engine      │  │ Workflow    │  │ Processing      │   │
│ └──────────────┘ │     │ └─────────────┘  └─────────────┘  └─────────────────┘   │
│                  │     │                                                          │
│ ┌──────────────┐ │     │ ┌─────────────┐  ┌─────────────┐  ┌─────────────────┐   │
│ │ Registration │ │────▶│ │ Availability│  │ Biometric   │  │ BDAG Token      │   │
│ │ Dashboard    │ │     │ │ Checker     │  │ Capture     │  │ Integration     │   │
│ └──────────────┘ │     │ └─────────────┘  └─────────────┘  └─────────────────┘   │
└──────────────────┘     └──────────────────────────────────────────────────────────┘
                                    │
                                    ▼
                         ┌──────────────────────────────────────────────────────────┐
                         │                    Storage Layer                         │
                         │                                                          │
                         │ ┌─────────────┐  ┌─────────────┐  ┌─────────────────┐   │
                         │ │ Name        │  │ Metadata    │  │ Payment         │   │
                         │ │ Registry    │  │ Storage     │  │ Records          │   │
                         │ └─────────────┘  └─────────────┘  └─────────────────┘   │
                         └──────────────────────────────────────────────────────────┘
                                    │
                                    ▼
                         ┌──────────────────────────────────────────────────────────┐
                         │                 BlockDAG Network                          │
                         │                                                          │
                         │ ┌─────────────┐  ┌─────────────┐  ┌─────────────────┐   │
                         │ │ Address     │  │ Transaction │  │ Smart Contract  │   │
                         │ │ Generation  │  │ Processing  │  │ Integration     │   │
                         │ └─────────────┘  └─────────────┘  └─────────────────┘   │
                         └──────────────────────────────────────────────────────────┘
```

---
