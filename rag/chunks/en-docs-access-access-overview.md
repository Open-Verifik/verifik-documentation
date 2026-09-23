---
id: "en-docs-access-access-overview"
title: "Access — Overview"
sourcePath: "docs/access/access.md"
locale: "en"
category: "access"
tags:
  - "access"
endpoint: "/v2/access"
sourceAnchor: "Overview"
slug: "/access"
url: "https://docs.verifik.co/access"
---

# Access
**API path(s):** /v2/access

## Overview

Everything that Smart Access has to offer but on the API level, giving the flexibility to code a custom solution based on your company needs.

## Overview

The Access API provides programmatic access to all SmartAccess functionality, allowing you to build custom authentication flows that integrate seamlessly with your existing systems. This solution is perfect for businesses that need more control over the user experience or want to integrate authentication into their existing applications.

## Quick Start Guide

Let's start by saying that the **optimal** path is: Set everything up in our [web app](https://app.verifik.co) (using our UI to save everything that is related to the setup since there is no need to save everything via API). If you still want to follow everything via API I will list all the endpoints that need to be called in order to set it up manually or change the information via API as well.

### Setup Steps

  
    
      
        1. Create a Project
      
      
        Start by creating a new project in the Verifik platform to organize your authentication flows.
        Create Project
      
    
  
  
    
      
        2. Create a Project Flow
      
      
        Define the authentication flow with type = "login" for your project.
        Create Flow
      
    
  

  
    
      
        3. Setup Login Methods
      
      
        Configure the authentication methods you want to support.
        Setup Methods
      
    
  
  
    
      
        4. Database Connection
      
      
        Connect your existing user database to the authentication system.
        Connect DB
      
    
  

  
    
      
        5. Setup Webhooks
      
      
        Configure webhooks to receive real-time notifications for authentication events.
        Setup Webhooks
