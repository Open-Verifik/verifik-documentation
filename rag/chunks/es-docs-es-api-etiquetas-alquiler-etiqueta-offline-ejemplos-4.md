---
id: "es-docs-es-api-etiquetas-alquiler-etiqueta-offline-ejemplos-4"
title: "Alquilar Etiqueta Offline — Ejemplos"
sourcePath: "docs-es/api/etiquetas/alquiler-etiqueta-offline.md"
locale: "es"
category: "api"
tags:
  - "api"
endpoints:
  - "/api/sessions"
  - "/api/tags/lease-offline"
sourceAnchor: "Ejemplos"
---

# Alquilar Etiqueta Offline
**API path(s):** /api/sessions, /api/tags/lease-offline

Alquilar una etiqueta para uso offline con datos ZelfProof.

## Ejemplos

#[tokio::main]
async fn main() -> Result> {
    let client = reqwest::Client::new();
    
    // Crear sesión
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
    
    // Alquilar etiqueta offline
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
