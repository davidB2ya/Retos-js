import React, { useState } from 'react'
import info from '../../../DataBase/Data.json'
import Card from '../Card/Card'
import style from './Cards.module.css'

const Cards = () => {

    const data = info

    const [challanges, setChallanges] = useState(data)

    const inputChange = (e) => {
      const search = e.target.value.toLowerCase().trim()
      if (search === '') {
        setChallanges(data)
      } else {
        const filterChallanges = data.filter(challange => challange.title.toLowerCase().startsWith(search))
        setChallanges(filterChallanges)
      }
    }

    return (


        <div>
            <form className={style.Container} >
                <div className={style.searchBox}>
                    <input 
                    className={style.input}  
                    onChange={(e)=> inputChange(e)} 
                    placeholder={"Filtrar por Titulo"} 
                    type="text"/>
                </div>
            </form>
            <div className={style.cards}>
                {challanges.map(element =>(
                    <Card key={element.id} data={element}  />
                ))}
            </div>
        </div>
    )
}

export default Cards
