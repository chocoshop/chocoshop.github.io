import React from 'react';
import { animated, useSpring } from 'react-spring';

export default function Circle({
        size = 100, position = 'absolute', top = 0, left = 0, radius = '50%', background = '', half=false, children 
    }) {
    const style = useSpring({
        position,
        top,
        left,
        background,
        borderRadius: radius,
        width: `${size}px`,
        height: half ? `${size / 2}px` : `${size}px`,
        border: '#001858 solid',
    })
    return(
        <animated.div style={style}>
            {children}
        </animated.div>
    )
}