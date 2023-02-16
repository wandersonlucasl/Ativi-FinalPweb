import { useState, useEffect } from "react";

import blogPweb from "../axios/config";


const Imagens = () => {
    const [imagens, setImagens] = useState([]);

  const getImagens = async() => {
    try {
      const response = await blogPweb.get("/photos");

      const data = response.data;

      setImagens(data);
    } catch (error) {
      console.log(error);
    }

  }
  useEffect(() => {
    getImagens();

  }, []);
  return <div className="imagens">
    <h1> Imagens</h1>
    {imagens.length === 0 ? <p>Carregando...</p> : (
      imagens.map((photo) => (
        <div className="photo" key={photo.id}>
          <h2>{photo.title}</h2>
          <p>{photo.url}</p>
          <img src="photo" alt={photo.url} />
        </div>
      ))
    )}
  </div>
};

export default Imagens
