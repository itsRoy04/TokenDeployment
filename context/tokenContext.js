import React, { createContext, useContext, useState } from "react";


const TokensContext = createContext();


export const TokensContextWrapper = ({ children }) => {
  const [selected, setSelected] = useState("BSC")

  const [tokenName, setTokenName] = useState("");
  const [tokenSupply, setTokenSupply] = useState("");
  const [tokenSymbol, setTokenSymbol] = useState("");

  async function standardToken() {
    try {

      console.log("Standar Token", tokenSupply, tokenName, tokenSymbol);
      const contract = new web3.eth.Contract(token);
      let supply = new BigNumber(tokenSupply).multipliedBy(10 ** 18).toFixed();
      console.log("Supply", supply);
     
      let deploy = await contract
        .deploy({
          data: bytecode,
          arguments: [supply, tokenName, tokenSymbol],
        })
        .send({
          from: walletAddress,
          value: "10000000000000000",
        })
        .then(async function (newContractInstance) {
          console.log(newContractInstance.options.address); // instance with the new contract address
          let estimate = web3.eth.estimateGas({ data: deploy });
          let newTokenAddress = newContractInstance.options.address;
          if (newTokenAddress) {
            // setLoading(false);
            const contract = new web3.eth.Contract(tokenAbi, newTokenAddress);
            let name = await contract.methods.name().call();
            let symbol = await contract.methods.symbol().call();
            let totalSupply = await contract.methods.totalSupply().call();
            let decimal = await contract.methods.decimals().call();
            // let actualTotalSupply = Number(totalSupply) / 10 ** Number(decimal);

            console.log(name, symbol, totalSupply);

          //   const { data } = await axios.post(`${base}/mint_token`, {
          //     tokenAddress: newTokenAddress,
          //     tokenSupply,
          //     tokenName,
          //     tokenSymbol,
          //     walletAddress,
          //   });

          //   if (data.success) {
          //     setLoading(false);
          //     setShowModal(true);
          //     setMintedNewToken(true);
          //     toast.success("Token Minted Successfully");
          //   }
          }
        });

    
    } catch (error) {
      // setLoading(false);
      console.log("Error",error);
    }
  }

  let sharedState = {
    selected, setSelected,
    tokenName, setTokenName,
    tokenSupply, setTokenSupply,
    tokenSymbol, setTokenSymbol,
    standardToken
  };

  return (
    <TokensContext.Provider value={sharedState}>
      {children}
    </TokensContext.Provider>
  );
};
export function useTokensContext() {
  return useContext(TokensContext);
}