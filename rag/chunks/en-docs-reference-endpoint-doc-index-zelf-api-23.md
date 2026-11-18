---
id: "en-docs-reference-endpoint-doc-index-zelf-api-23"
title: "Endpoint URL → Doc page (Reference) — Zelf / API"
sourcePath: "docs/reference/endpoint-doc-index.md"
locale: "en"
category: "reference"
tags:
  - "app-logins"
  - "app-registrations"
  - "ar"
  - "auth"
  - "biometric-validations"
  - "bo"
  - "br"
  - "ca"
  - "check-lists"
  - "cl"
  - "clients"
  - "co"
  - "cr"
  - "dea"
  - "do"
  - "document-validations"
  - "ec"
  - "email-validations"
  - "es"
  - "europol"
  - "face-recognition"
  - "fbi"
  - "gt"
  - "hn"
  - "human-id"
  - "in"
  - "interpol"
  - "ip-lookup"
  - "look-ups"
  - "mx"
  - "ocr"
  - "ofac"
  - "onu"
  - "pa"
  - "passport"
  - "pe"
  - "phone-validations"
  - "project-flows"
  - "projects"
  - "py"
  - "sv"
  - "usa"
  - "uy"
  - "ve"
  - "reference"
endpoints:
  - "/v2/ar/buenos-aires/technical-inspection"
  - "/v2/ar/buenos-aires/traffic-infractions"
  - "/v2/ar/cedula"
  - "/v2/ar/company"
  - "/v2/ar/dnrec/antecedentes"
sourceAnchor: "Zelf / API"
slug: "/reference/endpoint-doc-index"
url: "https://docs.verifik.co/reference/endpoint-doc-index"
---

# Endpoint URL → Doc page (Reference)
**API path(s):** /v2/ar/buenos-aires/technical-inspection, /v2/ar/buenos-aires/traffic-infractions, /v2/ar/cedula, /v2/ar/company, /v2/ar/dnrec/antecedentes

This page lists every Verifik API endpoint that has a canonical doc page (228 entries),
grouped by country or topic. Use it when you have a raw URL fragment (e.g. `v2/co/cedula`) and want to jump to the documentation.
If the search bar didn't find your endpoint, this page lists every API path along with whitespace-tokenized aliases so it shows up regardless of how you typed the URL.
_Last regenerated: 2026-09-19T03:58:12.647Z_

## Zelf / API

| Endpoint | Aliases | Page |
| --- | --- | --- |
| `api/clients` | api clients api.verifik.co/api/clients https://api.verifik.co/api/clients GET api/clients GET /api/clients | [create-account](/api/accounts/create-account) |
| `api/clients/{id}` | api/clients /api/clients api clients | [delete-account](/api/accounts/delete-account) |
| `api/clients/auth` | api clients auth clients/auth /clients/auth api.verifik.co/api/clients/auth https://api.verifik.co/api/clients/auth GET api/clients/auth GET /api/clients/auth | [authenticate](/api/accounts/authenticate) |
| `api/clients/sync` | api clients sync clients/sync /clients/sync api.verifik.co/api/clients/sync https://api.verifik.co/api/clients/sync GET api/clients/sync GET /api/clients/sync | [update-account](/api/accounts/update-account) |
| `api/clients/sync/password` | api clients sync password clients/sync/password /clients/sync/password sync/password /sync/password api.verifik.co/api/clients/sync/password https://api.verifik.co/api/clients/sync/password GET api/clients/sync/password GET /api/clients/sync/password | [change-password](/api/accounts/change-password) |
| `api/licenses` | api licenses api.verifik.co/api/licenses https://api.verifik.co/api/licenses GET api/licenses GET /api/licenses | [create-license](/api/licenses/create-license) |
| `api/licenses/{licenseid}` | api/licenses /api/licenses api licenses | [delete-license](/api/licenses/delete-license) |
| `api/licenses/my-license` | api licenses my-license licenses/my-license /licenses/my-license api.verifik.co/api/licenses/my-license https://api.verifik.co/api/licenses/my-license GET api/licenses/my-license GET /api/licenses/my-license | [get-my-license](/api/licenses/get-my-license) |
| `api/tags/decrypt` | api tags decrypt tags/decrypt /tags/decrypt api.verifik.co/api/tags/decrypt https://api.verifik.co/api/tags/decrypt GET api/tags/decrypt GET /api/tags/decrypt | [decrypt-tag](/api/tags/decrypt-tag) |
| `api/tags/lease` | api tags lease tags/lease /tags/lease api.verifik.co/api/tags/lease https://api.verifik.co/api/tags/lease GET api/tags/lease GET /api/tags/lease | [lease-tag](/api/tags/lease-tag) |
| `api/tags/lease-offline` | api tags lease-offline tags/lease-offline /tags/lease-offline api.verifik.co/api/tags/lease-offline https://api.verifik.co/api/tags/lease-offline GET api/tags/lease-offline GET /api/tags/lease-offline | [lease-offline](/api/tags/lease-offline) |
| `api/tags/lease-recovery` | api tags lease-recovery tags/lease-recovery /tags/lease-recovery api.verifik.co/api/tags/lease-recovery https://api.verifik.co/api/tags/lease-recovery GET api/tags/lease-recovery GET /api/tags/lease-recovery | [lease-recovery](/api/tags/lease-recovery) |
| `api/tags/preview` | api tags preview tags/preview /tags/preview api.verifik.co/api/tags/preview https://api.verifik.co/api/tags/preview GET api/tags/preview GET /api/tags/preview | [preview-tag](/api/tags/preview-tag) |
| `api/tags/preview-zelfproof` | api tags preview-zelfproof tags/preview-zelfproof /tags/preview-zelfproof api.verifik.co/api/tags/preview-zelfproof https://api.verifik.co/api/tags/preview-zelfproof GET api/tags/preview-zelfproof GET /api/tags/preview-zelfproof | [preview-zelfproof](/api/tags/preview-zelfproof) |
| `api/tags/search` | api tags search tags/search /tags/search api.verifik.co/api/tags/search https://api.verifik.co/api/tags/search GET api/tags/search GET /api/tags/search | [search-tag](/api/tags/search-tag) |
| `api/tags/search-by-domain` | api tags search-by-domain tags/search-by-domain /tags/search-by-domain api.verifik.co/api/tags/search-by-domain https://api.verifik.co/api/tags/search-by-domain GET api/tags/search-by-domain GET /api/tags/search-by-domain | [search-by-domain](/api/tags/search-by-domain) |
| `api/zelf-proof/decrypt` | api zelf-proof decrypt zelf-proof/decrypt /zelf-proof/decrypt api.verifik.co/api/zelf-proof/decrypt https://api.verifik.co/api/zelf-proof/decrypt GET api/zelf-proof/decrypt GET /api/zelf-proof/decrypt | [decrypt-zelfproof](/functions/decrypt-zelfproof) |
| `api/zelf-proof/encrypt` | api zelf-proof encrypt zelf-proof/encrypt /zelf-proof/encrypt api.verifik.co/api/zelf-proof/encrypt https://api.verifik.co/api/zelf-proof/encrypt GET api/zelf-proof/encrypt GET /api/zelf-proof/encrypt | [create-qr-zelfproof](/functions/create-qr-zelfproof) |
