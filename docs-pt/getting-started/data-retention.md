---
id: data-retention
title: Retenção de dados
description: Como a Verifik guarda, mascara e elimina imagens de documentos, campos extraídos e imagens faciais.
slug: /getting-started/data-retention
---

# Retenção de dados

As definições da conta, do projeto e do fluxo do projeto decidem por quanto tempo a Verifik guarda as imagens do documento, os campos extraídos gravados com uma validação de documento e as imagens faciais. A política fica carimbada em cada registro novo. Uma alteração posterior não reescreve os registros que já existem.

Registros de faturamento, débitos de créditos e o histórico de uso permanecem quando as imagens são eliminadas.

## Modos

| Modo | Efeito |
| --- | --- |
| `store` | O registro é guardado. Defina `retentionHours` com um número maior que 0 para torná-lo elegível à eliminação depois dessas horas. Omita `retentionHours` para guardá-lo sem limite de tempo. |
| `ephemeral` | O registro fica elegível à eliminação no fim da espera do webhook quando há um webhook, e na próxima execução quando não há webhook. `retentionHours` é ignorado. |
| `none` | Imagens do documento e campos de extração gravados usam o mesmo prazo de `ephemeral`. Uma imagem facial neste modo não é gravada. As respostas do SmartEnroll omitem URLs hospedadas e informam `hasFrontImage` ou `hasBackImage`. |

Num scan de documento do SmartEnroll, uma regra `store` que inclui `retentionHours` ainda usa a espera de 24 horas, ou a espera do webhook quando há um webhook. `store` sem horas guarda essa imagem.

`ephemeral` e `none` compartilham o prazo de eliminação. Diferem nas imagens faciais e no fato de o SmartEnroll devolver URLs hospedadas.

## Tipos que esta política aplica

| Chave | O que cobre |
| --- | --- |
| `documentImages` | Fotos da frente e do verso numa validação de documento, inclusive os arquivos hospedados de `url` e `backUrl`. |
| `ocrExtraction` | A extração gravada nessa validação. |
| `faceImages` | Selfies e imagens do rosto do documento gravadas para um cadastro ou um login. |

Defina `mode` em cada chave. Um `mode` de topo `none` é copiado para as chaves que você deixar em branco. Um `store` ou `ephemeral` de topo não substitui essas chaves. O pedido confiável define cada chave que importa.

## O que fica fora desta política

Estes registros seguem as próprias regras de armazenamento. Gravar um modo de retenção não os elimina:

- Fotos de prova de vida do documento
- Pontuações de prova de vida e resultados da sessão
- Corpos de webhook, inclusive a extração carregada no payload
- Registros de respostas da API
- Modelos biométricos e coleções de rostos que o Smart Access usa para reconhecer uma pessoa que volta
- Credenciais cifradas do Human Auth, artefatos de conhecimento zero e o vídeo de prova de vida
- O local de armazenamento escolhido para uma credencial Human Auth
- Validações de documento e imagens de identidade criadas antes de existir um carimbo de retenção

Imagens de documento hospedadas usam URLs comuns. Uma URL continua válida até esse arquivo ser eliminado. Trate cada URL de imagem como sensível.

## Precedência

A política efetiva é resolvida nesta ordem:

1. **Conta.** A política gravada nas configurações do cliente.
2. **Projeto.** `dataRetention` no projeto substitui os campos da conta que ele define.
3. **Fluxo do projeto.** `dataRetention` no fluxo substitui os campos do projeto que ele define.

Um nível que omite um campo deixa o valor mais amplo. Sem nada configurado, cada tipo aplicado é `store` sem limite de tempo, e a espera do webhook é de 24 horas.

Uma política gravada pode levar cerca de um minuto para valer em cada instância em execução.

## Espera do webhook

`webhookHoldHours` é um inteiro de 24 a 72. O padrão é 24.

Quando há um webhook, registros `none` e `ephemeral` permanecem pelo menos esse tempo para a entrega poder terminar. Depois que um webhook desse cadastro foi entregue, imagens nesses modos podem ser removidas numa eliminação posterior. URLs de imagem no payload podem deixar de funcionar depois dessa entrega. Copie qualquer imagem que ainda precise enquanto trata o webhook.

Os eventos terminais do SmartEnroll são `onboarding_app_registration_completed`, `onboarding_app_registration_needs_manual_verification`, `onboarding_app_registration_completed_without_kyc` e `onboarding_app_registration_failed`.

A política de retenção não redige o corpo do webhook. O payload pode incluir a extração completa.

## O que uma eliminação remove, mascara e mantém

Quando uma validação de documento é eliminada:

