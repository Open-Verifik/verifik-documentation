---
id: smart-batch
title: SmartBatch
description: Exécutez des consultations du catalogue en lot — Async en arrière-plan ou Sync comme chaîne d'étapes — depuis ai.verifik.co ou async.verifik.co
slug: /smart-batch
---

import { Layers, Zap, RefreshCw, Bell, FileSpreadsheet, Globe } from 'lucide-react';

# SmartBatch

**SmartBatch** exécute une ou plusieurs consultations du catalogue en lot. Vous choisissez les points de terminaison, mappez les champs d'entrée et décidez comment le lot doit s'exécuter. Utilisez-le depuis l'UI Smart-Agent sur [ai.verifik.co](https://ai.verifik.co) ou depuis l'API sur [async.verifik.co](https://async.verifik.co).

Une **configuration de lot** est la recette réutilisable : nom, pays, étapes (fonctionnalités du catalogue), stratégie de fusion, mode d'exécution et notifications facultatives. Chaque fois que vous téléversez un fichier ou enfilez une consultation, SmartBatch crée un lot à partir de cette recette.

## Vue d'ensemble

SmartBatch s'appuie sur le même catalogue SmartCheck que vous utilisez déjà. Sync attend sur la requête en cours. Async répond immédiatement et continue après la fermeture de l'onglet. Les lots fichier et les appels API d'une ligne partagent le même worker lorsque la configuration est **Async**.

Besoin d'appeler un chemin du catalogue en file depuis votre backend ? Voir [Appeler les endpoints en file (async)](/verifik-fr/smart-batch/async-queue).

## Fonctionnalités clés

<div className="row">
  <div className="col col--4">
    <div className="card">
      <div className="card__header">
        <h3><Zap size={20} style={{display: 'inline', marginRight: '8px'}} />Async</h3>
      </div>
      <div className="card__body">
        <p>S'exécute en arrière-plan. Vous pouvez fermer cet onglet ; le lot continue.</p>
      </div>
    </div>
  </div>
  <div className="col col--4">
    <div className="card">
      <div className="card__header">
        <h3><RefreshCw size={20} style={{display: 'inline', marginRight: '8px'}} />Sync</h3>
      </div>
      <div className="card__body">
        <p>S'exécute sur le serveur comme une chaîne d'étapes. Idéal si une étape a besoin du résultat de la précédente.</p>
      </div>
    </div>
  </div>
  <div className="col col--4">
    <div className="card">
      <div className="card__header">
        <h3><Layers size={20} style={{display: 'inline', marginRight: '8px'}} />Étapes du catalogue</h3>
      </div>
      <div className="card__body">
        <p>Ajoutez tout point de terminaison SmartCheck avec une URL de catalogue comme étape de vérification.</p>
      </div>
    </div>
  </div>
</div>

<div className="row">
  <div className="col col--4">
    <div className="card">
      <div className="card__header">
        <h3><Bell size={20} style={{display: 'inline', marginRight: '8px'}} />Notifications</h3>
      </div>
      <div className="card__body">
        <p>L'URL du webhook et les e-mails de fin vivent sur la configuration, pas en paramètres de requête.</p>
      </div>
    </div>
  </div>
  <div className="col col--4">
    <div className="card">
      <div className="card__header">
        <h3><FileSpreadsheet size={20} style={{display: 'inline', marginRight: '8px'}} />Fichier ou API</h3>
      </div>
      <div className="card__body">
        <p>Téléversez une feuille ou enfilez une ligne avec <code>type=queue</code>. Les deux réutilisent le même worker Async.</p>
      </div>
    </div>
  </div>
  <div className="col col--4">
    <div className="card">
      <div className="card__header">
        <h3><Globe size={20} style={{display: 'inline', marginRight: '8px'}} />Tableau de bord</h3>
      </div>
      <div className="card__body">
        <p>Suivez la progression, les tentatives, le coût par ligne et le webhook lié depuis le tableau de bord du lot.</p>
      </div>
    </div>
  </div>
</div>

## Async vs Sync

L'assistant et le tableau de bord utilisent les libellés produit **Async** et **Sync**.

| Mode d'exécution | Ce qui se passe | Quand l'utiliser |
| --- | --- | --- |
| **Async** (par défaut) | Le lot s'exécute en arrière-plan. Vous pouvez fermer l'onglet Smart-Agent. Un worker revendique chaque ligne, appelle l'URL de la fonctionnalité et enregistre la tentative. | Consultations fire-and-forget, gros fichiers, flux webhook. |
| **Sync** | Le serveur exécute les étapes en chaîne et attend chaque résultat. Les étapes suivantes peuvent utiliser les sorties précédentes. | Recettes multi-étapes où l'étape 2 dépend de l'étape 1. |

Les crédits sont débités lorsque la fonctionnalité s'exécute réellement (appel du worker pour Async, appel de l'étape pour Sync), pas lorsque vous enfilez une ligne.

