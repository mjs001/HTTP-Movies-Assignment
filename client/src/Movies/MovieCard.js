import React, { setState } from "react";
import axios from "axios";
const MovieCard = (props, state) => {
  const { title, director, metascore, stars } = props.movie;
  const DeleteMovie = () => {
    axios
      .delete(`http://localhost:5000/api/movies/${props.movie.id}`)
      .then((res) => {
        console.log(res);
        const newMovie = Object.values(props.movie).filter((m) => {
          return `${m.id}` !== res.data;
        });
        props.setMovie(newMovie);
      });
  };

  return (
    <>
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars.map((star) => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>

      <button onClick={UpdateMovie(movie.id)}>edit</button>
      <button onClick={DeleteMovie(props.movie.id)}>X</button>
    </>
  );
};

export default MovieCard;
