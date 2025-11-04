---
id: create-a-project-flow
title: Create a Project Flow
description: Create a new project flow configuration
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Create a Project Flow

## Endpoint

```
POST https://api.verifik.co/v2/project-flows
```

Project Flows define configurations for a Project in Verifik. In this context, we will define various data points that Verifik will use to perform validations using passwordless and liveness detection technologies.

### Headers

| Name          | Value                        |
| ------------- | ---------------------------- |
| Content-Type  | `application/json`           |
| Authorization | `Bearer {YOUR_ACCESS_TOKEN}` |

### Body Parameters

| Name            | Type   | Required | Description                                                                                    |
| --------------- | ------ | -------- | ---------------------------------------------------------------------------------------------- |
| `project`       | string | **Yes**  | The unique identifier of the project this flow belongs to.                                    |
| `type`          | string | **Yes**  | Type of flow: `login` or `onboarding`.                                                         |
| `name`          | string | **Yes**  | Name of the project flow for identification purposes.                                        |
| `description`   | string | No       | Description of the project flow and its purpose.                                              |
| `configuration` | object | **Yes**  | Configuration object containing flow-specific settings.                                      |
| `steps`         | array  | **Yes**  | Array of steps that define the flow sequence.                                                 |

### Request

<Tabs>
  <TabItem value="javascript" label="JavaScript">

```javascript
const axios = require("axios");

const config = {
  method: "post",
  url: "https://api.verifik.co/v2/project-flows",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer YOUR_ACCESS_TOKEN"
  },
  data: {
    project: "project_123456789",
    type: "onboarding",
    name: "Complete Onboarding Flow",
    description: "Full onboarding flow with email, phone, and biometric verification",
    configuration: {
      emailVerification: {
        enabled: true,
        required: true,
        method: "verificationCode"
      },
      phoneVerification: {
        enabled: true,
        required: true,
        method: "sms"
      },
      biometricVerification: {
        enabled: true,
        required: true,
        livenessDetection: true
      }
    },
    steps: [
      {
        stepType: "email",
        order: 1,
        required: true,
        config: {
          verificationMethod: "verificationCode"
        }
      },
      {
        stepType: "phone",
        order: 2,
        required: true,
        config: {
          verificationMethod: "sms"
        }
      },
      {
        stepType: "biometric",
        order: 3,
        required: true,
        config: {
          livenessDetection: true
        }
      }
    ]
  }
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
```

  </TabItem>
</Tabs>

### Response

<Tabs>
  <TabItem value="200" label="200">

```json
{
  "success": true,
  "data": {
    "_id": "project_flow_123456789",
    "project": "project_123456789",
    "type": "onboarding",
    "status": "draft",
    "version": 1,
    "name": "Complete Onboarding Flow",
    "description": "Full onboarding flow with email, phone, and biometric verification",
    "configuration": {
      "emailVerification": {
        "enabled": true,
        "required": true,
        "method": "verificationCode"
      },
      "phoneVerification": {
        "enabled": true,
        "required": true,
        "method": "sms"
      },
      "biometricVerification": {
        "enabled": true,
        "required": true,
        "livenessDetection": true
      }
    },
    "steps": [
      {
        "stepType": "email",
        "order": 1,
        "required": true,
        "config": {
          "verificationMethod": "verificationCode"
        }
      },
      {
        "stepType": "phone",
        "order": 2,
        "required": true,
        "config": {
          "verificationMethod": "sms"
        }
      },
      {
        "stepType": "biometric",
        "order": 3,
        "required": true,
        "config": {
          "livenessDetection": true
        }
      }
    ],
    "client": "client_123456789",
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-15T10:30:00Z"
  },
  "signature": {
    "dateTime": "April 11, 2023 12:25 PM",
    "message": "Certified by Verifik.co"
  }
}
```

  </TabItem>
  <TabItem value="400" label="400">

```json
{
  "error": "Invalid project ID",
  "message": "INVALID_PROJECT_ID"
}
```

  </TabItem>
  <TabItem value="409" label="409">

```json
{
  "error": "Invalid flow type",
  "message": "INVALID_FLOW_TYPE"
}
```

  </TabItem>
</Tabs>

### Features

- **Flow Creation**: Create new project flows with complete configuration
- **Flow Types**: Support for onboarding and login
- **Flexible Configuration**: Define custom verification steps
- **Multi-factor Verification**: Email, phone, and biometric
- **Liveness Detection**: Configuration for liveness detection
- **Multiple Languages**: Support for JavaScript, Python, PHP, and Swift
- **Error Handling**: Detailed error responses for different scenarios
