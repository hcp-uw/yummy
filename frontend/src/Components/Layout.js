import React from 'react';
import Navigation from './Navigation';
import SearchBar from './SearchBar';
import styled from 'styled-components';
import Home from './Home';
// component styles
const Wrapper = styled.div`
    @media (min-width: 700px) {
        display: flex;
        position: relative;
        height: 100%;
        width: 100%;
        flex: auto;
        flex-direction: column;
    }
`;
const Main = styled.main`
    position: fixed;
    height: 100%;
    width: 100%;
    padding: 1em;
    overflow-y: scroll;
    @media (min-width: 700px) {
        flex: 1;
        margin-left: 260px;
        height: 100%;
        width: 100%;
    }
`;
const Layout = ({ children }) => {
    return (
    <React.Fragment>
        <Wrapper>
            <Main>{children}</Main>
            <Home/>
            <SearchBar/>
            <Navigation />
        </Wrapper>
    </React.Fragment>
    );
};
export default Layout;