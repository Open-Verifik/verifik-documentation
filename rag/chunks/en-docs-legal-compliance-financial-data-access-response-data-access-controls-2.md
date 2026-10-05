---
id: "en-docs-legal-compliance-financial-data-access-response-data-access-controls-2"
title: "Compliance Response: Financial Institution Data Access — Data Access Controls"
sourcePath: "docs/legal/compliance-financial-data-access-response.md"
locale: "en"
category: "legal"
tags:
  - "legal"
sourceAnchor: "Data Access Controls"
---

# Compliance Response: Financial Institution Data Access

## Data Access Controls

**Credit Data Access:**
- **Client Isolation**: Clients can only access their own credit balance and transaction history
- **Staff Permissions**: Staff members have limited access based on their assigned role and client assignments
- **Admin Oversight**: Administrative access is restricted to authorized personnel with appropriate roles
- **Encrypted Storage**: Credit transaction data is encrypted at rest using Google Cloud Platform encryption

**Stripe Data:**
- **No Direct Access**: Verifik personnel do not have access to Stripe's payment processing systems or financial data
- **API Integration Only**: Integration with Stripe is limited to secure API calls for payment processing
- **Stripe Dashboard Access**: Only authorized accounting personnel have read-only access to Stripe dashboard for reconciliation purposes, with access logged and monitored

### Compliance & Security

- **PCI-DSS Compliance**: By using Stripe, we leverage their PCI-DSS Level 1 certification without handling card data ourselves
- **SOC 2 Alignment**: Access controls, authentication, and auditing align with SOC 2 requirements
- **GDPR/CCPA Compliance**: Credit transaction data is handled in accordance with data protection regulations
- **Regular Audits**: Access to credit systems is audited annually; transaction logs are reviewed quarterly

**Contact:** security@verifik.co | privacy@verifik.co

---

*Verifik LLC - 30 N Gould St, Ste 30338, Sheridan, WY 82801*
