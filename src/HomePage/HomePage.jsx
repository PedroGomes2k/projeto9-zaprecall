import { styled } from "styled-components"
import { Link } from "react-router-dom"
import logo from "../assets/logo.png"
export default function HomePage() {
    return (
        <Home>
            <img src={logo} alt="logo-img" />

            <p>ZapRecall</p>

            <Link to={"/Cards"}>
                <button data-test="start-btn">Iniciar Recall!</button>
            </Link>

        </Home>
    )
}

const Home = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #FB6B6B;
    width: 100%;
    height:900px;

    img{

        display: flex;
        width: 136px;
        height: 161px;

        margin-top: 100px;
        margin-bottom: 30px;
        
    }

    p{
        font-family: Righteous;
        font-size: 36px;
        font-weight: 400;
        line-height: 45px;
        letter-spacing: -0.012em;
        text-align: center;
        
        color:#FFFFFF;

        margin-bottom: 40px;

    }
    button{
       
        width: 246px;
        height: 54px;

        border-radius: 5px;
        border: 1px #D70900 solid;

        background-color: #FFFFFF;
        box-shadow: 0px 4px 4px 0px #00000026;


        color: #D70900;

        font-family: Recursive;
        font-size: 18px;
        font-weight: 400;
        line-height: 22px;
        letter-spacing: 0em;
        text-align: center;

    }
`
