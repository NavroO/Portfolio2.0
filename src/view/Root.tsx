import React from 'react';
import {GlobalStyle} from "../style/GlobalStyle";
import MainTemplate from "../components/templates/MainTemplate/MainTemplate";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Skills from "./Skills";
import Contact from "./Contact";
import Work from "./Work";
import Home from "./Home/Home";
import About from "./About";

const Root: React.FC = () => {
    return (
        <>
            <GlobalStyle/>
            <BrowserRouter>
                <MainTemplate>
                    <Routes>
                        <Route path="/" element={<Home />}/>
                        <Route path="/about" element={<About />}/>
                        <Route path="/skills" element={<Skills />}/>
                        <Route path="/contact" element={<Contact />}/>
                        <Route path="/work" element={<Work />}/>
                    </Routes>
                </MainTemplate>
            </BrowserRouter>
        </>
    );
}

export default Root;
