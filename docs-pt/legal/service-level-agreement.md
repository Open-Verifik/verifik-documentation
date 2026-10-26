---
id: service-level-agreement
title: Acordo de Nível de Serviço
description: Suporte, disponibilidade e desempenho dos serviços da Verifik
slug: /legal/service-level-agreement
---

# Acordo de Nível de Serviço

**Suporte, disponibilidade e desempenho dos serviços**

**Versão 1.0 | Data de publicação: 26 de outubro de 2026**

Este acordo descreve os canais de suporte, os objetivos de atendimento e os compromissos de disponibilidade dos serviços da Verifik indicados a seguir. O suporte descrito está incluído sem custo adicional, salvo pacto comercial expresso em contrário.

**Âmbito e aplicação.** Este documento pode ser incorporado aos contratos que o identifiquem expressamente. As condições particulares assinadas pelas partes prevalecem em caso de conflito. A publicação de versões posteriores não modifica, por si só, os contratos vigentes.

## 1. Canais e horários de atendimento

O cliente terá acesso aos seguintes canais de atendimento da Verifik:

1. Abertura de tickets no [painel do cliente](https://ai.verifik.co/).
2. Correio eletrônico: [support@verifik.co](mailto:support@verifik.co).
3. Canal de Discord de atendimento ao cliente.

O cliente poderá acessar o suporte prestado pela Verifik de segunda a sexta-feira, das 8h00 às 17h00 (UTC-5), exceto nos feriados nacionais («horário normal de suporte»).

## 2. Tempos de resposta e de resolução de incidentes

Os incidentes reportados pelo cliente serão classificados pela Verifik de acordo com a gravidade, o impacto operacional e o alcance, conforme os seguintes níveis de atendimento:

| Gravidade do incidente | Descrição | Tempo de primeira resposta | Objetivo de resolução |
| --- | --- | --- | --- |
| Nível 1. Crítico | Incidentes que causem a interrupção total da plataforma, afetem gravemente suas funcionalidades essenciais ou impliquem uma vulnerabilidade crítica de segurança. | Dentro de uma (1) hora durante o horário normal de suporte. | Dentro de vinte e quatro (24) horas. |
| Nível 2. Alto | Incidentes que causem degradação significativa do serviço ou afetem funcionalidades importantes sem produzir uma interrupção total. | Dentro de quatro (4) horas durante o horário normal de suporte. | Dentro de dois (2) dias úteis. |
| Nível 3. Baixo | Incidentes de impacto limitado, erros menores e consultas técnicas que não comprometam de forma significativa a operação do serviço. | Dentro de oito (8) horas durante o horário normal de suporte. | Dentro de cinco (5) dias úteis. |

### Condições de atendimento

a) Os tempos de primeira resposta serão calculados exclusivamente dentro do horário normal de suporte estabelecido na seção 1.

b) A primeira resposta consistirá em uma comunicação da Verifik que confirme o recebimento e o atendimento do incidente. As respostas automáticas de recebimento não constituem uma primeira resposta para os efeitos desta seção.

c) Os tempos de resolução constituem objetivos operacionais sujeitos a esforços comercialmente razoáveis e não representam garantias de resolução dentro de um prazo determinado.

d) A Verifik determinará a classificação dos incidentes com base na gravidade e no impacto técnico, e poderá modificá-la quando existirem circunstâncias que o justifiquem.

e) Os tempos de resolução poderão ser afetados por circunstâncias fora do controle razoável da Verifik, incluídas interrupções, falhas ou restrições de acesso a fontes governamentais ou a serviços de terceiros.

f) Quando um incidente não puder ser resolvido dentro do prazo objetivo, a Verifik continuará realizando esforços comercialmente razoáveis para resolvê-lo e informará o cliente sobre o estado e os avanços relevantes.

## 3. Disponibilidade do serviço e tempos de resposta

