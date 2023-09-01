import React, { useState } from "react";
import { updateItem } from "../Modules/ApiService";
import { useLocation } from "react-router-dom";

function EditItem() {
  // react router dom Link component state prop
  let { state } = useLocation();
  const [title, setTitle] = useState(state.title);
  const [status, setStatus] = useState(state.status);

  function handleSubmit() {
    updateItem(state.id, title, status);
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
          checked={status}
          onChange={() => setStatus(!status)}
        />
        <label className="form-check-label" htmlFor="status">
          Done?
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Update Task
      </button>
    </form>
  );
}

export default EditItem;
