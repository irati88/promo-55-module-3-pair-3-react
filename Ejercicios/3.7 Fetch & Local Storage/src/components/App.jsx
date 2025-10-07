import { useState } from "react";

import "../styles/app.css";

const App = () => {
  const [searchValue, setSearchValue] = useState([]);
  const [series, setSeries] = useState("");

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
      <h3>Nombre de la serie elegida: {} </h3>
      <ul>
        {series.map((item, index) => {
          return <li key={index}>{item.name}</li>;
        })}
      </ul>
    </>
  );
};

export default App;
