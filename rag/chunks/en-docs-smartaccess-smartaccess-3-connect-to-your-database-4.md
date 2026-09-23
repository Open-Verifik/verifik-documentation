---
id: "en-docs-smartaccess-smartaccess-3-connect-to-your-database-4"
title: "SmartAccess — 3. Connect to Your Database"
sourcePath: "docs/smartaccess/smartaccess.md"
locale: "en"
category: "smartaccess"
tags:
  - "smartaccess"
sourceAnchor: "3. Connect to Your Database"
slug: "/smartaccess"
url: "https://docs.verifik.co/smartaccess"
---

# SmartAccess

**SmartAccess** is a no-code solution designed to provide secure and seamless passwordless logins for users. This platform enables businesses to offer various authentication methods, including email, phone, and biometric verification, ensuring a user-friendly and secure experience. With SmartAccess, companies can easily integrate these authentication methods without the need for complex coding or infrastructure development.

## 3. Connect to Your Database

The **Connect Database** step is crucial for integrating SmartAccess with your existing user data. This step offers considerable flexibility, allowing you to connect your project to different data sources and ensure seamless operation:

* **API Integration:** Link your customer database with SmartAccess via an API. You'll need to provide the API URL and specify the data type you wish to query (e.g. email, phone number). SmartAccess offers a built-in test feature that allows you to check if the API is correctly linked. This test function is highly customizable—you can simulate different data queries to ensure your system is prepared for real-world use.
* **CSV Upload:** For those who prefer or require it, SmartAccess also supports the bulk upload of customer data through CSV files. This method is ideal for companies transitioning from older systems or those without a readily available API. Once uploaded, the system processes the CSV data, making it instantly accessible for authentication purposes.

**Download/Upload Template.** After downloading the template, fill out the CSV file with the correct criteria and then upload and make final edits.

* **Webhook Configuration:** Establish a webhook that will handle real-time communication between SmartAccess and your backend. This step is customizable based on the specific events you want to monitor (e.g. successful logins, failed attempts, etc.). You can link the webhook to your alert system, enabling immediate responses to critical security events.

* **Redirect URL:** Set a redirection URL for your project that will guide users to the appropriate landing page after they complete the authentication process. Whether you want users to go to a dashboard, homepage, or a specific application page, this feature ensures a smooth transition and enhances user experience.
