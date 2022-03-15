import React from 'react';
import {Wrapper, ListItem} from "./SideBar.style";
import {Link} from "react-router-dom";

const SideBar = () => {
    return(
        <Wrapper>
            <ul>
                <Link to="/about">
                    <ListItem>About</ListItem>
                </Link>
                <Link to="/skills">
                    <ListItem>My Skills</ListItem>
                </Link>
                <Link to="/work">
                    <ListItem>Work</ListItem>
                </Link>
                <Link to="/contact">
                    <ListItem>Contact</ListItem>
                </Link>
            </ul>
        </Wrapper>
    );
}

export default SideBar;
