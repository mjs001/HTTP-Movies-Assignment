import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useHistory, Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import UpdateMovie from "./UpdateMovie";
import MovieList from "./MovieList";
function Movie(props) {
  console.log(props);
  const [movie, setMovie] = useState(null);
  const params = useParams();
  const { push } = useHistory();
  const fetchMovie = (id) => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then((res) => setMovie(res.data))
      .catch((err) => console.log(err.response));
  };

  const saveMovie = () => {
    props.addToSavedList(movie);
  };

  useEffect(() => {
    fetchMovie(params.id);
  }, [params.id]);

  if (!movie) {
    return <div>Loading movie information...</div>;
  }
  const DeleteMovie = () => {
    axios.delete(`http://localhost:5000/api/movies/${movie.id}`).then((res) => {
      const newMovies = props.movieList.filter((v) => `${v.id}` != res.data);

      props.setMovieList(newMovies);
      push("/");
    });
  };

  return (
    <div className="save-wrapper">
      <MovieCard movie={movie} />

      <div className="save-button" onClick={saveMovie}>
        Save
      </div>
      <Link to={`/UpdateMovie/${movie.id}`}>
        <div>Update Movie</div>
      </Link>
      <button onClick={DeleteMovie}>X</button>
    </div>
  );
}

export default Movie;
