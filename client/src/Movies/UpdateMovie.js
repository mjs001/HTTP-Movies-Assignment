import React, { useState, useEffect, setState } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import MovieList from "./MovieList";
function UpdateMovie(props) {
  const initialState = {
    title: "",
    director: "",
    metascore: "",
    stars: [],
  };

  const [movie, setMovie] = useState(initialState);
  const { push } = useHistory();
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then((res) => {
        console.log(res);
        setMovie(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const update = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/api/movies/${movie.id}`, movie)
      .then((res) => {
        setMovie(res.data);
        setTimeout(() => {
          props.history.push("/");
        }, 2000);
      });
  };
  const handleChanges = (e) => {
    e.persist();
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };
  const star = (index) => (e) => {
    setMovie({
      ...movie,
      stars: movie.stars.map((star, starIndex) => {
        return starIndex === index ? e.target.value : star;
      }),
    });
  };

  const addStar = (e) => {
    e.preventDefault();
    setMovie({ ...movie, stars: [movie.stars, ""] });
  };
  return (
    <form onSubmit={update}>
      <input
        type="text"
        name="title"
        placeholder="title"
        value={movie.title}
        onChange={handleChanges}
      />
      <input
        type="text"
        name="director"
        placeholder="director"
        value={movie.director}
        onChange={handleChanges}
      />
      <input
        type="text"
        name="metascore"
        placeholder="metascore"
        value={movie.metascore}
        onChange={handleChanges}
      />

      {movie.stars.map((starName, index) => {
        return (
          <input
            type="text"
            name="stars"
            placeholder="stars"
            value={starName}
            onChange={star(index)}
          />
        );
      })}
      <button onClick={addStar}>add star</button>
      <button type="submit" onClick={update}>
        submit
      </button>
    </form>
  );
}
export default UpdateMovie;
