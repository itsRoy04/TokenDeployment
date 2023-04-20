import { useWalletContext } from "@/context/walletContext";
import { Button } from "@material-tailwind/react";

export default function ConnectWallet() {
  const { handleWalletConnect, walletAddress,disconnect } = useWalletContext();
  return (
    <div className="flex flex-col shadow-sm gap-4">
      {!walletAddress ? (
        <Button
          size="xl"
          color="white"
          className="flex  gap-3"
          onClick={handleWalletConnect}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/180px-MetaMask_Fox.svg.png"
            alt="metamask"
            className="h-6 w-6"
          />
          Connect Wallet
        </Button>
      ) : (
        <Button
          size="xl"
          color="white"
          className="flex gap-3"
          onClick={disconnect}
        >
          {walletAddress.substr(1, 4) +"..." + walletAddress.substr(38, 4) } Disconnect Wallet
        </Button>
      )}
      {/* <Button size="xl" color="white" className="flex  gap-3" onClick={handleWalletConnect} >
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/180px-MetaMask_Fox.svg.png" alt="metamask" className="h-6 w-6" />
        Connect Wallet
      </Button> */}
    </div>
  );
}
0x583fd96b91E5B70AFDD124C7497AE6B0cd09F773d