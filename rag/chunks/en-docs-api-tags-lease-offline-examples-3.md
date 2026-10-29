---
id: "en-docs-api-tags-lease-offline-examples-3"
title: "Lease Tag Offline — Examples"
sourcePath: "docs/api/tags/lease-offline.md"
locale: "en"
category: "api"
tags:
  - "api"
endpoint: "/api/tags/lease-offline"
sourceAnchor: "Examples"
---

# Lease Tag Offline
**API path(s):** /api/tags/lease-offline

Lease a tag for offline usage with ZelfProof data.

## Examples

#[tokio::main]
async fn main() -> Result> {
    let client = reqwest::Client::new();
    
    // Create session
    let session_response = client
        .post("https://api.zelf.world/api/sessions")
        .header("Content-Type", "application/json")
        .header("Origin", "https://yourdomain.com")
        .json(&json!({
            "identifier": "my-session-id",
            "type": "createWallet",
            "isWebExtension": false
        }))
        .send()
        .await?;
    
    let session_data: Value = session_response.json().await?;
    let auth_token = session_data["data"]["token"].as_str().unwrap();
    
    // Lease tag offline
    let response = client
        .post("https://api.zelf.world/api/tags/lease-offline")
        .header("Content-Type", "application/json")
        .header("Authorization", format!("Bearer {}", auth_token))
        .header("Origin", "https://yourdomain.com")
        .json(&json!({
            "tagName": "mytag.zelf",
            "domain": "zelf",
            "zelfProofQRCode": "data:image/png;base64,[QR_CODE_BASE64_DATA]"
        }))
        .send()
        .await?;
    
    let result: Value = response.json().await?;
    println!("{}", serde_json::to_string_pretty(&result)?);
    
    Ok(())
}
```
