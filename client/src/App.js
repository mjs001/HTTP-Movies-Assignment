import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import axios from "axios";
import AddMovie from "./Movies/AddMovie";
import UpdateMovie from "./Movies/UpdateMovie";
const App = () => {
  const [savedList, setSavedList] = useState([]);
  const [movieList, setMovieList] = useState([]);

  const getMovieList = () => {
    axios
      .get("http://localhost:5000/api/movies")
      .then((res) => setMovieList(res.data))
      .catch((err) => console.log(err.response));
  };

  const addToSavedList = (movie) => {
    setSavedList([...savedList, movie]);
  };

  useEffect(() => {
    getMovieList();
  }, [movieList]);

  return (
    <>
      <SavedList list={savedList} />

      <Route exact path="/">
        <MovieList movies={movieList} />
      </Route>
      <Route exact path="/AddMovie">
        <AddMovie AddMovie={AddMovie} />
      </Route>
      <Route
        path="/UpdateMovie/:id"
        render={(props) => {
          return <UpdateMovie {...props} UpdateMovie={UpdateMovie} />;
        }}
      ></Route>
      <Route path="/movies/:id">
        <Movie
          addToSavedList={addToSavedList}
          setMovieList={setMovieList}
          movieList={movieList}
        />
      </Route>
    </>
  );
};

export default App;