:::note Valeurs `type` de l'API
Sur `async.verifik.co`, omettez `type` ou envoyez `type=sync` pour attendre le résultat. Envoyez `type=queue` pour enfiler. Ces valeurs correspondent à la même idée Async / Sync. Vous ne passez pas `queue` ni `featureRunner` depuis l'UI.
:::

## Créer une configuration sur ai.verifik.co

Ouvrez [https://ai.verifik.co](https://ai.verifik.co), allez dans **Smart Batch** et choisissez **Créer**.

### 1. Informations de base

Saisissez le nom de la configuration, la description et le pays. Choisissez le **Mode d'exécution** :

- **Async** — S'exécute en arrière-plan. Vous pouvez fermer cet onglet ; le lot continue.
- **Sync** — S'exécute sur le serveur comme une chaîne d'étapes. Idéal si une étape a besoin du résultat de la précédente.

Async est le mode par défaut.

### 2. Sélectionner les points de terminaison

Recherchez dans le catalogue et ajoutez les étapes de vérification nécessaires. Chaque étape est une fonctionnalité SmartCheck avec une URL (identité, affiliations, véhicules, etc.). Les fonctionnalités sans URL de catalogue (passwordless, générateurs PDF) ne peuvent pas s'exécuter comme étape de lot.

### 3. Réviser les paramètres

Confirmez les paramètres requis de chaque étape. Ces champs sont mappés depuis les en-têtes du fichier téléversé (ou depuis `inputData` de l'API lorsque vous enfilez une seule ligne).

### 4. Examiner et créer

Vérifiez le résumé. Ouvrez éventuellement **Notifications** :

- **URL du webhook** — Nous envoyons en POST les événements de ligne et de lot à cette adresse. Testez l'URL avant de continuer.
- **E-mails à la fin** — Adresses facultatives qui reçoivent un message à la fin du lot.

Enregistrez la configuration. Les notifications restent sur la config. Les appels `type=queue` suivants réutilisent la config Async correspondante (`Queue …`) au lieu d'en créer une nouvelle à chaque fois.

## Exécuter et suivre un lot

Depuis la configuration, vous pouvez téléverser un fichier ou lancer une exécution. Le **tableau de bord** affiche :

- Statut et progression par ligne
- Historique des tentatives de chaque ligne
- Coût par ligne
- Le webhook lié (clic vers Smart Monitor)

Les configurations de lot liées apparaissent aussi sur la liste et le détail des webhooks dans Smart Monitor.

## Lots fichier et appels API d'une ligne

| Comment vous démarrez | Hôte | Résultat |
| --- | --- | --- |
| Téléverser un fichier dans Smart-Agent | [ai.verifik.co](https://ai.verifik.co) | Un lot de N lignes |
| `GET`/`POST` le chemin catalogue avec `type=queue` | [async.verifik.co](https://async.verifik.co) | `202` et un lot d'une ligne |

Lorsque la configuration est **Async**, les deux chemins utilisent le même worker en arrière-plan. Voir [Appeler les endpoints en file (async)](/verifik-fr/smart-batch/async-queue) pour l'API de A à Z.

## Voir aussi

- [Appeler les endpoints en file (async)](/verifik-fr/smart-batch/async-queue)
- [Pérou — Citoyen (DNI)](/verifik-fr/identity/peru)
