---
id: "en-docs-api-licenses-get-my-license-examples-4"
title: "Get My License — Examples"
sourcePath: "docs/api/licenses/get-my-license.md"
locale: "en"
category: "api"
tags:
  - "api"
endpoint: "/api/licenses/my-license"
sourceAnchor: "Examples"
---

# Get My License
**API path(s):** /api/licenses/my-license

Retrieve the current user's license information and status.

## Examples

#[tokio::main]
async fn get_my_license() -> Result> {
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
    
    // Then get my license
    let license_url = "https://api.zelf.world/api/licenses/my-license";
    let params = [
        ("includeUsage", "true"),
        ("includeHistory", "true")
    ];
    
    let license_response = client
        .get(license_url)
        .query(&params)
        .header("Content-Type", "application/json")
        .header("Origin", "https://test.example.com")
        .header("Authorization", format!("Bearer {}", token))
        .send()
        .await?;
    
    let license_result: Value = license_response.json().await?;
    println!("My License: {}", serde_json::to_string_pretty(&license_result)?);
    
    Ok(())
}
```
