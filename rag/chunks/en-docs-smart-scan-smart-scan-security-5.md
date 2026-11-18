---
id: "en-docs-smart-scan-smart-scan-security-5"
title: "Smart Scan — Security"
sourcePath: "docs/smart-scan/smart-scan.md"
locale: "en"
category: "smart-scan"
tags:
  - "smart-scan"
  - "scan"
endpoint: "/v2/scan"
sourceAnchor: "Security"
slug: "/smart-scan"
url: "https://docs.verifik.co/smart-scan"
---

# Smart Scan
**API path(s):** /v2/scan

**OCR** stands for **Optical Character Recognition**. It is a technology that converts different types of documents, such as scanned paper documents, PDF files, or images captured by a digital camera, into editable and searchable data. The primary purpose of OCR is to recognize and extract text from these non-editable formats so that it can be electronically stored, manipulated, and searched.

## Security

1. **Data Privacy**: Ensure sensitive documents are handled securely
2. **Token Management**: Keep JWT tokens secure and rotate them regularly
3. **HTTPS Only**: Always use HTTPS for API communications
4. **Data Retention**: Implement proper data retention policies

---

## Rate Limits

- **Scan Prompt**: 50 requests per minute
- **Scan Studio**: 30 requests per minute

:::tip Pro Tip
Start with Scan Prompt for quick testing and prototyping, then move to Scan Studio for production applications requiring high accuracy.
:::

:::warning Important
Always test your OCR implementation with sample documents before deploying to production to ensure accuracy meets your requirements.
:::

---

## Support

For technical support and API documentation, contact our support team or visit our developer portal.

---

## Use Cases

### Financial Services
- **Invoice Processing**: Extract data from invoices for automated accounting
- **Bank Statement Analysis**: Process bank statements for financial analysis
- **Receipt Digitization**: Convert paper receipts to digital records

### Healthcare
- **Medical Records**: Digitize patient records and forms
- **Insurance Claims**: Process insurance claim documents
- **Prescription Processing**: Extract information from prescription forms

### Legal
- **Contract Analysis**: Extract key terms and dates from legal documents
- **Court Documents**: Process legal filings and court records
- **Compliance Forms**: Digitize regulatory compliance documents

### Administrative
- **Form Processing**: Extract data from various administrative forms
- **Document Archiving**: Convert paper documents to searchable digital files
- **Data Entry Automation**: Reduce manual data entry with automated extraction

---

:::tip Getting Started
Ready to start using Smart Scan? Check out our [Scan Prompt API](/ocr-engines/scan-prompt) and [Scan Studio API](/ocr-engines/scan-studio) documentation to get started quickly.
:::
