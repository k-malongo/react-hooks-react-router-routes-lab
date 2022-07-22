import React from "react";
import { movies } from "../data";



function Movies() {
  const movieList = movies.map((data)=>
(
  <div key={data.title}>
    <h3>{data.title}</h3>
    <p>Time : {data.time}</p>
    <ul>
      {data.genres.map((genre)=>(
        <li key={genre}>{genre}</li>
      ))}
    </ul>

  </div>
))
  return <div>
    <h1>Movies Page</h1>
      {movieList}
    </div>;
}

export default Movies;
