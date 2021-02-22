import React from 'react';
import { animated, useSpring } from 'react-spring';
import styled from 'styled-components';
import { media } from '../mediaquery/breakpoints';
import { pallete } from '../pallete/pallete';

const Element = styled.div`
    width: ${({theme}) => theme.width};
    height: ${({theme}) => theme.height};
    border-radius: 8px;
    border: ${pallete.navy} solid;
    box-sizing: border-box;
    padding: 0 0 0 1rem;
    line-height: 2.7;
    font-weight: bold;
    margin: 0 0 10px 0;
    ${media.lessThan('medium')`
        width: 100%;
    `};
`;

export default function Box({width = '85%', height = '50px', children, onClick}) {
    return(
        <Element theme={{width,height}} onClick={() => onClick()}>
            {children}
        </Element>
    )
    
}