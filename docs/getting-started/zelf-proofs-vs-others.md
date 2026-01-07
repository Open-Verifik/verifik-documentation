# Zelf Proofs vs Others

In the last decade, many ZK-proof solutions have been born with applications in the blockchain industry. Some developers may ask, what's the difference between Zelf Proof and the conventional open-source ZK solutions? Here we present a breakdown for each technology, pointing out their differences, applications, and limits.&#x20;

### Breakdown

<details>

<summary>Zelf Proof (ZK- Face Proofs™)</summary>

**Definition**\
Non-interactive, Highly scalable, small proof size, trusted setup through licensing mechanism.

**ZelfProof** (ZK- Face Proofs™) technology does not rely on conventional zero-knowledge proofs (ZKPs). Yet, it achieves the same objective: verifying the authenticity of a face without revealing any biometric information. By generating a unique ZelfProof, this enables someone to encrypt information with their face without disclousing the face to any third party. the **ZelfProof** does not disclose the face data in any moment. This ensures privacy-preserving and secure identity verification without the need to expose or store biometric data.

**Trusted Setup**

Trusted setup through a licensing mechanism

**Interactivity**

Non-interactive, can be verified offline

**Proof Size**

\~ 2- 3kb and 60 kb in QR format

**Verification Time**

Fast, runs on mobile as well

**Scalability**

Highly scalable as it can run on the mobile directly without any server computation

**Security Assumptions**

ZelfQRs are based on Elliptic Curve cryptography. Face Certificates will soon be quantum-safe.

**Post-Quantum Security**

Face Certificates PQC version are quantum-safe.&#x20;

**Complexity**

Simple SDK

**Transparency**

Trusted setup through a licensing mechanism (not fully transparent).

**Use Cases**

Verification of functional eID attributes (eKYC) \
Proof of presence and unique humanness \
Face-based transaction authentication \
Face-based signup \
Face-based login \
Face-based document/file/disk encryption \
Face-based document/file signing \
National IDs/eID with Offline/Online \
Verification Wallet Security

**Suitability for Blockchain**

**ZelfProofs** can be integrated into an identity blockchain, such as HyperLedger Indy, via the ZelfEncrypt Distributed Ledger Technology (DLT) protocol. This allows for secure, privacy-preserving identity verification on the blockchain without exposing or storing sensitive biometric data.

</details>

<details>

<summary>zk Proof</summary>

A general class of zero-knowledge proofs where one party proves the validity of a statement without revealing information.

**Trusted Setup**

It depends on the specific protocol, typically interactive.

**Interactivity**

Often interactive (multiple rounds of communication between prover and verifier).

**Proof Size**

It can be large depending on the complexity of the proof.

**Verification Time**

It can be slow and depends on the size of the proof and computation.

**Scalability**

Limited, especially for large computations.

**Security Assumptions**

Varies, are often based on standard cryptographic assumptions.

**Post-Quantum Security**

Depends on the cryptographic primitives used (most are not quantum-safe).

**Complexity**

Generally simple, but requires multiple rounds of interaction.

**Transparency**

Varies based on the protocol.

**Use Cases**

Privacy-preserving authentication, data sharing, etc.

**Suitability for Blockchain**

Limited; typically not used directly in blockchains due to larger proof sizes and interactivity.

</details>

<details>

<summary>zk SNARK</summary>

Succinct, non-interactive zero-knowledge proofs with small proof sizes and fast verification.

**Trusted Setup**

Yes (requires trusted setup).

**Interactivity**

Non-interactive (once the proof is generated, no further interaction is needed).

**Proof Size**

Small (a few hundred bytes).

**Verification Time**

Very fast verification.

**Scalability**

Less scalable for very large computations.

**Security Assumptions**

Based on elliptic curve cryptography (ECDLP), not quantum-safe.

**Post-Quantum Security**

No (vulnerable to quantum attacks due to reliance on elliptic curve cryptography).

**Complexity**

More complex due to elliptic curve math and trusted setup.

**Transparency**

Requires trusted setup (not fully transparent).

**Use Cases**

Privacy-focused systems like Zcash, and identity proofs.

**Suitability for Blockchain**

Widely used for privacy in blockchain applications (e.g., Zcash).

</details>

<details>

<summary>zk STARK</summary>

Scalable, transparent zero-knowledge proofs designed for large computations, with no trusted setup.

**Trusted Setup**&#x20;

No (transparent, no trusted setup).

**Interactivity**

Non-interactive (like ZK-SNARKs).

**Proof Size**

Large (kilobytes to megabytes).

**Verification Time**

Fast verification, but slightly slower than SNARKs for small proofs.

**Scalability**

Highly scalable, handles large computations efficiently.

**Security Assumptions**

Based on hash functions (quantum-safe).

**Post-Quantum Security**

Yes (resistant to quantum attacks).

**Complexity**

Simpler than SNARKs, no setup needed, uses basic hash functions.

**Transparency**

Fully transparent (no trusted setup required).

**Use Cases**

Blockchain scaling, large-scale computations (e.g., StarkWare).

**Suitability for Blockchain**

Best suited for blockchain scaling and high throughput DApps (e.g., layer-2 solutions).

</details>
