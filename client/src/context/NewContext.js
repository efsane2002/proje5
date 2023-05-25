import { createContext, useContext, useState } from "react";

const NewContext = createContext();

export const NewContextProvider = ({children})=>{
    const[products,setProducts] = useState([]);

    return(
        <NewContext.Provider value={[products,setProducts]}>
            {children}
        </NewContext.Provider>
    )
}

export const useNewContext = ()=> useContext(NewContext)