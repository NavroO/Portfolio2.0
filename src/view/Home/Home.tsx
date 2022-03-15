import React from 'react';
import {Wrapper, Title, Name, Specialization, Button} from "./Home.style";
import {Link} from "react-router-dom";

const Home: React.FC = () => {
    return (
        <Wrapper>
            <Title>Hi, my name is</Title>
            <Name>Tomasz Nawrocki</Name>
            <Name>web developer</Name>
            <Specialization>Fullstack Developer</Specialization>
            <Link to="/contact">
                <Button>Contact me!</Button>
            </Link>
        </Wrapper>
    );
}

export default Home;
