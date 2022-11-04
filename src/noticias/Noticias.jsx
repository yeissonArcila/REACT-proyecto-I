import React, { useState, useEffect } from "react";
import "./noticias.css";

const Noticias = () => {
  const [noticias, setNoticia] = useState([]);

  const fetchNoticia = async () => {
    const response = await fetch(
      "https://crudcrud.com/api/fa6bb00d93fe44dd8bf20a87f042a11c/news"
    );
    const data = await response.json();
    console.log(data);
    setNoticia(data);
  };
  useEffect(() => {
    fetchNoticia();
  }, []);

  return (
    <div id="noticias" className="caja">
      <h1>Noticias</h1>
      {noticias.map((noti, index) => (
        <div key={index}>
          <section className="section-news">
            <div className="container-news">
              <h1 className="titulo">{noti.title}</h1>
              <p className="texto">{noti.description}</p>
              <div>
                <img src={noti.image} alt="" className="imagen" />
              </div>
            </div>
          </section>
        </div>
      ))}
    </div>
  );
};

export default Noticias;
