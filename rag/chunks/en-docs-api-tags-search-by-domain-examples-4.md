---
id: "en-docs-api-tags-search-by-domain-examples-4"
title: "Search Tags by Domain — Examples"
sourcePath: "docs/api/tags/search-by-domain.md"
locale: "en"
category: "api"
tags:
  - "api"
endpoint: "/api/tags/search-by-domain"
sourceAnchor: "Examples"
---

# Search Tags by Domain
**API path(s):** /api/tags/search-by-domain

Search for all tags within a specific domain and storage system.

## Examples

#[tokio::main]
async fn main() -> Result> {
    let client = reqwest::Client::new();
    
    // First create a session
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
    
    // Then search tags by domain
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
    
    println!("Found {} tags in zelf domain", tags.len());
    for tag in tags {
        let name = tag["name"].as_str().unwrap();
        let eth_address = tag["publicData"]["ethAddress"].as_str().unwrap();
        println!("- {}: {}", name, eth_address);
    }
    
    Ok(())
}
```
