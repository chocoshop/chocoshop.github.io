import React from 'react';
import styled from 'styled-components';

const Text = styled.h2`
    color: ${({theme}) => theme.color};
    font-size: 2rem;
    margin: 0 0 10px 0;
`;

export default function H2({color, children}) {
    return <Text theme={{color: color}}>{children}</Text>
}