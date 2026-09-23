---
id: "es-docs-es-api-etiquetas-alquilar-etiqueta-ejemplos-6"
title: "Alquilar Etiqueta — Ejemplos"
sourcePath: "docs-es/api/etiquetas/alquilar-etiqueta.md"
locale: "es"
category: "api"
tags:
  - "api"
endpoints:
  - "/api/sessions"
  - "/api/tags/lease"
sourceAnchor: "Ejemplos"
---

# Alquilar Etiqueta
**API path(s):** /api/sessions, /api/tags/lease

Alquilar una etiqueta para cualquier nombre de dominio soportado (Zelf, Avax, BDAG, u otros dominios licenciados).

## Ejemplos

leaseTag();
?>
```

```rust
use reqwest;
use serde_json::{json, Value};
use std::collections::HashMap;

#[tokio::main]
async fn lease_tag() -> Result> {
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
    
    // Luego alquilar la etiqueta
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
    println!("Alquiler exitoso: {}", serde_json::to_string_pretty(&lease_result)?);
    
    Ok(())
}
```
