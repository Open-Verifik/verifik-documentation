---
id: "es-docs-es-api-etiquetas-vista-previa-etiqueta-ejemplos-6"
title: "Vista Previa de Etiqueta — Ejemplos"
sourcePath: "docs-es/api/etiquetas/vista-previa-etiqueta.md"
locale: "es"
category: "api"
tags:
  - "api"
endpoints:
  - "/api/sessions"
  - "/api/tags/preview"
sourceAnchor: "Ejemplos"
---

# Vista Previa de Etiqueta
**API path(s):** /api/sessions, /api/tags/preview

Previsualizar una etiqueta para ver si existe o verificar información de precios antes de alquilarla.

## Ejemplos

#[tokio::main]
async fn main() -> Result> {
    let client = reqwest::Client::new();
    
    // Primero crear una sesión
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
    
    // Luego previsualizar la etiqueta
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
