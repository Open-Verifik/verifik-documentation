---
id: "en-docs-getting-started-how-it-works-traditional-password-x20-5"
title: "How it works — Traditional password&#x20;"
sourcePath: "docs/getting-started/how-it-works.md"
locale: "en"
category: "getting-started"
tags:
  - "getting-started"
sourceAnchor: "Traditional password&#x20;"
---

# How it works

## Traditional password&#x20;

![](https://1734807472-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FpZcqM4Fiw6bW4Zvc28S3%2Fuploads%2FClwRmi1rv2MyacFhOFNX%2FImg%20KICKSTARTER-51.png?alt=media&#x26;token=ee3b865e-a6ee-4beb-9c12-33c0df3afc1b)

Adding a password during the creation of a **ZelfProof** significantly enhances security, creating a multi-layered defense mechanism that makes unauthorized access exceedingly difficult for attackers. Here’s an in-depth explanation of why adding a password increases security:

#### 1. **Multi-Factor Security (Face + Password)**

* **Biometric Factor (Face)**: The first layer of security is the face itself, which is unique to each individual. This means that to recreate the ZelfProof, an attacker would need to have access to the exact facial image that was used during the ZelfProof creation. However, without the corresponding password, even having access to this face image wouldn’t be sufficient.
* **Knowledge Factor (Password)**: The addition of a password introduces a second factor that is not inherent to the individual but is known only to them. This ensures that even if an attacker were somehow able to obtain a similar facial image, they would still need to know the exact password that was used during the creation of the ZelfProof. This knowledge is something that only the user possesses, making it extremely difficult for an attacker to breach the system.

#### 2. **Exponentially Increased Difficulty for Attackers**

* **Unpredictable Combinations**: When a password is added, the ZelfProof is no longer just a product of the face image; it becomes a unique combination of both the face and the password. For an attacker to successfully recreate or break into the ZelfProof, they would not only need to replicate the exact facial features but also guess or know the correct password. The number of possible face-password combinations is virtually infinite, making brute-force attacks impractical and almost impossible to execute within a reasonable time frame.
* **Dual Secrets Requirement**: Hackers would need to breach two distinct secrets: the facial image (biometric data) and the password (a knowledge-based secret). Obtaining one without the other is useless, and each secret is protected in different ways, which adds complexity and reduces the chance of both being compromised simultaneously.

#### 3. **Resilience Against Replay and Spoofing Attacks**

* **Password as an Anti-Spoofing Measure**: Even if an attacker attempts to use a replay attack with a captured image of the face, the lack of the corresponding password renders the attack futile. The ZelfProof algorithm would detect that the combination does not match the original and would reject any attempt to use it for authentication or decryption.
* **Dynamic Security**: Passwords can be changed regularly or be unique to specific transactions or instances, adding a dynamic layer of security that facial images alone cannot provide. This means that even if an attacker somehow learns a previous password, it would not be useful for future ZelfProofs if the password has been updated.

#### 4. **Enhanced Privacy and Data Protection**

* **Minimal Exposure of Sensitive Data**: The use of a password means that even if a database containing ZelfProofs is compromised, the attacker would still be unable to decrypt the data without the corresponding password. This greatly reduces the risk of sensitive information being exposed or misused.
* **Layered Encryption**: The password can be used as an additional key in the encryption process, meaning that the **ZelfProof** is **not only** tied to the user’s face but also to their password. This creates a robust encryption framework where both components are necessary to decrypt and utilize the data.

#### 5. **Mitigation of False Positives**

* **Reducing Risk of Misidentification**: In some rare cases, biometric systems can produce false positives, where an unauthorized person is incorrectly identified as the authorized user. **By requiring a password**, the system adds a safeguard against this by ensuring that only the person who knows the password can complete the authentication process, thereby reducing the chances of a false positive leading to a security breach.

#### 6. **User-Controlled Security**

* **Empowering Users**: By allowing users to add a password, the security of the ZelfProof is placed partly in their hands. Users can choose a password of appropriate complexity and are responsible for its confidentiality, empowering them to take an active role in protecting their sensitive information.
