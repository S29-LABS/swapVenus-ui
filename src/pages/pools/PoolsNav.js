import { Web3Button } from '@web3modal/react';




  
function PoolsNav({icon, label, balance }) {
    

    return (
        <nav className="font-sans text-white grid grid-cols-3 h-24 items-center gap-20 py-18">
            <div className="row-cols-1 text-center text-2xl text-green-400 font-semibold cursor-pointer">
                <i>swap</i>venus  &#129680;
            </div>
            <div className="row-cols-2  ">
                <ul className="flex gap-10 justify-end items-center">
                    <li className="cursor-pointer text-slate-300 hover:text-white">Collections</li>
                    <li className="cursor-pointer text-slate-300 hover:text-white">My Pools</li>
                    <li className="cursor-pointer bg-green-500 text-black hover:text-white border rounded border-green-500 px-3 py-2 text-black p-0"> + Create Pool</li>
                </ul>
            </div>
            <div className="row-cols-3 text-center">
                <div className="flex gap-10 justify-center items-center">
                    <Web3Button  icon={icon} label={label} balance={balance} color={"dark"}/>

                    <div className="cursor-pointer text-slate-300">
                        Cart
                    </div> 
                </div>  
            </div>
        </nav>
    )
}

export default PoolsNav;