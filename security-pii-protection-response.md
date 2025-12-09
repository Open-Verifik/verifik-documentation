# PII and Confidential Information Protection

## Overview
Verifik implements a multi-layered security approach to protect personally identifiable information (PII) and confidential data, including account numbers, throughout the entire data lifecycle - both in transit and at rest.

## Data in Transit Protection

### HTTPS/TLS Encryption
- **All API communications** are encrypted using Transport Layer Security (TLS) protocols
- **HTTPS enforcement**: All HTTP requests are automatically redirected to HTTPS
- **SSL/TLS certificates**: Valid SSL certificates are configured via nginx reverse proxy for all API endpoints
- **TLS version**: We maintain current TLS versions to ensure strong encryption standards
- **Certificate management**: SSL certificates are properly configured and regularly renewed

### JWT Token Security
- **JSON Web Tokens (JWT)** are used for authentication and authorization, following industry standard RFC 7519
- **Token signing**: All JWT tokens are cryptographically signed using a secure secret key (JWT_SECRET) stored in environment variables
- **Token validation**: Each API request validates the JWT signature to ensure:
  - The token was issued by our system
  - The token has not been tampered with
  - The token is within its validity period
- **Token expiration**: Tokens include expiration timestamps and are automatically invalidated after the specified period
- **OTP-based authentication**: Token generation requires one-time password (OTP) verification via email or phone, ensuring only authorized users can obtain access tokens
- **Bearer token format**: Tokens are transmitted in the Authorization header using the Bearer scheme

## Data at Rest Protection

### Database Encryption
- **MongoDB database**: All PII and confidential information is stored in a MongoDB database with access controls
- **Encrypted fields**: Sensitive data fields are encrypted before storage using AES-256-CBC encryption
- **Encryption key management**: Encryption keys are derived from secure environment variables using SHA-256 hashing
- **Initialization vectors (IV)**: Unique initialization vectors are used for each encryption operation

### Field-Level Encryption
- **AES-256-CBC encryption**: Sensitive fields such as account numbers, payment information, and other confidential data are encrypted using AES-256-CBC before database storage
- **Encryption module**: A dedicated encryption module handles all encryption/decryption operations using industry-standard cryptographic libraries
- **Selective encryption**: Only sensitive fields are encrypted, maintaining performance while ensuring security

## Hashing Practices

### Password and OTP Hashing
- **bcrypt hashing**: All passwords and one-time passwords (OTPs) are hashed using bcrypt before storage
- **Salt generation**: Each password/OTP is hashed with a unique salt generated using bcrypt's genSalt function
- **Work factor**: We use a salt work factor of 10, providing strong protection against brute-force attacks
- **One-way hashing**: Passwords and OTPs are never stored in plain text - only their hashed representations are stored
- **Comparison methods**: Secure comparison functions verify passwords/OTPs without exposing the original values

### Key Derivation
- **SHA-256 hashing**: Encryption keys are derived from master secrets using SHA-256 hashing
- **Key isolation**: Different keys are used for different encryption purposes
- **Environment-based secrets**: All cryptographic secrets are stored in environment variables, never in code

## PII and Account Number Protection

### Account Numbers and Payment Information
- **Encryption at rest**: Account numbers and payment method information are encrypted using AES-256-CBC before database storage
- **Encrypted transmission**: All payment-related data is transmitted over HTTPS/TLS
- **Tokenization**: Where applicable, sensitive payment data may be tokenized through third-party payment processors (e.g., Stripe)
- **Access controls**: Database access is restricted to authorized application services only

### Personal Identifiable Information (PII)
- **Encrypted storage**: PII such as names, phone numbers, email addresses, and document numbers are stored with appropriate encryption
- **JWT payload security**: JWT tokens do not contain sensitive PII in their payload - only non-sensitive identifiers (clientId, staffId) are included
- **Data minimization**: We only collect and store PII that is necessary for service delivery
- **Access logging**: All access to PII is logged for audit purposes

## Security Architecture

### Authentication Flow
1. User requests authentication via OTP (email or phone)
2. OTP is hashed using bcrypt before storage
3. Upon successful OTP verification, a JWT token is generated
4. JWT token is signed with a secret key and includes expiration
5. All subsequent API requests include the JWT token in the Authorization header
6. Each request validates the JWT signature and expiration before processing

### Authorization
- **Role-based access control**: JWT tokens include role information for authorization decisions
- **Project-based access**: Tokens are scoped to specific projects, limiting access to authorized resources
- **Token revocation**: Tokens can be revoked and regenerated for security purposes

## Compliance and Best Practices

- **Industry standards**: We follow OWASP security guidelines and industry best practices
- **Regular security reviews**: Our security practices are regularly reviewed and updated
- **Environment variable security**: All secrets and keys are stored in environment variables, never committed to version control
- **Secure defaults**: All new features are developed with security as a primary consideration

## Summary

Verifik protects PII and confidential information through:
- **In Transit**: HTTPS/TLS encryption for all API communications, JWT token signing and validation
- **At Rest**: AES-256-CBC encryption for sensitive database fields, bcrypt hashing for passwords/OTPs
- **Access Control**: JWT-based authentication with OTP verification, role-based authorization
- **Key Management**: Secure key derivation and storage in environment variables

This multi-layered approach ensures that personally identifiable information and account numbers are protected throughout their entire lifecycle within our system.

