# Lite Paper

## Zero Trust, Zero Storage: Never lose your seed phrases with Zero Knowledge Face Proofs

### Abstract

The rapid digitization of financial and personal services has transformed how individuals interact with organizations, governments, and decentralized ecosystems. However, this shift has amplified cybersecurity risks, including data breaches, identity theft, and fraud, which threaten the security of sensitive information. Traditional authentication methods, such as passwords, PINs, or stored biometric data, rely on centralized systems like banks, servers, or custodial services, introducing vulnerabilities such as single points of failure and dependency on third-party trust. In the cryptocurrency space, these challenges are particularly acute: private keys, once compromised, lead to irreversible asset loss, undermining the promise of permissionless finance. Moreover, many crypto users lack the technical expertise to securely manage keys, leaving them vulnerable to theft or mismanagement.

Zelf introduces a revolutionary solution with Zero Knowledge Face Proofs (ZelfProofs), a cutting-edge encryption technology that redefines digital identity and asset security. By integrating advanced cryptographic techniques with biometric authentication, Zelf enables users to encrypt and decrypt private keys—such as seed phrases for cryptocurrency wallets—using only their face. Unlike conventional biometric systems or solutions like PassKeys, Zelf stores no biometric data, eliminating the need for servers, databases, blockchains, or internet connectivity. Each ZelfProof (public key) contains encrypted metadata, accessible solely through a user’s face (private key), which is regenerated and destroyed per session, ensuring maximum security and privacy.

This decentralized approach empowers users with unparalleled control, resilience, and accessibility, even in offline scenarios like power outages. By removing intermediaries and leveraging open-source protocols, including decentralized storage solutions like Arweave and IPFS, Zelf fosters transparency and trust without centralized oversight. Zelf’s scalable, zero-cost architecture makes it accessible to millions, from crypto enthusiasts to everyday users, paving the way for a future where individuals securely manage their digital assets with confidence and simplicity. This whitepaper explores how Zelf delivers true financial sovereignty through innovative, user-centric technology.

### Introduction

#### Growing Threats Outpace Traditional Authentication Methods

Traditional authentication methods, primarily relying on passwords and tokens, are increasingly vulnerable to sophisticated cyber threats like phishing, social engineering, and brute-force attacks. Passwords are often weak due to user negligence, and tokens can be lost or stolen, making these methods insufficient for current security demands.

#### Conventional Biometric Systems Store Biometric Data

Biometric authentication leverages unique physiological characteristics such as fingerprints and facial features for identification. While offering enhanced security, traditional biometric systems require storing sensitive biometric data, raising significant privacy concerns. Data breaches involving biometric information are particularly damaging since biometric traits cannot be changed like passwords.

#### **Quantum Algorithms Break Widely Used Cryptographic Methods**

Quantum computing poses a significant threat to existing cryptographic systems like RSA and ECC. Quantum algorithms could potentially break these widely used methods, compromising the security of encrypted data and communications. This necessitates a transition to quantum-resistant cryptographic algorithms to ensure long-term data protection.

### **Introducing Zero Knowledge Face Proofs**

In today's increasingly digital world, the need for secure and privacy- preserving identity verification is more critical than ever. Cybersecurity threats are constantly evolving, and the rise of quantum computing introduces new challenges to traditional cryptographic systems.&#x20;

Zelf addresses these multifaceted issues by combining biometric authentication with advanced cryptographic techniques, including post-quantum cryptography through its **patent-pending** ZK-Face Proofs. By introducing a Face-based Public Key Infrastructure (PKI) and Electronic Identity (eID) system, Zelf enhances security while preserving *user privacy*, *as it eliminates the need to store biometric data*. ZelfProofs innovative and first-of-its-kind approach to biometric authentication through two different cryptographic mechanisms guarantees user privacy and GDPR compliance through its core technologies. Integrating Post-Quantum Cryptography (PQC) with trusted SSL technology, Zelf meets the growing demand for robust identity verification and the encryption of sensitive information. This innovative approach redefines digital identity verification, making online interactions more secure, private, and future proof. Zelf also addresses the pressing issue of how to integrate biometric verification into blockchain applications and solves the problem of trusting the app.

#### **Privacy**

Privacy is a fundamental **right** in the world of decentralized finance, nobody should be able to take away your money. Zelf revolutionary technological **breakthrough** enables *privacy-focused* facial verification **without storing any biometric data** or facial images **anywhere**. This GDPR-compliant technology puts users in control of their identity and data, eliminating privacy risks and ensuring complete security.&#x20;

Zero Knowledge Face Proof solution generates ZelfProofs, which are encrypted, privacy-preserving binary data structures that serve as Verifiable Credentials. These ZelfProof contain no biometric data but are biometrically verifiable using only the eID holder's live face. They are approximately five times smaller than traditional biometric templates and can be stored as QR codes, in NFC chips, or in databases.&#x20;

Unlike traditional biometric systems that store facial images or templates, ZelfProofs contain no biometric data. Instead, they function as "Locked Safes" that can only be unlocked using the live face of the user, aligning with GDPR’s data minimization principle as no biometric data is stored or processed beyond the authentication event.&#x20;

A key feature of Zelf - Zero Knowledge Face Proofs, allows for face verification without revealing or storing actual facial data. This transforms face recognition from a machine learning problem into a cryptographic one, creating tokenized biometrics. Through ZK-Face proofs, verifiers can authenticate users without ever accessing or processing their biometric data, fully complying with GDPR's data protection by design and default.\
\
As we know currently, **traditional Face Recognition** depends on generating and storing a biometric template during enrollment and then subsequently generating and comparing a new template during verification. Since two generated feature vectors/templates can be compared, if one is stored in a database operated by company A and the other is stored in a database operated by company B, a comparison can be made between them to determine if it is the same person. This is despite the fact that company A and company B may be unrelated to each other. This violates the principle of Unlikability in a Privacy by Design framework.

#### **Privacy preservation**

The ability to compare feature vectors/templates with one another in traditional biometrics is what makes the stored data biometric in nature. To enable privacy preservation, a system should be able to generate any number of different data structures (akin to feature vectors/templates) from a single image. If it does so, the data structures generated cannot be compared to one another. Since there is no way to compare the data structures generated by a privacy-preserving framework, if they were stored in separate databases, there would be no way to determine that the data structures correspond to the same person. This satisfies the principle of Unlikability in a Privacy by Design framework and makes the data structures non-biometric in nature.

