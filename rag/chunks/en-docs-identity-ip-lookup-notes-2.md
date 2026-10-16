---
id: "en-docs-identity-ip-lookup-notes-2"
title: "🌐 IP Geolocation Lookup — Notes"
sourcePath: "docs/identity/ip-lookup.mdx"
locale: "en"
category: "identity"
tags:
  - "ip-lookup"
  - "identity"
endpoint: "/v2/ip-lookup"
sourceAnchor: "Notes"
slug: "/identity/ip-lookup"
url: "https://docs.verifik.co/identity/ip-lookup"
---

# 🌐 IP Geolocation Lookup
**API path(s):** /v2/ip-lookup

## Notes

- **Sandbox mode:** `8.8.8.8` returns a fixed US demo row; `192.168.100.1`–`192.168.100.10` return Colombia fixtures; `192.168.100.99` returns **404**.
- Upstream **availability** may vary; outages can return **5xx** errors.
- Treat results as **network / location** signals under your privacy and fraud policies.
