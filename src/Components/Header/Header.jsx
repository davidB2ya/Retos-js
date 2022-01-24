import React from 'react'
import style from './Header.module.css'


const Header = () => {

    return (
        <div className={style.header}>
            <div>
                <a className={style.img} href={"https://github.com/davidB2ya"}><img  src={'https://i.ibb.co/2cDQyCm/Logo-David-05.png'} alt={"icon"} ></img></a>
            </div>
            <h1 className={style.h1}>Projects JavaScript</h1> 
        </div>
    )
}

export default Header