| Ação | Campos |
| --- | --- |
| Removido | Arquivos de imagem hospedados. `url`, `backUrl` e a lista de arquivos são limpos. |
| Mascarado | A extração gravada e `fullName`. |
| Em claro | `documentNumber`, nome, sobrenome, parâmetros do pedido e resultados de triagem gravados na validação. |
| A linha permanece | Status, tipo e `createdAt`, para que contagens de uso que leem a linha ainda a incluam. |

A eliminação de uma imagem facial apaga os bytes da imagem gravada.

Uma cópia cifrada da extração completa é removida 30 dias depois do scan, inclusive quando os campos visíveis já estavam mascarados.

Débitos de créditos são registrados quando um scan tem sucesso. Uma eliminação deixa registros de faturamento e o histórico de uso no lugar, e não reverte um débito.

Apagar uma validação de documento ou um cadastro de aplicação remove os arquivos de imagem gravados e apaga a linha da validação. O histórico de uso construído a partir dessas linhas diminui com essa exclusão. O trabalho de eliminação deixa a linha no lugar.

## Quando a eliminação roda

Um registro fica elegível em `retention.purgeAfter`. Uma eliminação agendada remove registros elegíveis cerca de cada 15 minutos. A exclusão acontece na próxima execução bem-sucedida, então o arquivo pode permanecer um pouco depois de `purgeAfter`. Cada execução trata um lote limitado. Uma fila grande leva mais de uma execução.

Não há um endpoint de apagamento manual. `allowManualDelete` num objeto de política é gravado com a política e não abre uma chamada de apagamento separada.

## As políticas valem para registros novos

O carimbo é escrito quando o registro é criado. Registros que já estão na conta mantêm o carimbo que têm. Registros sem carimbo permanecem como estão. Mudar uma conta para `none` deixa o histórico gravado antes dessa mudança.

## Scans sem projeto

`POST /v2/ocr/scan-prompt` e `POST /v2/ocr/scan-agent` seguem esta regra quando a chamada não está ligada a um projeto:

- A imagem não é enviada para armazenamento hospedado.
- `url` e `backUrl` na resposta são URIs `data:` da imagem que você enviou. Pertencem a essa resposta. Persista a extração e guarde a sua cópia da imagem se ainda precisar da foto.
- O corpo da resposta inclui a extração completa.
- A linha de validação gravada armazena uma extração mascarada e um `fullName` mascarado. `documentNumber` nessa linha permanece em claro.
- A cópia cifrada da extração completa é removida após 30 dias.

Um scan de documento do SmartEnroll está ligado a um cadastro de aplicação e usa a política resolvida de conta, projeto e fluxo. A resposta inclui a extração sem máscara. A linha gravada é mascarada quando `ocrExtraction` é `none`. Em `none` e `ephemeral`, a resposta omite URLs hospedadas.

## Smart Access

Fluxos de login do Smart Access (fluxos de projeto `login`) carimbam a retenção no selfie de login.

- `faceImages` em `none` significa que o selfie de login não é gravado.
- `ephemeral` grava o selfie até a próxima execução. Fluxos de login são carimbados sem espera de webhook.
- `store` guarda o selfie, por `retentionHours` quando esse número está definido.

O reconhecimento de uma pessoa que volta usa modelos biométricos e coleções de rostos. Esses modelos permanecem quando você muda esta política. Resultados de prova de vida do login e corpos de webhook do login também permanecem.

## Human Auth

Validações de documento criadas durante o onboarding do Human Auth usam as regras do SmartEnroll acima.

Projetos Human Auth podem travar `faceImages` em `none`. Nesse modo o selfie não é gravado, e a comparação do documento com o selfie, que lê o selfie gravado, não é executada.

O vídeo de prova de vida, os artefatos de conhecimento zero e a credencial cifrada produzida pelo passo de armazenamento seguem as próprias regras. Escolher um local para essa credencial é separado desta política.

## O objeto `dataRetention`

Envie este objeto em `PUT /v3/projects/{id}`. Envie `null` para herdar de novo a política da conta.

A mesma forma num fluxo de projeto substitui o projeto para os registros criados nesse fluxo.

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

| Campo | Tipo | Descrição |
| --- | --- | --- |
| `mode` | `store`, `ephemeral` ou `none` | Base da conta ou da substituição. Defina também cada tipo. |
| `webhookHoldHours` | inteiro, 24–72 | Espera mínima quando há um webhook. Padrão 24. |
| `types.documentImages.mode` | modo | Fotos do documento. |
| `types.documentImages.retentionHours` | número ou omitido | Usado quando esse tipo é `store` e o número é maior que 0. Ignorado nas imagens de documento do SmartEnroll. |
| `types.ocrExtraction` | a mesma forma | Extração gravada. |
| `types.faceImages` | a mesma forma | Selfie e imagens do rosto do documento. `none` significa que o selfie não é gravado. |

Outras chaves de tipo podem estar presentes numa política gravada. A eliminação não as aplica.
