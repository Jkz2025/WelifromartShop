//son 3 pasos para user el contexto , crearlo, proveerlo, consumirlo 
import { useState } from "react";
import { createContext } from "react";

//1. Crear el contexto (puede estar vacio) este contexto es que debemos consumir

export const FiltersContext = createContext()

//2. Crear el provider, para proveer el contexto, este nos permite el acceso a los datos
export function FiltersProvider({children}) {
    const [filters, setFilters] = useState({
        category:'all',
        minPrice: 3000
    })
    return (
        <FiltersContext.Provider value={{
            filters,
            setFilters
        }}>
            {children}
        </FiltersContext.Provider> 
    )
}