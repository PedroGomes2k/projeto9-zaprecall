import { styled } from "styled-components";

export default function Rodape(props) {
  const { contador, card } = props;

  return (
    <Fotter data-test="footer">
      <h1>
        {" "}
        {contador} / {card.length} CONCLUÍDOS
      </h1>
    </Fotter>
  );
}

const Fotter = styled.div`
  width: 100%;
  height: 100px;
  margin: 0px auto;
  // margin-bottom: 100px;

  position: absolute;
  bottom: 0px;
  z-index: 2;

  align-items: center;
  justify-content: center;

  display: flex;

  background-color: #f7f1f1;
  box-shadow: 0px -4px 6px 0px #0000000d;

  h1 {
    font-family: Recursive;
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
  }
`;
