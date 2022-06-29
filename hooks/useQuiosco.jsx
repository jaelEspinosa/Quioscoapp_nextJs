import { useContext } from "react"
import QuioscoContext from "../context/QuioscoProvider"

const useQuiosoco = ()=>{
    return useContext(QuioscoContext)
}

export default useQuiosoco 