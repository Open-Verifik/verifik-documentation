---
id: service-level-agreement
title: Acordo de Nível de Serviço
description: Acordo de nível de serviço e termos de suporte da Verifik
slug: /legal/service-level-agreement
---

# Acordo de Nível de Serviço

**Última atualização: 21 de outubro de 2026**

### **Acordo de Nível de Serviço**

#### **1. Canais de atendimento. O Usuário terá acesso aos seguintes canais de atendimento da Verifik:**

1. Chat disponível em [Verifik.co](http://verifik.co)
2. E-mail: support@verifik.co
3. Canal de WhatsApp de atendimento ao cliente.
4. Canal de Discord de atendimento ao cliente.

#### **2. Horário de atendimento**

O Usuário poderá acessar o suporte prestado pela Verifik, de segunda a sexta-feira (dias úteis), das 8h00 às 17h00, horário da Colômbia.

#### **3. Níveis de criticidade**

As solicitações ou requisitos apresentados pelos Usuários à equipe de suporte serão classificados conforme o impacto na operação do Usuário, da seguinte forma:

| | |
| --- | --- |
| **Crítico:** | Indisponibilidade total do serviço. |
| **Urgente:** | Perda de funcionalidade específica em todos os casos de uso. |
| **Médio:** | Perda de funcionalidade em casos específicos. |
| **Normal:** | Outras solicitações ou consultas gerais que não afetam a Disponibilidade do Serviço. |

#### **4. Tempos de resposta**

**Definições:** Os termos utilizados nesta seção terão os seguintes significados:

i. Atendimento: tempo decorrido entre a solicitação ou requisito e a atribuição de um agente de atendimento.

ii. Revisão: tempo decorrido entre a saudação do agente e a primeira resposta em relação à solicitação ou requisito.

iii. Escalonamento: tempo decorrido entre o escalonamento pelo agente e a análise do caso pela pessoa a quem foi escalado. Este tempo aplica-se somente quando for necessário escalar a solicitação ou requisito do Usuário.

iv. Resolução: tempo decorrido entre a saudação do agente e o momento em que o caso é resolvido.

O tempo de resposta varia conforme a criticidade do requisito, da seguinte forma:

| **GRAVIDADE/TEMPO** | **ATENDIMENTO** | **REVISÃO** | **ESCALONAMENTO** | **RESOLUÇÃO** |
| ------------------- | --------------- | ----------- | ----------------- | ------------- |
| **Crítico** | 0,5 h | 0,5 h | 15 min | 48 h |
| **Urgente** | 0,5 h | 0,5 h | 15 min | 48 h |
| **Médio** | 1 h | 1 h | 0,5 h | 96 h |
| **Normal** | 1 h | 1 h | 0,5 h | 96 h |

**Nota:** 48 h significa que levamos até 48 horas para resolver o incidente, conforme sua complexidade.

Os tempos de resposta serão contados a partir da última mensagem enviada pelo Usuário.

##### **4.1. Tickets críticos no painel do cliente**

Os Usuários podem abrir um ticket com prioridade Crítica no painel do cliente quando o tráfego de produção estiver bloqueado. Para esses tickets:

- A Verifik envia uma primeira resposta em até 24 horas após o envio.
- A Verifik busca resolver o ticket em até 48 horas após o envio.
- Ambos os prazos correm em horas de relógio a partir do envio do ticket, e o painel os exibe no fuso horário de suporte do Usuário.
- Tickets críticos sem resposta da equipe são escalonados internamente antes do prazo de primeira resposta.

Esses prazos aplicam-se a tickets abertos pelo painel do cliente. Os tempos de atendimento, revisão e escalonamento da tabela acima aplicam-se às conversas nos canais de atendimento da Seção 1.

#### **5. Disponibilidade da plataforma**

A Plataforma estará disponível pelo menos:

| **Igual ou superior a** | **Inferior a** | **Produto** | **Notas** |
| --- | --- | --- | --- |
| 90,00% | 89,99% | smartCHECK (DB Screening) | A API de DB Screening depende de conexões com fontes governamentais |
| 99,00% | 98,99% | smartACCESS, smartENROLL (E-mail/Tel) | Sem compensação em créditos |
| 99,00% | 98,99% | smartACCESS, smartENROLL (Biometria) | Sem compensação em créditos |
| 99,00% | 98,99% | smartENROLL, smartACCESS (Digitalização de documentos) | Sem compensação em créditos |

##### **5.1. Exclusões de disponibilidade por endpoint**

Devido às características historicamente imprevisíveis de disponibilidade operacional de certas fontes de dados externas, endpoints específicos ficam excluídos dos compromissos de Disponibilidade da Plataforma e das disposições de Compensação por indisponibilidade deste Acordo.

Os seguintes endpoints estão excluídos:

- México – Validação INE
- México – Validação de placa veicular

Interrupções, períodos de manutenção, desempenho degradado, respostas atrasadas ou indisponibilidade temporária que afetem esses endpoints não:

- serão consideradas Indisponibilidade da Plataforma;
- serão incluídas nos cálculos de Disponibilidade da Plataforma;
- qualificarão para Créditos de Serviço ou qualquer outra compensação sob este Acordo.

A Verifik continuará a envidar esforços comercialmente razoáveis para manter a conectividade e restabelecer o serviço quando possível; no entanto, não há garantia de tempo de atividade para os endpoints listados.

##### **5.2. Como a disponibilidade é medida**

A disponibilidade é calculada por conta para cada mês civil em UTC:

```
disponibilidade = solicitações bem-sucedidas / (solicitações bem-sucedidas + falhas de serviço)
```

- Falhas de serviço são solicitações que expiram, retornam erro 5xx ou resposta 408 ou 504, ou indicam que o endpoint está fora de serviço.
- Erros do cliente ficam fora do cálculo. Incluem parâmetros inválidos ou ausentes, registros não encontrados na fonte, erros de autenticação e permissão e outras respostas 4xx.

Os Usuários podem ver a disponibilidade mensal no painel do cliente em Verificação de status e por meio da [API de uso](/resources/usage#get-monthly-availability). Ambos incluem detalhamento por serviço, de modo que solicitações aos endpoints da Seção 5.1 podem ser separadas do restante. Esses endpoints permanecem fora dos compromissos deste Acordo.

##### **5.3. Metas específicas por contrato**

O painel do cliente e a API de uso comparam cada mês com uma meta de SmartCHECK de 95%. Essa meta aplica-se a contas cujo acordo comercial a inclui. Para as demais contas, o valor é informativo e aplicam-se os compromissos da Seção 5. Uma meta por contrato não adiciona compensação em créditos além da Seção 6, salvo se o acordo assim dispor.

#### **6. Compensação por indisponibilidade**

A Compensação em Crédito concedida para o mês afetado será fornecida na forma de crédito equivalente ao custo da chamada de serviço com falha. Se a indisponibilidade do serviço for causada por Problemas Internos da Verifik (banco de dados, servidores, problemas internos de API) e não for efetivamente resolvida pela Empresa, a Verifik compensará da seguinte forma:

| **Igual ou superior a** | **Inferior a** | **Compensação em créditos por nível de serviço** | **Produto** |
| --- | --- | --- | --- |
| 90,00% | 89,99% | Sem compensação em créditos | smartCHECK (DB Screening / Consulta de dados) |
| 99,00% | 98,99% | Sem compensação em créditos | smartACCESS, smartENROLL (E-mail/Tel) |
| 99,00% | 98,99% | Sem compensação em créditos | smartACCESS, smartENROLL (Biometria) |
| 99,00% | 98,99% | Sem compensação em créditos | smartENROLL, smartACCESS (Digitalização de documentos) |

Problemas Internos do serviço de API de Dados (Consulta de dados) excluem situações consideradas Força Maior (casos fortuitos), seja por migração, desconexão ou intervenção externa dos governos que administram as bases de dados. A Verifik é intermediária e, portanto, NÃO controla as bases de dados consultadas.

#### **7. Esquema de cobrança do smartCHECK**

O esquema de cobrança aplica-se à solução smartCHECK, que permite consultas a bases de dados governamentais. A Verifik não é proprietária, não gerencia nem assume responsabilidade (não controla nem atualiza) as bases de dados governamentais dos diversos países que atendemos; por isso, a Verifik reserva-se o direito de não oferecer garantias quanto ao Tempo de Resposta, Tempo Médio de Atividade ou Precisão dos Dados.

**Regra geral.** Uma resposta HTTP **200** é cobrada. **Não** são cobrados: HTTP **403**, **412**, **422** e **500**; **timeouts** de solicitação; e respostas HTTP **409** (incluindo indisponibilidade da fonte e falhas de conexão). Uma resposta HTTP **404** **não** é cobrada, salvo se a Seção **7.1** se aplicar a essa solicitação.

| **Cobrado** | **Não cobrado** |
| --- | --- |
| 200 | 404 (exceto conforme a Seção 7.1) |
| | 403 |
| | 409 (incluindo falhas de fonte; nunca cobrado) |
| | 412 |
| | 422 |
| | 500 |
| | Timeouts (nunca cobrados) |

Nenhum endpoint fora da Colômbia é cobrado em HTTP **404**. Endpoints não listados na Seção **7.1** não são cobrados em HTTP **404**, incluindo todas as rotas em países diferentes da Colômbia.

##### **7.1 Colômbia: cobrança por HTTP 404**

Esta seção é a única fonte de cobranças por HTTP **404** sob a Seção **7**. Todas as rotas abaixo são APIs smartCHECK da Colômbia. **Timeouts** e falhas de fonte HTTP **409** **nunca** são cobrados em qualquer endpoint da Verifik.

**RUNT (somente HTTP 404 com código de resposta `NotFound`).** Respostas HTTP **409** (por exemplo, quando a fonte está fora de serviço ou um worker RUNT está indisponível) **não** são cobradas.

| Nome do produto | Rota |
| --- | --- |
| Consulta de condutor RUNT Colômbia | `GET /v2/co/runt/conductor` |
| Consulta de condutor RUNT Colômbia (v3) | `GET /v3/co/runt/conductor` |
| Consulta de veículo RUNT Colômbia | `GET /v2/co/runt/vehiculo` |
| Registro veicular completo RUNT Colômbia | `GET /v2/co/runt/vehiculo-completo` |
| SOAT veicular RUNT Colômbia | `GET /v2/co/runt/vehiculo-soat` |
| Veículo RUNT Colômbia por placa | `GET /v2/co/runt/vehicle-by-plate` |
| Veículo RUNT Colômbia por VIN | `GET /v2/co/runt/vehicle-by-vin` |
| Veículo RUNT Colômbia por placa (simplificado) | `GET /v2/co/runt/vehicle-by-plate-simplified` |
| Veículo RUNT Colômbia somente por placa | `GET /v2/co/runt/vehicle-by-plate-only` |

**Afiliações à previdência social.** **Qualquer** HTTP **404** na rota abaixo é faturável, inclusive quando a mensagem indica data de expedição incorreta. Falhas de conexão que retornam HTTP **409** **não** são cobradas.

| Nome do produto | Rota |
| --- | --- |
| Afiliações à previdência social Colômbia | `GET /v2/co/afiliaciones` |

**Avaliação veicular SIBGA (somente HTTP 404 com código de resposta `NotFound`).**

| Nome do produto | Rota |
| --- | --- |
| Avaliação veicular SIBGA Colômbia | `GET /v2/co/sibga/valuation` |

**Documento de identidade nacional colombiano (cédula).** Somente é cobrado um HTTP **404** cuja mensagem seja **`CEDULA NO EXISTE`**, na faixa de preço **vigencia**. Qualquer outro HTTP **404** na rota abaixo **não** é cobrado. **`GET`/`POST /v2/co/cedula/vigencia`** **não** cobra suas próprias respostas HTTP **404**.

| Nome do produto | Rota |
| --- | --- |
| Consulta de cédula de cidadania colombiana | `GET` / `POST` `/v2/co/cedula` |

**Não cobrado em HTTP 404:** Outras rotas RUNT da Colômbia (incluindo consultas de proprietários), todo endpoint fora da Colômbia e toda rota não listada nesta seção. A prova de vida facial pode cobrar HTTP **409** por falha de liveness; não é cobrada em HTTP **404**. O smartBatch usa HTTP **404** apenas para marcar linhas como bem-sucedidas e não cobra créditos por essas respostas.

#### **8. Consulta dinâmica para o serviço smartCHECK**

Como parte da arquitetura padrão do serviço smartCHECK, a Verifik implementa um mecanismo de Consulta Dinâmica destinado a maximizar a disponibilidade, a cobertura e a confiabilidade do serviço nos endpoints suportados.

O mecanismo de Consulta Dinâmica permite que smartCHECK e DB Screening consultem automaticamente e em sequência várias fontes de dados autorizadas quando a fonte primária retorna resposta malsucedida, incluindo, entre outras, respostas do tipo «não encontrado» ou equivalentes a erros HTTP de nível 400. Essa arquitetura visa aumentar a probabilidade de obter resultado de verificação bem-sucedido por meio de várias fontes elegíveis.

O Cliente reconhece e concorda que a qualidade, a integridade e a disponibilidade das bases de dados governamentais podem variar significativamente conforme a jurisdição, e que certas bases podem apresentar maior probabilidade de respostas malsucedidas devido a registros incompletos, interrupções de serviço ou cobertura limitada de dados.

Para mitigar essas limitações, a Consulta Dinâmica está habilitada por padrão em todos os endpoints aplicáveis do smartCHECK e integra a estratégia de redundância e failover da Verifik. Esse mecanismo permite à Verifik manter disponibilidade e cobertura próximas de cem por cento (100%) em determinados endpoints, roteando dinamicamente solicitações para fontes alternativas disponíveis quando necessário.

O Cliente reconhece e concorda ainda que:

a) A Consulta Dinâmica visa aumentar a probabilidade de respostas de verificação bem-sucedidas, mas não garante correspondência bem-sucedida em todos os casos;

b) Os tempos de resposta podem variar e, em alguns casos, ser maiores que em consultas padrão de fonte única, devido à natureza em cascata de várias solicitações;

