import {
  ConnectWallet,
  Web3Button,
  useAddress,
  useContract,
  useNFT,
  useOwnedNFTs,
} from "@thirdweb-dev/react";
import "./styles/Home.css";
import { editionDropAddress, editionDropTokenId } from "../const/yourDetails";

export default function Home() {
  const address = useAddress();

  const { contract: editionDropContract } = useContract(editionDropAddress);
  const { data: nft, isLoading: isNftLoading } = useNFT(
    editionDropContract,
    editionDropTokenId
  );
  const { data: ownedNfts, refetch: refetchOwnedNfts } = useOwnedNFTs(
    editionDropContract,
    address
  );

  return (
    <div className="container">
      <main className="main">
        <h1 className="title">
          Welcome to <a href="https://portal.thirdweb.com/wallet/smart-wallet">Smart Wallet</a> w/ <a href="https://thirdweb.com/">Thirdweb SDK</a>!
        </h1>

        <p className="description">
        A Smart Wallet is a wallet that is controlled by a smart contract following the <a href="https://eips.ethereum.org/EIPS/eip-4337">ERC-4337 specification</a>.
       
        <p>Claim your test access pass by creating an account!</p>
        <p>⛓ Sepolia Testnet ⛓</p>
        </p>

        <div className="connect">
          <ConnectWallet
            dropdownPosition={{
              align: "center",
              side: "bottom",
            }}
            btnTitle="Login"
          />
        </div>

        {isNftLoading ? (
          "Loading..."
        ) : (
          <div className="card">
            <img
              className="nftImage"
              src={nft.metadata.image}
              alt={nft.metadata.description}
            />
            {address ? (
              <>
                <p>You own {ownedNfts?.[0]?.quantityOwned || "0"}</p>
                <Web3Button
                  contractAddress={editionDropAddress}
                  action={(contract) =>
                    contract.erc1155.claim(editionDropTokenId, 1)
                  }
                  onSuccess={async () => {
                    await refetchOwnedNfts();
                    alert("Claim successful!");
                  }}
                  style={{ width: "100%", marginTop: "10px" }}
                >
                  Claim!
                </Web3Button>
              </>
            ) : (
              <p><center>🔓 Login to claim!</center></p>
            )}
          </div>
        )}

        <p><a href="https://warlocks.netlify.app">💀 Warlocks</a></p>
        </main>
        
    </div>
    
  );
}
