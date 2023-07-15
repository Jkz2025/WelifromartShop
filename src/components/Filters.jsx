import React, { useState, useId } from "react";
import './Filters.css'
import { useFilters } from "../Hooks/useFilter";

export function Filters(  ) {
    const {filters,setFilters} = useFilters()
    //creacion de id con el hook useId
    const minPriceFilterId = useId()
    const minCategoryFilterId = useId()

    console.log({
        minPriceFilterId,
        minCategoryFilterId
    })

    const handleChangeMinPrice = (event) => {
  
        setFilters(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event) => {
        setFilters(prevState => ({
            ...prevState,
            category: event.target.value
        }))
    }

    return (
    <section className="filters">
      <div>
        <label htmlFor="price">Select Price</label>
        <input 
        type="range"
        id={minPriceFilterId}
        min='0'
        max='100000'        
        onChange={handleChangeMinPrice}
        value={filters.minPrice}
        />
        <span>${filters.minPrice} </span>
      </div>


    <div>
        <label htmlFor={minCategoryFilterId}>Categoria</label>
        <select id={minCategoryFilterId} onChange={handleChangeCategory}>
            <option value="all">Todas</option>
            <option value="bisuteria">Bisuteria</option>
            <option value="tecnologia">Tecnologia</option>
        </select>
    </div>

    </section>
  );
}
