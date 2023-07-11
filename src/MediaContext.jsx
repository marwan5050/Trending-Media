import { createContext, useState  } from "react";

import axios from "axios";

let MediaContext = createContext([]);


export function MediaContextProvider(props){

 const [trendingMovies , setTrendingMovies] = useState([]);   
 const [trendingTv , setTrendingTv] = useState([]);   
 const [trendingActors , setTrendingActors] = useState([]); 

 const [searchResults, setSearchResults] = useState({ movies: [], tv: [] , actors : [] });

   
// get data from api
async function getMedia(media , callback , num ){


    let {data} = await axios.get(`https://api.themoviedb.org/3/trending/${media}/week?api_key=996182bcb963c6a701f2a4ba679a46c2`);

    // this para to take state method and number of data 
    callback(data.results.slice(0 , num));

 }







function searchMedia(query) {
  if (query.trim() === '') {
    setSearchResults({ movies: [], tv: [], actors : [] });
  } else {
    const filteredMovies = trendingMovies.filter((movie) =>
      movie.title.toLowerCase().includes(query.toLowerCase())
    );

    const filteredTv = trendingTv.filter((tv) =>
      tv.name.toLowerCase().includes(query.toLowerCase())
    );

     const filteredActors = trendingActors.filter(actor =>
      actor.name.toLowerCase().includes(query.toLowerCase())
    );

    setSearchResults({ movies: filteredMovies, tv: filteredTv , actors: filteredActors});
  }
}
 

    return (
        <MediaContext.Provider value={{trendingMovies , trendingTv ,trendingActors ,searchMedia , searchResults ,setTrendingActors ,setTrendingMovies , setTrendingTv , getMedia }}>
            {props.children}
        </MediaContext.Provider>
    )
}


export default MediaContext;