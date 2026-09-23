---
id: "en-docs-api-tags-search-tag-response-2"
title: "Search Tag — Response"
sourcePath: "docs/api/tags/search-tag.md"
locale: "en"
category: "api"
tags:
  - "api"
endpoint: "/api/tags/search"
sourceAnchor: "Response"
---

# Search Tag
**API path(s):** /api/tags/search

Search for a tag across any supported domain name (Zelf, Avax, BDAG, or other licensed domains).

## Response

```json
{
  "data": {
    "ipfs": [
      {
        "id": "0ee38476-9465-4431-9448-af82ab8156a9",
        "url": "https://blush-selective-earwig-920.mypinata.cloud/ipfs/bafkreibv4c2j5covzbbzlldetlua7iubupz62sypgryel63xwyoua4qjte",
        "ipfs_pin_hash": "bafkreibv4c2j5covzbbzlldetlua7iubupz62sypgryel63xwyoua4qjte",
        "ipfsHash": "bafkreibv4c2j5covzbbzlldetlua7iubupz62sypgryel63xwyoua4qjte",
        "cid": "bafkreibv4c2j5covzbbzlldetlua7iubupz62sypgryel63xwyoua4qjte",
        "size": 20443,
        "date_pinned": "2025-04-11T15:25:31.984Z",
        "publicData": {
          "btcAddress": "18gM3C84vAeAYvy5KweUdaJtmhD86dLAN2",
          "ethAddress": "0x2DDcA84eF860085053A0008471BF27D73658f261",
          "hasPassword": "true",
          "solanaAddress": "5nKCBsij6qPYLMqVMQUXikgnAvnUSYCKEi8uS91Rg1dr",
          "type": "mainnet",
          "zelfName": "migueltrevino.zelf",
          "zelfProof": "A54jeNyfJFD+x9WOpXQL+s8VYa2PFtlS...[truncated for brevity]",
          "price": 0.8,
          "duration": 1,
          "registeredAt": "2025-01-15 01:31:07",
          "expiresAt": "2026-01-15 01:31:07"
        }
      }
    ],
    "arweave": [
      {
        "id": "fL2-FBVD0GFddYIfbD8wrjE7kKSMFtSgTxKJGHXYKgk",
        "owner": "vzrsUNMg17WFPmh73xZguPbn_cZzqnef3btvmn6-YDk",
        "url": "https://arweave.zelf.world/fL2-FBVD0GFddYIfbD8wrjE7kKSMFtSgTxKJGHXYKgk",
        "explorerUrl": "https://viewblock.io/arweave/tx/fL2-FBVD0GFddYIfbD8wrjE7kKSMFtSgTxKJGHXYKgk",
        "publicData": {
          "Content-Type": "image/png",
          "zelfProof": "A54jeNyfJFD+x9WOpXQL+s8VYa2PFtlS...[truncated for brevity]",
          "hasPassword": "true",
          "ethAddress": "0x2DDcA84eF860085053A0008471BF27D73658f261",
          "evm": "ETH,BNB,MATIC,AVAX,FTM,ARB,OP,CRO,ONE,KLAY,xDAI,GLMR,CELO,OKT,AURORA",
          "solanaAddress": "5nKCBsij6qPYLMqVMQUXikgnAvnUSYCKEi8uS91Rg1dr",
          "btcAddress": "18gM3C84vAeAYvy5KweUdaJtmhD86dLAN2",
          "zelfName": "migueltrevino.zelf",
          "leaseExpiresAt": "2026-01-15 01:31:07"
        },
        "size": "20443",
        "zelfProofQRCode": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAIAAAB7GkOt...[truncated for brevity]",
        "zelfProof": "Avgl3a9BDAg1LhTQnmszezf/Xm0bePHAs4JikXQFusp...[truncated for brevity]"
      }
    ],
    "available": false,
    "tagName": "migueltrevino.zelf",
    "tagObject": {
      "id": "fL2-FBVD0GFddYIfbD8wrjE7kKSMFtSgTxKJGHXYKgk",
      "owner": "vzrsUNMg17WFPmh73xZguPbn_cZzqnef3btvmn6-YDk",
      "url": "https://arweave.zelf.world/fL2-FBVD0GFddYIfbD8wrjE7kKSMFtSgTxKJGHXYKgk",
      "explorerUrl": "https://viewblock.io/arweave/tx/fL2-FBVD0GFddYIfbD8wrjE7kKSMFtSgTxKJGHXYKgk",
      "publicData": {
        "Content-Type": "image/png",
        "zelfProof": "A54jeNyfJFD+x9WOpXQL+s8VYa2PFtlS...[truncated for brevity]",
        "hasPassword": "true",
        "ethAddress": "0x2DDcA84eF860085053A0008471BF27D73658f261",
        "evm": "ETH,BNB,MATIC,AVAX,FTM,ARB,OP,CRO,ONE,KLAY,xDAI,GLMR,CELO,OKT,AURORA",
        "solanaAddress": "5nKCBsij6qPYLMqVMQUXikgnAvnUSYCKEi8uS91Rg1dr",
        "btcAddress": "18gM3C84vAeAYvy5KweUdaJtmhD86dLAN2",
        "zelfName": "migueltrevino.zelf",
        "leaseExpiresAt": "2026-01-15 01:31:07"
      },
      "size": "20443",
      "zelfProofQRCode": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAIAAAB7GkOt...[truncated for brevity]",
      "zelfProof": "Avgl3a9BDAg1LhTQnmszezf/Xm0bePHAs4JikXQFusp...[truncated for brevity]"
    }
  }
}
```

```json
{
  "data": {
    "ipfs": [],
    "arweave": [],
    "available": true,
    "tagName": "newuser.zelf",
    "price": {
      "price": 24,
      "currency": "USD",
      "reward": 2.4,
      "discount": 0,
      "priceWithoutDiscount": 24,
      "discountType": "percentage"
    }
  }
}
```

```json
{
  "data": {
    "ipfs": [],
    "arweave": [],
    "available": true,
    "tagName": "newuser.zelf",
    "price": {
      "price": 210,
      "currency": "USD",
      "reward": 21,
      "discount": 0,
      "priceWithoutDiscount": 210,
      "discountType": "percentage"
    }
  }
}
```

```json
{
  "validationError": "Name must be no more than 20 characters"
}
```

```json
{
  "error": "Protected resource, use Authorization header to get access"
}
```

```json
{
  "error": "Cannot read properties of undefined (reading 'toLowerCase')"
}
```
