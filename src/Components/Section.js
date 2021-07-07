import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    padding: 20px;
    border: 1px solid #b2bec3;
    margin-bottom: 5px;
`;

const Title = styled.span`
    font-size: 30px;
`;

const AlbumTitle = styled.div`

`;

const Section = ({title, children}) => {
    return (
        <Container>
            <Title>Album {title}</Title>
            <AlbumTitle>{children}</AlbumTitle>
        </Container>
    );
};

export default Section;