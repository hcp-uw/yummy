import React from 'react';
import styled from 'styled-components';

const HeaderBar = styled.header`
    width: 21%;
    padding: 0.5em 1em;
    display: flex;
    height: 15%;
    position: fixed;
    align-items: center;
    background-color: #fff;
    z-index: 1;
`;
const SearchBar = () => {
return (
    <HeaderBar>
        <p>search bar area</p>
    </HeaderBar>
    );
};
export default SearchBar;