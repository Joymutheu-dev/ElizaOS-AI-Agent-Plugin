export interface NFT { chain: string; contract: string; tokenId: string; name?: string; }

// Mock function to fetch NFTs (replace with actual API call in production) export async function fetchEligibleNFTs(userId: string): Promise<NFT[]> { // Mock response return [ { chain: "Ethereum", contract: "0x123456", tokenId: "1" }, { chain: "Polygon", contract: "0xabcdef", tokenId: "42" } ]; }

