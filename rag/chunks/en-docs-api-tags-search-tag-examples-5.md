---
id: "en-docs-api-tags-search-tag-examples-5"
title: "Search Tag — Examples"
sourcePath: "docs/api/tags/search-tag.md"
locale: "en"
category: "api"
tags:
  - "api"
endpoint: "/api/tags/search"
sourceAnchor: "Examples"
---

# Search Tag
**API path(s):** /api/tags/search

Search for a tag across any supported domain name (Zelf, Avax, BDAG, or other licensed domains).

## Examples

```php
 'test_session_123',
            'type' => 'createWallet',
            'isWebExtension' => false
        ];
        
        $sessionResponse = http_request('POST', 'https://api.zelf.world/api/sessions', $sessionData);
        $token = $sessionResponse['data']['token'];
        
        // Then search for the tag
        $searchParams = [
            'tagName' => 'username.zelf',
            'domain' => 'zelf',
            'os' => 'DESKTOP',
            'duration' => 'lifetime'
        ];
        
        $searchUrl = 'https://api.zelf.world/api/tags/search?' . http_build_query($searchParams);
        $searchResponse = http_request('GET', $searchUrl, null, [
            'Origin: https://test.example.com',
            'Authorization: Bearer ' . $token
        ]);
        
        echo "Search result: " . json_encode($searchResponse, JSON_PRETTY_PRINT) . "\n";
        
        if ($searchResponse['data']['available']) {
            echo "Tag is available for lease at: " . $searchResponse['data']['price']['price'] . " USD\n";
        } else {
            echo "Tag is already taken: " . $searchResponse['data']['tagObject']['publicData']['zelfName'] . "\n";
        }
        
    } catch (Exception $e) {
        echo "Error: " . $e->getMessage() . "\n";
    }
}

function http_request($method, $url, $data = null, $headers = []) {
    $ch = curl_init();
    
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, $method);
    
    if ($data) {
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
    }
    
    $defaultHeaders = ['Content-Type: application/json'];
    curl_setopt($ch, CURLOPT_HTTPHEADER, array_merge($defaultHeaders, $headers));
    
    $response = curl_exec($ch);
    curl_close($ch);
    
    return json_decode($response, true);
}

searchTag();

?>
```

```rust
use reqwest;
use serde_json::{json, Value};
use std::collections::HashMap;

#[tokio::main]
async fn search_tag() -> Result> {
    // First, create a session
    let session_data = json!({
        "identifier": "test_session_123",
        "type": "createWallet",
        "isWebExtension": false
    });
    
    let client = reqwest::Client::new();
    let session_response = client
        .post("https://api.zelf.world/api/sessions")
        .json(&session_data)
        .header("Content-Type", "application/json")
        .header("Origin", "https://test.example.com")
        .send()
        .await?;
    
    let session_result: Value = session_response.json().await?;
    let token = session_result["data"]["token"].as_str().unwrap();
    
    // Then search for the tag
    let mut search_params = HashMap::new();
    search_params.insert("tagName", "username.zelf");
    search_params.insert("domain", "zelf");
    search_params.insert("os", "DESKTOP");
    search_params.insert("duration", "lifetime");
    
    let search_response = client
        .get("https://api.zelf.world/api/tags/search")
        .query(&search_params)
        .header("Origin", "https://test.example.com")
        .header("Authorization", format!("Bearer {}", token))
        .send()
        .await?;
    
    let result: Value = search_response.json().await?;
    println!("Search result: {}", serde_json::to_string_pretty(&result)?);
    
    if result["data"]["available"].as_bool().unwrap() {
        println!("Tag is available for lease at: {} USD", 
                result["data"]["price"]["price"].as_f64().unwrap());
    } else {
        println!("Tag is already taken: {}", 
                result["data"]["tagObject"]["publicData"]["zelfName"].as_str().unwrap());
    }
    
    Ok(())
}

// Add to Cargo.toml:
// [dependencies]
// reqwest = { version = "0.11", features = ["json"] }
// serde_json = "1.0"
// tokio = { version = "1.0", features = ["full"] }
```
