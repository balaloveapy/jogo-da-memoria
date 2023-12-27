import * as C from './styled'
type variaveis ={
    relogio:string,
    clicks:string,
}
export function Casa({relogio,clicks}:variaveis){
    return(
        <C.div>
            <C.Novo>{relogio}</C.Novo>
            <C.Novo2>{clicks}</C.Novo2>
        </C.div>
    )
}