import React, { useEffect } from 'react'
import info from '../../../DataBase/Data.json'
import Card from '../Card/Card'
import style from './Cards.module.css'

const Cards = () => {

    const data = info;



    useEffect(() => {

    })

    return (
        <div className={style.cards}>
            {data.map(element =>(
                <Card key={element.id} data={element}  />
            ))}
        </div>
    )
}

export default Cards
