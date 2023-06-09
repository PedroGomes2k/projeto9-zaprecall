import { styled } from "styled-components"
import seta from "../assets/seta_play.png"
import virar from "../assets/seta_virar.png"
import erro from "../assets/icone_erro.png"
import quase from "../assets/icone_quase.png"
import certo from "../assets/icone_certo.png"
import { useState } from "react"




export default function Cards({ index, question, answer}) {

    const [start, setStart] = useState(false)
    const [game, setGame] = useState(true)
    const [end, setEnd] = useState(true)
    const [restart, setRestart] = useState(true)
    const [final, setFinal] = useState([])
    const [tarefasFinalizadas, setTarefasFinalizadas ] = useState(0)




    function turnCard() {
        setStart(true)
        setGame(false)

    }

    function Question() {
        setGame(true)
        setEnd(false)

    }

    function finalCard(c) {
        setEnd(true)
        setRestart(false)
        setFinal([...final, c])

        
    }

    


    if (!start) {

        return (
            <Card>
                <h1>Pergunta {index + 1}</h1>
                <img src={seta} alt="seta-card" onClick={() => turnCard()} />
            </Card>
        )
    } if (!game) {
        return (
            <TurnCard>
                <h1>{question}</h1>
                <img src={virar} alt="seta-virar-card" onClick={() => Question()} />
            </TurnCard>
        )
    } if (!end) {
        return (
            <AnswerCard>
                <h1>{answer}</h1>

                <Button>
                    <button onClick={() => finalCard('erro')} className="vermelho">Não lembrei</button>
                    <button onClick={() => finalCard('quase')} className="laranja">Quase não lembrei</button>
                    <button onClick={() => finalCard('zap')} className="verde">Zap!</button>
                </Button>
            </AnswerCard>
        )
    } if (!restart) {
        if (final.includes('erro')) {
            return (
                <Card>
                    <h1 className="line erro">Pergunta {index + 1}</h1>
                    <img src={erro} alt="icone-erro" />
                </Card>
            )
        } else if (final.includes('quase')) {
            return (
                <Card>
                    <h1 className="line quase">Pergunta {index + 1}</h1>
                    <img src={quase} alt="icone-quase" />
                </Card>
            )
        } else {
            return (
                <Card>
                    <h1 className="line certo">Pergunta {index + 1}</h1>
                    <img src={certo} alt="icone-certo" />
                </Card>
            )
        }

    }



}

const Card = styled.div`
    display: flex;
    justify-content: space-between;

    width: 300px;
    height: 65px;

    background-color: #FFFFFF;
    border-radius: 5px;
    box-shadow: 0px 4px 5px 0px #00000026;

    align-items: center;

    margin: 25px auto;

    h1{

        margin-left: 15px;
    
        font-family: 'Recursive', sans-serif;
        font-size: 16px;
        font-weight: 700;
        line-height: 19px;
        letter-spacing: 0em;
        text-align: left;
        color: #333333;

    }

    img{
        width: 23px;
        height: 23px;

        margin-right: 15px;
        cursor: pointer;
    }

    .line {
        
        text-decoration: line-through;
    }
    .erro{
    color: #FF3030;
    }

    .quase{
        
        color:#FF922E;
    }
    .certo{ 
        color:#2FBE34;
    }
    
`

const TurnCard = styled.div`
    display: flex;
    justify-content: space-between;

    width:300px ;
    height: 131px;

    border-radius: 5px;
    background-color: #FFFFFF;
    box-shadow: 0px 4px 5px 0px #00000026;

    
    margin: 25px auto;
    
    h1{ 
        margin-top: 25px;
        margin-left: 15px;
        font-family: 'Recursive', sans-serif;
        font-size: 18px;
        font-weight: 400;
        line-height: 19px;
        
        text-align: left;
        color: #333333;
    }

    img{
        width: 30px;
        height: 23px;

        margin:100px 15px;
        
    }
`
const AnswerCard = styled.div`
    
    width:300px ;
    height: 150px;

    border-radius: 5px;
    background-color: #FFFFD4;
    
    margin: 15px auto;
    box-shadow: 0px 4px 5px 0px #00000026;

    
    h1{ 
        
        position: relative;
        top: 12px;
        margin: 30px 15px;

        font-family: 'Recursive', sans-serif;
        font-size: 18px;
        font-weight: 400;
        line-height: 19px;

        
        
        color: #333333;
    }

    img{
        width: 30px;
        height: 23px;

        margin:100px 15px;
        
    }

   
`

const Button = styled.div`
   display: flex;
   
   
    button{
    width: 86px;
    height: 38px;
    border-radius: 5px;
    
    
    
    color: #FFFFFF;
    margin-left: 10px;
    
    align-items: center;
    }

.vermelho{
    background-color: #FF3030;
    border:#FF3030 ;

}
.laranja{
    background-color:#FF922E ;
    border: #FF922E;
}
.verde{
    background-color: #2FBE34;
    border: #2FBE34;
}



`
