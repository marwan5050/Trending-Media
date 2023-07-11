import React, { useContext, useEffect } from 'react';
import MediaContext from '../../MediaContext';
import { Link } from 'react-router-dom';





export default function Tv() {

  const {trendingTv , setTrendingTv , getMedia , searchResults , searchMedia} = useContext(MediaContext); 

  const imgPrefix = 'https://image.tmdb.org/t/p/w500';


  useEffect(()=> {

  async function fetchData(){

      await getMedia('tv' , setTrendingTv , 20)
    }

    fetchData();

    // // Clear search results when component unmounts
    // return () => {
    //   searchMedia(''); // Clear the search results
    // };

  }, []);



  
  const displayTv = searchResults.tv.length > 0 ? searchResults.tv : trendingTv;
  // const displayTv = searchResults.tv ? searchResults.tv : trendingTv;


  return (
    <>
     <div className='container'>
      <h2 className='text-center fst-italic my-5 py-4 text-capitalize' style={{letterSpacing:'3px'}}>trending series this week</h2>
      <div className='row'>
        

        {displayTv.map((tv , index)=> <div key={index} className='col-md-3'>
        <Link to={`/tv/${tv.id}`}>
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
  </div>
    </>
  )
}
