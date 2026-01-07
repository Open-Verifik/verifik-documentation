# How it works

<iframe 
  width="100%" 
  height="400" 
  src="https://www.youtube.com/embed/BdPJbX_Ku_U?start=4" 
  title="How it works - Zelf Biometric Recovery" 
  frameBorder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
  allowFullScreen>
</iframe>

## Overview

The Zero Knowledge Face Proof uses the user's face as the primary input, optionally combined with metadata and/or a password. A cryptographic AI algorithm generates a random ephemeral public key from the user's face, which is then used to encrypt metadata, producing encrypted bytes called **ZelfProof**. These **ZelfProofs**, which typically contain minimal encrypted metadata and are about 350 bytes in size, can be easily converted into QR codes for various identification mediums.

Instead of comparing facial templates, Zelf verification involves decrypting a given ZelfProof using the correct corresponding private key generated up on a live face scan. A successful decryption verifies the person, while failure indicates a mismatch.

## How does Zelf Name Service works

Zelf is built on a foundation of privacy-preserving cryptography. Here’s an in-depth look at the process:

### **1. Registration (Encrypting)**

* **Face & Metadata Capture**: The user provides a live face scan along with sensitive information like the mnemonic phrase.
* **Zelf Processing**: The captured face data is used as input to generate a private key through proprietary cryptographic algorithms. Importantly, the face data is not stored or used beyond this step, ensuring compliance with the most strict privacy regulations. The system only utilizes the face in the current session to generate a ZelfProof.
  * **ZelfProof Processing**: A **ZelfProof**, which is a privacy-preserving, non-biometric binary structure, is generated. Unlike a biometric template, ZelfProof is:
    * Encrypted
    * Unique to each session
    * Biometrically verifiable but **non-biometric** in **nature**
* **Output**: A new ZelfProof is created every time you encrypt metadata with your face & password (optional). This ZelfProof is later saved in IPFS, Arweave, Walrus, Nostr.
  * **No Reuse Risk**: Even if someone captures your face and password, without the correct ZelfProof for that session, they cannot retrieve the metadata encrypted initially. Similarly, without the right face or password, an old or different ZelfProof will not work.

### **2. Verification (Decrypting)**

* **Live Face Scan**: During the encryption, the user performs a live face scan. This scan is not stored but is used as a cryptographic key to initiate the verification process. ***It’s important to note that the system doesn’t compare the face to any stored biometric data.*** Instead, the face scan acts as a dynamic input to *regenerate* the cryptographic structure (**ZelfProof**) that was created during registration.
* **ZelfProof Matching**: The ZelfProof generated during registration (when the user initially encrypted their data using their face) is dynamically recreated during the decryption process. However, since the ZelfProof is **non-biometric** and unique to each session, the system does not retrieve or store the user's face data. It merely checks that the cryptographic structure matches the one generated during the session without retaining biometric information.
* **Decryption of Private Information**: If the regenerated ZelfProof from the live scan matches the encrypted structure, any optional sensitive information (such as the mnemonic phrase) that was secured during registration is **decrypted**. This allows the user access to their wallet so they can either see the mnemonic phrase to back it up or to sign a transaction inside our Zelf Name Service App.

### 1. *Non-Biometric* Encryption

![](https://1734807472-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FpZcqM4Fiw6bW4Zvc28S3%2Fuploads%2F77yriQFUAYOpMwR5XSRQ%2FImg%20KICKSTARTER-49.png?alt=media&#x26;token=fe025f01-a301-46b4-a7f7-4cf7e571d4bf)

The use of facial biometrics as a core component of the **ZelfProof** creation process introduces a powerful layer of security that is uniquely tied to the individual. As a required encryption key and a private key, the face provides a secure, non-replicable method of protecting sensitive data, while ensuring that only the rightful owner can access or decrypt the information. Here's a detailed breakdown of how the biometric layer enhances security:

#### 1. **Unique and Non-Replicable Key**

* **Biometric Uniqueness**: Every individual’s face is unique, with distinct features such as the distance between the eyes, the shape of the nose, and the contour of the jawline. This uniqueness makes the face an ideal encryption key because it cannot be easily replicated or mimicked by others. Unlike passwords, which can be shared or guessed, facial biometrics are inherently tied to the individual, making them a robust and secure method for encryption.
* **Private Key Functionality**: In the context of the **ZelfProof**, the face functions as a private key, meaning it is the essential element required to unlock or decrypt the encrypted data. Since the private key (i.e., the face) is unique to each person and cannot be easily duplicated, it ensures that only the individual who created the ZelfProof can decrypt or access the associated data.

#### 2. **Liveness Detection: Ensuring Authenticity**

* **Protection Against Spoofing**: Liveness detection is a critical feature that ensures the face being presented during the **ZelfProof** creation or verification process is not just a static image or a video replay, but a live and authentic representation of the individual. This is crucial in preventing spoofing attacks where an attacker might use a photograph, mask, or video to trick the system.
* **Real-Time Verification**: Liveness detection tests for subtle movements, such as blinking, facial expressions, and other micro-movements, to confirm that the face is real and belongs to a live person. This adds an extra layer of security, ensuring that only a legitimate, live individual can generate or verify a **ZelfProof**. This makes the system highly resilient against sophisticated attacks that attempt to bypass facial recognition.

#### 3. **Immutable and Inalienable Security**

* **Cannot Be Stolen or Lost**: Unlike passwords or physical tokens, your face is always with you and cannot be forgotten, lost, or stolen. This immutability ensures that the encryption key is always secure, as it cannot be easily separated from its owner. Even if an attacker gains access to other data, without the specific facial biometric, they cannot recreate or access the **ZelfProof**.
* **Inalienable Identity**: The face, being an integral part of one's identity, is inherently inalienable. It is not something that can be transferred or duplicated in the same way that a password or token could be. This ensures that the security provided by the facial biometric is deeply personal and tightly coupled to the individual’s identity.

#### 4. **Highly Resistant to Brute Force Attacks**

* **Complexity Beyond Conventional Methods**: Brute force attacks rely on systematically trying all possible combinations until the correct one is found. However, replicating a face with the necessary accuracy is virtually impossible, especially when combined with liveness detection. The sheer complexity of accurately mimicking the unique features of a face, in real-time, renders brute force attacks ineffective.
* **Biometric Inviolability**: Because the face is biologically tied to the individual and cannot be easily reproduced by unauthorized parties, it offers a level of inviolability that passwords or tokens alone cannot. This inviolability is further enhanced by the liveness detection, which ensures that only a real, live face can be used for verification.

#### 5. **Privacy-Preserving Encryption**

* **No Storage of Biometric Data**: One of the **critical aspects** of the **ZelfProof** system is that it does **not store** the actual biometric data (i.e., the face). Instead, the face is used to generate a non-biometric, privacy-preserving binary representation that is used for encryption. This means that even if the ZelfProof is compromised, it does not expose the original biometric data, maintaining the user's privacy.
* **Secure Data Transmission**: When the face is used as an encryption key, the data is encrypted in such a way that it can only be decrypted with the same biometric input. This ensures that the data remains secure both at rest and during transmission, providing end-to-end security that is tightly coupled with the user’s biometric identity.

### Traditional password&#x20;

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
