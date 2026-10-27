---
id: service-level-agreement
title: Accord de niveau de service
description: Support, disponibilité et performance des services Verifik
slug: /legal/service-level-agreement
---

# Accord de niveau de service

**Support, disponibilité et performance des services**

**Version 1.0 | Date de publication : 26 octobre 2026**

Le présent accord décrit les canaux de support, les objectifs de prise en charge et les engagements de disponibilité des services Verifik indiqués ci-dessous. Le support décrit est inclus sans frais supplémentaires, sauf stipulation commerciale expresse contraire.

**Champ d’application.** Ce document peut être incorporé aux contrats qui l’identifient expressément. Les conditions particulières signées par les parties prévalent en cas de conflit. La publication de versions ultérieures ne modifie pas, à elle seule, les contrats en vigueur.

## 1. Canaux et horaires de support

Le client ouvre les incidents et en assure le suivi au moyen de tickets de support dans le [panneau client](https://ai.verifik.co/). Ce panneau est le canal officiel de support.

Si le client ne peut pas accéder au panneau client, il peut écrire à [support@mg.verifik.co](mailto:support@mg.verifik.co) à titre de contact secondaire.

Le support standard est assuré du lundi au vendredi, de 8 h 00 à 17 h 00 (UTC-5). Les horaires normaux de support excluent les jours fériés nationaux de la Colombie, des États-Unis et du Canada (« horaires normaux de support »).

Les incidents de niveau 1 (Critique) bénéficient d’une couverture d’astreinte (on-call). Cette couverture s’applique la nuit, le week-end et les jours fériés. L’objectif de résolution de vingt-quatre (24) heures du niveau 1 court de façon continue, y compris la nuit, le week-end et les jours fériés, et n’est pas limité aux horaires normaux de support.

Les clients qui paient le Support Premium ne sont pas soumis aux horaires normaux de support ni aux exclusions pour jours fériés. Pour ces clients, les délais de première réponse et de résolution courent vingt-quatre (24) heures sur vingt-quatre, sept (7) jours sur sept.

## 2. Délais de réponse et de résolution des incidents

Les incidents signalés par le client sont classés par Verifik selon leur gravité, leur impact opérationnel et leur portée, conformément aux niveaux suivants :

| Gravité de l’incident | Description | Délai de première réponse | Objectif de résolution |
| --- | --- | --- | --- |
| Niveau 1. Critique | Incidents qui entraînent l’interruption totale de la plateforme, affectent gravement ses fonctions essentielles ou impliquent une vulnérabilité critique de sécurité. Une couverture d’astreinte (on-call) s’applique. | Dans un délai d’une (1) heure, y compris en dehors des horaires normaux de support, au titre de la couverture d’astreinte. | Dans les vingt-quatre (24) heures continues, y compris la nuit, le week-end et les jours fériés. |
| Niveau 2. Élevé | Incidents qui entraînent une dégradation significative du service ou affectent des fonctions importantes sans interruption totale. | Dans un délai de quatre (4) heures pendant les horaires normaux de support. | Dans les deux (2) jours ouvrés. |
| Niveau 3. Faible | Incidents à impact limité, erreurs mineures et demandes techniques qui ne compromettent pas de façon significative le fonctionnement du service. | Dans un délai de huit (8) heures pendant les horaires normaux de support. | Dans les cinq (5) jours ouvrés. |

### Conditions de prise en charge

a) Les délais de première réponse sont calculés exclusivement pendant les horaires normaux de support établis à la section 1, sauf pour les incidents de niveau 1 (Critique), qui bénéficient d’une couverture d’astreinte, et sauf pour les clients qui paient le Support Premium. L’objectif de résolution de vingt-quatre (24) heures du niveau 1 est décompté de façon continue, y compris la nuit, le week-end et les jours fériés. Pour les clients qui paient le Support Premium, les délais de première réponse et de résolution courent vingt-quatre (24) heures sur vingt-quatre, sept (7) jours sur sept, conformément à la section 1.

b) La première réponse est une communication de Verifik qui confirme la réception et la prise en charge de l’incident. Les accusés de réception automatiques ne constituent pas une première réponse au sens de la présente section.

c) Les délais de résolution sont des objectifs opérationnels soumis à des efforts commercialement raisonnables. Ils ne constituent pas une garantie de résolution dans un délai déterminé.

