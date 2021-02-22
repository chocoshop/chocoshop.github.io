import React, { useState } from "react"
import { Transition } from 'react-spring/renderprops'

export default function Transiti() {
    const [toggle, set] = useState(false);
    return(
        <div onClick={() => set(!toggle)} style={{ position: 'relative' }}>
            <Transition
                items={toggle}
                from={{ position: 'absolute', opacity: 0, fontSize: '5rem',}}
                enter={{ opacity: 1 }}
                leave={{ opacity: 0 }}
                >
                {toggle =>
                    toggle
                        ? props => <div style={props}>😄</div>
                        : props => <div style={props}>🥶</div>
                }
            </Transition>
        </div>
    )
}