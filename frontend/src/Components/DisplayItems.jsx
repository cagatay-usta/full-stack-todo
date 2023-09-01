import React from "react";
import { updateItem, useGetItems, deleteItem } from "../Modules/ApiService";
import Table from "./Table";

function DisplayItems() {
  const handleDelete = (id) => {
    deleteItem(id);
  };

  const handleDone = (item) => {
    updateItem(item.id, item.title, !item.status);
  };

  // handle functions injected as dependency to force a new fetch/render after deletion
  const { items, error } = useGetItems([handleDelete, handleDone]);

  if (error) return <h1>Network Error {error}</h1>;
  return (
    <Table items={items} handleDelete={handleDelete} handleDone={handleDone} />
  );
}

export default DisplayItems;
