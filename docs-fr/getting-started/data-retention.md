---
id: data-retention
title: Conservation des données
description: Comment Verifik conserve, masque et purge les images de documents, les champs extraits et les images de visage.
slug: /getting-started/data-retention
---

# Conservation des données

Les réglages du compte, du projet et du flux de projet décident combien de temps Verifik conserve les images du document, les champs extraits enregistrés avec une validation de document, et les images de visage. La politique est inscrite sur chaque nouvel enregistrement. Un changement ultérieur ne réécrit pas les enregistrements déjà présents.

Les enregistrements de facturation, les débits de crédits et l'historique d'usage restent en place lorsque les images sont purgées.

## Modes

| Mode | Effet |
| --- | --- |
| `store` | L'enregistrement est conservé. Définissez `retentionHours` avec un nombre supérieur à 0 pour le rendre éligible à la purge après ce délai. Omettez `retentionHours` pour le conserver sans limite de temps. |
| `ephemeral` | L'enregistrement devient éligible à la purge à la fin du délai webhook lorsqu'un webhook est configuré, et à la prochaine exécution de purge lorsqu'il n'y a pas de webhook. `retentionHours` est ignoré. |
| `none` | Les images du document et les champs d'extraction enregistrés suivent le même délai que `ephemeral`. Une image de visage dans ce mode n'est pas écrite. Les réponses SmartEnroll omettent les URL hébergées et indiquent `hasFrontImage` ou `hasBackImage`. |

Sur un scan de document SmartEnroll, une règle `store` qui inclut `retentionHours` utilise quand même le délai de 24 heures, ou le délai webhook lorsqu'un webhook est configuré. `store` sans heures conserve cette image.

`ephemeral` et `none` partagent le calendrier de purge. Ils diffèrent pour les images de visage et pour le fait que SmartEnroll renvoie des URL hébergées.

## Types que cette politique applique

| Clé | Ce qui est couvert |
| --- | --- |
| `documentImages` | Photos recto et verso d'une validation de document, y compris les fichiers hébergés derrière `url` et `backUrl`. |
| `ocrExtraction` | L'extraction enregistrée sur cette validation. |
| `faceImages` | Selfies et images du visage du document enregistrés pour une inscription ou une connexion. |

Définissez `mode` sur chaque clé. Un `mode` de premier niveau `none` est copié sur les clés que vous laissez vides. Un `store` ou `ephemeral` de premier niveau ne remplace pas ces clés. La requête fiable définit chaque clé qui vous importe.

## Ce qui reste en dehors de cette politique

Ces enregistrements suivent leurs propres règles de stockage. Enregistrer un mode de conservation ne les purge pas :

- Photos de contrôle de présence du document
- Scores de présence et résultats de session
- Corps de webhook, y compris l'extraction portée par le payload
- Journaux de réponses d'API
- Modèles biométriques et collections de visages utilisés quand Smart Access reconnaît une personne qui revient
- Justificatifs chiffrés Human Auth, artefacts à divulgation nulle et vidéo de présence
- L'emplacement de stockage choisi pour un justificatif Human Auth
- Validations de document et images d'identité créées avant qu'un sceau de conservation existe

Les images de document hébergées utilisent des URL ordinaires. Une URL reste valable jusqu'à la purge de ce fichier. Traitez chaque URL d'image comme sensible.

## Préséance

La politique effective est résolue dans cet ordre :

1. **Compte.** La politique enregistrée dans les réglages client.
2. **Projet.** `dataRetention` sur le projet remplace les champs du compte qu'il définit.
3. **Flux de projet.** `dataRetention` sur le flux remplace les champs du projet qu'il définit.

Un niveau qui omet un champ laisse la valeur plus large. Sans aucune configuration, chaque type appliqué est `store` sans limite de temps, et le délai webhook est de 24 heures.

Une politique enregistrée peut prendre environ une minute pour s'appliquer sur chaque instance en cours d'exécution.

## Délai webhook

`webhookHoldHours` est un entier de 24 à 72. La valeur par défaut est 24.

Lorsqu'un webhook est configuré, les enregistrements `none` et `ephemeral` restent au moins ce délai pour que la livraison puisse se terminer. Après la livraison d'un webhook pour cette inscription, les images dans ces modes peuvent être retirées lors d'une purge ultérieure. Les URL d'image du payload peuvent cesser de fonctionner après cette livraison. Copiez toute image encore nécessaire pendant le traitement du webhook.

Les événements terminaux SmartEnroll sont `onboarding_app_registration_completed`, `onboarding_app_registration_needs_manual_verification`, `onboarding_app_registration_completed_without_kyc` et `onboarding_app_registration_failed`.

La politique de conservation ne rédige pas le corps du webhook. Le payload peut contenir l'extraction complète.

## Ce qu'une purge retire, masque et conserve

Lorsqu'une validation de document est purgée :

| Action | Champs |
| --- | --- |
| Retiré | Fichiers d'image hébergés. `url`, `backUrl` et la liste de fichiers sont vidés. |
| Masqué | L'extraction enregistrée et `fullName`. |
| En clair | `documentNumber`, prénom, nom, paramètres de la requête et résultats de filtrage enregistrés sur la validation. |
| La ligne reste | Statut, type et `createdAt`, afin que les décomptes d'usage qui lisent la ligne l'incluent encore. |

