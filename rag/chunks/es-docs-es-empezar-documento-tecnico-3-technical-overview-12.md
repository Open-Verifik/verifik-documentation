---
id: "es-docs-es-empezar-documento-tecnico-3-technical-overview-12"
title: "Documento Técnico — 3. Technical overview"
sourcePath: "docs-es/empezar/documento-tecnico.md"
locale: "es"
category: "empezar"
tags:
  - "empezar"
sourceAnchor: "3. Technical overview"
---

# Documento Técnico

## 3. Technical overview

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
