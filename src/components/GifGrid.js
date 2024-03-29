import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GiftGridItem } from './GifGridItem';

export const GifGrid = ( { category } ) => {

    const { data:images, loading } = useFetchGifs( category );

    return (
        <>
            <h3> { category } </h3>

            { loading ? <p className='card animate__animated animate__flash'>Loading</p> : null }
            <div className='card-grid'>
                
                {
                    images.map( img => (
                        <GiftGridItem 
                            key={ img.id }
                            { ...img }
                        />
                    )) 
                }
            </div>
        </>
    )
}
