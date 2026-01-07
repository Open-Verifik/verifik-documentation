---
sidebar_position: 3
---

# BlockDAG Milestone 1: Foundation

## Overview

**Duration**: Weeks 1-4

**Deadline**: September 30th, 2025

**Phase**: Foundation  

**Focus**: Core infrastructure and basic integration setup

This milestone establishes the fundamental technical foundation for the BlockDAG x Zelf integration, focusing on core encryption integration, API development, and ZK Face Proof adaptation.

---

## Deliverables

### 1. BlockDAG Wallet Integration

**Objective**: Generate native BlockDAG addresses and establish wallet compatibility

**Tasks**:
- [x] Research BlockDAG address format and generation methods
- [x] Implement BlockDAG-compatible wallet generation in Zelf SDK
- [x] Create BlockDAG address validation functions
- [x] Test wallet generation across different BlockDAG network configurations
- [ ] Document wallet generation API endpoints

**Acceptance Criteria**:
- Successfully generate valid BlockDAG addresses
- Address format validation working correctly
- Integration with BlockDAG testnet functional
- Documentation complete for wallet generation

**Estimated Effort**: 2 weeks

---

### 2. Core API Development

**Objective**: Build essential API endpoints for name service operations with multi domain support (.blockdag | .bdag)

**Tasks**:
- [ ] Design API architecture for BlockDAG name service
- [ ] Implement Lease endpoint
- [ ] Implement Lease Offline endpoint
- [ ] Implement Search by specific .blockdag TAG endpoint
- [ ] Implement Search all the .blockdag tag registrations endpoint
- [ ] Implement the Decryption endpoint
- [ ] Implement the Preview ZelfProof endpoint
- [ ] Implement the Preview .blockdag tag endpoint
- [ ] Implement the purchase of tag domains with crypto > first with Coinbase commerce
- [ ] Create API documentation and examples with open source Docusaurus (markdown files)

**Acceptance Criteria**:
- All three core endpoints functional
- Proper error handling and validation
- Rate limiting implemented
- API documentation complete
- Unit tests passing

**Estimated Effort**: 2 weeks

---

### 3. ZK Face Proof Adaptation

**Objective**: Optimize ZK Face Proof technology for BlockDAG ecosystem

**Tasks**:
- [ ] Analyze BlockDAG-specific requirements for ZK proofs
- [ ] Adapt existing ZK Face Proof algorithms for BlockDAG
- [ ] Optimize proof generation for BlockDAG transaction compatibility
- [ ] Test proof verification with BlockDAG addresses
- [ ] Benchmark performance improvements
- [ ] Update ZK proof documentation

**Technical Requirements**:
- Proof size optimization for BlockDAG transactions
- Compatibility with BlockDAG's cryptographic standards
- Performance benchmarks vs current implementation
- Security audit of adapted algorithms

**Acceptance Criteria**:
- ZK Face Proofs generate correctly for BlockDAG addresses
- Proof verification time &lt;200ms
- Proof size optimized for BlockDAG transactions
- Security audit completed
- Performance benchmarks documented

**Estimated Effort**: 1.5 weeks

---

### 4. IPFS Storage Setup

**Objective**: Configure distributed storage for BlockDAG name metadata

**Tasks**:
- [ ] Set up IPFS node for BlockDAG integration
- [ ] Design metadata schema for BlockDAG names
- [ ] Implement IPFS storage client for ZelfProofs
- [ ] Create metadata indexing system
- [ ] Test storage and retrieval performance
- [ ] Implement backup and redundancy systems


**Acceptance Criteria**:
- IPFS node operational and accessible
- Metadata schema finalized and documented
- Storage and retrieval working correctly
- Indexing system functional
- Backup systems tested and operational

**Estimated Effort**: 1 week

---

## Technical Architecture

### System Components

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

## Risk Mitigation

Nothing yet in this Milestone

### Technical Risks

Nothing yet in this Milestone

### Timeline Risks

---

## Deliverables Summary

| Deliverable | Duration | Effort | Priority |
|-------------|----------|--------|----------|
| BlockDAG Wallet Integration | 2 weeks | High | Critical |
| Core API Development | 2 weeks | High | Critical |
| ZK Face Proof Adaptation | 1 week | Medium | High |
| IPFS Storage Setup | 1 week | Medium | High |

**Total Estimated Duration**: 4 weeks  
**Total Team Effort**: 3 people

---

## Next Steps

Upon completion of Milestone 1, the foundation will be established for:

- **Milestone 2**: Name Service implementation with domain resolution
- **Milestone 3**: Advanced features including 2FA and DID framework
- **Milestone 4**: Production deployment and community tools

The foundation phase ensures all core technical components are working correctly before building advanced features on top of this infrastructure.
