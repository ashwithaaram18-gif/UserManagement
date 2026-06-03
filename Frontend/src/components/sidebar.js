import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div>
      <h2>User Management</h2>

      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>

        <li>
          <Link to="/users">Users</Link>
        </li>

        <li>
          <Link to="/add-user">Add User</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;