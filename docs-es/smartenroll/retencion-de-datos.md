---
id: retencion-de-datos
title: Retención de Datos y Privacidad
description: Configure el ciclo de vida de almacenamiento, redacción de datos personales, cifrado y cumplimiento GDPR / Ley 1581 en Verifik.
slug: /verifik-es/smartenroll/retencion-de-datos
---

import { Shield, Clock, Lock, Trash2, Key, Database, RefreshCw, AlertTriangle } from 'lucide-react';

# Retención de Datos y Privacidad

Verifik proporciona políticas configurables de retención de datos y mecanismos automáticos de purga para ayudar a las organizaciones a cumplir con las regulaciones de privacidad globales, incluyendo el **RGPD / GDPR**, la **Ley 1581 de Colombia (Habeas Data)** y los estándares de minimización de datos **ISO 27001**.

Con controles de retención granulares por tipo de medio, las empresas pueden almacenar imágenes únicamente durante el tiempo estrictamente necesario, redactar información de identificación personal (PII), cifrar datos sensibles extraídos y ejecutar solicitudes de eliminación permanente mediante API o tareas automáticas.

---

## Características Principales

<div className="row">
  <div className="col col--4">
    <div className="card">
      <div className="card__header">
        <h3><Shield size={20} style={{display: 'inline', marginRight: '8px', color: '#3b82f6'}} />Modos de Retención Granulares</h3>
      </div>
      <div className="card__body">
        <p>Elija entre <code>store</code>, <code>ephemeral</code> y <code>none</code> por tipo de documento y categoría de medio.</p>
      </div>
    </div>
  </div>
  <div className="col col--4">
    <div className="card">
      <div className="card__header">
        <h3><Lock size={20} style={{display: 'inline', marginRight: '8px', color: '#10b981'}} />OCR Cifrado y Enmascaramiento</h3>
      </div>
      <div className="card__body">
        <p>Enmascaramiento estilo tarjeta para revisión humana, junto con cifrado AES-256-GCM para validaciones gubernamentales.</p>
      </div>
    </div>
  </div>
  <div className="col col--4">
    <div className="card">
      <div className="card__header">
        <h3><Clock size={20} style={{display: 'inline', marginRight: '8px', color: '#f59e0b'}} />Purga Automática y Redacción</h3>
      </div>
      <div className="card__body">
        <p>Procesos automáticos eliminan objetos en DigitalOcean Spaces, borran PII y registran auditorías inmutables.</p>
      </div>
    </div>
  </div>
</div>

---

## Modos de Retención

Verifik admite tres modos de almacenamiento configurables a nivel de cuenta, proyecto o flujo de proyecto:

| Modo | Comportamiento | Caso de Uso |
| :--- | :--- | :--- |
| **`store`** | Mantiene los archivos en DigitalOcean Spaces durante la duración especificada (`retentionHours`). Si no se define, se conservan indefinidamente hasta su eliminación manual. | Auditorías a largo plazo, re-verificación KYC, cumplimiento bancario. |
| **`ephemeral`** | Conserva las imágenes temporalmente durante la sesión activa. Una vez entregado el webhook o finalizada la sesión (más el tiempo de retención del webhook), los datos se purgan. | Verificación a corto plazo donde el cliente almacena las imágenes en su propia infraestructura. |
| **`none`** | **Modo de almacenamiento cero**. El escaneo se procesa en memoria. Las imágenes no se almacenan de forma permanente. Los resultados se entregan de forma inmediata al cliente. | Máxima seguridad, cumplimiento estricto de RGPD, cero persistencia de imágenes. |

---

## Enmascaramiento OCR y Cifrado AES-256-GCM

Para equilibrar el cumplimiento normativo con la capacidad de revisión operativa, Verifik implementa un modelo de seguridad OCR de dos niveles:

1. **`documentNumber` principal sin enmascarar**: Se conserva íntegro en la raíz del registro para búsquedas en base de datos, índices y reconciliación de disputas.
2. **Presentación enmascarada (`OCRExtraction`)**: Los campos sensibles dentro del OCR (número de documento, nombres, dirección) se enmascaran estilo tarjeta (`10****2104|RS**DLXD` o `JU*N MI***L`), permitiendo la identificación segura por parte de operadores humanos.
3. **Cifrado AES-256-GCM (`encryptedOcr`)**: La extracción sin enmascarar se cifra mediante `RETENTION_PRIVATE_KEY` con un vector de inicialización (IV) de 12 bytes y etiqueta de autenticación.
4. **Descifrado en memoria bajo demanda**: Procesos como `nameValidation` y consultas a fuentes gubernamentales (`colombia_api_identity_lookup`, `getCitizenByCountry`) descifran la información en memoria sin persistir datos en texto claro.
5. **Purga a los 30 días**: La clave `encryptedOcr` se purga automáticamente a los 30 días (`retention.encryptedOcrPurgeAfter`), destruyendo de forma irreversible los datos personales sin alterar el registro enmascarado.

---

## Ventana de Seguridad de Webhooks

Para registros configurados en modo `ephemeral` o `none`, Verifik aplica un umbral mínimo de **24 horas de retención de webhook** (configurable hasta 72 horas). Esto garantiza que si el servidor del cliente experimenta caídas temporales, las cadenas de reintento de webhook puedan completarse antes de que los datos sean eliminados.

---

## Jerarquía de Políticas

Las políticas se resuelven de forma jerárquica con candados de seguridad:

```
Valores Predeterminados del Sistema ➔ Cuenta del Cliente ➔ Proyecto ➔ Flujo de Proyecto
```

> [!IMPORTANT]
> **Piso de cumplimiento:** Un nivel inferior no puede relajar una política más restrictiva definida en un nivel superior. Por ejemplo, si una cuenta está en modo `none`, un flujo de proyecto no puede cambiar a `store`.
