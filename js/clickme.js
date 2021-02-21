import React from 'react';
import styled from 'styled-components';
import Text from './text';
import { pallete } from './pallete/pallete';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    color: #61F4F9;
    font-size: 6rem;
    text-shadow: 0 0 10px #FFF, 0 0 20px #FFF, 0 0 20px;
    background: ${pallete.black};
    font-family: "neon2.ttf";
    position: absolute;
    z-index: 4;
`;

export default function ClickMe(props) {
    const next = () => {
        setInterval(() => {
            props.nextPage({page: 1});
        }, 500);
    }
    return (
        <Wrapper onClick={() => next()}>
            CL<Text>I</Text>CK ME
        </Wrapper>
    )
}