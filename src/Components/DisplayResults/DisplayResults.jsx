import React, { useContext } from 'react';
import MediaContext from '../../MediaContext';



export default function DisplayResults() {

    const {searchResults} = useContext(MediaContext);

  return (
    <>
    <h1>show results</h1>
    {searchResults.length > 0 ? (
        <ul>
          {searchResults.map((result) => (
            <li key={result.id}>{result.title}</li>
          ))}
        </ul>
      ) : (
        <p>No movies found.</p>
      )}
    </>
  )
}