A disponibilidade dos serviços é avaliada mensalmente conforme a Tabela 1, excluindo o tempo de inatividade programado. Este compreende as janelas de manutenção e atualização da plataforma, previstas em horários de menor demanda para minimizar interrupções.

A Verifik poderá publicar periodicamente janelas recorrentes de tempo de inatividade programado. «Tempo de inatividade programado recorrente» significa as janelas de indisponibilidade que ocorrem em horários fixos conforme calendários recorrentes e que são publicadas como parte da documentação da API da Verifik.

A Verifik notificará por escrito, com pelo menos sete (7) dias de calendário de antecedência, as manutenções programadas fora das janelas recorrentes publicadas, salvo situações de emergência que exijam intervenção imediata para preservar a segurança ou a continuidade do serviço. As janelas serão realizadas preferencialmente em horário noturno ou nos fins de semana.

### Tabela 1. Disponibilidade do serviço

| Disponibilidade | Produto |
| --- | --- |
| Bases de dados: 90,00% ou mais | smartCHECK, DB Screening |
| E-mail/telefone: 99,00% ou mais | smartACCESS, smartENROLL |
| Biometria: 99,00% ou mais | smartACCESS, smartENROLL |
| Digitalização de documentos: 99,00% ou mais | smartENROLL, smartACCESS |

A API de verificação de bases de dados depende de conexões com fontes governamentais. A Verifik não possui nem controla esses pontos de acesso.

### 3.1. Exclusões de disponibilidade para DB Screening / smartCHECK {#exclusoes-disponibilidade}

Devido às características historicamente imprevisíveis da disponibilidade operacional de certas fontes de dados externas, endpoints específicos ficam excluídos dos compromissos de disponibilidade da plataforma e das disposições de compensação por tempo de inatividade deste acordo.

Os seguintes endpoints estão excluídos:

- México – validação INE
- México – validação de placa veicular

As interrupções, os períodos de manutenção, o desempenho degradado, as respostas demoradas ou a indisponibilidade temporária que afetem esses endpoints:

- não serão considerados tempo de inatividade da plataforma;
- não serão incluídos nos cálculos de disponibilidade da plataforma;
- não darão direito a créditos de serviço nem a outra compensação sob este acordo.

A Verifik continuará realizando esforços comercialmente razoáveis para manter a conectividade e restabelecer o serviço quando for possível. Não se oferece garantia de tempo ativo para os endpoints enumerados.

### 3.2. Como a disponibilidade é medida

A disponibilidade é calculada por conta para cada mês de calendário em UTC:

```
disponibilidade = solicitações bem-sucedidas / (solicitações bem-sucedidas + falhas do serviço)
```

As falhas do serviço são solicitações que esgotam o tempo de espera, devolvem um erro 5xx ou uma resposta 408 ou 504, ou indicam que o endpoint está fora de serviço.

Os erros do cliente ficam fora do cálculo. Incluem parâmetros inválidos ou ausentes, registros não encontrados na fonte, erros de autenticação e de permissão, e outras respostas 4xx.

Os clientes poderão consultar a disponibilidade mensal no painel do cliente e, quando estiver habilitada, por meio da API de uso, com detalhamento por serviço. Os endpoints da seção 3.1 ficam excluídos dos compromissos de disponibilidade.

### 3.3. Objetivos operacionais de tempo de resposta das consultas

Os tempos de resposta das consultas a bases de dados governamentais (DB Screening / smartCHECK) constituem objetivos operacionais de desempenho da Verifik, orientados a buscar uma prestação eficiente dos serviços.

Em condições normais de operação, a Verifik procurará alcançar os seguintes objetivos:

a) **Tempo de resposta objetivo:** realizar esforços comercialmente razoáveis para responder às consultas dentro de um (1) segundo.

b) **Tempo médio objetivo:** manter um tempo médio de resposta não superior a três (3) segundos por consulta, medido mensalmente.

c) **Tempo máximo objetivo:** procurar que as consultas individuais não superem dez (10) segundos de resposta.

