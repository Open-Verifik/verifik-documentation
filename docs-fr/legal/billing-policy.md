---
id: billing-policy
title: Politique de facturation et de consommation de crédits
description: Règles de facturation des requêtes API et tarification dynamique
slug: /legal/billing-policy
---

# Politique de facturation et de consommation de crédits

**Règles de facturation des requêtes API et tarification dynamique**

**Version 1.0 | Date de publication : 26 octobre 2026**

La présente politique décrit les règles générales de facturation et de consommation de crédits applicables aux services identifiés ici. Les tarifs et conditions particulières sont ceux expressément convenus avec chaque client. La publication de modifications de cette politique ne modifie pas unilatéralement les contrats en vigueur.

## 1. Schéma de facturation de smartCHECK (DB Screening)

### 1.1. Règle générale de facturation

Le schéma de facturation s’applique à la solution smartCHECK (DB Screening), qui permet d’interroger des bases de données gouvernementales.

**Règle générale.** Une réponse HTTP 200 est facturée. Ne sont pas facturés les HTTP 403, 412, 422 et 500, les délais d’attente dépassés, ni les HTTP 409 (y compris l’indisponibilité de la source et les échecs de connexion). HTTP 404 n’est facturé que dans les cas expressément indiqués à la section 1.2.

| Facturé | Non facturé |
| --- | --- |
| 200 | 403 |
|  | 404 |
|  | 409 |
|  | 412 |
|  | 422 |
|  | 500 |
|  | Délai d’attente dépassé |

Aucun point de terminaison hors de Colombie n’est facturé en cas de HTTP 404. Les points de terminaison qui ne figurent pas à la section 1.2 ne sont pas non plus facturés en cas de HTTP 404.

### 1.2. Colombie : exceptions de facturation pour HTTP 404

La présente section est la seule source de frais pour HTTP 404 dans smartCHECK. Toutes les routes ci-dessous correspondent à des API de Colombie. Les délais d’attente dépassés et les défaillances de source en HTTP 409 ne sont pas facturés.

**RUNT** (uniquement un HTTP 404 avec le code de réponse `NotFound`). Les réponses HTTP 409 (par exemple lorsque la source est hors service ou qu’un worker RUNT n’est pas disponible) ne sont pas facturées.

| Nom du produit | Route |
| --- | --- |
| Consultation du conducteur RUNT Colombie | `GET /v2/co/runt/conductor` |
| Consultation du conducteur RUNT Colombie (v3) | `GET /v3/co/runt/conductor` |
| Consultation du véhicule RUNT Colombie | `GET /v2/co/runt/vehiculo` |
| Dossier véhicule complet RUNT Colombie | `GET /v2/co/runt/vehiculo-completo` |
| SOAT véhicule RUNT Colombie | `GET /v2/co/runt/vehiculo-soat` |
| Véhicule RUNT Colombie par plaque | `GET /v2/co/runt/vehicle-by-plate` |
| Véhicule RUNT Colombie par VIN | `GET /v2/co/runt/vehicle-by-vin` |
| Véhicule RUNT Colombie par plaque (simplifié) | `GET /v2/co/runt/vehicle-by-plate-simplified` |
| Véhicule RUNT Colombie par plaque seulement | `GET /v2/co/runt/vehicle-by-plate-only` |

**Affiliations à la sécurité sociale.** Tout HTTP 404 sur la route suivante est facturable, y compris lorsque le message indique une date de délivrance incorrecte. Les échecs de connexion qui renvoient HTTP 409 ne sont pas facturés.

| Nom du produit | Route |
| --- | --- |
| Affiliations à la sécurité sociale Colombie | `GET /v2/co/afiliaciones` |

**Évaluation de véhicule SIBGA** (uniquement un HTTP 404 avec le code de réponse `NotFound`).

| Nom du produit | Route |
| --- | --- |
| Évaluation de véhicule SIBGA Colombie | `GET /v2/co/sibga/valuation` |

**Carte de citoyenneté colombienne (cédula).** Seul un HTTP 404 dont le message est `CEDULA NO EXISTE` est facturé, au tarif du contrôle de validité. Tout autre HTTP 404 sur la route suivante n’est pas facturé. `GET`/`POST /v2/co/cedula/vigencia` ne facture pas ses propres réponses HTTP 404.

