import React from 'react';
import styled from 'styled-components';
import { media } from '../mediaquery/breakpoints';
import { pallete } from '../pallete/pallete';

const Text = styled.h2`
    color: ${({theme}) => theme.color};
    font-size: 2rem;
    margin: 0 0 10px 0;
    ${media.lessThan('medium')`
        font-size: 1.5rem;
    `}
`;

export default function H2({color = pallete.navy, children}) {
    return <Text theme={{color}}>{children}</Text>
}