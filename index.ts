import { ElizaPlugin } from "@elizaos/core"; import { fetchEligibleNFTs, NFT } from "./api"; import { selectNFT, getAgentName } from "./ui";

export const ElizaAIPlugin: ElizaPlugin = { name: "AI Agent Creator", description: "Create an AI agent based on NFT ownership.", async execute(context) { const userId = context.user.id;

// Fetch eligible NFTs
const nfts: NFT[] = await fetchEligibleNFTs(userId);

if (nfts.length === 0) {
  return {
    message: "You don't have an eligible NFT. Request one here: https://nftcollection.com/request"
  };
}

// Ask user to select an NFT
const selectedNFTKey = await selectNFT(nfts);
const chosenNFT = nfts.find(nft => `${nft.chain} - ${nft.tokenId}` === selectedNFTKey);

if (!chosenNFT) {
  return { message: "Invalid selection." };
}

// Ask for a name
const agentName = await getAgentName();
chosenNFT.name = agentName;

return {
  message: "AI Agent created successfully!",
  agent: chosenNFT
};

} };

