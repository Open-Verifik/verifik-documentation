---
id: "en-docs-getting-started-lite-paper-2-architecture-8"
title: "Lite Paper — 2. Architecture"
sourcePath: "docs/getting-started/lite-paper.md"
locale: "en"
category: "getting-started"
tags:
  - "getting-started"
sourceAnchor: "2. Architecture"
---

# Lite Paper

## 2. Architecture

The chart above compares the DET performance of state-of-the-art face biometric systems, voice biometric systems, and their combined fusion, alongside Zelf’s optimized approach. For instance, with face biometrics alone, an operating point can be selected where the False Accept Rate (FAR) is as low as 0.00001 (1 in 100,000), with a False Reject Rate (FRR) of approximately 0.06 (6%). This reflects the precision of a single authentication attempt using ZelfProofs.

While voice biometrics exhibit higher individual error rates, integrating voice and face biometrics significantly boosts accuracy, reducing false rejections of valid users. This fusion is effortlessly implemented within Zelf’s mobile app, enhancing user experience. Compared to Android’s Strong Authentication standards—permitting a 10% False Reject Rate and a 1 in 50,000 False Accept Rate—Zelf’s fusion of face biometrics with zero-knowledge proofs far exceeds these benchmarks, achieving an FAR of 1 in 100,000 and an FRR below 6%.

Zelf’s biometric authentication system, powered by Zero Knowledge Face Proofs (ZelfProofs), generates a unique score for each authentication attempt using facial recognition. These scores form a distinct pattern, enabling the system to determine a “verified” or “not verified” outcome. This decision process results in a trade-off between two error types, visualized as a Detection Error Trade-off (DET) Curve (see figure below). The curve illustrates the relationship between False Reject Errors (y-axis, where valid users are incorrectly denied) and False Accept Errors (x-axis, where impostors are incorrectly allowed). Zelf’s technology aims to prevent unauthorized crypto wallet access while ensuring seamless, error-free access for legitimate users, without storing biometric data.

:::success
Zelf's innovation lies in its decentralized design, where facial biometrics regenerate private keys on-device per session, eliminating the need for stored data or external servers. This ensures unmatched privacy through unlinkability and irreversibility, protecting users from impostor attacks without compromising access. By leveraging this advanced authentication, Zelf redefines crypto wallet security, making seed phrase loss impossible and empowering users with true financial sovereignty.
:::

***

**Decryption**:

![](https://1734807472-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FpZcqM4Fiw6bW4Zvc28S3%2Fuploads%2FSTIcwwfZp0WCzHpOOxVa%2Fimage.png?alt=media&#x26;token=509ecbff-0633-443c-9087-a45467d0a88d)

1. For retail users, decryption happens on the user’s device; for enterprise use, it occurs on a self-hosted server for web apps and extensions.
2. By scanning your face, Zelf regenerates the private key to unlock the encrypted metadata, enabling actions like viewing private data or signing transactions.
3. Unlimited decryption is included in Zelf’s yearly license, with usage tracked locally for transparency.

In the cryptocurrency ecosystem, protecting seed phrases against fraud and unauthorized access has become increasingly challenging. Traditional authentication methods, such as passwords and knowledge-based systems are not only inconvenient but also highly vulnerable to breaches. Crypto users, tasked with safeguarding complex seed phrases for wallet access, often face forgotten credentials, compromised accounts, and cumbersome recovery processes. A PYMNTS study reveals that 59% of consumers reuse passwords across accounts, a habit that extends to seed phrase management, *amplifying risks when a single phrase is exposed.*

Zelf redefines this landscape with Zero Knowledge Face Proofs (ZelfProofs), a biometric solution that eliminates the need for memorizing or storing seed phrases. By regenerating private keys on-device using facial recognition—**without servers, databases, or biometric data storage**—Zelf ensures seed phrases are unlosable and secure. This serverless, offline approach not only prevents hacking but also empowers users with seamless, privacy-preserving access, setting a new standard for cryptocurrency wallet security.

**Preview**:

![](https://1734807472-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FpZcqM4Fiw6bW4Zvc28S3%2Fuploads%2FDJOFtjkssa4l2tBO6G0h%2Fimage.png?alt=media&#x26;token=93604d28-6dc0-419a-a8a8-2674b6a6dfef)

1. The preview function allows users to view the public data within a ZelfProof, such as wallet addresses (e.g., Ethereum, Solana, Bitcoin), to confirm its contents before decryption.
2. This ensures users can easily identify the correct ZelfProof without compromising security.
