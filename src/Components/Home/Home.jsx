import React, { useContext, useEffect } from 'react';
import MediaContext from '../../MediaContext';
import { Link } from 'react-router-dom';



export default function Home() {

  // distruct data from useContext
  const {trendingMovies, trendingTv , trendingActors, searchResults ,searchMedia ,setTrendingMovies , setTrendingTv , setTrendingActors , getMedia } = useContext(MediaContext);
  const imgPrefix = 'https://image.tmdb.org/t/p/w500';

  // const displayMovies = searchResults.movies ? searchResults.movies : trendingMovies;

  const displayMovies = searchResults.movies.length > 0 ? searchResults.movies : trendingMovies;
  const displayTv = searchResults.tv.length > 0 ? searchResults.tv : trendingTv;
  const displayActors = searchResults.actors.length > 0 ? searchResults.actors : trendingActors;

  // using HOOK to display data from api

  useEffect(()=>{

  async  function fetchData(){
    await  getMedia('movie', setTrendingMovies, 10);
    await  getMedia('tv', setTrendingTv, 10);
    await  getMedia('person', setTrendingActors, 10);
     searchMedia(''); // Clear the search results
    }
    
    fetchData();

    return () => {
      searchMedia(''); // Clear the search results
    };
  },[]);

  
  

  return (
    <>
   <div className='container'>
      <h2 className='text-center fst-italic my-5 py-4 text-capitalize' style={{letterSpacing:'3px'}}>trending this week</h2>
      <div className='row'>
        <div className='col-md-4 '>
          <div className='brdr my-3 w-25'></div>

          <div className='text-capitalize'>
            <h2 className='h4'>trending Moives</h2>
            <h2 className='h4 py-1'> to watch</h2>
            <h2 className='h4'>right now</h2>
            <p className='py-1 fs-5' style={{color:'#939090'}}>trending movies to watch</p>
          </div>
        
          <div className='brdr my-3'></div>
        </div>

        {displayMovies.map((movie , index)=> <div key={index} className='col-md-2'>
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





    <div className='row py-5 my-4'>
        <div className='col-md-4 '>
          <div className='brdr my-3 w-25'></div>

          <div className='text-capitalize'>
            <h2 className='h4'>trending series</h2>
            <h2 className='h4 py-1'> to watch</h2>
            <h2 className='h4'>right now</h2>
            <p className=' py-1 fs-5' style={{color:'#939090'}}>trending series to watch</p>
          </div>
        
          <div className='brdr my-3'></div>
        </div>
        
        {displayTv.map((tv , index)=> <div key={index} className='col-md-2'>
        <Link to={`/tv/${tv.id}`} >
         <div className='movie my-1 px-2 position-relative'>
              <div className='position-absolute top-0 end-0 '>
                < div className="badge text-center text-bg-primary p-2" style={{fontSize:'15px'}}>{tv.vote_average.toFixed(1)}</div>
              </div>

              <div>
                <img src={imgPrefix+tv.poster_path} alt={tv.name} className='w-100'/>
                <h2 className='h6 text-center  py-1' style={{letterSpacing:'1px' , lineHeight:'1.5'}}>{tv.name}</h2>
              </div>
              
          </div>
          </Link>
        </div> )}
    </div>





    <div className='row py-5 my-4'>
        <div className='col-md-4 '>
          <div className='brdr my-3 w-25'></div>

          <div className='text-capitalize'>
            <h2 className='h4'>trending Actors</h2>
            <h2 className='h4 py-1'> to watch</h2>
            <h2 className='h4'>right now</h2>
            <p className=' py-1 fs-5' style={{color:'#939090'}}>trending Actors to watch</p>
          </div>
        
          <div className='brdr my-3'></div>
        </div>

        {displayActors.map((actor , index)=> <div key={index} className='col-md-2'>
        <Link to={`/actors/${actor.id}`}>
         <div className='movie my-1 px-2 position-relative'>
              <div className='position-absolute top-0 end-0 '>
                
              </div>

              <div>
                <img src={imgPrefix+actor.profile_path} alt={actor.name} className='w-100'/>
                <h2 className='h6 text-center  py-1' style={{letterSpacing:'1px' , lineHeight:'1.5'}}>{actor.name}</h2>
              </div>
              
          </div>
          </Link>  
        </div> )}
    </div>
   </div>
    </>
  )
}
