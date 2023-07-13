import { styled } from "styled-components"

export default function Rodape({indice}) {
    return (
        <Fotter>

        <h1> {}/{indice} CONCLUÍDOS</h1>
        </Fotter>
    )
}


const Fotter = styled.div`
    width: 375px;
    height:70px;

   
    align-items: center;
    justify-content: center;

    display: flex;

    background-color:#FFFFFF;
    box-shadow: 0px -4px 6px 0px #0000000D;
    border: 0.5px solid ;

        
    h1{
        font-family: Recursive;
        font-size: 18px;
        font-weight: 400;
        line-height: 22px;
        letter-spacing: 0em;
    }


`