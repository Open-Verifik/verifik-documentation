---
id: "en-docs-smartenroll-smartenroll-kyc-flow-step-10-biometric-instructions-6"
title: "SmartEnroll KYC Flow - End User Guide — Step 10: Biometric Instructions"
sourcePath: "docs/smartenroll/smartenroll-kyc-flow.md"
locale: "en"
category: "smartenroll"
tags:
  - "smartenroll"
sourceAnchor: "Step 10: Biometric Instructions"
---

# SmartEnroll KYC Flow - End User Guide

The **SmartEnroll KYC Flow** is a comprehensive identity verification process that guides end-users through a secure onboarding experience. This flow combines multiple verification methods including email validation, phone verification, document scanning, and biometric authentication to ensure the highest level of security and compliance.

## Step 10: Biometric Instructions

Before beginning biometric verification, users receive instructions on how to complete the facial recognition process successfully.

#### Preparation Guidelines

The instructions typically include:

- **Environment Requirements**:
  - Good lighting (natural light preferred)
  - Plain background
  - No face coverings (unless required for medical/religious reasons)
  - Remove glasses if possible (or ensure no glare)

- **Positioning**:
  - Face the camera directly
  - Keep face centered in the frame
  - Maintain appropriate distance (not too close or far)
  - Keep head straight, not tilted

- **Liveness Detection**:
  - Users may need to perform specific actions:
    - Blink eyes
    - Turn head left/right
    - Smile
    - Follow on-screen prompts
  - These actions prove the user is a live person, not a photo or video

- **What to Expect**:
  - Duration of the process
  - Number of attempts allowed
  - What happens if verification fails

:::tip User Tip
Find a quiet, well-lit space before starting biometric verification. Follow the on-screen instructions carefully for the best results.
:::

After reviewing the instructions, users proceed to the actual biometric capture.

---

### Step 11: Biometric Verification

This is the final verification step where users complete facial recognition and liveness detection.

#### Biometric Verification Process

1. **Camera Access**: The system requests permission to access the device's camera (if not already granted).

2. **Face Detection**: 
   - The system detects the user's face in real-time
   - Visual guides help position the face correctly
   - Users see feedback on positioning and lighting

3. **Liveness Detection**:
   - Users perform specific actions as prompted:
     - Blink eyes when instructed
     - Turn head in specified directions
     - Smile or make facial expressions
   - These actions prove the user is physically present

4. **Face Matching**:
   - The system compares the captured selfie with:
     - The photo from the identity document
     - The registration information
   - A similarity score is calculated (must meet the configured threshold)

5. **Real-time Feedback**:
   - Users see immediate feedback on:
     - Face positioning
     - Lighting quality
     - Action completion
     - Overall progress

#### Attempt Limits

Users typically have 3-10 attempts (depending on configuration) to complete biometric verification successfully. If all attempts fail, users may need to:
- Contact support
- Retry the entire process
- Use alternative verification methods (if available)

:::warning Important
- Ensure good lighting and a clear view of your face
- Follow all on-screen instructions carefully
- Don't use photos, videos, or masks
- Keep your face still during capture unless instructed to move
:::

After successful biometric verification, users see the completion screen.

---
