import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import App from "./App";
import Home from "./components/Home";
import Performers from "./components/Performers";
import Base from "./components/Base";
import FAQ from "./components/FAQ";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

const Main = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<App />}>
                        <Route path='home'  element={<Home />}/>
                        <Route path='base'  element={<Base />}/>
                        <Route path='performers'  element={<Performers />}/>
                        <Route path={'faq'} element={<FAQ />} />
                        <Route path={'signIn'} element={<SignIn />} />
                        <Route path={'signUp'} element={<SignUp />} />
                    </Route>/
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Main;