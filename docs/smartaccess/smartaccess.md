---
id: smartaccess
title: SmartAccess
description: A no-code solution to manage access to your platform securely and efficiently
slug: /smartaccess/smartaccess
---

# SmartAccess

**SmartAccess** is a no-code solution designed to provide secure and seamless passwordless logins for users. This platform enables businesses to offer various authentication methods, including email, phone, and biometric verification, ensuring a user-friendly and secure experience. With SmartAccess, companies can easily integrate these authentication methods without the need for complex coding or infrastructure development.

<img src="/img/smartaccess/smartaccess-overview.png" alt="SmartAccess Overview" />

## Key Features

### 1. Passwordless Authentication

SmartAccess supports multiple methods of passwordless authentication to enhance security and user experience:

* **Email Verification:** Once an email address is provided, a one-time password (OTP) is sent to the email provider to authenticate the end user.
* **Phone Verification:** Once a phone number is provided, a one-time password (OTP) is sent via SMS or WhatsApp to authenticate the end user.
* **Biometric Authentication:** By combining facial recognition (FR) and liveness detection (LD), users can safely verify their identity and give proof of humanity.

### 2. Flexible Configuration

SmartAccess allows businesses to configure the authentication process to their specific needs. Configure the minimum liveness and search scores for biometric verification, choose between fast or accurate search options, and can also suggest end users to do **Biometric Authentication** for a smoother experience.

### 3. Database Integration

Integrating your existing customer database with SmartAccess is straightforward. Businesses can connect their databases through APIs or upload customer data using CSV files. The platform also provides a testing feature to ensure the API connection is correctly configured.

### 4. Customization Options

SmartAccess offers extensive customization options to match your branding requirements:

* **Logo and Image Upload:** Personalize the project by uploading your company's logo and relevant images.
* **Color Customization:** Adjust the color scheme of the authentication interface to align with your brand's identity.

### 5. Team Management

SmartAccess includes a simple yet effective team management system, allowing project owners to invite and assign roles to team members within the platform. This ensures that the right people have the right access levels to manage and monitor the authentication process.

### 6. Real-time Preview

Businesses can preview how their authentication process will look to end-users before finalizing the setup, ensuring that all configurations and customizations meet their expectations.

## Getting Started

### 1. Basic Configuration

<img src="/img/smartaccess/basic-configuration.png" alt="Basic Configuration" />

In the **Basic Configuration** step, you will lay the foundation for your SmartAccess project. This step involves entering crucial project information that will dictate how your authentication processes are managed and what users can expect. Here's what you can customize:

* **Project Name:** Start by giving your project a unique and descriptive name. This will help you identify and manage your projects easily, especially if you plan to run multiple projects through SmartAccess.
* **Allowed Countries:** SmartAccess allows you to specify which countries your project will support. You can choose from a wide range of countries, ensuring that your authentication services are tailored to the geographical regions where your users are located. This feature is particularly useful for businesses with an international presence, as it allows you to comply with local regulations and standards.
* **Contact Information:** Enter the details of your Data Protection Officer (DPO). This includes the name, email, and address. This information is critical for maintaining compliance with data protection regulations, such as GDPR, and ensures that your users have a point of contact for privacy-related inquiries.
* **Privacy Policy & Terms and Conditions URLs:** SmartAccess gives you the flexibility to link to your existing Privacy Policy and Terms and Conditions. This step ensures that users are fully informed about how their data will be used and the terms under which they can use your services. You can update these links at any time, providing agility to adapt to evolving legal requirements or company policies.

This initial setup provides a solid base, ensuring that all subsequent steps align with your project's specific needs and regulatory obligations.

### 2. Configure Login Methods

<img src="/img/smartaccess/login-methods.png" alt="Configure Login Methods" />

The **Login Methods** step is where you define how your users will authenticate themselves. SmartAccess offers a robust range of options that you can customize extensively to meet your business requirements:

* **Email Verification:** Enable or disable email-based authentication. If enabled, you can customize how the email OTPs (One-Time Passwords) are generated and sent. This includes setting the expiration time for OTPs, customizing the email templates to reflect your brand, and deciding whether to require additional verification steps, such as two-factor authentication (2FA).
* **Phone Verification:** SmartAccess supports phone-based verification via SMS and WhatsApp. You can choose to enable one or both options depending on your user base's preferences. Customize the messaging format, language, and delivery time to ensure a seamless experience. Additionally, you can configure fallback options in case the primary method fails, such as sending a second OTP through a different channel.

#### Biometric Authentication

<img src="/img/smartaccess/biometric-authentication.png" alt="Biometric Authentication" />

* **Biometric Authentication:** The platform's biometric capabilities allow users to log in using facial recognition. You have significant control over how this process works:
  * **Liveness Score:** Customize the threshold for liveness detection. This score determines how stringent the system is in verifying that the biometric input is from a live person, not a static image or video.
  * **Search Score:** This score sets the accuracy in search criteria (1:N) of facial recognition. A higher score means an more security, stricter matching criteria, and demands a higher resemblance to the user in order to gain access. The recommended score for optimal performance is 85%.

