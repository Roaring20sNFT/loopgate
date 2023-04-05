import { Unlockable } from "./types";

/*********************************************************
Replace the `unlockables` below with your own content. 
Here are two examples:

1️⃣ Unlock a Submarined file by owning one specific NFT.
{ 
  cid: "<YOUR_CID>", 
  nftId: ["<YOUR_NFT_ID"]
}

2️⃣ Unlock a Submarined file by owning multiple NFTs.
{
  cid: "<YOUR_CID",
  nftId: [
    "<YOUR_FIRST_NFT_ID", "<YOUR_SECOND_NFT_ID", 
  ]
}
*********************************************************/

const unlockables: Unlockable[] = [
  {
    cid: "bafybeigenoc2pygi5eri54rosy3oio6iptwwzetlglnvawbl6lwmf3ziri", // R3020s Pvt. Hamilton
    nftId: [
      "0xa8c46eef48f67be1de7573ae839fe0edd1c49199ca7bdefb64e20eba77ed46b9",
    ], // You need to own 'R3020s Pvt. Hamilton NFT' to unlock this.
  },
];

export { unlockables };
