import { BrowserRouter, Route, Routes } from "react-router-dom"
import Body from "./Componentes/Body"
import cards from "../src/cards"
import HomePage from "./HomePage/HomePage"

export default function App() {

  <Body
    cards={cards}
  />


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Cards" element={<Body cards={cards} />} />
      </Routes>
    </BrowserRouter>
  )
}






