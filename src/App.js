import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { auroraTestnet } from 'wagmi/chains'
import PoolsNav from "./pages/pools/PoolsNav";
import PoolsBody from "./pages/pools/PoolsBody";
import PoolsFooter from "./pages/pools/PoolsFooter";

const chains = [auroraTestnet]
const projectId = '4c2886308b0277387c85b6b14e2ed03f'

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 2, chains }),
  publicClient
})
const ethereumClient = new EthereumClient(wagmiConfig, chains)


function App() {
  return (
    <>
       <WagmiConfig config={wagmiConfig}>
              <div className="bg-slate-900 m-0 p-0 border-0">
                  <PoolsNav />
                  <PoolsBody />
                  <PoolsFooter />
              </div>
       </WagmiConfig>

       <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  )
}
export default App;
