import React from 'react';
import styled from 'styled-components';
import { media } from '../mediaquery/breakpoints';

const Content = styled.p`
    line-height: 1.8;
    letter-spacing: 0.1em;
    width: ${({theme}) => theme.width};
    overflow-wrap: break-word;
    margin-top: 10px;
    ${media.lessThan('medium')`
        width: 100%;
        margin-top: 10px;
    `}
`;
export default function P({width, children}) {
    return <Content theme={{width: width}}>{children}</Content>
}