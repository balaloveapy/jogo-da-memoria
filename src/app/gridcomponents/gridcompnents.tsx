import { clickCardType } from '../clickCardType'
import b7Svg from '../aaa/svgs/b7.svg'
import * as C from './gridstyle'
import { items } from '../icon'

type img={
    index:clickCardType,
    click:()=>void
}
export function GridTheme({click,index}:img){
    
    return(
        <C.div onClick={click} backgroundimg={index.correct || index.clicked}>
            
            {index.clicked === false && index.correct===false &&
                <C.img  src={b7Svg.src} opacity={.3}/>
            }
            {(index.correct || index.clicked) && index.index !=null &&
             <C.img src={`${items[index.index].icon.src}`} alt={items[index.index].name}/>
            }
        </C.div>
    )
}