c) A eficácia e a disponibilidade da Consulta Dinâmica permanecem sujeitas ao tempo de atividade, à acessibilidade e à qualidade dos dados das fontes governamentais ou de terceiros subjacentes; e

d) A Verifik reserva-se o direito de modificar, priorizar ou substituir fontes de dados na arquitetura de Consulta Dinâmica, a seu exclusivo critério, para manter a continuidade do serviço, otimizar a cobertura e melhorar o desempenho das verificações.

A Consulta Dinâmica será considerada funcionalidade inerente ao serviço smartCHECK e aplicará automaticamente a todos os Clientes que utilizem endpoints elegíveis, salvo disposição em contrário por escrito da Verifik.

##### **8.1 Preço dinâmico (faturamento)** {#dynamic-pricing-billing}

Quando a Consulta Dinâmica utiliza um caminho de verificação estendido em um endpoint elegível e retorna correspondência bem-sucedida (HTTP 200), pode aplicar-se preço dinâmico. Nesse caso, os créditos são deduzidos no nível premium dessa família de endpoints — não no nível padrão associado à rota base.

O preço dinâmico aplica-se hoje ao endpoint padrão de documento de identidade nacional colombiano (GET/POST /v2/co/cedula) quando um caminho de verificação estendido é concluído com sucesso após as rotas padrão não retornarem correspondência. Os valores de crédito dependem da precificação de funcionalidades configurada para o Cliente (tarifa padrão vs. tarifa premium para essa família de endpoints).