| Nom du produit | Route |
| --- | --- |
| Consultation de la cédula de citoyenneté colombienne | `GET` / `POST /v2/co/cedula` |

**Non facturé en HTTP 404 :** les autres routes RUNT de Colombie (y compris les consultations de propriétaires), tout point de terminaison hors de Colombie et toute route non listée dans la présente section. La preuve de vie faciale peut facturer un HTTP 409 en cas d’échec du liveness ; elle n’est pas facturée en HTTP 404. smartBatch utilise HTTP 404 uniquement pour marquer des lignes comme réussies et ne débite pas de crédits pour ces réponses.

## 2. Requête dynamique pour smartCHECK

La description technique de la requête dynamique figure à la [section 5 de l’accord de niveau de service](/verifik-fr/legal/service-level-agreement#requete-dynamique). La présente politique ne la reproduit pas.

Aux fins de facturation, sur les points de terminaison compatibles, Verifik peut interroger automatiquement et séquentiellement des sources d’information alternatives lorsque la source principale ne produit pas un résultat satisfaisant. La requête dynamique peut allonger les temps de réponse parce qu’elle exige des consultations successives. Verifik peut modifier, prioriser ou remplacer les sources utilisées afin d’optimiser le service, sans que cela autorise une modification unilatérale des tarifs convenus.

## 3. Tarification dynamique de la consultation de cédula colombienne {#dynamic-pricing-billing}

Le client reconnaît et accepte que les consultations effectuées au moyen des points de terminaison `GET`/`POST /v2/co/cedula` peuvent être soumises à une tarification dynamique, en fonction de la source d’information utilisée et du résultat obtenu par le mécanisme de requête dynamique décrit à la [section 5 de l’accord de niveau de service](/verifik-fr/legal/service-level-agreement#requete-dynamique) et visé à la section 2 de la présente politique.

### 3.1. Application des tarifs standard et premium

Lorsque la consultation aboutit (HTTP 200) au moyen des sources standard, le tarif standard du service de consultation de la cédula colombienne s’applique.

Lorsque les sources standard ne produisent pas de correspondance satisfaisante et que la requête dynamique obtient une réponse satisfaisante (HTTP 200) au moyen d’une source de vérification étendue ou premium, le tarif premium correspondant s’applique, même si le client a utilisé le point de terminaison standard.

Les tarifs standard et premium sont ceux expressément convenus avec chaque client dans son contrat ou dans le barème accepté par les deux parties.

### 3.2. Rapport avec les tarifs contractuels

Pour les points de terminaison `GET`/`POST /v2/co/cedula`, la catégorie standard ou premium est déterminée conformément à la présente politique, à condition que le contrat applicable incorpore expressément cette règle. En cas de conflit avec un tarif général par consultation, la règle spécifique de sélection de catégorie prévaut uniquement lorsque le contrat le prévoit.

Cette règle n’autorise pas Verifik à modifier unilatéralement la valeur des tarifs déjà convenus.

### 3.3. Réponses non satisfaisantes et exceptions de facturation

Les réponses HTTP 404 ne sont facturées que conformément aux exceptions de la section 1.2 et au tarif qui y est défini.

Les autres réponses non facturables sont régies par la section 1.1.

### 3.4. Transparence de la facturation {#include-cost}

Le client peut utiliser le paramètre `includeCost=true` sur les requêtes éligibles afin d’obtenir des informations sur les crédits facturés.

L’historique des requêtes API permet de consulter les enregistrements de consommation et les ajustements de facturation correspondants, y compris les cas dans lesquels le tarif premium s’applique au moyen de la requête dynamique.

### 3.5. Consultation premium directe

Les consultations effectuées directement au moyen du point de terminaison `/v2/co/cedula/premium` sont soumises au tarif premium correspondant, que le mécanisme d’escalade automatique ait été utilisé ou non.

Les dispositions de la présente section s’appliquent exclusivement aux points de terminaison identifiés ici et ne modifient ni les tarifs ni les conditions de facturation des autres services contractés.

Consultez la [cédula colombienne (consultation de base)](/identity-validation/colombia/colombian-citizen) pour le détail de l’API.

**Vigueur et conditions particulières.** En cas de divergence, les conditions économiques expressément acceptées dans le contrat commercial prévalent, à l’exception des dérogations de tarification dynamique que ce contrat incorpore de manière spécifique.
