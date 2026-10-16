---
id: "en-docs-integrations-blockdag-zelf-technical-architecture-online-vs-offline-systems-4"
title: "BlockDAG — Zelf Technical Architecture: Online vs Offline Systems"
sourcePath: "docs/integrations/blockdag.md"
locale: "en"
category: "integrations"
tags:
  - "integrations"
sourceAnchor: "Zelf Technical Architecture: Online vs Offline Systems"
---

# BlockDAG

## Zelf Technical Architecture: Online vs Offline Systems

### Overview

Zelf's biometric recovery system operates in two distinct architectural modes, each optimized for different use cases and security requirements:

1. **Online Architecture** - Full backend integration with all operations processed through Zelf servers or in-house servers. The biometric data goes to the node instance encrypted with PGP.
2. **Offline Architecture** - Local biometric processing with minimal backend interaction for storage authorization. The biometric data never leaves the device.

Both architectures maintain the core principle: **biometric data never gets stored**.

***
