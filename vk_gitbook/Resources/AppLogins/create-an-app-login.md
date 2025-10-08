# Create an App Login

You cannot create an instance of an `AppLogin` directly. This is a product of interactions between the user and the login options defined in the **Project > ProjectFlow**. AppLogins are generated automatically when the user performs one of the following validation methods:

* **Email Validation**

{% content-ref url="../../services/verifik-access-code-solution-via-api/email-access-example" %}
[email-access-example](https://docs.verifik.co/services/verifik-access-code-solution-via-api/email-access-example)
{% endcontent-ref %}

* **Phone Validation**

{% content-ref url="../../services/verifik-access-code-solution-via-api/phone-access-example" %}
[phone-access-example](https://docs.verifik.co/services/verifik-access-code-solution-via-api/phone-access-example)
{% endcontent-ref %}

* **Biometric Validation**

{% content-ref url="../../services/verifik-access-code-solution-via-api/biometric-access-example" %}
[biometric-access-example](https://docs.verifik.co/services/verifik-access-code-solution-via-api/biometric-access-example)
{% endcontent-ref %}

The AppLogin is tied to the respective validation method used during the login process. Refer to the examples below for the different login methods and how they interact with the AppLogin object.

***

**Access via Email Example**

This example illustrates how an AppLogin is created when the user logs in using an email validation method. The AppLogin will contain an `emailValidation` field that tracks the email-related authentication details.

* **Steps**:
  1. User receives an OTP (One-Time Password) via email.
  2. User enters the OTP on the login page or validate it via another [API](https://docs.verifik.co/resources/email-validations/validate-an-email-validation).
  3. Once verified, an AppLogin object is created with `type:`` `**`email`**.

***

**Access via Phone Example**

This example demonstrates how an AppLogin is generated when the user logs in using a phone-based validation method. The AppLogin will contain a `phoneValidation` field capturing the phone authentication.

* **Steps**:
  1. User receives an OTP via SMS.
  2. User inputs the OTP to log in or validate it via another [API](https://docs.verifik.co/resources/phone-validations/validate-a-phone-validation).
  3. Once the OTP is validated, an AppLogin object is created with `type: phone`.

***

**Access via Biometrics Example**

This example shows how an AppLogin is created when a user logs in through biometric validation. The AppLogin will include a `biometricValidation` field recording the biometric authentication event.

* **Steps**:
  1. User provides biometric data (e.g., facial recognition, fingerprint).
  2. The biometric data is validated using a liveness detection in our web app or it can also be done via another [API](https://docs.verifik.co/resources/biometric-validations/validate-an-app-login-biometric-validation).
  3. Upon successful validation, an AppLogin object is generated with `type:`&#x20;

     ```javascript
     faceLiveness
     ```

***

#### **Note**:

Since AppLogins are automatically created during the interaction process with the **ProjectFlow**'s login methods (email, phone, or biometrics), you do not need to manually create them. Instead, focus on ensuring the correct validation methods are implemented in the login flow.

***

#### **Related Documentation**:

<table data-view="cards"><thead><tr><th></th><th></th><th></th><th data-hidden data-card-target data-type="content-ref"></th></tr></thead><tbody><tr><td>Access via <strong>Email</strong> example</td><td></td><td></td><td><a href="../../services/verifik-access-code-solution-via-api/email-access-example">email-access-example</a></td></tr><tr><td>Access via <strong>Phone</strong> example</td><td></td><td></td><td><a href="../../services/verifik-access-code-solution-via-api/phone-access-example">phone-access-example</a></td></tr><tr><td>Access via <strong>Biometrics</strong> example</td><td></td><td></td><td><a href="../../services/verifik-access-code-solution-via-api/biometric-access-example">biometric-access-example</a></td></tr></tbody></table>