Os tempos de resposta poderão variar devido à disponibilidade, à capacidade, à manutenção, à latência e às demais condições técnicas das fontes de informação governamentais ou de terceiros, bem como pela utilização de mecanismos de consulta dinâmica que exijam consultar sequencialmente múltiplas fontes de informação, conforme o estabelecido na [Política de faturamento e consumo de créditos](/verifik-pt/legal/billing-policy).

Os tempos anteriores são objetivos operacionais de referência e não constituem garantias de desempenho, obrigações de resultado nem compromissos de tempo máximo de resposta.

O cliente reconhece que os tempos de resposta podem variar devido à disponibilidade, à capacidade, à manutenção, à latência e às demais condições técnicas das fontes de informação governamentais ou de terceiros, bem como pela utilização de mecanismos de consulta dinâmica que exijam acessar sequencialmente múltiplas fontes.

Para efeitos de medição, o tempo de resposta corresponde ao processamento de uma única solicitação de API, excluindo as demoras de transmissão por redes de Internet que estejam fora do controle da Verifik.

O descumprimento desses objetivos operacionais não constituirá, por si só, um descumprimento contratual nem dará lugar a compensações, créditos de serviço ou penalidades. O anterior não isenta a Verifik de cumprir as obrigações expressamente assumidas em relação à sua própria infraestrutura, à disponibilidade da plataforma e aos demais compromissos aplicáveis conforme este acordo.

Esta seção será interpretada em conjunto com a [seção 6](#limitacoes-de-garantia) deste acordo, relativa às limitações de garantia das fontes governamentais.

### 3.4. Objetivos por contrato

O painel do cliente e a API de uso poderão comparar o desempenho mensal do smartCHECK com o objetivo de referência de 90%. Os objetivos contratuais específicos se aplicarão unicamente quando estiverem incluídos de forma expressa nas condições comerciais do cliente. Nos demais casos, os números mostrados serão informativos. A visualização não gera compensações adicionais às previstas na seção 4.

## 4. Compensação por descumprimento dos níveis de disponibilidade

As compensações por descumprimento dos níveis de disponibilidade estabelecidos neste acordo procederão exclusivamente quando a indisponibilidade for atribuível a falhas internas da Verifik e tiver gerado cobranças efetivas ao cliente por consultas de API não processadas de forma satisfatória.

Nesses casos, a compensação consistirá na restituição dos créditos efetivamente descontados por essas consultas, sem que procedam créditos adicionais por solicitações não faturadas.

Para o smartCHECK (DB Screening), as interrupções ou limitações das fontes governamentais não gerarão compensações, conforme as exclusões e limitações estabelecidas nas seções [3.1](#exclusoes-disponibilidade) e [6](#limitacoes-de-garantia) deste acordo.

As porcentagens de disponibilidade estabelecidas na seção 3 constituem os níveis de referência para avaliar o desempenho dos serviços, mas o seu descumprimento não gerará automaticamente compensações econômicas quando não existirem cobranças efetivas suscetíveis de restituição.

As compensações previstas nesta seção serão reconhecidas mediante créditos de serviço aplicáveis a consumos futuros, e não como devoluções em dinheiro, sem prejuízo dos direitos que correspondam às partes por descumprimento material conforme o contrato comercial aplicável.

| Serviço | Sem compensação | Com compensação |
| --- | --- | --- |
| Bases de dados (smartCHECK, DB Screening) | 90,00% ou mais | 89,99% ou menos |
| E-mail/telefone (smartACCESS, smartENROLL) | 99,00% ou mais | 98,99% ou menos |
| Biometria (smartACCESS, smartENROLL) | 99,00% ou mais | 98,99% ou menos |
| Digitalização de documentos (smartENROLL, smartACCESS) | 99,00% ou mais | 98,99% ou menos |

Os problemas internos do serviço de verificação em bases de dados (consulta de dados) excluem os problemas considerados de força maior (caso fortuito) decorrentes de migrações, desconexões ou intervenção externa dos governos que custodiam as bases de dados. A Verifik atua como intermediária e, portanto, não tem poder nem controle sobre as bases de dados consultadas.

## 5. Consulta dinâmica para o serviço smartCHECK {#consulta-dinamica}

Como parte da arquitetura padrão do serviço smartCHECK, a Verifik implementa um mecanismo de consulta dinâmica concebido para maximizar a disponibilidade, a cobertura e a confiabilidade do serviço nos endpoints compatíveis.

O mecanismo de consulta dinâmica permite que o smartCHECK e o DB Screening consultem de forma automática e sequencial múltiplas fontes de dados autorizadas quando a fonte de dados principal devolve uma resposta não satisfatória, incluídas, sem limitação, respostas «Not Found» ou respostas equivalentes de nível HTTP 400. Esta arquitetura tem por objeto aumentar a probabilidade de obter um resultado de verificação satisfatório mediante o aproveitamento de múltiplas fontes de dados elegíveis.

O cliente reconhece e aceita que a qualidade, a integridade e a disponibilidade das bases de dados governamentais podem variar significativamente segundo a jurisdição, e que determinadas bases de dados podem apresentar uma maior probabilidade de respostas não satisfatórias devido a registros incompletos, interrupções do serviço ou cobertura limitada de dados.

Para mitigar essas limitações, a consulta dinâmica está habilitada por padrão em todos os endpoints aplicáveis do smartCHECK e faz parte integral da estratégia de redundância e comutação por falha da Verifik. Este mecanismo permite à Verifik manter, em determinados endpoints, uma disponibilidade e uma cobertura do serviço próximas de cem por cento (100%) mediante o roteamento dinâmico de solicitações para fontes alternativas disponíveis quando for necessário.

O cliente reconhece e aceita, ainda, que:

a) A consulta dinâmica tem por objeto aumentar a probabilidade de obter respostas de verificação satisfatórias, mas não garante uma correspondência satisfatória em todos os casos.

b) Os tempos de resposta podem variar e, em alguns casos, ser superiores aos das consultas padrão de uma única fonte, devido à natureza em cascata das solicitações a múltiplas fontes.

