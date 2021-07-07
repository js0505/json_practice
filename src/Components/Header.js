import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    border: 1px solid black;
    height: 100px;
    opacity: 0.8;
    background-color: #0984e3;
    box-shadow: 0px 5px 5px #b2bec3;
`;

const Title = styled.div`
    text-align: center;
    margin-top: 30px;
`;

const SLink = styled(Link)`
    color: white;
    font-size: 40px;
`;


const Header = () => {
    return (
        <Container>
            <Title>
                <SLink to={'/'}>Albums</SLink>
            </Title>
        </Container>
    );
};

export default Header;