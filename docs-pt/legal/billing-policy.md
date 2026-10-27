---
id: billing-policy
title: Política de faturamento e consumo de créditos
description: Regras de cobrança de consultas de API e preços dinâmicos
slug: /legal/billing-policy
---

# Política de faturamento e consumo de créditos

**Regras de cobrança de consultas de API e preços dinâmicos**

**Versão 1.0 | Data de publicação: 26 de outubro de 2026**

Esta política descreve as regras gerais de faturamento e consumo de créditos aplicáveis aos serviços aqui identificados. As tarifas e as condições particulares serão as acordadas expressamente com cada cliente. A publicação de alterações desta política não modificará unilateralmente os contratos vigentes.

## 1. Esquema de cobrança do smartCHECK (DB Screening)

### 1.1. Regra geral de cobrança

O esquema de cobrança se aplica à solução smartCHECK (DB Screening), que permite consultar bases de dados governamentais.

**Regra geral.** Uma resposta HTTP 200 é cobrada. Não se cobram HTTP 403, 412, 422 e 500; tempos de espera esgotados; nem HTTP 409 (incluídas a indisponibilidade da fonte e as falhas de conexão). HTTP 404 só é cobrado nos casos expressamente indicados na seção 1.2.

| Com cobrança | Sem cobrança |
| --- | --- |
| 200 | 403 |
|  | 404 |
|  | 409 |
|  | 412 |
|  | 422 |
|  | 500 |
|  | Tempo de espera esgotado |

Nenhum endpoint fora da Colômbia é cobrado com HTTP 404. Os endpoints não incluídos na seção 1.2 também não são cobrados com HTTP 404.

### 1.2. Colômbia: exceções de cobrança por HTTP 404

Esta seção é a única fonte de cobranças por HTTP 404 no smartCHECK. Todas as rotas seguintes correspondem a APIs da Colômbia. Os tempos de espera esgotados e as falhas de fonte HTTP 409 não são cobrados.

**RUNT** (somente HTTP 404 com código de resposta `NotFound`). As respostas HTTP 409 (por exemplo, quando a fonte está fora de serviço ou um worker RUNT não está disponível) não são cobradas.

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

**Filiações à seguridade social.** Qualquer HTTP 404 na rota seguinte é faturável, inclusive quando a mensagem indica uma data de expedição incorreta. As falhas de conexão que devolvem HTTP 409 não são cobradas.

| Nome do produto | Rota |
| --- | --- |
| Filiações à seguridade social Colômbia | `GET /v2/co/afiliaciones` |

**Avaliação veicular SIBGA** (somente HTTP 404 com código de resposta `NotFound`).

| Nome do produto | Rota |
| --- | --- |
| Avaliação veicular SIBGA Colômbia | `GET /v2/co/sibga/valuation` |

**Cédula de cidadania colombiana.** Só se cobra um HTTP 404 cuja mensagem seja `CEDULA NO EXISTE`, à tarifa de vigência. Qualquer outro HTTP 404 na rota seguinte não é cobrado. `GET`/`POST /v2/co/cedula/vigencia` não cobra as suas próprias respostas HTTP 404.

| Nome do produto | Rota |
| --- | --- |
| Consulta de cédula de cidadania colombiana | `GET` / `POST /v2/co/cedula` |

**Não se cobra com HTTP 404:** outras rotas RUNT da Colômbia (incluídas as consultas de proprietários), todo endpoint fora da Colômbia e toda rota não listada nesta seção. A prova de vida facial pode cobrar HTTP 409 por falha de liveness; não se cobra com HTTP 404. O smartBatch usa HTTP 404 apenas para marcar linhas como bem-sucedidas e não cobra créditos por essas respostas.

## 2. Consulta dinâmica para smartCHECK

A descrição técnica da consulta dinâmica está na [seção 5 do Acordo de Nível de Serviço](/verifik-pt/legal/service-level-agreement#consulta-dinamica). Esta política não a reproduz.

Para efeitos de faturamento, nos endpoints compatíveis a Verifik poderá consultar de forma automática e sequencial fontes de informação alternativas quando a fonte principal não produzir um resultado satisfatório. A consulta dinâmica pode aumentar os tempos de resposta porque exige consultas sucessivas. A Verifik poderá modificar, priorizar ou substituir as fontes utilizadas para otimizar o serviço, sem que isso autorize alterações unilaterais das tarifas acordadas.

## 3. Preços dinâmicos para a consulta de cédula de cidadania colombiana {#dynamic-pricing-billing}

O cliente reconhece e aceita que as consultas realizadas mediante os endpoints `GET`/`POST /v2/co/cedula` poderão estar sujeitas a um esquema de preços dinâmicos, em função da fonte de informação utilizada e do resultado obtido mediante o mecanismo de consulta dinâmica descrito na [seção 5 do Acordo de Nível de Serviço](/verifik-pt/legal/service-level-agreement#consulta-dinamica) e referido na seção 2 desta política.

### 3.1. Aplicação de tarifas padrão e premium

Quando a consulta for resolvida de forma satisfatória (HTTP 200) mediante as fontes padrão, aplicar-se-á a tarifa padrão correspondente ao serviço de consulta de cédula colombiana.

Quando as fontes padrão não produzirem uma correspondência satisfatória e o mecanismo de consulta dinâmica obtiver uma resposta satisfatória (HTTP 200) mediante uma fonte de verificação ampliada ou premium, aplicar-se-á a tarifa premium correspondente, ainda que o cliente tenha utilizado o endpoint padrão.

As tarifas padrão e premium serão as expressamente acordadas com cada cliente no seu contrato ou documento tarifário aceito por ambas as partes.

### 3.2. Relação com as tarifas contratuais

Para os endpoints `GET`/`POST /v2/co/cedula`, a categoria padrão ou premium será determinada conforme esta política, sempre que o contrato aplicável incorpore expressamente esta regra. Em caso de conflito com uma tarifa geral por consulta, prevalecerá a regra específica de seleção de categoria unicamente quando assim o estabelecer o contrato.

Esta regra não autoriza a Verifik a modificar unilateralmente os valores das tarifas previamente acordadas.

### 3.3. Respostas não satisfatórias e exceções de cobrança

As respostas HTTP 404 serão cobradas unicamente conforme as exceções da seção 1.2 e à tarifa ali definida.

As demais respostas não faturáveis reger-se-ão pela seção 1.1.

### 3.4. Transparência de faturamento {#include-cost}

O cliente poderá utilizar o parâmetro `includeCost=true` nas solicitações elegíveis para obter informação sobre os créditos faturados.

O histórico de solicitações de API permitirá consultar os registros de consumo e os ajustes de faturamento correspondentes, incluídos os casos em que se aplique a tarifa premium mediante consulta dinâmica.

### 3.5. Consulta premium direta

As consultas realizadas diretamente mediante o endpoint `/v2/co/cedula/premium` estarão sujeitas à tarifa premium correspondente, independentemente de ter sido utilizado ou não o mecanismo de escalonamento automático.

As disposições desta seção aplicar-se-ão exclusivamente aos endpoints aqui identificados e não modificarão as tarifas nem as condições de faturamento dos demais serviços contratados.

Consulte a [cédula colombiana (consulta básica)](/identity-validation/colombia/colombian-citizen) para obter os detalhes da API.

**Vigência e condições particulares.** Em caso de discrepância, prevalecerão as condições econômicas expressamente aceitas no contrato comercial, salvo as exceções de preços dinâmicos que esse contrato incorpore de maneira específica.
