import React from 'react';
import styled from 'styled-components';

import Section from '../Components/Section';
import AlbumInfo from '../Components/AlbumInfo';


const Container = styled.div`
    height: 500px;
    padding: 10px;
    overflow: scroll;
`;
const HomePresenter = ({albums}) => {
    return (
        <Container>
            {albums.map(item => (
                <Section title={item.id}>
                    <AlbumInfo
                        id={item.id}
                        title={item.title}
                    />
                </Section>
            ))}
        </Container>
    );
};

export default HomePresenter;