import React, { useState, useEffect } from "react";
import "./App.css";
import MediaCard from "./Card";
import axios from "axios";

function App() {
  useEffect(() => {
    axios
      .get(
        `https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json`
      )
      .then((res) => {
        const persons = res.data;
        setpersons(persons);
        console.log(persons[0]["Image"]);
      });
  }, []);

  const [persons, setpersons] = useState([{ Image: "" }]);

  return (
    <div>
      {persons.map((item, index) => {
        return <MediaCard person={item} />;
      })}
    </div>
  );
}

export default App;
