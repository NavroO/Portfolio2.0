import React from 'react';
import close from '../../../../assets/icons/close.svg';
import {CloseIcon, Wrapper} from "./Burger.style";
import {IconWrapper} from "../../atoms/IconWrapper/IconWrapper";

const BurgerMenu:React.FC = () => {

    return(
        <Wrapper>
            <CloseIcon>
                <IconWrapper icon={close} />
            </CloseIcon>
            <ul>
                <li>About</li>
                <li>My Skills</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>
        </Wrapper>
    );
}

export default BurgerMenu;
