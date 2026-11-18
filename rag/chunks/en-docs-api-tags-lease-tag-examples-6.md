---
id: "en-docs-api-tags-lease-tag-examples-6"
title: "Lease Tag — Examples"
sourcePath: "docs/api/tags/lease-tag.md"
locale: "en"
category: "api"
tags:
  - "api"
endpoint: "/api/tags/lease"
sourceAnchor: "Examples"
---

# Lease Tag
**API path(s):** /api/tags/lease

Lease a tag for any supported domain name (Zelf, Avax, BDAG, or other licensed domains).

## Examples

```rust
use reqwest;
use serde_json::{json, Value};
use std::collections::HashMap;

#[tokio::main]
async fn lease_tag() -> Result> {
    let client = reqwest::Client::new();
    
    // First, create a session
    let session_url = "https://api.zelf.world/api/sessions";
    let session_data = json!({
        "identifier": "test_session_123",
        "type": "createWallet",
        "isWebExtension": false
    });
    
    let session_response = client
        .post(session_url)
        .header("Content-Type", "application/json")
        .header("Origin", "https://test.example.com")
        .json(&session_data)
        .send()
        .await?;
    
    let session_result: Value = session_response.json().await?;
    let token = session_result["data"]["token"].as_str().unwrap();
    
    // Then lease the tag
    let lease_url = "https://api.zelf.world/api/tags/lease";
        let lease_data = json!({
            "tagName": "myname",
            "domain": "zelf",
            "faceBase64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...",
            "type": "create",
            "os": "DESKTOP",
            "captchaToken": "optional_captcha_token"
        });
    
    let lease_response = client
        .post(lease_url)
        .header("Content-Type", "application/json")
        .header("Origin", "https://test.example.com")
        .header("Authorization", format!("Bearer {}", token))
        .json(&lease_data)
        .send()
        .await?;
    
    let lease_result: Value = lease_response.json().await?;
    println!("Lease successful: {}", serde_json::to_string_pretty(&lease_result)?);
    
    Ok(())
}
```