d) Verifik détermine la classification des incidents selon leur gravité et leur impact technique, et peut la modifier lorsque les circonstances le justifient.

e) Les délais de résolution peuvent être affectés par des circonstances échappant au contrôle raisonnable de Verifik, y compris des interruptions, des défaillances ou des restrictions d’accès à des sources gouvernementales ou à des services de tiers.

f) Lorsqu’un incident ne peut pas être résolu dans le délai objectif, Verifik continue de déployer des efforts commercialement raisonnables pour le résoudre et informe le client de son état et des avancées pertinentes.

## 3. Disponibilité du service et délais de réponse

La disponibilité des services est évaluée chaque mois selon le tableau 1, à l’exclusion du temps d’indisponibilité programmé. Celui-ci comprend les fenêtres de maintenance et de mise à jour de la plateforme, prévues aux heures de plus faible demande afin de limiter les interruptions.

Verifik peut publier périodiquement des fenêtres récurrentes d’indisponibilité programmée. « Indisponibilité programmée récurrente » désigne les fenêtres d’indisponibilité qui surviennent à des horaires fixes selon des calendriers récurrents et qui sont publiées dans la documentation de l’API de Verifik.

Verifik notifiera par écrit, au moins sept (7) jours calendaires à l’avance, les maintenances programmées en dehors des fenêtres récurrentes publiées, sauf urgence exigeant une intervention immédiate pour préserver la sécurité ou la continuité du service. Les fenêtres ont lieu de préférence la nuit ou le week-end.

### Tableau 1. Disponibilité du service

| Disponibilité | Produit |
| --- | --- |
| Bases de données : 90,00 % ou plus | smartCHECK, DB Screening |
| E-mail/téléphone : 99,00 % ou plus | smartACCESS, smartENROLL |
| Biométrie : 99,00 % ou plus | smartACCESS, smartENROLL |
| Numérisation de documents : 99,00 % ou plus | smartENROLL, smartACCESS |

L’API de vérification des bases de données dépend de connexions à des sources gouvernementales. Verifik ne possède ni ne contrôle ces points d’accès.

### 3.1. Exclusions de disponibilité pour DB Screening / smartCHECK {#exclusions-disponibilite}

En raison du caractère historiquement imprévisible de la disponibilité opérationnelle de certaines sources de données externes, des points de terminaison précis sont exclus des engagements de disponibilité de la plateforme et des dispositions de compensation pour indisponibilité du présent accord.

Les points de terminaison suivants sont exclus :

- Mexique – validation INE
- Mexique – validation de plaque d’immatriculation

Les interruptions, périodes de maintenance, performances dégradées, réponses tardives ou indisponibilités temporaires qui affectent ces points de terminaison :

- ne sont pas considérées comme une indisponibilité de la plateforme ;
- ne sont pas incluses dans les calculs de disponibilité de la plateforme ;
- n’ouvrent droit ni à des crédits de service ni à une autre compensation au titre du présent accord.

Verifik continue de déployer des efforts commercialement raisonnables pour maintenir la connectivité et rétablir le service lorsque c’est possible. Aucune garantie de temps de fonctionnement n’est offerte pour les points de terminaison énumérés.

### 3.2. Comment la disponibilité est mesurée

La disponibilité est calculée par compte pour chaque mois calendaire en UTC :

```
disponibilité = requêtes réussies / (requêtes réussies + défaillances du service)
```

Les défaillances du service sont les requêtes qui expirent, renvoient une erreur 5xx ou une réponse 408 ou 504, ou indiquent que le point de terminaison est hors service.

Les erreurs du client sont exclues du calcul. Elles comprennent les paramètres invalides ou manquants, les enregistrements introuvables dans la source, les erreurs d’authentification et d’autorisation, et les autres réponses 4xx.

Les clients peuvent consulter la disponibilité mensuelle dans le panneau client et, lorsqu’elle est activée, au moyen de l’API d’utilisation, avec une ventilation par service. Les points de terminaison de la section 3.1 sont exclus des engagements de disponibilité.

### 3.3. Objectifs opérationnels de temps de réponse des requêtes

Les temps de réponse des requêtes aux bases de données gouvernementales (DB Screening / smartCHECK) sont des objectifs opérationnels de performance de Verifik, destinés à assurer une prestation efficace des services.

