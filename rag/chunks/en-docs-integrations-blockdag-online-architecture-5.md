---
id: "en-docs-integrations-blockdag-online-architecture-5"
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

#### System Flow Diagram

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                                ONLINE ARCHITECTURE                                  │
└─────────────────────────────────────────────────────────────────────────────────────┘

┌──────────────────┐     ┌──────────────────────────────────────────────────────────┐
│   User Device    │     │                 Zelf Backend (Docker)                   │
│                  │     │                                                          │
│ ┌──────────────┐ │     │ ┌─────────────┐  ┌─────────────┐  ┌─────────────────┐   │
│ │   Camera     │ │────▶│ │   API       │  │ Encryption  │  │   Storage       │   │
│ │   Capture    │ │     │ │  Gateway    │  │   Engine    │  │   Controller    │   │
│ └──────────────┘ │     │ └─────────────┘  └─────────────┘  └─────────────────┘   │
│                  │     │        │               │                    │           │
│ ┌──────────────┐ │     │        ▼               ▼                    ▼           │
│ │  Encrypted   │ │◄────│ ┌─────────────┐  ┌─────────────┐  ┌─────────────────┐   │
│ │  ZelfProof   │ │     │ │ Validation  │  │ ZK Proof    │  │ IPFS/Arweave   │   │
│ │  Response    │ │     │ │ Middleware  │  │ Generator   │  │ Integration     │   │
│ └──────────────┘ │     │ └─────────────┘  └─────────────┘  └─────────────────┘   │
└──────────────────┘     └──────────────────────────────────────────────────────────┘
                                            │
                                            ▼
                         ┌──────────────────────────────────────────────────────────┐
                         │               External Storage                           │
                         │                                                          │
                         │ ┌─────────────┐        ┌─────────────────────────────┐   │
                         │ │    IPFS     │        │         Arweave             │   │
                         │ │  Network    │◄──────▶│        Network              │   │
                         │ └─────────────┘        └─────────────────────────────┘   │
                         └──────────────────────────────────────────────────────────┘
```

#### Component Details

**1. User Device Layer**

* **Camera Capture**: Face detection and image processing
* **Local Validation**: Basic image quality checks
* **Response Handling**: Receives ZelfProof from backend

**2. Zelf Backend (Docker Container)**

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                            DOCKER CONTAINER                                         │
│                                                                                     │
│  ┌─────────────────┐    ┌─────────────────┐    ┌─────────────────────────────────┐  │
│  │   API Gateway   │    │  Core Services  │    │     Storage Layer               │  │
│  │                 │    │                 │    │                                 │  │
│  │ • Rate Limiting │    │ • Face Proc.    │    │ • IPFS Client                   │  │
│  │ • Auth Control  │    │ • ZK Proof Gen  │    │ • Arweave Client                │  │
│  │ • Input Valid.  │    │ • Encryption    │    │ • Metadata Index                │  │
│  │ • Response      │    │ • Name Service  │    │ • Backup Systems                │  │
│  │   Format        │    │ • Wallet Gen    │    │                                 │  │
│  └─────────────────┘    └─────────────────┘    └─────────────────────────────────┘  │
│           │                       │                          │                      │
│           └───────────────────────┼──────────────────────────┘                      │
│                                   │                                                 │
│  ┌─────────────────────────────────┼─────────────────────────────────────────────┐  │
│  │                     Message Queue / Event Bus                                 │  │
│  └─────────────────────────────────────────────────────────────────────────────--┘  │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

**3. External Storage**

* **IPFS Network**: Distributed storage for encrypted proofs
* **Arweave Network**: Permanent archival storage
* **Redundancy**: Cross-platform replication

#### API Endpoints (Online Mode)

```javascript
// Complete name service workflow
POST /zelf-name-service/v2/lease
{
  "zelfName": "john.blockdag",
  "faceBase64": "encrypted_face_data",
  "type": "create",
  "duration": "1",
  "password": "optional_password"
}
