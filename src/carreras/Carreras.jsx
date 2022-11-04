import React, { useState, useEffect } from "react";
import "./carreras.css";

export const Carreras = () => {
// const [carrera, setCarrera] = useState([])
  const fetchCarrera = async () => {
    const response = await fetch(
      "https://crudcrud.com/api/9f9d98925f4b4fc9ae436754aed1a5e8/carrers"
    );
    const data = await response.json();
    console.log(data);
    // setCarrera(data);
  };
  useEffect(() => {
    fetchCarrera();
  }, []);

  return (
    <div>
      
    </div>
  );
};
export default Carreras;
