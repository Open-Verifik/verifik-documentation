# Support Ticket API

Service to manage support tickets and their threads for customer support and issue tracking.

### Endpoints

#### List Support Tickets

**GET** `/support-tickets`

Retrieve a list of support tickets with optional filtering and pagination.

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

**Query Parameters**

| Name            | Type    | Description                       | Example   |
| --------------- | ------- | --------------------------------- | --------- |
| `page`          | number  | Page number for pagination        | `1`       |
| `limit`         | number  | Number of items per page          | `10`      |
| `status`        | string  | Filter by ticket status           | `pending` |
| `category`      | string  | Filter by ticket category         | `billing` |
| `countByStatus` | boolean | Include status counts in response | `true`    |

**Request**

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/support-tickets',
  params: {
    page: 1,
    limit: 10,
    status: 'pending',
    countByStatus: true
  },
  headers: {
    Accept: 'application/json',
    Authorization: 'Bearer <your_token>'
  }
};

try {
  const { data } = await axios.request(options);
  console.log(data);
} catch (error) {
  console.error(error);
}
```

**Response**

**200 - Success**

```json
{
  "data": [
    {
      "_id": "507f1f77bcf86cd799439011",
      "title": "API Integration Issue",
      "subject": "Unable to connect to SmartCheck API",
      "category": "integration",
      "status": "pending",
      "number": 1001,
      "api": "smartCheck",
      "issueUrl": null,
      "assignee": null,
      "client": {
        "_id": "507f1f77bcf86cd799439012",
        "name": "Example Client"
      },
      "threads": [
        {
          "_id": "507f1f77bcf86cd799439013",
          "message": "I'm having trouble integrating with the SmartCheck API",
          "seenAt": null,
          "client": {
            "_id": "507f1f77bcf86cd799439012",
            "name": "Example Client"
          },
          "superAdmin": null,
          "attachments": []
        }
      ],
      "createdAt": "2024-01-15T10:30:00.000Z",
      "updatedAt": "2024-01-15T10:30:00.000Z"
    }
  ],
  "limit": 10,
  "page": 1,
  "pages": 5,
  "total": 50,
  "counts": {
    "all": 50,
    "open": 15,
    "closed": 35
  }
}
```

**404 - Not Found**

```json
{
  "code": "NotFound",
  "message": "No support tickets found"
}
```

#### Get Support Ticket

**GET** `/support-tickets/:id`

Retrieve a specific support ticket by ID.

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

**Path Parameters**

| Name | Type   | Description       | Example                    |
| ---- | ------ | ----------------- | -------------------------- |
| `id` | string | Support ticket ID | `507f1f77bcf86cd799439011` |

**Request**

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/support-tickets/507f1f77bcf86cd799439011',
  headers: {
    Accept: 'application/json',
    Authorization: 'Bearer <your_token>'
  }
};

try {
  const { data } = await axios.request(options);
  console.log(data);
} catch (error) {
  console.error(error);
}
```

**Response**

**200 - Success**

```json
{
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "title": "API Integration Issue",
    "subject": "Unable to connect to SmartCheck API",
    "category": "integration",
    "status": "pending",
    "number": 1001,
    "api": "smartCheck",
    "issueUrl": null,
    "assignee": null,
    "client": {
      "_id": "507f1f77bcf86cd799439012",
      "name": "Example Client"
    },
    "threads": [
      {
        "_id": "507f1f77bcf86cd799439013",
        "message": "I'm having trouble integrating with the SmartCheck API",
        "seenAt": null,
        "client": {
          "_id": "507f1f77bcf86cd799439012",
          "name": "Example Client"
        },
        "superAdmin": null,
        "attachments": []
      }
    ],
    "createdAt": "2024-01-15T10:30:00.000Z",
    "updatedAt": "2024-01-15T10:30:00.000Z"
  }
}
```

**404 - Not Found**

```json
{
  "code": "NotFound",
  "message": "Support ticket not found"
}
```

#### Create Support Ticket

**POST** `/support-tickets/insert`

Create a new support ticket with initial thread.

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

**Request Body**

