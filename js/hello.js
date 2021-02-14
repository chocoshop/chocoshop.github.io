import React from 'react';
import {useSpring, animated} from 'react-spring';

export default function Hello() {
    const props = useSpring({opacity: 1, from: {opacity: 0}});
    return <animated.div style={props}>Hello</animated.div>;
}