La purge d'une image de visage efface les octets de l'image enregistrée.

Une copie chiffrée de l'extraction complète est retirée 30 jours après le scan, y compris lorsque les champs visibles étaient déjà masqués.

Les débits de crédits sont enregistrés lorsqu'un scan réussit. Une purge laisse les enregistrements de facturation et l'historique d'usage en place, et elle n'annule pas un débit.

Supprimer une validation de document ou une inscription d'application retire les fichiers d'image enregistrés et supprime la ligne de validation. L'historique d'usage construit à partir de ces lignes diminue de cette suppression. La tâche de purge laisse la ligne en place.

## Quand la purge s'exécute

Un enregistrement devient éligible à `retention.purgeAfter`. Une purge planifiée retire les enregistrements éligibles environ toutes les 15 minutes. La suppression a lieu à la prochaine exécution réussie, donc le fichier peut rester un court moment après `purgeAfter`. Chaque exécution traite un lot limité. Un arriéré important prend plus d'une exécution.

Il n'existe pas d'endpoint d'effacement manuel. `allowManualDelete` sur un objet de politique est enregistré avec la politique et n'ouvre pas un appel d'effacement séparé.

## Les politiques s'appliquent aux nouveaux enregistrements

Le sceau est écrit à la création de l'enregistrement. Les enregistrements déjà dans le compte gardent le sceau qu'ils ont. Les enregistrements sans sceau restent tels quels. Passer un compte à `none` laisse l'historique enregistré avant ce changement.

## Scans sans projet

`POST /v2/ocr/scan-prompt` et `POST /v2/ocr/scan-agent` suivent cette règle lorsque l'appel n'est pas lié à un projet :

- L'image n'est pas téléversée vers un stockage hébergé.
- `url` et `backUrl` dans la réponse sont des URI `data:` de l'image envoyée. Elles appartiennent à cette réponse. Persistez l'extraction, et gardez votre propre copie de l'image si vous avez encore besoin de la photo.
- Le corps de la réponse contient l'extraction complète.
- La ligne de validation enregistrée stocke une extraction masquée et un `fullName` masqué. `documentNumber` sur cette ligne reste en clair.
- La copie chiffrée de l'extraction complète est retirée après 30 jours.

Un scan de document SmartEnroll est lié à une inscription d'application et utilise la politique résolue du compte, du projet et du flux. La réponse contient l'extraction non masquée. La ligne enregistrée est masquée lorsque `ocrExtraction` vaut `none`. En `none` et `ephemeral`, la réponse omet les URL hébergées.

## Smart Access

Les flux de connexion Smart Access (flux de projet `login`) inscrivent la conservation sur le selfie de connexion.

- `faceImages` à `none` signifie que le selfie de connexion n'est pas enregistré.
- `ephemeral` enregistre le selfie jusqu'à la prochaine exécution de purge. Les flux de connexion sont inscrits sans délai webhook.
- `store` conserve le selfie, pendant `retentionHours` lorsque ce nombre est défini.

La reconnaissance d'une personne qui revient utilise des modèles biométriques et des collections de visages. Ces modèles restent lorsque vous changez cette politique. Les résultats de présence de connexion et les corps de webhook de connexion restent aussi.

## Human Auth

Les validations de document créées pendant l'onboarding Human Auth utilisent les règles SmartEnroll ci-dessus.

Les projets Human Auth peuvent verrouiller `faceImages` sur `none`. Dans ce mode le selfie n'est pas enregistré, et la comparaison document-selfie, qui lit le selfie enregistré, ne s'exécute pas.

La vidéo de présence, les artefacts à divulgation nulle et le justificatif chiffré produit par l'étape de stockage suivent leurs propres règles. Choisir un emplacement pour ce justificatif est distinct de cette politique.

## L'objet `dataRetention`

Envoyez cet objet avec `PUT /v3/projects/{id}`. Envoyez `null` pour hériter à nouveau de la politique du compte.

La même forme sur un flux de projet remplace le projet pour les enregistrements créés dans ce flux.

```json
{
  "dataRetention": {
    "mode": "none",
    "webhookHoldHours": 24,
    "types": {
      "documentImages": { "mode": "none" },
      "ocrExtraction": { "mode": "none" },
      "faceImages": { "mode": "store", "retentionHours": 72 }
    }
  }
}
```

| Champ | Type | Description |
| --- | --- | --- |
| `mode` | `store`, `ephemeral` ou `none` | Base du compte ou du remplacement. Définissez aussi chaque type. |
| `webhookHoldHours` | entier, 24–72 | Délai minimum lorsqu'un webhook est configuré. Défaut 24. |
| `types.documentImages.mode` | mode | Photos du document. |
| `types.documentImages.retentionHours` | nombre ou omis | Utilisé lorsque ce type est `store` et que le nombre est supérieur à 0. Ignoré pour les images de document SmartEnroll. |
| `types.ocrExtraction` | même forme | Extraction enregistrée. |
| `types.faceImages` | même forme | Selfie et images du visage du document. `none` signifie que le selfie n'est pas écrit. |

D'autres clés de type peuvent être présentes sur une politique enregistrée. La purge ne les applique pas.
