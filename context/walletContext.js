import React, { createContext, useContext, useState } from "react";
import Web3 from "web3";
import Web3Modal from "web3modal";
import { toast } from "react-toastify";
import WalletConnectProvider from "@walletconnect/web3-provider";


const WalletContext = createContext();

export const WalletContextWrapper = ({ children }) => {
  const [help, setHelp] = useState("hi");
  const [walletAddress, setWalletAddress] = useState("");
  const [web3, setWeb3] = useState({});


  const defaultChainId = 1353;
  const defaultChainId_hex = "0x549";


  const providerOptions = {
    // binancechainwallet: {
    //   package: true,
    // },
    "custom-metamask": {
      display: {
        logo: "https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg",
        name: "Install MetaMask",
        description: "Connect using browser wallet",
      },
      package: {},
      connector: async () => {
        window.open("https://metamask.io");
        throw new Error("MetaMask not installed");
      },
    },
    walletconnect: {
      package: WalletConnectProvider, // required
      options: {
        rpc: {
          1: "https://mainnet.infura.io/v3/",
          1214: "http://95.217.153.149:22000",
        },
      },
    },
    // "custom-walletlink": {
    //   display: {
    //     logo: "https://play-lh.googleusercontent.com/PjoJoG27miSglVBXoXrxBSLveV6e3EeBPpNY55aiUUBM9Q1RCETKCOqdOkX2ZydqVf0",
    //     name: "Coinbase",
    //     description: "Connect to Coinbase Wallet (not Coinbase App)",
    //   },
    //   options: {
    //     appName: "Coinbase", // Your app name
    //     // networkUrl: `https://mainnet.infura.io/v3/${INFURA_ID}`,
    //     // chainId: 1,
    //     rpc: {
    //       1: "https://mainnet.infura.io/v3/",
    //       97: "https://data-seed-prebsc-1-s1.binance.org:8545",
    //     },
    //   },

    //   package: WalletLink,

    //   connector: async (_, options) => {
    //     const { appName, networkUrl, chainId } = options;
    //     const walletLink = new WalletLink({
    //       appName,
    //     });
    //     const provider = walletLink.makeWeb3Provider(networkUrl, chainId);
    //     await provider.enable();
    //     return provider;
    //   },
    // },
  };

  const handleWalletConnect = async () => {
    try {
      let web3Modal;
      if (typeof window !== "undefined") {
        web3Modal = new Web3Modal({
          network: "mainnet", // optional
          cacheProvider: true,
          providerOptions, // required
        });
      }
      // console.log("window", web3Modal);
      const provider = await web3Modal.connect();
      // if(provider){
      //   setLoading(false);
      // }

      const web3_ = new Web3(provider);

      setWeb3(web3_);
      let accounts = await web3_.eth.getAccounts();
      let chain_id = await web3_.eth.getChainId();
      if (chain_id) {
        setWalletAddress(accounts[0]);
        let w3 = new Web3(window.ethereum);
        setWeb3(w3);
       

        console.log(accounts[0], chain_id);
        toast.success("Wallet connection successfull");
      } else {
        toast.error("Chain Not Supported!");
      }

      provider.on("accountsChanged", (accounts = []) => {
        // console.log(accounts);

        setWalletAddress(accounts[0]);
      });
      provider.on("chainChanged", (chainId) => {
        // console.log("chain", chainId);
        if (chainId !== defaultChainId_hex) {
          setWalletAddress("");
          toast.error("Error Wallet Connection !");
        } else {
          toast.error("Chain Not Supported!");
        }

        provider.on("accountsChanged", (accounts = []) => {
          // console.log(accounts);

          setWalletAddress(accounts[0]);
          let w3 = new Web3(window.ethereum);
          setWeb3(w3);

   
        });
        provider.on("chainChanged", (chainId) => {
          // console.log("chain", chainId);
        //   if (chainId !== defaultChainId_hex) {
        //     setWalletAddress("");
        //     toast.error("Error Wallet Connection !");
        //   } else {
        //     setWalletAddress(accounts[0]);
        //   }
        });
        provider.on("connect", (info) => {
          console.log(info);
        });
        provider.on("disconnect", (error) => {
          console.log(error);
        });
      });
    } catch (error) {
      console.log(error);
      toast.error("Error Wallet Connection !");
    }
  };
  //   window.ethereum
  //     ? await ethereum
  //         .request({ method: "eth_requestAccounts" })
  //         .then((accounts) => {
  //           setWalletAddress(accounts[0]);

  //           let w3 = new Web3(window.ethereum);
  //           setWeb3(w3);
  //           checkDaoMember(accounts[0], w3);
  //           checkPanelMember(accounts[0], w3);
  //           checkOwner(accounts[0],w3)
  //           console.log("owner",isOwner)
  //         })
  //         .catch((err) => console.log(err))
  //     : console.log("Please install MetaMask");
  // };






  const disconnect = () => {
    // ethereum.on('disconnect', handler: (error: ProviderRpcError) => void);
    // setManualDisconnect(true);
    setWalletAddress("");
  };

  let sharedState = {
    help,
    setHelp,
    web3,
    walletAddress,
    handleWalletConnect,
    disconnect

  };

  return (
    <WalletContext.Provider value={sharedState}>
      {children}
    </WalletContext.Provider>
  );
};

export function useWalletContext() {
  return useContext(WalletContext);
}
