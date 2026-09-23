---
id: "es-docs-es-biometrics-humanauthn-vs-ur-codes-ventajas-de-humanauthn-sobre-ur-codes-3"
title: "HumanAuthn vs UR Codes — Ventajas de HumanAuthn sobre UR Codes"
sourcePath: "docs-es/biometrics/humanauthn-vs-ur-codes.md"
locale: "es"
category: "biometrics"
tags:
  - "biometrics"
sourceAnchor: "Ventajas de HumanAuthn sobre UR Codes"
slug: "/biometrics/humanauthn-vs-ur-codes"
url: "https://docs.verifik.co/verifik-es/biometrics/humanauthn-vs-ur-codes"
---

# HumanAuthn vs UR Codes

## Ventajas de HumanAuthn sobre UR Codes

### Sin Almacenamiento Biométrico

Los UR Codes almacenan datos biométricos. HumanAuthn no almacena ninguno.

Esto elimina:
- Riesgos de bases de datos biométricas
- Filtración de plantillas
- Clonación de identidad

---

### Sin Dependencia de Emisor

Los UR Codes dependen de emisores de identidad. HumanAuthn funciona sin ellos.

Esto habilita:
- Identidad soberana
- Autenticación descentralizada
- Creación de identidad sin permisos

---

### Seguridad con Claves Efímeras

**UR Codes:**
- Contenedor de identidad estático
- Artefacto reutilizable

**HumanAuthn:**
- Regenera claves por sesión
- Sin claves en reposo
- Sin secretos persistentes

---

### Identidades No Vinculables

**UR Codes:**
- Misma identidad reutilizada

**HumanAuthn:**
- Identidad criptográfica nueva
- Credenciales no vinculables

---

### Autenticación Criptográfica vs Coincidencia

Los UR Codes se basan en **comparación biométrica**. HumanAuthn usa **reconstrucción criptográfica de claves**.

Esto elimina:
- Umbrales de coincidencia
- Falsos positivos
- Ataques de similitud de plantillas

---

## Evolución de la Identidad Biométrica

```
2005 — Pasaportes Electrónicos Biométricos
Almacenaban plantillas biométricas en chips NFC
↓
UR Codes
Almacenaban plantillas biométricas en códigos QR firmados
↓
HumanAuthn
Sin almacenamiento biométrico.
Identidad derivada de la presencia humana.
```

---

## El Cambio de Identidad Almacenada a Criptografía Condicionada por el Ser Humano

Los UR Codes mejoraron la portabilidad de la identidad. HumanAuthn elimina por completo la identidad almacenada.

- Los UR Codes **almacenan** la identidad.
- HumanAuthn **reconstruye** la identidad.
- Los UR Codes verifican **quién eres**.
- HumanAuthn prueba **que solo tú puedes descifrar**.

---
