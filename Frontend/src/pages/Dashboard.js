import { useEffect, useState } from "react";
import api from "../services/api";

function Dashboard() {

  const [count, setCount] = useState(0);

  useEffect(() => {
    api.get("users/")
      .then((res) => {
        setCount(res.data.length);
      });
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>

      <h3>Total Users: {count}</h3>
    </div>
  );
}

export default Dashboard;