---
id: "es-docs-es-api-etiquetas-buscar-etiqueta-por-dominio-ejemplos-4"
title: "Buscar Etiquetas por Dominio — Ejemplos"
sourcePath: "docs-es/api/etiquetas/buscar-etiqueta-por-dominio.md"
locale: "es"
category: "api"
tags:
  - "api"
sourceAnchor: "Ejemplos"
---

# Buscar Etiquetas por Dominio

Buscar todas las etiquetas dentro de un dominio específico y sistema de almacenamiento.

## Ejemplos

#[tokio::main]
async fn main() -> Result> {
    let client = reqwest::Client::new();
    
    // Primero crear una sesión
    let session_url = "https://api.zelf.world/api/sessions";
    let session_data = json!({
        "identifier": "search_domain_session_123",
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
    
    // Luego buscar etiquetas por dominio
    let search_url = "https://api.zelf.world/api/tags/search-by-domain";
    let search_response = client
        .get(search_url)
        .query(&[
            ("domain", "zelf"),
            ("storage", "IPFS")
        ])
        .header("Origin", "https://test.example.com")
        .header("Authorization", format!("Bearer {}", token))
        .send()
        .await?;
    
    let search_result: Value = search_response.json().await?;
    let tags = search_result["data"].as_array().unwrap();
    
    println!("Encontradas {} etiquetas en el dominio zelf", tags.len());
    for tag in tags {
        let name = tag["name"].as_str().unwrap();
        let eth_address = tag["publicData"]["ethAddress"].as_str().unwrap();
        println!("- {}: {}", name, eth_address);
    }
    
    Ok(())
}
```
