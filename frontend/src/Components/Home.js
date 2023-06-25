import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
    padding: 1em;
    @media (min-width: 700px) {
        position: fixed;
        width: 89%;
        height: 100%;
        overflow-y: scroll;
        background-color: #FFD4BC;
    }
`;

const Home = () => {
    return (
        <div>
            <p>This is home page</p>
        </div>
    );
};
export default Home;