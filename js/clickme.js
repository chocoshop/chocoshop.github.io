import { animated, useSpring, config } from 'react-spring';
import React, { useState } from 'react';
import styled from 'styled-components';
import Text from './text';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    color: #61F4F9;
    font-size: 6rem;
    text-shadow: 0 0 10px #FFF, 0 0 20px #FFF, 0 0 20px;
`;

export default function ClickMe(props) {
    return (
        <Wrapper onClick={() => props.nextPage({page: 1})}>
            CL<Text>I</Text>CK ME
        </Wrapper>
    )
}