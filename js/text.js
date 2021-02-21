import { Keyframes } from 'react-spring/renderprops'
import React from 'react';

export default function Text(props) {
    const Container = Keyframes.Spring(async next => {
        while(true) {
            await next({
                from: {opacity: 0.3},
                opacity: 0.4,
                reset: true
            })
            await next({
                to: { opacity: 0.9 },
                reset: true
            })
        }
    })
    return(
        <Container config={{ velocity: 100, delay: Math.random() * 4000 }} >{styles => <div style={styles}>{props.children}</div>}</Container>
    )
}