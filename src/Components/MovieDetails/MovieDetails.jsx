import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MediaContext from '../../MediaContext';

export default function MovieDetails() {
  const { id } = useParams();
  const { trendingMovies } = useContext(MediaContext);
  const [movie, setMovie] = useState(null);
  const imgPrefix = 'https://image.tmdb.org/t/p/w500';



useEffect(() => {
    const foundMovie = trendingMovies.find((movieItem) => movieItem.id.toString() === id);

    if (foundMovie) {
      // If the TV show is found in the trendingTv array, store it in local storage
      localStorage.setItem('tvDetails', JSON.stringify(foundMovie));
      setMovie(foundMovie);
    } else {
      // If the TV show is not found, check if it is stored in local storage
      const storedTv = JSON.parse(localStorage.getItem('tvDetails'));
      if (storedTv && storedTv.id.toString() === id) {
        // If the TV show is found in local storage, use the stored data
        setMovie(storedTv);
      } 
    }
  }, [trendingMovies, id]);





  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <>
    
    <div className='w-70 mx-auto  my-5'>
        <div className='movieDeatils w-50 mx-auto'>
            <img src={imgPrefix+movie.poster_path} alt={movie.title} className='w-100' />
            <h2 className='h5 text-center text-info text-capitalize py-2'>{movie.title}</h2>
            <h4 className='h5 text-danger py-2'>Date : {movie.release_date}</h4>
            <p className='fst-italic' style={{letterSpacing:'1px' , lineHeight:'1.8' , fontSize:'18px'}}> {movie.overview}</p>
        </div>
    </div>
    </>
  );
}