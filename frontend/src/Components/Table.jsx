import axios from "axios";
import React, { useEffect, useState } from "react";

function Table() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  // GET http://localhost:8080/api/v1/all
  useEffect(() => {
    const getItems = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/v1/all");
        setItems(response.data);
      } catch (err) {
        setError(err.message);
      }
    };
    getItems();
  }, []);

  if (error) return <h1>Network Error {error}</h1>;
  return (
    <div>
      {items.map((item) => {
        return (
          <ul key={item.id}>
            <li>{item.title}</li>
            <li>{`${item.status}`}</li>
          </ul>
        );
      })}
    </div>
  );
}

export default Table;
