---
id: service-level-agreement
title: Acordo de Nível de Serviço
description: Acordo de nível de serviço e termos de suporte da Verifik
slug: /legal/service-level-agreement
---

# Acordo de Nível de Serviço

### **Service Level Agreement**

#### **I. Service Channels. The User shall have access to the following Verifik service channels:**

1. Chat available on [Verifik.co](http://verifik.co)
2. Email: support@verifik.co
3. Customer service WhatsApp channel.
4. Customer service Discord channel.

#### **II. Hours of Operation**

The User will be able to access the support provided by Verifik, Monday through Friday (business days) from 8:00 AM to 5:00 PM Colombia time.

#### **III. Criticality Levels**

The requests or requirements raised by Users to the support team will be classified according to the impact they have on the User's operation, as follows:

| **Critical:** | Total service unavailability.                                                |
| ------------- | ---------------------------------------------------------------------------- |
| **Urgent:**   | Loss of specific functionality for all use cases.                            |
| **Medium:**   | Loss of functionality in specific cases.                                     |
| **Normal:**   | Other requests or general inquiries that do not affect Service Availability. |

#### **IV. Response Times**

1. **Definitions:** Terms used in this section, shall have the following meanings:

```
i. Attention: The time elapsed between the request or requirement and the assignment of a service agent.
ii. Review: The time elapsed between the agent's greeting and the first response regarding the request or requirement.
iii. Escalation: The time elapsed between the agent's escalation and the case review by the person to whom it was escalated. This time only applies in events where it is necessary to escalate the user's request or requirement.
iv. Resolution: The time elapsed between the agent's greeting and the moment the case is resolved.
```

The response time varies according to the criticality of the requirement, as follows:

| **SEVERITY/TIME** | **ATTENTION** | **REVIEW** | **ESCALATION** | **RESOLUTION** |
| ----------------- | ------------- | ---------- | -------------- | -------------- |
| **Critical**      | 0.5 hr        | 0.5 hr     | 15 mins        | 48 hrs         |
| **Urgent**        | 0.5 hr        | 0.5 hr     | 15 mins        | 48 hrs         |
| **Medium**        | 1 hr          | 1 hr       | 0.5 hr         | 96 hrs         |
| **Normal**        | 1 hr          | 1 hr       | 0.5 hr         | 96 hrs         |

**Note:** 48 hrs means we take up to 48 hours to resolve the incident depending on its complexity.

Response times will be counted from the last message sent by the user.

#### **V. Platform Availability**

The Platform will be available at least:

| **Product**  | **Availability**                                                                                      | **Notes**                                                              |
| ------------ | ----------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| SmartCHECK   | 90.0% > Data API                                                                                      | Data API depends on connections with Government Sources                |
| smartACCESS  | 99.0% > Email/Tel<br/>98.0% > Biometrics                                                    |                                                                        |
| smartENROLL  | 99.0% > Email/Tel<br/>98.0% > Biometrics<br/>98.0% > Document Scanning<br/>90.0% > Data API | Data API depends on connections with Government Sources                |

#### **VI. Downtime Compensation**

Credit Compensation awarded for the affected month will be provided in the form of a credit equivalent to the cost of the failed service call. If the service unavailability is caused by **Internal Issues** of Verifik (database, servers, internal API issues) and is not effectively resolved by the Company, Verifik will compensate as follows:

| **Service Availability**                                                                                            | **Credit Compensation**               | **Product**                       |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------- | --------------------------------- |
| **Data API (Data Query)**<br/>90.00% or higher<br/>89.99% or lower               | No Credit<br/>Compensation | smartCHECK                        |
| **Email/Tel**<br/>99.00% or higher<br/>98.99% or lower                           | No Credit<br/>Compensation | smartACCESS<br/>smartENROLL |
| **Biometrics**<br/>98.00% or higher<br/>97.99% or lower                          | No Credit<br/>Compensation | smartACCESS<br/>smartENROLL |
| **Document Scanning**<br/>98.00% or higher<br/>97.99% or lower                   | No Credit<br/>Compensation | smartENROLL<br/>smartACCESS |

**Internal Issues** of the Data API service (Data Query) excludes issues considered Force Majeure (Fortuitous Events), whether due to migration, disconnection, or external intervention by the governments that manage the databases. Verifik is an intermediary and therefore does NOT have control over the queried databases.

#### **VII. Charging Scheme for smartCHECK**

The charging scheme applies to the smartCHECK solution, which enables queries to government databases. Verifik does not own, manage, or bear responsibility for (does not control or update) the government databases of the various countries we serve; therefore, Verifik reserves the right not to offer guarantees regarding Response Time, Average Up Time, or Data Accuracy.

If the query returns a **200** or **404**, it will be charged. Otherwise, if the query returns **403**, **409**, **412**, **422**, or **500**, it will not be charged.

| **Charged** | **Not Charged** |
| ----------- | --------------- |
| 200         | 403             |
| 404         | 409             |
|             | 412             |
|             | 422             |
|             | 500             |

#### **VIII. Consulta Dinâmica para o Serviço smartCHECK**

Como parte da arquitetura padrão do serviço smartCHECK, a Verifik implementa um mecanismo de Consulta Dinâmica (Dynamic Query) projetado para maximizar a disponibilidade, cobertura e confiabilidade do serviço nos endpoints suportados.

O mecanismo de Consulta Dinâmica permite que o smartCHECK e o DB Screening consultem automaticamente e sequencialmente múltiplas fontes de dados autorizadas nos casos em que a fonte de dados primária retorne uma resposta malsucedida, incluindo, entre outras, respostas do tipo "Não Encontrado" ou equivalentes a erros HTTP de nível 400. Esta arquitetura tem como finalidade aumentar a probabilidade de obter um resultado de verificação bem-sucedido, aproveitando múltiplas fontes de dados elegíveis.

O Cliente reconhece e concorda que a qualidade, integridade e disponibilidade das bases de dados governamentais podem variar significativamente conforme a jurisdição, e que certas bases de dados podem apresentar uma maior probabilidade de respostas malsucedidas devido a registros incompletos, interrupções de serviço ou cobertura limitada de dados.

Para mitigar tais limitações, a Consulta Dinâmica está habilitada por padrão em todos os endpoints aplicáveis do smartCHECK e constitui parte integrante da estratégia de redundância e failover da Verifik. Este mecanismo permite à Verifik manter níveis de disponibilidade e cobertura próximos a cem por cento (100%) em determinados endpoints, roteando dinamicamente solicitações para fontes alternativas disponíveis quando necessário.

O Cliente reconhece e concorda ainda que:

a) A Consulta Dinâmica tem como finalidade aumentar a probabilidade de obter respostas de verificação bem-sucedidas, mas não garante uma correspondência ou resultado bem-sucedido em todos os casos;

