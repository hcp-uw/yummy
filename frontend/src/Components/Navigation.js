import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
    padding: 1em;
    background: #f7f3e9;
    @media (min-width: 700px) {
        position: fixed;
        width: 21%;
        height: 100%;
        overflow-y: scroll;
        top: 15%;
    }
`;
const Navigation = () => {
    return (
        <Nav>
            <p>hi nav side</p>
        </Nav>
    );
};
export default Navigation;