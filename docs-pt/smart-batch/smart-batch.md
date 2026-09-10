---
id: smart-batch
title: SmartBatch
description: Execute consultas do catálogo em lote — Async em segundo plano ou Sync como cadeia de etapas — em ai.verifik.co ou async.verifik.co
slug: /smart-batch
---

import { Layers, Zap, RefreshCw, Bell, FileSpreadsheet, Globe } from 'lucide-react';

# SmartBatch

**SmartBatch** executa uma ou muitas consultas do catálogo como um lote. Você escolhe os endpoints, mapeia os campos de entrada e decide como o lote deve rodar. Use pela UI do Smart-Agent em [ai.verifik.co](https://ai.verifik.co) ou pela API em [async.verifik.co](https://async.verifik.co).

Uma **configuração em lote** é a receita reutilizável: nome, país, etapas (features do catálogo), estratégia de fusão, modo de execução e notificações opcionais. Sempre que você envia um arquivo ou enfileira uma consulta, o SmartBatch cria um lote a partir dessa receita.

## Visão geral

O SmartBatch usa o mesmo catálogo SmartCheck que você já conhece. Sync espera na requisição atual. Async responde imediatamente e continua depois que você fecha a aba. Lotes por arquivo e chamadas de API de uma linha compartilham o mesmo worker quando a configuração é **Async**.

Precisa chamar um path do catálogo como fila no seu backend? Veja [Chamar endpoints como fila (async)](/verifik-pt/smart-batch/async-queue).

## Recursos principais

<div className="row">
  <div className="col col--4">
    <div className="card">
      <div className="card__header">
        <h3><Zap size={20} style={{display: 'inline', marginRight: '8px'}} />Async</h3>
      </div>
      <div className="card__body">
        <p>Roda em segundo plano. Você pode fechar esta aba; o lote continua.</p>
      </div>
    </div>
  </div>
  <div className="col col--4">
    <div className="card">
      <div className="card__header">
        <h3><RefreshCw size={20} style={{display: 'inline', marginRight: '8px'}} />Sync</h3>
      </div>
      <div className="card__body">
        <p>Roda no servidor como uma cadeia de etapas. Melhor quando uma etapa precisa do resultado da anterior.</p>
      </div>
    </div>
  </div>
  <div className="col col--4">
    <div className="card">
      <div className="card__header">
        <h3><Layers size={20} style={{display: 'inline', marginRight: '8px'}} />Etapas do catálogo</h3>
      </div>
      <div className="card__body">
        <p>Adicione qualquer endpoint SmartCheck com URL de catálogo como etapa de verificação.</p>
      </div>
    </div>
  </div>
</div>

<div className="row">
  <div className="col col--4">
    <div className="card">
      <div className="card__header">
        <h3><Bell size={20} style={{display: 'inline', marginRight: '8px'}} />Notificações</h3>
      </div>
      <div className="card__body">
        <p>A URL do webhook e os e-mails ao concluir ficam na configuração, não como parâmetros de consulta.</p>
      </div>
    </div>
  </div>
  <div className="col col--4">
    <div className="card">
      <div className="card__header">
        <h3><FileSpreadsheet size={20} style={{display: 'inline', marginRight: '8px'}} />Arquivo ou API</h3>
      </div>
      <div className="card__body">
        <p>Envie uma planilha ou enfileire uma linha com <code>type=queue</code>. Ambos reutilizam o mesmo worker Async.</p>
      </div>
    </div>
  </div>
  <div className="col col--4">
    <div className="card">
      <div className="card__header">
        <h3><Globe size={20} style={{display: 'inline', marginRight: '8px'}} />Dashboard</h3>
      </div>
      <div className="card__body">
        <p>Acompanhe o progresso, as tentativas, o custo por linha e o webhook vinculado no dashboard do lote.</p>
      </div>
    </div>
  </div>
</div>

## Async vs Sync

O assistente e o dashboard usam os rótulos de produto **Async** e **Sync**.

| Modo de execução | O que acontece | Quando usar |
| --- | --- | --- |
| **Async** (padrão) | O lote roda em segundo plano. Você pode fechar a aba do Smart-Agent. Um worker reivindica cada linha, chama a URL do feature e registra a tentativa. | Consultas fire-and-forget, arquivos grandes, fluxos com webhook. |
| **Sync** | O servidor executa as etapas em cadeia e espera cada resultado. Etapas seguintes podem usar saídas anteriores. | Receitas de vários passos em que a etapa 2 depende da etapa 1. |

Os créditos são cobrados quando o feature realmente roda (chamada do worker no Async, chamada da etapa no Sync), não quando você enfileira uma linha.

:::note Valores de `type` na API
Em `async.verifik.co`, omita `type` ou envie `type=sync` para esperar o resultado. Envie `type=queue` para enfileirar. Esses valores correspondem à mesma ideia Async / Sync. Você não passa `queue` nem `featureRunner` pela UI.
:::

## Criar uma configuração em ai.verifik.co

Abra [https://ai.verifik.co](https://ai.verifik.co), vá em **Smart Batch** e escolha **Criar**.

### 1. Informações básicas

Informe o nome da configuração, a descrição e o país. Escolha o **Modo de execução**:

- **Async** — Roda em segundo plano. Você pode fechar esta aba; o lote continua.
- **Sync** — Roda no servidor como uma cadeia de etapas. Melhor quando uma etapa precisa do resultado da anterior.

Async é o padrão.

### 2. Selecionar endpoints

Pesquise o catálogo e adicione as etapas de verificação necessárias. Cada etapa é um feature SmartCheck com URL (identidade, afiliações, veículos etc.). Features sem URL de catálogo (passwordless, geradores PDF) não podem rodar como etapa de lote.

### 3. Revisar parâmetros

Confirme os parâmetros obrigatórios de cada etapa. Esses campos são mapeados a partir dos cabeçalhos do arquivo enviado (ou do `inputData` da API ao enfileirar uma única linha).

### 4. Revisar e criar

Confira o resumo. Opcionalmente abra **Notificações**:

- **URL do webhook** — Enviamos por POST os eventos de linha e lote concluídos para este endereço. Teste a URL antes de continuar.
- **E-mails ao concluir** — Endereços opcionais que recebem uma mensagem quando o lote termina.

Salve a configuração. As notificações ficam na config. Chamadas posteriores com `type=queue` reutilizam a config Async correspondente (`Queue …`) em vez de criar uma nova a cada vez.

## Executar e acompanhar um lote

Na configuração você pode enviar um arquivo ou iniciar uma execução. O **dashboard** mostra:

- Status e progresso por linha
- Histórico de tentativas de cada linha
- Custo por linha
- O webhook vinculado (clique para ir ao Smart Monitor)

As configurações em lote vinculadas também aparecem na lista e no detalhe de webhooks do Smart Monitor.

## Lotes por arquivo e chamadas de API de uma linha

| Como você começa | Host | Resultado |
| --- | --- | --- |
| Enviar um arquivo no Smart-Agent | [ai.verifik.co](https://ai.verifik.co) | Um lote com N linhas |
| `GET`/`POST` no path do catálogo com `type=queue` | [async.verifik.co](https://async.verifik.co) | `202` e um lote de uma linha |

Quando a configuração é **Async**, os dois caminhos usam o mesmo worker em segundo plano. Veja [Chamar endpoints como fila (async)](/verifik-pt/smart-batch/async-queue) para a API de A a Z.

## Relacionado

- [Check List](/verifik-pt/check-list) — salve um conjunto de serviços do catálogo antes de lotear
- [Chamar endpoints como fila (async)](/verifik-pt/smart-batch/async-queue)
- [Peru — Cidadão (DNI)](/verifik-pt/identity/peru)
