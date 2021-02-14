import reactDOM from 'react-dom';
import React from 'react';
import { useSpring, animated } from 'react-spring';
import Click from './click';
import Transiti from './transition';

function App() {
    return (
    <div>
        <Click/>
        <Transiti/>
    </div>
    )

}

const app = document.getElementById('app');

reactDOM.render(<App/>, app);