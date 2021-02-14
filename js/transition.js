import React, { useState } from "react"
import { Transition } from 'react-spring/renderprops'

export default function Transi() {
    const [toggle, set] = useState(false);
    return(
        <div onClick={() => set(!toggle)}>
            <Transition
                items={toggle}
                from={{ position: 'absolute', opacity: 0, fontSize: '5rem', background: '#373737' }}
                enter={{ opacity: 1 }}
                leave={{ opacity: 0 }}
                >
                {toggle =>
                    toggle
                        ? props => <div style={props}>😄</div>
                        : props => <div style={props}>🤪</div>
                }
            </Transition>
        </div>
    )
}