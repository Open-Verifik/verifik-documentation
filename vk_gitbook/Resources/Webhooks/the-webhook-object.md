# The Webhook object

### **Attributes**

***

**client** - `ObjectId` - Required\
Reference to the client associated with the webhook. This is a required field that links the webhook to a specific client.

***

**projectFlow** - `Array of ObjectId` - Optional\
Array of references to `ProjectFlow` objects. If no project flows are provided, this field defaults to an empty array.

***

**statistics** - `Object` - Optional\
Stores statistical data related to the webhook. By default, this field is an empty object `{}`.

***

**isActive** - `Boolean` - Required\
Indicates whether the webhook is active. This is a required field and must be set to either `true` or `false`.

***

**name** - `String` - Required\
The name of the webhook. This is a required field and must be provided as a string.

***

**url** - `String` - Required\
The URL endpoint that the webhook will send notifications to. This is a required field and must be provided as a valid string.

***

**description** - `String` - Optional\
A brief description of the webhook. This is an optional field and can be used to add more context or details about the webhook.

***

**notification** - `Object` - Optional\
Contains notification settings for the webhook. The object has the following optional sub-fields:

* **email** - `String` - Optional\
  Email address to which notifications will be sent.
* **success** - `Boolean` - Optional\
  Indicates whether to send notifications on successful events. Defaults to `false`.
* **fail** - `Boolean` - Optional\
  Indicates whether to send notifications on failure events. Defaults to `true`.

***

### The Webhook object

```json
{
  "client": "613a4b978482f60fd31bd7b7",
  "projectFlow": ["613a4b978482f60fd31bd7b8", "613a4b978482f60fd31bd7b9"],
  "statistics": {},
  "isActive": true,
  "name": "Payment Processor Webhook",
  "url": "https://example.com/webhook-endpoint",
  "description": "This webhook handles payment processing notifications.",
  "notification": {
    "email": "notify@example.com",
    "success": true,
    "fail": false
  }
}
```
