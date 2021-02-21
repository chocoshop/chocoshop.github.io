import React from 'react';
import { animated, useSpring } from 'react-spring';
import { pallete } from '../pallete/pallete';

export default function Box({width = '100%', height = 50, children, onClick}) {
    const style = useSpring({
        width,
        height,
        borderRadius: '8px',
        border: `${pallete.navy} solid`,
        boxSizing: 'border-box',
        padding: '0 0 0 1rem',
        lineHeight: 2.7,
        fontWeight: 'bold',
        margin: '0 0 10px 0',
    })
    return(
        <animated.div style={style} onClick={() => onClick()} >
            {children}
        </animated.div>
    )
    
}