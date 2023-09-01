import axios from "axios";
import { useEffect, useState } from "react";

/*
endpoints:
@GET "/api/v1/all"
@POST /api/v1/add
@PUT /api/v1/put/{id}
@DELETE /api/v1/delete/{id}
*/

const URL = "/api/v1";

export function useGetItems([...dependency]) {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  // GET http://localhost:8080/api/v1/all
  useEffect(() => {
    const getItems = async () => {
      try {
        const response = await axios.get(`${URL}/all`);
        setItems(response.data);
      } catch (err) {
        setError(err.message);
      }
    };
    getItems();
  }, [dependency]);

  return { items, error };
}

// @POST /api/v1/add
export function postItems({ title, status }) {
  const formData = new FormData();
  formData.append("title", title);
  formData.append("status", status);
  axios
    .post(`${URL}/add`, formData)
    .then((response) => {
      console.log("Response:", response.data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

// @DELETE /api/v1/delete/{id}
export function deleteItem(id) {
  axios.delete(`${URL}/delete/${id}`);
}

// @PUT /api/v1/put/{id}
export function updateItem(id, title, status) {
  const formData = new FormData();
  formData.append("title", title);
  formData.append("status", status);
  axios.put(`${URL}/put/${id}`, formData);
}
