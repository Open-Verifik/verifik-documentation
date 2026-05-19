---
id: service-level-agreement
title: Accord de niveau de service
description: Accord de niveau de service et support Verifik
slug: /legal/service-level-agreement
---

# Accord de niveau de service

### **Contrat de niveau de service**

#### **JE. Canaux de services. L'utilisateur aura accès aux canaux de service Verifik suivants :**

1. Chat disponible sur [Verifik.co](http://verifik.co)
2. E-mail : support@verifik.co
3. Canal WhatsApp du service client.
4. Canal Discord du service client.

#### **II. Heures d'ouverture**

L'utilisateur pourra accéder au support fourni par Verifik du lundi au vendredi (jours ouvrables) de 8h00 à 17h00, heure de Colombie.

#### **III. Niveaux de criticité**

Les demandes ou exigences soulevées par les Utilisateurs auprès de l'équipe d'assistance seront classées en fonction de leur impact sur le fonctionnement de l'Utilisateur, comme suit :

| **Critical:** | Total service unavailability.                                                |
| ------------- | ---------------------------------------------------------------------------- |
| **Urgent:**   | Loss of specific functionality for all use cases.                            |
| **Medium:**   | Loss of functionality in specific cases.                                     |
| **Normal:**   | Other requests or general inquiries that do not affect Service Availability. |

#### **IV. Temps de réponse**

1. **Définitions :** Les termes utilisés dans cette section auront les significations suivantes :

```
i. Attention: The time elapsed between the request or requirement and the assignment of a service agent.
ii. Review: The time elapsed between the agent's greeting and the first response regarding the request or requirement.
iii. Escalation: The time elapsed between the agent's escalation and the case review by the person to whom it was escalated. This time only applies in events where it is necessary to escalate the user's request or requirement.
iv. Resolution: The time elapsed between the agent's greeting and the moment the case is resolved.
```

Le délai de réponse varie en fonction de la criticité du besoin, comme suit :

| **SEVERITY/TIME** | **ATTENTION** | **REVIEW** | **ESCALATION** | **RESOLUTION** |
| ----------------- | ------------- | ---------- | -------------- | -------------- |
| **Critical**      | 0.5 hr        | 0.5 hr     | 15 mins        | 48 hrs         |
| **Urgent**        | 0.5 hr        | 0.5 hr     | 15 mins        | 48 hrs         |
| **Medium**        | 1 hr          | 1 hr       | 0.5 hr         | 96 hrs         |
| **Normal**        | 1 hr          | 1 hr       | 0.5 hr         | 96 hrs         |

**Remarque :** 48 heures signifie que nous prenons jusqu'à 48 heures pour résoudre l'incident en fonction de sa complexité.

Les délais de réponse seront comptés à partir du dernier message envoyé par l'utilisateur.

#### **V. Disponibilité de la plateforme**

La Plateforme sera disponible au minimum :

| **Product**  | **Availability**                                                                                      | **Notes**                                                              |
| ------------ | ----------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| SmartCHECK   | 90.0% > Data API                                                                                      | Data API depends on connections with Government Sources                |
| smartACCESS  | 99.0% > Email/Tel<br/>98.0% > Biometrics                                                    |                                                                        |
| smartENROLL  | 99.0% > Email/Tel<br/>98.0% > Biometrics<br/>98.0% > Document Scanning<br/>90.0% > Data API | Data API depends on connections with Government Sources                |

#### **VI. Compensation des temps d'arrêt**

La compensation de crédit accordée pour le mois concerné sera fournie sous la forme d'un crédit équivalent au coût de l'appel de service échoué. Si l'indisponibilité du service est causée par des **Problèmes internes** de Verifik (base de données, serveurs, problèmes d'API internes) et n'est pas efficacement résolue par la Société, Verifik compensera comme suit :

| **Service Availability**                                                                                            | **Credit Compensation**               | **Product**                       |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------- | --------------------------------- |
| **Data API (Data Query)**<br/>90.00% or higher<br/>89.99% or lower               | No Credit<br/>Compensation | smartCHECK                        |
| **Email/Tel**<br/>99.00% or higher<br/>98.99% or lower                           | No Credit<br/>Compensation | smartACCESS<br/>smartENROLL |
| **Biometrics**<br/>98.00% or higher<br/>97.99% or lower                          | No Credit<br/>Compensation | smartACCESS<br/>smartENROLL |
| **Document Scanning**<br/>98.00% or higher<br/>97.99% or lower                   | No Credit<br/>Compensation | smartENROLL<br/>smartACCESS |

Les **Problèmes internes** du service Data API (Data Query) excluent les problèmes considérés comme de force majeure (Événements fortuits), qu'ils soient dus à une migration, une déconnexion ou une intervention externe des gouvernements qui gèrent les bases de données. Verifik est un intermédiaire et n'a donc PAS de contrôle sur les bases de données interrogées.

#### **VII. Schéma de facturation pour smartCHECK**

Le système de tarification s'applique à la solution smartCHECK, qui permet d'interroger les bases de données gouvernementales. Verifik ne possède, ne gère ni n'assume la responsabilité (ne contrôle ni ne met à jour) les bases de données gouvernementales des différents pays que nous servons ; par conséquent, Verifik se réserve le droit de ne pas offrir de garanties concernant le temps de réponse, le temps de disponibilité moyen ou l'exactitude des données.

Si la requête renvoie un **200** ou un **404**, elle sera facturée. Sinon, si la requête renvoie **403**, **409**, **412**, **422** ou **500**, elle ne sera pas facturée.

| **Charged** | **Not Charged** |
| ----------- | --------------- |
| 200         | 403             |
| 404         | 409             |
|             | 412             |
|             | 422             |
|             | 500             |

#### **VIII. Indisponibilité de la plateforme**

Les fenêtres de maintenance programmées auront lieu la nuit et/ou le week-end, avec notification préalable par e-mail aux utilisateurs.

#### **IX. Nouvelles adaptations ou développements**

Les délais de développement de nouvelles adaptations dus à des changements inattendus des systèmes de l'Utilisateur intégrant via l'API à la Plateforme varieront en fonction des modifications requises par l'Utilisateur et ne compteront pas comme Temps d'Indisponibilité de la Plateforme.
