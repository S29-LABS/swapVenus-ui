import { AiFillGithub } from 'react-icons/ai'
import { IconContext } from "react-icons";
function PoolsFooter() {
    // h-[12.468749rem]
    return (
        
            
            <footer className="h-[10.46799rem] px-64 py-10">
                <IconContext.Provider value={{ color: "white", className: "global-class-name", size: "20px" }}>
                    <div className="flex flex-row py-10 ">
                       <a href="https://github.com/S29-LABS/why-venus" className="flex flex-row items-center text-white cursor-pointer">
                            Code &nbsp; <AiFillGithub/>
                       </a>
                    </div>
                </IconContext.Provider>
            </footer>
    
    )
}

export default PoolsFooter;