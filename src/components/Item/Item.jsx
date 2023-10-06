import React, { useState } from 'react'
import style from'./item.module.scss'

export default function Item(props) {
    const [selected, setSelected] = useState(false);

    console.log(props);
    return (
        <div className={`${style.root} ${selected ? style.selected : ''}`} onClick={() => setSelected(!selected)}>
            <div className={style[props.item.color]}>
                <h1 className={style.header}>{props.item.rateName}</h1>
            </div>
            <div className={style[props.item.color]}>
                <div className={style.body}>
                    <span className={style.body__span1}>руб</span>
                    <div className={style.body__section}>{props.item.price}<span className={style.body__span2}> /мес</span></div>
                </div>
            </div>
            <div className={style.footer}>
                <div className={style.footer__section1}>{props.item.speed}</div>
                <div className={style.footer__section2}>{props.item.comment}</div>
            </div>
        </div> 
    )
}