import React from 'react';
import burger from '../../../assets/icons/burger.svg';
import close from '../../../assets/icons/close.svg';
import {IconWrapper} from "../atoms/IconWrapper/IconWrapper";
import {NavigationWrapper} from "./Navigation.style";
import BurgerMenu from "../molecues/BurgerMenu/BurgerMenu";

const Navigation: React.FC = () => {

    const [burgerMenu, setBurgerMenu] = React.useState<Boolean>(false);

    return (
        <header>
            <NavigationWrapper>
                <div onClick={() => setBurgerMenu(!burgerMenu)}>
                    {burgerMenu ? <BurgerMenu /> : <IconWrapper icon={burger}/>}
                </div>
            </NavigationWrapper>
        </header>
    );
}

export default Navigation;
