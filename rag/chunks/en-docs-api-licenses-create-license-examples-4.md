---
id: "en-docs-api-licenses-create-license-examples-4"
title: "Create License — Examples"
sourcePath: "docs/api/licenses/create-license.md"
locale: "en"
category: "api"
tags:
  - "api"
endpoint: "/api/licenses"
sourceAnchor: "Examples"
---

# Create License
**API path(s):** /api/licenses

Create a new license for a user or organization.

## Examples

createLicense();
?>
```

```rust
use reqwest;
use serde_json::{json, Value};

#[tokio::main]
async fn create_license() -> Result> {
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
    
    // Then create a license
    let license_url = "https://api.zelf.world/api/licenses";
    let license_data = json!({
        "userId": "user_123",
        "licenseType": "personal",
        "domain": "zelf",
        "duration": 1,
        "features": ["basic_wallet", "face_auth"],
        "price": 24,
        "notes": "Personal license for new user",
        "autoRenew": false
    });
    
    let license_response = client
        .post(license_url)
        .header("Content-Type", "application/json")
        .header("Origin", "https://test.example.com")
        .header("Authorization", format!("Bearer {}", token))
        .json(&license_data)
        .send()
        .await?;
    
    let license_result: Value = license_response.json().await?;
    println!("License created: {}", serde_json::to_string_pretty(&license_result)?);
    
    Ok(())
}
```
