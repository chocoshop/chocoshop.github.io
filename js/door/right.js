import { animated, useTransition } from "react-spring";
import React from 'react';
import * as easings from 'd3-ease';

export default function Right({toggle}) {
    const transitions = useTransition(toggle, null, {
        initial: { background: '#080121', height: '100%', width: '50%'},
        enter: { transform: 'translateX(0%) rotateY(0deg)' },
        leave: { transform: 'translateX(100%) rotateY(-180deg) '},
        config: {
            duration: 1000,
            easing: easings.easeCubic
        }
    })
    return transitions.map(({ item, props, key }) => <animated.div style={props} key={key}></animated.div>);
}