import { useEffect, useState } from 'react';
import { getGifts } from '../helpers/getgifs';

export const useFetchGifs = ( category ) => {

    const [images, setimages] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
      const newImages = await getGifts( category );
      //console.log(newImages);
      setimages( newImages );
      setIsLoading (false);
    }

 useEffect ( () => {
    getImages();
 }, [])

  return {
    images ,
    isLoading 
   }
}
