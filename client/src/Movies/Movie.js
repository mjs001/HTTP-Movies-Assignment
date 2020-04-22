import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useHistory, Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import UpdateMovie from "./UpdateMovie";
function Movie({ addToSavedList }) {
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
    addToSavedList(movie);
  };

  useEffect(() => {
    fetchMovie(params.id);
  }, [params.id]);

  if (!movie) {
    return <div>Loading movie information...</div>;
  }
  const DeleteMovie = () => {
    axios.delete(`http://localhost:5000/api/movies/${movie.id}`).then((res) => {
      setMovie(res.data);
      push("/");
    });
  };

  return (
    <div className="save-wrapper">
      <MovieCard movie={movie} />

      <div className="save-button" onClick={saveMovie}>
        Save
      </div>
      <Link to={`/`}>
        <div>Update Movie</div>
      </Link>
      <button onClick={DeleteMovie}>X</button>
    </div>
  );
}

export default Movie;
