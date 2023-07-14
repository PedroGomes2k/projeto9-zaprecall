import { styled } from "styled-components"
import imagem from "./../assets/logo.png"
import Cards from "./Cards"
import cards from "../cards"
import Rodape from "./Rodape"

export default function Body() {

  return (
    <>
    <Container>
      <Topo >
        <img src={imagem} alt="logo" />
        <h1> ZapRecall</h1>
      </Topo>


      {cards.map((c, i) =>
        <Cards
          key={c.question}
          index={i}
          question={c.question}
          answer={c.answer}
        />
      )}

    </Container>
    <Rodape 
    
    />
    </>
  )
}


const Container = styled.div`
  width: 375px;
  height:580px;

  background-color:#FB6B6B;

  color:#FFFFFF;

  
  overflow-x: hidden;
  
  
`

const Topo = styled.div`
  display: flex;
  justify-content:center;
  
  margin-bottom: 30px;

  img{
    margin-right: 30px;
    margin-top:45px;

    width: 52px;
    height: 60px;
  }

  h1{

    margin-top: 50px;

    font-family: 'Righteous', cursive;
    font-weight:400;
    font-size:36px;
  }
`