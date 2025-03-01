export interface NFT { chain: string; contract: string; tokenId: string; name?: string; }

export interface PluginResponse { message: string; agent?: NFT; }

