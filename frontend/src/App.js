import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="container-fluid p-4 bg-success vh-100">
      <h1 className="text-center fw-bold m-4">TODO LIST</h1>
      <Outlet />
    </div>
  );
}

export default App;
