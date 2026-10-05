---
id: "en-docs-smartcheck-smartcheck-3-making-an-api-request-3"
title: "SmartCheck — 3. Making an API Request"
sourcePath: "docs/smartcheck/smartcheck.md"
locale: "en"
category: "smartcheck"
tags:
  - "smartcheck"
sourceAnchor: "3. Making an API Request"
slug: "/smartcheck"
url: "https://docs.verifik.co/smartcheck"
---

# SmartCheck

## 3. Making an API Request

To make an API request, follow these steps:

-   **Select the API:** Choose the appropriate API from the dashboard. For example, if you need to verify a Colombian citizen's identity, select the "Colombian Citizen Information" API.
-   **Input Parameters:** Enter the required parameters, such as document type and document number. The platform will guide you on the necessary inputs to ensure a successful request.
-   **Test the API:** Use the built-in testing feature to send the request. SmartCheck will return the data in real-time, which you can review in both a formatted view and raw JSON. This step ensures that the API is functioning as expected before you integrate it into your system.

### 4. Reviewing the Consultation Report

Once an API request is completed, SmartCheck generates a consultation report. This report is available on the platform and can be viewed at any time:

-   **Parameters Used:** The report details the parameters that were used in the request, such as document numbers and types.
-   **Results:** The results are displayed in a no-code format for easy interpretation, listing relevant information such as names, dates, and verification statuses. For developers, a JSON view is also available, showing the full data returned by the API.
-   **Documentation:** Each report includes the documentation necessary for understanding the results, including what the data represents and how it was sourced.

### 5. Integration with Your Systems

SmartCheck is designed for easy integration with your existing systems. The platform provides code snippets and detailed documentation for each API, helping your developers implement the verification processes quickly and efficiently. Whether you're using Node.js, Python, or another language, SmartCheck offers the resources needed for seamless integration.
