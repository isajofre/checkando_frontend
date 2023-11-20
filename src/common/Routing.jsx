import { BrowserRouter, Routes, Route } from "react-router-dom"
import UserWelcome from "../profile/UserWelcome"
import Instructions from "../pages/instructions"
import App from "./App"
import Navbar from "./Navbar/Navbar"
import LandingPage from "../pages/LandingPage/LandingPage"
import './index.css'
import Estadisticas from "../pages/Estadisticas"

export default function Routing() {
    return(
        <>
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/welcome" element= {<UserWelcome/>}></Route>
            <Route path= "/estadisticas" element = {<Estadisticas/>}></Route>
            <Route path= "/" element = {<LandingPage/>}></Route>
        </Routes>
        
        </BrowserRouter>
        </>
    )
}