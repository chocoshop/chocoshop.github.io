import React from 'react';
import styled from "styled-components";
import Left from './left';
import Right from './right';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    z-index: 3;
    overflow: hidden;
    position: absolute;
`;

export default function Door({toggle}) {
    return (
        <Wrapper>
            <Left toggle={toggle}/>
            <Right toggle={toggle} />
        </Wrapper>
    )
}