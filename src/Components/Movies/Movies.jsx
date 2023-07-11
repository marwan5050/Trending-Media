import React, { useContext, useEffect } from 'react';
import MediaContext from '../../MediaContext';
import { Link } from 'react-router-dom';




export default function Movies() {

  const {trendingMovies  , setTrendingMovies , getMedia ,  searchResults} = useContext(MediaContext);

  const imgPrefix = 'https://image.tmdb.org/t/p/w500';
  
  
  


  
  


  useEffect(() => {
    
   async function fetchData() {
     await getMedia('movie' , setTrendingMovies , 20);
     
    }

    fetchData();

    // // Clear search results when component unmounts
    // return () => {
    //   searchMedia(''); // Clear the search results
    // };

  }, []);

  
  
  const displayMovies = searchResults.movies.length > 0 ? searchResults.movies : trendingMovies;
  // const displayMovies = searchResults.movies ? searchResults.movies : trendingMovies;


  return (
    <>
    <div className='container'>
      <h2 className='text-center fst-italic my-5 py-4 text-capitalize' style={{letterSpacing:'3px'}}>trending movies this week</h2>
      <div className='row'>
        

        {displayMovies.map((movie , index)=> <div key={index} className='col-md-3'>
        <Link to={`/movies/${movie.id}`}>
         <div className='movie my-1 px-2 position-relative'>
              <div className='position-absolute top-0 end-0 '>
                < div className="badge text-center text-bg-primary p-2" style={{fontSize:'15px'}}>{movie.vote_average.toFixed(1)}</div>
              </div>

              <div>
                <img src={imgPrefix+movie.poster_path} alt={movie.title} className='w-100'/>
                <h2 className='h6 text-center  py-1' style={{letterSpacing:'1px' , lineHeight:'1.5'}}>{movie.title}</h2>
              </div>
              
          </div>
        </Link>
        </div> )}

        
    </div>
  </div>
    </>
  )
}
