import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import App from "./App";
import Home from "./Home";
import Performers from "./Performers";
import Base from "./Base";

const Main = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<App />}>
                        <Route path='home'  element={<Home />}/>
                        <Route path='base'  element={<Base />}/>
                        <Route path='performers'  element={<Performers />}/>
                    </Route>/
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Main;