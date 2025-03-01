export async function selectNFT(nfts: { chain: string; tokenId: string }[]): Promise<string> { return new Promise((resolve) => { console.log("Choose an NFT to create an AI agent:"); nfts.forEach((nft, index) => { console.log(${index + 1}. ${nft.chain} - Token ID: ${nft.tokenId}); });

const stdin = process.stdin;
stdin.resume();
stdin.once("data", (data) => {
  const choice = parseInt(data.toString().trim(), 10) - 1;
  if (choice >= 0 && choice < nfts.length) {
    resolve(`${nfts[choice].chain} - ${nfts[choice].tokenId}`);
  } else {
    resolve("Invalid selection");
  }
});

}); }

export async function getAgentName(): Promise<string> { return new Promise((resolve) => { console.log("Enter a name for your AI agent:");

const stdin = process.stdin;
stdin.resume();
stdin.once("data", (data) => {
  resolve(data.toString().trim());
});

}); }

