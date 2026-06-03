import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../services/api";

function EditUser() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [username, setUsername] = useState("");

  useEffect(() => {

    api.get(`users/${id}/`)
      .then((res) => {
        setUsername(res.data.username);
      });

  }, [id]);

  const handleSubmit = (e) => {

    e.preventDefault();

    api.put(`users/${id}/`, {
      username
    })
    .then(() => {
      navigate("/users");
    });

  };

  return (
    <div>

      <h2>Edit User</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          value={username}
          onChange={(e) =>
            setUsername(e.target.value)
          }
        />

        <button type="submit">
          Update User
        </button>

      </form>

    </div>
  );
}

export default EditUser;