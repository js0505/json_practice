import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
    border: 1px solid red;
`;

const Title = styled.div`
    font-size: 30px;
    text-align: center;
`;

const AlbumInfo = ({id, title}) => {
    return (
        <Container>
            <Link to={`/albums/${id}`}>
                <Title>{title}</Title>
            </Link>
        </Container>
    );
};

export default AlbumInfo;