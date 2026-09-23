---
id: "en-docs-api-licenses-delete-license-examples-4"
title: "Delete License — Examples"
sourcePath: "docs/api/licenses/delete-license.md"
locale: "en"
category: "api"
tags:
  - "api"
endpoints:
  - "/api/licenses/{licenseid}"
  - "/api/sessions"
sourceAnchor: "Examples"
---

# Delete License
**API path(s):** /api/licenses/{licenseid}, /api/sessions

Delete an existing license from the system.

## Examples

#[tokio::main]
async fn delete_license() -> Result> {
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
    
    // Then delete a license
    let license_url = "https://api.zelf.world/api/licenses/license_123";
    let params = [
        ("reason", "User requested cancellation"),
        ("notifyUser", "true")
    ];
    
    let license_response = client
        .delete(license_url)
        .query(&params)
        .header("Content-Type", "application/json")
        .header("Origin", "https://test.example.com")
        .header("Authorization", format!("Bearer {}", token))
        .send()
        .await?;
    
    let license_result: Value = license_response.json().await?;
    println!("License deleted: {}", serde_json::to_string_pretty(&license_result)?);
    
    Ok(())
}
```
