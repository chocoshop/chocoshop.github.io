import React from 'react';
import { useSpring, animated } from "react-spring";
import styled from 'styled-components';
import Border from './border';

const Outer = styled.div`
    background: #F2D1C0;
    width: 100%;
    height: 100%;
    padding: 40px;
    overflow: hidden;
    box-sizing: border-box;
    position: absolute;
    top: 0;
    z-index: 1;
`;

export default function Frame({children, toggle}) {
    const style = useSpring({
        from: {opacity: 0, background: '#FFF'},
        opacity: toggle ? 1 : 0,
        width: '100%',
        height: '100%',
        background: '#fef6e4',
        borderRadius: '15px',
        config: {
            duration: 1500
        }
    })
    return (
        <Outer>
            <Border />
            <animated.div style={style}/>
            {children}
        </Outer>
    )
}