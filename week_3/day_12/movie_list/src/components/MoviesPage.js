import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FileService from "../services/file.service";
import { list, listAll } from "firebase/storage";

export default function MoviesPage() {
  const [images, setImages] = useState([]);

  useEffect(
    () => {
      if (!images.length) {
        onInitialLoad();
      }
    },

    // In the case of an empty array, the function only fires the first time the
    // component initializes

    // If we put a variable reference and that variable changes
    // this function fires again
    []
  );

  async function onInitialLoad() {
    // We try catch here if there is an error
    // We can show that error to the user
    try {
      const image = await FileService.fetchMovie();
      setImages([...images, image]);
    } catch (err) {
      // TODO: handle error correctly
      alert(err.message);
    }
  }

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-end">
        <Link to="/add-movie">Add Movie</Link>
      </div>
      {images.map((url) => {
        return (
          <>
            <div className="row">
              <div className="col">
                <img src={url} />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <button className="btn btn-danger">Delete</button>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}
