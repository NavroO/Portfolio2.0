import React from 'react';
import {IconWrapperProps} from './IconWrapper.types';
import {Wrapper} from "./IconWrapper.style";

export const IconWrapper: React.FC<IconWrapperProps> = ({icon}) => {
    return (
        <Wrapper>
            <img src={icon} alt=""/>
        </Wrapper>
    );
}
