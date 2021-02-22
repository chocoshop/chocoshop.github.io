import React from 'react';
import styled from 'styled-components';
import { pallete } from '../pallete/pallete';

const Content = styled.div`
    width: 100%;
    height: 100%;
    padding: 1rem;
    // background: ${pallete.navy};
    border-radius: 5px;
    border: ${pallete.navy} solid;
    color: ${pallete.navy};
    box-sizing: border-box
`;

export default function Card({toggle, children}) {
    return (
        <>
            {toggle && 
                <Content>{children}</Content>
            }
        </>
    )
}