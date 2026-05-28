#!/usr/bin/env node
/**
 * One-off generator: missing Colombia vehicle + cert docs for docs-fr / docs-pt.
 * Run from repo root: node internal/scripts/generate-colombia-fr-pt-missing.mjs
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "../..");

const RELATIVE_FILES = [
	"vehicle-validation/colombia/bogota-taxi-drivers-by-control-card.mdx",
	"vehicle-validation/colombia/colombian-vehicle-information-service.mdx",
	"vehicle-validation/colombia/complete-vehicle-with-historical-records-by-license-plate-and-identification-card.mdx",
	"vehicle-validation/colombia/driver-s-license.mdx",
	"vehicle-validation/colombia/drivers-license-verification.mdx",
	"vehicle-validation/colombia/drivers-license.mdx",
	"vehicle-validation/colombia/general-query-of-simit-by-identification-document.mdx",
	"vehicle-validation/colombia/general-query-of-simit-by-license-plate.mdx",
	"vehicle-validation/colombia/information-system-for-drivers-transporting-dangerous-goods.mdx",
	"vehicle-validation/colombia/runt-colombian-vehicle.mdx",
	"vehicle-validation/colombia/runt-vehicle-records-by-plate-number-simplified.mdx",
	"vehicle-validation/colombia/sinister-verification-fasecolda.mdx",
	"vehicle-validation/colombia/vehicle-by-plate-and-identification-card-only.mdx",
	"vehicle-validation/colombia/vehicle-fines-check-in-bogot-tta-colombia.mdx",
	"vehicle-validation/colombia/vehicle-fines-check-in-bogota-colombia.mdx",
	"vehicle-validation/colombia/vehicle-s-soat-and-rtm-by-plate-and-identification-document.mdx",
	"vehicle-validation/colombia/vehicle-values-by-code-fasecolda.mdx",
	"vehicle-validation/colombia/vehicle-values-by-plate-fasecolda.mdx",
	"certificates/colombia-ministerio-trabajo-certificados-v3.mdx",
	"background-check/colombia/verify-police-compliance-with-corrective-measures.mdx",
];

const META = {
	"vehicle-validation/colombia/bogota-taxi-drivers-by-control-card.mdx": {
		fr: {
			title: "Bogotá — Taxi par carte de contrôle",
			description:
				"Consultez les informations du conducteur de taxi et de la carte d'exploitation à Bogotá à partir du numéro de carte de contrôle.",
		},
		pt: {
			title: "Bogotá — Taxi por cartão de controle",
			description:
				"Consulte informações do motorista de táxi e da carta de operação em Bogotá pelo número do cartão de controle.",
		},
	},
	"vehicle-validation/colombia/colombian-vehicle-information-service.mdx": {
		fr: {
			title: "RUNT — Véhicule par plaque",
			description:
				"Validez les véhicules en Colombie par plaque d'immatriculation via le RUNT avec l'API Verifik.",
		},
		pt: {
			title: "RUNT — Veículo por placa",
			description:
				"Valide veículos na Colômbia pela placa via RUNT com a API Verifik.",
		},
	},
	"vehicle-validation/colombia/complete-vehicle-with-historical-records-by-license-plate-and-identification-card.mdx":
		{
			fr: {
				title: "RUNT — Véhicule complet avec historique",
				description:
					"Consultez l'historique complet du véhicule au RUNT par plaque et pièce d'identité du propriétaire.",
			},
			pt: {
				title: "RUNT — Veículo completo com histórico",
				description:
					"Consulte o histórico completo do veículo no RUNT por placa e documento do proprietário.",
			},
		},
	"vehicle-validation/colombia/driver-s-license.mdx": {
		fr: {
			title: "Permis de conduire (RUNT)",
			description:
				"Vérifiez les permis de conduire en Colombie par numéro de document via le RUNT.",
		},
		pt: {
			title: "Carteira de motorista (RUNT)",
			description:
				"Verifique carteiras de motorista na Colômbia pelo número do documento via RUNT.",
		},
	},
	"vehicle-validation/colombia/drivers-license-verification.mdx": {
		fr: {
			title: "Vérification du permis de conduire (RUNT)",
			description:
				"Vérifiez le statut, les catégories et la validité du permis de conduire colombien via le RUNT.",
		},
		pt: {
			title: "Verificação de carteira de motorista (RUNT)",
			description:
				"Verifique status, categorias e validade da carteira de motorista colombiana via RUNT.",
		},
	},
	"vehicle-validation/colombia/drivers-license.mdx": {
		fr: {
			title: "Permis de conduire — RUNT",
			description:
				"Accédez aux données officielles du permis de conduire colombien : statut, catégories et dates d'expiration.",
		},
		pt: {
			title: "Carteira de motorista — RUNT",
			description:
				"Acesse dados oficiais da carteira colombiana: status, categorias e datas de validade.",
		},
	},
	"vehicle-validation/colombia/general-query-of-simit-by-identification-document.mdx": {
		fr: {
			title: "SIMIT — Requête générale par pièce d'identité",
			description: "Données SIMIT complètes par document d'identification.",
		},
		pt: {
			title: "SIMIT — Consulta geral por documento",
			description: "Dados completos do SIMIT por documento de identificação.",
		},
	},
	"vehicle-validation/colombia/general-query-of-simit-by-license-plate.mdx": {
		fr: {
			title: "SIMIT — Requête générale par plaque",
			description: "Données SIMIT complètes par numéro de plaque.",
		},
		pt: {
			title: "SIMIT — Consulta geral por placa",
			description: "Dados completos do SIMIT por placa.",
		},
	},
	"vehicle-validation/colombia/information-system-for-drivers-transporting-dangerous-goods.mdx": {
		fr: {
			title: "SISCONMP — Formations transport matières dangereuses",
			description: "Historique des formations SISCONMP pour conducteurs de matières dangereuses.",
		},
		pt: {
			title: "SISCONMP — Treinamentos transporte de carga perigosa",
			description: "Histórico de treinamentos SISCONMP para motoristas de carga perigosa.",
		},
	},
	"vehicle-validation/colombia/runt-colombian-vehicle.mdx": {
		fr: {
			title: "RUNT — Véhicule colombien par plaque",
			description: "Consultez les données officielles du véhicule au RUNT par plaque et document.",
		},
		pt: {
			title: "RUNT — Veículo colombiano por placa",
			description: "Consulte dados oficiais do veículo no RUNT por placa e documento.",
		},
	},
	"vehicle-validation/colombia/runt-vehicle-records-by-plate-number-simplified.mdx": {
		fr: {
			title: "RUNT — Véhicule simplifié par plaque",
			description: "Consultation RUNT allégée des informations essentielles du véhicule par plaque.",
		},
		pt: {
			title: "RUNT — Veículo simplificado por placa",
			description: "Consulta RUNT simplificada com dados essenciais do veículo por placa.",
		},
	},
	"vehicle-validation/colombia/sinister-verification-fasecolda.mdx": {
		fr: {
			title: "Fasecolda — Vérification des sinistres",
			description:
				"Vérifiez l'historique des sinistres et réclamations d'assurance véhicule via Fasecolda.",
		},
		pt: {
			title: "Fasecolda — Verificação de sinistros",
			description:
				"Verifique o histórico de sinistros e reclamações de seguro veicular via Fasecolda.",
		},
	},
	"vehicle-validation/colombia/vehicle-by-plate-and-identification-card-only.mdx": {
		fr: {
			title: "RUNT — Véhicule par plaque et pièce d'identité",
			description: "Validation véhicule RUNT par plaque et document du propriétaire uniquement.",
		},
		pt: {
			title: "RUNT — Veículo por placa e documento",
			description: "Validação RUNT por placa e documento do proprietário.",
		},
	},
	"vehicle-validation/colombia/vehicle-fines-check-in-bogot-tta-colombia.mdx": {
		fr: {
			title: "Bogotá — Consultation des amendes véhicule",
			description: "Service des amendes véhicule à Bogotá par plaque.",
		},
		pt: {
			title: "Bogotá — Consulta de multas veiculares",
			description: "Serviço de multas veiculares em Bogotá por placa.",
		},
	},
	"vehicle-validation/colombia/vehicle-fines-check-in-bogota-colombia.mdx": {
		fr: {
			title: "Bogotá — Amendes véhicule",
			description: "Consultez les amendes associées à un véhicule à Bogotá par plaque.",
		},
		pt: {
			title: "Bogotá — Multas veiculares",
			description: "Consulte multas associadas a um veículo em Bogotá por placa.",
		},
	},
	"vehicle-validation/colombia/vehicle-s-soat-and-rtm-by-plate-and-identification-document.mdx": {
		fr: {
			title: "RUNT — SOAT et RTM par plaque",
			description:
				"Vérifiez le SOAT et la révision técnico-mécanica (RTM) d'un véhicule colombien en temps réel.",
		},
		pt: {
			title: "RUNT — SOAT e RTM por placa",
			description:
				"Verifique SOAT e revisão técnico-mecânica (RTM) de veículos colombianos em tempo real.",
		},
	},
	"vehicle-validation/colombia/vehicle-values-by-code-fasecolda.mdx": {
		fr: {
			title: "Fasecolda — Valeurs par code",
			description: "Valeurs et fiche technique véhicule Fasecolda par code.",
		},
		pt: {
			title: "Fasecolda — Valores por código",
			description: "Valores e ficha técnica do veículo Fasecolda por código.",
		},
	},
	"vehicle-validation/colombia/vehicle-values-by-plate-fasecolda.mdx": {
		fr: {
			title: "Fasecolda — Valeurs par plaque",
			description: "Valeurs commerciales et données véhicule Fasecolda par plaque.",
		},
		pt: {
			title: "Fasecolda — Valores por placa",
			description: "Valores comerciais e dados do veículo Fasecolda por placa.",
		},
	},
	"certificates/colombia-ministerio-trabajo-certificados-v3.mdx": {
		fr: {
			title: "Colombie — Certificats Ministère du Travail (v3)",
			description:
				"Certificats du Ministère du Travail colombien, y compris formation en hauteur (*curso de alturas*), via GET v3.",
		},
		pt: {
			title: "Colômbia — Certificados Ministério do Trabalho (v3)",
			description:
				"Certificados do Ministério do Trabalho colombiano, incluindo curso de alturas, via GET v3.",
		},
	},
	"background-check/colombia/verify-police-compliance-with-corrective-measures.mdx": {
		fr: {
			title: "Colombie — Conformité aux mesures correctives (RNMC)",
			description:
				"Vérifiez les mesures correctives en cours auprès de la police nationale (RNMC).",
		},
		pt: {
			title: "Colômbia — Conformidade com medidas corretivas (RNMC)",
			description:
				"Verifique medidas corretivas pendentes junto à polícia nacional (RNMC).",
		},
	},
};

const LOCALE_REPLACEMENTS = {
	fr: [
		[/### Endpoint/g, "### Point d'accès"],
		[/### Service URL/g, "### Point d'accès"],
		[/### Headers/g, "### En-têtes"],
		[/### Parameters/g, "### Paramètres"],
		[/### Request/g, "### Requête"],
		[/### Response/g, "### Réponse"],
		[/### Notes/g, "### Notes"],
		[/### Implementation/g, "### Implémentation"],
		[/\*\*Headers\*\*/g, "**En-têtes**"],
		[/\*\*Query Parameters\*\*/g, "**Paramètres de requête**"],
		[/\| Name \|/g, "| Nom |"],
		[/\| Value \|/g, "| Valeur |"],
		[/\| name \|/g, "| nom |"],
		[/\| type \|/g, "| type |"],
		[/\| required \|/g, "| requis |"],
		[/\| description \|/g, "| description |"],
		[/\| Name          \| Value              \|/g, "| Nom            | Valeur              |"],
		[/\| Name             \| Type   \| Required \| Description/g, "| Nom              | Type   | Requis | Description"],
		[/\| Name           \| Type    \| Required \| Description/g, "| Nom            | Type    | Requis | Description"],
		[/\| Name \| Type \| Required \| Description/g, "| Nom | Type | Requis | Description"],
		[/\| Name \| Type \| Required\? \| Description \| Example/g, "| Nom | Type | Requis ? | Description | Exemple"],
		[/\| Required\?/g, "| Requis ?"],
		[/\| Example/g, "| Exemple"],
		[/\| Type \|/g, "| Type |"],
		[/\| Required \|/g, "| Requis |"],
		[/\| Description \|/g, "| Description |"],
		[/\| Yes      \|/g, "| Oui      |"],
		[/\| yes      \|/g, "| oui      |"],
		[/\| Yes \|/g, "| Oui |"],
		[/\| yes \|/g, "| oui |"],
		[/Document type\. Allowed values/g, "Type de document. Valeurs autorisées"],
		[/Document Type\. Allowed values/g, "Type de document. Valeurs autorisées"],
		[/Document number of the owner of the vehicle, without spaces or periods\./g, "Numéro de document du propriétaire du véhicule, sans espaces ni points."],
		[/Document number of the person to consult, without spaces or points\./g, "Numéro de document de la personne à interroger, sans espaces ni points."],
		[/Driver's document number, without spaces or periods\./g, "Numéro de document du conducteur, sans espaces ni points."],
		[/Document number to be consulted, without spaces or dots\./g, "Numéro de document à consulter, sans espaces ni points."],
		[/Vehicle plate to consult\./g, "Plaque du véhicule à consulter."],
		[/Plate to consult, without spaces or periods\./g, "Plaque à consulter, sans espaces ni points."],
		[/Plate to consult without spaces or periods\./g, "Plaque à consulter, sans espaces ni points."],
		[/License plate to be queried, without spaces or periods\./g, "Plaque à interroger, sans espaces ni points."],
		[/Plate of the vehicle to consult, without spaces or periods\./g, "Plaque du véhicule à consulter, sans espaces ni points."],
		[/Control card number to consult\./g, "Numéro de carte de contrôle à consulter."],
		[/Expedition date of the document\. Valid format: DD\/MM\/YYYY\./g, "Date de délivrance du document. Format valide : JJ/MM/AAAA."],
		[/Document type\. Valid parameters: CC, CE\./g, "Type de document. Valeurs autorisées : CC, CE."],
		[/Specific code that Fasecolda has to identify vehicles and their characteristics\./g, "Code Fasecolda identifiant le véhicule et ses caractéristiques."],
		["One of **`CC`**, **`CE`**, **`PPT`**, **`PA`**.", "L'une de **`CC`**, **`CE`**, **`PPT`**, **`PA`**."],
		[/Document number \*\*without\*\* spaces or punctuation\./g, "Numéro de document **sans** espaces ni ponctuation."],
		[/This service returns taxi driver and operation card details for a Bogotá taxi by providing the control card number\./g, "Ce service renvoie les informations du conducteur de taxi et de la carte d'exploitation à Bogotá à partir du numéro de carte de contrôle."],
		[/This service allows you to check fines associated with a vehicle in Bogotá, Colombia, using its license plate number\. The response provides detailed information including fine type, status, number, dates, and payment details\./g, "Ce service permet de consulter les amendes associées à un véhicule à Bogotá (Colombie) par numéro de plaque. La réponse inclut le type d'amende, le statut, le numéro, les dates et les détails de paiement."],
		[/The Fasecolda Vehicle Value Inquiry service provides comprehensive information about vehicles registered in Colombia\. You can access detailed data including vehicle class, brand, model, year, estimated value, load capacity, fuel type, and other key attributes\./g, "Le service Fasecolda de consultation des valeurs fournit des informations détaillées sur les véhicules immatriculés en Colombie : classe, marque, modèle, année, valeur estimée, charge, carburant et autres attributs."],
		[/The Traffic Tickets and Fines Service enables users to access detailed information about traffic tickets and fines associated with a specific document number in Colombia\./g, "Ce service permet d'accéder aux contraventions et amendes routières associées à un numéro de document en Colombie."],
		[/This Service allows users to obtain detailed information about traffic fines and citations associated with a specific vehicle license plate number in Colombia\./g, "Ce service permet d'obtenir les amendes et contraventions associées à une plaque d'immatriculation en Colombie."],
		[/This service allows you to retrieve training records registered in the SISCONMP \(Control and Monitoring System for Personnel\) in Colombia\./g, "Ce service permet de récupérer les formations enregistrées dans le SISCONMP (système de contrôle du personnel transportant des matières dangereuses) en Colombie."],
		[/Fine status "vigente" indicates the fine is currently active and requires payment\./g, 'Le statut « vigente » indique que l\'amende est active et doit être payée.'],
		[/The `total` field includes the original fine amount plus any accumulated interest\./g, "Le champ `total` inclut le montant initial plus les intérêts accumulés."],
		[/Use the `number` field to reference specific fines for payment or appeals\./g, "Utilisez le champ `number` pour référencer une amende lors du paiement ou d'un recours."],
		[/Fasecolda is Colombia's official vehicle valuation system\./g, "Fasecolda est le système officiel de valorisation des véhicules en Colombie."],
		[/Values are provided in Colombian Pesos \(COP\)\./g, "Les montants sont en pesos colombiens (COP)."],
		[/`estado: "USADO"` indicates used vehicle values\./g, '**`estado: "USADO"`** : valeurs pour véhicule d\'occasion.'],
		[/This comprehensive service provides all SIMIT data for a person including fines, courses, and payment agreements\./g, "Service complet SIMIT : amendes, cours et accords de paiement pour une personne."],
		[/This comprehensive service provides all SIMIT data for a vehicle including fines, courses, and payment agreements\./g, "Service complet SIMIT : amendes, cours et accords de paiement pour un véhicule."],
		[/SISCONMP is Colombia's Control and Monitoring System for Personnel transporting dangerous goods\./g, "SISCONMP est le système colombien de contrôle du personnel transportant des matières dangereuses."],
		[/# Vehicle Validation by License Plate in RUNT/g, "# Validation véhicule par plaque au RUNT"],
		[/# Driver's License Validation in RUNT/g, "# Validation du permis de conduire au RUNT"],
		[/# Simplified Vehicle Validation by License Plate in RUNT/g, "# Validation véhicule simplifiée par plaque au RUNT"],
		[/# SOAT and RTM Validation in RUNT/g, "# Validation SOAT et RTM au RUNT"],
		[/# Claims Verification - Fasecolda/g, "# Vérification des sinistres — Fasecolda"],
		[/# Vehicle Values by Code - Fasecolda/g, "# Valeurs véhicule par code — Fasecolda"],
		[/# Colombia — Ministry of Labor certificates \(v3\)/g, "# Colombie — Certificats Ministère du Travail (v3)"],
		[/# Verify Police Compliance with Corrective Measures/g, "# Vérifier la conformité aux mesures correctives (Police — RNMC)"],
		[/## Verify Police Compliance with Corrective Measures/g, "## Référence de l'API"],
		[/## What information does the API return\?/g, "## Que renvoie l'API ?"],
		[/## API Reference/g, "## Référence API"],
		[/## What does this API validate\?/g, "## Que valide cette API ?"],
		[/## Business Use Cases/g, "## Cas d'usage"],
		[/## Compliance & Data Quality/g, "## Conformité et qualité des données"],
		[/## About Verifik/g, "## À propos de Verifik"],
		[/## Common Use Cases/g, "## Cas d'usage courants"],
		[/## Official Sources & Reliability/g, "## Sources officielles et fiabilité"],
		[/## Key Benefits/g, "## Avantages clés"],
		[/## Compliance & Security/g, "## Conformité et sécurité"],
		[/## Features/g, "## Fonctionnalités"],
		[/## Use cases/g, "## Cas d'usage"],
		[/## What this API returns/g, "## Ce que renvoie l'API"],
		[/articleSection: "API Documentation"/g, 'articleSection: "Documentation API"'],
		[/Authorization: 'jwt <tu_token>'/g, "Authorization: 'Bearer <votre_token>'"],
		[/Authorization: "jwt <tu_token>"/g, 'Authorization: "Bearer <votre_token>"'],
		[/The Police RNMC service allows you to verify whether an individual has any pending corrective measures\./g, "Le service RNMC de la police permet de vérifier si une personne fait l'objet de mesures correctives en attente."],
		[/This endpoint returns \*\*Ministry of Labor\*\* certificate information/g, "Ce point d'accès renvoie les certificats du **Ministère du Travail**"],
		[/GET with \*\*query parameters\*\* only for this route/g, "**GET** avec **paramètres de requête** uniquement"],
	],
	pt: [
		[/### Endpoint/g, "### Ponto de acesso"],
		[/### Service URL/g, "### Ponto de acesso"],
		[/### Headers/g, "### Cabeçalhos"],
		[/### Parameters/g, "### Parâmetros"],
		[/### Request/g, "### Requisição"],
		[/### Response/g, "### Resposta"],
		[/### Notes/g, "### Notas"],
		[/### Implementation/g, "### Implementação"],
		[/\*\*Headers\*\*/g, "**Cabeçalhos**"],
		[/\*\*Query Parameters\*\*/g, "**Parâmetros de consulta**"],
		[/\| Name \|/g, "| Nome |"],
		[/\| Value \|/g, "| Valor |"],
		[/\| name \|/g, "| nome |"],
		[/\| type \|/g, "| tipo |"],
		[/\| required \|/g, "| obrigatório |"],
		[/\| description \|/g, "| descrição |"],
		[/\| Name          \| Value              \|/g, "| Nome          | Valor              |"],
		[/\| Name             \| Type   \| Required \| Description/g, "| Nome             | Tipo   | Obrigatório | Descrição"],
		[/\| Name           \| Type    \| Required \| Description/g, "| Nome           | Tipo    | Obrigatório | Descrição"],
		[/\| Name \| Type \| Required \| Description/g, "| Nome | Tipo | Obrigatório | Descrição"],
		[/\| Name \| Type \| Required\? \| Description \| Example/g, "| Nome | Tipo | Obrigatório? | Descrição | Exemplo"],
		[/\| Required\?/g, "| Obrigatório?"],
		[/\| Example/g, "| Exemplo"],
		[/\| Type \|/g, "| Tipo |"],
		[/\| Required \|/g, "| Obrigatório |"],
		[/\| Description \|/g, "| Descrição |"],
		[/\| Yes      \|/g, "| Sim      |"],
		[/\| yes      \|/g, "| sim      |"],
		[/\| Yes \|/g, "| Sim |"],
		[/\| yes \|/g, "| sim |"],
		[/Document type\. Allowed values/g, "Tipo de documento. Valores permitidos"],
		[/Document Type\. Allowed values/g, "Tipo de documento. Valores permitidos"],
		[/Document number of the owner of the vehicle, without spaces or periods\./g, "Número do documento do proprietário do veículo, sem espaços ou pontos."],
		[/Document number of the person to consult, without spaces or points\./g, "Número do documento da pessoa consultada, sem espaços ou pontos."],
		[/Driver's document number, without spaces or periods\./g, "Número do documento do motorista, sem espaços ou pontos."],
		[/Document number to be consulted, without spaces or dots\./g, "Número do documento a consultar, sem espaços ou pontos."],
		[/Vehicle plate to consult\./g, "Placa do veículo a consultar."],
		[/Plate to consult, without spaces or periods\./g, "Placa a consultar, sem espaços ou pontos."],
		[/Plate to consult without spaces or periods\./g, "Placa a consultar, sem espaços ou pontos."],
		[/License plate to be queried, without spaces or periods\./g, "Placa a consultar, sem espaços ou pontos."],
		[/Plate of the vehicle to consult, without spaces or periods\./g, "Placa do veículo a consultar, sem espaços ou pontos."],
		[/Control card number to consult\./g, "Número do cartão de controle a consultar."],
		[/Expedition date of the document\. Valid format: DD\/MM\/YYYY\./g, "Data de expedição do documento. Formato válido: DD/MM/AAAA."],
		[/Document type\. Valid parameters: CC, CE\./g, "Tipo de documento. Valores permitidos: CC, CE."],
		[/Specific code that Fasecolda has to identify vehicles and their characteristics\./g, "Código Fasecolda que identifica o veículo e suas características."],
		["One of **`CC`**, **`CE`**, **`PPT`**, **`PA`**.", "Um de **`CC`**, **`CE`**, **`PPT`**, **`PA`**."],
		[/Document number \*\*without\*\* spaces or punctuation\./g, "Número do documento **sem** espaços ou pontuação."],
		[/This service returns taxi driver and operation card details for a Bogotá taxi by providing the control card number\./g, "Este serviço retorna dados do motorista de táxi e da carta de operação em Bogotá pelo número do cartão de controle."],
		[/This service allows you to check fines associated with a vehicle in Bogotá, Colombia, using its license plate number\. The response provides detailed information including fine type, status, number, dates, and payment details\./g, "Este serviço permite consultar multas associadas a um veículo em Bogotá (Colômbia) pela placa. A resposta inclui tipo, status, número, datas e detalhes de pagamento."],
		[/The Fasecolda Vehicle Value Inquiry service provides comprehensive information about vehicles registered in Colombia\. You can access detailed data including vehicle class, brand, model, year, estimated value, load capacity, fuel type, and other key attributes\./g, "O serviço Fasecolda de valores fornece informações detalhadas sobre veículos registrados na Colômbia: classe, marca, modelo, ano, valor estimado, carga, combustível e outros atributos."],
		[/The Traffic Tickets and Fines Service enables users to access detailed information about traffic tickets and fines associated with a specific document number in Colombia\./g, "Este serviço permite acessar multas e infrações associadas a um número de documento na Colômbia."],
		[/This Service allows users to obtain detailed information about traffic fines and citations associated with a specific vehicle license plate number in Colombia\./g, "Este serviço permite obter multas e infrações associadas a uma placa na Colômbia."],
		[/This service allows you to retrieve training records registered in the SISCONMP \(Control and Monitoring System for Personnel\) in Colombia\./g, "Este serviço recupera treinamentos registrados no SISCONMP (sistema de controle de pessoal que transporta carga perigosa) na Colômbia."],
		[/Fine status "vigente" indicates the fine is currently active and requires payment\./g, 'O status "vigente" indica que a multa está ativa e exige pagamento.'],
		[/The `total` field includes the original fine amount plus any accumulated interest\./g, "O campo `total` inclui o valor original mais juros acumulados."],
		[/Use the `number` field to reference specific fines for payment or appeals\./g, "Use o campo `number` para referenciar multas no pagamento ou recurso."],
		[/Fasecolda is Colombia's official vehicle valuation system\./g, "Fasecolda é o sistema oficial de valoração de veículos na Colômbia."],
		[/Values are provided in Colombian Pesos \(COP\)\./g, "Os valores são em pesos colombianos (COP)."],
		[/`estado: "USADO"` indicates used vehicle values\./g, '**`estado: "USADO"`**: valores para veículo usado.'],
		[/This comprehensive service provides all SIMIT data for a person including fines, courses, and payment agreements\./g, "Serviço SIMIT completo: multas, cursos e acordos de pagamento por pessoa."],
		[/This comprehensive service provides all SIMIT data for a vehicle including fines, courses, and payment agreements\./g, "Serviço SIMIT completo: multas, cursos e acordos de pagamento por veículo."],
		[/SISCONMP is Colombia's Control and Monitoring System for Personnel transporting dangerous goods\./g, "SISCONMP é o sistema colombiano de controle de pessoal que transporta carga perigosa."],
		[/# Vehicle Validation by License Plate in RUNT/g, "# Validação de veículo por placa no RUNT"],
		[/# Driver's License Validation in RUNT/g, "# Validação de carteira de motorista no RUNT"],
		[/# Simplified Vehicle Validation by License Plate in RUNT/g, "# Validação simplificada de veículo por placa no RUNT"],
		[/# SOAT and RTM Validation in RUNT/g, "# Validação SOAT e RTM no RUNT"],
		[/# Claims Verification - Fasecolda/g, "# Verificação de sinistros — Fasecolda"],
		[/# Vehicle Values by Code - Fasecolda/g, "# Valores do veículo por código — Fasecolda"],
		[/# Colombia — Ministry of Labor certificates \(v3\)/g, "# Colômbia — Certificados Ministério do Trabalho (v3)"],
		[/# Verify Police Compliance with Corrective Measures/g, "# Verificar conformidade com medidas corretivas (Polícia — RNMC)"],
		[/## Verify Police Compliance with Corrective Measures/g, "## Referência da API"],
		[/## What information does the API return\?/g, "## O que a API retorna?"],
		[/## API Reference/g, "## Referência da API"],
		[/## What does this API validate\?/g, "## O que esta API valida?"],
		[/## Business Use Cases/g, "## Casos de uso"],
		[/## Compliance & Data Quality/g, "## Conformidade e qualidade dos dados"],
		[/## About Verifik/g, "## Sobre a Verifik"],
		[/## Common Use Cases/g, "## Casos de uso comuns"],
		[/## Official Sources & Reliability/g, "## Fontes oficiais e confiabilidade"],
		[/## Key Benefits/g, "## Benefícios principais"],
		[/## Compliance & Security/g, "## Conformidade e segurança"],
		[/## Features/g, "## Recursos"],
		[/## Use cases/g, "## Casos de uso"],
		[/## What this API returns/g, "## O que esta API retorna"],
		[/articleSection: "API Documentation"/g, 'articleSection: "Documentação da API"'],
		[/Authorization: 'jwt <tu_token>'/g, "Authorization: 'Bearer <seu_token>'"],
		[/Authorization: "jwt <tu_token>"/g, 'Authorization: "Bearer <seu_token>"'],
		[/The Police RNMC service allows you to verify whether an individual has any pending corrective measures\./g, "O serviço RNMC da polícia permite verificar se uma pessoa possui medidas corretivas pendentes."],
		[/This endpoint returns \*\*Ministry of Labor\*\* certificate information/g, "Este ponto de acesso retorna certificados do **Ministério do Trabalho**"],
		[/GET with \*\*query parameters\*\* only for this route/g, "**GET** apenas com **parâmetros de consulta** nesta rota"],
	],
};

const patchFrontmatter = (content, rel, locale) => {
	const meta = META[rel]?.[locale];
	if (!meta) return content;
	let out = content;
	if (meta.title) {
		out = out.replace(/^title: .+$/m, `title: ${meta.title}`);
	}
	if (meta.description) {
		const quoted = meta.description.includes(":") ? `"${meta.description}"` : meta.description;
		out = out.replace(/^description: .+$/m, `description: ${quoted}`);
	}
	return out;
};

const applyReplacements = (content, locale) => {
	let out = content;
	for (const [pattern, replacement] of LOCALE_REPLACEMENTS[locale]) {
		out =
			typeof pattern === "string"
				? out.split(pattern).join(replacement)
				: out.replace(pattern, replacement);
	}
	return out;
};

const created = { fr: [], pt: [] };

for (const locale of ["fr", "pt"]) {
	for (const rel of RELATIVE_FILES) {
		const src = path.join(ROOT, "docs", rel);
		const dest = path.join(ROOT, `docs-${locale}`, rel);
		if (fs.existsSync(dest)) continue;
		const en = fs.readFileSync(src, "utf8");
		let translated = applyReplacements(en, locale);
		translated = patchFrontmatter(translated, rel, locale);
		fs.mkdirSync(path.dirname(dest), { recursive: true });
		fs.writeFileSync(dest, translated);
		created[locale].push(rel);
	}
}

console.log(JSON.stringify(created, null, 2));