#### Biometric verifiability

We have seen how two privacy-preserving data structures generated from the same data cannot be compared to determine any kind of similarity. But, given a Biometric Sample (such as a facial image), can it be determined that the privacy-preserving data structure was generated from a similar biometric sample? This is where Zelf's algorithm comes in. It makes possible the verification of privacy-preserving data structures without compromising user privacy.  Although ZelfProofs, the data structures produced by the ZelfEncrypt algorithm, are non-biometric in nature, they can still be used for Biometric Verification.

#### **Unlinkable**

Unlinkability is a core cryptographic property ensuring that two or more data structures—such as Zelf’s Zero Knowledge Face Proofs (ZelfProofs)—cannot be correlated to determine whether they were generated from the same input data (e.g., a user’s facial biometric and associated metadata) or distinct inputs. This property guarantees that each ZelfProof is cryptographically independent, preserving user privacy by preventing external observers from linking multiple proofs to a single user or dataset.

\
In Zelf’s architecture, unlinkability is achieved through advanced zero-knowledge cryptographic techniques. When a user generates a ZelfProof, the system employs a unique combination of biometric data (the user’s face) and metadata (e.g., seed phrases or private keys) to create an encrypted output. Each ZelfProof is generated with fresh cryptographic parameters, ensuring that no identifiable patterns or shared elements exist between proofs, even if derived from the same biometric input. This process eliminates the possibility of cross-referencing ZelfProofs to infer user identity or activity, providing a robust defense against tracking or profiling.\
\
In the context of cryptocurrency wallets, unlinkability is critical for enhancing user privacy and security. Zelf enables users to generate distinct ZelfProofs for multiple wallets or services, each tied to the same facial biometric as the private key. Despite using the same face, each ZelfProof remains cryptographically unique, making it computationally infeasible to link proofs across different wallets or transactions. For example, a user managing assets on Ethereum and Solana can create separate ZelfProofs for each blockchain, and no observer—whether a malicious actor or a service provider—can correlate these proofs to trace the user’s activity across chains. This ensures that user transactions remain private and untraceable, aligning with the ethos of decentralized finance.\
\
Unlinkability is a cornerstone of Zelf’s mission to deliver true financial sovereignty. By ensuring that user interactions with crypto wallets remain private and unlinkable, Zelf addresses a critical pain point in decentralized finance: *the vulnerability of user data to tracking and exploitation*. Combined with Zelf’s offline-capable, zero-cost architecture and integration with decentralized storage solutions like Arweave and IPFS, unlinkability empowers users to control their digital assets with unmatched security and autonomy. This property positions Zelf as a transformative solution for individuals seeking to navigate the decentralized economy without compromising privacy.

#### Irreversibility

Irreversibility is a fundamental cryptographic property ensuring that a Zero Knowledge Face Proof (ZelfProof) cannot be reverse-engineered to reconstruct the original facial biometric used to generate it. Unlike traditional face verification systems, which rely on similarity scores between stored biometric templates and are vulnerable to hill climbing attacks; Zelf’s architecture eliminates such risks by never storing facial data or exposing comparable metrics.\
\
In cryptocurrency wallets, irreversibility safeguards user privacy and security. Even if an attacker intercepts a ZelfProof (public key), they cannot extract the user’s facial biometric or related metadata, such as seed phrases. This ensures that wallet access remains secure, protecting users from identity theft or unauthorized transactions. By generating and destroying the private key (derived from the user’s face) per session, Zelf prevents biometric leakage, reinforcing its decentralized, serverless design.

### 1.  Application Overview

Zelf introduces a groundbreaking approach to encryption that redefines how users secure and access their digital assets. Traditional encryption methods often rely on storing sensitive biometric data or private keys, creating vulnerabilities such as data breaches or lost keys. Zelf eliminates these risks by leveraging Zero Knowledge Face Proofs (ZelfProofs), a novel biometric-based encryption system that generates and destroys private keys per session, ensuring unparalleled security and user autonomy.
\\

Imagine a vault protecting your most valuable possessions. Traditionally, you’d need a physical key or digital PIN to unlock it, which you must safeguard to prevent theft or loss. This creates a single point of failure—if the key is lost or stolen, your assets are at risk. Zelf transcends this limitation by using your face as the key. Each time you access your vault, Zelf regenerates the private key using your biometric data and destroys it after the session. This means no stored keys, no reliance on third-party devices, and no need to memorize complex passwords—just your face, empowering you with seamless, secure access to your digital assets.

#### Decentralization

At Zelf, we believe true financial freedom stems from decentralization—the distribution of control, assets, and authority across a network of independent participants, eliminating reliance on centralized entities like governments, corporations, or servers. Unlike traditional systems with single points of failure, decentralized systems foster autonomy, resilience, and inclusivity by enabling participants to collectively maintain and validate the network.

Zelf achieves decentralization by removing the need for centralized databases and servers, a core challenge in modern cryptography. Our proprietary algorithm operates entirely on your device, ensuring that your sensitive data—such as seed phrases or private keys—never leaves your control. By leveraging open-source tools and public protocols, Zelf ensures transparency and auditability, fostering trust without requiring a central authority. Our technology is licensed as a standalone application, operable locally by the end user, ensuring the user has full ownership of the encryption process and sensitive data, without reliance on a third-party service provider.

For example, Zelf Name Service (ZNS) allows users to encrypt seed phrases into a ZelfProof, a secure binary format that can be stored as a QR code. This ZelfProof contains both public data (e.g., wallet addresses) and private metadata, accessible only by scanning your face. Unlike traditional wallets requiring physical cards or hardware devices to sign transactions, Zelf is hardware agnostic and even operates offline scenarios, such as power outages, as long as your device has battery life. Users can opt to store their ZelfProof locally, in any centralized (ie. Cloud) or decentralized storage solution (ie. Arweave Blockchain or IPFS) ensuring easy access without compromising security.&#x20;

#### **Interoperability and Openness**

Zelf embraces the ethos of Web3 by integrating with open-source protocols and interoperable blockchain ecosystems. Whether bridging assets between Ethereum, Solana, or Polygon, Zelf Name Service enables seamless interaction across chains without relying on centralized infrastructure. This openness empowers users to manage their assets across multiple platforms while maintaining the core principle of decentralization: you depend only on yourself, not blockchains, servers, or third-party services.