O preço dinâmico não altera as regras de cobrança da Seção **7** para códigos de status HTTP: erros de validação e de servidor (**403**, **409**, **412**, **422**, **500**) e **timeouts** não são cobrados. Cobranças por HTTP **404** seguem **somente** a Seção **7.1** (incluindo **`CEDULA NO EXISTE`** em **`/v2/co/cedula`**, cobrado na faixa de preço vigencia). Nenhum outro HTTP **404** é cobrado.

Para transparência, o Cliente pode enviar includeCost=true em solicitações elegíveis para receber um objeto de faturamento quando créditos forem cobrados (inclusive quando o preço dinâmico se aplicar). O histórico de solicitações da API registra metadados de ajuste (por exemplo, valores padrão vs. cobrados).

Chamar /v2/co/cedula/premium diretamente sempre usa preço premium; o preço dinâmico descreve a escalada automática a partir da rota padrão /v2/co/cedula.

Consulte [Cédula colombiana premium](/verifik-pt/identity-validation/colombia/colombian-cedula-premium#dynamic-pricing) para detalhes da API.

#### **9. Indisponibilidade da plataforma**

As janelas de manutenção programada ocorrerão à noite e/ou nos fins de semana, com notificação prévia por e-mail aos usuários.

#### **10. Novas adaptações ou desenvolvimentos**

Os prazos para desenvolver novas adaptações devido a alterações imprevistas nos sistemas dos Usuários que se integram via API à Plataforma variarão conforme as mudanças exigidas pelo Usuário e não contarão como Indisponibilidade da Plataforma.
