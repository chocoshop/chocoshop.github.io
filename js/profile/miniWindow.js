import React from 'react';
import styled from 'styled-components';
import P from './p';

const Window = styled.div`
    overflow: hidden;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border-radius: 15px;
`

export default function MiniWindow({children}) {
    return (
        <Window>{children}</Window>
    )   
}