#### Scalability and Economies of Scale

Scalability is a critical concern in blockchain and cryptographic systems. From traditional networks like Bitcoin who incur significant costs due to energy-intensive mining or node operations, to centralized cryptographic system that depend on servers and databases, both rely on a variable economies of scale. Zelf can guarantee predictable scalability due to its inheret architecture which permits fixed-cost economies of scale.

### 2. Architecture

Zelf’s architecture is designed for simplicity and security, with three core functions that make encryption intuitive for end users:

#### **Encryption**:

![Encryption Process](https://1734807472-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FpZcqM4Fiw6bW4Zvc28S3%2Fuploads%2FXUHzsIA78nHdmua5rYah%2Fimage.png?alt=media&token=1725fe5e-c3ea-417d-9536-8a24dc6c77b2)

* Users create a ZelfProof in two formats: a raw ZelfProof or a QR code containing its binary representation.
* Inputs include an optional password, an Application Auth Key (for B2B use), and a required FaceBase64 (biometric data). Users can customize settings, such as requiring a live face scan or adjusting tolerance levels (Soft, Regular, Hard).
* The ZelfProof contains public data (e.g., wallet addresses, viewable via preview) and private metadata (encrypted, accessible only with your face).

Zelf’s encryption technology addresses a critical limitation in current biometric-based identity verification systems offered by providers such as FaceTec, Jumio, Onfido, Sumsub, Shufti Pro, Trulioo, ComplyCube, Fractal ID, AuthenticID, and iProov. These systems are built web2 centric, typically requiring storing biometric data in data bases, which introduces privacy and security risks. In contrast, Zelf is a prioneer in biometric encryption without retaining biometric data, a capability that distinguishes it from competitors. While the former providers deliver robust services and hold significant market share in web2, their technologies often lack the same level of innovation needed in decentralized solutions and operate at costs magnitudes higher than Zelf’s solution.

#### Inputs

<table><thead><tr><th width="252.2890625">Property</th><th width="202.984375">Type</th><th>Description</th></tr></thead><tbody><tr><td>identifier</td><td>String * </td><td>identifier that will be saved into the ZK-Face Proof</td></tr><tr><td>faceBase64</td><td>Base64 Blob *</td><td>The selfie in base64 format that will be used to encrypt the ZK-Face Proof</td></tr><tr><td>requireLiveness</td><td>Boolean *</td><td>when set as true, we perform all the liveness validations so we make sure it's not AI, deep fakes or any other form of hack.</td></tr><tr><td>livenessLevel</td><td>String *</td><td>We have different levels of tolerance when it comes to the liveness detection: SOFT, REGULAR, HARD.</td></tr><tr><td>livenessDetectionPriorCreation</td><td>Boolean</td><td>If set as <code>true</code> then the liveness detection happens before the encryption. if this is set as <code>false</code>, it will be done during the encryption process.</td></tr><tr><td>publicData</td><td>Object </td><td>Public information you want to be added to the ZK-Face Proof and anyone can preview it without the face that encrypted it.</td></tr><tr><td>metadata</td><td>Object *</td><td>Private information that you want to be encrypted inside the ZK-Face Proof and only you can see/decrypt it.</td></tr><tr><td>os</td><td>String [DESKTOP, ANDROID, IOS]</td><td>Origin of the request, we save this just to know if this was generated from the SDK in Mobile devices or the Docker Container.</td></tr><tr><td>password</td><td>String (optional)</td><td>the password is used to enforce the encryption even more, it works as the second layer of security.</td></tr><tr><td>referenceFaceBase64</td><td>Base64 Blob (optional)</td><td>When systems or applications have the selfies stored somewhere, we can help them to do a 1:1 comparison of two selfies prior the encryption of the ZK-Face Proof.</td></tr><tr><td>verifierKey</td><td>String (optional)</td><td>This is a custodial password, it works as a third layer of security where the server or SDK has control over certain ZK-Face Proofs so it cannot be decrypted without the verifier authorization.</td></tr></tbody></table>

#### Output:

Once the encryption is done properly and the liveness detection passes the required filters, the ZK-Face Proofs are given in two formats: the raw-format and the QR Code. In the case of the QR code, this works best for Zelf Name Service because it can be saved easily in any decentralized storage system (ie. blockchain, IPFS, Nostr coming soon) and also provides users a distributed backup solution by enabling them to store and safe-guard it locally or in physical form.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="raw" label="Raw ZK-Face Proof">

```json
A4tRJRHFjfFvapODaKRQn7EWdjcfqpCYJya0Lbk/o4iGniVYI/jcKe28v/L4S19Ggn/VLvXW346EB0Gd2QjxshvXYdTx2AS2qWiVcZuyNQul0+d9lPnP++JrBwfhstU3V+qAD1XPqoYuTZJKJXtFdMdUo/bfqhQWfs91p+xQ+inLhr0EDjD6hNmfCwDTjEEvGqHrJV+FaHhqUkJ/xgsapsBpSZUDwXtH+Cybq/gtnMmdRNPSJvTa1dxLDyL6Hmc4goVtn4FF+iMje2DQkaUIw1bti/qYNKnoJhQD9BDqnNDr48X6A2d2mBGam/IKsM7x8pVmOV02JSIdWO9gjRURbD3haWl9LjhIEo35ei5H/mjmrynKbcZJG3PDW7/WmenclEyl4eEq+m3VCLZSaUwnXYawN/A/3GXPGJ7PosFAtnq8fpnkyclaJx9SY4yfN0T3Re3Nd5sdRB94qrCQa/vXX1vx/lYXjTzZ5nw39EHrFwYW8/fV+AGyvu4LNW1dFQ+AxWhlPsHbqJqw56HtqTJ8LC45jJl2Ds8FKgDwYwRPSzPmS98W/hbmJKYEN28CC2X4tLn8CcL9ZnlK/1PfaNc1vnxd+cCIX7zEihCFIk7VeLzRt0Nfy98ob6iyGDuOVO9KZeB/Kz2QX51H63yxSzQBoKVXhyLQeg9O4fXbuMUDh7Vs2z7OcUKflidLW8Vjv6BiF2fQ75NQBshRddWlAPQ+OSbbuSHDvRI6bdgYBWsJW6oyhI8STp6umPzcAmW2IMmHYXVl/V6fApXmYUEzvfiXxYyvXkQ7EBDV0OSDKM4HFvGdiPkt97n/Tw6ujFdm/aKSjIwrSQeiPH2hSa2NnBVNT/sDTpOi22yoFZMq0e6P1l0tgWjvbk78gITr9t1zKwZ63SX1T0k0khjyy3P5p5rLjKQsVve+8yWAnw9hKxA2GjXcE/u8Z0wS4z306oZnfphfp+f/7WAzQVT+LD/Qch8BQl+U95XPS6mS0kVE/SoccrjX2lCfMbXlPLUAS421ZvXzrVfuID7mlyjp8O7kCcg6lHf5nHxK4bAp6Xmdgg==
```

</TabItem>
<TabItem value="qr" label="QR Code ZK-Face Proof">

![QR Code ZK-Face Proof](https://1734807472-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FpZcqM4Fiw6bW4Zvc28S3%2Fuploads%2FGJKWfsvFQqohw2a7LY4h%2Fimage.png?alt=media&token=376fff95-75e6-4b05-aaaf-fc481639699e)

</TabItem>
</Tabs>

#### Liveness detection:

The liveness test is one of the crucial aspects of the technology, we need to make sure that the AI and all the deep Fakes are not able to by-pass the biometric aspect, so for this we implemented different factors that are crutial to keeping it secure against any attack.

:::success
The World Economic Forum says now is the time for businesses everywhere to begin the transition toward a passwordless future and look to biometric authentication as the solution. Whether you are ready to fully embrace a passwordless login approach or want to ease into it, biometric technologies offer a way to improve security and the user experience.
:::

The 2019 Verizon Data Breach Investigations Report reveals that 80% of hacking-related breaches stem from compromised, weak, or reused passwords, exposing the vast vulnerabilities of traditional authentication. In the Web3 era, where cyberthreats and fraud are surging, voice and face biometrics offer a secure, seamless login solution. Unlike passwords, PINs, or "secret" questions, biometrics eliminate the need to memorize anything, ensuring credentials can't be stolen, phished, or traded on the dark web, aligning perfectly with the decentralized, user-centric ethos of Web3.

#### **Is biometric encryption secure enough for Web3 seed-phrases/private keys?**

In the Web3 ecosystem, where seed phrases are critical for securing decentralized wallets, biometric authentication offers a robust alternative. Mature biometric modalities, such as facial recognition and voice authentication, deliver proven matching accuracy for high-stakes use cases like managing crypto assets. Biometrics, combined with liveness detection, minimize the risk of unauthorized access and thwart spoofing attacks, ensuring only the rightful owner can access the wallet.

Biometrics encryption offers a layer of security for exposed seed phrases, which are vulnerable to loss, theft, or phishing. With Zelf’s ZK-Face Proofs, users enjoy robust protection for decentralized finance without memorization. Unlike seed phrases or one-time passcodes, biometrics enable fast, frictionless wallet access and can’t be traded on the dark web. Zelf enhances security by not storing biometric data, positioning it as a leader in biometric encryption.

To understand the security of biometrics in Web3 wallets, consider the potential outcomes of each attempt to verify a claimed identity using biometrics. Excluding spoofing attempts, every biometric verification effort for a Web3 wallet results in one of four possible outcomes:

1. &#x20;:white\_check\_mark:  The real person is verified as the claimed person.
2. &#x20;:white\_check\_mark:  An impostor is rejected as the claimed person.
3. &#x20;:x:  The real person is inaccurately rejected as the claimed person. This is a False Reject Error. The amount of these errors is the False Reject Rate.
4. &#x20;:x:  An impostor is verified as the claimed person. This is a False Accept Error. The amount of these errors is the False Accept Rat

![](https://1734807472-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FpZcqM4Fiw6bW4Zvc28S3%2Fuploads%2FFHUSZYkl9iwrPjKGJ3eI%2Fimage.png?alt=media&#x26;token=db71914f-7d6c-4eab-8d03-ce6c3ab201e1)

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

The preview function is very helpful for many reasons, one of those is that we can retrieve the publicData stored inside the ZK-Face Proof without really going to the process of decryption for the metadata that has been stored safely with your face and an optional password.

Each ZelfProof looks different even thought they contain the exact same content, public data, meta data, face authentication and password. To identify unique ZK-Face Proofs without centralized databases or servers, Zelf leverages decentralized storage solutions like Arweave, IPFS, and Walrus. We upload ZK-Face Proofs as QR codes, each under 70kb, with key-value pairs serving as identifiers. One key, the `ZelfName`, enables efficient querying across these decentralized networks.

***

Zelf’s technology unlocks a world of possibilities for secure, decentralized applications:

1. **Secure Seed Phrase Management:** Encrypt seed phrases with Zelf Name Service and access them using only your face, eliminating the need for hardware wallets or third-party custodians.
2. **Offline Resilience:** Operate in low-resource environments, such as during power outages, as long as your device has power.
3. **Privacy and Control:** Store ZelfProofs locally or on decentralized networks like Arweave or IPFS, ensuring you retain full ownership of your data.
4. **Cross-Chain Compatibility:** Manage assets across multiple blockchains with a single, user-friendly solution.

By removing intermediaries, reducing costs, and prioritizing user control, Zelf delivers a truly decentralized experience that empowers individuals to take charge of their digital lives.

### 3. Technical overview

Biometric authentication, exemplified by Zelf’s Zero Knowledge Face Proofs (ZelfProofs), is revolutionizing cryptocurrency wallet security, offering a seamless alternative to traditional seed phrase management. While this technology enhances usability and protects digital assets, it raises privacy concerns, as biometric data are classified as sensitive personal information under regulations like the GDPR (General Data Protection Regulation). This is especially critical in systems where biometric references are centrally stored, exposing users to risks if compromised. Should an attacker access a subject’s biometric signal representation, the associated reference becomes vulnerable to impersonation, jeopardizing wallet security.

Zelf tackles these risks effectively by regenerating private keys on-device using facial recognition, without storing biometric data. This serverless, offline approach ensures seed phrases remain secure and with permanent access, eliminating the need for centralized databases. By leveraging zero-knowledge proofs, Zelf ensures unlinkability and irreversibility, protecting users from impersonation and advancing its mission of decentralized financial sovereignty.

Zelf’s Zero Knowledge Face Proofs (ZelfProofs) represent a groundbreaking advancement in cryptocurrency wallet security, leveraging cutting-edge biometric authentication to eliminate the vulnerabilities of traditional self-custody wallets and seed phrase management architectures. At the core of this system is the integration of IDLive Face, a passive facial liveness detection technology developed by ID R\&D. IDLive Face employs a single selfie to perform real-time spoofing detection, countering threats such as deepfakes, digitally manipulated images, and AI-generated content without requiring user interaction (e.g., no blinking or head-turning). This is achieved through two synergistic components:

* **IDLive Face Presentation Attack Detection:** Identifies and mitigates physical spoofing attempts, ensuring the authenticity of the facial input.
* **IDLive Face Deepfake Detection:** Protects against advanced digital manipulations, including AI faceswaps, synthetics (e.g., Midjourney, Stable Diffusion), and altered images (e.g., watermarks, screenshots), enhancing resilience against fraudulent access.

Zelf enhances this foundation by combining IDLive Face’s liveness verification with zero-knowledge proofs (ZKPs) to regenerate private keys on-device using facial biometrics. Unlike conventional systems, ZelfProofs do not store biometric data, relying instead on a serverless, offline architecture to encrypt seed phrases into secure, in permanent access formats (e.g., QR codes for storage on Arweave/IPFS).  This technical synergy not only fortifies security against impersonation but also aligns with Zelf’s mission to deliver financial sovereignty, offering a robust, privacy-preserving alternative to hardware wallets and cloud-dependent authentication systems.

IDLive Face’s superiority is further evidenced by its iBeta Level 1 and 2 ISO 30107-3 compliance, achieving a 0% Attack Presentation Classification Error Rate (APCER) in testing, outperforming many rivals like OCR Labs or Facia, which rely on similar certifications but lack the same passive precision. Its ability to detect deepfakes, AI synthetics, and manipulated images using a single selfie, without specialized hardware, surpasses solutions like FaceTec’s 3D FaceMaps, which require complex 3D modeling, or Oz Forensics, which focuses on active challenges. Additionally, IDLive Face’s on-device option reduces latency and enhances privacy, aligning with Zelf’s serverless, offline design and eliminating biometric storage risks inherent in cloud-dependent competitors like Sumsub.

Our liveness detection middleware robustly safeguards users by securing each ZK-Face Proof, ensuring it is uniquely linked to an individual's face and protected against targeted attacks. With IDLive Face integrated into the encryption/decryption process we can safely say that each ZK-Face Proof is highly protected. This ensures that only genuine facial inputs are used to generate/regenerate private keys, protecting seed phrases from spoofing attempts.&#x20;

When we perform a liveness check we get the following criteria considered in the process:

* **probability**: Indicates liveness likelihood (range: \[0,1]); a value ≥ 0.5 confirms a live image.
* **quality**: Assesses image suitability (range: \[0,1]); images below 0.5 are typically rejected.
* **score**: A raw liveness metric (unbound); higher values suggest greater liveness, useful for tuning attack presentation and bona fide presentation classification error rates (APCER/BPCER).
* **OS:** Specifies the environment where the image was captured, with options including IOS, ANDROID, DESKTOP, or UNKNOWN (default). DESKTOP applies to desktop webcams or IP cameras. Specifying the source—encouraged for best results—allows the software to adjust internal settings, improving liveness detection. If unspecified, IDLive Face automatically infers the source from image characteristics, ensuring flexibility.
* **CALIBRATION:** Balances Attack Presentation Classification Error Rate (APCER) and Bona Fide Presentation Classification Error Rate (BPCER):
  * *REGULAR (default):* Prioritizes low APCER for robust spoof protection.
  * *SOFT:* Reduces BPCER for fewer valid user rejections, maintaining acceptable APCER.
  * *HARDENED:* Targets ultra-low APCER with higher BPCER, ideal for high-security needs.

:::info
**APCER** and **BPCER**. These metrics evaluate the system's capability to differentiate authentic users from spoof attempts within Zelf's serverless, offline framework.

* *APCER* (Attack Presentation Classification Error Rate): Represents the rate at which spoofing attacks (e.g., deepfakes, manipulated images) are incorrectly accepted as live. A lower APCER ensures robust protection against unauthorized access, aligning with Zelf's commitment to eliminating seed phrase vulnerabilities.
* *BPCER* (Bona Fide Presentation Classification Error Rate): Indicates the rate at which legitimate users are incorrectly rejected. A lower BPCER enhances user experience, ensuring seamless access to permanent seed phrases without compromising security.

Zelf optimizes these metrics through configurable calibration settings (e.g., REGULAR, SOFT, HARDENED), balancing security and convenience.
:::

### 4. Related work

The convergence of biometric authentication and decentralized cold wallet technology represents a transformative frontier in cryptocurrency security and user experience. **Zelf pioneers** this space by integrating Zero Knowledge Face Proofs (**ZelfProofs**)—a privacy-preserving, serverless solution that leverages *facial recognition* to regenerate *private keys on-device without storing sensitive biometric data*. This approach ensures true decentralization, enhances security, and eliminates reliance on external systems or hardware. To contextualize Zelf’s position, this section examines competitors in two key areas: *biometric authentication for cryptocurrency wallets* and *decentralized cold wallets with advanced security features*. Each competitor is evaluated based on its technology, features, and differentiation from Zelf.\
\
The demand for secure, user-friendly cryptocurrency wallets has spurred innovation in biometric authentication and cold storage solutions. While traditional wallets rely on storing seed phrases or hardware devices, emerging projects are exploring biometrics and zero-knowledge proofs (ZKPs) to streamline access and enhance privacy. Zelf’s unique combination of facial biometrics and ZKPs positions it as a leader in this niche, though several competitors offer comparable features or overlapping technologies. The following analysis highlights the most relevant players in the field.

#### Zengo

* **Technology:** Zengo is a mobile-first cryptocurrency wallet that employs multi-party computation (MPC) and facial recognition (FaceTec is their biometrics provider) for secure key management. It replaces seed phrases by distributing private keys across multiple devices, using biometrics for access authentication. However, this centralized approach stores biometric data as face vectors for decryption comparisons, risking fund loss if hacked. Additionally, if the service provider ceases operations, users could lose access to their recovery method for seed phrases.
* **Key Features:**
  * Facial recognition for user authentication (Provided by Facetec > KYC Biometric provider).
  * MPC-based key distribution, removing the need for seed phrases.
  * Supports major cryptocurrencies
  * *Cloud-based* recovery tied to biometric data.
* **Comparison to Zelf:** Zengo shares Zelf’s use of biometrics but diverges in its reliance on MPC and **cloud infrastructure**. While Zengo offers a seamless experience, its dependence on external systems contrasts with Zelf’s fully decentralized, serverless approach. ZelfProofs regenerate keys offline and locally on-device without storing biometric data, providing superior privacy and autonomy.

#### Dfns

* **Technology:** Dfns provides a decentralized wallet solution with biometric authentication and zero-knowledge credentials. It leverages the **WebAuthn** protocol (supporting facial or fingerprint recognition) and delegated signing to secure transactions without requiring users to manage private keys directly. WebAuthn now is known as **PassKeys.**
* **Key Features:**
  * WebAuthn-based biometric authentication.
  * Zero-knowledge credentials for identity verification.
  * Delegated signing for transaction security.
* **Comparison to Zelf**: Dfns incorporates ZKPs and biometrics, aligning with Zelf’s privacy focus. However, it relies on external protocols and services, whereas ZelfProofs operate entirely offline on the user’s device. This makes Zelf censorship resistance, more decentralized and less vulnerable to third-party risks.\\

#### **AuthenTrend AT.Wallet**

* **Technology:** AuthenTrend’s AT.Wallet is a hardware-based cold wallet that uses fingerprint authentication for access. It remains offline, employing Bluetooth Low Energy for secure pairing with mobile devices.
* **Key Features:**
  * Fingerprint biometric authentication.
  * Air-gapped cold storage.
  * Multi-currency support (e.g., Bitcoin, Ethereum).
* **Comparison to Zelf:** AT.Wallet uses biometrics for security but requires a physical device and stores fingerprint data on the hardware. Zelf’s software-based solution avoids hardware dependencies and regenerates keys per session without retaining biometric data, offering greater flexibility and privacy.

#### **NGrave Zero**

* **Technology:** NGrave Zero is a premium hardware wallet featuring air-gapped operation and fingerprint authentication. It uses a secure element chip and QR code-based signing to ensure transactions remain offline.
* **Key Features:**
  * Air-gapped with no internet connectivity.
  * Fingerprint biometric authentication.
  * EAL7-certified secure element (highest industry standard).
  * Supports multiple cryptocurrencies and NFTs.
* **Comparison to Zelf:** NGrave Zero offers robust security and biometric access, but its hardware-centric design contrasts with Zelf’s device-agnostic approach. Additionally, NGrave stores biometric data on the device, while ZelfProofs prioritize privacy by not retaining such information.

#### **ELLIPAL Titan 2.0**

* **Technology:** ELLIPAL Titan 2.0 is an air-gapped hardware wallet that uses QR codes for transaction signing, ensuring complete isolation from the internet. It supports a broad ecosystem of cryptocurrencies and decentralized applications (dApps).
* **Key Features:**
  * Fully air-gapped with QR code signing.
  * Supports over 10,000 cryptocurrencies and dApps.
  * Tamper-proof with self-destruct mechanism.
* **Comparison to Zelf:** ELLIPAL Titan 2.0 excels in offline security but lacks biometric authentication. Zelf integrates facial recognition with ZK-Face Proofss, providing a user-friendly alternative that doesn’t require physical hardware, making it more accessible and versatile.

#### **SafePal S1**

* **Technology:** SafePal S1 is an air-gapped hardware wallet that uses QR codes for transaction signing and supports a wide range of cryptocurrencies. It integrates with the SafePal app for asset management and dApp interaction.
* **Key Features:**
  * Air-gapped with no Bluetooth, Wi-Fi, or USB connectivity.
  * Supports over 10,000 cryptocurrencies.
  * Self-destruct mechanism for tampering attempts.
* **Comparison to Zelf:** SafePal S1 prioritizes security through isolation but does not offer biometric features. Zelf’s combination of biometric key regeneration and decentralized operation provides a distinct advantage in usability and privacy without hardware constraints.

#### Emerging Projects and Trends

Several nascent projects are exploring the intersection of biometrics, ZKPs, and decentralized wallets, though *they fall short* of Zelf’s specific implementation:

* Polygon ID: Utilizes ZKPs for decentralized identity verification but focuses on credentials rather than biometric wallet authentication.
* zkSafe Wallet: Employs ZKPs and account abstraction for confidential multisig wallets, targeting institutional users like DAOs, without biometric integration.

#### PassKeys (WebAuthn) vs. Zero Knowledge Face Proofs

PassKeys, built on the WebAuthn standard, is a passwordless authentication protocol developed by the FIDO Alliance to enhance security and user experience. It enables biometric (e.g., facial or fingerprint recognition) or device-based authentication (e.g., security keys) to generate public-private key pairs for secure login to websites and applications. PassKeys relies on a trusted authenticator (e.g., a smartphone or hardware token) t**o store private keys and biometric templates**, often **syncing** them across devices via **cloud services like iCloud or Google**. While PassKeys improves security over passwords, it **depends on centralized or semi-centralized infrastructure**, such as relying parties (servers) and cloud storage, which introduces potential vulnerabilities and privacy concerns.\
\
While PassKeys enhances web authentication, its reliance on centralized infrastructure and stored biometrics limits its privacy and autonomy. Zelf’s decentralized, serverless design and Zero Knowledge Face Proofs deliver unmatched security, making seed phrase loss impossible and empowering users with true financial sovereignty.

#### How Zelf Surpasses PassKeys

*Zelf’s Zero Knowledge Face Proofs (ZelfProofs) redefine secure authentication for cryptocurrency wallets by offering a fully decentralized, privacy-first alternative:*

* **No Biometric Storage**: Unlike PassKeys, which stores biometric templates on devices or cloud services, ZelfProofs regenerate private keys on-device using facial biometrics and destroy them post-session, eliminating data leakage risks.
* **Serverless and Offline**: Zelf operates without servers, databases, or internet connectivity, unlike PassKeys’ reliance on relying parties and cloud syncing, ensuring true decentralization and offline functionality.
* **Unlosable Seed Phrases**: Zelf encrypts seed phrases into ZelfProofs, accessible solely via the user’s face, preventing loss without external recovery mechanisms, unlike PassKeys’ device-dependent model.
* **Enhanced Privacy with ZKPs:** Zelf’s zero-knowledge proofs ensure unlinkability and irreversibility, preventing tracking or reverse-engineering of biometric data, a vulnerability in PassKeys’ template-based approach.

### 5. Inheritance

Zelf Proofs offer a robust, privacy-centric solution for cryptocurrency inheritance, enabling family members to recover funds after a loved one’s passing without the risks associated with lost or inaccessible seed phrases. This innovative feature allows users to pre-authorize recovery by encrypting their seed phrases with the facial biometrics of trusted individuals, such as a spouse, children, or other designated heirs, at any point of time inside the Zelf Name Service app or via our SDKs or APIs. Unlike traditional methods that rely on physical seed phrase backups or *third-party custodians*, Zelf empowers users to embed these authorizations secretly within the Zelf Name record stored in the decentralized storage options we provide to the end user, ensuring a seamless and secure contingency plan.

#### **Encryption process: pre-authorizing family members**

The encryption process begins when the wallet owner uses the Zelf mobile app to generate a ZelfProof. During this phase, the owner can opt to include additional authorized faces beyond their own. Using the app’s multi-face encryption feature, the owner captures facial images of family members (e.g., a high-resolution selfie for each). These images are processed *without a liveness test*, allowing flexibility in setup—images can be taken at different times or locations. The ZelfProof encrypts the seed phrase and private key metadata, using the biometric data of all authorized individuals into the cryptographic structure using zero-knowledge proofs (ZKPs). The resulting encrypted data can be stored as a QR code and linked to a Zelf Name, securely archived on decentralized platforms like Arweave or IPFS, or kept locally on the owner’s device. *No biometric data is stored at all*; instead, ZKPs ensure the information is obfuscated and unusable without proper decryption. Your face is your private key, and in this case, your spouse/son/daughter/mother/father face is the private key as well!

#### Decryption and recovery process: ensuring authenticity

Upon the owner’s passing, family members initiate recovery by accessing the Zelf app with their own device. They present their face to the app, triggering the decryption process. Here, IDLive Face’s passive liveness detection is *activated*, requiring a live facial scan to verify the individual’s presence and prevent spoofing attempts (e.g., deepfakes, printed photos). The app generates a private key using the ZK-FaceProof as the public key. If the liveness detection passes successfully, indicated by a probability score ≥ 0.51 | 0.70 | 0.85 \[depending on the configuration in the calibration] from the liveness check, the system regenerates the private key on-device. This key unlocks the encrypted seed phrase, granting access to the wallet and its funds. The liveness check, configurable with settings like REGULAR or HARDENED calibration, balances security (low APCER) and usability (low BPCER), ensuring only authorized heirs can proceed.

Zelf’s serverless, offline architecture ensures the entire process occurs locally, *eliminating reliance on centralized servers or databases.* The use of ZKPs guarantees unlinkability; preventing correlation of authentication attempts, and irreversibility; prohibiting reverse-engineering of biometric data. This protects against unauthorized access even if the QR code is intercepted or seen by other people inspecting the blockchain transactions. Additionally, the one-time key regeneration per session prevents reuse, enhancing security. Family members can repeat the process as needed, with no stored biometric data retained, aligning with GDPR compliance and Zelf’s privacy-first ethos.

To prepare for inheritance, users should document the storage location of the ZelfProof (e.g., a physical QR code copy or purchase a life-time license for the Zelf Name record) and inform trusted family members of their authorized status. While Zelf simplifies recovery, users are encouraged to consult legal advisors to ensure compliance with local inheritance laws, as digital asset transfer rules vary by jurisdiction. This proactive approach ensures a smooth access of funds, preserving the owner’s digital legacy with confidence.

### 6. Enterprise solution

Zelf’s Zero Knowledge Face Proofs (ZelfProofs) technology is positioned to become a primary tool for enterprises seeking robust, privacy-preserving authentication and data security solutions. By leveraging advanced biometric encryption, serverless architecture, and reducing costs to the bare minimum, Zelf offers a transformative platform that addresses the complex demands of organizations across finance, healthcare, government, and beyond. This section explores how Zelf can be integrated as a foundational technology to enhance enterprise operations.

#### Seamless integration into enterprise workflows

Enterprises can deploy ZelfProofs to secure sensitive data, such as cryptographic keys or proprietary metadata, without relying on centralized servers or databases. The technology’s offline capability, powered by on-device key regeneration, allows organizations to implement secure authentication across distributed teams, even in disconnected environments. For instance, financial institutions can use Zelf to encrypt customer seed phrases or transaction data, ensuring compliance with regulations like GDPR while eliminating single points of failure. The integration of IDLive Face’s passive liveness detection further fortifies this process, countering spoofing attempts with real-time verification, making it ideal for high-stakes applications like digital banking or payment processing.

#### Scalability and customization for large organizations

Zelf’s volume-based licensing model enables enterprises to scale deployment according to user base or transaction volume, offering flexibility for global operations. Customizable calibration settings (e.g., REGULAR, SOFT, HARDENED) allow organizations to tune Attack Presentation Classification Error Rate (APCER) and Bona Fide Presentation Classification Error Rate (BPCER) to meet specific security needs—low APCER for maximum fraud protection or low BPCER for user convenience. This adaptability supports diverse use cases, from securing employee access in healthcare to authenticating multi-party transactions in DeFi platforms.

By offering tailored B2B licenses, Zelf can collaborate with fintechs, healthcare providers, and government agencies, providing a competitive edge over hardware-based or cloud-dependent solutions. Educational programs and dedicated support ensure smooth adoption, while premium features like inheritance planning attract large-scale clients. As enterprises prioritize data sovereignty, Zelf’s serverless design positions it as a market leader, driving innovation and securing digital assets at scale.

#### Zelf MPC: Multi-face encryption for succession planning

A standout feature for enterprises is Zelf’s multi-face encryption, enabling organizations to pre-authorize multiple biometric profiles (e.g., executives, IT administrators) for access control or recovery. During setup, authorized personnel can encrypt sensitive systems or wallets with their faces, bypassing liveness checks at this stage. Decryption requires a live scan, ensuring only verified individuals regain access, critical for succession planning or emergency recovery. This feature, combined with secure storage via Arweave/IPFS, provides a resilient backup strategy without compromising privacy.

Zelf’s Multi-Party Computation (MPC) enhanced with multi-face encryption represents a groundbreaking feature, positioning ZelfProofs as a premier solution for enterprise succession planning and access recovery. This capability allows organizations to pre-authorize multiple biometric profiles, such as executives, IT administrators, or designated successors, for secure access to sensitive systems or cryptocurrency wallets.

In traditional crypto wallets, MPC is a cryptographic technique that distributes the private key across multiple parties, ensuring no single entity holds the complete key. For transaction signing, MPC wallets (e.g., ZenGo, Fireblocks) split the key into shares, computed using secure algorithms like Shamir’s Secret Sharing. Each party contributes its share during a signing ceremony, typically over a network, where a trusted computation protocol (e.g., threshold signatures) reconstructs the key temporarily for signing without ever exposing it fully. This enhances security against single-point failures but requires online coordination and trusted infrastructure, limiting offline usability.

Zelf adapts MPC to integrate multiple biometric faces within each ZelfProof, enabling collaborative signing without centralized dependencies. During setup, authorized individuals (e.g., a CEO and CFO) enroll their facial biometrics via the Zelf app, bypassing liveness checks to allow flexible registration. The system encrypts the wallet’s seed phrase and metadata, distributing biometric-derived key shares across the enrolled faces using ZKPs. These shares are embedded in the ZelfProof, stored securely as a QR code on Arweave/IPFS.

For signing transactions, all authorized faces must participate in a decentralized signing ceremony. Each user presents a live facial scan, verified by IDLive Face’s liveness detection, to regenerate their key share. The Zelf app orchestrates the MPC protocol on-device, combining shares via a threshold mechanism (e.g., 2-of-3 faces required) to reconstruct the private key temporarily for signing. The key is then destroyed, ensuring no persistent storage. This offline process, free from servers or internet reliance, guarantees privacy through unlinkability and irreversibility.

This multi-face MPC approach is critical for succession planning, allowing seamless key recovery if an authorized individual is unavailable. Enterprises can configure threshold policies (e.g., 50% of enrolled faces), enhancing resilience. Combined with Zelf’s serverless design, it mitigates risks of data breaches, aligning with GDPR compliance and offering a robust, privacy-preserving alternative to traditional MPC wallets.

#### P2P Identity validation with decentralized KYC using ZelfProofs

Zelf’s Zero Knowledge Face Proofs (ZelfProofs) introduces a transformative use case for Peer-to-Peer (P2P) transactions, offering a decentralized Know Your Customer (KYC) solution that validates identities without storing biometric data. In P2P ecosystems, such as cryptocurrency exchanges, NFT marketplaces, or decentralized lending platforms, trust between parties is paramount. Traditional KYC processes rely on centralized entities that collect and retain sensitive biometric or personal data, exposing users to privacy risks and data breaches. Zelf redefines this paradigm by enabling secure, privacy-preserving identity verification directly between peers.

The process begins when a user enrolls their facial biometric via the Zelf app. IDLive Face’s passive liveness detection verifies the authenticity of the input, countering spoofing attempts without requiring active user actions. The biometric data is then processed using zero-knowledge proofs (ZKPs) to generate a unique, anonymized identity token—embedded within a ZelfProof—without retaining raw biometric information. This token is shared with the P2P counterparty during a transaction, either via a secure QR code or peer-to-peer communication channel.

For validation, the receiving party uses their Zelf app to initiate a liveness check, prompting the sender to provide a live facial scan. The app compares the live scan against the ZKP-derived token, regenerating a temporary verification key on-device. If the liveness probability (e.g., ≥ 0.5) and quality score meet thresholds, the identity is confirmed, enabling the transaction. This process occurs offline, leveraging Zelf’s serverless architecture, with no data stored on centralized servers or databases.

This decentralized KYC approach ensures privacy through unlinkability, preventing correlation of transactions, and irreversibility, preventing reverse-engineering of biometric data. It eliminates the need for third-party KYC providers, reducing costs and compliance burdens while enhancing user trust. Enterprises can integrate this into P2P platforms, offering volume-based licenses, while individuals benefit from a seamless, secure experience. By avoiding biometric storage, Zelf complies with regulations like GDPR, positioning it as a leader in privacy-focused P2P ecosystems.

### 7. Monetization&#x20;

Zelf’s monetization strategy leverages the innovative capabilities of Zero Knowledge Face Proofs (ZelfProofs) to generate sustainable revenue while empowering users with secure cryptocurrency management. The approach is built on a multi-tiered model tailored to diverse market segments, ensuring scalability and long-term growth.

1. **Individual licenses for Zelf Names (B2C):** Users can purchase individual licenses tied to their Zelf Name, granting access to the encryption and decryption of seed phrases. This B2C offering provides a straightforward, affordable way for individuals to secure their crypto wallets, eliminating the risk of seed phrase loss with a one-time or recurring fee per Zelf Name.
2. **B2B Licensing for crypto projects:** Zelf extends its technology to cryptocurrency firms, offering licenses to encrypt metadata and seed phrases based on transaction volume. This allows exchanges, wallets, and DeFi platforms to integrate ZelfProofs’ serverless, privacy-preserving encryption, generating revenue through tiered licensing agreements that scale with usage, enhancing their security offerings.
3. **B2B licensing for web2 applications:** Beyond crypto, Zelf licenses its technology to Web2 businesses for non-crypto use cases—such as secure data encryption for identity verification or customer authentication. Volume-based agreements enable enterprises to adopt ZelfProofs across industries, tapping into a broader market while maintaining the same high-security standards.
4. **Premium inheritance licenses (B2C):** For users seeking advanced features, Zelf offers lifetime licenses for Zelf Names with inheritance capabilities. This premium tier allows pre-authorization of family members’ faces for fund recovery post-mortem, requiring a liveness check for decryption. The higher cost reflects the added value of ensuring a digital legacy, appealing to privacy-conscious crypto holders.

This diversified strategy maximizes revenue potential while aligning with Zelf’s mission of financial sovereignty, offering flexible, secure solutions across consumer and enterprise markets.
