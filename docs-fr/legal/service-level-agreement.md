---
id: service-level-agreement
title: Accord de niveau de service
description: Accord de niveau de service et support Verifik
slug: /legal/service-level-agreement
---

# Accord de niveau de service

**Dernière mise à jour : 21 octobre 2026**

### **Accord de niveau de service**

#### **1. Canaux de service. L'Utilisateur aura accès aux canaux de service Verifik suivants :**

1. Chat disponible sur [Verifik.co](http://verifik.co)
2. E-mail : support@verifik.co
3. Canal WhatsApp du service client.
4. Canal Discord du service client.

#### **2. Heures d'ouverture**

L'Utilisateur pourra accéder au support fourni par Verifik, du lundi au vendredi (jours ouvrables), de 8h00 à 17h00, heure de Colombie.

#### **3. Niveaux de criticité**

Les demandes ou exigences adressées par les Utilisateurs à l'équipe d'assistance seront classées selon l'impact sur l'exploitation de l'Utilisateur, comme suit :

| | |
| --- | --- |
| **Critique :** | Indisponibilité totale du service. |
| **Urgent :** | Perte d'une fonctionnalité spécifique pour tous les cas d'usage. |
| **Moyen :** | Perte de fonctionnalité dans des cas spécifiques. |
| **Normal :** | Autres demandes ou questions générales qui n'affectent pas la Disponibilité du service. |

#### **4. Délais de réponse**

**Définitions :** Les termes utilisés dans cette section ont les significations suivantes :

i. Prise en charge : délai entre la demande ou l'exigence et l'attribution d'un agent de service.

ii. Examen : délai entre l'accueil de l'agent et la première réponse concernant la demande ou l'exigence.

iii. Escalade : délai entre l'escalade par l'agent et l'examen du dossier par la personne à qui il a été transmis. Ce délai s'applique uniquement lorsqu'il est nécessaire d'escalader la demande ou l'exigence de l'Utilisateur.

iv. Résolution : délai entre l'accueil de l'agent et la résolution du dossier.

Le délai de réponse varie selon la criticité de l'exigence, comme suit :

| **GRAVITÉ/DÉLAI** | **PRISE EN CHARGE** | **EXAMEN** | **ESCALADE** | **RÉSOLUTION** |
| ----------------- | ------------------- | ---------- | ------------ | -------------- |
| **Critique** | 0,5 h | 0,5 h | 15 min | 48 h |
| **Urgent** | 0,5 h | 0,5 h | 15 min | 48 h |
| **Moyen** | 1 h | 1 h | 0,5 h | 96 h |
| **Normal** | 1 h | 1 h | 0,5 h | 96 h |

**Remarque :** 48 h signifie que nous pouvons prendre jusqu'à 48 heures pour résoudre l'incident selon sa complexité.

Les délais de réponse sont comptés à partir du dernier message envoyé par l'Utilisateur.

##### **4.1. Tickets critiques dans le panneau client**

Les Utilisateurs peuvent ouvrir un ticket de priorité Critique depuis le panneau client lorsque le trafic de production est bloqué. Pour ces tickets :

- Verifik envoie une première réponse dans les 24 heures suivant la soumission.
- Verifik vise à résoudre le ticket dans les 48 heures suivant la soumission.
- Les deux délais courent en heures civiles à partir de la soumission du ticket, et le panneau les affiche dans le fuseau horaire de support de l'Utilisateur.
- Les tickets critiques sans réponse du personnel sont escaladés en interne avant l'échéance de première réponse.

Ces délais s'appliquent aux tickets ouverts via le panneau client. Les délais de prise en charge, d'examen et d'escalade du tableau ci-dessus s'appliquent aux conversations sur les canaux de service de la Section 1.

#### **5. Disponibilité de la plateforme**

La Plateforme sera disponible au minimum :

| **Égal ou supérieur à** | **Inférieur à** | **Produit** | **Remarques** |
| --- | --- | --- | --- |
| 90,00 % | 89,99 % | smartCHECK (DB Screening) | L'API DB Screening dépend des connexions aux sources gouvernementales |
| 99,00 % | 98,99 % | smartACCESS, smartENROLL (E-mail/Tél) | Aucune compensation en crédits |
| 99,00 % | 98,99 % | smartACCESS, smartENROLL (Biométrie) | Aucune compensation en crédits |
| 99,00 % | 98,99 % | smartENROLL, smartACCESS (Numérisation de documents) | Aucune compensation en crédits |

##### **5.1. Exclusions de disponibilité par point de terminaison**

En raison du caractère historiquement imprévisible de la disponibilité opérationnelle de certaines sources de données externes, des points de terminaison spécifiques sont exclus des engagements de Disponibilité de la plateforme et des dispositions de Compensation pour indisponibilité du présent Accord.

Les points de terminaison suivants sont exclus :

- Mexique – Validation INE
- Mexique – Validation de plaque d'immatriculation

Les interruptions, périodes de maintenance, performances dégradées, réponses retardées ou indisponibilité temporaire affectant ces points de terminaison ne doivent pas :

- être considérées comme une Indisponibilité de la plateforme ;
- être incluses dans les calculs de Disponibilité de la plateforme ;
- ouvrir droit à des Crédits de service ou à toute autre compensation au titre du présent Accord.

Verifik continuera d'accomplir des efforts commercialement raisonnables pour maintenir la connectivité et rétablir le service lorsque cela est possible ; toutefois, aucune garantie de disponibilité n'est fournie pour les points de terminaison listés.

##### **5.2. Mesure de la disponibilité**

La disponibilité est calculée par compte pour chaque mois civil en UTC :

```
disponibilité = requêtes réussies / (requêtes réussies + défaillances du service)
```

- Les défaillances du service sont les requêtes qui expirent, renvoient une erreur 5xx ou une réponse 408 ou 504, ou indiquent que le point de terminaison est hors service.
- Les erreurs client sont exclues du calcul. Elles comprennent les paramètres invalides ou manquants, les enregistrements introuvables dans la source, les erreurs d'authentification et d'autorisation, et les autres réponses 4xx.

Les Utilisateurs peuvent consulter leur disponibilité mensuelle dans le panneau client sous Contrôle de statut et via l'[API d'utilisation](/resources/usage#get-monthly-availability). Les deux incluent une ventilation par service, de sorte que les requêtes vers les points de terminaison de la Section 5.1 peuvent être séparées du reste. Ces points de terminaison restent hors des engagements du présent Accord.

##### **5.3. Objectifs spécifiques au contrat**

Le panneau client et l'API d'utilisation comparent chaque mois à un objectif SmartCHECK de 95 %. Cet objectif s'applique aux comptes dont l'accord commercial le prévoit. Pour les autres comptes, le chiffre est informatif et les engagements de la Section 5 s'appliquent. Un objectif contractuel n'ajoute pas de compensation en crédits au-delà de la Section 6, sauf si l'accord le prévoit.

#### **6. Compensation pour indisponibilité**

La compensation en crédits accordée pour le mois concerné est fournie sous forme de crédit équivalent au coût de l'appel de service ayant échoué. Si l'indisponibilité du service est causée par des Problèmes internes de Verifik (base de données, serveurs, problèmes d'API internes) et n'est pas effectivement résolue par la Société, Verifik compensera comme suit :

| **Égal ou supérieur à** | **Inférieur à** | **Compensation en crédits par niveau de service** | **Produit** |
| --- | --- | --- | --- |
| 90,00 % | 89,99 % | Aucune compensation en crédits | smartCHECK (DB Screening / Requête de données) |
| 99,00 % | 98,99 % | Aucune compensation en crédits | smartACCESS, smartENROLL (E-mail/Tél) |
| 99,00 % | 98,99 % | Aucune compensation en crédits | smartACCESS, smartENROLL (Biométrie) |
| 99,00 % | 98,99 % | Aucune compensation en crédits | smartENROLL, smartACCESS (Numérisation de documents) |

Les Problèmes internes du service API de données (Requête de données) excluent les situations considérées comme force majeure (événements fortuits), que ce soit en raison d'une migration, d'une déconnexion ou d'une intervention externe des gouvernements qui gèrent les bases de données. Verifik est un intermédiaire et n'a donc PAS le contrôle sur les bases de données interrogées.

#### **7. Schéma de facturation pour smartCHECK**

Le schéma de facturation s'applique à la solution smartCHECK, qui permet d'interroger des bases de données gouvernementales. Verifik ne possède pas, ne gère pas et n'assume pas la responsabilité (ne contrôle ni ne met à jour) des bases de données gouvernementales des différents pays que nous servons ; par conséquent, Verifik se réserve le droit de ne pas offrir de garanties concernant le délai de réponse, le temps de disponibilité moyen ou l'exactitude des données.

**Règle générale.** Une réponse HTTP **200** est facturée. Ne sont **pas** facturés : HTTP **403**, **412**, **422** et **500** ; les **délais d'attente** des requêtes ; et les réponses HTTP **409** (y compris indisponibilité de la source et échecs de connexion). Une réponse HTTP **404** **n'est pas** facturée, sauf si la Section **7.1** s'applique à cette requête.

| **Facturé** | **Non facturé** |
| --- | --- |
| 200 | 404 (sauf comme indiqué à la Section 7.1) |
| | 403 |
| | 409 (y compris défaillances de source ; jamais facturé) |
| | 412 |
| | 422 |
| | 500 |
| | Délais d'attente (jamais facturés) |

Aucun point de terminaison hors Colombie n'est facturé sur HTTP **404**. Les points de terminaison non listés à la Section **7.1** ne sont pas facturés sur HTTP **404**, y compris toutes les routes dans des pays autres que la Colombie.

##### **7.1 Colombie : facturation HTTP 404**

Cette section est la seule source de facturation HTTP **404** au titre de la Section **7**. Toutes les routes ci-dessous sont des API smartCHECK Colombie. Les **délais d'attente** et les défaillances de source HTTP **409** ne sont **jamais** facturés sur aucun point de terminaison Verifik.

**RUNT (HTTP 404 avec code de réponse `NotFound` uniquement).** Les réponses HTTP **409** (par exemple lorsque la source est hors service ou qu'un worker RUNT est indisponible) ne sont **pas** facturées.

| Nom du produit | Route |
| --- | --- |
| Consultation conducteur RUNT Colombie | `GET /v2/co/runt/conductor` |
| Consultation conducteur RUNT Colombie (v3) | `GET /v3/co/runt/conductor` |
| Consultation véhicule RUNT Colombie | `GET /v2/co/runt/vehiculo` |
| Dossier véhicule complet RUNT Colombie | `GET /v2/co/runt/vehiculo-completo` |
| SOAT véhicule RUNT Colombie | `GET /v2/co/runt/vehiculo-soat` |
| Véhicule RUNT Colombie par plaque | `GET /v2/co/runt/vehicle-by-plate` |
| Véhicule RUNT Colombie par VIN | `GET /v2/co/runt/vehicle-by-vin` |
| Véhicule RUNT Colombie par plaque (simplifié) | `GET /v2/co/runt/vehicle-by-plate-simplified` |
| Véhicule RUNT Colombie par plaque uniquement | `GET /v2/co/runt/vehicle-by-plate-only` |

**Affiliations sécurité sociale.** **Toute** réponse HTTP **404** sur la route ci-dessous est facturable, y compris lorsque le message indique une date d'expédition incorrecte. Les échecs de connexion renvoyant HTTP **409** ne sont **pas** facturés.

| Nom du produit | Route |
| --- | --- |
| Affiliations sécurité sociale Colombie | `GET /v2/co/afiliaciones` |

**Évaluation véhicule SIBGA (HTTP 404 avec code de réponse `NotFound` uniquement).**

| Nom du produit | Route |
| --- | --- |
| Évaluation véhicule SIBGA Colombie | `GET /v2/co/sibga/valuation` |

**Carte d'identité nationale colombienne (cédula).** Seule une réponse HTTP **404** dont le message est **`CEDULA NO EXISTE`** est facturable, au niveau tarifaire **vigencia**. Toute autre réponse HTTP **404** sur la route ci-dessous **n'est pas** facturée. **`GET`/`POST /v2/co/cedula/vigencia`** ne facture **pas** ses propres réponses HTTP **404**.

| Nom du produit | Route |
| --- | --- |
| Consultation carte d'identité nationale colombienne | `GET` / `POST` `/v2/co/cedula` |

**Non facturé sur HTTP 404 :** Autres routes RUNT Colombie (y compris consultations propriétaires), tout point de terminaison hors Colombie, et toute route non listée dans cette section. La preuve de vie faciale peut facturer HTTP **409** en cas d'échec de liveness ; elle n'est pas facturée sur HTTP **404**. smartBatch utilise HTTP **404** uniquement pour marquer des lignes comme réussies et ne débite pas de crédits pour ces réponses.

#### **8. Requête dynamique pour le service smartCHECK**

Dans le cadre de l'architecture standard du service smartCHECK, Verifik met en œuvre un mécanisme de Requête dynamique conçu pour maximiser la disponibilité, la couverture et la fiabilité du service sur les points de terminaison pris en charge.

Le mécanisme de Requête dynamique permet à smartCHECK et DB Screening d'interroger automatiquement et séquentiellement plusieurs sources de données autorisées lorsque la source primaire renvoie une réponse infructueuse, y compris, sans s'y limiter, les réponses de type « non trouvé » ou équivalentes aux erreurs HTTP de niveau 400. Cette architecture vise à améliorer la probabilité d'obtenir un résultat de vérification réussi en s'appuyant sur plusieurs sources éligibles.

Le Client reconnaît et accepte que la qualité, l'exhaustivité et la disponibilité des bases de données gouvernementales peuvent varier considérablement selon la juridiction, et que certaines bases peuvent présenter une probabilité plus élevée de réponses infructueuses en raison d'enregistrements incomplets, d'interruptions de service ou d'une couverture de données limitée.

Pour atténuer ces limitations, la Requête dynamique est activée par défaut sur tous les points de terminaison smartCHECK applicables et fait partie intégrante de la stratégie de redondance et de basculement de Verifik. Ce mécanisme permet à Verifik de maintenir une disponibilité et une couverture proches de cent pour cent (100 %) sur certains points de terminaison, en acheminant dynamiquement les requêtes vers des sources alternatives disponibles lorsque nécessaire.

Le Client reconnaît et accepte en outre que :

a) La Requête dynamique vise à augmenter la probabilité de réponses de vérification réussies, mais ne garantit pas une correspondance réussie dans tous les cas ;

b) Les délais de réponse peuvent varier et, dans certains cas, être plus longs que pour des requêtes standard à source unique, en raison de la nature en cascade de requêtes multiples ;

c) L'efficacité et la disponibilité de la Requête dynamique restent soumises à la disponibilité, l'accessibilité et la qualité des données des sources gouvernementales ou tierces sous-jacentes ; et