<img src="/img/smartaccess/biometric-scores.png" alt="Biometric Scores Configuration" />

SmartAccess also includes an option to **Recommend Face Registration** every time a user accesses the project without prior biometric registration. This ensures that users are consistently encouraged to enroll in the most secure authentication method available.

### 3. Connect to Your Database

<img src="/img/smartaccess/connect-database.png" alt="Connect to Your Database" />

The **Connect Database** step is crucial for integrating SmartAccess with your existing user data. This step offers considerable flexibility, allowing you to connect your project to different data sources and ensure seamless operation:

* **API Integration:** Link your customer database with SmartAccess via an API. You'll need to provide the API URL and specify the data type you wish to query (e.g. email, phone number). SmartAccess offers a built-in test feature that allows you to check if the API is correctly linked. This test function is highly customizable—you can simulate different data queries to ensure your system is prepared for real-world use.
* **CSV Upload:** For those who prefer or require it, SmartAccess also supports the bulk upload of customer data through CSV files. This method is ideal for companies transitioning from older systems or those without a readily available API. Once uploaded, the system processes the CSV data, making it instantly accessible for authentication purposes.

<img src="/img/smartaccess/csv-template.png" alt="CSV Template Download" />

**Download/Upload Template.** After downloading the template, fill out the CSV file with the correct criteria and then upload and make final edits.

<img src="/img/smartaccess/csv-upload.png" alt="CSV Upload Process" />

<img src="/img/smartaccess/csv-data.png" alt="CSV Data Processing" />

* **Webhook Configuration:** Establish a webhook that will handle real-time communication between SmartAccess and your backend. This step is customizable based on the specific events you want to monitor (e.g. successful logins, failed attempts, etc.). You can link the webhook to your alert system, enabling immediate responses to critical security events.

<img src="/img/smartaccess/webhook-configuration.png" alt="Webhook Configuration" />

* **Redirect URL:** Set a redirection URL for your project that will guide users to the appropriate landing page after they complete the authentication process. Whether you want users to go to a dashboard, homepage, or a specific application page, this feature ensures a smooth transition and enhances user experience.

<img src="/img/smartaccess/redirect-url.png" alt="Redirect URL Configuration" />

### 4. Customize the Interface

In the **Customize** step, you can fine-tune the appearance of your SmartAccess project to ensure it aligns perfectly with your brand's identity. This step offers a wide range of customization options:

* **Logo Upload:** Upload your company's logo to personalize the project interface. This logo will be prominently displayed across all user-facing pages, reinforcing brand recognition. SmartAccess accepts various image formats, ensuring compatibility with your branding assets.

<img src="/img/smartaccess/logo-upload.png" alt="Logo Upload" />

* **Image Customization:** Besides the logo, you can upload additional images to further enhance the visual appeal of your authentication pages. These images can be used to provide contextual information, showcase your products, or create a more engaging user experience.

<img src="/img/smartaccess/image-customization.png" alt="Image Customization" />

* **Color Scheme:** Tailor the color scheme of your project to reflect your brand's identity. You can customize the colors for various elements, including titles, text, buttons, and backgrounds. SmartAccess provides a palette of predefined colors as well as the option to input custom HEX codes for precise color matching.

<img src="/img/smartaccess/color-scheme.png" alt="Color Scheme Customization" />

This step ensures that your authentication process is not only secure and efficient but also visually appealing and consistent with your overall brand presentation.

### 5. Team Management

In the **Team Management** step, SmartAccess provides a user-friendly interface for managing who can access and control various aspects of your project. This step is particularly important for ensuring that your team is aligned with their roles and responsibilities:

* **Invite Team Members:** You can easily invite team members to join the project. SmartAccess allows you to assign specific roles to each team member, such as Admin, Viewer, or Editor. Each role comes with its own set of permissions, ensuring that users only have access to the functionalities they need.
* **Manage Roles:** SmartAccess provides granular control over role assignments. For example, you can grant viewing rights to certain users who only need to monitor project performance, while giving full administrative rights to those who will manage configurations and integrations.
* **Project Ownership:** Define the project owner, who will have the highest level of control over the project. This person can make critical decisions, including adding or removing team members and changing fundamental project settings.

<img src="/img/smartaccess/team-management.png" alt="Team Management" />

This step ensures that your team is empowered to manage the authentication process effectively, while also maintaining strict control over who has access to sensitive project configurations.

### 6. Finalize and Publish

The **Finalize and Publish** step is where all your configurations and customizations come together. SmartAccess provides a final preview feature, allowing you to see exactly how the project will look and function from the user's perspective:

* **Project Preview:** Before publishing, you can walk through the entire authentication process as an end-user would experience it. This helps identify any last-minute changes or adjustments needed to optimize the user experience.
* **Publishing:** Once satisfied with the setup, simply click the "Publish" button to make the project live. SmartAccess immediately deploys your configurations, making the authentication services available to your users. If needed, you can unpublish the project later for additional adjustments.

This final step emphasizes the ease of use and flexibility that SmartAccess offers, allowing you to launch a fully customized, secure, and brand-consistent authentication solution with confidence.