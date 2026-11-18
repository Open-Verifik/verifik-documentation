---
id: "en-docs-access-access-rate-limits-5"
title: "Access — Rate Limits"
sourcePath: "docs/access/access.md"
locale: "en"
category: "access"
tags:
  - "access"
endpoint: "/v2/access"
sourceAnchor: "Rate Limits"
slug: "/access"
url: "https://docs.verifik.co/access"
---

# Access
**API path(s):** /v2/access

Everything that Smart Access has to offer but on the API level, giving the flexibility to code a custom solution based on your company needs.

## Rate Limits

- **Email OTP**: 5 requests per minute per email
- **Phone OTP**: 3 requests per minute per phone number
- **Biometric**: 10 requests per minute per user

## Security Features

- **JWT Token Authentication**: Secure API access with time-limited tokens
- **Rate Limiting**: Protection against brute force attacks
- **OTP Expiration**: Time-limited one-time passwords
- **Liveness Detection**: Prevents spoofing attacks in biometric authentication
- **Webhook Notifications**: Real-time security event monitoring

## Best Practices

1. **Always validate responses**: Check the `success` field before processing data
2. **Handle errors gracefully**: Implement proper error handling for all API calls
3. **Store tokens securely**: Never expose JWT tokens in client-side code
4. **Implement retry logic**: Handle temporary failures with exponential backoff
5. **Monitor rate limits**: Track API usage to avoid hitting rate limits

## Support

For technical support and API documentation, contact our support team or visit our developer portal.

---

:::tip Pro Tip
Start with the web app setup for the fastest implementation, then use the API for custom integrations and advanced features.
:::

:::warning Security Notice
Always use HTTPS in production and never expose sensitive credentials in client-side code.
:::
