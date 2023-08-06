import Item from '../Item/Item';
import style from './cards.module.scss';


export default function Cards(props) {
    console.log(props);
    return (
        
        <div className={style.container}>
            {props.arr.map((item,index)=>(
                <Item item={item} key={index}/>
            ))}
        </div>
    )
}
