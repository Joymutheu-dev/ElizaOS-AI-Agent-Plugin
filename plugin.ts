import { ElizaPlugin } from "@elizaos/core";

interface NFT { chain: string; contract: string; tokenId: string; name?: string; }

export const ElizaAIPlugin: ElizaPlugin = { name: "AI Agent Creator", description: "Create an AI agent based on NFT ownership.", async execute(context) { const userId = context.user.id;

// Mock API response for eligible NFTs
const mockNFTs: NFT[] = [
  { chain: "Ethereum", contract: "0x123456", tokenId: "1" },
  { chain: "Polygon", contract: "0xabcdef", tokenId: "42" }
];

if (mockNFTs.length === 0) {
  return {
    message: "You don't have an eligible NFT. Request one here: https://nftcollection.com/request"
  };
}

// Ask user to select an NFT
const selectedNFT = await context.ui.select("Choose an NFT to create an AI agent:", mockNFTs.map(nft => `${nft.chain} - ${nft.tokenId}`));
const chosenNFT = mockNFTs.find(nft => `${nft.chain} - ${nft.tokenId}` === selectedNFT);

if (!chosenNFT) {
  return { message: "Invalid selection." };
}

// Ask for a name
const agentName = await context.ui.input("Enter a name for your AI agent:");
chosenNFT.name = agentName;

return {
  message: "AI Agent created successfully!",
  agent: chosenNFT
};

} };

