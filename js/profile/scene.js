import React, { useState } from 'react';
import styled from 'styled-components';
import Text from '../text';
import { pallete } from '../pallete/pallete';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    color: #61F4F9;
    font-size: 6rem;
    text-shadow: 0 0 10px #FFF, 0 0 20px #FFF, 0 0 20px;
    background: ${pallete.navy};
    font-family: "taisyo.ttf";
    // font-family: "Neon.ttf";
    z-index: 4;
`;

export default function Scene() {
    const [isPause, pause] = useState(true);
    return (
        <Wrapper onClick={() => pause(!isPause)}>
            <Text pause={isPause}>箸</Text><Text pause={isPause}>置き🥢</Text>
        </Wrapper>
    )
}