d) Verifik se réserve le droit de modifier, prioriser ou substituer des sources de données au sein de l'architecture de Requête dynamique, à sa seule discrétion, pour maintenir la continuité du service, optimiser la couverture et améliorer les performances de vérification.

La Requête dynamique est considérée comme une fonctionnalité inhérente au service smartCHECK et s'applique automatiquement à tous les Clients utilisant des points de terminaison éligibles, sauf disposition contraire écrite de Verifik.

##### **8.1 Tarification dynamique (facturation)** {#dynamic-pricing-billing}

Lorsque la Requête dynamique utilise un chemin de vérification étendu sur un point de terminaison éligible et renvoie une correspondance réussie (HTTP 200), une tarification dynamique peut s'appliquer. Dans ce cas, les crédits sont déduits au niveau premium de cette famille de points de terminaison — et non au niveau standard associé à la route de base.

La tarification dynamique s'applique aujourd'hui au point de terminaison standard de carte d'identité nationale colombienne (GET/POST /v2/co/cedula) lorsqu'un chemin de vérification étendu aboutit avec succès après l'échec des chemins standard. Les montants de crédits dépendent de la tarification des fonctionnalités configurée pour le Client (tarif standard vs. tarif premium pour cette famille de points de terminaison).

La tarification dynamique ne modifie pas les règles de facturation de la Section **7** pour les codes de statut HTTP : les erreurs de validation et serveur (**403**, **409**, **412**, **422**, **500**) et les **délais d'attente** ne sont pas facturés. Les facturations HTTP **404** suivent **uniquement** la Section **7.1** (y compris **`CEDULA NO EXISTE`** sur **`/v2/co/cedula`**, facturé au niveau tarifaire vigencia). Aucune autre réponse HTTP **404** n'est facturée.

Pour plus de transparence, le Client peut transmettre includeCost=true sur les requêtes éligibles pour recevoir un objet de facturation lorsque des crédits sont débités (y compris lorsque la tarification dynamique s'applique). L'historique des requêtes API enregistre les métadonnées d'ajustement (par exemple montants standard vs. facturés).

L'appel direct à /v2/co/cedula/premium utilise toujours la tarification premium ; la tarification dynamique décrit l'escalade automatique depuis la route standard /v2/co/cedula.

Voir [Cédula colombienne premium](/verifik-fr/identity-validation/colombia/colombian-cedula-premium#dynamic-pricing) pour les détails de l'API.

#### **9. Indisponibilité de la plateforme**

Les fenêtres de maintenance programmées auront lieu la nuit et/ou le week-end, avec notification préalable par e-mail aux utilisateurs.

#### **10. Nouvelles adaptations ou développements**

Les délais pour développer de nouvelles adaptations en raison de changements imprévus des systèmes de l'Utilisateur s'intégrant à la Plateforme via l'API varieront selon les modifications exigées par l'Utilisateur et ne compteront pas comme Indisponibilité de la plateforme.
