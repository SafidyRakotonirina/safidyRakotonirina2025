import { Route, Routes } from "react-router-dom"
import { Home } from "./components/home/home"
import { ProjetPage } from "./components/projets/mesProjet"


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Projet" element={<ProjetPage />} />
      </Routes>
    </>
  )
}

export default App
