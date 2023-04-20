import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import { TokensContextWrapper } from "../context/tokenContext";
import { WalletContextWrapper } from "../context/walletContext";
export default function App({ Component, pageProps }: AppProps) {
  return(
  <><WalletContextWrapper>
    <TokensContextWrapper>
       <Layout>
         <Component {...pageProps} />
       </Layout>
     </TokensContextWrapper>;
     </WalletContextWrapper>
   </>
   
   )

 
}
