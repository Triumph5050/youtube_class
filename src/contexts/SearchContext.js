"use client"
import { createContext, useState } from "react";


const SearchContext =createContext(); // initializing a context called SearchContext

export const SearchProvider =({children}) => {
    const [ result, setResult ] = useState([]) 

    return(
        <SearchContext.Provider value={{result, setResult}}>
            {children}
        </SearchContext.Provider>
    )
}