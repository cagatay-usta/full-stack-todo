import React, { useState } from "react";
import { postItems } from "../Modules/ApiService";

function CreateItem() {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState(false);

  function handleSubmit() {
    postItems({ title, status });
  }

  return (
    <form
      action="/"
      className="container w-50 bg-dark text-white p-5"
      onSubmit={() => handleSubmit()}
    >
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          value={title}
          minLength="5"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="status"
          onChange={() => setStatus(!status)}
        />
        <label className="form-check-label" htmlFor="status">
          Done?
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Add Task
      </button>
    </form>
  );
}

export default CreateItem;
