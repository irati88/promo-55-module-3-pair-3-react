import { useState, useEffect } from "react";
import getSeriesName from "../services/api";
import "../styles/app.css";


const App = () => {
  const [series, setSeries] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    getSeriesName(searchValue).then((response) => {
        console.log("Buscando:", searchValue);
        console.log("Respuesta:", response);
      setSeries(response);
    });
  }, [searchValue]);

  const handleOnChange = (ev) => {
    setSearchValue(ev.target.value);
  };

  return (
    <>
      <h1>Buscador de series</h1>
      <label htmlFor="name">Buscar el título de una serie </label>
      <input
        name="name"
        id="name"
        value={searchValue}
        onChange={handleOnChange}
      />
      <h3>Nombre de la serie elegida: {searchValue} </h3>
      <ul>
        {series.map((item, index) => {
          return <li key={index}>{item.show.name}</li>;
        })}
      </ul>
    </>
  );
};

export default App;
