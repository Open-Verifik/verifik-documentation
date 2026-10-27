---
id: data-retention
title: Data Retention & Privacy
description: Configure automated storage lifecycle, PII redaction, encryption, and GDPR/Habeas Data compliance in Verifik.
slug: /smartenroll/data-retention
---

import { Shield, Clock, Lock, Trash2, Key, Database, RefreshCw, AlertTriangle } from 'lucide-react';

# Data Retention & Privacy

Verifik provides configurable data retention policies and automated purge mechanisms to help organizations comply with global privacy regulations, including **GDPR (General Data Protection Regulation)**, **Colombia Ley 1581 (Habeas Data)**, and **ISO 27001** data minimization standards.

With granular per-media retention controls, organizations can store images for the minimum necessary duration, redact Personally Identifiable Information (PII), encrypt sensitive extracted data, and execute permanent deletions via API or automated background jobs.

---

## Key Features

<div className="row">
  <div className="col col--4">
    <div className="card">
      <div className="card__header">
        <h3><Shield size={20} style={{display: 'inline', marginRight: '8px', color: '#3b82f6'}} />Granular Retention Modes</h3>
      </div>
      <div className="card__body">
        <p>Choose between <code>store</code>, <code>ephemeral</code>, and <code>none</code> per document type and media category.</p>
      </div>
    </div>
  </div>
  <div className="col col--4">
    <div className="card">
      <div className="card__header">
        <h3><Lock size={20} style={{display: 'inline', marginRight: '8px', color: '#10b981'}} />Encrypted OCR & PII Masking</h3>
      </div>
      <div className="card__body">
        <p>Credit-card style masking for dashboard reviews, with AES-256-GCM encryption for automated government matching.</p>
      </div>
    </div>
  </div>
  <div className="col col--4">
    <div className="card">
      <div className="card__header">
        <h3><Clock size={20} style={{display: 'inline', marginRight: '8px', color: '#f59e0b'}} />Automated Purge & Redaction</h3>
      </div>
      <div className="card__body">
        <p>Scheduled background workers delete DigitalOcean Spaces objects, unset PII, and record tamper-evident audit logs.</p>
      </div>
    </div>
  </div>
</div>

<div className="row" style={{marginTop: '1.5rem'}}>
  <div className="col col--4">
    <div className="card">
      <div className="card__header">
        <h3><Trash2 size={20} style={{display: 'inline', marginRight: '8px', color: '#ef4444'}} />Right to Erasure (GDPR)</h3>
      </div>
      <div className="card__body">
        <p>Dedicated single-record and bulk erasure endpoints permanently delete images and identity fields upon request.</p>
      </div>
    </div>
  </div>
  <div className="col col--4">
    <div className="card">
      <div className="card__header">
        <h3><RefreshCw size={20} style={{display: 'inline', marginRight: '8px', color: '#8b5cf6'}} />Webhook Hold Windows</h3>
      </div>
      <div className="card__body">
        <p>Guaranteed 24h to 72h safety floor to ensure webhook deliveries and retries complete before purging data.</p>
      </div>
    </div>
  </div>
  <div className="col col--4">
    <div className="card">
      <div className="card__header">
        <h3><Database size={20} style={{display: 'inline', marginRight: '8px', color: '#06b6d4'}} />Isolated Spaces Storage</h3>
      </div>
      <div className="card__body">
        <p>All KYC uploads are isolated by client and project IDs under strictly scoped hierarchical keys.</p>
      </div>
    </div>
  </div>
</div>

---

## Retention Modes

Verifik supports three operational storage modes configured at the account, project, or project flow level:

| Mode | Behavior | Best Used For |
| :--- | :--- | :--- |
| **`store`** | Persists files in DigitalOcean Spaces for a specified duration (`retentionHours`). If `retentionHours` is not set, files are kept indefinitely until policy change or manual deletion. | Long-term auditing, KYC re-verification, regulated banking compliance. |
| **`ephemeral`** | Retains images temporarily during the active session. Once the webhook is delivered or the session reaches a terminal state (plus the webhook hold window), objects are purged. | Short-term verification where downstream systems archive the assets. |
| **`none`** | **Zero-storage mode**. Document scans are processed in-memory. Image files are not permanently stored in DigitalOcean Spaces. Results are returned synchronously to the caller. | High-security, strict GDPR compliance, zero-persistence requirements. |

---

## Granular Media Types

Retention settings can be customized per media type:

1. **`documentImages`**: Front and back document photos captured during scanning.
2. **`faceImages`**: Facial photos and selfies captured during biometric enrollment and liveness checks. *(Note: During active enrollment sessions, temporary face images are kept until the comparison completes).*
3. **`ocrExtraction`**: Text data extracted from the document.
4. **`documentLiveness`**: Physical document presence photos and tilt analysis frames.

---

## OCR Masking & AES-256-GCM Encryption

To balance compliance and operational review capabilities, Verifik employs a two-tier OCR security model:

1. **Unmasked Root `documentNumber`**: The top-level document number is stored in clear text to maintain database indexing, exact user lookup, and audit reconciliation.
2. **Masked Presentation (`OCRExtraction`)**: PII fields within the extraction (e.g. document number, names, address) are masked credit-card style (e.g., `10****2104|RS**DLXD` or `JU*N MI***L`). This enables human reviewers in Smart-Agent to identify the document without exposing full personal data.
3. **AES-256-GCM Encryption (`encryptedOcr`)**: The complete raw OCR payload is encrypted using the client/system `RETENTION_PRIVATE_KEY` with a random 12-byte initialization vector (IV) and authentication tag.
4. **On-Demand Decryption**: Verification steps such as `nameValidation` and government lookups (`colombia_api_identity_lookup`, `getCitizenByCountry`) decrypt the payload in-memory on demand to execute name matching.
5. **30-Day Purge**: Raw encrypted OCR is automatically purged after 30 days (`retention.encryptedOcrPurgeAfter`), permanently destroying the raw PII while preserving the masked record for audit history.

---

## Webhook Hold Safety Floor

When records are configured in `ephemeral` or `none` mode, Verifik enforces a minimum **24-hour webhook hold window** (configurable up to 72 hours). 

This guarantees:
- If a client's webhook endpoint is temporarily unreachable, retry chains (which can run up to ~23 hours) will still have access to the data until delivery succeeds.
- Once the terminal webhook is acknowledged, the purge countdown is triggered.

---

## Policy Inheritance Hierarchy

Policies resolve hierarchically with strict safety clamping:

```
System Defaults ➔ Client Account ➔ Project Override ➔ Project Flow Override
```

> [!IMPORTANT]
> **Compliance Floor:** A less restrictive policy cannot override a more restrictive parent policy. For example, if an account enforces `none` mode, a child project flow cannot loosen the mode back to `store`.

---

## Right to Erasure & Manual Deletion

Organizations can trigger immediate erasure via API:

- **Erase Images Only**: `DELETE /v2/document-validations/:id/files` removes Spaces objects while keeping the verification score and status for billing.
- **Erase Enrollee Data (GDPR)**: `DELETE /v2/app-registrations/:id/data` permanently wipes all images, selfies, and PII fields for an enrollee.
- **Bulk Erase**: `POST /v2/data-retention/erase` triggers an asynchronous project-wide purge before a given date.
