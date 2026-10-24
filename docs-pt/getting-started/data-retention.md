---
id: data-retention
title: Retenção de dados
description: Como a Verifik guarda, mascara e elimina imagens de documentos, campos extraídos e imagens faciais.
slug: /getting-started/data-retention
---

# Retenção de dados

As definições da conta, do projeto e do fluxo decidem por quanto tempo a Verifik guarda imagens do documento, campos extraídos, imagens faciais e imagens de prova de vida do documento. A política fica carimbada em cada registro novo. Uma alteração posterior deixa como estão os registros que já existem.

Registros de faturamento, débitos de créditos e o histórico de uso permanecem quando as imagens são eliminadas.

## Modos

| Modo | Efeito |
| --- | --- |
| `store` | O registro é guardado. `retentionHours` maior que 0 torna-o elegível à eliminação depois dessas horas. Sem `retentionHours`, fica sem limite. `retentionHours` é respeitado, inclusive no SmartEnroll. |
| `ephemeral` | O registro fica guardado durante a espera do webhook quando há um webhook, e depois fica elegível à eliminação. |
| `none` | O registro não fica guardado depois da espera do webhook. Uma imagem facial neste modo permanece até o fim da espera para a comparação do documento com o selfie, e depois é removida. Uma imagem de prova de vida do documento neste modo não é gravada. |

## Tipos aplicados

| Chave | Cobertura |
| --- | --- |
| `documentImages` | Fotos da frente e do verso de uma validação de documento. |
| `ocrExtraction` | A extração gravada nessa validação. |
| `faceImages` | Selfies e imagens do rosto do documento. |
| `documentLiveness` | Imagem da prova de vida do documento. `none` significa que ela não é gravada. |

Um modo na política vale para cada tipo que não define o seu. `livenessResults` e `apiResponseLogs` são recusados.

## Fora desta política

- Modelos biométricos e coleções de rostros que o Smart Access usa para reconhecer uma pessoa que volta
- Credenciais cifradas do Human Auth, artefatos de conhecimento zero e o vídeo de prova de vida
- O local escolhido para uma credencial Human Auth
- Validações e imagens de identidade criadas antes de um carimbo de retenção

As imagens hospedadas são privadas. `url` e `backUrl` são links `https` que expiram depois de uma hora. Nunca são URIs `data:`.

## Precedência

Um ajuste mais estrito não pode ser afrouxado por um nível abaixo. `none` é mais estrito que `ephemeral`, e `ephemeral` é mais estrito que `store`.

1. **Conta.** Política padrão. Sem configuração, cada tipo é `store` sem limite, e a espera do webhook é de 24 horas.
2. **Projeto.** `dataRetention` substitui os campos da conta que define, se o novo modo for igual ou mais estrito.
3. **Fluxo.** A mesma regra em relação ao projeto.

Um scan sem projeto usa a política da conta. O padrão é `store`.

## Espera do webhook

`webhookHoldHours` é um inteiro de 24 a 72. O padrão é 24.

No SmartEnroll, imagens `none` e `ephemeral` ficam elegíveis à eliminação só depois da entrega de `onboarding_app_registration_completed` ou `onboarding_app_registration_completed_without_kyc`. O horário é o mais tardio entre essa entrega e o fim da espera. Webhooks anteriores do mesmo cadastro não iniciam a eliminação.

Corpos de webhook gravados são redatados depois da entrega.

## Eliminação

| Ação | Campos |
| --- | --- |
| Removido | Arquivos de imagem. `url`, `backUrl` e a lista de arquivos são limpos. |
| Mascarado | Campos pessoais que permanecem na linha, inclusive a extração. A máscara guarda os últimos 4 caracteres. |
| Mantido | A linha da validação (status, tipo, `createdAt`) para as contagens de uso. |

A resposta HTTP de um scan traz a extração completa. Só os valores gravados são mascarados. Faturamento e histórico de uso permanecem. Uma eliminação não reverte um débito.

## Apagamento manual

Quando `allowManualDelete` é true:

```
DELETE https://api.verifik.co/v2/document-validations/{id}/files
DELETE https://api.verifik.co/v2/app-registrations/{id}/data
POST https://api.verifik.co/v2/data-retention/erase
```

O mesmo cabeçalho de autorização do restante da API é obrigatório. Se `allowManualDelete` é false, as chamadas são recusadas.

## Quando roda

Um registro fica elegível em `retention.purgeAfter`. Para uma imagem SmartEnroll `none` ou `ephemeral`, esse momento é o mais tardio entre a entrega do webhook terminal e o fim de `webhookHoldHours`. Uma eliminação agendada remove registros elegíveis cerca de cada 15 minutos.

A política vale para registros criados depois de gravada. Registros que já existem mantêm o carimbo.

## Smart Access e Human Auth

`faceImages` em `none` guarda o selfie até o fim da espera para a comparação do documento com o selfie. Os modelos biométricos do Smart Access permanecem. `documentLiveness` em `none` não grava essa imagem. O vídeo de prova de vida, os artefatos de conhecimento zero e a credencial cifrada do Human Auth seguem as próprias regras.

## O objeto `dataRetention`

Envie-o em `PUT /v3/projects/{id}`. `null` volta a herdar a política da conta. Um projeto não pode afrouxar a conta. A mesma forma num fluxo substitui o projeto quando é igual ou mais estrita.

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
