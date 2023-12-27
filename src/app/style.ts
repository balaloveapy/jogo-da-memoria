import styled from 'styled-components'
export const Container = styled.div`
width:100%;
max-width:800px;
margin:120px auto;
display:flex;
@media(max-width:770px){
    flex-direction: column;
    max-width: 500px;
    gap: 40px;
}
@media(max-width:530px){
    flex-direction: column;
    max-width: 300px;
    gap: 40px;
}`;

export const info  = styled.div`
display:flex;
flex-direction:column;
justify-content:space-between`;
export const logo = styled.a``
export const infoarea = styled.div``
export const grid = styled.div`
display:flex;
flex:1;
justify-content:flex-end;`

export const songrid = styled.div`
display:grid;
grid-template-columns:repeat(4,1fr);
gap:20px`