| Field                   | Type   | Required | Description             | Allowed Values                                                                             |
| ----------------------- | ------ | -------- | ----------------------- | ------------------------------------------------------------------------------------------ |
| `title`                 | string | Yes      | Ticket title            | Any string                                                                                 |
| `category`              | string | Yes      | Ticket category         | `billing`, `integration`, `smartCheck`, `smartScan`, `smartEnroll`, `smartAccess`, `other` |
| `threads`               | array  | Yes      | Initial thread messages | Array of thread objects                                                                    |
| `threads[].message`     | string | Yes      | Thread message          | Any string                                                                                 |
| `threads[].attachments` | array  | No       | Attachment IDs          | Array of string IDs                                                                        |

**Request**

```javascript
import axios from 'axios';

const options = {
  method: 'POST',
  url: 'https://api.verifik.co/support-tickets/insert',
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer <your_token>'
  },
  data: {
    title: 'API Integration Issue',
    category: 'integration',
    threads: [
      {
        message: 'I\'m having trouble integrating with the SmartCheck API',
        attachments: []
      }
    ]
  }
};

try {
  const { data } = await axios.request(options);
  console.log(data);
} catch (error) {
  console.error(error);
}
```

**Response**

**201 - Created**

```json
{
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "title": "API Integration Issue",
    "subject": null,
    "category": "integration",
    "status": "pending",
    "number": 1001,
    "api": null,
    "issueUrl": null,
    "assignee": null,
    "client": {
      "_id": "507f1f77bcf86cd799439012",
      "name": "Example Client"
    },
    "threads": [
      {
        "_id": "507f1f77bcf86cd799439013",
        "message": "I'm having trouble integrating with the SmartCheck API",
        "seenAt": null,
        "client": {
          "_id": "507f1f77bcf86cd799439012",
          "name": "Example Client"
        },
        "superAdmin": null,
        "attachments": []
      }
    ],
    "createdAt": "2024-01-15T10:30:00.000Z",
    "updatedAt": "2024-01-15T10:30:00.000Z"
  }
}
```

**400 - Bad Request**

```json
{
  "code": "BadRequest",
  "message": "title is required"
}
```

#### Add Thread to Support Ticket

**POST** `/support-tickets/:id/thread`

Add a new thread message to an existing support ticket.

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

**Path Parameters**

| Name | Type   | Description       | Example                    |
| ---- | ------ | ----------------- | -------------------------- |
| `id` | string | Support ticket ID | `507f1f77bcf86cd799439011` |

**Request Body**

| Field         | Type   | Required | Description    | Example                        |
| ------------- | ------ | -------- | -------------- | ------------------------------ |
| `message`     | string | Yes      | Thread message | `"Thank you for the update"`   |
| `attachments` | array  | No       | Attachment IDs | `["507f1f77bcf86cd799439014"]` |

**Request**

```javascript
import axios from 'axios';

const options = {
  method: 'POST',
  url: 'https://api.verifik.co/support-tickets/507f1f77bcf86cd799439011/thread',
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer <your_token>'
  },
  data: {
    message: 'Thank you for the update. I will investigate this issue.',
    attachments: []
  }
};

try {
  const { data } = await axios.request(options);
  console.log(data);
} catch (error) {
  console.error(error);
}
```

**Response**

**201 - Created**

```json
{
  "data": {
    "_id": "507f1f77bcf86cd799439015",
    "message": "Thank you for the update. I will investigate this issue.",
    "seenAt": null,
    "supportTicket": "507f1f77bcf86cd799439011",
    "client": {
      "_id": "507f1f77bcf86cd799439012",
      "name": "Example Client"
    },
    "superAdmin": {
      "_id": "507f1f77bcf86cd799439016",
      "name": "Support Team"
    },
    "attachments": [],
    "createdAt": "2024-01-15T11:00:00.000Z",
    "updatedAt": "2024-01-15T11:00:00.000Z"
  }
}
```

**404 - Not Found**

```json
{
  "code": "NotFound",
  "message": "Support ticket not found"
}
```

#### Update Support Ticket

**PUT** `/support-tickets/:id`

Update an existing support ticket.

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

**Path Parameters**

