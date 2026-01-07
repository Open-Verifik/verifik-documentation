const fs = require("fs");
const path = require("path");

// Create a proper favicon.ico file using Verifik brand colors
// Based on the SVG: fill="#2642FF" (blue color)

const createVerifikFavicon = () => {
	// Verifik brand color: #2642FF
	// Convert to RGB: R=38, G=66, B=255
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

		// Create a 32x32 favicon with Verifik brand styling
		...Array(32 * 32 * 4)
			.fill(0)
			.map((_, i) => {
				const pixel = i / 4;
				const x = pixel % 32;
				const y = Math.floor(pixel / 32);

				// Create a stylized "V" shape or circular logo
				const centerX = 16;
				const centerY = 16;
				const radius = 14;

				// Create a circular logo with some internal design
				const distance = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2);

				if (distance <= radius) {
					// Create a simple "V" pattern inside the circle
					const isInV =
						y >= 8 && y <= 24 && x >= 8 && x <= 24 && (x - centerX) * (x - centerX) + (y - centerY) * (y - centerY) <= radius * radius;

					if (isInV) {
						// Create a V-like pattern
						const vLeft = x >= 10 && x <= 14 && y >= 10 && y <= 22;
						const vRight = x >= 18 && x <= 22 && y >= 10 && y <= 22;
						const vBottom = x >= 12 && x <= 20 && y >= 20 && y <= 22;

						if (vLeft || vRight || vBottom) {
							if (i % 4 === 0) return brandBlue; // Blue
							if (i % 4 === 1) return brandGreen; // Green
							if (i % 4 === 2) return brandRed; // Red
							if (i % 4 === 3) return 0xff; // Alpha
						}
					}
				}
				return 0x00; // Transparent
			}),
	]);

	return faviconData;
};

// Create the favicon.ico file
const faviconData = createVerifikFavicon();
fs.writeFileSync(path.join(__dirname, "static/img/favicon.ico"), faviconData);

console.log("Verifik favicon created successfully!");
console.log("Created: favicon.ico (32x32) with Verifik brand colors");
