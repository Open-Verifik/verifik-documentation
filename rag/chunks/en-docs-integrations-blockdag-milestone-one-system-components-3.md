---
id: "en-docs-integrations-blockdag-milestone-one-system-components-3"
title: "BlockDAG Milestone 1: Foundation — System Components"
sourcePath: "docs/integrations/blockdag-milestone-one.md"
locale: "en"
category: "integrations"
tags:
  - "integrations"
sourceAnchor: "System Components"
---

# BlockDAG Milestone 1: Foundation

## System Components

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                            MILESTONE 1 ARCHITECTURE                                │
└─────────────────────────────────────────────────────────────────────────────────────┘

┌──────────────────┐     ┌──────────────────────────────────────────────────────────┐
│   Zelf SDK       │     │                 BlockDAG Integration                     │
│                  │     │                                                          │
│ ┌──────────────┐ │     │ ┌─────────────┐  ┌─────────────┐  ┌─────────────────┐   │
│ │ Wallet Gen   │ │────▶│ │ BlockDAG    │  │ Address     │  │ Validation      │   │
│ │ (BlockDAG)   │ │     │ │ Address Gen │  │ Format      │  │ Functions       │   │
│ └──────────────┘ │     │ └─────────────┘  └─────────────┘  └─────────────────┘   │
│                  │     │                                                          │
│ ┌──────────────┐ │     │ ┌─────────────┐  ┌─────────────┐  ┌─────────────────┐   │
│ │ ZK Face      │ │────▶│ │ Proof       │  │ BlockDAG    │  │ Optimization    │   │
│ │ Proof Gen    │ │     │ │ Adaptation  │  │ Compatibility│  │ Engine          │   │
│ └──────────────┘ │     │ └─────────────┘  └─────────────┘  └─────────────────┘   │
└──────────────────┘     └──────────────────────────────────────────────────────────┘
                                    │
                                    ▼
                         ┌──────────────────────────────────────────────────────────┐
                         │                    API Layer                             │
                         │                                                          │
                         │ ┌─────────────┐  ┌─────────────┐  ┌─────────────────┐   │
                         │ │ Search      │  │ Lease       │  │ Decrypt         │   │
                         │ │ Endpoint    │  │ Endpoint    │  │ Endpoint        │   │
                         │ └─────────────┘  └─────────────┘  └─────────────────┘   │
                         └──────────────────────────────────────────────────────────┘
                                    │
                                    ▼
                         ┌──────────────────────────────────────────────────────────┐
                         │                 Storage Layer                             │
                         │                                                          │
                         │ ┌─────────────┐  ┌─────────────┐  ┌─────────────────┐   │
                         │ │ IPFS Node   │  │ Metadata    │  │ Indexing        │   │
                         │ │ Setup       │  │ Schema      │  │ System          │   │
                         │ └─────────────┘  └─────────────┘  └─────────────────┘   │
                         └──────────────────────────────────────────────────────────┘
```

---
