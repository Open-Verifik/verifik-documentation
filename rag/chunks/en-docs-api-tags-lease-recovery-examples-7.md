---
id: "en-docs-api-tags-lease-recovery-examples-7"
title: "Lease Recovery — Examples"
sourcePath: "docs/api/tags/lease-recovery.md"
locale: "en"
category: "api"
tags:
  - "api"
endpoint: "/api/tags/lease-recovery"
sourceAnchor: "Examples"
---

# Lease Recovery
**API path(s):** /api/tags/lease-recovery

Recover a tag using an existing ZelfProof from a previously leased tag. This endpoint allows you to create a new tag with the same wallet data from a previous tag.

## Examples

```php
 'test_session_123',
        'type' => 'createWallet',
        'isWebExtension' => false
    ];
    
    $sessionOptions = [
        'http' => [
            'header' => "Content-Type: application/json\r\nOrigin: https://test.example.com\r\n",
            'method' => 'POST',
            'content' => json_encode($sessionData)
        ]
    ];
    
    $sessionContext = stream_context_create($sessionOptions);
    $sessionResponse = file_get_contents($sessionUrl, false, $sessionContext);
    $sessionResult = json_decode($sessionResponse, true);
    $token = $sessionResult['data']['token'];
    
    // Then recover the tag
    $recoveryUrl = 'https://api.zelf.world/api/tags/lease-recovery';
    $recoveryData = [
        'zelfProof' => 'your_existing_zelfproof_data',
        'tagName' => 'mynewtag',
        'domain' => 'zelf',
        'faceBase64' => 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...',
        'password' => 'your_password',
        'os' => 'DESKTOP',
        'removePGP' => true,
        'captchaToken' => 'optional_captcha_token'
    ];
    
    $recoveryOptions = [
        'http' => [
            'header' => "Content-Type: application/json\r\nOrigin: https://test.example.com\r\nAuthorization: Bearer $token\r\n",
            'method' => 'POST',
            'content' => json_encode($recoveryData)
        ]
    ];
    
    $recoveryContext = stream_context_create($recoveryOptions);
    $recoveryResponse = file_get_contents($recoveryUrl, false, $recoveryContext);
    $recoveryResult = json_decode($recoveryResponse, true);
    
    echo "Recovery successful: " . json_encode($recoveryResult, JSON_PRETTY_PRINT);
}

recoverTag();
?>
```

```rust
use reqwest;
use serde_json::{json, Value};

#[tokio::main]
async fn recover_tag() -> Result> {
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
    
    // Then recover the tag
    let recovery_url = "https://api.zelf.world/api/tags/lease-recovery";
    let recovery_data = json!({
        "zelfProof": "your_existing_zelfproof_data",
        "tagName": "mynewtag",
        "domain": "zelf",
        "faceBase64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...",
        "password": "your_password",
        "os": "DESKTOP",
        "removePGP": true,
        "captchaToken": "optional_captcha_token"
    });
    
    let recovery_response = client
        .post(recovery_url)
        .header("Content-Type", "application/json")
        .header("Origin", "https://test.example.com")
        .header("Authorization", format!("Bearer {}", token))
        .json(&recovery_data)
        .send()
        .await?;
    
    let recovery_result: Value = recovery_response.json().await?;
    println!("Recovery successful: {}", serde_json::to_string_pretty(&recovery_result)?);
    
    Ok(())
}
```
