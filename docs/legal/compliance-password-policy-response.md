# Compliance Response: Password Policy

## Question
Describe your password policies. Does it include change frequency and complexity standards?

## Response

**Verifik does not use traditional password-based authentication. We employ a more secure authentication model using Time-based One-Time Passwords (TOTP) and SSH key-based access for infrastructure.**

### Authentication Model

**TOTP-Based Authentication:**
- **No Password Storage**: We do not store passwords, eliminating password-related security risks
- **OTP via Email/Phone**: All user authentication uses One-Time Passwords (OTP) delivered via email or SMS
- **Time-Limited Tokens**: OTPs expire after a short time window (typically 5-10 minutes)
- **Single-Use**: Each OTP can only be used once, preventing replay attacks
- **JWT Token Issuance**: Upon successful OTP verification, cryptographically signed JWT tokens are issued for session management
- **Token Expiration**: JWT tokens include expiration timestamps and are automatically invalidated

**Benefits of TOTP Approach:**
- Eliminates password reuse and weak password vulnerabilities
- No password database to compromise
- Reduces phishing attack effectiveness
- Provides stronger security than traditional passwords

### Infrastructure Access (SSH)

**SSH Key-Based Access:**
- **No Password Authentication**: SSH access to servers uses public key authentication only (password authentication disabled)
- **Key Management**: SSH keys are managed through secure key management practices
- **Key Rotation**: SSH keys are rotated regularly and upon security incidents
- **Access Control**: SSH access is restricted to authorized personnel with specific key-based permissions
- **Google Cloud Platform**: Server access is managed through GCP IAM and Compute Engine security policies

### Security Standards

**OTP Security:**
- OTPs are hashed using bcrypt before storage (if temporarily stored)
- OTP delivery uses secure channels (TLS-encrypted email/SMS)
- Rate limiting prevents brute force attacks
- Failed authentication attempts are logged and monitored

**Token Security:**
- JWT tokens are cryptographically signed using secure secret keys
- Tokens include expiration and can be revoked immediately
- Token validation occurs on every API request
- Token payloads do not contain sensitive information

### Access Management

- **Multi-Factor Authentication**: OTP-based authentication provides inherent MFA (something you have - device, something you know - access to email/phone)
- **Session Management**: JWT tokens provide secure session management without password storage
- **Revocation**: Tokens and SSH keys can be immediately revoked upon termination or security incident
- **Monitoring**: All authentication attempts (successful and failed) are logged and monitored

### Compliance Alignment

This authentication model aligns with:
- **NIST Guidelines**: Eliminates weak password vulnerabilities
- **OWASP Best Practices**: Stronger than password-based authentication
- **SOC 2**: Secure access controls without password management overhead
- **Zero Trust Principles**: Continuous verification through time-limited tokens

**Contact:** security@verifik.co | privacy@verifik.co

---

*Verifik LLC - 30 N Gould St, Ste 30338, Sheridan, WY 82801*

