import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MediaContext from '../../MediaContext';


export default function ActorDetail() {
    const { id } = useParams();
    const { trendingActors } = useContext(MediaContext);
    const [actor, setActor] = useState(null);
    const [actorWork, setActorWork] = useState([]);
    const imgPrefix = 'https://image.tmdb.org/t/p/w500';

    // console.log(trendingActors[0].known_for)
    console.log(trendingActors)
  
    useEffect(() => {
      const foundActor = trendingActors.find((actor) => actor.id.toString() === id);
        
      if (foundActor) {
        localStorage.setItem('actorDetails', JSON.stringify(foundActor));
        setActor(foundActor);
        setActorWork(foundActor.known_for);
      } else {
        const storedActor = JSON.parse(localStorage.getItem('actorDetails'));
        if (storedActor && storedActor.id.toString() === id) {
          setActor(storedActor);
          setActorWork(storedActor.known_for);
        } else {
          setActor(null); // Set actor to null if not found
          setActorWork([]);
        }
      }
    }, [trendingActors, id]);
  
    if (!actor) {
      return <div>Loading...</div>; // Add a loading state or message
    }

    
  
    return (
    <>
    <div className='w-90 px-4'>
        <div className='row '>
            <div className='col-md-3 mt-5 pt-4 '>
                <div className='actor-img'>
                <img src={imgPrefix+actor.profile_path} alt={actor.name} className='w-100' />
                </div>
            </div>
            <div className='col-md-4 mt-5 pt-4'>
                <div className='actor-info ps-4 pt-5'>
                <h2 className='  text-info text-capitalize py-4'>Name : {actor.name}</h2>
                <h4 className='  text-info text-capitalize py-4'>Type : {actor.known_for_department}</h4>
                <h4 className='  text-info text-capitalize py-4'>orignal name : {actor.original_name}</h4>
                <h4 className='  text-info text-capitalize py-4'>popularity : {actor.popularity} m</h4>
                </div>
            </div>
        </div>
    </div>

    <div className='container'>
        <div className='actor-movies mt-4 pt-4'>
            <h2 className='mb-5 text-center fst-italic text-capitalize fw-bold' style={{letterSpacing:'3px'}}>The most works</h2>

            <div className='row'>
                
            {actorWork.map((movie, index) => (<div key={index} className='col-md-4'>
               

            <div className='movie my-1 px-2 position-relative'>
              <div className='position-absolute top-0 end-0 '>
              < div className="badge text-center text-bg-primary p-2" style={{fontSize:'15px'}}>{movie.vote_average.toFixed(1)}</div>
              </div>

              <div>
                <img src={imgPrefix + movie.poster_path} alt={movie.title} className='w-100 pb-2'/>
                <h2 className='h6 text-center  py-1' style={{letterSpacing:'1px' , lineHeight:'1.5'}}>{movie.title}</h2>
                <p className='text-warning text-capitalize text-center' style={{fontSize:'18px'}} >release Date: {movie.release_date}</p>
              </div>
              
          </div>
          </div>
            ))}                  
            </div>
        </div>
    </div>

   
</>
  )
  }

          