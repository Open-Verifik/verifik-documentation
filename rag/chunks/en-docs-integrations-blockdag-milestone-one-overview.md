---
id: "en-docs-integrations-blockdag-milestone-one-overview"
title: "BlockDAG Milestone 1: Foundation — Overview"
sourcePath: "docs/integrations/blockdag-milestone-one.md"
locale: "en"
category: "integrations"
tags:
  - "integrations"
sourceAnchor: "Overview"
---

# BlockDAG Milestone 1: Foundation

## Overview

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
