---
id: "en-docs-api-tags-preview-tag-examples-6"
title: "Preview Tag — Examples"
sourcePath: "docs/api/tags/preview-tag.md"
locale: "en"
category: "api"
tags:
  - "api"
endpoints:
  - "/api/sessions"
  - "/api/tags/preview"
sourceAnchor: "Examples"
---

# Preview Tag
**API path(s):** /api/sessions, /api/tags/preview

Preview a tag to see if it exists or check pricing information before leasing it.

## Examples

#[tokio::main]
async fn main() -> Result> {
    let client = reqwest::Client::new();
    
    // First create a session
    let session_url = "https://api.zelf.world/api/sessions";
    let session_data = json!({
        "identifier": "preview_session_123",
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
    
    // Then preview the tag
    let preview_url = "https://api.zelf.world/api/tags/preview";
    let preview_response = client
        .get(preview_url)
        .query(&[
            ("tagName", "myname"),
            ("domain", "zelf"),
            ("os", "DESKTOP")
        ])
        .header("Origin", "https://test.example.com")
        .header("Authorization", format!("Bearer {}", token))
        .send()
        .await?;
    
    let preview_result: Value = preview_response.json().await?;
    println!("{}", serde_json::to_string_pretty(&preview_result)?);
    
    Ok(())
}
```
