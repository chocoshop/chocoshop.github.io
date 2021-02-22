import React from 'react';
import styled from "styled-components";
import { media } from './mediaquery/breakpoints';

const Outer = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    padding: 18px;
    overflow: hidden;
    box-sizing: border-box;
    ${media.lessThan('medium')`
        padding: 15px;
    `}
`;

const Inner = styled.div`
    width: 100%;
    height: 100%;
    border: dashed #001858;
    border-radius: 10px;
`;

export default function Border() {
    return(
        <Outer>
            <Inner/>
        </Outer>
    )
}