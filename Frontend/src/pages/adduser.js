import { useState } from "react";
import api from "../services/api";

function AddUser() {

  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {

    e.preventDefault();

    api.post("users/", {
      username
    })
    .then(() => {

      alert("User Added");

      setUsername("");
    });

  };

  return (
    <div>

      <h2>Add User</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) =>
            setUsername(e.target.value)
          }
        />

        <button type="submit">
          Add User
        </button>

      </form>

    </div>
  );
}

export default AddUser;