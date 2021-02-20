import reactDOM from 'react-dom';
import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import ClickMe from './clickme';
import styled from 'styled-components';
import Door from './door/door';

const Wrapper = styled.main`
    postion: relative;
    width: 100%;
    height: 100%;
`;

function App() {
    const [state, nextPage] = useState({
        page: 0
    });
    return (
    <Wrapper>
        {state.page === 0 && 
            <ClickMe nextPage={nextPage} />
        }
        <Door toggle={state.page === 1 ? true : false} />
    </Wrapper>
    )
}

const app = document.getElementById('app');

reactDOM.render(<App/>, app);