| Name | Type   | Description       | Example                    |
| ---- | ------ | ----------------- | -------------------------- |
| `id` | string | Support ticket ID | `507f1f77bcf86cd799439011` |

**Request Body**

| Field      | Type   | Required | Description                         | Allowed Values                                                                             |
| ---------- | ------ | -------- | ----------------------------------- | ------------------------------------------------------------------------------------------ |
| `title`    | string | No       | Ticket title                        | Any string                                                                                 |
| `category` | string | No       | Ticket category                     | `billing`, `integration`, `smartCheck`, `smartScan`, `smartEnroll`, `smartAccess`, `other` |
| `status`   | string | No       | Ticket status                       | `pending`, `progress`, `resolved`, `cancelled`                                             |
| `subject`  | string | No       | Ticket subject                      | Any string                                                                                 |
| `api`      | string | No       | Related API                         | Any string                                                                                 |
| `assignee` | string | No       | Assignee ID (Super Admin only)      | ObjectId                                                                                   |
| `issueUrl` | string | No       | GitHub issue URL (Super Admin only) | URL string                                                                                 |

**Request**

```javascript
import axios from 'axios';

const options = {
  method: 'PUT',
  url: 'https://api.verifik.co/support-tickets/507f1f77bcf86cd799439011',
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer <your_token>'
  },
  data: {
    status: 'progress',
    subject: 'API Integration Issue - In Progress'
  }
};

try {
  const { data } = await axios.request(options);
  console.log(data);
} catch (error) {
  console.error(error);
}
```

**Response**

**200 - Success**

```json
{
  "status": "completed"
}
```

**404 - Not Found**

```json
{
  "code": "NotFound",
  "message": "Support ticket not found"
}
```

#### Delete Support Ticket

**DELETE** `/support-tickets/:id`

Delete a support ticket.

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

**Path Parameters**

| Name | Type   | Description       | Example                    |
| ---- | ------ | ----------------- | -------------------------- |
| `id` | string | Support ticket ID | `507f1f77bcf86cd799439011` |

**Request**

```javascript
import axios from 'axios';

const options = {
  method: 'DELETE',
  url: 'https://api.verifik.co/support-tickets/507f1f77bcf86cd799439011',
  headers: {
    Authorization: 'Bearer <your_token>'
  }
};

try {
  const { data } = await axios.request(options);
  console.log(data);
} catch (error) {
  console.error(error);
}
```

**Response**

**200 - Success**

```json
{
  "status": "completed"
}
```

**404 - Not Found**

```json
{
  "code": "NotFound",
  "message": "Support ticket not found"
}
```

#### Bulk Delete Support Tickets

**POST** `/support-tickets/bulk`

Delete multiple support tickets at once.

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

**Request Body**

| Field | Type  | Required | Description         | Example                                                    |
| ----- | ----- | -------- | ------------------- | ---------------------------------------------------------- |
| `ids` | array | Yes      | Array of ticket IDs | `["507f1f77bcf86cd799439011", "507f1f77bcf86cd799439012"]` |

**Request**

```javascript
import axios from 'axios';

const options = {
  method: 'POST',
  url: 'https://api.verifik.co/support-tickets/bulk',
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer <your_token>'
  },
  data: {
    ids: [
      '507f1f77bcf86cd799439011',
      '507f1f77bcf86cd799439012'
    ]
  }
};

try {
  const { data } = await axios.request(options);
  console.log(data);
} catch (error) {
  console.error(error);
}
```

**Response**

**200 - Success**

```json
{
  "status": "completed"
}
```

**400 - Bad Request**

```json
{
  "code": "BadRequest",
  "message": "ids is required"
}
```

#### Mark Threads as Seen

**PUT** `/support-tickets/threads/seen`

Mark multiple threads as seen.

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

**Request Body**

| Field       | Type  | Required | Description         | Example                                                    |
| ----------- | ----- | -------- | ------------------- | ---------------------------------------------------------- |
| `threadIds` | array | Yes      | Array of thread IDs | `["507f1f77bcf86cd799439013", "507f1f77bcf86cd799439014"]` |

**Request**

