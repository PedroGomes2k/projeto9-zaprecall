import { styled } from "styled-components";
import imagem from "./../assets/logo.png";
import Cards from "./Cards";
import Rodape from "./Rodape";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Body(props) {
  const { cards } = props;
  const [contador, setContador] = useState(0);

  return (
    <div className="body">
      <Container>
        <Topo>
          <img src={imagem} alt="logo" />
          <h1> ZapRecall</h1>
        </Topo>

        <div className="cardsContainer">
          {cards.map((c, i) => (
            <Cards
              key={c.question}
              index={i}
              question={c.question}
              answer={c.answer}
              contador={contador}
              setContador={setContador}
            />
          ))}
        </div>
      </Container>
      <Rodape card={cards} contador={contador} />
    </div>
  );
}

const Container = styled.div`
  width: 100%;
  height: 665px;

  background-color: #fb6b6b;
  position: relative;

  z-index: 1;
  overflow-x: hidden;

  .cardsContainer{
    margin-bottom: 130px;
  }
`;

const Topo = styled.div`
  display: flex;
  justify-content: center;

  margin-bottom: 30px;

  img {
    margin-right: 30px;
    margin-top: 45px;

    width: 52px;
    height: 60px;
  }

  h1 {
    margin-top: 50px;

    font-family: "Righteous", cursive;
    font-weight: 400;
    font-size: 36px;

    color: #ffffff;
  }
`;
