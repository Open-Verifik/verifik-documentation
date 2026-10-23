---
id: "en-docs-getting-started-lite-paper-2-architecture-7"
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

```json
A4tRJRHFjfFvapODaKRQn7EWdjcfqpCYJya0Lbk/o4iGniVYI/jcKe28v/L4S19Ggn/VLvXW346EB0Gd2QjxshvXYdTx2AS2qWiVcZuyNQul0+d9lPnP++JrBwfhstU3V+qAD1XPqoYuTZJKJXtFdMdUo/bfqhQWfs91p+xQ+inLhr0EDjD6hNmfCwDTjEEvGqHrJV+FaHhqUkJ/xgsapsBpSZUDwXtH+Cybq/gtnMmdRNPSJvTa1dxLDyL6Hmc4goVtn4FF+iMje2DQkaUIw1bti/qYNKnoJhQD9BDqnNDr48X6A2d2mBGam/IKsM7x8pVmOV02JSIdWO9gjRURbD3haWl9LjhIEo35ei5H/mjmrynKbcZJG3PDW7/WmenclEyl4eEq+m3VCLZSaUwnXYawN/A/3GXPGJ7PosFAtnq8fpnkyclaJx9SY4yfN0T3Re3Nd5sdRB94qrCQa/vXX1vx/lYXjTzZ5nw39EHrFwYW8/fV+AGyvu4LNW1dFQ+AxWhlPsHbqJqw56HtqTJ8LC45jJl2Ds8FKgDwYwRPSzPmS98W/hbmJKYEN28CC2X4tLn8CcL9ZnlK/1PfaNc1vnxd+cCIX7zEihCFIk7VeLzRt0Nfy98ob6iyGDuOVO9KZeB/Kz2QX51H63yxSzQBoKVXhyLQeg9O4fXbuMUDh7Vs2z7OcUKflidLW8Vjv6BiF2fQ75NQBshRddWlAPQ+OSbbuSHDvRI6bdgYBWsJW6oyhI8STp6umPzcAmW2IMmHYXVl/V6fApXmYUEzvfiXxYyvXkQ7EBDV0OSDKM4HFvGdiPkt97n/Tw6ujFdm/aKSjIwrSQeiPH2hSa2NnBVNT/sDTpOi22yoFZMq0e6P1l0tgWjvbk78gITr9t1zKwZ63SX1T0k0khjyy3P5p5rLjKQsVve+8yWAnw9hKxA2GjXcE/u8Z0wS4z306oZnfphfp+f/7WAzQVT+LD/Qch8BQl+U95XPS6mS0kVE/SoccrjX2lCfMbXlPLUAS421ZvXzrVfuID7mlyjp8O7kCcg6lHf5nHxK4bAp6Xmdgg==
```

![QR Code ZK-Face Proof](https://1734807472-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FpZcqM4Fiw6bW4Zvc28S3%2Fuploads%2FGJKWfsvFQqohw2a7LY4h%2Fimage.png?alt=media&token=376fff95-75e6-4b05-aaaf-fc481639699e)

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