```javascript
import axios from 'axios';

const options = {
  method: 'PUT',
  url: 'https://api.verifik.co/support-tickets/threads/seen',
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer <your_token>'
  },
  data: {
    threadIds: [
      '507f1f77bcf86cd799439013',
      '507f1f77bcf86cd799439014'
    ]
  }
};

try {
  const { data } = await axios.request(options);
  console.log(data);
} catch (error) {
  console.error(error);
}
```

**Response**

**200 - Success**

```json
{
  "status": "completed"
}
```

**400 - Bad Request**

```json
{
  "code": "BadRequest",
  "message": "threadIds is required"
}
```

#### Create GitHub Issue

**POST** `/support-tickets/:id/github-issue`

Create a GitHub issue from a support ticket (Super Admin only).

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

**Path Parameters**

| Name | Type   | Description       | Example                    |
| ---- | ------ | ----------------- | -------------------------- |
| `id` | string | Support ticket ID | `507f1f77bcf86cd799439011` |

**Request**

```javascript
import axios from 'axios';

const options = {
  method: 'POST',
  url: 'https://api.verifik.co/support-tickets/507f1f77bcf86cd799439011/github-issue',
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer <your_token>'
  }
};

try {
  const { data } = await axios.request(options);
  console.log(data);
} catch (error) {
  console.error(error);
}
```

**Response**

**200 - Success**

```json
{
  "data": {
    "githubIssue": {
      "id": 123,
      "number": 456,
      "title": "API Integration Issue - Ticket #1001",
      "html_url": "https://github.com/Open-Verifik/verifik-backend/issues/456",
      "body": "Support ticket details...",
      "labels": ["support", "api"],
      "assignees": ["support-team"]
    },
    "issueUrl": "https://github.com/Open-Verifik/verifik-backend/issues/456"
  }
}
```

**403 - Forbidden**

```json
{
  "code": "Forbidden",
  "message": "You are not authorized to create a GitHub issue"
}
```

**400 - Bad Request**

```json
{
  "code": "BadRequest",
  "message": "Issue already created"
}
```

### Data Models

#### Support Ticket Object

| Field       | Type   | Description             |
| ----------- | ------ | ----------------------- |
| `_id`       | string | Unique identifier       |
| `title`     | string | Ticket title            |
| `subject`   | string | Ticket subject          |
| `category`  | string | Ticket category         |
| `status`    | string | Ticket status           |
| `number`    | number | Ticket number           |
| `api`       | string | Related API             |
| `issueUrl`  | string | GitHub issue URL        |
| `assignee`  | object | Assigned super admin    |
| `client`    | object | Client information      |
| `threads`   | array  | Array of thread objects |
| `createdAt` | string | Creation timestamp      |
| `updatedAt` | string | Last update timestamp   |

#### Support Ticket Thread Object

| Field           | Type   | Description                 |
| --------------- | ------ | --------------------------- |
| `_id`           | string | Unique identifier           |
| `message`       | string | Thread message              |
| `seenAt`        | string | When thread was seen        |
| `supportTicket` | string | Parent ticket ID            |
| `client`        | object | Client information          |
| `superAdmin`    | object | Super admin information     |
| `attachments`   | array  | Array of attachment objects |
| `createdAt`     | string | Creation timestamp          |
| `updatedAt`     | string | Last update timestamp       |

### Status Values

| Status      | Description                    |
| ----------- | ------------------------------ |
| `pending`   | Ticket is waiting for response |
| `progress`  | Ticket is being worked on      |
| `resolved`  | Ticket has been resolved       |
| `cancelled` | Ticket has been cancelled      |

### Category Values

| Category      | Description                |
| ------------- | -------------------------- |
| `billing`     | Billing and payment issues |
| `integration` | API integration problems   |
| `smartCheck`  | SmartCheck service issues  |
| `smartScan`   | SmartScan service issues   |
| `smartEnroll` | SmartEnroll service issues |
| `smartAccess` | SmartAccess service issues |
| `other`       | Other general issues       |

### Error Codes

| Code           | Description                |
| -------------- | -------------------------- |
| `BadRequest`   | Invalid request parameters |
| `NotFound`     | Resource not found         |
| `Forbidden`    | Insufficient permissions   |
| `Unauthorized` | Authentication required    |