Dans des conditions normales d’exploitation, Verifik s’efforce d’atteindre les objectifs suivants :

a) **Temps de réponse cible :** déployer des efforts commercialement raisonnables pour répondre aux requêtes dans un délai d’une (1) seconde.

b) **Temps moyen cible :** maintenir un temps de réponse moyen n’excédant pas trois (3) secondes par requête, mesuré mensuellement.

c) **Temps maximal cible :** faire en sorte que les requêtes individuelles ne dépassent pas dix (10) secondes de temps de réponse.

Les temps de réponse peuvent varier en raison de la disponibilité, de la capacité, de la maintenance, de la latence et des autres conditions techniques des sources d’information gouvernementales ou tierces, ainsi que de l’utilisation de mécanismes de requête dynamique qui doivent interroger séquentiellement plusieurs sources, conformément à la [politique de facturation et de consommation de crédits](/verifik-fr/legal/billing-policy).

Les temps ci-dessus sont des objectifs opérationnels de référence. Ils ne constituent ni des garanties de performance, ni des obligations de résultat, ni des engagements de temps de réponse maximal.

Le client reconnaît que les temps de réponse peuvent varier en raison de la disponibilité, de la capacité, de la maintenance, de la latence et des autres conditions techniques des sources d’information gouvernementales ou tierces, ainsi que de l’utilisation de mécanismes de requête dynamique qui accèdent séquentiellement à plusieurs sources.

Aux fins de mesure, le temps de réponse correspond au traitement d’une seule requête API, à l’exclusion des délais de transmission sur des réseaux Internet échappant au contrôle de Verifik.

Le non-respect de ces objectifs opérationnels ne constitue pas, à lui seul, un manquement contractuel et n’ouvre droit ni à une compensation, ni à des crédits de service, ni à des pénalités. Cela ne dispense pas Verifik de respecter les obligations qu’elle a expressément assumées concernant sa propre infrastructure, la disponibilité de la plateforme et les autres engagements applicables au titre du présent accord.

