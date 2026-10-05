---
id: "es-docs-es-api-licencias-obtener-licencias-ejemplos-4"
title: "Obtener Licencias — Ejemplos"
sourcePath: "docs-es/api/licencias/obtener-licencias.md"
locale: "es"
category: "api"
tags:
  - "api"
sourceAnchor: "Ejemplos"
---

# Obtener Licencias

Obtener una lista de todas las licencias disponibles en el sistema.

## Ejemplos

#[tokio::main]
async fn get_licenses() -> Result> {
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
    
    // Luego obtener las licencias
    let licenses_url = "https://api.zelf.world/api/licenses";
    let params = [
        ("page", "1"),
        ("limit", "10"),
        ("domain", "zelf"),
        ("status", "active")
    ];
    
    let licenses_response = client
        .get(licenses_url)
        .query(&params)
        .header("Content-Type", "application/json")
        .header("Origin", "https://test.example.com")
        .header("Authorization", format!("Bearer {}", token))
        .send()
        .await?;
    
    let licenses_result: Value = licenses_response.json().await?;
    println!("Licencias: {}", serde_json::to_string_pretty(&licenses_result)?);
    
    Ok(())
}
```
