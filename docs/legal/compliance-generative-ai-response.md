# Compliance Response: Generative AI Usage

## Question
Do you utilize any Generative AI models within your organization or products/services? Example of GenAI models are OpenAI's ChatGPT, Meta's Llama, Anthropic, Google Gemini etc.

## Response

**Yes, Verifik utilizes Generative AI models for document processing and data extraction within our products and services.**

### Generative AI Models Used

**OpenAI Models:**
- **GPT-4 Turbo**: Used for structured data extraction from document images
- **GPT-4**: Used for document information extraction and JSON parsing
- **GPT-3.5 Turbo**: Used for document processing tasks via Azure OpenAI

**Azure OpenAI Service:**
- **GPT-4o**: Deployed through Azure OpenAI for document processing
- **GPT-3.5 Turbo 16k**: Used for document extraction via Azure deployments

### Use Cases

**Document Processing:**
- **OCR and Data Extraction**: Generative AI models extract structured data (names, dates, document numbers, etc.) from identity documents and forms
- **JSON Extraction**: Models parse document images and return structured JSON data for integration
- **Template-Based Processing**: Custom prompt templates guide AI models to extract specific fields from various document types

**Product Integration:**
- **SmartEnroll**: AI-powered document extraction for enrollment processes
- **Document Validation**: AI-assisted extraction and validation of document information
- **OCR Services**: Enhanced OCR capabilities using generative AI for better accuracy

### Data Handling & Privacy

**Data Processing:**
- **Image Processing**: Document images are sent to AI models for processing
- **No Training Data**: We do not use customer data to train AI models
- **API Integration**: All AI interactions occur through secure API calls to OpenAI and Azure OpenAI
- **Data Retention**: AI service providers handle data according to their privacy policies; we do not store AI-processed data beyond what's necessary for service delivery

**Privacy & Security:**
- **Encrypted Transmission**: All data sent to AI services is transmitted over HTTPS/TLS
- **API Key Security**: AI service API keys are stored securely in environment variables
- **Access Controls**: AI service access is restricted to authorized personnel and systems
- **Audit Logging**: All AI service requests are logged for audit purposes

### Service Provider Compliance

**OpenAI:**
- **Enterprise Agreement**: We utilize OpenAI services under enterprise agreements
- **Data Processing**: OpenAI processes data according to their privacy policy and terms of service
- **No Training**: We do not allow OpenAI to use our data for model training

**Azure OpenAI:**
- **Microsoft Azure Compliance**: Azure OpenAI operates under Microsoft's compliance certifications (SOC 2, ISO 27001)
- **Data Residency**: Data processing occurs within Azure's secure infrastructure
- **Enterprise Controls**: Access to Azure OpenAI is managed through Azure IAM

### Governance & Controls

**Access Management:**
- **API Key Management**: AI service API keys are managed through secure credential storage
- **Usage Monitoring**: AI service usage is monitored and logged
- **Cost Controls**: Usage limits and monitoring prevent unauthorized or excessive usage
- **Regular Reviews**: AI service access and usage are reviewed quarterly

**Data Protection:**
- **Minimal Data**: Only necessary document images are sent to AI services
- **No PII Storage**: We do not store sensitive PII in AI service provider systems beyond processing
- **Client Consent**: Clients are informed about AI usage in our terms of service

### Compliance Alignment

- **GDPR**: AI processing aligns with data protection requirements
- **CCPA/CPRA**: Customer data handling complies with California privacy laws
- **SOC 2**: AI service usage is included in our security controls
- **Industry Standards**: We follow OWASP and industry best practices for AI integration

**Contact:** security@verifik.co | privacy@verifik.co

---

*Verifik LLC - 30 N Gould St, Ste 30338, Sheridan, WY 82801*

