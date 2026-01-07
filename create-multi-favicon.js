const fs = require("fs");
const path = require("path");

// Create multiple favicon sizes for better browser support
// Create both 16x16 and 32x32 versions in a single ICO file

const createMultiSizeFavicon = () => {
	// Verifik brand color: #2642FF
	const brandRed = 38;
	const brandGreen = 66;
	const brandBlue = 255;

	// Create 16x16 version
	const create16x16 = () => {
		return Array(16 * 16 * 4)
			.fill(0)
			.map((_, i) => {
				const pixel = i / 4;
				const x = pixel % 16;
				const y = Math.floor(pixel / 16);

				const centerX = 8;
				const centerY = 8;
				const radius = 6;

				const distance = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2);

				if (distance <= radius) {
					// Simple circular logo
					if (i % 4 === 0) return brandBlue; // Blue
					if (i % 4 === 1) return brandGreen; // Green
					if (i % 4 === 2) return brandRed; // Red
					if (i % 4 === 3) return 0xff; // Alpha
				}
				return 0x00; // Transparent
			});
	};

	// Create 32x32 version
	const create32x32 = () => {
		return Array(32 * 32 * 4)
			.fill(0)
			.map((_, i) => {
				const pixel = i / 4;
				const x = pixel % 32;
				const y = Math.floor(pixel / 32);

				const centerX = 16;
				const centerY = 16;
				const radius = 14;

				const distance = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2);

				if (distance <= radius) {
					// Create a stylized logo
					if (i % 4 === 0) return brandBlue; // Blue
					if (i % 4 === 1) return brandGreen; // Green
					if (i % 4 === 2) return brandRed; // Red
					if (i % 4 === 3) return 0xff; // Alpha
				}
				return 0x00; // Transparent
			});
	};

	const data16x16 = create16x16();
	const data32x32 = create32x32();

	// Calculate offsets
	const headerSize = 6; // ICO header
	const dirEntrySize = 16; // Directory entry per image
	const dirSize = headerSize + dirEntrySize * 2; // 2 images
	const offset16x16 = dirSize;
	const offset32x32 = dirSize + data16x16.length;

	// Create ICO file with multiple sizes
	const faviconData = Buffer.from([
		// ICO file header
		0x00,
		0x00, // Reserved
		0x01,
		0x00, // Type (1 = ICO)
		0x02,
		0x00, // Number of images (2)

		// Directory entry for 16x16
		0x10, // Width (16)
		0x10, // Height (16)
		0x00, // Color palette (0 = no palette)
		0x00, // Reserved
		0x01,
		0x00, // Color planes
		0x20,
		0x00, // Bits per pixel (32)
		...Buffer.from([data16x16.length & 0xff, (data16x16.length >> 8) & 0xff, (data16x16.length >> 16) & 0xff, (data16x16.length >> 24) & 0xff]), // Image data size
		...Buffer.from([offset16x16 & 0xff, (offset16x16 >> 8) & 0xff, (offset16x16 >> 16) & 0xff, (offset16x16 >> 24) & 0xff]), // Image data offset

		// Directory entry for 32x32
		0x20, // Width (32)
		0x20, // Height (32)
		0x00, // Color palette (0 = no palette)
		0x00, // Reserved
		0x01,
		0x00, // Color planes
		0x20,
		0x00, // Bits per pixel (32)
		...Buffer.from([data32x32.length & 0xff, (data32x32.length >> 8) & 0xff, (data32x32.length >> 16) & 0xff, (data32x32.length >> 24) & 0xff]), // Image data size
		...Buffer.from([offset32x32 & 0xff, (offset32x32 >> 8) & 0xff, (offset32x32 >> 16) & 0xff, (offset32x32 >> 24) & 0xff]), // Image data offset

		// Image data
		...data16x16,
		...data32x32,
	]);

	return faviconData;
};

// Create the multi-size favicon.ico file
const faviconData = createMultiSizeFavicon();
fs.writeFileSync(path.join(__dirname, "static/img/favicon.ico"), faviconData);

console.log("Multi-size Verifik favicon created successfully!");
console.log("Created: favicon.ico with 16x16 and 32x32 versions");
