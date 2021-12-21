import "./App.css";
import { ImVideoCamera } from "react-icons/im";
import { BiSearchAlt } from "react-icons/bi";
import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Movie from "./Movie";
function App() {
  const [query, setquery] = useState("");
  const [data, setdata] = useState([]);
  const [fst, setfst] = useState(true);
  const [load, setload] = useState(false);
  const input = useRef();

  useEffect(() => {
    input.current.focus();
    if (fst) {
      setfst(false);
      return;
    }
    const fetching = async () => {
      setload(true);
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=064948ef697af8f7b2675989e99f9430&language=en-US&query=${query}&page=1&include_adult=false`
      );
      const data = await res.json();
      setload(false);
      if (data.results.length > 0) {
        setdata(data.results);
      }
    };
    fetching();
  }, [query]);
  console.log(data);
  return (
    <div className="App">
      <div className="navbar">
        <ImVideoCamera /> Movies DB Search
      </div>
      <div className="input mb-5">
        <input
          type="text"
          placeholder="Search For Your Move"
          value={query}
          ref={input}
          onChange={(e) => {
            setquery(e.target.value);
          }}
        />
        <BiSearchAlt />
      </div>
      <div className="movies">
        {load && <h1 style={{ textAlign: "center" }}>Loading ...</h1>}
        {data.length > 0 &&
          data.map((item) => <Movie key={item.id} data={item} />)}
        {!data.length > 0 && (
          <h1 className="text-center novodeo">No Video Yet!!</h1>
        )}
      </div>
    </div>
  );
}

export default App;
