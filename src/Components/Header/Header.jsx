import React from 'react'
import Search from '../Search/Search'
import style from './Header.module.css'

const Header = () => {

    const clickBtn = () => {

    }

    return (
        <div>
            <div className={style.containerBtn}>
                <button onClick={clickBtn} className={style.btn}></button>
                {/* <button className={style.btn1}></button> */}
            </div>
            <Search/>
            <h1>Proyectos</h1>
        </div>
    )
}

export default Header
