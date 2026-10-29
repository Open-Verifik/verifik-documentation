---
id: "es-docs-es-smartaccess-smartaccess-2-configurar-metodos-de-inicio-de-sesion-3"
title: "SmartAccess — 2. Configurar Métodos de Inicio de Sesión"
sourcePath: "docs-es/smartaccess/smartaccess.md"
locale: "es"
category: "smartaccess"
tags:
  - "smartaccess"
sourceAnchor: "2. Configurar Métodos de Inicio de Sesión"
slug: "/acceso-inteligente"
url: "https://docs.verifik.co/verifik-es/acceso-inteligente"
---

# SmartAccess

**Acceso Inteligente** es una solución sin código diseñada para proporcionar inicios de sesión seguros y sin contraseñas para los usuarios. Esta plataforma permite a las empresas ofrecer varios métodos de autenticación, incluyendo verificación por correo electrónico, teléfono y biométrica, asegurando una experiencia amigable y segura para el usuario. Con Acceso Inteligente, las empresas pueden integrar fácilmente estos métodos de autenticación sin la necesidad de codificación compleja o desarrollo de infraestructura.

## 2. Configurar Métodos de Inicio de Sesión

El paso de **Métodos de Inicio de Sesión** es donde defines cómo tus usuarios se autenticarán. Acceso Inteligente ofrece una gama robusta de opciones que puedes personalizar extensamente para cumplir con los requisitos de tu empresa:

* **Verificación por Correo Electrónico:** Habilita o deshabilita la autenticación basada en correo electrónico. Si está habilitada, puedes personalizar cómo se generan y envían los OTPs (Contraseñas de Un Solo Uso) por correo electrónico. Esto incluye establecer el tiempo de expiración para OTPs, personalizar las plantillas de correo electrónico para reflejar tu marca, y decidir si requerir pasos de verificación adicionales, como autenticación de dos factores (2FA).
* **Verificación por Teléfono:** Acceso Inteligente soporta verificación basada en teléfono vía SMS y WhatsApp. Puedes elegir habilitar una o ambas opciones dependiendo de las preferencias de tu base de usuarios. Personaliza el formato de mensaje, idioma y tiempo de entrega para asegurar una experiencia fluida. Además, puedes configurar opciones de respaldo en caso de que el método primario falle, como enviar un segundo OTP a través de un canal diferente.

#### Autenticación Biométrica

* **Autenticación Biométrica:** Las capacidades biométricas de la plataforma permiten a los usuarios iniciar sesión usando reconocimiento facial. Tienes control significativo sobre cómo funciona este proceso:
  * **Puntuación de Vida:** Personaliza el umbral para detección de vida. Esta puntuación determina qué tan estricto es el sistema en verificar que la entrada biométrica es de una persona viva, no de una imagen estática o video.
  * **Puntuación de Búsqueda:** Esta puntuación establece la precisión en criterios de búsqueda (1:N) de reconocimiento facial. Una puntuación más alta significa más seguridad, criterios de coincidencia más estrictos, y demanda una mayor semejanza al usuario para obtener acceso. La puntuación recomendada para rendimiento óptimo es 85%.

Acceso Inteligente también incluye una opción para **Recomendar Registro Facial** cada vez que un usuario accede al proyecto sin registro biométrico previo. Esto asegura que los usuarios sean consistentemente alentados a inscribirse en el método de autenticación más seguro disponible.
