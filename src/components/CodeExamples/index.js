import React, { useEffect, useState } from "react";
import CodeBlock from "@theme/CodeBlock";
import { useLanguage } from "@site/src/contexts/CodeLanguageContext";

const CodeExamples = ({ url, method = "GET", headers = {}, body = null, params = {}, query = {}, baseUrl = "https://api.verifik.co/v3" }) => {
	const { selectedLanguage, updateLanguage, isInitialized } = useLanguage();
	const [forceUpdate, setForceUpdate] = useState(0);

	// Force re-render when selectedLanguage changes
	useEffect(() => {
		setForceUpdate((prev) => prev + 1);
	}, [selectedLanguage]);

	// Available languages
	const languages = [
		{ value: "curl", label: "cURL" },
		{ value: "node", label: "Node.js" },
		{ value: "python", label: "Python" },
		{ value: "java", label: "Java" },
		{ value: "csharp", label: "C#" },
	];

	// Handle language change - this will update the global preference
	const handleLanguageChange = (language) => {
		updateLanguage(language);
	};

	// Don't render until context is initialized
	if (!isInitialized) {
		return <div>Loading...</div>;
	}

	// Replace path parameters in URL
	let finalUrl = url;
	Object.keys(params).forEach((key) => {
		finalUrl = finalUrl.replace(`{${key}}`, params[key]);
	});

	// Add query parameters
	const queryString = Object.keys(query)
		.filter((key) => query[key] !== undefined && query[key] !== null)
		.map((key) => `${key}=${encodeURIComponent(query[key])}`)
		.join("&");

	if (queryString) {
		finalUrl += `?${queryString}`;
	}

	const fullUrl = `${baseUrl}${finalUrl}`;

	// Default headers
	const defaultHeaders = {
		"Content-Type": "application/json",
		Authorization: "Bearer <your_jwt_token>",
		...headers,
	};

	// Generate cURL command
	const generateCurl = () => {
		let curl = `curl -X ${method.toUpperCase()} "${fullUrl}"`;

		Object.keys(defaultHeaders).forEach((key) => {
			curl += ` \\\n  -H "${key}: ${defaultHeaders[key]}"`;
		});

		if (body && method !== "GET") {
			const bodyString = typeof body === "string" ? body : JSON.stringify(body, null, 2);
			curl += ` \\\n  -d '${bodyString}'`;
		}

		return curl;
	};

	// Generate Node.js example
	const generateNode = () => {
		const headersString = Object.keys(defaultHeaders)
			.map((key) => `    '${key}': '${defaultHeaders[key]}'`)
			.join(",\n");

		let code = `const response = await fetch('${fullUrl}', {\n`;
		code += `  method: '${method.toUpperCase()}',\n`;
		code += `  headers: {\n${headersString}\n  }`;

		if (body && method !== "GET") {
			const bodyString = typeof body === "string" ? body : JSON.stringify(body, null, 4);
			code += `,\n  body: JSON.stringify(${JSON.stringify(body, null, 2)})`;
		}

		code += `\n});\n\n`;
		code += `const data = await response.json();\n`;
		code += `console.log(data);`;

		return code;
	};

	// Generate Python example
	const generatePython = () => {
		let code = `import requests\nimport json\n\n`;
		code += `url = "${fullUrl}"\n`;
		code += `headers = {\n`;

		Object.keys(defaultHeaders).forEach((key) => {
			code += `    "${key}": "${defaultHeaders[key]}",\n`;
		});

		code += `}\n\n`;

		if (body && method !== "GET") {
			const bodyString = JSON.stringify(body, null, 4);
			code += `payload = ${bodyString}\n\n`;
			code += `response = requests.${method.toLowerCase()}(url, headers=headers, json=payload)\n`;
		} else {
			code += `response = requests.${method.toLowerCase()}(url, headers=headers)\n`;
		}

		code += `\nprint(response.json())`;

		return code;
	};

	// Generate Java example
	const generateJava = () => {
		let code = `import java.net.http.HttpClient;\n`;
		code += `import java.net.http.HttpRequest;\n`;
		code += `import java.net.http.HttpResponse;\n`;
		code += `import java.net.URI;\n`;
		code += `import java.net.http.HttpRequest.BodyPublishers;\n`;
		code += `import java.net.http.HttpRequest.BodyHandlers;\n\n`;

		code += `HttpClient client = HttpClient.newHttpClient();\n\n`;

		if (body && method !== "GET") {
			const bodyString = JSON.stringify(body, null, 4);
			code += `String requestBody = ${JSON.stringify(bodyString)};\n\n`;
		}

		code += `HttpRequest request = HttpRequest.newBuilder()\n`;
		code += `    .uri(URI.create("${fullUrl}"))\n`;
		code += `    .${method.toLowerCase()}(`;

		if (body && method !== "GET") {
			code += `BodyPublishers.ofString(requestBody)`;
		} else {
			code += `BodyPublishers.noBody()`;
		}

		code += `)\n`;

		Object.keys(defaultHeaders).forEach((key) => {
			code += `    .header("${key}", "${defaultHeaders[key]}")\n`;
		});

		code += `    .build();\n\n`;

		code += `HttpResponse<String> response = client.send(request, BodyHandlers.ofString());\n`;
		code += `System.out.println(response.body());`;

		return code;
	};

	// Generate C# example
	const generateCSharp = () => {
		let code = `using System;\n`;
		code += `using System.Net.Http;\n`;
		code += `using System.Text;\n`;
		code += `using System.Threading.Tasks;\n`;
		code += `using Newtonsoft.Json;\n\n`;

		code += `var client = new HttpClient();\n`;
		code += `client.DefaultRequestHeaders.Add("Authorization", "Bearer <your_jwt_token>");\n\n`;

		if (body && method !== "GET") {
			const bodyString = JSON.stringify(body, null, 4);
			code += `var json = JsonConvert.SerializeObject(${JSON.stringify(body, null, 2)});\n`;
			code += `var content = new StringContent(json, Encoding.UTF8, "application/json");\n\n`;
		}

		code += `var response = await client.${method.toLowerCase()}Async("${fullUrl}"`;

		if (body && method !== "GET") {
			code += `, content`;
		}

		code += `);\n`;
		code += `var responseContent = await response.Content.ReadAsStringAsync();\n`;
		code += `Console.WriteLine(responseContent);`;

		return code;
	};

	// Get the current code based on selected language
	const getCurrentCode = () => {
		switch (selectedLanguage) {
			case "curl":
				return generateCurl();
			case "node":
				return generateNode();
			case "python":
				return generatePython();
			case "java":
				return generateJava();
			case "csharp":
				return generateCSharp();
			default:
				return generateCurl();
		}
	};

	const getCurrentLanguage = () => {
		switch (selectedLanguage) {
			case "curl":
				return "bash";
			case "node":
				return "javascript";
			case "python":
				return "python";
			case "java":
				return "java";
			case "csharp":
				return "csharp";
			default:
				return "bash";
		}
	};

	return (
		<div className="code-examples-container">
			{/* Custom Tab Headers */}
			<div className="code-examples-tabs-container">
				{languages.map((lang) => (
					<button
						key={lang.value}
						onClick={() => handleLanguageChange(lang.value)}
						className={`code-examples-tab-button ${selectedLanguage === lang.value ? "active" : ""}`}
					>
						{lang.label}
					</button>
				))}
			</div>

			{/* Code Content */}
			<CodeBlock language={getCurrentLanguage()}>{getCurrentCode()}</CodeBlock>
		</div>
	);
};

export default CodeExamples;
