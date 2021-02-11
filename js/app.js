import {useSpring, animated} from 'react-spring';
import reactDOM from 'react-dom';
import React from 'react';

function App() {
    const props = useSpring({opacity: 1, from: {opacity: 0}});
    return <animated.div style={props}>Hello</animated.div>;
}

const app = document.getElementById('app');

reactDOM.render(<App/>, app);