import React from 'react';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaHome, FaSearch, FaCss3 } from "react-icons/fa";

const Container = styled.div`
    border: 1px solid black;
    height: 100px;
    opacity: 0.8;
    background-color: #0984e3;
    box-shadow: 0px 5px 5px #b2bec3;
    bottom: 0;
    padding: 20px;
`;

const Icons = styled.div`
    color: white;
    font-size: 50px;
    display: flex;
    justify-content: space-around;
`;



const Footer = () => {
    return (
        <Container>
            <Icons>
                <div><FaHome /></div>
                <div><FaSearch /></div>
                <div><FaCss3 /></div>
            </Icons>
        </Container>
    );
};

export default Footer;