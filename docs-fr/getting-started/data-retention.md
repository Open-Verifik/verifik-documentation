---
id: data-retention
title: Conservation des données
description: Comment Verifik conserve, masque et purge les images de documents, les champs extraits et les images de visage.
slug: /getting-started/data-retention
---

# Conservation des données

Les réglages du compte, du projet et du flux de projet décident combien de temps Verifik conserve les images du document, les champs extraits enregistrés avec une validation, les images de visage et les images de contrôle de présence du document. La politique est inscrite sur chaque nouvel enregistrement. Un changement ultérieur laisse tels quels les enregistrements déjà présents.

Les enregistrements de facturation, les débits de crédits et l'historique d'usage restent en place lorsque les images sont purgées.

## Modes

| Mode | Effet |
| --- | --- |
| `store` | L'enregistrement est conservé. `retentionHours` supérieur à 0 le rend éligible à la purge après ce délai. Sans `retentionHours`, il est conservé sans limite. `retentionHours` est respecté, y compris sur SmartEnroll. |
| `ephemeral` | L'enregistrement est conservé pendant le délai webhook lorsqu'un webhook est configuré, puis devient éligible à la purge. |
| `none` | L'enregistrement n'est plus conservé après le délai webhook. Une image de visage dans ce mode reste jusqu'à la fin du délai pour que la comparaison document-selfie puisse s'exécuter, puis elle est retirée. Une image de contrôle de présence du document dans ce mode n'est pas enregistrée. |

## Types appliqués

| Clé | Couverture |
| --- | --- |
| `documentImages` | Photos recto et verso d'une validation de document. |
| `ocrExtraction` | L'extraction enregistrée sur cette validation. |
| `faceImages` | Selfies et images du visage du document. |
| `documentLiveness` | Image du contrôle de présence du document. `none` signifie qu'elle n'est pas enregistrée. |

Un mode sur la politique s'applique à chaque type qui ne définit pas le sien. `livenessResults` et `apiResponseLogs` sont refusés.

## En dehors de cette politique

- Modèles biométriques et collections de visages utilisés par Smart Access pour reconnaître une personne qui revient
- Justificatifs chiffrés Human Auth, artefacts à divulgation nulle et vidéo de présence
- L'emplacement choisi pour un justificatif Human Auth
- Validations et images d'identité créées avant un sceau de conservation

Les images hébergées sont privées. `url` et `backUrl` sont des liens `https` qui expirent au bout d'une heure. Ce ne sont jamais des URI `data:`.

## Préséance

Un réglage plus strict ne peut pas être assoupli par un niveau inférieur. `none` est plus strict que `ephemeral`, et `ephemeral` est plus strict que `store`.

1. **Compte.** Politique par défaut. Sans réglage, chaque type est `store` sans limite, et le délai webhook est de 24 heures.
2. **Projet.** `dataRetention` remplace les champs du compte qu'il définit, si le nouveau mode est aussi strict ou plus strict.
3. **Flux.** Même règle par rapport au projet.

Un scan sans projet utilise la politique du compte. La valeur par défaut est `store`.

## Délai webhook

`webhookHoldHours` est un entier de 24 à 72. La valeur par défaut est 24.

Sur SmartEnroll, les images `none` et `ephemeral` deviennent éligibles à la purge seulement après la livraison de `onboarding_app_registration_completed` ou `onboarding_app_registration_completed_without_kyc`. L'heure de purge est la plus tardive entre cette livraison et la fin du délai. Les webhooks précédents du même dossier ne lancent pas la purge.

Les corps de webhook enregistrés sont expurgés après la livraison.

## Purge

| Action | Champs |
| --- | --- |
| Retiré | Fichiers d'image. `url`, `backUrl` et la liste de fichiers sont vidés. |
| Masqué | Les champs personnels qui restent sur la ligne, y compris l'extraction. Le masque garde les 4 derniers caractères. |
| Conservé | La ligne de validation (statut, type, `createdAt`) pour les décomptes d'usage. |

La réponse HTTP d'un scan contient l'extraction complète. Seules les valeurs enregistrées sont masquées. La facturation et l'historique d'usage restent. Une purge n'annule pas un débit.

## Effacement manuel

Quand `allowManualDelete` est true :

```
DELETE https://api.verifik.co/v2/document-validations/{id}/files
DELETE https://api.verifik.co/v2/app-registrations/{id}/data
POST https://api.verifik.co/v2/data-retention/erase
```

Le même en-tête d'autorisation que le reste de l'API est requis. Si `allowManualDelete` est false, les appels sont refusés.

## Calendrier

Un enregistrement devient éligible à `retention.purgeAfter`. Pour une image SmartEnroll `none` ou `ephemeral`, c'est le plus tardif entre la livraison du webhook terminal et la fin de `webhookHoldHours`. Une purge planifiée retire les enregistrements éligibles environ toutes les 15 minutes.

La politique s'applique aux enregistrements créés après son enregistrement. Les enregistrements déjà présents gardent leur sceau.

## Smart Access et Human Auth

`faceImages` à `none` garde le selfie jusqu'à la fin du délai pour que la comparaison document-selfie puisse s'exécuter. Les modèles biométriques de Smart Access restent. `documentLiveness` à `none` n'enregistre pas cette image. La vidéo de présence, les artefacts à divulgation nulle et le justificatif chiffré Human Auth suivent leurs propres règles.

## L'objet `dataRetention`

Envoyez-le avec `PUT /v3/projects/{id}`. `null` réhérite de la politique du compte. Un projet ne peut pas assouplir le compte. La même forme sur un flux remplace le projet lorsqu'elle est aussi stricte ou plus stricte.

```json
{
  "dataRetention": {
    "mode": "none",
    "webhookHoldHours": 24,
    "allowManualDelete": true,
    "types": {
      "documentImages": { "mode": "none" },
      "ocrExtraction": { "mode": "none" },
      "faceImages": { "mode": "store", "retentionHours": 72 },
      "documentLiveness": { "mode": "none" }
    }
  }
}
```
