import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';


const Container = styled.div`
    height: 500px;
`;

const Text = styled.h1`
    font-size: 100px;
    text-align: center;
    padding-top: 50px;
`;


const Detail = () => {

    const { id } = useParams();

    return (
        <Container>
            <Text>Detail  {id}</Text>
        </Container>
    );
};

export default Detail;