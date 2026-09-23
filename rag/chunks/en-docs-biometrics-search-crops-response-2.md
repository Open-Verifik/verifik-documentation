---
id: "en-docs-biometrics-search-crops-response-2"
title: "Face Search 1:N (Crops) — Response"
sourcePath: "docs/biometrics/search-crops.mdx"
locale: "en"
category: "biometrics"
tags:
  - "biometrics"
  - "face-recognition"
endpoints:
  - "/v2/face-recognition/search"
  - "/v2/face-recognition/search/crops"
sourceAnchor: "Response"
slug: "/biometrics/search-crops"
url: "https://docs.verifik.co/biometrics/search-crops"
---

# Face Search 1:N (Crops)
**API path(s):** /v2/face-recognition/search, /v2/face-recognition/search/crops

## Response

Shape matches [Face Search (1:N)](/biometrics/search): `data` is an array of candidate persons ranked by similarity.

  

```json
{
  "id": "SC01",
  "data": [
    {
      "id": "person_id",
      "name": "John Doe",
      "score": 0.91,
      "thumbnails": [{ "id": "thumb_id", "thumbnail": "" }]
    }
  ],
  "signature": {
    "message": "Certified by Verifik.co",
    "dateTime": "January 16, 2024 3:44 PM"
  }
}
```

  
  

```json
{
  "message": "Authentication required",
  "code": "UNAUTHORIZED"
}
```

  
  

```json
{
  "message": "token_expired",
  "code": "FORBIDDEN"
}
```

  
  

```json
{
  "message": "\"min_score\" is required",
  "code": "MissingParameter"
}
```

  
  

```json
{
  "message": "internal_error",
  "code": "ERROR"
}
```

### Notes

- Prefer **tight face crops**; this path is tuned for small regions (often around **120×120** or similar). Very large full-frame images are a better fit for [`/v2/face-recognition/search`](/biometrics/search).
- Each string in `images` may be raw base64 or an **HTTPS URL** to an image; URLs are fetched and converted server-side.
- Use `ACCURATE` when you need higher precision; use `FAST` for lower latency.

### Related documentation

1. **[Face Search (1:N)](/biometrics/search)** — Standard gallery search with full face images; `min_score` allows **0.2–1**.
2. **[Face Search 1:N (Live)](/biometrics/search-live-face)** — Liveness on the probe image, then 1:N search.
3. **[Face Search 1:N (Active User)](/biometrics/search-active-user)** — 1:N search for active-session flows without liveness on the probe.
4. **[Verify Face (1:1)](/biometrics/verify-face)** — Match crops or images against a **known** enrolled person id.
5. **[Face Detection](/verifik-biometrics-apis/liveness/face-detection)** — Detect faces in an image to obtain crops before calling search.
6. **[List all persons](/resources/list-all-persons)** — Inspect enrolled persons and metadata for your client.