b) Os tempos de resposta poderão variar e, em certos casos, poderão ser maiores do que os de uma consulta padrão a uma única fonte, devido à natureza em cascata das consultas a múltiplas fontes;

c) A eficácia e disponibilidade da Consulta Dinâmica estarão sujeitas à disponibilidade, acessibilidade e qualidade dos dados das fontes governamentais ou de terceiros subjacentes; e

d) A Verifik reserva-se o direito de modificar, priorizar ou substituir as fontes de dados dentro da arquitetura de Consulta Dinâmica, a seu exclusivo critério, a fim de manter a continuidade do serviço, otimizar a cobertura e melhorar o desempenho das verificações.

A Consulta Dinâmica será considerada uma funcionalidade inerente ao serviço smartCHECK e aplicará automaticamente a todos os Clientes que utilizem endpoints elegíveis, salvo disposição em contrário por escrito da Verifik.

#### **VIII.A Preço dinâmico (faturamento)**

Quando a Consulta Dinâmica utiliza um caminho de verificação estendido em um endpoint elegível e retorna uma correspondência bem-sucedida (**HTTP 200**), pode aplicar-se **preço dinâmico**. Nesse caso, os créditos são deduzidos no **nível premium** dessa família de endpoints, e não no nível padrão associado à rota base.

O preço dinâmico aplica-se hoje ao endpoint padrão de cédula colombiana (**`GET/POST /v2/co/cedula`**) quando um caminho de verificação estendido é concluído com sucesso após os caminhos padrão não retornarem correspondência. Os valores de crédito dependem da **precificação configurada para o Cliente** (tarifa padrão vs. tarifa premium para essa família de endpoints).

O preço dinâmico **não altera** as regras de cobrança da seção **VII**: erros de validação e de servidor (**403**, **409**, **412**, **422**, **500**) não são cobrados; respostas **404** são cobradas na tarifa padrão quando nenhuma correspondência bem-sucedida é obtida nos caminhos aplicáveis.

Para transparência, o Cliente pode enviar **`includeCost=true`** em solicitações elegíveis para receber um objeto **`billing`** quando créditos forem cobrados (incluindo quando o preço dinâmico se aplica). O histórico de solicitações API registra metadados de ajuste (por exemplo, valores padrão vs. cobrados).

Chamar diretamente **`/v2/co/cedula/premium`** sempre usa precificação premium; o preço dinâmico descreve a escalada automática a partir da rota padrão **`/v2/co/cedula`**.

Consulte [Cédula colombiana premium](/verifik-pt/identity-validation/colombia/colombian-cedula-premium#dynamic-pricing) para detalhes da API.

#### **IX. Indisponibilidade da Plataforma**

Scheduled maintenance windows will take place at night and/or on weekends, with prior notification via email to users.

#### **X. Novas Adaptações ou Desenvolvimentos**

The timeframes for developing new adaptations due to unexpected changes from User systems integrating via API with the Platform will vary according to the changes required by the User and will not count as Platform Downtime.
