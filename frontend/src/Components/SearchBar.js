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
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
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