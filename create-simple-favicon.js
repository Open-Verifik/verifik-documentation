const fs = require("fs");
const path = require("path");

// Create a more visible and recognizable favicon
// Make it simpler and more distinct

const createSimpleVerifikFavicon = () => {
	// Verifik brand color: #2642FF
	const brandRed = 38;
	const brandGreen = 66;
	const brandBlue = 255;

	const faviconData = Buffer.from([
		// ICO file header
		0x00,
		0x00, // Reserved
		0x01,
		0x00, // Type (1 = ICO)
		0x01,
		0x00, // Number of images

		// Image directory entry
		0x20, // Width (32)
		0x20, // Height (32)
		0x00, // Color palette (0 = no palette)
		0x00, // Reserved
		0x01,
		0x00, // Color planes
		0x20,
		0x00, // Bits per pixel (32)
		0x00,
		0x00,
		0x00,
		0x00, // Image data size (will be filled)
		0x16,
		0x00,
		0x00,
		0x00, // Image data offset

		// Create a simple, bold "V" shape
		...Array(32 * 32 * 4)
			.fill(0)
			.map((_, i) => {
				const pixel = i / 4;
				const x = pixel % 32;
				const y = Math.floor(pixel / 32);

				// Create a bold "V" shape
				const isVShape =
					// Left leg of V
					(x >= 8 && x <= 12 && y >= 6 && y <= 26) ||
					// Right leg of V
					(x >= 20 && x <= 24 && y >= 6 && y <= 26) ||
					// Bottom connection
					(x >= 10 && x <= 22 && y >= 24 && y <= 26) ||
					// Top connection
					(x >= 12 && x <= 20 && y >= 6 && y <= 8);

				if (isVShape) {
					if (i % 4 === 0) return brandBlue; // Blue
					if (i % 4 === 1) return brandGreen; // Green
					if (i % 4 === 2) return brandRed; // Red
					if (i % 4 === 3) return 0xff; // Alpha
				}
				return 0x00; // Transparent
			}),
	]);

	return faviconData;
};

// Create the favicon.ico file
const faviconData = createSimpleVerifikFavicon();
fs.writeFileSync(path.join(__dirname, "static/img/favicon.ico"), faviconData);

console.log("Simple Verifik favicon created successfully!");
console.log("Created: favicon.ico with bold 'V' shape");