La présente section s’interprète conjointement avec la [section 6](#limitations-de-garantie) du présent accord, relative aux limitations de garantie des sources gouvernementales.

### 3.4. Objectifs contractuels

Le panneau client et l’API d’utilisation peuvent comparer la performance mensuelle de smartCHECK à l’objectif de référence de 90 %. Les objectifs contractuels spécifiques s’appliquent uniquement lorsqu’ils sont expressément inclus dans les conditions commerciales du client. Dans les autres cas, les chiffres affichés sont informatifs. L’affichage ne crée pas de compensation au-delà de ce que prévoit la section 4.

## 4. Compensation en cas de non-respect des niveaux de disponibilité

La compensation pour non-respect des niveaux de disponibilité du présent accord n’est due que lorsque l’indisponibilité est imputable à des défaillances internes de Verifik et a généré des frais effectifs pour le client au titre de requêtes API qui n’ont pas été traitées avec succès.

Dans ces cas, la compensation consiste à restituer les crédits effectivement débités pour ces requêtes. Aucun crédit supplémentaire n’est accordé pour des requêtes qui n’ont pas été facturées.

Pour smartCHECK (DB Screening), les interruptions ou limitations des sources gouvernementales ne donnent pas lieu à compensation, conformément aux exclusions et limitations des sections [3.1](#exclusions-disponibilite) et [6](#limitations-de-garantie) du présent accord.

Les pourcentages de disponibilité de la section 3 sont les niveaux de référence utilisés pour évaluer la performance des services. Leur non-respect ne génère pas automatiquement une compensation pécuniaire lorsqu’il n’existe pas de frais effectifs susceptibles de restitution.

La compensation prévue à la présente section est accordée sous forme de crédits de service applicables à une consommation future, et non sous forme de remboursement en espèces, sans préjudice des droits dont les parties peuvent se prévaloir en cas de manquement essentiel au titre du contrat commercial applicable.

| Service | Sans compensation | Avec compensation |
| --- | --- | --- |
| Bases de données (smartCHECK, DB Screening) | 90,00 % ou plus | 89,99 % ou moins |
| E-mail/téléphone (smartACCESS, smartENROLL) | 99,00 % ou plus | 98,99 % ou moins |
| Biométrie (smartACCESS, smartENROLL) | 99,00 % ou plus | 98,99 % ou moins |
| Numérisation de documents (smartENROLL, smartACCESS) | 99,00 % ou plus | 98,99 % ou moins |

Les problèmes internes du service de vérification dans les bases de données (consultation de données) excluent les problèmes considérés comme un cas de force majeure (cas fortuit) résultant de migrations, de déconnexions ou d’une intervention extérieure des gouvernements qui détiennent les bases de données. Verifik agit en qualité d’intermédiaire et n’a donc ni pouvoir ni contrôle sur les bases de données consultées.

## 5. Requête dynamique pour le service smartCHECK {#requete-dynamique}

Dans le cadre de l’architecture standard du service smartCHECK, Verifik met en œuvre un mécanisme de requête dynamique conçu pour maximiser la disponibilité, la couverture et la fiabilité du service sur les points de terminaison compatibles.

La requête dynamique permet à smartCHECK et à DB Screening d’interroger automatiquement et séquentiellement plusieurs sources de données autorisées lorsque la source principale renvoie une réponse non satisfaisante, y compris, sans s’y limiter, les réponses « Not Found » ou les réponses équivalentes de niveau HTTP 400. Cette architecture vise à augmenter la probabilité d’obtenir un résultat de vérification satisfaisant en s’appuyant sur plusieurs sources de données éligibles.

Le client reconnaît et accepte que la qualité, l’intégrité et la disponibilité des bases de données gouvernementales peuvent varier sensiblement selon la juridiction, et que certaines bases peuvent présenter une plus forte probabilité de réponses non satisfaisantes en raison d’enregistrements incomplets, d’interruptions de service ou d’une couverture de données limitée.

Pour atténuer ces limites, la requête dynamique est activée par défaut sur tous les points de terminaison smartCHECK applicables et fait partie intégrante de la stratégie de redondance et de basculement de Verifik. Sur certains points de terminaison, ce mécanisme permet à Verifik de maintenir une disponibilité et une couverture du service proches de cent pour cent (100 %) en acheminant dynamiquement les requêtes vers des sources alternatives disponibles lorsque cela est nécessaire.

Le client reconnaît et accepte en outre que :

a) La requête dynamique vise à augmenter la probabilité d’obtenir des réponses de vérification satisfaisantes, sans garantir une correspondance satisfaisante dans tous les cas.

b) Les temps de réponse peuvent varier et, dans certains cas, être supérieurs à ceux des requêtes standard à source unique, en raison du caractère en cascade des requêtes vers plusieurs sources.

c) L’efficacité et la disponibilité de la requête dynamique restent soumises au temps de fonctionnement, à l’accessibilité et à la qualité des données des sources sous-jacentes, tierces ou gouvernementales.

d) Verifik se réserve le droit de modifier, de prioriser ou de remplacer les sources de données au sein de l’architecture de requête dynamique, à sa seule discrétion, afin de maintenir la continuité du service, d’optimiser la couverture et d’améliorer la performance de la vérification.

La requête dynamique est une caractéristique inhérente du service smartCHECK et s’applique automatiquement à tous les clients qui utilisent des points de terminaison éligibles, sauf disposition écrite contraire de Verifik.

Les règles de facturation associées à la requête dynamique, y compris la tarification dynamique de la cédula colombienne, figurent dans la [politique de facturation et de consommation de crédits](/verifik-fr/legal/billing-policy).

## 6. Limitations de garantie des sources d’information {#limitations-de-garantie}

Verifik n’est ni propriétaire ni administrateur des bases de données gouvernementales consultées et n’en contrôle ni la mise à jour, ni la disponibilité, ni l’exactitude. Verifik ne garantit donc ni le temps de réponse, ni le temps moyen de fonctionnement, ni l’exactitude des données provenant de ces sources. Cette limitation s’applique exclusivement aux services smartCHECK (DB Screening) et ne dispense pas Verifik des obligations qu’elle a expressément assumées concernant sa propre infrastructure.

**Contrôle des versions.** Verifik identifie les nouvelles versions du présent accord par leur date de publication. Les modifications des contrats en vigueur suivent les règles de modification convenues dans chaque contrat.

<a id="dynamic-pricing-billing"></a>

**Documents connexes.** Les règles de facturation et la tarification dynamique figurent dans la [politique de facturation et de consommation de crédits](/verifik-fr/legal/billing-policy#dynamic-pricing-billing).
