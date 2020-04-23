import React, { useState, useEffect } from "react";
import axios from "axios";
function AddMovie(props) {
  //   const [friend, setFriend] = useState({
  //     id: "",
  //     name: "",
  //     email: "",
  //     age: "",
  //   });
  //   const [loading, setLoading] = useState(false);
  //   const apiURL = "/api/friends";
  //   const addFriend = (e) => {
  //     e.preventDefault();
  //     const data = {
  //       id: Date.now() + Math.random(),
  //       name: friend.name,
  //       email: friend.email,
  //       age: friend.age,
  //     };
  //     axiosWithAuth()
  //       .post(apiURL, data)
  //       .then((res) => {
  //         console.log(res);
  //         props.history.push("/Friends");
  //       });
  //   };
  //   const handleChanges = (e) => {
  //     e.persist();
  //     setFriend({ ...friend, [e.target.name]: e.target.value });
  //   };
  //   return (
  //     <div>
  //       <form onSubmit={addFriend} />
  //       <h1>Add a friend!</h1>
  //       <input
  //         type="text"
  //         name="name"
  //         placeholder="name"
  //         value={friend.name}
  //         onChange={handleChanges}
  //         required
  //       />
  //       <input
  //         type="email"
  //         name="email"
  //         placeholder="email"
  //         value={friend.email}
  //         onChange={handleChanges}
  //       />
  //       <input
  //         type="text"
  //         name="age"
  //         placeholder="age"
  //         value={friend.age}
  //         onChange={handleChanges}
  //       />
  //       <button type="submit" onClick={addFriend}>
  //         Submit
  //       </button>
  //     </div>
  //   );
}

export default AddMovie;
