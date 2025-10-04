# Webhook integration

Here's a concise documentation for setting up a webhook using Node.js that can be used to receive events from Verifik. This includes step-by-step instructions on how the user can configure their webhook to receive events.

***

### Webhook Setup Guide

This guide explains how to set up a simple webhook using Node.js. You can use this webhook to receive events from Verifik in real-time.

#### 1. Prerequisites

Before starting, ensure you have:

* **Node.js** installed on your system.
* **npm** (Node Package Manager) installed (usually comes with Node.js).

#### 2. Install Required Packages

To get started, initialize a Node.js project and install the necessary dependencies.

```bash
mkdir webhook-example
cd webhook-example
npm init -y
npm install express body-parser
```

* **express**: A web framework for Node.js to handle HTTP requests.
* **body-parser**: Middleware to parse incoming request bodies (especially JSON).

#### 3. Create the Webhook Server

Create a file named `webhook.js` and add the following code:

```javascript
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Endpoint to receive webhook events
app.post('/webhook', (req, res) => {
  const event = req.body;

  // Log the received event
  console.log('Received event:', event);

  // Respond with a success message
  res.status(200).send('Webhook received successfully');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Webhook server is running on port ${PORT}`);
});
```

#### 4. Run the Webhook Server

To start the webhook server, run the following command:

```bash
node webhook.js
```

Your webhook server will be running locally on `http://localhost:3000/webhook`.

#### 5. Expose Your Webhook Server

If you want Verifik to send events to your webhook, you need to expose it to the internet. This can be done using tools like **ngrok**. Install ngrok if you haven't already:

```bash
npm install -g ngrok
```

Then, expose your local server:

```bash
ngrok http 3000
```

You will receive a public URL, such as `https://<random-id>.ngrok.io`, which can be used by Verifik to send webhook events.

#### 6. Configure Webhook URL with Verifik

Once your webhook is publicly accessible, you can provide the URL to Verifik. Here's how to configure your webhook:

1. **Set Your Webhook URL**: Provide the public URL from ngrok to Verifik's integration team.
   * Example: `https://<random-id>.ngrok.io/webhook`
2. **Event Subscription**: Indicate which events you'd like to receive from Verifik (e.g., user sign-up, transaction completed).

#### 7. Testing Webhooks

You can test your webhook locally by sending a `POST` request using a tool like `curl` or Postman.

Example with `curl`:

```bash
curl -X POST http://localhost:3000/webhook -H "Content-Type: application/json" -d '{"event":"user_signup", "data": {"user_id": "12345"}}'
```

This should print the event to your console and return a success message.

#### 8. Security Considerations

* **Signature Verification**: For production use, it's important to verify the signature of incoming webhook requests to ensure they originate from Verifik. This can be done using shared secrets or API keys, which Verifik will provide.
* **HTTPS**: Make sure your webhook URL uses HTTPS when in production.

#### Conclusion

You've now set up a basic webhook in Node.js that can receive events from **Verifik**. You can use this webhook for a variety of purposes such as listening to user signups, transactions, or other real-time events.

***

Let us know if you need any additional details from our side and we are happy to help.

### Now we are ready to create the webhook object in Verifik

{% content-ref url="create-a-webhook" %}
[create-a-webhook](https://docs.verifik.co/resources/webhooks/create-a-webhook)
{% endcontent-ref %}
