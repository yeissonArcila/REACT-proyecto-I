import React, { useState, useEffect } from "react";
import "./noticias.css";

const Noticias = () => {
  const [noticias, setNoticia] = useState([]);

  const fetchNoticia = async () => {
    const response = await fetch(
      "https://crudcrud.com/api/9f9d98925f4b4fc9ae436754aed1a5e8/news"
    );
    const data = await response.json();
    console.log(data);
    setNoticia(data);
  };
  useEffect(() => {
    fetchNoticia();
  }, []);

  return (
    <div id="noticias">
      {noticias.map((noti, index) => (
        <div key={index}>
          <section className="section-news">
            <div className="container-news">
              <h1 className="titulo">{noti.title}</h1>
              <div>
                <img src={noti.image} alt="" className="imagen" />
              </div>
              <div>
                <a href="#">
                  ver mas <p className="texto">{noti.description}</p>
                </a>
              </div>
            </div>
          </section>
        </div>
      ))}
    </div>
  );
};

export default Noticias;
