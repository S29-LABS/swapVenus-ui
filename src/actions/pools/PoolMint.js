import { prepareWriteContract, writeContract } from '@wagmi/core';
import CONTRACT_ABI  from "./chickenSoup.json";
let CONTRACT_ADDRESS = "0x5c181549688c3dd4148d9e8bf4ebd0d3cc9de3c5";








async function PoolMint() {
  
        const config = await prepareWriteContract({
          address: CONTRACT_ADDRESS,
          abi: CONTRACT_ABI,
          functionName: 'mint',
          args: [],
        })

        await writeContract(config)

        

        
  

     
}

export default PoolMint;

 

 
