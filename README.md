# ElizaOS AI Agent Plugin

## Overview
The **ElizaOS AI Agent Plugin** enables users to create a new AI agent based on NFT ownership. The plugin fetches eligible NFTs from an internal API (mock JSON in this implementation) and guides the user through the selection and naming process. The final output is a JSON object containing the necessary metadata for agent creation.

## Features
- Fetches eligible NFTs via an internal API (mock implementation included).
- Checks if the user has eligible NFTs.
- Allows the user to select an NFT from the list.
- Prompts the user to enter a name for their AI agent.
- Returns agent details including `chain`, `contract`, `tokenId`, and `name`.

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/joymutheu-dev/elizaos-ai-agent-plugin.git
   ```
2. Navigate to the project directory:
   ```sh
   cd elizaos-ai-agent-plugin
   ```
3. Install dependencies:
   ```sh
   npm install
   ```

## Usage
1. Import the plugin into your ElizaOS setup:
   ```typescript
   import { ElizaAIPlugin } from "./plugin";
   ```
2. Register the plugin in ElizaOS:
   ```typescript
   import { registerPlugin } from "@elizaos/core";
   
   registerPlugin(ElizaAIPlugin);
   ```
3. The plugin will handle the AI agent creation flow based on the user's NFT eligibility.

## API Response Example
If the user has eligible NFTs:
```json
{
  "message": "AI Agent created successfully!",
  "agent": {
    "chain": "Ethereum",
    "contract": "0x123456",
    "tokenId": "1",
    "name": "MyAI"
  }
}
```
If the user lacks an eligible NFT:
```json
{
  "message": "You don't have an eligible NFT. Request one here: https://nftcollection.com/request"
}
```

## Contributing
1. Fork the repository.
2. Create a new branch for your feature/fix.
3. Commit and push your changes.
4. Submit a pull request.


