import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MediaContext from '../../MediaContext';

export default function TvDetails() {

const { id } = useParams();
const { trendingTv } = useContext(MediaContext);
const [tv, setTv] = useState(null);
const imgPrefix = 'https://image.tmdb.org/t/p/w500';


//   useEffect(() => {
//     const foundMovie = trendingTv.find((tvItem) => tvItem.id.toString() === id);
    
//     setTv(foundMovie);
    
//   }, [trendingTv, id]);

useEffect(() => {
    const foundTv = trendingTv.find((tvItem) => tvItem.id.toString() === id);

    if (foundTv) {
      // If the TV show is found in the trendingTv array, store it in local storage
      localStorage.setItem('tvDetails', JSON.stringify(foundTv));
      setTv(foundTv);
    } else {
      // If the TV show is not found, check if it is stored in local storage
      const storedTv = JSON.parse(localStorage.getItem('tvDetails'));
      if (storedTv && storedTv.id.toString() === id) {
        // If the TV show is found in local storage, use the stored data
        setTv(storedTv);
      } 
    }
  }, [trendingTv, id]);

  if (!tv) {
    return <div>Loading...</div>;
  }

  return (
    <>
    
    <div className='w-70 mx-auto  my-5'>
        <div className='movieDeatils w-50 mx-auto'>
            <img src={imgPrefix+tv.poster_path} alt={tv.title} className='w-100' />
            <h2 className='h5 text-center text-info text-capitalize py-2'>{tv.title}</h2>
            <h4 className='h5 text-danger py-2'>Date : { tv.first_air_date}</h4>
            <p className='fst-italic' style={{letterSpacing:'1px' , lineHeight:'1.8' , fontSize:'18px'}}> {tv.overview}</p>
        </div>
    </div>
    </>
  );
}
