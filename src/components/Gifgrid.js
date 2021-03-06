import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';

import { GifGridItem } from './GifGridItem';

export const Gifgrid= ({ category })=> {
    const {data:images, loading} = useFetchGifs(category);
    

    /*

    */
    //const [images, setimages] = useState([]);

    
    return (
        <>
        <h3>{ category }</h3>
         { loading && <p className="animate__animated animate__flash">Loading...</p>}
        <div className="card-grid">
            
            
            {
                images.map( img=> (
                    <GifGridItem 
                    key={img.id}  
                    {...img}
                    />
                ))
            }
                
   
        </div>


        </>

    )
}
