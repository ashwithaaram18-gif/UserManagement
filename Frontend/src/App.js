import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import UserList from "./pages/UserList";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";

function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <Sidebar />

      <Routes>

        <Route
          path="/"
          element={<Dashboard />}
        />

        <Route
          path="/users"
          element={<UserList />}
        />

        <Route
          path="/add-user"
          element={<AddUser />}
        />

        <Route
          path="/edit-user/:id"
          element={<EditUser />}
        />

      </Routes>

    </BrowserRouter>

  );
}

export default App;