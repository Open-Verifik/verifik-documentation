---
id: "es-docs-es-api-etiquetas-recuperar-etiqueta-ejemplos-7"
title: "Recuperación de una Etiqueta — Ejemplos"
sourcePath: "docs-es/api/etiquetas/recuperar-etiqueta.md"
locale: "es"
category: "api"
tags:
  - "api"
sourceAnchor: "Ejemplos"
---

# Recuperación de una Etiqueta

Recuperar una etiqueta usando un ZelfProof existente de una etiqueta previamente alquilada. Este endpoint te permite crear una nueva etiqueta con los mismos datos de wallet de una etiqueta anterior.

## Ejemplos

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
    
    // Luego recuperar la etiqueta
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
    
    echo "Recuperación exitosa: " . json_encode($recoveryResult, JSON_PRETTY_PRINT);
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
    
    // Primero, crear una sesión
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
    
    // Luego recuperar la etiqueta
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
    println!("Recuperación exitosa: {}", serde_json::to_string_pretty(&recovery_result)?);
    
    Ok(())
}
```
