import React from "react";
import { directors } from "../data";

function Directors() {

  const displayDirectors= directors.map((data)=>(
    <div key={data.name}>
      <h1>{data.name}</h1>
      <ul>
      {data.movies.map((movie)=>(
        <li key={movie}>{movie}</li>
      ))}
      </ul>
    </div>
  ))
  return <div>
    <h1>Directors Page</h1>
    {displayDirectors}
    </div>;
}

export default Directors;
