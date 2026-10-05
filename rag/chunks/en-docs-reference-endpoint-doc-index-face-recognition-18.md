---
id: "en-docs-reference-endpoint-doc-index-face-recognition-18"
title: "Endpoint URL → Doc page (Reference) — Face Recognition"
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
sourceAnchor: "Face Recognition"
slug: "/reference/endpoint-doc-index"
url: "https://docs.verifik.co/reference/endpoint-doc-index"
---

# Endpoint URL → Doc page (Reference)
**API path(s):** /v2/ar/buenos-aires/technical-inspection, /v2/ar/buenos-aires/traffic-infractions, /v2/ar/cedula, /v2/ar/company, /v2/ar/dnrec/antecedentes

This page lists every Verifik API endpoint that has a canonical doc page (228 entries),
grouped by country or topic. Use it when you have a raw URL fragment (e.g. `v2/co/cedula`) and want to jump to the documentation.
If the search bar didn't find your endpoint, this page lists every API path along with whitespace-tokenized aliases so it shows up regardless of how you typed the URL.
_Last regenerated: 2026-09-19T03:58:12.647Z_

## Face Recognition

| Endpoint | Aliases | Page |
| --- | --- | --- |
| `v2/face-recognition/collections` | v2 face-recognition collections face-recognition/collections /face-recognition/collections api/face-recognition/collections /api/face-recognition/collections api face-recognition collections api.verifik.co/v2/face-recognition/collections https://api.verifik.co/v2/face-recognition/collections GET v2/face-recognition/collections GET /v2/face-recognition/collections | [Create a Collection](/resources/create-a-collection) |
| `v2/face-recognition/collections/{id}` | v2/face-recognition/collections /v2/face-recognition/collections v2 face-recognition collections face-recognition/collections /face-recognition/collections api/face-recognition/collections /api/face-recognition/collections api face-recognition collections | [Delete a Collection](/resources/delete-a-collection) |
| `v2/face-recognition/compare` | v2 face-recognition compare face-recognition/compare /face-recognition/compare api/face-recognition/compare /api/face-recognition/compare api face-recognition compare api.verifik.co/v2/face-recognition/compare https://api.verifik.co/v2/face-recognition/compare GET v2/face-recognition/compare GET /v2/face-recognition/compare | [Face Comparison](/biometrics/compare) |
| `v2/face-recognition/compare-live` | v2 face-recognition compare-live face-recognition/compare-live /face-recognition/compare-live api/face-recognition/compare-live /api/face-recognition/compare-live api face-recognition compare-live api.verifik.co/v2/face-recognition/compare-live https://api.verifik.co/v2/face-recognition/compare-live GET v2/face-recognition/compare-live GET /v2/face-recognition/compare-live | [Face Comparison (Live)](/biometrics/compare-live) |
| `v2/face-recognition/compare-with-liveness` | v2 face-recognition compare-with-liveness face-recognition/compare-with-liveness /face-recognition/compare-with-liveness api/face-recognition/compare-with-liveness /api/face-recognition/compare-with-liveness api face-recognition compare-with-liveness api.verifik.co/v2/face-recognition/compare-with-liveness https://api.verifik.co/v2/face-recognition/compare-with-liveness GET v2/face-recognition/compare-with-liveness GET /v2/face-recognition/compare-with-liveness | [Compare with Liveness (Sequential)](/biometrics/compare-with-liveness) |
| `v2/face-recognition/detect` | v2 face-recognition detect face-recognition/detect /face-recognition/detect api/face-recognition/detect /api/face-recognition/detect api face-recognition detect api.verifik.co/v2/face-recognition/detect https://api.verifik.co/v2/face-recognition/detect GET v2/face-recognition/detect GET /v2/face-recognition/detect | [Face Detection](/verifik-biometrics-apis/liveness/face-detection) |
| `v2/face-recognition/liveness` | v2 face-recognition liveness face-recognition/liveness /face-recognition/liveness api/face-recognition/liveness /api/face-recognition/liveness api face-recognition liveness api.verifik.co/v2/face-recognition/liveness https://api.verifik.co/v2/face-recognition/liveness GET v2/face-recognition/liveness GET /v2/face-recognition/liveness | [Liveness Detection](/biometrics/liveness) |
| `v2/face-recognition/liveness-score` | v2 face-recognition liveness-score face-recognition/liveness-score /face-recognition/liveness-score api/face-recognition/liveness-score /api/face-recognition/liveness-score api face-recognition liveness-score api.verifik.co/v2/face-recognition/liveness-score https://api.verifik.co/v2/face-recognition/liveness-score GET v2/face-recognition/liveness-score GET /v2/face-recognition/liveness-score | [Liveness Score](/biometrics/liveness-score) |
| `v2/face-recognition/persons` | v2 face-recognition persons face-recognition/persons /face-recognition/persons api/face-recognition/persons /api/face-recognition/persons api face-recognition persons api.verifik.co/v2/face-recognition/persons https://api.verifik.co/v2/face-recognition/persons GET v2/face-recognition/persons GET /v2/face-recognition/persons | [Create a Person](/resources/create-a-person) |
| `v2/face-recognition/persons/{id}` | v2/face-recognition/persons /v2/face-recognition/persons v2 face-recognition persons face-recognition/persons /face-recognition/persons api/face-recognition/persons /api/face-recognition/persons api face-recognition persons | [Delete a Person](/resources/persons/delete-a-person) |
| `v2/face-recognition/persons/lookup` | v2 face-recognition persons lookup face-recognition/persons/lookup /face-recognition/persons/lookup api/face-recognition/persons/lookup /api/face-recognition/persons/lookup api face-recognition persons lookup persons/lookup /persons/lookup api.verifik.co/v2/face-recognition/persons/lookup https://api.verifik.co/v2/face-recognition/persons/lookup GET v2/face-recognition/persons/lookup GET /v2/face-recognition/persons/lookup | [Lookup a Person by Name](/resources/lookup-a-person) |
| `v2/face-recognition/persons/search-live-face` | v2 face-recognition persons search-live-face face-recognition/persons/search-live-face /face-recognition/persons/search-live-face api/face-recognition/persons/search-live-face /api/face-recognition/persons/search-live-face api face-recognition persons search-live-face persons/search-live-face /persons/search-live-face api.verifik.co/v2/face-recognition/persons/search-live-face https://api.verifik.co/v2/face-recognition/persons/search-live-face GET v2/face-recognition/persons/search-live-face GET /v2/face-recognition/persons/search-live-face | [Create a Person with Liveness](/resources/create-a-person-with-liveness) |
| `v2/face-recognition/search` | v2 face-recognition search face-recognition/search /face-recognition/search api/face-recognition/search /api/face-recognition/search api face-recognition search api.verifik.co/v2/face-recognition/search https://api.verifik.co/v2/face-recognition/search GET v2/face-recognition/search GET /v2/face-recognition/search | ['Face Search (1:N)'](/biometrics/search) |
| `v2/face-recognition/search-active-user` | v2 face-recognition search-active-user face-recognition/search-active-user /face-recognition/search-active-user api/face-recognition/search-active-user /api/face-recognition/search-active-user api face-recognition search-active-user api.verifik.co/v2/face-recognition/search-active-user https://api.verifik.co/v2/face-recognition/search-active-user GET v2/face-recognition/search-active-user GET /v2/face-recognition/search-active-user | ['Face Search 1:N (Active User)'](/biometrics/search-active-user) |
| `v2/face-recognition/search-live-face` | v2 face-recognition search-live-face face-recognition/search-live-face /face-recognition/search-live-face api/face-recognition/search-live-face /api/face-recognition/search-live-face api face-recognition search-live-face api.verifik.co/v2/face-recognition/search-live-face https://api.verifik.co/v2/face-recognition/search-live-face GET v2/face-recognition/search-live-face GET /v2/face-recognition/search-live-face | ['Face Search 1:N (Live)'](/biometrics/search-live-face) |
| `v2/face-recognition/search/crops` | v2 face-recognition search crops face-recognition/search/crops /face-recognition/search/crops api/face-recognition/search/crops /api/face-recognition/search/crops api face-recognition search crops search/crops /search/crops api.verifik.co/v2/face-recognition/search/crops https://api.verifik.co/v2/face-recognition/search/crops GET v2/face-recognition/search/crops GET /v2/face-recognition/search/crops | ['Face Search 1:N (Crops)'](/biometrics/search-crops) |
| `v2/face-recognition/verify` | v2 face-recognition verify face-recognition/verify /face-recognition/verify api/face-recognition/verify /api/face-recognition/verify api face-recognition verify api.verifik.co/v2/face-recognition/verify https://api.verifik.co/v2/face-recognition/verify GET v2/face-recognition/verify GET /v2/face-recognition/verify | ['Verify Face (1:1 vs enrolled person)'](/biometrics/verify-face) |
