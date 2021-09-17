import React, { useState } from 'react'
import style from './Search.module.css'
import { useHistory } from "react-router-dom"

const Search = () => {

    const [searchText, setSearchText] = useState("");
    const history = useHistory();
    console.log(history)
    const handleSubmit = (e) => {
        e.preventDefault();
        history.push("/?search=" + searchText);
    };

    return (
        <form className={style.Container} onSubmit={handleSubmit}>
            <div className={style.searchBox}>
                <input 
                className={style.input} 
                value={searchText} 
                onChange={(e)=> setSearchText(e.target.value)} 
                placeholder={"Filtrar por Titulo"} 
                type="text"/>
                <button className={style.button} type='submit'>Buscar</button>
            </div>
        </form>
    )
}

export default Search
