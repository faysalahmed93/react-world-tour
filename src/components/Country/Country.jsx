import { useState } from "react";
import "./Country.css";

const Country = ({ country }) => {
  const { name, flags, population, area, cca3 } = country;

  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(!visited);
  };
  console.log(country);
  return (
    <div className={"Country"}>
      <h3>Name {name?.common}</h3>
      <img src={flags.png} alt="" />
      <p>Population: {population}</p>
      <p>Area : {area} </p>
      <p>code : {cca3}</p>
      <button onClick={handleVisited}>{visited ? "visited" : "going"}</button>
    </div>
  );
};

export default Country;
