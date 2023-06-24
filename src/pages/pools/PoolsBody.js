import PoolMint from "../../actions/pools/PoolMint";



function PoolsBody() {
    return (
        <div className="px-72 py-4">
            
            <div className="bg-slate-800 border rounded h-[52rem] border-slate-800">
                <div className="text-2xl text-center text-white m-6">
                        Create New Pool
                </div> 

                <div className="border rounded border-slate-400 m-4 border-slate-400"></div>

                <button onClick={PoolMint} className="bg-green-600 border rounded">
                    Mint
                </button>
            </div>
        </div>
    )
}

export default PoolsBody;