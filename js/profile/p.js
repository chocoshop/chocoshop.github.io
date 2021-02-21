import React from 'react';
import styled from 'styled-components';

const Content = styled.p`
    line-height: 1.8;
    letter-spacing: 0.1em;
    width: ${({theme}) => theme.width};
`;
export default function P({width, children}) {
    return <Content theme={{width: width}}>{children}</Content>
}