import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import CreateItem from "./Pages/CreateItem";
import NotFound from "./Pages/NotFound";
import DisplayItems from "./Components/DisplayItems";
import EditItem from "./Pages/EditItem";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index="true" element={<DisplayItems />}></Route>
          <Route path="/add" element={<CreateItem />}></Route>
          <Route path="/update" element={<EditItem />}></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
