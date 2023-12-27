import styled from 'styled-components'
type bg = {
    backgroundimg:boolean
    
}

export const div = styled.div<bg>`
background:${props => props.backgroundimg?'#1a4bf7':'#cdcdcd'};
border-radius:20px;
padding:10px;
cursor:pointer;
`
type props ={
    opacity?:number
}

export const img = styled.img<props>`
object-fit:contain;
width:100px;
opacity: ${opaci=>opaci.opacity??1};
`