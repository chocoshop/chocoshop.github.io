import reactDOM from 'react-dom';
import React, { useState } from 'react';
import ClickMe from './clickme';
import styled from 'styled-components';
import Door from './door/door';
import Frame from './frame';
import Profile from './profile/profile';
import { media } from './mediaquery/breakpoints';

const Wrapper = styled.main`
    position: relative;
    width: 100%;
    ${media.lessThan('medium')`
        overflow-x: hidden;
        height: 100%;
    `}
`;

function App() {
    const [state, nextPage] = useState({
        page: 0
    });
    return (
    <Wrapper>
        {/* page0 */}
        {state.page === 0 && 
            <ClickMe nextPage={nextPage} pause={false} />
        }
        {/* page1 */}
        <Door toggle={state.page === 1} />
        <Frame toggle={state.page === 1}  />
        <Profile toggle={state.page === 1} />
        
    </Wrapper>
    )
}

const app = document.getElementById('app');

reactDOM.render(<App/>, app);