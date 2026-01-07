# Zelf Documentation

Welcome to the official documentation for **Zelf Name Service (ZNS)** - the world's first commercialized Zero Knowledge Face Proof™ system.

## About Zelf

Zelf Name Service (ZNS) is a revolutionary way of seed phrase (mnemonic key) storage, featuring cutting-edge privacy-preserving non-biometric encryption. This innovative wallet management solution ensures security without storing or exposing biometric data. The end user's face generates a unique, non-biometric binary representation called **ZelfProof**, which facilitates highly secure encryption and decryption.

### Key Features

- **🔒 No Biometric Storage**: Biometric data is never stored - only used to generate encrypted, randomized, privacy-preserving binary representations
- **👁️ Liveness Detection**: Verifies end user presence, preventing spoofing attempts
- **📱 Offline Capability**: Works both online and offline, requiring no internet connection
- **💾 Easy Storage**: Store private information in QR codes containing ZelfProof, with optional IPFS backup
- **🔄 Revocable**: ZelfProofs can be revoked and regenerated for enhanced security
- **🌐 Distributed**: Supports fully offline verification for decentralized systems

## Documentation Structure

This documentation covers:

### Getting Started
- How Zelf works
- Lite Paper
- Zelf Proofs vs Others
- Privacy-preserving features
- Use cases
- Downloads

### Zelf Name Service (ZNS)
- **Offline Version**: Decryption processes
- **Online Version**: Public key retrieval, session creation, name leasing, preview, and decryption
- **Arweave Integration**: Permanent storage and ARNS (Arweave Name Service)
- **Figma Design**: Planning and design resources

### Functions
- Authentication
- Create ZelfProof
- Create QR ZelfProof
- Decrypt ZelfProof
- Preview ZelfProof

### Integrations
- Avalanche blockchain integration

### Legal & Compliance
- Team members
- Terms of use
- Privacy policy

### Airdrop & Roadmap
- Airdrop rules and pricing
- Quarterly roadmap (Q1-Q4 2025)

## Technology Stack

This documentation website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator that provides:

- **Fast Performance**: Static site generation for optimal loading speeds
- **SEO Optimized**: Built-in SEO features for better search visibility
- **Mobile Responsive**: Works seamlessly across all devices
- **Search Functionality**: Built-in search for easy content discovery
- **GitBook-style Design**: Custom styling to replicate the professional GitBook aesthetic

## Development

### Installation

```bash
npm install
```

### Local Development

```bash
npm start
```

This command starts a local development server at `http://localhost:3000`. Most changes are reflected live without having to restart the server.

### Build

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static content hosting service.

## Production Deployment with PM2

For production environments, you can use PM2 to manage the Docusaurus development server as a persistent process.

### Install PM2

```bash
npm install -g pm2
```

### Start with PM2

```bash
pm2 start "npm start" --name "zelf-docs"
```

### PM2 Management Commands

```bash
# View running processes
pm2 list

# Restart the documentation server
pm2 restart zelf-docs

# Stop the documentation server
pm2 stop zelf-docs

# View logs
pm2 logs zelf-docs

# Monitor in real-time
pm2 monit

# Save PM2 configuration
pm2 save

# Setup PM2 to start on system boot
pm2 startup
```

### Alternative: Serve Static Build with PM2

For better performance in production, you can build the static site and serve it with PM2:

```bash
# Build the static site
npm run build

# Install serve globally
npm install -g serve

# Start serving with PM2
pm2 start "serve -s build -l 3000" --name "zelf-docs-static"
```

### Deployment

Using SSH:

```bash
USE_SSH=true npm run deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> npm run deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## Contributing

We welcome contributions to improve this documentation. Please ensure that:

1. Content is accurate and up-to-date
2. Technical explanations are clear and accessible
3. Code examples are tested and functional
4. Documentation follows our established style guide

## Support

For technical support or questions about Zelf:

- **Discord**: [Join our community](https://discord.gg/49JnBAsaq9)
- **Email**: [zns@zelf.world](mailto:zns@zelf.world)
- **Website**: [https://zelf.world](https://zelf.world)

## License

Copyright © 2025 ZELF. All rights reserved.

---

**YOUR FACE IS YOUR KEY** 🔑
