import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {jsonAPI} from '../API'
import HomePresenter from './HomePresenter';






const HomeContainer = () => {

    const [item, setItem] = useState({
        albums: [],
        albumsErr: null
    });

    const getAlbums = async () => {
        const [albums, albumsErr] = await jsonAPI.albums();
        setItem(
            {
                albums,
                albumsErr
            })
    }

    useEffect(() => {
        getAlbums()
    }, [])


    return (
        <HomePresenter {...item} />
    );
};

export default HomeContainer;