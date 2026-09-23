---
id: "en-docs-resources-biometric-validations-retrieve-a-biometric-validation-endpoint"
title: "Retrieve a Biometric Validation — Endpoint"
sourcePath: "docs/resources/biometric-validations/retrieve-a-biometric-validation.mdx"
locale: "en"
category: "resources"
tags:
  - "biometric-validations"
  - "resources"
endpoints:
  - "/v2/biometric-validations/biometric_validation_123456789"
  - "/v2/biometric-validations/{id}"
sourceAnchor: "Endpoint"
slug: "/resources/retrieve-a-biometric-validation"
url: "https://docs.verifik.co/resources/retrieve-a-biometric-validation"
---

# Retrieve a Biometric Validation
**API path(s):** /v2/biometric-validations/biometric_validation_123456789, /v2/biometric-validations/{id}

## Endpoint

**GET** `https://api.verifik.co/v2/biometric-validations/{id}`

A Biometric Validation is an instance within Verifik's system that allows you to process and validate user identities through facial recognition and liveness detection. This endpoint retrieves a specific biometric validation record by its unique identifier, including all associated data and relationships.

### Headers

#### Authorization
Type: String  
Required: Yes

`Bearer {YOUR_ACCESS_TOKEN}`

### Path Parameters

#### `id`
Type: String  
Required: Yes

The unique identifier of the biometric validation to retrieve.

### Query Parameters

#### `populates[]`
Type: Array  
Required: No

Fields to populate with related data.

Example: `populates[]=client&populates[]=project`

#### `sort`
Type: String  
Required: No

Sort order for results. Prefix with `-` for descending.

Example: `sort=-createdAt`

#### `limit`
Type: Number  
Required: No

Maximum number of results to return.

Example: `limit=10`

#### `where_client`
Type: String  
Required: No

Filter by client ID.

Example: `where_client=507f1f77bcf86cd799439013`

#### `where_project`
Type: String  
Required: No

Filter by project ID.

Example: `where_project=507f1f77bcf86cd799439011`

#### `where_projectFlow`
Type: String  
Required: No

Filter by project flow ID.

Example: `where_projectFlow=507f1f77bcf86cd799439015`

#### `where_status`
Type: String  
Required: No

Filter by validation status.

Example: `where_status=validated`

#### `where_type`
Type: String  
Required: No

Filter by validation type.

Example: `where_type=login`

#### `where_livenessSession`
Type: String  
Required: No

Filter by liveness session ID.

Example: `where_livenessSession=674de8df21c72be3cc42b8a7`
