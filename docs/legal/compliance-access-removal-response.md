# Compliance Response: Access Removal and Periodic Reviews

## Question
Describe your policy on removing logical and physical access to systems. Are periodic access reviews performed? How often?

## Response

**Yes, Verifik maintains a comprehensive access removal policy and conducts regular periodic access reviews.**

### Access Removal Policy

**Immediate Revocation Triggers:**
- Employee termination
- Contractor contract termination
- Security incident or policy violation
- Role change requiring different access levels

**Removal Process:**
1. **Immediate Notification**: Security team is notified within 24 hours of termination or role change
2. **Logical Access Revocation**: All system access (applications, databases, APIs) is disabled immediately
3. **Cloud Resource Access**: GCP IAM permissions are revoked for terminated users
4. **Token Invalidation**: All JWT tokens and API keys are revoked and invalidated
5. **Verification**: Access removal is verified and documented in audit logs

**Physical Access:**
- Physical access is managed through Google Cloud Platform infrastructure
- GCP handles physical data center access controls with their certified security practices
- Company-issued devices are remotely wiped upon termination

### Periodic Access Reviews

**Yes, we perform periodic access reviews on a regular schedule:**

- **Annual Access Reviews**: Comprehensive access permissions review for all users (annually)
- **Quarterly User Access Reviews**: User access is reviewed quarterly to ensure permissions remain appropriate
- **Role-Based Reviews**: Access reviews are conducted when roles or job functions change
- **Automated Monitoring**: Continuous monitoring of access patterns with alerts for unusual activity

**Review Process:**
1. **Access Inventory**: Complete inventory of all user accounts and permissions
2. **Manager Verification**: Managers verify their team members' access is appropriate
3. **Remediation**: Unnecessary or excessive access is removed immediately
4. **Documentation**: All review findings and actions are documented
5. **Audit Trail**: Review activities are logged for compliance purposes

**Review Frequency Summary:**
- **Annual**: Full comprehensive access review
- **Quarterly**: User access recertification
- **Ongoing**: Real-time monitoring and anomaly detection
- **Event-Driven**: Immediate review upon role change or security incident

### Compliance & Audit

- **Audit Logs**: All access removals and reviews are logged with complete audit trails
- **Documentation**: Access removal and review procedures are documented in our Access Management Policy
- **Standards Alignment**: Reviews align with SOC 2, GDPR, and industry best practices

**Contact:** security@verifik.co | privacy@verifik.co

---

*Verifik LLC - 30 N Gould St, Ste 30338, Sheridan, WY 82801*