c) A eficácia e a disponibilidade da consulta dinâmica continuarão sujeitas ao tempo de atividade, à acessibilidade e à qualidade dos dados das fontes subjacentes de terceiros ou governamentais.

d) A Verifik reserva-se o direito de modificar, priorizar ou substituir fontes de dados dentro da arquitetura de consulta dinâmica, a seu exclusivo critério, a fim de manter a continuidade do serviço, otimizar a cobertura e melhorar o desempenho da verificação.

A consulta dinâmica será considerada uma característica inerente do serviço smartCHECK e se aplicará automaticamente a todos os clientes que utilizem endpoints elegíveis, salvo disposição escrita em contrário da Verifik.

As regras de cobrança associadas à consulta dinâmica, incluídos os preços dinâmicos da cédula colombiana, estão na [Política de faturamento e consumo de créditos](/verifik-pt/legal/billing-policy).

## 6. Limitações de garantia das fontes de informação {#limitacoes-de-garantia}

A Verifik não é proprietária nem administradora das bases de dados governamentais consultadas e não controla a sua atualização, disponibilidade nem exatidão. Por isso, não garante o tempo de resposta, o tempo médio de atividade nem a exatidão dos dados provenientes dessas fontes. Esta limitação se aplica exclusivamente aos serviços smartCHECK (DB Screening) e não isenta a Verifik das obrigações expressamente assumidas em relação à sua própria infraestrutura.

**Controle de versões.** A Verifik identificará as novas versões deste acordo mediante a sua data de publicação. As modificações de contratos vigentes se sujeitarão às regras de modificação pactuadas em cada contrato.

<a id="dynamic-pricing-billing"></a>

**Documentos relacionados.** As regras de cobrança e os preços dinâmicos estão na [Política de faturamento e consumo de créditos](/verifik-pt/legal/billing-policy#dynamic-pricing-billing).
