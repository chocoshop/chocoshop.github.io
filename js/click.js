import {animated, useSpring, config} from 'react-spring';
import React, { useState } from 'react';

export default function Click() {
    const [state, toggle] = useState(true);
    const {x, props} = useSpring({
        x: state ? 1 : 0,
        config: {
            duration: 1000,
        }
    });
    return (
        <div onClick={() => toggle(!state)}>
            <animated.div style={{
                opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] }),
                fontSize: '8rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transform: x
                .interpolate({
                  range: [1, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                  output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
                })
                .interpolate(x => `scale(${x})`),
                // transform: x.interpolate({
                //     range: [90],
                //     output: [180],
                // }).interpolate(x => `rotateX(90deg)`)
            }}>
                Click
            </animated.div>
        </div>
    )
}