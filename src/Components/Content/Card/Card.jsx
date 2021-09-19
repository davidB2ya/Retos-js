import React from 'react'
import style from './Card.module.css'
import iconDeploy from './rocket.png'
import iconRepo from './github-sign.png'

const Card = ({data}) => {
    const{id,title, img, description, url_deploy, gitHub} = data

    return (
        <div className={style.card}>
            <h2 className={style.title}>{title}</h2>
            <span className={style.num}>{id}</span>
            <img className={style.img} src={img} alt={"img"}></img>
            <p className={style.text}>{description}</p>
            <div className={style.button}>
                <a href={gitHub}><button className={style.btn}><img src={iconRepo} alt={'icon'} className={style.ico}></img></button></a>
                <a href={url_deploy}><button className={style.btn}><img src={iconDeploy} alt={'icon'} className={style.ico}></img></button></a>
            </div>
            {/* <a href={tech} ><button className={style.tech}>Tecnologías Utilizadas</button></a> */}
        </div>
    )
}

export default Card
