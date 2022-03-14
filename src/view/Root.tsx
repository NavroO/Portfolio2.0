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

const Root: React.FC = () => {
    return (
        <>
            <GlobalStyle/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<div>Hello</div>}/>
                    <Route path="/skills" element={<Skills />}/>
                    <Route path="/contact" element={<Contact />}/>
                    <Route path="/work" element={<Work />}/>
                </Routes>
            </BrowserRouter>
        </>
        // <MainTemplate>
        // </MainTemplate>
    );
}

export default Root;
