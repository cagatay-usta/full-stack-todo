import React from "react";
import { Link } from "react-router-dom";

function Table({ items, handleDelete, handleDone }) {
  return (
    <div>
      <table className="table table-striped table-dark table-hover text-center">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Status</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => {
            return (
              <tr key={item.id}>
                <th scope="row">{index}</th>
                <td
                  className={`${
                    item.status ? "text-decoration-line-through" : ""
                  }`}
                >
                  {item.title}
                </td>
                <td>{item.status ? "Done" : "Not Done"}</td>
                <td>
                  <div className="btn-group btn-group-md">
                    <button
                      type="button"
                      className="btn btn-success "
                      onClick={() => {
                        handleDone(item);
                      }}
                    >
                      DONE
                    </button>
                    <Link
                      to={"/update"}
                      state={item}
                      className="btn btn-warning "
                    >
                      EDIT
                    </Link>
                    <button
                      type="button"
                      className="btn btn-danger "
                      onClick={() => {
                        handleDelete(item.id);
                      }}
                    >
                      DELETE
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="container-fluid text-center">
        <Link to={"/add"} className="btn btn-primary m-4">
          Add New Task
        </Link>
      </div>
    </div>
  );
}

export default Table;
