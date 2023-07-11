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
        padding-left: 10%;
    }
`;

const Home = () => {
    return (
        <div>
            <Nav><p></p></Nav>
        </div>
    );
};
export default Home;