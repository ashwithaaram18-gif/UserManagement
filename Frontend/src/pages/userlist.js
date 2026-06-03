import { useEffect, useState } from "react";
import api from "../services/api";
import { Link } from "react-router-dom";

function UserList() {

  const [users, setUsers] = useState([]);

  const fetchUsers = () => {
    api.get("users/")
      .then((res) => {
        setUsers(res.data);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const deleteUser = (id) => {
    api.delete(`users/${id}/`)
      .then(() => {
        fetchUsers();
      });
  };

  return (
    <div>

      <h2>User List</h2>

      <table border="1">

        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>

          {users.map((user) => (

            <tr key={user.id}>

              <td>{user.id}</td>

              <td>{user.username}</td>

              <td>

                <Link to={`/edit-user/${user.id}`}>
                  Edit
                </Link>

                {" | "}

                <button
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default UserList;