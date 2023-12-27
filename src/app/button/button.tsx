
import * as C from './buttonedid'

type nome = {
    icon:any,
    button:string,
    onclick:React.MouseEventHandler<HTMLDivElement>
}
export var Button=({icon,button,onclick}:nome)=>{
    return (
        <C.div2 onClick={onclick}>
            <C.img src={icon}/>
           <C.button>{button}</C.button>
        </C.div2>
    )
}